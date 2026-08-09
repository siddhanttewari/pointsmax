-- ============================================================
-- Leads table — email capture for the cheat-sheet lead magnet
-- Run in the Supabase SQL editor. Idempotent.
-- ============================================================

CREATE TABLE IF NOT EXISTS leads (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  email text NOT NULL,
  source text,               -- which magnet/page captured them (e.g. 'cheat-sheet')
  created_at timestamptz DEFAULT now()
);

-- Prevent duplicate emails from the same source piling up
CREATE UNIQUE INDEX IF NOT EXISTS idx_leads_email_source ON leads (email, source);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads (created_at DESC);

-- RLS: anyone can submit (insert), only authenticated/service-role can read.
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'leads' AND policyname = 'Anyone can submit a lead'
  ) THEN
    CREATE POLICY "Anyone can submit a lead"
      ON leads FOR INSERT WITH CHECK (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'leads' AND policyname = 'Only authenticated users can read leads'
  ) THEN
    CREATE POLICY "Only authenticated users can read leads"
      ON leads FOR SELECT USING (auth.role() = 'authenticated');
  END IF;
END $$;

-- Verify:  SELECT COUNT(*), source FROM leads GROUP BY source;
