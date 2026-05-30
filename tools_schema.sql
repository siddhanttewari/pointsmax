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

-- Feedback table
CREATE TABLE feedback (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  page_slug text NOT NULL,
  page_title text,
  rating text CHECK (rating IN ('up', 'down')),
  comment text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE feedback ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit feedback"
  ON feedback FOR INSERT WITH CHECK (true);
CREATE POLICY "Only authenticated users can read feedback"
  ON feedback FOR SELECT USING (auth.role() = 'authenticated');

-- Site search queries
CREATE TABLE search_queries (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  query text NOT NULL,
  results_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);
ALTER TABLE search_queries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can log search" ON search_queries FOR INSERT WITH CHECK (true);
CREATE POLICY "Auth users can read searches" ON search_queries FOR SELECT USING (auth.role() = 'authenticated');

-- Chatbot conversations
CREATE TABLE chat_conversations (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id text NOT NULL,
  user_message text NOT NULL,
  bot_response text NOT NULL,
  matched_intent text,
  page_url text,
  created_at timestamptz DEFAULT now()
);
ALTER TABLE chat_conversations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can log chat" ON chat_conversations FOR INSERT WITH CHECK (true);
CREATE POLICY "Auth users can read chats" ON chat_conversations FOR SELECT USING (auth.role() = 'authenticated');
