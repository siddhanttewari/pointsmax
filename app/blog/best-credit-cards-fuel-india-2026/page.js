'use client'

import { useState, useEffect } from 'react'
import FeedbackWidget from '@/components/FeedbackWidget'

const blogJsonLd = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Best Credit Cards for Fuel in India 2026: The Honest Rankings',
  datePublished: '2026-05-23', dateModified: '2026-05-23',
  author: { '@type': 'Organization', name: 'PointsMax' },
  publisher: { '@type': 'Organization', name: 'PointsMax', url: 'https://www.pointsmax.in' },
  mainEntityOfPage: 'https://www.pointsmax.in/blog/best-credit-cards-fuel-india-2026',
}

const faqJsonLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is the best credit card for fuel in India in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'For most people, the Amazon Pay ICICI or SBI Cashback card beats dedicated fuel cards — they give 5% on all online spend including fuel apps like HP Pay and IOCL. For offline fuel station swipes, the BPCL SBI Card gives 4.25% back at BPCL pumps, and the IndianOil Axis Bank card gives up to 4% at IOCL outlets. The key insight: general cashback cards often outperform dedicated fuel cards.' }},
    { '@type': 'Question', name: 'Is there a 1% fuel surcharge waiver on credit cards in India?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, most Indian credit cards waive the 1% fuel surcharge on transactions between ₹400 and ₹4,000 (limits vary by card). This is a baseline benefit on almost every card. Standalone, it saves about ₹600-700 per year on ₹5,000/month fuel spend. It should not be the primary reason to pick a card.' }},
    { '@type': 'Question', name: 'Should I use a general cashback card or a dedicated fuel card?', acceptedAnswer: { '@type': 'Answer', text: 'For most Indians, a general cashback card wins. Dedicated fuel cards (BPCL SBI, IndianOil Axis) give 4-4.25% at specific fuel companies but lock you to one pump network and have monthly caps. General cards like Amazon Pay ICICI (5% on HP Pay, IOCL app) or SBI Cashback (5% any online fuel payment) are more flexible and often give higher returns.' }},
  ],
}

export default function BlogPost() {
  const [showBar, setShowBar] = useState(false)
  const [fuelSpend, setFuelSpend] = useState(5000)
  useEffect(() => {
    const fn = () => setShowBar(window.scrollY > 600)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const H2 = ({ children }) => <h2 className="pt-6" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', letterSpacing: '-0.01em' }}>{children}</h2>
  const S = ({ children }) => <strong style={{ color: 'var(--text)' }}>{children}</strong>

  const annualFuel = fuelSpend * 12
  const cards = [
    { name: 'Amazon Pay ICICI (via HP Pay/IOCL app)', rate: 0.05, fee: 0, cap: null, note: 'Online fuel payments only (HP Pay, IOCL FuelOn)' },
    { name: 'SBI Cashback (fuel apps)', rate: 0.05, fee: 0, cap: 2000, note: '₹2K monthly cap — maxes at ₹40K/mo online spend' },
    { name: 'BPCL SBI Card', rate: 0.0425, fee: 499, cap: null, note: 'BPCL pumps only. 3.25% rewards + 1% surcharge waiver' },
    { name: 'IndianOil Axis Bank', rate: 0.04, fee: 500, cap: 250, note: 'IOCL outlets. 250 reward points cap per statement' },
    { name: 'HDFC Infinia (SmartBuy fuel)', rate: 0.0333, fee: 12500, cap: null, note: 'Base rate. Better used for travel redemptions' },
    { name: 'Standard card (1% surcharge waiver only)', rate: 0.01, fee: 0, cap: null, note: 'Most basic cards — just saves the surcharge' },
  ]

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <article className="max-w-2xl mx-auto px-5 py-12">
        <div className="flex items-center gap-2 mb-8 text-[13px]" style={{ color: 'var(--text-m)' }}>
          <a href="/" className="hover:text-black/50 transition-colors">PointsMax</a><span>/</span>
          <a href="/blog" className="hover:text-black/50 transition-colors">Blog</a><span>/</span>
          <span style={{ color: 'var(--text-s)' }}>Best Fuel Cards</span>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded" style={{ color: 'var(--green)', background: 'rgba(45,106,79,0.08)' }}>Listicle</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>May 23, 2026</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>7 min read</span>
        </div>

        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(24px, 4vw, 36px)', lineHeight: 1.15, letterSpacing: '-0.025em', color: 'var(--text)' }}>
          Best Credit Cards for Fuel in India 2026 (The Best One Isn't a Fuel Card)
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
          Most "best fuel card" lists recommend HPCL and BPCL cards. The math says otherwise. Here's what actually saves you the most money at the pump.
        </p>

        <div className="mt-10 space-y-6 text-[15px] leading-[1.85]" style={{ color: 'var(--text-s)' }}>

          <p>Here's the thing about dedicated fuel credit cards in India: they're good cards — for one specific pump network. Use an HPCL card at a BPCL pump and your special benefits disappear entirely. You're locked in.</p>
          <p>Meanwhile, the Amazon Pay ICICI card gives you <S>5% back on any fuel payment made via HP Pay or IOCL FuelOn app</S> — which most people pay through anyway since UPI/wallet payments are seamless at pumps now. No network lock-in. No annual fee. 5% flat.</p>
          <p>That's the fundamental insight of this piece. Let's back it up with numbers.</p>

          {/* Interactive calculator */}
          <div className="p-5 rounded-2xl" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <p className="text-[12px] font-bold uppercase tracking-widest mb-3" style={{ color: 'rgba(250,248,245,0.4)' }}>See the math for your fuel spend</p>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[15px] font-medium" style={{ color: 'rgba(250,248,245,0.7)' }}>Monthly fuel spend:</span>
              <div className="flex gap-2 flex-wrap">
                {[2000, 3000, 5000, 8000, 12000].map(v => (
                  <button key={v} onClick={() => setFuelSpend(v)}
                    className="px-2.5 py-1 rounded-lg text-[12px] font-mono font-medium"
                    style={{ background: fuelSpend === v ? 'var(--gold)' : 'rgba(255,255,255,0.08)', color: fuelSpend === v ? 'var(--dark)' : 'rgba(250,248,245,0.6)' }}>
                    ₹{(v/1000).toFixed(0)}K
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              {cards.map((c, i) => {
                const annual = annualFuel * c.rate - c.fee
                const monthly = (annualFuel * c.rate / 12)
                return (
                  <div key={i} className="flex items-center justify-between gap-3 py-2" style={{ borderBottom: i < cards.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                    <div className="flex-1 min-w-0">
                      <p className="text-[12px] truncate" style={{ color: i === 0 ? '#6ee7b7' : 'rgba(250,248,245,0.6)' }}>{c.name}</p>
                      {c.note && <p className="text-[10px] mt-0.5 truncate" style={{ color: 'rgba(250,248,245,0.3)' }}>{c.note}</p>}
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-[14px] font-mono font-bold" style={{ color: i === 0 ? '#6ee7b7' : annual > 0 ? 'rgba(250,248,245,0.7)' : '#fca5a5' }}>
                        {annual >= 0 ? '+' : ''}₹{annual.toLocaleString('en-IN')}
                      </p>
                      <p className="text-[10px] font-mono" style={{ color: 'rgba(250,248,245,0.3)' }}>/year net</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <H2>What is the 1% fuel surcharge and does it matter?</H2>
          <p><S>Every credit card transaction at a fuel station attracts a 1% surcharge</S> in India, charged by the payment network. Most cards waive this surcharge on transactions between ₹400-₹4,000 (limits vary by card). This is standard on almost all cards today — it's not a differentiator.</p>
          <p>At ₹5,000/month fuel spend, the 1% surcharge waiver saves you roughly <S>₹600/year</S>. It matters, but it's not the main reason to pick a card. The cashback/rewards on top of the waiver is what drives real savings.</p>

          <H2>The best credit cards for fuel in India 2026 — ranked</H2>

          {/* Card 1 */}
          <div className="p-5 rounded-xl space-y-2" style={{ background: '#EDF5F0', border: '1px solid #C8DDD0' }}>
            <div className="flex items-center justify-between">
              <p className="text-[16px] font-bold" style={{ color: 'var(--text)' }}>🥇 Amazon Pay ICICI</p>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded" style={{ color: 'var(--green)', background: 'rgba(45,106,79,0.1)' }}>BEST OVERALL</span>
            </div>
            <p className="text-[13px]" style={{ color: 'var(--text-m)' }}>Fee: ₹0 · Fuel return: 5% (via HP Pay, IOCL FuelOn app)</p>
            <p className="text-[14px]" style={{ color: 'var(--text-s)' }}>Pay your fuel bill through HP Pay or IOCL FuelOn app with your Amazon Pay ICICI card and get 5% back as Amazon Pay balance. No network lock-in — works wherever HP Pay or IOCL is accepted. No annual fee. <S>At ₹5,000/month fuel spend, that's ₹3,000/year back for free.</S></p>
            <p className="text-[13px]" style={{ color: 'var(--text-m)' }}>⚠ Requires Amazon Prime (₹1,499/year) for 5%. Non-Prime gets 3%.</p>
          </div>

          {/* Card 2 */}
          <div className="p-5 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
            <div className="flex items-center justify-between mb-2">
              <p className="text-[16px] font-bold" style={{ color: 'var(--text)' }}>🥈 SBI Cashback Card</p>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded" style={{ color: 'var(--gold)', background: 'rgba(184,149,62,0.1)' }}>ONLINE BEST</span>
            </div>
            <p className="text-[13px] mb-2" style={{ color: 'var(--text-m)' }}>Fee: ₹0 · Fuel return: 5% (online payments, ₹2K monthly cap)</p>
            <p className="text-[14px]" style={{ color: 'var(--text-s)' }}>5% cashback on all online transactions including fuel app payments. The ₹2,000 monthly cap means this maxes out at ₹40,000 monthly online spend total — for most people's fuel spend alone (₹5,000-10,000/month) this cap won't be hit on fuel alone. But if you're stacking other online spend on this card, fuel will compete for the cap.</p>
          </div>

          {/* Card 3 */}
          <div className="p-5 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
            <div className="flex items-center justify-between mb-2">
              <p className="text-[16px] font-bold" style={{ color: 'var(--text)' }}>🥉 BPCL SBI Card</p>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded" style={{ color: '#0891b2', background: 'rgba(8,145,178,0.08)' }}>BPCL LOYALISTS</span>
            </div>
            <p className="text-[13px] mb-2" style={{ color: 'var(--text-m)' }}>Fee: ₹499 · Fuel return: ~4.25% at BPCL pumps only</p>
            <p className="text-[14px]" style={{ color: 'var(--text-s)' }}>3.25% reward points + 1% surcharge waiver = 4.25% effective return at BPCL pumps. The best dedicated fuel card IF you always use BPCL and fill up at the pump (not via app). The ₹499 fee pays for itself at ~₹12,000/year BPCL spend. <S>Weakness: Zero benefits at HPCL, IOCL, or private pumps.</S></p>
          </div>

          {/* Card 4 */}
          <div className="p-5 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
            <div className="flex items-center justify-between mb-2">
              <p className="text-[16px] font-bold" style={{ color: 'var(--text)' }}>4. IndianOil Axis Bank Card</p>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded" style={{ color: '#64748b', background: 'rgba(100,116,139,0.08)' }}>IOCL ONLY</span>
            </div>
            <p className="text-[13px] mb-2" style={{ color: 'var(--text-m)' }}>Fee: ₹500 · Fuel return: up to 4% at IOCL outlets</p>
            <p className="text-[14px]" style={{ color: 'var(--text-s)' }}>Up to 4% return at IndianOil fuel stations, capped at 250 reward points per statement. At ₹25/point value, that's a max of ₹6,250 total reward per year — decent but capped. Works well for IOCL-exclusive customers but the same concerns about network lock-in apply.</p>
          </div>

          {/* Card 5 */}
          <div className="p-5 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
            <div className="flex items-center justify-between mb-2">
              <p className="text-[16px] font-bold" style={{ color: 'var(--text)' }}>5. HDFC Infinia / Regalia Gold</p>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded" style={{ color: '#64748b', background: 'rgba(100,116,139,0.08)' }}>SUPPLEMENT</span>
            </div>
            <p className="text-[13px] mb-2" style={{ color: 'var(--text-m)' }}>Fuel return: 1.5-3.33% (base + surcharge waiver)</p>
            <p className="text-[14px]" style={{ color: 'var(--text-s)' }}>Infinia gives the surcharge waiver plus base reward points (worth ~1.7% at SmartBuy). Not optimized for fuel, but if Infinia is your primary card, the base return plus waiver is acceptable. Don't get Infinia for fuel — get it for <a href="/blog/hdfc-infinia-credit-card-review-2026" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>SmartBuy travel and vouchers</a>.</p>
          </div>

          {/* Mid-article CTA */}
          <div className="p-5 rounded-xl my-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <div>
              <p className="text-[14px] font-semibold">Using any of these cards already?</p>
              <p className="text-[12px] mt-1" style={{ color: 'rgba(250,248,245,0.5)' }}>Check what your reward points are actually worth right now.</p>
            </div>
            <a href="/" className="shrink-0 px-5 py-2.5 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>Check My Points →</a>
          </div>

          <H2>Why dedicated fuel cards often underperform</H2>
          <p>There are three structural problems with dedicated fuel cards:</p>
          <ul className="space-y-2 pl-1" style={{ listStyleType: 'none' }}>
            <li className="flex gap-2"><span style={{ color: 'var(--red)' }}>1.</span><span><S>Network lock-in.</S> BPCL SBI gives zero benefits at HP or IOCL. IndianOil Axis gives nothing at BPCL. In India, petrol stations from multiple networks are often on the same road — you'll use whichever is convenient, not whichever your card is optimized for.</span></li>
            <li className="flex gap-2"><span style={{ color: 'var(--red)' }}>2.</span><span><S>Monthly caps.</S> Most dedicated fuel cards cap how much you can earn. IndianOil Axis caps at 250 points per statement — beyond that, you're earning nothing extra.</span></li>
            <li className="flex gap-2"><span style={{ color: 'var(--red)' }}>3.</span><span><S>Rising app-based payments.</S> More people now pay fuel via HP Pay, IOCL FuelOn, or even NEFT transfers linked to fuel accounts. This bypasses the "pump swipe" that dedicated fuel cards need to activate their benefits.</span></li>
          </ul>

          <H2>The fuel card portfolio play</H2>
          <div className="p-5 rounded-xl" style={{ background: '#EDF5F0', border: '1px solid #C8DDD0' }}>
            <p className="text-[14px] font-bold mb-3" style={{ color: 'var(--green)' }}>Recommended two-card stack for fuel</p>
            <div className="space-y-3 text-[14px]" style={{ color: 'var(--text-s)' }}>
              <div className="flex gap-3">
                <span className="w-6 h-6 rounded-full grid place-items-center text-[11px] font-bold shrink-0" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>1</span>
                <p><S>Amazon Pay ICICI</S> — pay via HP Pay or IOCL app → 5% back, ₹0 fee</p>
              </div>
              <div className="flex gap-3">
                <span className="w-6 h-6 rounded-full grid place-items-center text-[11px] font-bold shrink-0" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>2</span>
                <p><S>BPCL SBI Card</S> — for offline BPCL swipes when app isn't available → 4.25%</p>
              </div>
            </div>
            <p className="text-[13px] mt-3" style={{ color: 'var(--green)' }}>Combined: 4.25-5% on 100% of fuel spend. Total fee: ₹499/yr.</p>
          </div>
          <p>This beats any single fuel card in India. Use the app when possible (5%), fall back to the BPCL card when swipe is necessary (4.25%). The ₹499 BPCL fee pays for itself in 1-2 full tanks.</p>

          <H2>The bottom line</H2>
          <p>The best card for fuel in India isn't a fuel card — it's whatever gives you the highest percentage back on fuel payments, wherever you pay, with no lock-in.</p>
          <p>In 2026, that's <S>Amazon Pay ICICI via HP Pay or IOCL app at 5%</S> for most people. Add BPCL SBI for offline BPCL swipes and you have a complete fuel card strategy for ₹499/year that beats every dedicated fuel card in the market.</p>
          <p>If you're spending ₹10,000+/month on fuel, also check if a <a href="/blog/best-lifetime-free-credit-cards-india-2026" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>lifetime free card stack</a> might serve your overall spending better — fuel is just one category.</p>

          <div className="p-6 rounded-2xl text-center mt-8" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <p className="text-[16px] font-semibold">Check what your reward points are worth</p>
            <p className="text-[13px] mt-1 mb-4" style={{ color: 'rgba(250,248,245,0.5)' }}>25+ Indian cards, every redemption method ranked.</p>
            <a href="/" className="inline-block px-6 py-2.5 rounded-xl text-[14px] font-semibold" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>Open PointsMax Calculator →</a>
          </div>

          <p className="text-[11px] mt-8 leading-relaxed" style={{ color: 'var(--text-m)' }}>
            <strong>Disclaimer:</strong> Reward rates, caps, and card features change frequently. HP Pay, IOCL FuelOn, and cashback eligibility may change. Always verify current terms on the card issuer's website. PointsMax is not affiliated with any bank. This is not financial advice.
          </p>

          <FeedbackWidget pageSlug="best-credit-cards-fuel-india-2026" pageTitle="Best Credit Cards for Fuel in India 2026" />
        </div>
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
            <p className="text-[13px] hidden sm:block" style={{ color: 'rgba(250,248,245,0.6)' }}>Check your <strong style={{ color: '#FAF8F5' }}>card's</strong> reward value</p>
            <p className="text-[13px] sm:hidden" style={{ color: 'rgba(250,248,245,0.6)' }}>Check points value</p>
            <a href="/" className="shrink-0 px-4 py-2 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>Open Calculator →</a>
          </div>
        </div>
      )}
    </div>
  )
}
