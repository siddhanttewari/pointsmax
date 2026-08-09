#!/usr/bin/env python3
"""Generate the PointsMax 'Points Maximisation Cheat Sheet' lead-magnet PDF."""
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.pdfgen import canvas
from reportlab.lib.utils import simpleSplit

# Brand palette
GOLD = colors.HexColor('#B8953E')
DARK = colors.HexColor('#1A1614')
GREEN = colors.HexColor('#2D6A4F')
RED = colors.HexColor('#C53030')
TEXT = colors.HexColor('#2A2420')
TEXTM = colors.HexColor('#8A8178')
CARD = colors.HexColor('#FAF8F5')
BORDER = colors.HexColor('#E5E0D8')

W, H = A4
M = 16 * mm  # margin

def new_page(c):
    # background
    c.setFillColor(colors.HexColor('#FFFDFB'))
    c.rect(0, 0, W, H, fill=1, stroke=0)

def header(c, title, subtitle):
    # Dark header band
    c.setFillColor(DARK)
    c.rect(0, H - 34*mm, W, 34*mm, fill=1, stroke=0)
    # Logo mark: gold square + pulse
    c.setFillColor(GOLD)
    c.roundRect(M, H - 24*mm, 9*mm, 9*mm, 2*mm, fill=1, stroke=0)
    c.setStrokeColor(DARK); c.setLineWidth(1.3)
    y0 = H - 19.5*mm
    c.line(M+1.6*mm, y0, M+3*mm, y0)
    c.line(M+3*mm, y0, M+4*mm, y0+2.4*mm)
    c.line(M+4*mm, y0+2.4*mm, M+5*mm, y0-2.4*mm)
    c.line(M+5*mm, y0-2.4*mm, M+6*mm, y0)
    c.line(M+6*mm, y0, M+7.4*mm, y0)
    # Wordmark
    c.setFillColor(CARD)
    c.setFont('Helvetica-Bold', 15)
    c.drawString(M + 12*mm, H - 21*mm, 'PointsMax')
    c.setFillColor(GOLD)
    c.setFont('Helvetica', 8)
    c.drawString(M + 12*mm, H - 25*mm, 'pointsmax.in')
    # Title
    c.setFillColor(CARD)
    c.setFont('Helvetica-Bold', 19)
    c.drawRightString(W - M, H - 19*mm, title)
    c.setFillColor(GOLD)
    c.setFont('Helvetica', 9)
    c.drawRightString(W - M, H - 25*mm, subtitle)

def footer(c, page_num):
    c.setStrokeColor(BORDER); c.setLineWidth(0.5)
    c.line(M, 14*mm, W - M, 14*mm)
    c.setFillColor(TEXTM)
    c.setFont('Helvetica', 7.5)
    c.drawString(M, 10*mm, 'Free from PointsMax.in  ·  India\'s independent, unaffiliated credit card rewards guide')
    c.drawRightString(W - M, 10*mm, f'{page_num}')
    c.setFont('Helvetica-Oblique', 6.5)
    c.setFillColor(TEXTM)
    c.drawString(M, 6.5*mm, 'Educational information only, not financial advice. Facts as of July 2026 and subject to change — verify with your issuer. Not affiliated with any bank.')

def section_title(c, x, y, text, color=DARK):
    c.setFillColor(color)
    c.setFont('Helvetica-Bold', 12)
    c.drawString(x, y, text)
    c.setStrokeColor(GOLD); c.setLineWidth(1.5)
    c.line(x, y - 2.5*mm, x + 14*mm, y - 2.5*mm)

def bullet(c, x, y, text, maxw, color=TEXT, size=9, lead=4.6*mm):
    c.setFillColor(GOLD)
    c.setFont('Helvetica-Bold', size)
    c.drawString(x, y, '›')
    c.setFillColor(color)
    c.setFont('Helvetica', size)
    lines = simpleSplit(text, 'Helvetica', size, maxw - 5*mm)
    for i, ln in enumerate(lines):
        c.drawString(x + 5*mm, y - i*(lead), ln)
    return y - len(lines)*lead - 1.2*mm

# ---------- BUILD ----------
c = canvas.Canvas('/home/claude/pointsmax/public/points-cheat-sheet.pdf', pagesize=A4)
c.setTitle('The Points Maximisation Cheat Sheet — PointsMax.in')
c.setAuthor('PointsMax.in')
c.setSubject('India Credit Card Rewards Cheat Sheet 2026')

# ===== PAGE 1 =====
new_page(c)
header(c, 'The Cheat Sheet', 'Points Maximisation · India 2026')

col_w = (W - 2*M - 8*mm) / 2
left_x = M
right_x = M + col_w + 8*mm
y = H - 44*mm

# Intro line
c.setFillColor(TEXT)
c.setFont('Helvetica-Oblique', 9.5)
intro = "The essentials of Indian credit card rewards on one sheet — the rules that separate people who quietly win from people who leave money on the table."
for ln in simpleSplit(intro, 'Helvetica-Oblique', 9.5, W - 2*M):
    c.drawString(M, y, ln); y -= 4.8*mm
y -= 3*mm

top_y = y

# LEFT COLUMN
y = top_y
section_title(c, left_x, y, 'The 5 Golden Rules'); y -= 8*mm
rules = [
    'Pay the TOTAL due, never the minimum. Carrying a balance costs 30–48%/yr and erases every reward.',
    'Never withdraw cash on a credit card. Interest from day one, no grace period, plus a fee.',
    'Match the card to the spend. Use the right card per category — no single card wins everywhere.',
    'Keep utilisation under 30% of your limit. It\'s ~30% of your CIBIL score.',
    'Redeem regularly. Points expire (usually 2–3 yrs) and devalue over time. Burn, don\'t hoard.',
]
for r in rules:
    y = bullet(c, left_x, y, r, col_w)
y -= 3*mm

section_title(c, left_x, y, 'Redemption Value Ladder'); y -= 8*mm
c.setFont('Helvetica', 8.8); c.setFillColor(TEXT)
ladder = [
    ('Air miles / hotel transfers', 'Best', GREEN),
    ('Flights & hotels via bank portal', 'Rs 1/pt', GREEN),
    ('Gift vouchers', '~Rs 0.50/pt', GOLD),
    ('Statement credit', '~Rs 0.30/pt', GOLD),
    ('Product catalogue', '~Rs 0.20/pt - avoid', RED),
]
for label, val, col in ladder:
    c.setFillColor(TEXT); c.setFont('Helvetica', 8.8)
    c.drawString(left_x + 5*mm, y, label)
    c.setFillColor(col); c.setFont('Helvetica-Bold', 8.8)
    c.drawRightString(left_x + col_w, y, val)
    y -= 5*mm
y -= 2*mm
c.setFillColor(TEXTM); c.setFont('Helvetica-Oblique', 7.5)
for ln in simpleSplit('Rule of thumb: 1 point is worth what you get on travel — everything below that is the bank hoping you settle for less.', 'Helvetica-Oblique', 7.5, col_w):
    c.drawString(left_x + 5*mm, y, ln); y -= 3.6*mm

# RIGHT COLUMN
y = top_y
section_title(c, right_x, y, 'Best Card by Spend'); y -= 8*mm
pairs = [
    ('Online shopping', 'Category cashback card'),
    ('Dining & food delivery', '10% cashback card (e.g. Live+)'),
    ('Flights & hotels', 'Premium travel + transfers'),
    ('Fuel', 'Fuel surcharge-waiver card'),
    ('Everyday / groceries', 'Flat cashback card'),
    ('Rent', 'Usually not worth it — check fees'),
    ('International', 'Low-forex card (1.99% or less)'),
]
for cat, pick in pairs:
    c.setFillColor(DARK); c.setFont('Helvetica-Bold', 8.6)
    c.drawString(right_x + 5*mm, y, cat)
    c.setFillColor(TEXTM); c.setFont('Helvetica', 8)
    yy = y - 3.8*mm
    for ln in simpleSplit(pick, 'Helvetica', 8, col_w - 5*mm):
        c.drawString(right_x + 5*mm, yy, ln); yy -= 3.6*mm
    y = yy - 1.5*mm
y -= 1*mm

section_title(c, right_x, y, 'Points Expiry — Quick Table'); y -= 8*mm
exp = [
    ('HDFC super-premium', '3 yrs'),
    ('HDFC (other) / SBI', '2 yrs'),
    ('Axis EDGE', '3 yrs'),
    ('ICICI', '2–3 yrs'),
    ('Amex / IDFC First', 'Never*'),
    ('Airline / hotel', '18–24 mo idle'),
]
for bank, val in exp:
    c.setFillColor(TEXT); c.setFont('Helvetica', 8.6)
    c.drawString(right_x + 5*mm, y, bank)
    c.setFillColor(GREEN if val.startswith('Never') else DARK); c.setFont('Helvetica-Bold', 8.6)
    c.drawRightString(right_x + col_w, y, val)
    y -= 5*mm
c.setFillColor(TEXTM); c.setFont('Helvetica-Oblique', 7)
c.drawString(right_x + 5*mm, y, '*While the account stays active. Points forfeit on card closure.')

footer(c, 1)
c.showPage()

# ===== PAGE 2 =====
new_page(c)
header(c, 'The Cheat Sheet', 'Traps, Timing & Checklist · p2')
y = H - 44*mm
top_y = y

# LEFT COLUMN
y = top_y
section_title(c, left_x, y, 'Costly Traps to Avoid', RED); y -= 8*mm
traps = [
    'Paying only the minimum due — years of debt at 30–48%.',
    'Cash advances — no grace period, fee + instant interest.',
    'Letting points expire — pure profit for the bank ("breakage").',
    'Closing old cards — raises utilisation, cuts credit age, hurts CIBIL.',
    'Product-catalogue redemptions — often just Rs 0.20/pt.',
    'Forgetting fee-waiver spends — many fees waive at a threshold.',
    'Buying on Amazon/Flipkart with the wrong card — some cards exclude them.',
]
for t in traps:
    y = bullet(c, left_x, y, t, col_w, color=TEXT)
y -= 2*mm

section_title(c, left_x, y, 'CIBIL Quick Facts'); y -= 8*mm
cibil = [
    'Payment history ~35% · Utilisation ~30% are the big two.',
    'Checking your own score = zero impact (soft inquiry).',
    'Each application = a hard inquiry (5–10 pt temp dip).',
    'Carrying a balance does NOT help your score. Myth.',
]
for t in cibil:
    y = bullet(c, left_x, y, t, col_w, size=8.6)

# RIGHT COLUMN
y = top_y
section_title(c, right_x, y, 'Sale & Timing Calendar'); y -= 8*mm
cal = [
    ('Big sale season', 'Amazon GIF + Flipkart BBD (late Sep–Oct)'),
    ('Prime Day', 'Mid-year (Jul)'),
    ('Stack for max value', 'Card offer + coupon + no-cost EMI + co-brand'),
    ('Before you buy', 'Check the running card-offer list for the sale'),
]
for label, detail in cal:
    c.setFillColor(DARK); c.setFont('Helvetica-Bold', 8.6)
    c.drawString(right_x + 5*mm, y, label)
    yy = y - 3.8*mm
    c.setFillColor(TEXTM); c.setFont('Helvetica', 8)
    for ln in simpleSplit(detail, 'Helvetica', 8, col_w - 5*mm):
        c.drawString(right_x + 5*mm, yy, ln); yy -= 3.6*mm
    y = yy - 1.5*mm
y -= 1*mm

section_title(c, right_x, y, 'Monthly 5-Min Checklist'); y -= 8*mm
check = [
    'Pay statement in FULL by the due date',
    'Keep utilisation under 30%',
    'Check for points nearing expiry',
    'Redeem at Rs 1/pt or better',
    'Track progress to any fee-waiver',
    'Watch for devaluation announcements',
]
for t in check:
    c.setStrokeColor(GOLD); c.setLineWidth(1)
    c.rect(right_x + 5*mm, y - 2.6*mm, 3.2*mm, 3.2*mm, fill=0, stroke=1)
    c.setFillColor(TEXT); c.setFont('Helvetica', 8.8)
    c.drawString(right_x + 10*mm, y, t)
    y -= 5.4*mm
y -= 4*mm

# CTA box
c.setFillColor(DARK)
c.roundRect(right_x, y - 22*mm, col_w, 22*mm, 3*mm, fill=1, stroke=0)
c.setFillColor(CARD); c.setFont('Helvetica-Bold', 10)
c.drawString(right_x + 5*mm, y - 6*mm, 'Go deeper — free tools')
c.setFillColor(colors.HexColor('#C9C3BA')); c.setFont('Helvetica', 8)
tools = 'Points value calculator · Card quiz · Fee breakeven · Interest calculator · CIBIL utilisation checker'
yy = y - 11*mm
for ln in simpleSplit(tools, 'Helvetica', 8, col_w - 10*mm):
    c.drawString(right_x + 5*mm, yy, ln); yy -= 3.8*mm
c.setFillColor(GOLD); c.setFont('Helvetica-Bold', 8.5)
c.drawString(right_x + 5*mm, y - 19.5*mm, 'pointsmax.in')

footer(c, 2)
c.showPage()
c.save()
print('PDF created')
