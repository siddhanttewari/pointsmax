'use client'

import { useState, useEffect } from 'react'
import FeedbackWidget from '@/components/FeedbackWidget'
import PageNav from '@/components/PageNav'

const blogJsonLd = {
  '@context': 'https://schema.org', '@type': 'Product',
  name: 'American Express Membership Rewards Credit Card (MRCC)',
  brand: { '@type': 'Brand', name: 'American Express' },
  category: 'Credit Card',
  description: 'Amex MRCC is an entry-level Membership Rewards card with a progressive milestone structure — spend ₹20,000/month to earn up to 2,000 bonus MR points, with the ₹4,500 annual fee fully waived at ₹1.5L annual spend.',
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.2', bestRating: '5', worstRating: '1', reviewCount: '1' },
  review: {
    '@type': 'Review',
    reviewRating: { '@type': 'Rating', ratingValue: '4.2', bestRating: '5', worstRating: '1' },
    author: { '@type': 'Organization', name: 'PointsMax' },
    datePublished: '2026-06-15',
    reviewBody: 'Amex MRCC is one of the highest effective-return entry-level cards in India when the monthly ₹20,000 milestone is consistently hit. At ₹2.4L annual spend, the milestone bonus alone produces roughly 12,000 extra MR points worth ₹4,500-7,000 — enough to fully offset the annual fee. The card excludes fuel, utilities, and insurance from rewards, and Amex has paused new applications in select Indian cities as of May 2026.',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is Amex MRCC worth it in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Amex MRCC is worth it for anyone who can consistently spend ₹20,000+ per month on a single card. The monthly milestone gives 2,000 bonus MR points (1,000 for four ₹1,500+ transactions plus 1,000 for crossing ₹20,000), on top of the base 1 point per ₹50. At ₹2.4L annual spend, this produces roughly 28,800-33,600 MR points worth ₹14,400-19,500 depending on redemption — multiple times the ₹4,500 renewal fee, which is also fully waived at ₹1.5L annual spend.' }},
    { '@type': 'Question', name: 'What is the MRCC monthly milestone and how do I qualify?', acceptedAnswer: { '@type': 'Answer', text: 'The MRCC milestone has two parts. First, make at least four transactions of ₹1,500 or more in a calendar month to earn 1,000 bonus MR points. Second, spend ₹20,000 or more in total in that same month to earn an additional 1,000 bonus MR points. Together this is up to 2,000 bonus points per month, on top of the standard 1 point per ₹50 earn rate. You must enrol in the milestone benefit program once via the Amex app or website — it does not apply automatically.' }},
    { '@type': 'Question', name: 'Can I apply for Amex MRCC in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'As of May 2026, American Express has paused new card applications in select Indian cities. Availability varies and changes periodically — check directly on the American Express India website before applying, as a CIBIL inquiry is generated instantly and is permanent on your credit report regardless of approval outcome.' }},
  ],
}

export default function BlogPost() {
  const [showBar, setShowBar] = useState(false)
  const [monthlySpend, setMonthlySpend] = useState(20000)

  useEffect(() => {
    const fn = () => setShowBar(window.scrollY > 600)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const H2 = ({ children }) => (
    <h2 className="pt-8" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', letterSpacing: '-0.01em' }}>{children}</h2>
  )
  const S = ({ children }) => <strong style={{ color: 'var(--text)' }}>{children}</strong>

  // Calculator math
  const annualSpend = monthlySpend * 12
  const hitsMilestone = monthlySpend >= 20000
  const basePoints = Math.floor(annualSpend / 50)
  const milestonePoints = hitsMilestone ? 2000 * 12 : 0
  const totalPoints = basePoints + milestonePoints
  const valueLow = totalPoints * 0.38
  const valueHigh = totalPoints * 0.58
  const fee = 4500
  const waiver = annualSpend >= 150000 ? 100 : annualSpend >= 75000 ? 50 : 0
  const netFee = fee * (1 - waiver / 100)
  const netValueLow = valueLow - netFee
  const netValueHigh = valueHigh - netFee

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageNav />

      <article className="max-w-2xl mx-auto px-5 py-12">
        <div className="flex items-center gap-2 mb-8 text-[13px]" style={{ color: 'var(--text-m)' }}>
          <a href="/">PointsMax</a><span>/</span>
          <a href="/blog">Learn</a><span>/</span>
          <span style={{ color: 'var(--text-s)' }}>Amex MRCC Review</span>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded" style={{ color: '#2563eb', background: 'rgba(37,99,235,0.06)' }}>Card Review</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>June 15, 2026</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>9 min read</span>
        </div>

        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(24px, 4vw, 36px)', lineHeight: 1.15, letterSpacing: '-0.025em', color: 'var(--text)' }}>
          Amex MRCC Review 2026: The ₹1,000 Card That Outperforms ₹12,500 Premium Cards
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
          A ₹1,000 joining fee, ₹4,500 renewal — and a milestone structure that can produce a higher effective return than HDFC Infinia, if you hit ₹20,000/month consistently. Here's the honest math, and the May 2026 application pause to know about.
        </p>

        {/* Quick verdict */}
        <div className="mt-8 p-5 rounded-2xl" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
          <div className="flex items-center justify-between mb-3">
            <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: 'rgba(250,248,245,0.4)' }}>Quick verdict</p>
            <div className="flex items-center gap-1">
              {[1,2,3,4].map(i => <span key={i} style={{ color: 'var(--gold, #B8953E)' }}>★</span>)}
              <span style={{ color: 'rgba(250,248,245,0.25)' }}>★</span>
              <span className="text-[13px] font-mono font-bold ml-1" style={{ color: 'var(--gold, #B8953E)' }}>4.2/5</span>
            </div>
          </div>
          <p className="text-[14px] leading-relaxed" style={{ color: 'rgba(250,248,245,0.75)' }}>
            MRCC is one of the best-kept secrets in Indian credit cards. The base earn rate (1 point per ₹50, roughly 1%) looks unremarkable — but the monthly milestone structure (2,000 bonus MR points for ₹20,000 spend) means consistent spenders can hit effective returns of 6-8%. At ₹2.4L annual spend, the fee is fully waived and you're left with pure profit. The catch: fuel, utilities, and insurance are excluded, and Amex acceptance is patchier than Visa/Mastercard. Also — Amex has paused new applications in some cities as of May 2026, so check availability first.
          </p>
        </div>

        <div className="mt-10 space-y-6 text-[15px] leading-[1.85]" style={{ color: 'var(--text-s)' }}>

          <p>Most "best credit card" lists in India focus on premium cards with ₹10,000-12,500 annual fees. The Amex MRCC rarely makes those lists — its ₹4,500 renewal fee and 1 point per ₹50 base rate (around 1%) look unremarkable on paper.</p>
          <p>But MRCC's actual value comes from its <S>monthly milestone structure</S> — a feature most reviews underweight. Once you understand the milestone math, MRCC becomes one of the highest effective-return cards in India for anyone with consistent ₹20,000+/month spend on a single card.</p>

          <H2>The fee structure — and the progressive waiver</H2>
          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-[13px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead><tr>
                <th className="text-left py-3 px-3 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Fee component</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Amount</th>
              </tr></thead>
              <tbody>
                {[
                  ['Joining fee', '₹1,000 + GST'],
                  ['Annual renewal fee', '₹4,500 + GST'],
                  ['Welcome bonus', '4,000 MR points on ₹15,000 spend within 90 days'],
                ].map(([label, val], i) => (
                  <tr key={i}>
                    <td className="py-2.5 px-3 font-medium" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{label}</td>
                    <td className="py-2.5 px-2 text-center font-mono" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-xl" style={{ background: '#EDF5F0', border: '1px solid #C8DDD0' }}>
            <p className="text-[13px] font-bold mb-2" style={{ color: 'var(--green)' }}>The progressive waiver — uncommon and valuable</p>
            <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>Most Indian cards have a binary fee waiver: either you hit the threshold or you pay full fee. MRCC's waiver is <S>progressive</S> — spend ₹75,000/year and get a 50% waiver (save ₹2,250). Spend ₹1.5 lakh/year and the fee is fully waived. Even partial-year spenders get partial credit, which is rare.</p>
          </div>

          <H2>The milestone math — the real reason MRCC works</H2>
          <p>The base rate is <S>1 MR point per ₹50</S>, excluding fuel, utilities, insurance, and cash transactions — roughly a 1% return at typical MR redemption values. On its own, unremarkable.</p>
          <p>The milestone structure changes everything. Each calendar month, you can earn:</p>
          <div className="space-y-2">
            {[
              { n: '1', t: '1,000 bonus MR points', d: 'For making at least 4 transactions of ₹1,500 or more in the month — easy to hit with normal spending split across groceries, dining, shopping.' },
              { n: '2', t: '1,000 bonus MR points', d: 'For total monthly spend of ₹20,000 or more. Combined with #1, that\'s 2,000 bonus points/month — on top of the base 1/₹50 rate.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start p-3 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <span className="w-6 h-6 rounded-full grid place-items-center text-[11px] font-bold shrink-0 mt-0.5" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>{item.n}</span>
                <div>
                  <p className="text-[13px] font-semibold" style={{ color: 'var(--text)' }}>{item.t}</p>
                  <p className="text-[12px] mt-0.5" style={{ color: 'var(--text-m)' }}>{item.d}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-2">Note: <S>you must enrol once</S> in the milestone benefit programme via the Amex app or website. It does not apply automatically — many cardholders miss out simply by not enrolling.</p>

          {/* Interactive calculator */}
          <div className="p-5 rounded-2xl" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <p className="text-[12px] font-bold uppercase tracking-widest mb-3" style={{ color: 'rgba(250,248,245,0.4)' }}>Calculate your effective return</p>
            <p className="text-[12px] mb-3" style={{ color: 'rgba(250,248,245,0.5)' }}>Your typical monthly spend on this card</p>
            <div className="flex gap-1.5 flex-wrap mb-4">
              {[10000, 15000, 20000, 30000, 50000].map(v => (
                <button key={v} onClick={() => setMonthlySpend(v)} className="px-3 py-1.5 rounded-lg text-[12px] font-mono"
                  style={{ background: monthlySpend === v ? 'var(--gold, #B8953E)' : 'rgba(255,255,255,0.08)', color: monthlySpend === v ? 'var(--dark)' : 'rgba(250,248,245,0.6)' }}>
                  ₹{(v/1000).toFixed(0)}K
                </button>
              ))}
            </div>
            <div className="space-y-2 text-[13px]">
              {[
                { label: 'Annual spend', value: `₹${annualSpend.toLocaleString('en-IN')}` },
                { label: 'Base MR points (1/₹50)', value: basePoints.toLocaleString('en-IN') },
                { label: 'Milestone bonus points', value: hitsMilestone ? `${milestonePoints.toLocaleString('en-IN')} (hit ₹20K/mo)` : '0 (below ₹20K/mo)', warn: !hitsMilestone },
                { label: 'Total MR points/year', value: totalPoints.toLocaleString('en-IN') },
                { label: 'Points value (₹0.38-0.58/pt)', value: `₹${Math.round(valueLow).toLocaleString('en-IN')} - ₹${Math.round(valueHigh).toLocaleString('en-IN')}` },
                { label: `Annual fee (${waiver}% waived)`, value: `₹${Math.round(netFee).toLocaleString('en-IN')}` },
                { label: 'Net annual value', value: `₹${Math.round(netValueLow).toLocaleString('en-IN')} - ₹${Math.round(netValueHigh).toLocaleString('en-IN')}`, highlight: true },
              ].map((r, i) => (
                <div key={i} className="flex justify-between py-1.5" style={{ borderBottom: i < 6 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                  <span style={{ color: 'rgba(250,248,245,0.55)' }}>{r.label}</span>
                  <span className="font-mono font-semibold" style={{ color: r.highlight ? '#6ee7b7' : r.warn ? '#fca5a5' : 'rgba(250,248,245,0.85)' }}>{r.value}</span>
                </div>
              ))}
            </div>
          </div>

          <p>At ₹20,000/month — exactly the milestone threshold — the card produces a net annual value of roughly ₹4,000-7,000 after fees. <S>The gap between hitting and missing the ₹20K monthly threshold is the entire game</S> — miss it by even ₹500 in a given month and you lose the full 1,000-point bonus for that month.</p>

          {/* Mid CTA */}
          <div className="p-5 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <div>
              <p className="text-[14px] font-semibold">Check if MRCC's fee is worth it for your spend</p>
              <p className="text-[12px] mt-1" style={{ color: 'rgba(250,248,245,0.5)' }}>Compare against your current card's effective return.</p>
            </div>
            <a href="/tools/breakeven" className="shrink-0 px-5 py-2.5 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Open Breakeven Calculator →</a>
          </div>

          <H2>What MR points are actually worth</H2>
          <p>Membership Rewards points have a wide value range depending on redemption — roughly <S>₹0.38 to ₹0.58 per point</S>. The redemption path matters a lot:</p>
          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-[13px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead><tr>
                <th className="text-left py-3 px-3 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Redemption</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>₹/point</th>
                <th className="text-left py-3 px-2 font-semibold" style={{ color: 'var(--text-m)', borderBottom: '1px solid var(--border)' }}>Note</th>
              </tr></thead>
              <tbody>
                {[
                  ['Gold Collection catalogue (Amazon/Tanishq vouchers)', '₹0.38-0.42', 'Lowest value but most flexible'],
                  ['Statement credit / bill payment', '~₹0.40', 'Simple but not the best rate'],
                  ['Airline/hotel transfer (1:1 partners)', '₹0.50-0.58+', 'Best value — but requires Star Alliance/hotel knowledge'],
                  ['Taj Hotels vouchers (24,000+ pts)', '~₹0.50-0.55', 'Strong redemption if you stay at Taj properties'],
                ].map(([label, rate, note], i) => (
                  <tr key={i}>
                    <td className="py-2.5 px-3 font-medium" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{label}</td>
                    <td className="py-2.5 px-2 text-center font-mono font-bold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>{rate}</td>
                    <td className="py-2.5 px-2 text-[12px]" style={{ color: 'var(--text-m)', borderBottom: '1px solid var(--border)' }}>{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p><S>MRCC points pool with other Amex cards</S> (except Platinum Travel in most cases) — so if you also hold Amex Gold Charge or Platinum, your MRCC points combine into the same balance, making it easier to reach redemption thresholds like the 24,000-point Taj voucher tier.</p>

          <H2>MRCC vs Gold Charge Card</H2>
          <p>Both cards share the same ₹1,000 joining / ₹4,500 renewal fee structure and the same 1 MR point per ₹50 base rate. The difference is in the bonus structure:</p>
          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-[13px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead><tr>
                <th className="text-left py-3 px-3 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}></th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--gold, #B8953E)', borderBottom: '1px solid var(--border)' }}>MRCC</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: '#2563eb', borderBottom: '1px solid var(--border)' }}>Gold Charge</th>
              </tr></thead>
              <tbody>
                {[
                  ['Monthly milestone', '2,000 MR pts at ₹20K spend', '1,000 MR pts at ₹20K spend'],
                  ['Gyftr voucher bonus', 'Standard rate', '5X on Gyftr (Amazon Pay, Blinkit)'],
                  ['Best for', 'High-volume single-card spenders (₹1.5-3L/yr)', 'Frequent small purchases + voucher stacking'],
                  ['Effective return (optimal use)', '~6-8% at ₹20K+/month', '~6% via 5X Gyftr peaks'],
                ].map(([label, mrcc, gold], i) => (
                  <tr key={i}>
                    <td className="py-2.5 px-3 font-medium" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{label}</td>
                    <td className="py-2.5 px-2 text-center text-[12px]" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>{mrcc}</td>
                    <td className="py-2.5 px-2 text-center text-[12px]" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>{gold}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>The verdict from the community is consistent: <S>MRCC for high-volume spenders who consistently hit ₹1.5-3L/year on one card; Gold Charge for those with lower overall spend who can exploit the 5X Gyftr multiplier on specific purchases.</S> If eligible for both, holding both and pooling points toward Taj voucher redemptions is the optimal play.</p>

          <H2>The May 2026 application pause</H2>
          <div className="p-4 rounded-xl" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
            <p className="text-[13px] font-bold mb-1" style={{ color: 'var(--red)' }}>⚠ Check availability before applying</p>
            <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>As of May 2026, American Express has paused new card applications in select Indian cities — availability varies and can change without notice. Before applying, verify on the official American Express India website. Note that a CIBIL inquiry is generated <S>instantly and permanently</S> the moment you submit an application, regardless of whether it's approved — so don't apply speculatively if availability is uncertain for your city.</p>
          </div>

          <H2>Who should get Amex MRCC</H2>
          <div className="space-y-3">
            <div className="p-4 rounded-xl" style={{ background: '#EDF5F0', border: '1px solid #C8DDD0' }}>
              <p className="text-[13px] font-bold mb-2" style={{ color: 'var(--green)' }}>Good fit if:</p>
              <ul className="space-y-1.5 text-[13px]" style={{ color: 'var(--text-s)', listStyleType: 'none', padding: 0 }}>
                <li className="flex gap-2"><span style={{ color: 'var(--green)' }}>→</span><span>You can consistently route ₹20,000+/month through one card across groceries, dining, shopping, bills</span></li>
                <li className="flex gap-2"><span style={{ color: 'var(--green)' }}>→</span><span>You don't mind enrolling in the milestone programme and tracking monthly progress</span></li>
                <li className="flex gap-2"><span style={{ color: 'var(--green)' }}>→</span><span>You already hold or are open to other Amex cards (Gold Charge, Platinum) to pool MR points toward better redemptions</span></li>
                <li className="flex gap-2"><span style={{ color: 'var(--green)' }}>→</span><span>Your annual spend on this card will reach ₹1.5L+ for the full fee waiver</span></li>
              </ul>
            </div>
            <div className="p-4 rounded-xl" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
              <p className="text-[13px] font-bold mb-2" style={{ color: 'var(--red)' }}>Skip if:</p>
              <ul className="space-y-1.5 text-[13px]" style={{ color: 'var(--text-s)', listStyleType: 'none', padding: 0 }}>
                <li className="flex gap-2"><span style={{ color: 'var(--red)' }}>→</span><span>Your spend is irregular and you'd often miss the ₹20K monthly threshold</span></li>
                <li className="flex gap-2"><span style={{ color: 'var(--red)' }}>→</span><span>You rely heavily on fuel/utility spend for rewards — both excluded on MRCC</span></li>
                <li className="flex gap-2"><span style={{ color: 'var(--red)' }}>→</span><span>You need airport lounge access — MRCC has none</span></li>
                <li className="flex gap-2"><span style={{ color: 'var(--red)' }}>→</span><span>Amex acceptance is too limited for your usual merchants (small towns, certain categories)</span></li>
              </ul>
            </div>
          </div>

          <H2>The bottom line</H2>
          <p>MRCC is genuinely underrated in Indian credit card content — overshadowed by premium cards with flashier annual fees and lounge access. But for the specific profile of <S>₹1.5-3L annual spend, concentrated on one card, with consistent monthly habits</S>, MRCC's milestone structure produces an effective return that rivals or beats cards costing 2-3x more in annual fees.</p>
          <p>The two things to get right: enrol in the milestone programme immediately after getting the card, and structure your spending to reliably clear ₹20,000/month — even shifting timing of bill payments or larger purchases to hit the threshold each month makes a measurable difference.</p>
          <p>Use the <a href="/tools/breakeven" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>Fee Breakeven Calculator</a> to compare MRCC against your current primary card, and check the <a href="/blog/best-lifetime-free-credit-cards-india-2026" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>best free cards guide</a> if a ₹4,500 fee (even waivable) doesn't fit your situation.</p>

          <div className="p-6 rounded-2xl text-center mt-8" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <p className="text-[16px] font-semibold">Is MRCC's fee worth it for your spending pattern?</p>
            <p className="text-[13px] mt-1 mb-4" style={{ color: 'rgba(250,248,245,0.5)' }}>Enter your monthly spend and compare net value against your current card.</p>
            <a href="/tools/breakeven" className="inline-block px-6 py-2.5 rounded-xl text-[14px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Open Breakeven Calculator →</a>
          </div>

          <p className="text-[11px] mt-8 leading-relaxed" style={{ color: 'var(--text-m)' }}>
            <strong>Disclaimer:</strong> Fee structure, milestone terms, and MR point values are based on publicly available Amex India terms as of June 2026 and may change without notice. Application availability varies by city and changes periodically — verify at americanexpress.com/in before applying, as CIBIL inquiries are instant and permanent. PointsMax is not affiliated with American Express. Not financial advice.
          </p>

          <FeedbackWidget pageSlug="amex-mrcc-credit-card-review-india-2026" pageTitle="Amex MRCC Review 2026" />
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
            <p className="text-[13px]" style={{ color: 'rgba(250,248,245,0.6)' }}>Is <strong style={{ color: '#FAF8F5' }}>Amex MRCC</strong> worth it for you?</p>
            <a href="/tools/breakeven" className="shrink-0 px-4 py-2 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Breakeven Calculator →</a>
          </div>
        </div>
      )}
    </div>
  )
}
