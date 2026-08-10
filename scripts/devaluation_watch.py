#!/usr/bin/env python3
"""
PointsMax Devaluation Watch
===========================
Monitors the key Indian credit-card news sources and flags posts that look
like devaluations / reward changes — so you hear about them fast, from the
primary sources, instead of "via via" on Instagram days later.

HOW IT WORKS
  - Pulls recent posts from each source (RSS)
  - Flags any whose title/summary contains devaluation-related keywords
    AND names a card issuer/programme (or explicitly says "devaluation")
  - Remembers what it has already seen (seen.json) so you only get NEW hits
  - Prints a report; optionally sends it to a webhook (Slack/Discord/Telegram)

USAGE
  python3 scripts/devaluation_watch.py                 # print new hits only
  python3 scripts/devaluation_watch.py --all           # print all recent matches
  WEBHOOK_URL=https://... python3 scripts/devaluation_watch.py   # also POST to webhook

SETUP
  pip install feedparser requests

SCHEDULE IT (so it runs on its own)
  - cron (daily 9am):
      0 9 * * *  cd /path/to/pointsmax && python3 scripts/devaluation_watch.py
  - or GitHub Actions on a schedule (see scripts/devaluation-watch.yml.example)

HONEST LIMITS
  - This finds PUBLIC reporting fast; it can't see Amex/HDFC internal emails
    before they're reported. The fastest primary source is still holding the
    cards yourself and reading the cardholder emails.
  - If a source stops returning hits, its feed URL may have changed — RSS is
    the most robust; verify the URLs below occasionally.
"""

import json
import os
import sys
import re
from datetime import datetime, timezone
from pathlib import Path

import requests

try:
    import feedparser
    HAVE_FEEDPARSER = True
except ImportError:
    HAVE_FEEDPARSER = False

# ── Sources (RSS) ────────────────────────────────────────────────────────
RSS_SOURCES = {
    "Live From A Lounge": "https://livefromalounge.com/feed/",
    "CardExpert": "https://cardexpert.in/feed/",
    "TechnoFino": "https://www.technofino.in/feed",
}

# ── Keywords that suggest a devaluation / reward change ──────────────────
KEYWORDS = [
    "devaluation", "devalued", "milestone", "reward rate", "reward points",
    "cut", "reduced", "removed", "capped", "cap on", "nerf", "downgrade",
    "transfer partner", "transfer ratio", "no longer", "discontinued",
    "revised", "changes to", "lounge access", "annual fee",
    "earning cap", "points expiry", "smartbuy", "membership rewards",
]

# Card issuers / programmes worth always surfacing
ISSUERS = [
    "hdfc", "axis", "sbi", "icici", "amex", "american express", "hsbc",
    "idfc", "au bank", "rbl", "yes bank", "standard chartered", "kotak",
    "infinia", "magnus", "atlas", "smartbuy", "krisflyer", "avios", "marriott",
]

SEEN_FILE = Path(__file__).parent / "seen.json"
UA = {"User-Agent": "Mozilla/5.0 (PointsMax devaluation-watch; +https://pointsmax.in)"}


def load_seen():
    if SEEN_FILE.exists():
        try:
            return set(json.loads(SEEN_FILE.read_text()))
        except Exception:
            return set()
    return set()


def save_seen(seen):
    SEEN_FILE.write_text(json.dumps(sorted(seen)))


def score_entry(title, summary):
    """Return (is_relevant, matched_keywords, mentioned_issuers)."""
    text = f"{title} {summary}".lower()
    kw = [k for k in KEYWORDS if k in text]
    iss = [i for i in ISSUERS if i in text]
    relevant = ("devaluation" in text) or (len(kw) >= 1 and len(iss) >= 1)
    return relevant, kw, iss


def fetch_rss(name, url):
    out = []
    if not HAVE_FEEDPARSER:
        return out
    try:
        feed = feedparser.parse(url, request_headers=UA)
        for e in feed.entries[:15]:
            title = getattr(e, "title", "")
            summary = re.sub("<[^<]+?>", "", getattr(e, "summary", ""))[:400]
            link = getattr(e, "link", "")
            published = getattr(e, "published", "") or getattr(e, "updated", "")
            out.append({"source": name, "title": title, "summary": summary,
                        "link": link, "published": published})
    except Exception as ex:
        print(f"  ! {name}: fetch error ({ex})", file=sys.stderr)
    return out


def notify_webhook(url, lines):
    try:
        requests.post(url, json={"text": "\n".join(lines)}, timeout=10)
    except Exception as ex:
        print(f"  ! webhook error: {ex}", file=sys.stderr)


def main():
    show_all = "--all" in sys.argv
    if not HAVE_FEEDPARSER:
        print("Missing dependency. Run:  pip install feedparser requests", file=sys.stderr)
        sys.exit(1)

    seen = load_seen()
    webhook = os.environ.get("WEBHOOK_URL")

    all_entries = []
    for name, url in RSS_SOURCES.items():
        all_entries.extend(fetch_rss(name, url))

    hits = []
    for e in all_entries:
        relevant, kw, iss = score_entry(e["title"], e["summary"])
        if not relevant:
            continue
        key = e["link"] or e["title"]
        is_new = key not in seen
        if is_new or show_all:
            e["_kw"], e["_iss"], e["_new"] = kw, iss, is_new
            hits.append(e)
        seen.add(key)

    save_seen(seen)

    stamp = datetime.now(timezone.utc).astimezone().strftime("%Y-%m-%d %H:%M")
    header = f"PointsMax Devaluation Watch - {stamp}"
    if not hits:
        print(header)
        print("   No new devaluation-related posts found. (All quiet.)")
        return

    lines = [header, ""]
    for e in hits:
        tag = "[NEW]" if e["_new"] else "     "
        lines.append(f"{tag} [{e['source']}] {e['title']}")
        if e["_iss"]:
            lines.append(f"      issuers: {', '.join(sorted(set(e['_iss'])))}")
        if e["published"]:
            lines.append(f"      {e['published']}")
        lines.append(f"      {e['link']}")
        lines.append("")

    report = "\n".join(lines)
    print(report)

    if webhook:
        notify_webhook(webhook, lines)
        print("(sent to webhook)")


if __name__ == "__main__":
    main()
