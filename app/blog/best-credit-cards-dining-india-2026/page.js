'use client'

import { useState, useEffect } from 'react'
import FeedbackWidget from '@/components/FeedbackWidget'
import PageNav from '@/components/PageNav'

const faqJsonLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which credit card gives the highest cashback on Swiggy in India?',
      acceptedAnswer: { '@type': 'Answer', text: 'The HDFC Swiggy Credit Card gives 10% cashback on all Swiggy orders (food, Instamart, Dineout, Genie) with no per-order cap, making it the highest earning card specifically for Swiggy. The SBI Cashback Card also gives 10% on Swiggy but within a shared ₹2,000/month cap across all online spend. For heavy Swiggy users, the dedicated HDFC Swiggy card is better.' }
    },
    {
      '@type': 'Question',
      name: 'Which credit card is best for dining at restaurants in India 2026?',
      acceptedAnswer: { '@type': 'Answer', text: 'For restaurant dining in India, HSBC Live+ gives 10% cashback on dining (capped at ₹1,000/month, ₹1,000 annual fee). For premium restaurant diners, the HDFC Infinia gives 3.33% via SmartBuy on restaurant transactions with no cap — better value for monthly restaurant spend above ₹30,000. The Axis Ace gives 2% flat with no dining cap and no annual fee via Google Pay.' }
    },
    {
      '@type': 'Question',
      name: 'Does HDFC Infinia earn reward points on Swiggy and Zomato?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — HDFC Infinia earns 5 reward points per ₹150 on Swiggy and Zomato transactions, equivalent to a 3.33% return when redeemed via SmartBuy at ₹1/point. However, this is not as high as the 10% cashback on a dedicated dining card like HDFC Swiggy. The Infinia is worth using for restaurant spend if you do not want to maintain multiple cards.' }
    },
  ],
}

export default function BlogPost() {
  const [showBar, setShowBar] = useState(false)
  const [mode, setMode] = useState('delivery')

  useEffect(() => {
    const fn = () => setShowBar(window.scrollY > 600)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const H2 = ({ children }) => (
    <h2 className="pt-8" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', letterSpacing: '-0.01em' }}>{children}</h2>
  )
  const S = ({ children }) => <strong style={{ color: 'var(--text)' }}>{children}</strong>

  const DELIVERY_CARDS = [
    { rank: 1, name: 'HDFC Swiggy Credit Card', fee: '₹500/year', rate: '10% on Swiggy', cap: 'No per-order cap', caveat: 'Swiggy-only. Useless for Zomato.', verdict: 'Best for heavy Swiggy users', color: 'var(--green)' },
    { rank: 2, name: 'SBI Cashback Card', fee: '₹999/year', rate: '10% online (incl. Swiggy/Zomato)', cap: '₹2,000/month total online', caveat: 'Cap shared across ALL online spend — not just dining.', verdict: 'Best all-round free card. Use here carefully.', color: 'var(--green)' },
    { rank: 3, name: 'HSBC Live+', fee: '₹1,000/year', rate: '10% on dining/food delivery', cap: '₹1,000/month on dining', caveat: 'Both Swiggy AND restaurant POS share this ₹1K cap.', verdict: 'Best for light delivery + restaurant combo', color: 'var(--gold)' },
    { rank: 4, name: 'Axis ACE (via Google Pay)', fee: '₹499/year', rate: '5% on all Google Pay txns', cap: 'No dining cap', caveat: 'Must pay via Google Pay. Works for Swiggy & Zomato via GPay.', verdict: 'Best no-cap option if you use Google Pay', color: 'var(--gold)' },
    { rank: 5, name: 'HDFC Infinia / Diners Black', fee: '₹12,500/year', rate: '3.33% on all spend incl. Zomato/Swiggy', cap: 'No dining-specific cap', caveat: 'Overkill for dining alone. Use this if it is your primary card.', verdict: 'Best if Infinia is already your primary card', color: 'var(--text-m)' },
  ]

  const RESTAURANT_CARDS = [
    { rank: 1, name: 'HSBC Live+', fee: '₹1,000/year', rate: '10% at restaurants (Dineout, EazyDiner)', cap: '₹1,000/month shared', caveat: 'Cap shared with food delivery. Exhausted fast if you also order in.', verdict: 'Best for restaurant-only diners', color: 'var(--green)' },
    { rank: 2, name: 'EazyDiner IndusInd Credit Card', fee: '₹1,999/year', rate: 'Up to 50% off at partner restaurants', cap: '₹1,000 max discount/transaction', caveat: 'Works only at EazyDiner partner restaurants. Useless outside.', verdict: 'Best for fine dining at EazyDiner partners', color: 'var(--green)' },
    { rank: 3, name: 'Amex Gold / MRCC', fee: '₹4,500/year (Gold)', rate: '5X at standalone restaurants', cap: 'No cap', caveat: 'Amex not accepted at all restaurants. Check acceptance first.', verdict: 'Best for high-spend restaurant diners (no cap)', color: 'var(--gold)' },
    { rank: 4, name: 'HDFC Infinia', fee: '₹12,500/year', rate: '3.33% SmartBuy + no MCC restriction', cap: 'No dining cap', caveat: 'Consistent 3.33% everywhere. No special dining bonus.', verdict: 'Best if you want one card for everything', color: 'var(--text-m)' },
  ]

  const activeCards = mode === 'delivery' ? DELIVERY_CARDS : RESTAURANT_CARDS

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Best Credit Cards for Dining India 2026', datePublished: '2026-06-05', author: { '@type': 'Organization', name: 'PointsMax' }, publisher: { '@type': 'Organization', name: 'PointsMax', url: 'https://www.pointsmax.in' } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageNav />

      <article className="max-w-2xl mx-auto px-5 py-12">
        <div className="flex items-center gap-2 mb-8 text-[13px]" style={{ color: 'var(--text-m)' }}>
          <a href="/">PointsMax</a><span>/</span>
          <a href="/blog">Learn</a><span>/</span>
          <span style={{ color: 'var(--text-s)' }}>Best Dining Cards</span>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded" style={{ color: 'var(--green)', background: 'rgba(45,106,79,0.08)' }}>Guide</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>June 5, 2026</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>8 min read</span>
        </div>

        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(24px, 4vw, 36px)', lineHeight: 1.15, letterSpacing: '-0.025em', color: 'var(--text)' }}>
          Best Credit Cards for Dining India 2026: Restaurants, Swiggy & Zomato Ranked
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
          The best dining card depends on whether you eat out or order in. A 10% cashback card with a ₹1,000/month cap is often worth less than it sounds. Here's the honest ranking — with caps, caveats, and real monthly savings.
        </p>

        <div className="mt-10 space-y-6 text-[15px] leading-[1.85]" style={{ color: 'var(--text-s)' }}>

          <p>Most "best dining card" guides list 10-15 cards and declare a winner based on the headline cashback rate. But the headline rate rarely tells the whole story. A 10% cashback card capped at ₹1,000/month saves you ₹12,000/year — but only if your dining spend stays below ₹10,000/month. Spend more, and the cap kicks in and your effective rate collapses.</p>
          <p>The right approach: <S>split your dining into two buckets — food delivery apps and restaurant POS — and pick the best card for each.</S> They are genuinely different spending patterns and the best card for one is rarely the best for the other.</p>

          <H2>The caps problem — why headline rates mislead</H2>

          <div className="p-5 rounded-2xl" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <p className="text-[12px] font-bold uppercase tracking-widest mb-3" style={{ color: 'rgba(250,248,245,0.4)' }}>Real example: HSBC Live+ at ₹15,000/month dining spend</p>
            <div className="space-y-2 text-[13px]">
              {[
                { label: 'Headline rate', val: '10% on dining' },
                { label: 'Monthly cap', val: '₹1,000 cashback' },
                { label: 'Spend where 10% applies', val: 'First ₹10,000' },
                { label: 'Spend above cap (₹5,000)', val: '0% cashback' },
                { label: 'Effective rate at ₹15,000/month', val: '6.67% — not 10%', highlight: true },
                { label: 'At ₹30,000/month', val: '3.33% — same as Infinia', highlight: true },
              ].map((r, i) => (
                <div key={i} className="flex justify-between py-1.5" style={{ borderBottom: i < 5 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                  <span style={{ color: 'rgba(250,248,245,0.5)' }}>{r.label}</span>
                  <span className="font-mono font-semibold" style={{ color: r.highlight ? '#fca5a5' : 'rgba(250,248,245,0.8)' }}>{r.val}</span>
                </div>
              ))}
            </div>
          </div>

          <p>The lesson: <S>always calculate your effective rate = (monthly cap ÷ monthly dining spend) × 100.</S> If your dining spend consistently exceeds the cap threshold, a no-cap card at a lower headline rate often wins.</p>

          <H2>Best cards by dining type</H2>

          <div className="flex gap-2 mb-5">
            {[
              { id: 'delivery', label: '📱 Food Delivery (Swiggy/Zomato)' },
              { id: 'restaurant', label: '🍽️ Restaurant Dining (POS)' },
            ].map(tab => (
              <button key={tab.id} onClick={() => setMode(tab.id)}
                className="flex-1 py-2.5 px-3 rounded-xl text-[13px] font-medium transition-all"
                style={{
                  background: mode === tab.id ? 'var(--dark)' : 'var(--bg-s)',
                  color: mode === tab.id ? '#FAF8F5' : 'var(--text-s)',
                  border: '1px solid var(--border)',
                }}>
                {tab.label}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {activeCards.map((card, i) => (
              <div key={i} className="p-4 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <div className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full grid place-items-center text-[12px] font-bold shrink-0" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>{card.rank}</span>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 flex-wrap">
                      <p className="text-[15px] font-semibold" style={{ color: 'var(--text)' }}>{card.name}</p>
                      <span className="text-[11px] font-mono" style={{ color: 'var(--text-m)' }}>{card.fee}</span>
                    </div>
                    <div className="flex items-center gap-3 mt-1 flex-wrap">
                      <span className="text-[13px] font-bold" style={{ color: card.color }}>{card.rate}</span>
                      <span className="text-[11px] px-2 py-0.5 rounded-full" style={{ background: 'var(--bg-s)', color: 'var(--text-m)', border: '1px solid var(--border)' }}>Cap: {card.cap}</span>
                    </div>
                    <p className="text-[12px] mt-2" style={{ color: 'var(--red)' }}>⚠️ {card.caveat}</p>
                    <p className="text-[12px] mt-1 font-semibold" style={{ color: card.color }}>→ {card.verdict}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mid CTA */}
          <div className="p-5 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <div>
              <p className="text-[14px] font-semibold">Check what your current card earns on dining</p>
              <p className="text-[12px] mt-1" style={{ color: 'rgba(250,248,245,0.5)' }}>Select your card — see actual ₹/point on dining vs other categories.</p>
            </div>
            <a href="/" className="shrink-0 px-5 py-2.5 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>Open Calculator →</a>
          </div>

          <H2>The two-card dining stack</H2>
          <p>The same logic as the <a href="/blog/best-credit-cards-international-travel-india-2026" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>international travel two-card stack</a> applies to dining. No single card wins on every dining scenario. The optimal setup:</p>

          <div className="p-5 rounded-xl" style={{ background: '#EDF5F0', border: '1px solid #C8DDD0' }}>
            <p className="text-[14px] font-bold mb-3" style={{ color: 'var(--green)' }}>The dining two-card stack</p>
            <div className="space-y-3 text-[13px]">
              <div className="flex gap-3">
                <span className="w-6 h-6 rounded-full grid place-items-center text-[11px] font-bold shrink-0" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>1</span>
                <div>
                  <p style={{ color: 'var(--text)' }}><S>HDFC Swiggy Card (₹500/year)</S> — for all Swiggy orders</p>
                  <p style={{ color: 'var(--text-m)' }}>10% back. No per-order cap. ₹500 fee recovered in 5 orders at ₹1,000 each.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="w-6 h-6 rounded-full grid place-items-center text-[11px] font-bold shrink-0" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>2</span>
                <div>
                  <p style={{ color: 'var(--text)' }}><S>HSBC Live+ (₹1,000/year)</S> — for restaurant dining under ₹10K/month</p>
                  <p style={{ color: 'var(--text-m)' }}>10% back up to ₹1,000/month. Full cap utilized if dining ≤ ₹10K/month.</p>
                </div>
              </div>
            </div>
            <div className="mt-3 pt-3" style={{ borderTop: '1px solid #C8DDD0' }}>
              <p className="text-[13px]" style={{ color: 'var(--green)' }}>Combined annual fee: ₹1,500. Annual saving at ₹10,000 Swiggy + ₹8,000 restaurant/month: ₹12,000+ (8x the fee).</p>
            </div>
          </div>

          <H2>What about Zomato?</H2>
          <p>Zomato doesn't have a dedicated co-branded card in India the way Swiggy does with HDFC. The best options for Zomato spend:</p>
          <ul className="space-y-2 pl-1 mt-2" style={{ listStyleType: 'none' }}>
            <li className="flex gap-2"><span style={{ color: 'var(--gold)' }}>→</span><span><S>SBI Cashback Card (10% online)</S> — Zomato is an online transaction, so the 10% applies within the ₹2,000/month cap. Best option if you're a moderate spender.</span></li>
            <li className="flex gap-2"><span style={{ color: 'var(--gold)' }}>→</span><span><S>Axis ACE via Google Pay (5%)</S> — Pay your Zomato bill through Google Pay. 5% back with no dining-specific cap. Reliable for heavy Zomato users beyond the SBI cap.</span></li>
            <li className="flex gap-2"><span style={{ color: 'var(--gold)' }}>→</span><span><S>HDFC Infinia (3.33%)</S> — Lower rate but no cap, and you're already earning on everything else too. Simple if Infinia is your primary card.</span></li>
          </ul>

          <H2>Cards that seem good but aren't</H2>
          <div className="space-y-3">
            {[
              { name: 'EazyDiner IndusInd at non-partner restaurants', why: 'The 50% discount is real — but only at EazyDiner partner restaurants. Step outside that network and you get standard rewards. Verify your regular restaurants are on EazyDiner before choosing this card.' },
              { name: 'Any card with ₹500/month dining cap', why: 'Several mid-range cards advertise "20% dining cashback" but with ₹500/month caps. That\'s ₹6,000/year maximum — barely worth the annual fee. Calculate actual cap savings before applying.' },
              { name: 'HDFC Diners Club Privilege for dining', why: 'Often listed in dining guides. 5X on restaurants looks attractive but HDFC Diners Club (not Diners Club Black) has poor acceptance, and the point value doesn\'t match its premium card peers.' },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
                <p className="text-[13px] font-bold mb-1" style={{ color: 'var(--red)' }}>✕ {item.name}</p>
                <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>{item.why}</p>
              </div>
            ))}
          </div>

          <H2>Quick comparison table</H2>
          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-[12px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead><tr>
                <th className="text-left py-3 px-3 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Card</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Dining rate</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Monthly cap</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Annual fee</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Best for</th>
              </tr></thead>
              <tbody>
                {[
                  ['HDFC Swiggy', '10%', 'No cap (Swiggy only)', '₹500', 'Swiggy-only users'],
                  ['SBI Cashback', '10% online', '₹2,000 (all online)', '₹999', 'Swiggy + Zomato light users'],
                  ['HSBC Live+', '10% dining', '₹1,000/month', '₹1,000', 'Restaurant diners ≤₹10K/mo'],
                  ['Axis ACE (GPay)', '5% via GPay', 'No dining cap', '₹499', 'Zomato heavy users'],
                  ['Amex Gold MRCC', '5X at restaurants', 'No cap', '₹4,500', 'Fine dining, no cap needed'],
                  ['HDFC Infinia', '3.33%', 'No dining cap', '₹12,500*', 'Primary card for everything'],
                ].map(([card, rate, cap, fee, best], i) => (
                  <tr key={i}>
                    <td className="py-2.5 px-3 font-medium" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{card}</td>
                    <td className="py-2.5 px-2 text-center font-mono font-bold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>{rate}</td>
                    <td className="py-2.5 px-2 text-center" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>{cap}</td>
                    <td className="py-2.5 px-2 text-center font-mono" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>{fee}</td>
                    <td className="py-2.5 px-2 text-center text-[11px]" style={{ color: 'var(--text-m)', borderBottom: '1px solid var(--border)' }}>{best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-[11px] mt-2" style={{ color: 'var(--text-m)' }}>*HDFC Infinia fee waived at ₹10L annual spend.</p>
          </div>

          <H2>The bottom line</H2>
          <p>For food delivery — <S>HDFC Swiggy card for Swiggy, SBI Cashback for Zomato within limits, Axis ACE for Zomato beyond those limits.</S> Total cost: ₹1,500/year. Total return on ₹10,000/month food delivery: ₹12,000/year — an 8x return on fees.</p>
          <p>For restaurant dining — <S>HSBC Live+ if you spend under ₹10,000/month at restaurants, Amex Gold MRCC if you spend more and want no cap.</S></p>
          <p>If you want to keep things simple with one card: HDFC Infinia's 3.33% on everything including dining is consistent and hassle-free — but you're leaving 6-7% on the table versus a dedicated dining stack.</p>
          <p>Use the <a href="/tools/breakeven" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>Fee Breakeven Calculator</a> to check whether a dedicated dining card's fee is justified by your actual monthly dining spend. And check our <a href="/blog/best-lifetime-free-credit-cards-india-2026" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>best free cards guide</a> — SBI Cashback's dining value at ₹999/year is genuinely hard to beat.</p>

          <div className="p-6 rounded-2xl text-center mt-8" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <p className="text-[16px] font-semibold">Is your annual fee worth it for dining?</p>
            <p className="text-[13px] mt-1 mb-4" style={{ color: 'rgba(250,248,245,0.5)' }}>Enter your monthly dining spend → see if the fee pays for itself.</p>
            <a href="/tools/breakeven" className="inline-block px-6 py-2.5 rounded-xl text-[14px] font-semibold" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>Open Breakeven Calculator →</a>
          </div>

          <p className="text-[11px] mt-8 leading-relaxed" style={{ color: 'var(--text-m)' }}>
            <strong>Disclaimer:</strong> Cashback rates, caps, and card benefits change frequently. Always verify current terms on the card issuer's website before applying. PointsMax is not affiliated with any bank and earns no affiliate commissions. Not financial advice.
          </p>

          <FeedbackWidget pageSlug="best-credit-cards-dining-india-2026" pageTitle="Best Credit Cards for Dining India 2026" />
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
            <p className="text-[13px]" style={{ color: 'rgba(250,248,245,0.6)' }}>Is your <strong style={{ color: '#FAF8F5' }}>dining card</strong> fee worth it?</p>
            <a href="/tools/breakeven" className="shrink-0 px-4 py-2 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>Breakeven Calculator →</a>
          </div>
        </div>
      )}
    </div>
  )
}
