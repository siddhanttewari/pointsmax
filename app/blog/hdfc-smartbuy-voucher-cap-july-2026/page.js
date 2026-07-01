'use client'

import { useState, useEffect } from 'react'
import FeedbackWidget from '@/components/FeedbackWidget'
import PageNav from '@/components/PageNav'

const faqJsonLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is the HDFC SmartBuy voucher cap introduced in July 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Effective July 1, 2026, HDFC Bank introduced a separate monthly cap of 3,000 Reward Points on brand voucher purchases made through SmartBuy via GyFTR and Woohoo. Previously, voucher purchases counted toward the overall monthly SmartBuy accelerated rewards cap (15,000 points for Infinia, 10,000 for Diners Club Black, 4,000 for Regalia Gold). Now brand vouchers have their own much lower ceiling of 3,000 points, while the overall caps remain unchanged but must be reached through flight and hotel bookings instead.' }},
    { '@type': 'Question', name: 'How much does the July 2026 SmartBuy change reduce Infinia rewards?', acceptedAnswer: { '@type': 'Answer', text: 'For HDFC Infinia, the voucher earning cap drops from up to 15,000 Reward Points per month to 3,000 — an 80% reduction on the most popular everyday-earning route. HDFC Diners Club Black drops from 10,000 to 3,000 points, and Regalia Gold loses roughly a quarter of its voucher earning capacity. The overall accelerated caps are unchanged, so cardholders who book flights and hotels directly through SmartBuy can still reach the full cap.' }},
    { '@type': 'Question', name: 'Is the HDFC SmartBuy voucher cap permanent?', acceptedAnswer: { '@type': 'Answer', text: 'As of now, the cap is published for July 2026 only, which suggests it may be a temporary experiment rather than a permanent change. HDFC has rolled back a similar SmartBuy devaluation before — in January 2026 it announced a cut of the voucher earn rate from 5x to 3x and reversed it within days after customer backlash. Cardholders should treat the cap as live but monitor for reversal or extension, and verify current terms in the SmartBuy T&Cs before transacting.' }},
    { '@type': 'Question', name: 'What should HDFC cardholders do about the SmartBuy voucher cap?', acceptedAnswer: { '@type': 'Answer', text: 'HDFC premium cardholders should shift their SmartBuy strategy: use brand vouchers only up to the 3,000-point monthly cap, then route additional high-value spending through SmartBuy flight and hotel bookings, which still earn accelerated points at the full rate and redeem at ₹1 per point. Those who held Infinia primarily for the voucher-loop strategy on everyday spend should reassess whether the annual fee still delivers enough value, and compare against alternatives.' }},
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

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'NewsArticle', headline: 'HDFC SmartBuy Voucher Cap July 2026: Infinia & Diners Earning Cut 80%', datePublished: '2026-07-03', dateModified: '2026-07-03', author: { '@type': 'Organization', name: 'PointsMax', url: 'https://www.pointsmax.in' }, publisher: { '@type': 'Organization', name: 'PointsMax', url: 'https://www.pointsmax.in' } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageNav />

      <article className="max-w-2xl mx-auto px-5 py-12">
        <div className="flex items-center gap-2 mb-8 text-[13px]" style={{ color: 'var(--text-m)' }}>
          <a href="/">PointsMax</a><span>/</span>
          <a href="/blog">Learn</a><span>/</span>
          <span style={{ color: 'var(--text-s)' }}>HDFC SmartBuy Voucher Cap</span>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded" style={{ color: 'var(--red)', background: 'rgba(197,48,48,0.08)' }}>News · Devaluation</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>July 3, 2026</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>7 min read</span>
        </div>

        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(24px, 4vw, 36px)', lineHeight: 1.15, letterSpacing: '-0.025em', color: 'var(--text)' }}>
          HDFC SmartBuy Voucher Cap July 2026: Infinia & Diners Earning Cut 80%
        </h1>

        {/* DIRECT ANSWER BLOCK */}
        <div className="mt-8 p-5 rounded-2xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
          <p className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--text-m)' }}>Quick answer</p>
          <p className="text-[15px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
            <S>Effective July 1, 2026, HDFC Bank capped SmartBuy brand-voucher earning at 3,000 Reward Points per month</S> (on purchases via GyFTR/Woohoo). Voucher earning previously counted toward the overall accelerated cap — 15,000 points for Infinia, 10,000 for Diners Club Black, 4,000 for Regalia Gold. Now vouchers have their own 3,000-point ceiling, cutting Infinia's voucher earning by 80%. The overall caps are unchanged, but the balance must now be earned via SmartBuy flights and hotels. The change is published for July 2026 only, so it may be a temporary experiment — HDFC rolled back a similar cut in January 2026.
          </p>
        </div>

        <div className="mt-10 space-y-6 text-[15px] leading-[1.85]" style={{ color: 'var(--text-s)' }}>

          <H2 id="what-changed">What exactly changed</H2>
          <p>Until July 2026, HDFC's premium cardholders had a simple, powerful play: buy brand vouchers (Amazon, Flipkart, Swiggy, Zomato, BigBasket, Blinkit and hundreds of others) through SmartBuy to earn accelerated Reward Points on everyday spending, then redeem those points at ₹1 each. <S>An Infinia holder could earn the full 15,000 accelerated points every month this way.</S></p>
          <p>From July 1, 2026, HDFC carved out a <S>separate, much smaller cap of 3,000 Reward Points specifically for brand-voucher purchases</S> via GyFTR and Woohoo. The overall SmartBuy accelerated caps stay the same — but vouchers now hit their own ceiling far sooner.</p>

          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-[13px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead><tr>
                <th className="text-left py-3 px-3 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Card</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--text-m)', borderBottom: '1px solid var(--border)' }}>Voucher earning before</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--red)', borderBottom: '1px solid var(--border)' }}>After (Jul 2026)</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--red)', borderBottom: '1px solid var(--border)' }}>Cut</th>
              </tr></thead>
              <tbody>
                {[
                  ['Infinia', '15,000 pts/mo', '3,000 pts/mo', '−80%'],
                  ['Diners Club Black', '10,000 pts/mo', '3,000 pts/mo', '−70%'],
                  ['BizBlack Metal', '10,000 pts/mo', '3,000 pts/mo', '−70%'],
                  ['Regalia Gold', '4,000 pts/mo', '3,000 pts/mo', '−25%'],
                ].map(([card, before, after, cut], i) => (
                  <tr key={i}>
                    <td className="py-2.5 px-3 font-medium" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{card}</td>
                    <td className="py-2.5 px-2 text-center font-mono" style={{ color: 'var(--text-m)', borderBottom: '1px solid var(--border)' }}>{before}</td>
                    <td className="py-2.5 px-2 text-center font-mono font-bold" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{after}</td>
                    <td className="py-2.5 px-2 text-center font-mono font-bold" style={{ color: 'var(--red)', borderBottom: '1px solid var(--border)' }}>{cut}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-[11px] mt-2" style={{ color: 'var(--text-m)' }}>The overall accelerated caps (Infinia 15,000 / Diners Black 10,000 / Regalia Gold 4,000) are unchanged — only the voucher sub-cap is new. As of July 2026.</p>
          </div>

          <H2 id="why-it-matters">Why it matters</H2>
          <p>This is arguably the most consequential SmartBuy change in years, because <S>brand vouchers were the single most popular way to maximise HDFC's premium cards.</S> The vouchers covered everyday categories — groceries, food delivery, online shopping — where you'd otherwise earn just the 1x base rate. Buying a voucher first turned that into accelerated earning.</p>
          <p>With the voucher route capped at 3,000 points, HDFC is effectively <S>pushing cardholders toward booking flights and hotels directly on SmartBuy</S> if they want to hit the full monthly cap. That's fine for frequent travellers, but it removes the everyday-spend advantage that made Infinia and Diners Black so rewarding for people who didn't book travel every month.</p>

          <H2 id="is-it-permanent">Is it permanent?</H2>
          <div className="p-4 rounded-xl" style={{ background: '#FBF8F0', border: '1px solid #E8DFC5' }}>
            <p className="text-[13px]" style={{ color: 'var(--text-s)' }}><strong style={{ color: 'var(--gold, #B8953E)' }}>Possibly not. </strong>The cap is <S>published for July 2026 only</S> so far, which strongly suggests it may be a temporary experiment. HDFC has form here: in January 2026 it announced cutting the voucher earn rate from 5x to 3x, then <S>rolled it back within days</S> after significant customer backlash. Treat this cap as live and plan around it — but don't be surprised if it's reversed or quietly extended. Always verify the current SmartBuy T&Cs before transacting.</p>
          </div>

          <H2 id="what-to-do">What to do now</H2>
          <div className="space-y-2">
            {[
              'Use SmartBuy brand vouchers only up to the 3,000-point monthly cap — beyond that, they earn base rate',
              'Route additional high-value spend through SmartBuy flight and hotel bookings, which still earn accelerated points at the full rate',
              'If you book travel regularly, this barely affects you — you can still hit the full 15,000/10,000 cap via flights and hotels',
              'If you held Infinia mainly for the everyday voucher loop, reassess whether the annual fee still pencils out',
              'Redemption value is unchanged — points are still worth ₹1 each on SmartBuy travel. This is an earning change, not a redemption one',
              'Watch the devaluation tracker for any reversal or extension of the cap',
            ].map((tip, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="w-6 h-6 rounded-full grid place-items-center text-[11px] font-bold shrink-0 mt-0.5" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>{i+1}</span>
                <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>{tip}</p>
              </div>
            ))}
          </div>

          {/* Mid CTA */}
          <div className="p-5 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <div>
              <p className="text-[14px] font-semibold">Is your HDFC card still worth its fee after this?</p>
              <p className="text-[12px] mt-1" style={{ color: 'rgba(250,248,245,0.5)' }}>Run your spend through the breakeven calculator to see.</p>
            </div>
            <a href="/tools/breakeven" className="shrink-0 px-5 py-2.5 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Breakeven Calculator →</a>
          </div>

          <H2 id="bottom-line">The bottom line</H2>
          <p>The July 2026 SmartBuy voucher cap is a real, meaningful cut to the everyday earning power of HDFC's premium cards — an 80% reduction on Infinia's most popular route. But it's important to keep perspective: <S>the redemption value is untouched (still ₹1/point on travel), the overall caps are unchanged, and frequent travellers who book via SmartBuy are barely affected.</S> The people who lose most are those who relied on the voucher loop for everyday spend without booking travel.</p>
          <p>And with the change published for July only, there's a real chance it's reversed — as happened in January. For now, adjust your strategy toward SmartBuy travel bookings, use vouchers up to the cap, and keep an eye on how it evolves.</p>
          <p>See every HDFC change in context in our <a href="/blog/credit-card-devaluation-tracker-india-2026" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>devaluation tracker</a>, the full strategy in our <a href="/blog/hdfc-smartbuy-guide-2026" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>SmartBuy guide</a>, and reassess your card in our <a href="/blog/hdfc-infinia-credit-card-review-2026" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>HDFC Infinia review</a>.</p>

          <p className="text-[11px] mt-8 leading-relaxed" style={{ color: 'var(--text-m)' }}>
            <strong>Disclaimer:</strong> Based on HDFC Bank SmartBuy communications and community reports as of July 3, 2026. The voucher cap is published for July 2026 and may be temporary or subject to change. Reward rates and caps change without notice — always verify current terms in the SmartBuy T&Cs before transacting. PointsMax is not affiliated with HDFC Bank. Not financial advice.
          </p>

          <FeedbackWidget pageSlug="hdfc-smartbuy-voucher-cap-july-2026" pageTitle="HDFC SmartBuy Voucher Cap July 2026" />
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
            <p className="text-[13px]" style={{ color: 'rgba(250,248,245,0.6)' }}>Is your <strong style={{ color: '#FAF8F5' }}>HDFC card</strong> still worth it?</p>
            <a href="/tools/breakeven" className="shrink-0 px-4 py-2 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Breakeven Calculator →</a>
          </div>
        </div>
      )}
    </div>
  )
}
