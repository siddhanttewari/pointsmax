#!/usr/bin/env python3
"""
PointsMax Card News Watch
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
# ── Categorised keywords (Tier 1: "something changed" news) ──────────────
# Each category has a tag shown in the alert. Order matters: first match wins
# for the primary tag, but all matched categories are listed.
CATEGORIES = {
    "DEVALUATION": [
        "devaluation", "devalued", "nerf", "downgrade", "cut", "reduced",
        "removed", "capped", "cap on", "no longer", "discontinued", "scrapped",
        "reward rate cut", "earning cap", "reduces", "slashed", "withdrawn",
    ],
    "LAUNCH": [
        "launches", "launched", "launch", "new credit card", "unveiled",
        "introduces", "introduced", "debuts", "rolls out", "now live",
        "goes live", "new card", "announces new",
    ],
    "UPGRADE": [
        "upgrade", "upgraded", "enhanced", "improved", "boosted", "increases",
        "increased", "now offers", "added benefit", "better rewards",
        "revamped", "refreshed", "more rewards",
    ],
    "OFFER": [
        "welcome offer", "welcome benefit", "milestone", "bonus points",
        "sign-up bonus", "signup bonus", "joining bonus", "milestone benefit",
        "revised milestone", "spend-based",
    ],
    "TRANSFER": [
        "transfer partner", "transfer ratio", "new partner", "airline partner",
        "hotel partner", "points transfer", "1:1 transfer", "transfer bonus",
        "added as a transfer", "transfer program",
    ],
    "CHANGE": [
        "revised", "changes to", "change in", "updated", "new terms",
        "effective from", "w.e.f", "with effect from", "important update",
        "annual fee", "fee change", "lounge access", "points expiry",
    ],
}

# Flatten for quick "any keyword at all" checks
ALL_KEYWORDS = sorted({kw for kws in CATEGORIES.values() for kw in kws})

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
    """Return (is_relevant, category_tags, mentioned_issuers).

    Relevant if it names a card issuer/programme AND matches at least one
    Tier-1 news category — OR explicitly says 'devaluation'. Returns the list
    of matched category tags (e.g. ['LAUNCH', 'OFFER']) so alerts can be tagged.
    """
    text = f"{title} {summary}".lower()
    iss = [i for i in ISSUERS if i in text]

    tags = []
    for cat, kws in CATEGORIES.items():
        if any(k in text for k in kws):
            tags.append(cat)

    # Must mention an issuer/programme to count (kills generic finance noise),
    # except an explicit "devaluation" always counts.
    explicit = "devaluation" in text
    relevant = explicit or (bool(tags) and bool(iss))
    if explicit and "DEVALUATION" not in tags:
        tags.insert(0, "DEVALUATION")
    return relevant, tags, iss


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


def notify_telegram(token, chat_id, lines):
    """Send the report to a Telegram chat via the Bot API."""
    text = "\n".join(lines)
    # Telegram caps messages at 4096 chars; chunk if needed.
    for i in range(0, len(text), 3800):
        chunk = text[i:i + 3800]
        try:
            requests.post(
                f"https://api.telegram.org/bot{token}/sendMessage",
                json={"chat_id": chat_id, "text": chunk, "disable_web_page_preview": True},
                timeout=10,
            )
        except Exception as ex:
            print(f"  ! telegram error: {ex}", file=sys.stderr)


def main():
    show_all = "--all" in sys.argv
    test_mode = "--test" in sys.argv
    if not HAVE_FEEDPARSER:
        print("Missing dependency. Run:  pip install feedparser requests", file=sys.stderr)
        sys.exit(1)

    seen = load_seen()
    webhook = os.environ.get("WEBHOOK_URL")
    tg_token = os.environ.get("TELEGRAM_TOKEN")
    tg_chat = os.environ.get("TELEGRAM_CHAT_ID")

    # ── TEST MODE: verify Telegram delivery end-to-end, bypass all news logic ──
    if test_mode:
        print("=== TEST MODE ===")
        print(f"TELEGRAM_TOKEN present: {bool(tg_token)}"
              + (f" (…{tg_token[-6:]})" if tg_token else " — MISSING"))
        print(f"TELEGRAM_CHAT_ID present: {bool(tg_chat)}"
              + (f" ({tg_chat})" if tg_chat else " — MISSING"))
        if not (tg_token and tg_chat):
            print("Cannot send test — one or both secrets are missing. "
                  "Check repo Settings > Secrets > Actions for TELEGRAM_TOKEN and TELEGRAM_CHAT_ID.")
            sys.exit(1)
        try:
            r = requests.post(
                f"https://api.telegram.org/bot{tg_token}/sendMessage",
                json={"chat_id": tg_chat,
                      "text": "✅ PointsMax Card News Watch test message — if you can read this, alerts are working!"},
                timeout=10,
            )
            print(f"Telegram API HTTP status: {r.status_code}")
            print(f"Telegram API response: {r.text[:400]}")
            if r.status_code == 200 and '"ok":true' in r.text:
                print("SUCCESS — test message delivered. Alerts will reach you.")
            else:
                print("FAILED — read the response above. Common causes: wrong token, "
                      "wrong chat_id, or you haven't sent the bot a message from THIS account first.")
        except Exception as ex:
            print(f"Network/error sending test: {ex}")
        return

    all_entries = []
    for name, url in RSS_SOURCES.items():
        all_entries.extend(fetch_rss(name, url))

    hits = []
    for e in all_entries:
        relevant, tags, iss = score_entry(e["title"], e["summary"])
        if not relevant:
            continue
        key = e["link"] or e["title"]
        is_new = key not in seen
        if is_new or show_all:
            e["_tags"], e["_iss"], e["_new"] = tags, iss, is_new
            hits.append(e)
        seen.add(key)

    save_seen(seen)

    stamp = datetime.now(timezone.utc).astimezone().strftime("%Y-%m-%d %H:%M")
    header = f"PointsMax Card News Watch - {stamp}"
    if not hits:
        print(header)
        print("   No new relevant card news found. (All quiet.)")
        # Deliberately do NOT ping Telegram on quiet days — no daily spam.
        return

    lines = [header, ""]
    for e in hits:
        newflag = "[NEW] " if e["_new"] else ""
        tagstr = " ".join(f"[{t}]" for t in e["_tags"]) or "[CARD NEWS]"
        lines.append(f"{newflag}{tagstr} {e['title']}")
        meta = []
        if e["_iss"]:
            meta.append(", ".join(sorted(set(e["_iss"]))))
        meta.append(e["source"])
        lines.append(f"      {' · '.join(meta)}")
        if e["published"]:
            lines.append(f"      {e['published']}")
        lines.append(f"      {e['link']}")
        lines.append("")

    report = "\n".join(lines)
    print(report)

    if webhook:
        notify_webhook(webhook, lines)
        print("(sent to webhook)")

    if tg_token and tg_chat:
        notify_telegram(tg_token, tg_chat, lines)
        print("(sent to Telegram)")


if __name__ == "__main__":
    main()
