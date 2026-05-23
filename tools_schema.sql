-- Run in Supabase SQL Editor

-- Points expiry reminders
CREATE TABLE expiry_reminders (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  email text NOT NULL,
  card_name text NOT NULL,
  points_balance integer DEFAULT 0,
  accrual_date date NOT NULL,
  expiry_months integer DEFAULT 36,
  note text,
  reminder_sent boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE expiry_reminders ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can set expiry reminder"
  ON expiry_reminders FOR INSERT WITH CHECK (true);
CREATE POLICY "Only authenticated users can read reminders"
  ON expiry_reminders FOR SELECT USING (auth.role() = 'authenticated');

-- Push notification subscriptions
CREATE TABLE push_subscriptions (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  subscription text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE push_subscriptions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can subscribe to push"
  ON push_subscriptions FOR INSERT WITH CHECK (true);
CREATE POLICY "Only authenticated users can read subscriptions"
  ON push_subscriptions FOR SELECT USING (auth.role() = 'authenticated');
