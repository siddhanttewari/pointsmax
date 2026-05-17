-- PointsMax Database Schema
-- Run this in Supabase SQL Editor

-- 1. CARDS TABLE
CREATE TABLE public.cards (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL, -- e.g. 'hdfc_infinia'
  name TEXT NOT NULL, -- e.g. 'HDFC Infinia'
  bank TEXT NOT NULL, -- e.g. 'HDFC'
  tier TEXT NOT NULL, -- 'Super Premium', 'Premium', 'Mid', 'Entry', 'LTF'
  point_name TEXT NOT NULL, -- e.g. 'Reward Points'
  earn_rate TEXT NOT NULL, -- e.g. '5 RP / ₹150'
  annual_fee TEXT DEFAULT '', -- e.g. '₹12,500 (waived on ₹10L spend)'
  has_transfers BOOLEAN DEFAULT FALSE,
  is_active BOOLEAN DEFAULT TRUE,
  display_order INT DEFAULT 100,
  seo_title TEXT DEFAULT '',
  seo_description TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 2. REDEMPTIONS TABLE
CREATE TABLE public.redemptions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  card_slug TEXT NOT NULL REFERENCES public.cards(slug) ON DELETE CASCADE,
  method TEXT NOT NULL, -- e.g. 'SmartBuy Flights/Hotels'
  value_per_point DECIMAL(10,4) NOT NULL, -- e.g. 1.0000 = ₹1/point
  rank INT NOT NULL DEFAULT 1, -- 1=Best, 2=Good, 3=Okay, 4=Avoid
  tip TEXT DEFAULT '', -- e.g. 'Best value — book via SmartBuy'
  icon TEXT DEFAULT '💳',
  is_active BOOLEAN DEFAULT TRUE,
  display_order INT DEFAULT 100,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 3. TRANSFER PARTNERS TABLE
CREATE TABLE public.transfer_partners (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  card_slug TEXT NOT NULL REFERENCES public.cards(slug) ON DELETE CASCADE,
  partner_name TEXT NOT NULL, -- e.g. 'Singapore Airlines KrisFlyer'
  partner_type TEXT NOT NULL CHECK (partner_type IN ('airline', 'hotel')),
  alliance TEXT DEFAULT '', -- 'Star Alliance', 'Oneworld', 'SkyTeam', 'None', 'LCC', 'Multi'
  country_icon TEXT DEFAULT '🌍',
  transfer_ratio TEXT NOT NULL, -- e.g. '2:1' (card points : partner points)
  effective_value DECIMAL(10,4) NOT NULL, -- ₹ value per card point after transfer
  note TEXT DEFAULT '',
  is_best BOOLEAN DEFAULT FALSE, -- highlight as recommended
  is_devalued BOOLEAN DEFAULT FALSE, -- flag recent devaluations
  is_active BOOLEAN DEFAULT TRUE,
  display_order INT DEFAULT 100,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 4. USER PROFILES (extends Supabase Auth)
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  full_name TEXT,
  avatar_url TEXT,
  saved_cards TEXT[] DEFAULT '{}', -- array of card slugs
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 5. PAGE VIEWS / ANALYTICS (lightweight)
CREATE TABLE public.page_views (
  id BIGSERIAL PRIMARY KEY,
  card_slug TEXT,
  page_path TEXT,
  user_id UUID REFERENCES auth.users(id),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- INDEXES
CREATE INDEX idx_redemptions_card ON public.redemptions(card_slug);
CREATE INDEX idx_transfers_card ON public.transfer_partners(card_slug);
CREATE INDEX idx_cards_bank ON public.cards(bank);
CREATE INDEX idx_cards_active ON public.cards(is_active);
CREATE INDEX idx_page_views_date ON public.page_views(created_at);

-- AUTO-UPDATE updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER cards_updated_at BEFORE UPDATE ON public.cards
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER redemptions_updated_at BEFORE UPDATE ON public.redemptions
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER transfers_updated_at BEFORE UPDATE ON public.transfer_partners
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER profiles_updated_at BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ROW LEVEL SECURITY
ALTER TABLE public.cards ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.redemptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.transfer_partners ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.page_views ENABLE ROW LEVEL SECURITY;

-- Cards, redemptions, transfers: public read, admin write
CREATE POLICY "Cards are publicly readable" ON public.cards FOR SELECT USING (true);
CREATE POLICY "Redemptions are publicly readable" ON public.redemptions FOR SELECT USING (true);
CREATE POLICY "Transfers publicly readable" ON public.transfer_partners FOR SELECT USING (true);

-- Profiles: users can read/update their own
CREATE POLICY "Users can read own profile" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can insert own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);

-- Page views: anyone can insert, only owner reads
CREATE POLICY "Anyone can log page view" ON public.page_views FOR INSERT WITH CHECK (true);
CREATE POLICY "Users can read own views" ON public.page_views FOR SELECT USING (auth.uid() = user_id);

-- AUTO-CREATE PROFILE ON SIGNUP
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, avatar_url)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data ->> 'full_name',
    NEW.raw_user_meta_data ->> 'avatar_url'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
