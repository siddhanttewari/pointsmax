# Devaluation Watch

Monitors India credit-card news sources and flags likely devaluations, so you
hear about reward changes fast — from primary sources — instead of stumbling on
them "via via" on Instagram.

## Quick start

```bash
pip install feedparser requests
python3 scripts/devaluation_watch.py          # new hits since last run
python3 scripts/devaluation_watch.py --all    # all recent matches
```

## Get pinged automatically

Pass a Slack/Discord/Telegram incoming-webhook URL and it posts new hits there:

```bash
WEBHOOK_URL="https://hooks.slack.com/services/XXX" python3 scripts/devaluation_watch.py
```

## Run it on a schedule (hands-off)

**Option A — cron on any always-on machine:**
```
0 9 * * *  cd /path/to/pointsmax && python3 scripts/devaluation_watch.py
```

**Option B — GitHub Actions (no server needed):**
Move `devaluation-watch.yml.example` to `.github/workflows/devaluation-watch.yml`,
add a `WEBHOOK_URL` repo secret, and it runs daily and pings you.

## What it watches

Live From A Lounge, CardExpert, TechnoFino (RSS). Add more sources in
`RSS_SOURCES` inside `devaluation_watch.py`.

## Honest limits

- It surfaces **public reporting** fast — it can't see bank internal emails
  before they're reported anywhere. The single fastest source is still holding
  the major cards yourself and reading the cardholder emails as they arrive.
- `seen.json` remembers what's already been reported so you don't get repeat
  alerts. Delete it to reset.
- If a source goes quiet, check its feed URL still resolves — sites change them.
