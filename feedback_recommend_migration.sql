-- ============================================================
-- Feedback table setup + "recommend" signal
-- Run this in the Supabase SQL editor (Primary Database).
-- Idempotent: safe whether the table exists or not.
-- ============================================================

-- 1. Create the feedback table if it doesn't exist yet.
--    (The widget writes here: page_slug, page_title, rating, recommend, comment.)
CREATE TABLE IF NOT EXISTS feedback (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  page_slug text NOT NULL,
  page_title text,
  rating text CHECK (rating IN ('up', 'down')),
  recommend text CHECK (recommend IN ('no', 'maybe', 'yes')),
  comment text,
  created_at timestamptz DEFAULT now()
);

-- 2. If the table already existed WITHOUT the recommend column, add it.
ALTER TABLE feedback
  ADD COLUMN IF NOT EXISTS recommend text;

-- 3. Ensure the recommend CHECK constraint exists (add only if missing).
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'feedback_recommend_check'
  ) THEN
    ALTER TABLE feedback
      ADD CONSTRAINT feedback_recommend_check
      CHECK (recommend IN ('no', 'maybe', 'yes'));
  END IF;
END $$;

-- 4. Row Level Security: anyone can submit, only signed-in users can read.
ALTER TABLE feedback ENABLE ROW LEVEL SECURITY;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'feedback' AND policyname = 'Anyone can submit feedback'
  ) THEN
    CREATE POLICY "Anyone can submit feedback"
      ON feedback FOR INSERT WITH CHECK (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'feedback' AND policyname = 'Only authenticated users can read feedback'
  ) THEN
    CREATE POLICY "Only authenticated users can read feedback"
      ON feedback FOR SELECT USING (auth.role() = 'authenticated');
  END IF;
END $$;

-- 5. Indexes for the dashboard.
CREATE INDEX IF NOT EXISTS idx_feedback_created_at ON feedback (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_feedback_recommend ON feedback (recommend);

-- Done. Verify with:  SELECT * FROM feedback ORDER BY created_at DESC LIMIT 10;
