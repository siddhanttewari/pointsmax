'use client'

import FeedbackWidget from '@/components/FeedbackWidget'
import PageNav from '@/components/PageNav'

import { useState, useEffect } from 'react'

const blogJsonLd = {
  '@context': 'https://schema.org', '@type': 'Product',
  name: 'American Express Platinum Charge Card',
  brand: { '@type': 'Brand', name: 'American Express' },
  category: 'Credit Card',
  description: 'The American Express Platinum Charge Card is India\'s most premium travel card at ₹66,000/year, offering Taj hotel benefits, 1400+ airport lounges, Fine Hotels & Resorts credits, and airline mile transfers.',
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '3.5', bestRating: '5', worstRating: '1', reviewCount: '1' },
  review: {
    '@type': 'Review',
    reviewRating: { '@type': 'Rating', ratingValue: '3.5', bestRating: '5', worstRating: '1' },
    author: { '@type': 'Organization', name: 'PointsMax' },
    datePublished: '2026-05-23',
    reviewBody: 'The American Express Platinum Charge Card delivers exceptional value for frequent international travellers spending ₹20L+ annually, but at ₹66,000/year (₹70,800 with GST) most Indians would extract more value from an HDFC Infinia at ₹12,500.',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is the Amex Platinum Charge Card worth ₹66,000 per year in India?', acceptedAnswer: { '@type': 'Answer', text: 'Only if you travel internationally 4+ times per year, stay at premium hotels, and actively use the Taj/IHCL benefits, airline transfers, and lounge access. At ₹20L+ annual spend with full benefit utilization, you can extract ₹2-3 lakh in value. For most Indians who travel 1-2 times a year, HDFC Infinia at ₹12,500 (waived on ₹10L spend) delivers equal or better rewards per rupee.' }},
    { '@type': 'Question', name: 'What is the value of 1 Amex Membership Rewards point in India?', acceptedAnswer: { '@type': 'Answer', text: 'One Amex Membership Rewards point is worth ₹0.30-1.00 depending on how you redeem. Airline transfers at 1:1 (to British Airways Avios, Singapore Airlines KrisFlyer, etc.) give the highest value at effectively ₹1.00-3.00 per point for business class bookings. The Reward Multiplier portal gives ₹0.50/point. Statement credit gives approximately ₹0.30/point.' }},
    { '@type': 'Question', name: 'Amex Platinum vs HDFC Infinia: which is better in India?', acceptedAnswer: { '@type': 'Answer', text: 'For pure rewards per rupee spent, HDFC Infinia wins — ₹1/point on SmartBuy with 22 transfer partners at ₹12,500/year (waivable). For the overall luxury travel experience with hotel credits, Taj benefits, Priority Pass, and global concierge, Amex Platinum wins but costs ₹66,000/year with no fee waiver. Most Indians should pick Infinia unless they travel internationally 4+ times a year.' }},
  ],
}

export default function BlogPost() {
  const [showBar, setShowBar] = useState(false)
  useEffect(() => {
    const fn = () => setShowBar(window.scrollY > 600)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const H2 = ({ children }) => <h2 className="pt-6" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', letterSpacing: '-0.01em' }}>{children}</h2>
  const S = ({ children }) => <strong style={{ color: 'var(--text)' }}>{children}</strong>

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <>
      <PageNav />
      <article className="max-w-2xl mx-auto px-5 py-12">
        <div className="flex items-center gap-2 mb-8 text-[13px]" style={{ color: 'var(--text-m)' }}>
          <a href="/" className="hover:text-black/50 transition-colors">PointsMax</a><span>/</span>
          <a href="/blog" className="hover:text-black/50 transition-colors">Blog</a><span>/</span>
          <span style={{ color: 'var(--text-s)' }}>Amex Platinum Review</span>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded" style={{ color: '#2563eb', background: 'rgba(37,99,235,0.06)' }}>Card Review</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>May 23, 2026</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>11 min read</span>
        </div>

        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(24px, 4vw, 36px)', lineHeight: 1.15, letterSpacing: '-0.025em', color: 'var(--text)' }}>
          Amex Platinum Charge Card Review India 2026: The ₹66,000 Question
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
          American Express claims ₹4.5 lakh in annual value. The internet says it's the "most aspirational card in India." Here's what the actual math says.
        </p>

        {/* Quick verdict */}
        <div className="mt-8 p-5 rounded-2xl" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
          <div className="flex items-center justify-between mb-3">
            <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: 'rgba(250,248,245,0.4)' }}>Quick Verdict</p>
            <div className="flex items-center gap-1">
              {[1,2,3].map(i => <span key={i} style={{ color: 'var(--gold-l)' }}>★</span>)}
              <span style={{ color: 'rgba(250,248,245,0.3)' }}>★</span>
              <span style={{ color: 'rgba(250,248,245,0.2)' }}>★</span>
              <span className="text-[13px] font-mono font-bold ml-1" style={{ color: 'var(--gold-l)' }}>3.5/5</span>
            </div>
          </div>
          <p className="text-[14px] leading-relaxed" style={{ color: 'rgba(250,248,245,0.8)' }}>
            A genuinely excellent card for a very specific person: someone who travels internationally 4+ times a year, stays at Taj properties regularly, and values experiences over raw reward rate. For everyone else — which is most Indians — HDFC Infinia delivers better per-rupee value at one-fifth the cost. The 3.5 rating reflects that this card is brilliant when it fits, but overpriced for 80% of people who get it.
          </p>
        </div>

        <div className="mt-10 space-y-6 text-[15px] leading-[1.85]" style={{ color: 'var(--text-s)' }}>

          <p>Let's get the number out of the way first.</p>
          <p>The American Express Platinum Charge Card costs <S>₹66,000 per year</S>. After GST, that's roughly <S>₹70,800</S>. There is no annual fee waiver. No spend threshold that makes it free. You pay ₹70,800 every single year, whether you use the card once or a thousand times.</p>
          <p>For context, that's the annual fee of five HDFC Infinias, fourteen Axis Atlas cards, or roughly 47 Amazon Pay ICICI cards (which are free anyway).</p>
          <p>So the question isn't whether the Amex Platinum is a good card. It is. The question is whether it's ₹70,800-a-year good for <em>you</em>.</p>

          <H2>Who is Amex Platinum genuinely for?</H2>
          <p><S>Three specific profiles get their money's worth:</S></p>
          <ul className="space-y-2 pl-1" style={{ listStyleType: 'none' }}>
            <li className="flex gap-2"><span style={{ color: 'var(--gold)' }}>1.</span><span><S>Frequent international travellers (4+ trips/year):</S> The lounge access, hotel credits, Fine Hotels & Resorts program, and airline transfers create compounding value that exceeds the fee.</span></li>
            <li className="flex gap-2"><span style={{ color: 'var(--gold)' }}>2.</span><span><S>Taj/IHCL regulars:</S> 25% off on Taj, SeleQtions, Vivanta, and Gateway properties plus suite discounts. If you stay at Taj properties even 4-5 nights a year, the savings alone justify the fee.</span></li>
            <li className="flex gap-2"><span style={{ color: 'var(--gold)' }}>3.</span><span><S>High-income professionals who want a single premium lifestyle card:</S> If you value the convenience of one card that handles lounges, hotel bookings, restaurant discounts, and travel insurance without thinking, and ₹70K/year is genuinely immaterial to your finances.</span></li>
          </ul>
          <p>If you don't fit any of these three profiles, you're paying ₹70,800 for a metal card and a feeling. That's fine if you know that going in. But don't pretend the math works when it doesn't.</p>

          <H2>The fees: what does it actually cost?</H2>
          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-[13px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <tbody>
                {[
                  ['Annual fee', '₹66,000 + GST (~₹70,800)'],
                  ['Fee waiver', 'None. Never. Not happening.'],
                  ['Card type', 'Charge card (must pay full balance monthly)'],
                  ['Supplementary card', 'Free (up to 4)'],
                  ['Welcome benefit', '₹60,000 in hotel vouchers (Taj, Luxe, Postcard) on ₹50K spend in 2 months'],
                  ['Forex markup', '3.5% + GST (~4.13%)'],
                  ['Late payment', 'Not applicable (charge card — pay in full or default)'],
                ].map(([l, v], i) => (
                  <tr key={i}>
                    <td className="py-2.5 px-3 font-medium" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)', width: '35%' }}>{l}</td>
                    <td className="py-2.5 px-3" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>The welcome benefit of ₹60,000 in hotel vouchers effectively makes the first year's fee nearly free — if you stay at Taj, Luxe, or Postcard properties. If you don't, those vouchers sit unused.</p>

          <div className="p-4 rounded-xl" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
            <p className="text-[13px] font-bold mb-1" style={{ color: 'var(--red)' }}>The charge card trap</p>
            <p className="text-[13px] leading-relaxed" style={{ color: 'var(--text-s)' }}>Unlike credit cards, a charge card requires you to pay the full balance every month. There's no option to carry a balance (no EMI, no minimum payment). Miss a payment and you get hit with steep penalties plus potential credit score damage. Only get this card if you have the cash flow discipline to clear the entire balance monthly.</p>
          </div>

          <H2>How much is 1 Amex Membership Rewards point worth?</H2>
          <p>Amex earns <S>1 Membership Rewards (MR) point per ₹50 spent</S> on most purchases, and <S>5X via the Reward Multiplier portal</S>. The per-point value varies wildly by redemption channel:</p>

          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-[13px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead><tr>
                <th className="text-left py-3 px-3 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Redemption method</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>₹/point</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Rating</th>
              </tr></thead>
              <tbody>
                {[
                  ['Airline transfers — business class (BA, KrisFlyer)', '₹1.00-3.00*', 'BEST', 'var(--green)'],
                  ['Reward Multiplier portal (Amazon, Flipkart, Myntra)', '₹0.50', 'GOOD', 'var(--gold)'],
                  ['18K Gold Collection', '₹0.40-0.50', 'OKAY', 'var(--gold)'],
                  ['Travel bookings via Amex Travel', '₹0.35-0.50', 'OKAY', 'var(--gold)'],
                  ['Statement credit', '₹0.25-0.30', 'AVOID', 'var(--red)'],
                  ['Product catalogue', '₹0.20-0.25', 'AVOID', 'var(--red)'],
                ].map(([method, val, rating, color], i) => (
                  <tr key={i}>
                    <td className="py-2.5 px-3 font-medium" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{method}</td>
                    <td className="py-2.5 px-2 text-center font-mono font-bold" style={{ color, borderBottom: '1px solid var(--border)' }}>{val}</td>
                    <td className="py-2.5 px-2 text-center" style={{ borderBottom: '1px solid var(--border)' }}>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded" style={{ color, background: color + '12' }}>{rating}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-[11px] mt-2" style={{ color: 'var(--text-m)' }}>*Airline transfer value depends on the route and cabin class. Economy yields ~₹0.50/point. Business class yields ₹1.50-3.00/point.</p>
          </div>
          <p>Want the exact calculation for your MR points? <a href="/" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>Run them through the PointsMax calculator</a>.</p>

          <H2>The benefits that actually justify the fee</H2>
          <p>Let's separate the genuinely valuable benefits from the marketing fluff:</p>

          <div className="space-y-3 mt-2">
            {[
              { title: 'Taj/IHCL hotel benefits', value: '₹30,000-1,00,000+', desc: '25% off on Taj, SeleQtions, Vivanta, Gateway properties globally. 25% off suites at select Taj properties. If you stay at Taj 4-5 nights/year, this alone covers the annual fee. This is the single strongest benefit of the card for India-based travellers.', color: 'var(--green)' },
              { title: 'Airport lounge access', value: '₹15,000-40,000', desc: 'Access to 1,400+ lounges globally including Priority Pass, Amex Lounges, and Centurion Lounges (none in India yet). Unlimited visits for cardholder + 1 guest. At ₹2,000 per lounge visit, 8-10 visits/year = ₹16,000-20,000 in value.', color: 'var(--green)' },
              { title: 'Fine Hotels & Resorts (FHR)', value: '₹20,000-50,000', desc: 'Room upgrades, ₹7,500+ experience credit, guaranteed 4 PM late checkout, complimentary breakfast at 600+ luxury properties worldwide (Four Seasons, Mandarin Oriental, Ritz-Carlton). Massive value if you book through FHR instead of directly.', color: 'var(--green)' },
              { title: 'Welcome vouchers', value: '₹60,000 (year 1 only)', desc: 'Taj, Luxe Gift Card, and Postcard Hotels vouchers on ₹50,000 spend in first 2 months. Nearly offsets the first year fee if you actually use them.', color: 'var(--gold)' },
              { title: 'Airline transfer partners', value: 'Variable', desc: '1:1 transfers to BA Avios, Singapore Airlines KrisFlyer, Cathay Pacific Asia Miles, Emirates Skywards, and others. Best for business class award bookings.', color: 'var(--gold)' },
              { title: 'Dining discounts', value: '₹5,000-15,000', desc: 'Up to 50% off at 1,800+ restaurants via EazyDiner Prime (complimentary). Useful if you eat out regularly at participating places.', color: 'var(--gold)' },
            ].map((b, i) => (
              <div key={i} className="p-4 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <div className="flex items-start justify-between gap-3">
                  <p className="text-[14px] font-semibold" style={{ color: 'var(--text)' }}>{b.title}</p>
                  <span className="text-[12px] font-mono font-bold shrink-0" style={{ color: b.color }}>{b.value}</span>
                </div>
                <p className="text-[13px] mt-1.5 leading-relaxed" style={{ color: 'var(--text-s)' }}>{b.desc}</p>
              </div>
            ))}
          </div>

          {/* Mid-article CTA */}
          <div className="p-5 rounded-xl my-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <div>
              <p className="text-[14px] font-semibold">Got Amex Membership Rewards points?</p>
              <p className="text-[12px] mt-1" style={{ color: 'rgba(250,248,245,0.5)' }}>See every redemption ranked — transfers, Reward Multiplier, catalogue, everything.</p>
            </div>
            <a href="/" className="shrink-0 px-5 py-2.5 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>Check My Points →</a>
          </div>

          <H2>The breakeven math: can you justify ₹70,800?</H2>
          <p>Here's the honest calculation. To break even, you need to extract ₹70,800 in genuine value (not Amex's inflated "₹4.5 lakh" claim). What counts as real value:</p>

          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-[13px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead><tr>
                <th className="text-left py-3 px-3 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Benefit</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Light user</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Heavy user</th>
              </tr></thead>
              <tbody>
                {[
                  ['Taj 25% off (nights/year)', '2 nights = ₹8,000', '8 nights = ₹40,000'],
                  ['Lounge access', '4 visits = ₹8,000', '15 visits = ₹30,000'],
                  ['FHR experience credits', '1 stay = ₹7,500', '4 stays = ₹30,000'],
                  ['Dining discounts', '₹3,000', '₹12,000'],
                  ['MR points (₹15L spend)', '₹9,000', '₹30,000'],
                  ['Total value', '₹35,500', '₹1,42,000'],
                  ['Minus annual fee', '- ₹70,800', '- ₹70,800'],
                  ['Net value', '- ₹35,300 ❌', '+ ₹71,200 ✅'],
                ].map(([label, light, heavy], i) => {
                  const isTotal = label === 'Net value'
                  return (
                    <tr key={i}>
                      <td className="py-2.5 px-3 font-medium" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)', fontWeight: isTotal ? 700 : 500 }}>{label}</td>
                      <td className="py-2.5 px-2 text-center font-mono" style={{ color: light.includes('❌') ? 'var(--red)' : 'var(--text-s)', borderBottom: '1px solid var(--border)', fontWeight: isTotal ? 700 : 400 }}>{light}</td>
                      <td className="py-2.5 px-2 text-center font-mono" style={{ color: heavy.includes('✅') ? 'var(--green)' : 'var(--text-s)', borderBottom: '1px solid var(--border)', fontWeight: isTotal ? 700 : 400 }}>{heavy}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <p>The light user <em>loses</em> ₹35,300 per year. The heavy user gains ₹71,200. The card is wildly profitable for the right person and a net negative for everyone else. There's almost no middle ground.</p>

          <H2>Amex Platinum vs HDFC Infinia: the real comparison</H2>
          <p>This is the comparison that matters for Indian premium card holders:</p>

          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-[13px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead><tr>
                <th className="text-left py-3 px-3 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}></th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Amex Platinum</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>HDFC Infinia</th>
              </tr></thead>
              <tbody>
                {[
                  ['Annual fee', '₹66,000 (no waiver)', '₹12,500 (waived ₹10L)'],
                  ['Reward rate', '2% (base)', '3.33% (SmartBuy)'],
                  ['Best per-point value', '₹1.00 (airline transfer)', '₹1.00 (SmartBuy)'],
                  ['Transfer partners', '10+', '22'],
                  ['Forex markup', '3.5% + GST', '2% + 1% cashback'],
                  ['Hotel benefits', 'Taj 25%, FHR, Hotel Collection', 'Club Marriott (basic)'],
                  ['Lounge access', '1,400+ globally', 'Unlimited domestic/intl'],
                  ['Card type', 'Charge (pay full monthly)', 'Credit (EMI available)'],
                  ['Best for', 'Luxury travel lifestyle', 'Maximum reward per ₹'],
                ].map(([l, amex, hdfc], i) => (
                  <tr key={i}>
                    <td className="py-2.5 px-3 font-medium" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{l}</td>
                    <td className="py-2.5 px-2 text-center" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>{amex}</td>
                    <td className="py-2.5 px-2 text-center" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>{hdfc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p><S>Our take:</S> If your goal is maximizing rewards per rupee spent, HDFC Infinia wins hands down — 3.33% vs 2%, more transfer partners, lower fee, fee waiver available. If your goal is the overall luxury travel experience — hotel upgrades, Taj discounts, FHR credits, premium dining — Amex Platinum wins, but at a cost that only makes sense for heavy travellers.</p>
          <p>Most Indians should pick Infinia. Read our <a href="/blog/hdfc-infinia-credit-card-review-2026" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>full HDFC Infinia review</a> for the complete picture.</p>

          <H2>The elephant in the room: concierge quality</H2>
          <p>One of Amex Platinum's biggest selling points has historically been the 24/7 global concierge. "Call and they'll get you anything" is the pitch.</p>
          <p>The reality in 2026? Mixed, at best. As Amex has mass-marketed the Platinum card in India (you can now apply online without income proof in many cases), the concierge quality has diluted significantly. Long-time cardholders report slower response times, less resourceful agents, and a service that feels more like a call centre than a personal assistant.</p>
          <p>If premium concierge service is your primary reason for getting this card, temper your expectations. It's still better than most cards' customer service, but it's no longer the "get me sand from the sea" magic that Amex marketed in the 2010s.</p>

          <H2>Who should NOT get the Amex Platinum</H2>
          <div className="space-y-3">
            {[
              ['You travel domestically only', 'Most of the high-value benefits (FHR, international lounges, Centurion access, Hotel Collection) are international-focused. For domestic travel, HDFC Infinia\'s SmartBuy gives better value.'],
              ['You want the best reward rate', 'At 1 MR per ₹50 (2% base), Amex Platinum\'s earn rate is lower than Infinia\'s 3.33%. If raw points accumulation matters most, this isn\'t your card.'],
              ['₹70,800/year is a meaningful amount to you', 'No shame in that — it\'s a lot of money. If the annual fee makes you think twice, you\'ll never fully enjoy the card. Get Infinia (₹12,500, waivable) or a free card stack instead.'],
              ['You don\'t stay at Taj properties', 'The Taj/IHCL benefits are the single biggest value driver for India-based holders. Without them, breakeven becomes much harder.'],
              ['You need EMI flexibility', 'It\'s a charge card. Full balance due every month. If you sometimes need to spread large purchases over EMIs, you need a credit card, not a charge card.'],
            ].map(([title, desc], i) => (
              <div key={i} className="p-4 rounded-xl" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
                <p className="text-[13px] font-bold mb-1" style={{ color: 'var(--red)' }}>✕ {title}</p>
                <p className="text-[13px] leading-relaxed" style={{ color: 'var(--text-s)' }}>{desc}</p>
              </div>
            ))}
          </div>

          <H2>The bottom line</H2>
          <p>The Amex Platinum Charge Card is a genuinely excellent product that's genuinely wrong for most people.</p>
          <p>If you're a frequent international traveller who stays at premium hotels, dines out regularly, and values a curated luxury experience — the card pays for itself and then some. The Taj benefits alone can cover the annual fee with 4-5 nights of stays.</p>
          <p>But if you're getting it for the metal, the Instagram photo, or the "prestige" — you're paying ₹70,800/year for a feeling. HDFC Infinia at ₹12,500 (waived at ₹10L spend) gives you better rewards, more transfer partners, and lower forex markup.</p>
          <p>The right answer for 80% of Indians reading this: skip Amex Platinum, get Infinia or Diners Black, and use the ₹58,000 annual fee difference to actually book the trips you'd use those points on.</p>

          <p className="mt-4"><S>3 things to do:</S></p>
          <div className="space-y-2 mt-2">
            <div className="flex gap-3"><span className="w-6 h-6 rounded-full grid place-items-center text-[12px] font-bold shrink-0" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>1</span><p>If you already have the card — <a href="/" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>check your MR points value</a> and make sure you're not redeeming via catalogue (₹0.20/pt) when transfers give ₹1.00+/pt.</p></div>
            <div className="flex gap-3"><span className="w-6 h-6 rounded-full grid place-items-center text-[12px] font-bold shrink-0" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>2</span><p>Compare it head-to-head with Infinia in our <a href="/blog/hdfc-infinia-credit-card-review-2026" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>HDFC Infinia review</a>.</p></div>
            <div className="flex gap-3"><span className="w-6 h-6 rounded-full grid place-items-center text-[12px] font-bold shrink-0" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>3</span><p>If the fee isn't worth it, check the <a href="/blog/best-lifetime-free-credit-cards-india-2026" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>best lifetime free cards</a> — the ₹0 stack genuinely outperforms this card for most spend profiles.</p></div>
          </div>

          {/* Bottom CTA */}
          <div className="p-6 rounded-2xl text-center mt-8" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <p className="text-[16px] font-semibold">Check your Amex MR points value</p>
            <p className="text-[13px] mt-1 mb-4" style={{ color: 'rgba(250,248,245,0.5)' }}>Transfers, Reward Multiplier, catalogue — every method ranked.</p>
            <a href="/" className="inline-block px-6 py-2.5 rounded-xl text-[14px] font-semibold" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>Open PointsMax Calculator →</a>
          </div>

          <p className="text-[11px] mt-8 leading-relaxed" style={{ color: 'var(--text-m)' }}>
            <strong>Disclaimer:</strong> This review is based on publicly available information from American Express India's website and benefit pages as of May 2026. Benefits, fees, and partner offers change without notice. This is a charge card — full balance is due monthly. Always verify current terms at americanexpress.com/in. PointsMax is not affiliated with American Express. We do not earn commissions from card applications. This is not financial advice.
          </p>
        </div>
                <FeedbackWidget pageSlug="amex-platinum-charge-card-review-india-2026" pageTitle="amex-platinum-charge-card-review-india-2026" />
        </article>

      <footer className="py-10 px-5" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[12px]" style={{ color: 'var(--text-m)' }}>
            <a href="/" className="hover:text-black/40 transition-colors">PointsMax</a><span className="mx-2">·</span>
            <a href="/transfers" className="hover:text-black/40 transition-colors">Transfers</a><span className="mx-2">·</span>
            <a href="/blog" className="hover:text-black/40 transition-colors">Blog</a><span className="mx-2">·</span>
            <a href="/privacy" className="hover:text-black/40 transition-colors">Privacy</a>
          </p>
        </div>
      </footer>

      {showBar && (
        <div className="fixed bottom-0 left-0 right-0 z-50" style={{ background: 'var(--dark)', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '10px 16px' }}>
          <div className="max-w-2xl mx-auto flex items-center justify-between gap-3">
            <p className="text-[13px] hidden sm:block" style={{ color: 'rgba(250,248,245,0.6)' }}>Check your <strong style={{ color: '#FAF8F5' }}>Amex MR points</strong> value</p>
            <p className="text-[13px] sm:hidden" style={{ color: 'rgba(250,248,245,0.6)' }}>Check Amex points</p>
            <a href="/" className="shrink-0 px-4 py-2 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>Open Calculator →</a>
          </div>
        </div>
      )}
    </div>
  )
}
