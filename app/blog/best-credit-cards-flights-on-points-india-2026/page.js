'use client'
import { useState, useEffect } from 'react'
import FeedbackWidget from '@/components/FeedbackWidget'

const faqJsonLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Which Indian credit card gives the best return for booking flights on points?', acceptedAnswer: { '@type': 'Answer', text: 'HDFC Infinia and HDFC Diners Club Black give the best return for flights on points in India at ~33% effective return via SmartBuy travel (₹1/point) or 1:1 KrisFlyer transfer for business class. For economy flights, SmartBuy at ₹1/point is better than transferring. For business class, KrisFlyer transfer gives ₹1.74-2.17/mile.' }},
    { '@type': 'Question', name: 'Does Axis Magnus still give good returns for flights after April 2026?', acceptedAnswer: { '@type': 'Answer', text: 'After the April 2026 devaluation, Axis Magnus transfer ratio dropped from 5:4 to 5:2, halving the mile yield. The effective return via airline transfers dropped from ~24% to ~12%. Travel EDGE portal at ₹0.50/point gives ~10% return. Magnus is no longer competitive with Infinia for flight redemptions at the same ₹12,500 annual fee.' }},
  ],
}

export default function BlogPost() {
  const [showBar, setShowBar] = useState(false)
  useEffect(() => {
    const fn = () => setShowBar(window.scrollY > 600)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  const S = ({ children }) => <strong style={{ color: 'var(--text)' }}>{children}</strong>

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Best Credit Cards for Flights on Points India 2026', datePublished: '2026-05-30', author: { '@type': 'Organization', name: 'PointsMax' }, publisher: { '@type': 'Organization', name: 'PointsMax', url: 'https://www.pointsmax.in' } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <article className="max-w-2xl mx-auto px-5 py-12">
        <div className="flex items-center gap-2 mb-8 text-[13px]" style={{ color: 'var(--text-m)' }}>
          <a href="/">PointsMax</a><span>/</span><a href="/blog">Learn</a><span>/</span>
          <span style={{ color: 'var(--text-s)' }}>Flights on Points</span>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded" style={{ color: 'var(--green)', background: 'rgba(45,106,79,0.08)' }}>Guide</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>May 30, 2026</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>9 min read</span>
        </div>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(24px,4vw,36px)', lineHeight: 1.15, letterSpacing: '-0.025em', color: 'var(--text)' }}>
          Best Credit Cards for Flights on Points India 2026: Ranked by Real Returns
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
          That popular Reel showing Magnus Burgundy at ~24% return is outdated. After April 2026, the transfer ratio halved. Here's the accurate ranking — with real ₹/mile math.
        </p>

        <div className="mt-6 p-4 rounded-xl" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
          <p className="text-[13px] font-bold mb-1" style={{ color: 'var(--red)' }}>⚠ Popular content is outdated</p>
          <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>Several Instagram Reels and YouTube videos show Axis Magnus Burgundy at ~24% return for flights. This was accurate before April 2026 when the 5:4 transfer ratio applied. After April 2, 2026, Axis cut the ratio to 5:2 — halving the effective airline mile yield. Magnus Burgundy's flight return is now approximately 10-12%, not 24%.</p>
        </div>

        <div className="mt-8 space-y-6 text-[15px] leading-[1.85]" style={{ color: 'var(--text-s)' }}>

          <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', marginTop: '1.5rem' }}>How to calculate real flight returns</h2>
          <p>The correct formula: <S>(Earn rate × Points per ₹) × (₹/mile at best transfer) = effective return %.</S></p>
          <p>A card earning 5 points per ₹150 at 1:1 to KrisFlyer, with business class at ₹1.89/mile = (5/150) × ₹1.89 = 6.3%. On SmartBuy at ₹1/point = (5/150) × ₹1 = 3.33%. The business class transfer gives nearly double the SmartBuy value — but only for that specific booking.</p>

          <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', marginTop: '1.5rem' }}>The rankings — updated for 2026</h2>

          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-[13px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead><tr>
                <th className="text-left py-3 px-3 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Card</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Transfer ratio</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Economy return</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Business return</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Annual fee</th>
              </tr></thead>
              <tbody>
                {[
                  ['HDFC Infinia', '1:1 (KrisFlyer)', '~3.3% via SmartBuy', '~6.3% via KrisFlyer J', '₹12,500*', 'var(--green)'],
                  ['HDFC Diners Black', '1:1 (KrisFlyer)', '~3.3% via SmartBuy', '~6.3% via KrisFlyer J', '₹10,000*', 'var(--green)'],
                  ['Amex Platinum/Gold', '1:1 (BA/KrisFlyer)', '~2% portal', '~6.3% via KrisFlyer J', '₹9K-66K', 'var(--gold)'],
                  ['HSBC TravelOne', '1:1 (KrisFlyer)', '~2.4% portal', '~4.8% via transfer', '₹4,999', 'var(--gold)'],
                  ['Axis Magnus (post-Apr 26)', '5:2 (devalued)', '~1.6% portal', '~2.5% via transfer', '₹12,500', 'var(--red)'],
                  ['Axis Atlas', '5:2 (devalued)', '~1.6% portal', '~2.5% via transfer', '₹5,000', 'var(--red)'],
                  ['SBI Miles Elite', '1:1 (AI/Flying Blue)', '~1.2% portal', '~2.0% via transfer', '₹4,999', 'var(--text-m)'],
                ].map(([card, ratio, eco, biz, fee, color], i) => (
                  <tr key={i}>
                    <td className="py-2.5 px-3 font-medium" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{card}</td>
                    <td className="py-2.5 px-2 text-center text-[11px]" style={{ color: 'var(--text-m)', borderBottom: '1px solid var(--border)' }}>{ratio}</td>
                    <td className="py-2.5 px-2 text-center font-mono font-bold" style={{ color, borderBottom: '1px solid var(--border)' }}>{eco}</td>
                    <td className="py-2.5 px-2 text-center font-mono font-bold" style={{ color, borderBottom: '1px solid var(--border)' }}>{biz}</td>
                    <td className="py-2.5 px-2 text-center text-[12px]" style={{ color: 'var(--text-m)', borderBottom: '1px solid var(--border)' }}>{fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-[11px] mt-2" style={{ color: 'var(--text-m)' }}>*Waived at ₹10L (Infinia) / ₹8L (Diners). Business class returns assume DEL-SIN KrisFlyer Saver at ₹1.89/mile.</p>
          </div>

          <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', marginTop: '1.5rem' }}>The golden rule: economy vs business class</h2>
          <p><S>For economy flights, always use the SmartBuy/portal at ₹1/point — never transfer.</S> Economy mile redemptions yield ₹0.80-1.30/mile. SmartBuy gives ₹1.00/point reliably.</p>
          <p><S>For business class, transfer to KrisFlyer.</S> DEL-SIN business (₹85,000 cash) costs 46,000 KrisFlyer miles — that's ₹1.89/mile. Double the SmartBuy value. This is where transfers earn their place.</p>
          <p>Full route-by-route breakdown in our <a href="/blog/singapore-airlines-krisflyer-india-guide-2026" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>KrisFlyer India Guide</a> and <a href="/blog/credit-card-airline-miles-transfer-india-2026" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>complete airline transfers guide</a>.</p>

          <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', marginTop: '1.5rem' }}>HSBC TravelOne: the dark horse</h2>
          <p>HSBC TravelOne offers 1:1 KrisFlyer and Flying Blue transfers at ₹4,999/year — the cheapest premium travel card with 1:1 ratio outside HDFC. The earn rate is lower (1 point per ₹100 at base) but the transfer ratio preservation means it delivers genuine business class value at a much lower entry fee than Infinia or Diners.</p>
          <p>Best suited for those who travel 1-2 times internationally per year and want KrisFlyer access without the ₹10,000-12,500 fee commitment of HDFC premium cards.</p>

          <div className="p-5 rounded-xl mt-4" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <p className="text-[14px] font-semibold mb-1">See all transfer partner ratios for your card</p>
            <p className="text-[12px]" style={{ color: 'rgba(250,248,245,0.5)' }}>Post-April 2026 devaluation data. Filter by card or airline.</p>
            <a href="/transfers" className="inline-block mt-3 px-4 py-2 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>View Transfer Partners →</a>
          </div>

          <FeedbackWidget pageSlug="best-credit-cards-flights-on-points-india-2026" pageTitle="Best Credit Cards for Flights on Points India 2026" />
        </div>
      </article>
      <footer className="py-10 px-5" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[12px]" style={{ color: 'var(--text-m)' }}><a href="/">PointsMax</a><span className="mx-2">·</span><a href="/transfers">Transfers</a><span className="mx-2">·</span><a href="/blog">Learn</a></p>
        </div>
      </footer>
      {showBar && (
        <div className="fixed bottom-0 left-0 right-0 z-50" style={{ background: 'var(--dark)', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '10px 16px' }}>
          <div className="max-w-2xl mx-auto flex items-center justify-between gap-3">
            <p className="text-[13px]" style={{ color: 'rgba(250,248,245,0.6)' }}>Check flight points value</p>
            <a href="/" className="shrink-0 px-4 py-2 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>Open Calculator →</a>
          </div>
        </div>
      )}
    </div>
  )
}
