# PointsMax Blog Content Engine
# ================================
# Usage: Tell Claude "write the next blog" or "publish next pointsmax blog"
# Claude will: pick next topic → research → write → create file → update sitemap + blog listing → git push

## TOPIC QUEUE (pick next unchecked topic)
# Research trending queries before writing. Prioritize by: search volume × content gap × tool relevance

- [x] Blog 1: What are your credit card points actually worth in 2026? (PUBLISHED)
- [x] Blog 2: Best credit cards India 2026 by spend level (PUBLISHED)
- [x] Blog 3: HDFC SmartBuy complete guide (PUBLISHED)
- [ ] Blog 4: Airline miles transfer guide India — which cards, which airlines, what ratios
- [ ] Blog 5: Credit card devaluation timeline India 2024-2026 — every change, every bank
- [ ] Blog 6: Best lifetime free credit cards India 2026 — the no-annual-fee portfolio
- [ ] Blog 7: UPI credit card India 2026 — RuPay, rewards, and whether it's worth linking
- [ ] Blog 8: Credit card annual fee — when to pay, when to switch, the math
- [ ] Blog 9: Amazon Pay ICICI vs SBI Cashback vs Flipkart Axis — the 5% cashback showdown
- [ ] Blog 10: Axis Magnus/Atlas after April 2026 — is it still worth the fee?
- [ ] Blog 11: HDFC Infinia vs Diners Club Black — which one to pick and why
- [ ] Blog 12: How to calculate credit card reward rate — the formula most people get wrong
- [ ] Blog 13: Airport lounge access India 2026 — which cards, which lounges, what changed
- [ ] Blog 14: Credit card for international travel India — forex markup, global lounge, travel insurance
- [ ] Blog 15: IndusInd Tiger vs Equitas Powermiles — the dark horse cards of 2026

## VOICE & STYLE GUIDE

### Tone
- First person plural ("we found", "here's what we see") or direct address ("your points", "you're leaving money")
- Opinionated — take a stance. "The catalogue is a trap." Not "some users may prefer the catalogue."
- Specific — always use actual rupee values, not vague "good value"
- Conversational — like explaining to a smart friend over chai, not writing a bank brochure
- Short paragraphs — 2-3 sentences max. Break often.
- No corporate fluff — no "in today's dynamic landscape" or "leveraging synergies"

### Structure Rules
1. HOOK (first 100 words): Start with a surprising number, a pain point, or a "wait, what?" moment
2. ANSWER FIRST: Every H2 should be a question people actually search. Answer within 40 words immediately.
3. TABLES > WALLS OF TEXT: Use comparison tables for any card-vs-card or value-per-point data
4. MISTAKE BOXES: Use colored callout boxes for common mistakes (red-tinted background)
5. THE PLAY: After each bank/card section, give a one-line "The play: do X, not Y"
6. MID-ARTICLE CTA: After the 3rd major section, insert a dark-bg CTA driving to the calculator
7. STICKY BAR: Every blog post gets the sticky bottom CTA bar (client component)
8. INTERNAL LINKS: Link to the calculator (/) at least 3 times naturally
9. NO AI TELLS: No "in conclusion", "it's worth noting", "let's dive in", "without further ado", "in the realm of"

### SEO/AEO Requirements
- metadata export in layout.js: title, description, 10 keywords, canonical URL, OG, Twitter card
- Article JSON-LD + FAQPage JSON-LD (2-3 questions)
- H2s are question-based, matching real search queries
- Answer within first 40 words of each section
- All bank names, card names, point values, program names stated explicitly (entity coverage)
- Internal link to / (calculator) and other blog posts

### Technical
- File: app/blog/{slug}/page.js (client component for sticky bar)
- Layout: app/blog/{slug}/layout.js (server component for metadata)
- Update: app/blog/page.js (add to posts array)
- Update: public/sitemap.xml (add URL)
- Update: public/llms.txt (add to pages list)
- Git push → Vercel auto-deploys

### Formatting
- Blog post page uses warm cream theme (var(--bg), var(--text), var(--gold), var(--green), var(--red))
- Playfair Display for headings, DM Sans for body
- Table with green best / red worst columns
- Callout boxes: green (#EDF5F0) for tips, red (#FDF1EF) for mistakes, blue (#ECFEFF) for pro tips
- Dark CTA cards (var(--dark) bg, gold button)
