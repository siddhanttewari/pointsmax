'use client'

import { useState, useEffect } from 'react'
import FeedbackWidget from '@/components/FeedbackWidget'
import PageNav from '@/components/PageNav'

const howToJsonLd = {
  '@context': 'https://schema.org', '@type': 'HowTo',
  name: 'How to Maximise Credit Card Points in India',
  description: 'The complete earn-hold-redeem system for maximising credit card reward points in India in 2026.',
  totalTime: 'PT30M',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Earn: put the right spend on the right card', text: 'Route each category of spending to the card that rewards it best — travel and hotels via premium cards and their portals, dining and delivery via dedicated cashback cards, and everyday spend via your highest flat-rate card.' },
    { '@type': 'HowToStep', position: 2, name: 'Hold: protect points from devaluation and expiry', text: 'Do not hoard points indefinitely. Indian programs devalue regularly and points expire after 24-36 months. Earn toward a specific redemption goal and redeem steadily.' },
    { '@type': 'HowToStep', position: 3, name: 'Redeem: always compare methods by rupee value', text: 'Before redeeming, compare cashback, the bank travel portal, and airline or hotel transfers by rupee-per-point value. Premium card portals give around ₹1 per point; airline transfers can reach ₹1.50-2.50 on business class.' },
    { '@type': 'HowToStep', position: 4, name: 'Optimise: build a two or three card stack', text: 'No single card wins every category. Combine a premium travel card, a dining or cashback card, and a lifetime-free card to cover all spending at the best rate.' },
    { '@type': 'HowToStep', position: 5, name: 'Verify: check current rates before every decision', text: 'Reward rates, transfer ratios, and lounge rules change frequently. Verify current terms and run the numbers on a calculator before applying for a card or redeeming points.' },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How do I maximise my credit card points in India?', acceptedAnswer: { '@type': 'Answer', text: 'To maximise credit card points in India, follow the earn-hold-redeem system. Earn by routing each spending category to the card that rewards it best. Hold points only toward a specific redemption goal, since Indian programs devalue regularly and points expire after 24-36 months. Redeem by always comparing methods by rupee-per-point value — premium card travel portals give around ₹1 per point, while airline transfers can reach ₹1.50-2.50 per point on business class. The highest-value approach is a two or three card stack covering travel, dining, and everyday spend, with redemptions concentrated on premium travel.' }},
    { '@type': 'Question', name: 'What is the best credit card combination in India in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'The best credit card combination in India depends on spend level, but a strong general stack is: a premium travel card (HDFC Infinia, Diners Club Black, or ICICI Emeralde Private) for travel and high spend at around 3-3.3% with portal access; a dining and delivery card (HDFC Swiggy or HSBC Live+) for food; and a lifetime-free card (Scapia, AU ixigo) for forex-free or no-fee everyday spend. This covers every major category at a strong rate without overlapping fees.' }},
    { '@type': 'Question', name: 'How much can you realistically earn from credit card points in India?', acceptedAnswer: { '@type': 'Answer', text: 'A disciplined cardholder spending ₹10 lakh a year on the right cards can realistically generate ₹30,000 to ₹50,000 in annual value through points, milestones, and lounge access, and significantly more if points are redeemed for premium-cabin airline transfers. The exact figure depends on card choice, redemption method, and consistency. The single biggest lever is the redemption method — the same points can be worth three to five times more through one method than another.' }},
  ],
}

export default function BlogPost() {
  const [showBar, setShowBar] = useState(false)

  useEffect(() => {
    const fn = () => setShowBar(window.scrollY > 600)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const H2 = ({ children, id }) => (
    <h2 id={id} className="pt-8 scroll-mt-20" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', letterSpacing: '-0.01em' }}>{children}</h2>
  )
  const S = ({ children }) => <strong style={{ color: 'var(--text)' }}>{children}</strong>

  const GuideLink = ({ href, children }) => (
    <a href={href} style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>{children}</a>
  )

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'The Points Maximisation Playbook India 2026: The Complete System', datePublished: '2026-06-29', dateModified: '2026-06-29', author: { '@type': 'Organization', name: 'PointsMax', url: 'https://www.pointsmax.in' }, publisher: { '@type': 'Organization', name: 'PointsMax', url: 'https://www.pointsmax.in' } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageNav />

      <article className="max-w-2xl mx-auto px-5 py-12">
        <div className="flex items-center gap-2 mb-8 text-[13px]" style={{ color: 'var(--text-m)' }}>
          <a href="/">PointsMax</a><span>/</span>
          <a href="/blog">Learn</a><span>/</span>
          <span style={{ color: 'var(--text-s)' }}>The Points Maximisation Playbook</span>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded" style={{ color: 'var(--green)', background: 'rgba(45,106,79,0.08)' }}>The Complete System</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>June 29, 2026</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>15 min read</span>
        </div>

        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(24px, 4vw, 38px)', lineHeight: 1.12, letterSpacing: '-0.025em', color: 'var(--text)' }}>
          The Points Maximisation Playbook India 2026: The Complete System
        </h1>

        {/* DIRECT ANSWER BLOCK */}
        <div className="mt-8 p-5 rounded-2xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
          <p className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--text-m)' }}>Quick answer</p>
          <p className="text-[15px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
            <S>Maximising credit card points in India comes down to three steps: earn, hold, and redeem.</S> Earn by routing each spending category to the card that rewards it best. Hold points only toward a specific goal — Indian programs devalue often and points expire in 24-36 months. Redeem by always comparing methods by rupee value, since the same points can be worth 3-5x more through one method than another. The highest-value setup is a 2-3 card stack covering travel, dining, and everyday spend, with redemptions concentrated on premium-cabin airline transfers and travel portals. This playbook links every detailed guide you need for each step.
          </p>
        </div>

        <p className="mt-6 text-[16px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
          This is the master guide — the system that connects everything. Below, the complete framework for turning everyday Indian spending into business class flights and free hotel nights, with links to every detailed guide for each card, program, and decision. If you read one PointsMax article, read this one.
        </p>

        <div className="mt-10 space-y-6 text-[15px] leading-[1.85]" style={{ color: 'var(--text-s)' }}>

          <H2 id="framework">The earn-hold-redeem framework</H2>
          <p>Every points strategy, no matter how advanced, reduces to three stages. Most people focus only on the first and lose most of their value at the third.</p>
          <div className="space-y-3">
            {[
              { n: '1', stage: 'EARN', color: 'var(--green)', desc: 'Put the right spend on the right card. The goal is the highest reward rate for each category — not putting everything on one card.' },
              { n: '2', stage: 'HOLD', color: 'var(--gold, #B8953E)', desc: 'Protect points from devaluation and expiry. Points are perishable, not investments. Earn toward a goal; don\'t hoard indefinitely.' },
              { n: '3', stage: 'REDEEM', color: '#2563eb', desc: 'Always compare methods by rupee value. This single step determines most of your realised value — and it\'s where most people lose 3-5x.' },
            ].map((s, i) => (
              <div key={i} className="flex gap-4 items-start p-4 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <span className="w-9 h-9 rounded-full grid place-items-center text-[14px] font-bold shrink-0" style={{ background: s.color, color: '#fff' }}>{s.n}</span>
                <div>
                  <p className="text-[14px] font-bold tracking-wide" style={{ color: s.color }}>{s.stage}</p>
                  <p className="text-[13px] mt-0.5" style={{ color: 'var(--text-s)' }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* STEP 1 */}
          <H2 id="earn">Step 1 — Earn: the card stack</H2>
          <p>No single card wins every category. The most efficient setup is a <S>stack of 2-3 cards</S>, each covering the categories it rewards best. Here's the framework by spend profile:</p>

          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-[13px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead><tr>
                <th className="text-left py-3 px-3 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Category</th>
                <th className="text-left py-3 px-2 font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Best card type</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--text-m)', borderBottom: '1px solid var(--border)' }}>Guide</th>
              </tr></thead>
              <tbody>
                {[
                  ['Travel & high spend', 'Premium (Infinia/Diners/Emeralde)', '/blog/best-credit-cards-india-2026'],
                  ['Flights on points', 'Premium + airline transfer', '/blog/best-credit-cards-flights-on-points-india-2026'],
                  ['Hotels on points', 'Premium + hotel programs', '/blog/best-credit-cards-hotels-on-points-india-2026'],
                  ['Dining & delivery', 'HDFC Swiggy / HSBC Live+', '/blog/best-credit-cards-dining-india-2026'],
                  ['Rent payments', 'Specific rent-friendly cards', '/blog/best-credit-cards-rent-payment-india-2026'],
                  ['Fuel', 'Fuel surcharge waiver cards', '/blog/best-credit-cards-fuel-india-2026'],
                  ['Utility bills', 'Utility-rewarding cards', '/blog/best-credit-cards-utility-bills-india-2026'],
                  ['International spend', 'Low-forex cards', '/blog/best-credit-cards-international-travel-india-2026'],
                  ['Everyday / no fee', 'Lifetime-free cards', '/blog/best-lifetime-free-credit-cards-india-2026'],
                ].map(([cat, card, href], i) => (
                  <tr key={i}>
                    <td className="py-2.5 px-3 font-medium" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{cat}</td>
                    <td className="py-2.5 px-2 text-[12px]" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>{card}</td>
                    <td className="py-2.5 px-2 text-center borderBottom: '1px solid var(--border)'" style={{ borderBottom: '1px solid var(--border)' }}><a href={href} style={{ color: 'var(--gold, #B8953E)', fontSize: '11px', textDecoration: 'underline' }}>Read →</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-5 rounded-xl" style={{ background: '#EDF5F0', border: '1px solid #C8DDD0' }}>
            <p className="text-[14px] font-bold mb-3" style={{ color: 'var(--green)' }}>The reference three-card stack</p>
            <div className="space-y-3 text-[13px]">
              <div className="flex gap-3">
                <span className="w-6 h-6 rounded-full grid place-items-center text-[11px] font-bold shrink-0" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>1</span>
                <div><p style={{ color: 'var(--text)' }}><S>Premium anchor</S> — HDFC Infinia, Diners Club Black, or ICICI Emeralde Private</p><p style={{ color: 'var(--text-m)' }}>Travel, hotels, high spend. ~3-3.3% + portal access + lounge.</p></div>
              </div>
              <div className="flex gap-3">
                <span className="w-6 h-6 rounded-full grid place-items-center text-[11px] font-bold shrink-0" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>2</span>
                <div><p style={{ color: 'var(--text)' }}><S>Category specialist</S> — HDFC Swiggy / HSBC Live+ for dining</p><p style={{ color: 'var(--text-m)' }}>10% on food delivery and dining where the premium card gives 3%.</p></div>
              </div>
              <div className="flex gap-3">
                <span className="w-6 h-6 rounded-full grid place-items-center text-[11px] font-bold shrink-0" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>3</span>
                <div><p style={{ color: 'var(--text)' }}><S>Free utility card</S> — Scapia or AU ixigo</p><p style={{ color: 'var(--text-m)' }}>Zero forex or no-fee everyday spend. No annual cost to hold.</p></div>
              </div>
            </div>
          </div>

          {/* Mid CTA */}
          <div className="p-5 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <div>
              <p className="text-[14px] font-semibold">Find your best card in 60 seconds</p>
              <p className="text-[12px] mt-1" style={{ color: 'rgba(250,248,245,0.5)' }}>Answer a few questions, get a personalised stack recommendation.</p>
            </div>
            <a href="/tools/card-quiz" className="shrink-0 px-5 py-2.5 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Take the Quiz →</a>
          </div>

          {/* STEP 2 */}
          <H2 id="hold">Step 2 — Hold: protect your points</H2>
          <p>This is the stage almost everyone gets wrong. Points feel like savings, so people hoard them. But <S>points are perishable, and 2026 has been a year of relentless devaluation.</S></p>
          <div className="space-y-3">
            {[
              { title: 'Devaluation is constant', detail: 'Axis cut Magnus and Atlas transfer ratios in April 2026. HDFC repriced Regalia Gold. Nearly every program devalued within months of each other. Points you hold lose value over time.', href: '/blog/credit-card-devaluation-tracker-india-2026', linkText: 'Track every devaluation' },
              { title: 'Points expire', detail: 'Most Indian points expire after 24-36 months of inactivity. A forgotten balance can vanish entirely. Set reminders and keep accounts active.', href: '/tools/expiry-reminder', linkText: 'Free expiry reminder tool' },
              { title: 'Earn toward a goal', detail: 'The fix for both problems: don\'t hoard. Decide on a redemption target (a business class flight, a luxury hotel stay), earn toward it, and redeem. Steady redemption beats indefinite accumulation.', href: null, linkText: null },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <p className="text-[13px] font-bold mb-1" style={{ color: 'var(--text)' }}>{item.title}</p>
                <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>{item.detail}{item.href && <> <a href={item.href} style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>{item.linkText}</a>.</>}</p>
              </div>
            ))}
          </div>

          {/* STEP 3 */}
          <H2 id="redeem">Step 3 — Redeem: where the value is won or lost</H2>
          <p><S>This single step determines most of your realised value.</S> The same points can be worth ₹0.20 each (merchandise) or ₹2.50 each (business class transfer) — a 12x spread. The full method is in our dedicated guide, but the hierarchy is:</p>
          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-[13px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead><tr>
                <th className="text-left py-3 px-3 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Method</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Typical ₹/point</th>
              </tr></thead>
              <tbody>
                {[
                  ['Airline transfer (business class)', '₹1.50 - 2.50', 'var(--green)'],
                  ['Bank travel portal (SmartBuy/iShop)', '₹0.50 - 1.00', 'var(--green)'],
                  ['Hotel program (Marriott, etc.)', '₹0.55 - 1.10', 'var(--gold, #B8953E)'],
                  ['Cashback / statement credit', '₹0.25 - 0.50', 'var(--gold, #B8953E)'],
                  ['Merchandise catalogue', '₹0.20 - 0.30', 'var(--red)'],
                ].map(([method, value, color], i) => (
                  <tr key={i}>
                    <td className="py-2.5 px-3 font-medium" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{method}</td>
                    <td className="py-2.5 px-2 text-center font-mono font-bold" style={{ color, borderBottom: '1px solid var(--border)' }}>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>The complete decision method — by card and by bank — is in our pillar guide on <GuideLink href="/blog/how-to-redeem-credit-card-points-india-2026">how to redeem credit card points for maximum value</GuideLink>. For the two highest-value paths specifically, see <GuideLink href="/blog/hdfc-smartbuy-guide-2026">the SmartBuy guide</GuideLink> and <GuideLink href="/blog/credit-card-airline-miles-transfer-india-2026">how to transfer points to airline miles</GuideLink>.</p>

          <H2 id="airline-programs">The airline & hotel programs that matter</H2>
          <p>Premium-cabin transfers are the highest-value redemption — but only if you know which programs to use. The three currencies worth mastering from India:</p>
          <div className="space-y-2">
            {[
              { prog: 'Singapore Airlines KrisFlyer', note: 'Best Star Alliance option from India. 1:1 from HDFC. Singapore/Tokyo/Sydney business class.', href: '/blog/best-krisflyer-routes-india-2026' },
              { prog: 'Air India Flying Returns', note: 'April 2026 award chart cut prices up to 60%. SBI transfers 1:1. SE Asia from 12,000 points.', href: '/blog/air-india-flying-returns-guide-2026' },
              { prog: 'British Airways Avios', note: 'Shared across 5 airlines incl. Qatar Qsuites. ~70K Avios for business class from India via Doha.', href: '/blog/british-airways-avios-india-guide-2026' },
              { prog: 'Marriott Bonvoy', note: 'The global hotel program. Free 5th night, off-peak sweet spots. Earn via HDFC Marriott card.', href: '/blog/marriott-bonvoy-india-strategy-guide-2026' },
            ].map((p, i) => (
              <a key={i} href={p.href} className="block p-3 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <div className="flex items-center justify-between">
                  <p className="text-[13px] font-semibold" style={{ color: 'var(--text)' }}>{p.prog}</p>
                  <span className="text-[11px]" style={{ color: 'var(--gold, #B8953E)' }}>Read guide →</span>
                </div>
                <p className="text-[12px] mt-0.5" style={{ color: 'var(--text-m)' }}>{p.note}</p>
              </a>
            ))}
          </div>

          <H2 id="card-reviews">Every card review in one place</H2>
          <p>Choosing the cards for your stack? Here are the detailed, post-2026-devaluation reviews of every major card:</p>
          <div className="grid grid-cols-2 gap-2">
            {[
              ['HDFC Infinia', '/blog/hdfc-infinia-credit-card-review-2026'],
              ['HDFC Diners Club Black', '/blog/hdfc-diners-club-black-credit-card-review-2026'],
              ['ICICI Emeralde Private', '/blog/icici-emeralde-private-metal-credit-card-review-2026'],
              ['HDFC Regalia Gold', '/blog/hdfc-regalia-gold-credit-card-review-2026'],
              ['Axis Atlas', '/blog/axis-atlas-credit-card-review-2026'],
              ['Axis Magnus', '/blog/axis-magnus-credit-card-review-2026'],
              ['Amex Platinum Charge', '/blog/amex-platinum-charge-card-review-india-2026'],
              ['Amex MRCC', '/blog/amex-mrcc-credit-card-review-india-2026'],
            ].map(([name, href], i) => (
              <a key={i} href={href} className="p-3 rounded-lg text-[12px] font-medium" style={{ background: 'var(--bg-s)', border: '1px solid var(--border)', color: 'var(--text-s)' }}>
                {name} <span style={{ color: 'var(--gold, #B8953E)' }}>→</span>
              </a>
            ))}
          </div>
          <p className="text-[13px]">Comparing two specific cards? See the <GuideLink href="/blog/hdfc-infinia-vs-axis-magnus-2026">Infinia vs Magnus head-to-head</GuideLink>, or for the full shortlist, the <GuideLink href="/blog/best-credit-cards-india-2026">best credit cards in India 2026</GuideLink>.</p>

          <H2 id="advanced">Advanced moves</H2>
          <div className="space-y-3">
            {[
              { title: 'Always use the portal, never the catalogue', detail: 'SmartBuy (HDFC) and iShop (ICICI) give ₹1/point. The merchandise catalogue gives ₹0.20-0.35. This one habit alone can 3-4x your realised value.' },
              { title: 'Time transfers around bonus windows', detail: 'Airlines run periodic transfer bonuses (20-30% extra miles). If you have a redemption planned, wait for a bonus window before transferring.' },
              { title: 'Use the free 5th night on hotel awards', detail: 'Marriott gives the 5th award night free — a built-in 20% discount. Structure hotel stays in 5-night blocks where possible.' },
              { title: 'Match lounge networks to your airports', detail: 'After the DreamFolks collapse, lounge access fragmented. Know whether your airport uses Priority Pass, Adani LoungeOne, or HOI before you fly.', href: '/blog/best-credit-cards-lounge-access-india-2026', linkText: 'Lounge access guide' },
              { title: 'Check fee breakeven before holding a card', detail: 'A premium card only makes sense if your spend clears its fee in value. Run the numbers before paying any annual fee.', href: '/tools/breakeven', linkText: 'Breakeven calculator' },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl" style={{ background: '#FBF8F0', border: '1px solid #E8DFC5' }}>
                <p className="text-[13px] font-bold mb-1" style={{ color: 'var(--gold, #B8953E)' }}>→ {item.title}</p>
                <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>{item.detail}{item.href && <> <a href={item.href} style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>{item.linkText}</a>.</>}</p>
              </div>
            ))}
          </div>

          <H2 id="mistakes">The five most expensive mistakes</H2>
          <div className="space-y-2">
            {[
              'Redeeming for merchandise — the catalogue is always the worst rate (₹0.20-0.30/point)',
              'Hoarding points — they devalue and expire; earn toward a goal and redeem',
              'Ignoring the portal/transfer options on premium cards — leaving 50-150% value on the table',
              'Putting all spend on one card — you miss category bonuses worth thousands',
              'Holding a premium card you don\'t use enough to clear the fee — paying for benefits you don\'t realise',
            ].map((m, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="text-[13px]" style={{ color: 'var(--red)' }}>✕</span>
                <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>{m}</p>
              </div>
            ))}
          </div>

          <H2 id="bottom-line">The bottom line</H2>
          <p>Points maximisation in India isn't about complex hacks — it's about <S>discipline across three stages: earn on the right cards, hold without hoarding, and redeem by always comparing rupee value.</S> A disciplined cardholder spending ₹10 lakh a year can realistically generate ₹30,000-50,000+ in annual value, and far more when points are channelled into premium-cabin flights.</p>
          <p>The single highest-leverage habit is the simplest: <S>never redeem without comparing methods by rupee-per-point value.</S> Everything else is optimisation on top of that one discipline.</p>
          <p>Start with the <a href="/tools/card-quiz" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>card quiz</a> to find your stack, use the <a href="/" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>calculator</a> to value your points before every redemption, and bookmark this playbook as your reference. Every linked guide goes deeper on its piece of the system.</p>

          <div className="p-6 rounded-2xl text-center mt-8" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <p className="text-[16px] font-semibold">Put the system to work</p>
            <p className="text-[13px] mt-1 mb-4" style={{ color: 'rgba(250,248,245,0.5)' }}>Find your ideal card stack, then value every redemption — free, no signup.</p>
            <div className="flex gap-2 justify-center flex-wrap">
              <a href="/tools/card-quiz" className="inline-block px-5 py-2.5 rounded-xl text-[14px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Take the Card Quiz →</a>
              <a href="/" className="inline-block px-5 py-2.5 rounded-xl text-[14px] font-semibold" style={{ background: 'rgba(255,255,255,0.1)', color: '#FAF8F5', border: '1px solid rgba(255,255,255,0.15)' }}>Open Calculator →</a>
            </div>
          </div>

          <p className="text-[11px] mt-8 leading-relaxed" style={{ color: 'var(--text-m)' }}>
            <strong>Disclaimer:</strong> Reward rates, transfer ratios, redemption values, and card terms change frequently and without notice. All figures are typical ranges as of June 2026 based on publicly available information. Always verify current terms before applying for a card or redeeming points. PointsMax is not affiliated with any bank and earns no affiliate commissions. Not financial advice.
          </p>

          <FeedbackWidget pageSlug="points-maximisation-playbook-india-2026" pageTitle="The Points Maximisation Playbook India 2026" />
        </div>
      </article>

      <footer className="py-10 px-5" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[12px]" style={{ color: 'var(--text-m)' }}>
            <a href="/">PointsMax</a><span className="mx-2">·</span>
            <a href="/transfers">Transfers</a><span className="mx-2">·</span>
            <a href="/blog">Learn</a><span className="mx-2">·</span>
            <a href="/privacy">Privacy</a>
          </p>
        </div>
      </footer>

      {showBar && (
        <div className="hidden sm:block fixed bottom-0 left-0 right-0 z-50" style={{ background: 'var(--dark)', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '10px 16px' }}>
          <div className="max-w-2xl mx-auto flex items-center justify-between gap-3">
            <p className="text-[13px]" style={{ color: 'rgba(250,248,245,0.6)' }}>Find your ideal <strong style={{ color: '#FAF8F5' }}>card stack</strong></p>
            <a href="/tools/card-quiz" className="shrink-0 px-4 py-2 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Take the Quiz →</a>
          </div>
        </div>
      )}
    </div>
  )
}
