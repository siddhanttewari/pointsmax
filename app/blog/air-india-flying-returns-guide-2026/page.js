'use client'

import { useState, useEffect } from 'react'
import FeedbackWidget from '@/components/FeedbackWidget'
import PageNav from '@/components/PageNav'

const faqJsonLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How many Air India Flying Returns points do I need to fly to Dubai or Singapore?', acceptedAnswer: { '@type': 'Answer', text: 'After the April 2026 award chart overhaul, economy redemptions to Dubai, Singapore, Bangkok, and Bali from most Indian hubs now cost 12,000 points one-way — down from 18,000-20,000 previously. From Bengaluru and Chennai specifically, Dubai dropped to as low as 12,000 points, with some Bengaluru routes reported at 1,500 points for short-haul. This is a 30-50% reduction across most economy international routes.' }},
    { '@type': 'Question', name: 'Which Indian credit cards transfer points to Air India Flying Returns?', acceptedAnswer: { '@type': 'Answer', text: 'SBI Miles Elite, Prime, and Basic transfer at 1:1 to Air India Flying Returns. Axis Burgundy Magnus and Burgundy Private transfer at 5:4. Axis Magnus and Reserve (standard) transfer at 5:2 post-April 2026 devaluation. Axis Atlas transfers at 1:2 (Flying Returns is in Group B). Citibank Premier Miles transfers at 2:1, Citibank Prestige at 1:4, and Citibank Ultima at 1:5. HDFC cards do not currently have a direct Flying Returns transfer partnership.' }},
    { '@type': 'Question', name: 'Do Air India Flying Returns miles expire?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — Air India Flying Returns miles expire after 36 months of inactivity. Any account activity, including a small redemption like extra baggage or a seat upgrade, resets the expiry clock for your entire balance. Set a reminder 3 months before your oldest miles are due to expire and make a small redemption to keep the account active.' }},
  ],
}

export default function BlogPost() {
  const [showBar, setShowBar] = useState(false)

  useEffect(() => {
    const fn = () => setShowBar(window.scrollY > 600)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const H2 = ({ children }) => (
    <h2 className="pt-8" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', letterSpacing: '-0.01em' }}>{children}</h2>
  )
  const S = ({ children }) => <strong style={{ color: 'var(--text)' }}>{children}</strong>

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Air India Flying Returns Complete Guide 2026', datePublished: '2026-06-10', dateModified: '2026-06-10', author: { '@type': 'Organization', name: 'PointsMax' }, publisher: { '@type': 'Organization', name: 'PointsMax', url: 'https://www.pointsmax.in' } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageNav />

      <article className="max-w-2xl mx-auto px-5 py-12">
        <div className="flex items-center gap-2 mb-8 text-[13px]" style={{ color: 'var(--text-m)' }}>
          <a href="/">PointsMax</a><span>/</span>
          <a href="/blog">Learn</a><span>/</span>
          <span style={{ color: 'var(--text-s)' }}>Air India Flying Returns</span>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded" style={{ color: '#0891b2', background: 'rgba(8,145,178,0.08)' }}>Loyalty Hub</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>June 10, 2026</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>13 min read</span>
        </div>

        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(24px, 4vw, 36px)', lineHeight: 1.15, letterSpacing: '-0.025em', color: 'var(--text)' }}>
          Air India Flying Returns Complete Guide 2026: New Award Chart, Cheaper Redemptions, Credit Card Transfers
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
          On April 13, 2026, Air India quietly cut its award chart by up to 60% — the rare devaluation story that's actually good news. Bengaluru to Dubai now costs 1,500 points. Here's everything that changed, what your points are worth now, and how to get them from your credit card.
        </p>

        {/* Quick stats */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { n: '↓60%', label: 'Award price cut (Apr 2026)' },
            { n: '12,000', label: 'DEL→SIN/Dubai/Bangkok' },
            { n: '36 mo', label: 'Miles expiry (inactivity)' },
            { n: '4 tiers', label: 'Classic→Silver→Gold→Platinum' },
          ].map((s, i) => (
            <div key={i} className="p-3 rounded-xl text-center" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
              <p className="text-[20px] font-mono font-bold" style={{ color: 'var(--text)' }}>{s.n}</p>
              <p className="text-[11px] mt-0.5" style={{ color: 'var(--text-m)' }}>{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 space-y-6 text-[15px] leading-[1.85]" style={{ color: 'var(--text-s)' }}>

          <p>2026 has been a year of devaluations across Indian credit card and airline programs — Axis Magnus, Axis Atlas, and most transfer partner ecosystems all got worse for the cardholder. Air India Flying Returns is the rare exception: <S>on April 13, 2026, Air India restructured its Maharaja Club award chart, cutting prices by 30-60% on most economy international routes</S> and moving to a simpler, flatter pricing structure.</p>
          <p>If you've been holding Flying Returns miles (or Mag Miles that transfer 1:1), this is genuinely the best time to redeem in years. This guide covers the new award chart, how the program works end to end, and which credit cards give you the fastest path to a redemption.</p>

          <H2>The April 2026 award chart overhaul — what changed</H2>
          <p>The old Flying Returns award chart was granular and distance-based — every route had its own price, and prices crept up over the years through repeated devaluations. The new chart is flatter, simpler, and in most cases <S>significantly cheaper</S>.</p>

          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-[13px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead><tr>
                <th className="text-left py-3 px-3 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Route (Economy)</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--text-m)', borderBottom: '1px solid var(--border)' }}>Old price</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>New price (Apr 2026)</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Change</th>
              </tr></thead>
              <tbody>
                {[
                  ['Bengaluru → Dubai (short routes)', '~6,000-8,000', '1,500-3,000', '↓ up to 60%'],
                  ['Delhi → Singapore', '20,000', '12,000', '↓ 40%'],
                  ['Delhi → Bangkok', '16,000', '12,000', '↓ 25%'],
                  ['Delhi → Dubai', '18,000', '12,000', '↓ 33%'],
                  ['Chennai → Dubai', '20,000', '12,000', '↓ 40%'],
                  ['Chennai → Singapore', '13,000', '12,000', '↓ 8%'],
                  ['Delhi/Mumbai → Bali', '~22,000', '12,000', '↓ 45%'],
                  ['Delhi → San Francisco', '77,000', '40,000', '↓ 48%'],
                  ['Delhi → Toronto', '82,000', '50,000', '↓ 39%'],
                  ['Bengaluru → Colombo', '6,000', '10,000', '↑ 67% (exception)'],
                ].map(([route, old, newp, chg], i) => (
                  <tr key={i}>
                    <td className="py-2.5 px-3 font-medium" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{route}</td>
                    <td className="py-2.5 px-2 text-center font-mono" style={{ color: 'var(--text-m)', borderBottom: '1px solid var(--border)', textDecoration: chg.includes('↓') ? 'line-through' : 'none' }}>{old}</td>
                    <td className="py-2.5 px-2 text-center font-mono font-bold" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{newp}</td>
                    <td className="py-2.5 px-2 text-center font-mono font-bold" style={{ color: chg.includes('↓') ? 'var(--green)' : 'var(--red)', borderBottom: '1px solid var(--border)' }}>{chg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-[11px] mt-2" style={{ color: 'var(--text-m)' }}>Figures sourced from publicly reported award chart comparisons, April 2026. Verify exact pricing for your route at airindia.com — flat tier pricing means some routes may differ from these examples.</p>
          </div>

          <div className="p-4 rounded-xl" style={{ background: '#EDF5F0', border: '1px solid #C8DDD0' }}>
            <p className="text-[13px] font-bold mb-1" style={{ color: 'var(--green)' }}>The headline: 12,000 points for SE Asia / Middle East / Bali</p>
            <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>The new chart effectively created a "12,000 point tier" covering Singapore, Bangkok, Dubai, and Bali from most major Indian hubs. At typical cash fares of ₹12,000-25,000 for these routes, that's a value of <S>₹1.00-2.08 per point</S> — competitive with or beating KrisFlyer's own Saver pricing on the same routes for economy.</p>
          </div>

          <p className="mt-2">One caveat: Colombo went <S>up</S> from 6,000 to 10,000 points — likely as part of a new "South Asia" tier that groups Colombo with farther destinations. Always check the current chart for your specific route before assuming a price cut applies.</p>

          {/* Mid CTA */}
          <div className="p-5 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <div>
              <p className="text-[14px] font-semibold">How many Flying Returns miles would your card points give you?</p>
              <p className="text-[12px] mt-1" style={{ color: 'rgba(250,248,245,0.5)' }}>Check SBI, Axis, and Citi transfer ratios for your balance.</p>
            </div>
            <a href="/" className="shrink-0 px-5 py-2.5 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Open Calculator →</a>
          </div>

          <H2>How Flying Returns earning works</H2>
          <p>Flying Returns is a <S>distance-based</S> program for flights — you earn miles based on the distance flown and your fare class/cabin, not just the amount you pay.</p>
          <div className="space-y-2">
            {[
              ['Economy', '100% of flown distance in base miles', 'DEL-DXB (~2,186 miles) earns ~2,186 base miles'],
              ['Business', '150% of flown distance', 'DEL-DXB in business earns ~3,279 base miles'],
              ['Deeply discounted fares', '50-75% of base rate', 'Check your specific fare class on the earning table'],
              ['Star Alliance partners (flights)', '1 tier point per 2 reward points earned', 'Tier points count toward elite status'],
            ].map(([cat, rate, note], i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <div className="flex-1">
                  <p className="text-[13px] font-semibold" style={{ color: 'var(--text)' }}>{cat}</p>
                  <p className="text-[12px] mt-0.5" style={{ color: 'var(--green)' }}>{rate}</p>
                  <p className="text-[12px] mt-0.5" style={{ color: 'var(--text-m)' }}>{note}</p>
                </div>
              </div>
            ))}
          </div>

          <H2>Elite tier structure — Classic, Silver, Gold, Platinum</H2>
          <p>Flying Returns has four tiers, with status now <S>objectively easier to earn</S> than before April 2026 — but you still need qualifying activity specifically on Air India to advance, not just Star Alliance partners.</p>

          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-[13px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead><tr>
                <th className="text-left py-3 px-3 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Tier</th>
                <th className="text-left py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Requirement</th>
                <th className="text-left py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Key benefits</th>
              </tr></thead>
              <tbody>
                {[
                  ['Classic (Red)', 'Enrolment — instant, free', 'Mile earning, basic Star Alliance recognition'],
                  ['Silver', 'Entry-level qualifying activity', 'Star Alliance Silver status, 50% off domestic seat upgrades, 1 upgrade voucher, priority check-in, +10kg baggage'],
                  ['Gold', '30,000 tier pts (min 9,000 on AI) or 60 flights (min 8 on AI)', 'Lounge access, priority services, enhanced Star Alliance Gold benefits'],
                  ['Platinum', '45,000 tier pts (min 13,500 on AI) or 90 flights (min 12 on AI)', 'Free cancellations up to 2hrs before departure, top-tier lounge access, companion benefits'],
                ].map(([tier, req, benefits], i) => (
                  <tr key={i}>
                    <td className="py-2.5 px-3 font-bold" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{tier}</td>
                    <td className="py-2.5 px-2 text-[12px]" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>{req}</td>
                    <td className="py-2.5 px-2 text-[12px]" style={{ color: 'var(--text-m)', borderBottom: '1px solid var(--border)' }}>{benefits}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[13px]">Cancellation policy is now tier-based: outside the free cancellation window, a flat 25% fee applies — charged in cash or deducted as points.</p>

          <H2>Credit card transfer ratios to Flying Returns</H2>
          <p>Flying Returns is one of the few programs where <S>SBI cards transfer at a full 1:1 ratio</S> — making SBI Miles cards a straightforward path if Air India is your primary airline.</p>

          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-[13px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead><tr>
                <th className="text-left py-3 px-3 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Card</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Transfer ratio</th>
                <th className="text-left py-3 px-2 font-semibold" style={{ color: 'var(--text-m)', borderBottom: '1px solid var(--border)' }}>Note</th>
              </tr></thead>
              <tbody>
                {[
                  ['SBI Miles Elite / Prime / Basic', '1:1', 'Best ratio available. Direct, no loss.', 'var(--green)'],
                  ['Axis Burgundy Magnus / Burgundy Private', '5:4', 'Strong — only slightly below 1:1.', 'var(--green)'],
                  ['Axis Magnus / Reserve (standard)', '5:2', 'Post-April 2026 devaluation. Halved.', 'var(--red)'],
                  ['Axis Atlas', '1:2', 'Flying Returns is Group B (120K cap/yr).', 'var(--gold, #B8953E)'],
                  ['Citibank Premier Miles', '2:1', 'Citi cards largely legacy now (HDFC migration).', 'var(--text-m)'],
                  ['Citibank Prestige', '1:4', 'Poor ratio if still active.', 'var(--red)'],
                  ['Citibank Ultima', '1:5', 'Worst ratio — avoid if possible.', 'var(--red)'],
                  ['HDFC Infinia / Diners Black', 'No direct transfer', 'Not a current transfer partner.', 'var(--text-m)'],
                ].map(([card, ratio, note, color], i) => (
                  <tr key={i}>
                    <td className="py-2.5 px-3 font-medium" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{card}</td>
                    <td className="py-2.5 px-2 text-center font-mono font-bold" style={{ color, borderBottom: '1px solid var(--border)' }}>{ratio}</td>
                    <td className="py-2.5 px-2 text-[12px]" style={{ color: 'var(--text-m)', borderBottom: '1px solid var(--border)' }}>{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-xl" style={{ background: '#FBF8F0', border: '1px solid #E8DFC5' }}>
            <p className="text-[13px] font-bold mb-1" style={{ color: 'var(--gold, #B8953E)' }}>Transfer bonus window: April 21-28</p>
            <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>Air India periodically runs transfer bonus promotions where transferring during a specific window gives bonus miles (commonly 20-25% extra). If you're holding SBI or Axis points and considering a Flying Returns transfer, time it around announced bonus windows for meaningfully more miles per point spent.</p>
          </div>

          <H2>The HDFC Infinia gap — and the workaround</H2>
          <p>If you hold <S>HDFC Infinia or Diners Club Black</S>, there's no direct transfer to Flying Returns. Your options:</p>
          <ul className="space-y-2 pl-1" style={{ listStyleType: 'none' }}>
            <li className="flex gap-2"><span style={{ color: 'var(--gold, #B8953E)' }}>→</span><span><S>Book Air India directly via SmartBuy</S> at ₹1/point — works for cash bookings but doesn't access the award chart's discounted pricing.</span></li>
            <li className="flex gap-2"><span style={{ color: 'var(--gold, #B8953E)' }}>→</span><span><S>Transfer to KrisFlyer instead (1:1)</S> — Singapore Airlines and Air India share Star Alliance, and KrisFlyer can sometimes book Air India award seats with better availability than Flying Returns itself.</span></li>
            <li className="flex gap-2"><span style={{ color: 'var(--gold, #B8953E)' }}>→</span><span><S>Maintain a secondary SBI Miles card</S> specifically for Flying Returns transfers if Air India is a regular part of your travel — the 1:1 ratio makes even modest SBI spend useful for this purpose.</span></li>
          </ul>

          <H2>Flying Returns vs KrisFlyer — which to use for Star Alliance awards</H2>
          <p>Both programs can book Star Alliance partner awards, including each other's flights. The practical difference comes down to availability and chart pricing:</p>
          <div className="p-4 rounded-xl" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
            <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>One documented example: a BLR-BOM-FRA routing in Air India's new A350 business class cost under 70,000 KrisFlyer miles via Singapore Airlines — while Flying Returns itself demanded 100,000+ points for the same seats. <S>For premium cabin Star Alliance bookings, KrisFlyer often has better availability and pricing than Flying Returns' own chart</S> — even for Air India-operated flights. For Flying Returns' own discounted economy routes (the new 12,000-point SE Asia tier), Flying Returns itself is now highly competitive.</p>
          </div>
          <p className="mt-2">The practical rule: <S>use Flying Returns for Air India economy under the new chart (SE Asia, Middle East, domestic), use KrisFlyer for Star Alliance business class</S> including Air India's own premium cabins.</p>

          <H2>Keeping your miles alive — the 36-month rule</H2>
          <p>Flying Returns miles expire after <S>36 months of inactivity</S>. The good news: any account activity resets the clock for your <S>entire</S> balance — not just the miles from that activity.</p>
          <div className="space-y-2">
            {[
              'Redeem even a small amount — extra baggage, seat selection, or a minor upgrade — to reset the 36-month clock for your whole balance',
              'Use a Flying Returns partner credit card for everyday spend to keep the account naturally active',
              'Set a calendar reminder 3 months before your oldest miles are due to expire',
            ].map((tip, i) => (
              <div key={i} className="flex gap-2 text-[13px]" style={{ color: 'var(--text-s)' }}>
                <span style={{ color: 'var(--gold, #B8953E)' }}>•</span><span>{tip}</span>
              </div>
            ))}
          </div>
          <p className="mt-2">For a broader checklist on points expiry across programs, see our <a href="/tools/expiry-reminder" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>free expiry reminder tool</a>.</p>

          <H2>The bottom line</H2>
          <p>The April 2026 Flying Returns overhaul is genuinely good news in a year dominated by devaluations. <S>The new 12,000-point tier for SE Asia, Middle East, and Bali from major Indian hubs is competitive with or better than KrisFlyer's own Saver pricing</S> on the same routes — a rare case where Air India's own program beats the premium alternative for economy.</p>
          <p>If you have SBI Miles cards, the 1:1 transfer ratio makes Flying Returns an easy default for Star Alliance economy travel. If you're on HDFC Infinia, route through KrisFlyer for the same destinations — or consider holding a secondary SBI card specifically for this purpose.</p>
          <p>Check current transfer ratios at the <a href="/transfers" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>Transfer Partners directory</a>, and for the broader Star Alliance strategy including KrisFlyer routes, read our <a href="/blog/best-krisflyer-routes-india-2026" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>Best KrisFlyer Routes guide</a>.</p>

          <div className="p-6 rounded-2xl text-center mt-8" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <p className="text-[16px] font-semibold">Check your card's Flying Returns transfer value</p>
            <p className="text-[13px] mt-1 mb-4" style={{ color: 'rgba(250,248,245,0.5)' }}>SBI 1:1, Axis Burgundy 5:4, and more — ranked against KrisFlyer and SmartBuy.</p>
            <a href="/" className="inline-block px-6 py-2.5 rounded-xl text-[14px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Open PointsMax Calculator →</a>
          </div>

          <p className="text-[11px] mt-8 leading-relaxed" style={{ color: 'var(--text-m)' }}>
            <strong>Disclaimer:</strong> Award chart pricing, transfer ratios, and tier benefits change without notice and the April 2026 changes may evolve further. Figures here are based on publicly reported comparisons and may not reflect exact current pricing for every route. Always verify on airindia.com before transferring points — transfers are typically irreversible. PointsMax is not affiliated with Air India. Not financial advice.
          </p>

          <FeedbackWidget pageSlug="air-india-flying-returns-guide-2026" pageTitle="Air India Flying Returns Complete Guide 2026" />
        </div>
      </article>

      <footer className="py-10 px-5" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[12px]" style={{ color: 'var(--text-m)' }}>
            <a href="/">PointsMax</a><span className="mx-2">·</span>
            <a href="/about">About</a><span className="mx-2">·</span>
            <a href="/blog">Blog</a><span className="mx-2">·</span>
            <a href="/transfers">Transfers</a><span className="mx-2">·</span>
            <a href="/contact">Contact</a><span className="mx-2">·</span>
            <a href="/privacy">Privacy</a><span className="mx-2">·</span>
            <a href="/terms">Terms</a>
          </p>
        </div>
      </footer>

      {showBar && (
        <div className="hidden sm:block fixed bottom-0 left-0 right-0 z-50" style={{ background: 'var(--dark)', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '10px 16px' }}>
          <div className="max-w-2xl mx-auto flex items-center justify-between gap-3">
            <p className="text-[13px]" style={{ color: 'rgba(250,248,245,0.6)' }}>Check your <strong style={{ color: '#FAF8F5' }}>Flying Returns</strong> transfer value</p>
            <a href="/" className="shrink-0 px-4 py-2 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Open Calculator →</a>
          </div>
        </div>
      )}
    </div>
  )
}
