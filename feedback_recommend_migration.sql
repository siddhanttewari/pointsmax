-- ============================================================
-- Migration: add "recommend" signal to feedback
-- Run this in the Supabase SQL editor.
-- Safe to run once; uses IF NOT EXISTS.
-- ============================================================

-- Add a recommend column: 'no' | 'maybe' | 'yes' (nullable — older rows won't have it)
ALTER TABLE feedback
  ADD COLUMN IF NOT EXISTS recommend text
  CHECK (recommend IN ('no', 'maybe', 'yes'));

-- Optional: index for faster dashboard aggregation as volume grows
CREATE INDEX IF NOT EXISTS idx_feedback_created_at ON feedback (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_feedback_recommend ON feedback (recommend);

-- Existing RLS policies already cover this column:
--   "Anyone can submit feedback"  (INSERT WITH CHECK true)
--   "Only authenticated users can read feedback" (SELECT auth.role() = 'authenticated')
-- No policy changes needed.
