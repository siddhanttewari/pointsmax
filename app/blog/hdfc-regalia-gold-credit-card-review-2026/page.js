'use client'

import { useState, useEffect } from 'react'
import FeedbackWidget from '@/components/FeedbackWidget'
import PageNav from '@/components/PageNav'

const blogJsonLd = {
  '@context': 'https://schema.org', '@type': 'Product',
  name: 'HDFC Regalia Gold Credit Card',
  brand: { '@type': 'Brand', name: 'HDFC Bank' },
  category: 'Credit Card',
  description: 'HDFC Regalia Gold is a mid-premium Mastercard credit card with SmartBuy redemption, milestone vouchers, and lounge access. From July 2026, domestic lounge access requires ₹60,000 quarterly spend, and the base rate was cut to 5 reward points per ₹200 in May 2026.',
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '3.8', bestRating: '5', worstRating: '1', reviewCount: '1' },
  review: {
    '@type': 'Review',
    reviewRating: { '@type': 'Rating', ratingValue: '3.8', bestRating: '5', worstRating: '1' },
    author: { '@type': 'Organization', name: 'PointsMax' },
    datePublished: '2026-06-22',
    reviewBody: 'HDFC Regalia Gold remains a solid mid-premium card in 2026 for those who route travel through SmartBuy and hit the milestone spends, where vouchers and portal multipliers comfortably clear the ₹2,500 fee. The May 2026 base-rate cut (to 5 RP per ₹200, ~1.6% value) and the July 2026 ₹60,000 quarterly spend gate for domestic lounge access weaken its appeal for those who held it primarily for unconditional lounge entry. New Boarding Edge benefits partially offset the changes.',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is HDFC Regalia Gold still worth it in 2026 after the devaluation?', acceptedAnswer: { '@type': 'Answer', text: 'HDFC Regalia Gold remains worth holding in 2026 for cardholders who book flights and hotels through HDFC SmartBuy and hit the milestone spends, where portal multipliers and vouchers clear the ₹2,500 annual fee on their own. It is harder to justify for someone who held it mainly for unconditional domestic lounge access, which from July 2026 requires ₹60,000 of spend in the previous calendar quarter. The base reward rate was also cut from 4 points per ₹150 to 5 points per ₹200 in May 2026.' }},
    { '@type': 'Question', name: 'What is the new lounge access rule for HDFC Regalia Gold in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'From July 1, 2026, HDFC Regalia Gold requires ₹60,000 of spend in the previous calendar quarter to unlock domestic airport lounge access for the next quarter. For example, spending ₹60,000 or more between April and June 2026 unlocks lounge access for July to September 2026. You get 3 domestic visits per quarter (12 per year) when eligible, accessed by swiping the card — no voucher needed. The 6 international Priority Pass visits per year remain unchanged with no spend requirement.' }},
    { '@type': 'Question', name: 'What is the HDFC Regalia Gold reward rate and fee waiver in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'From May 15, 2026, HDFC Regalia Gold earns 5 reward points per ₹200 spent (down from 4 per ₹150), which is an effective rate of about 1.6% at the SmartBuy redemption value of ₹0.50 per point. The annual fee is ₹2,500 plus GST, waived on ₹4 lakh of annual spend. Reward points redeem best through SmartBuy for flights and hotels at ₹0.50 per point; statement credit gives only about ₹0.20 per point.' }},
  ],
}

export default function BlogPost() {
  const [showBar, setShowBar] = useState(false)
  const [annualSpend, setAnnualSpend] = useState(750000)

  useEffect(() => {
    const fn = () => setShowBar(window.scrollY > 600)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const H2 = ({ children, id }) => (
    <h2 id={id} className="pt-8 scroll-mt-20" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', letterSpacing: '-0.01em' }}>{children}</h2>
  )
  const S = ({ children }) => <strong style={{ color: 'var(--text)' }}>{children}</strong>

  // Milestone calculator
  const basePoints = Math.floor(annualSpend / 200) * 5
  const baseValue = basePoints * 0.5 // SmartBuy ₹0.50/RP
  const q = annualSpend / 4
  const quarterlyVouchers = q >= 150000 ? 1500 * 4 : 0
  const flightV1 = annualSpend >= 500000 ? 5000 : 0
  const flightV2 = annualSpend >= 750000 ? 5000 : 0
  const fee = 2500
  const feeWaived = annualSpend >= 400000
  const netFee = feeWaived ? 0 : fee
  const loungeEligible = (annualSpend / 4) >= 60000
  const totalValue = baseValue + quarterlyVouchers + flightV1 + flightV2 - netFee

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageNav />

      <article className="max-w-2xl mx-auto px-5 py-12">
        <div className="flex items-center gap-2 mb-8 text-[13px]" style={{ color: 'var(--text-m)' }}>
          <a href="/">PointsMax</a><span>/</span>
          <a href="/blog">Learn</a><span>/</span>
          <span style={{ color: 'var(--text-s)' }}>HDFC Regalia Gold Review</span>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded" style={{ color: '#2563eb', background: 'rgba(37,99,235,0.06)' }}>Card Review</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>June 22, 2026</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>10 min read</span>
        </div>

        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(24px, 4vw, 36px)', lineHeight: 1.15, letterSpacing: '-0.025em', color: 'var(--text)' }}>
          HDFC Regalia Gold Review 2026: Still Worth It After the July Lounge Gate?
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
          For years, Regalia Gold's pitch was simple: swipe, walk into a lounge, no spend tracking. That ended in 2026. The base rate was cut in May, and from July, domestic lounge access needs ₹60,000 of quarterly spend. Here's whether it still earns its place in your wallet.
        </p>

        {/* Quick verdict */}
        <div className="mt-8 p-5 rounded-2xl" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
          <div className="flex items-center justify-between mb-3">
            <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: 'rgba(250,248,245,0.4)' }}>Quick verdict</p>
            <div className="flex items-center gap-1">
              {[1,2,3].map(i => <span key={i} style={{ color: 'var(--gold, #B8953E)' }}>★</span>)}
              <span style={{ color: 'var(--gold, #B8953E)' }}>★</span>
              <span style={{ color: 'rgba(250,248,245,0.25)' }}>★</span>
              <span className="text-[13px] font-mono font-bold ml-1" style={{ color: 'var(--gold, #B8953E)' }}>3.8/5</span>
            </div>
          </div>
          <p className="text-[14px] leading-relaxed" style={{ color: 'rgba(250,248,245,0.75)' }}>
            Regalia Gold in 2026 is a tale of two cardholders. <S>If you route flights and hotels through SmartBuy and hit the milestone spends, it's still excellent</S> — the vouchers and portal multipliers clear the ₹2,500 fee several times over, making it one of the better mid-premium value cards. <S>If you held it purely for easy lounge access, the July 2026 ₹60,000 quarterly gate changes the deal.</S> The May base-rate cut (to 5 RP/₹200, ~1.6%) stings a little, and the new Boarding Edge perks soften the blow. Net: a strong card for engaged spenders, a weaker one for set-and-forget lounge users.
          </p>
        </div>

        <div className="mt-10 space-y-6 text-[15px] leading-[1.85]" style={{ color: 'var(--text-s)' }}>

          <H2 id="changed">What changed in 2026</H2>
          <p>Regalia Gold went through HDFC's wider 2026 repricing in two waves. Here's exactly what's different:</p>
          <div className="space-y-3">
            {[
              { date: 'May 15, 2026', change: 'Base rate cut', detail: 'Reward earning dropped from 4 points per ₹150 to 5 points per ₹200 — effective rate fell from ~1.73% to ~1.625%, roughly a 6% reduction in base value.', neg: true },
              { date: 'May 15, 2026', change: 'DCC markup added', detail: 'A 1.75% Dynamic Currency Conversion markup now applies on INR-billed international transactions (paying in rupees abroad, or to overseas-registered merchants from India).', neg: true },
              { date: 'May 15, 2026', change: 'Reissuance fee', detail: '₹199 fee introduced for lost, stolen, or damaged card replacement.', neg: true },
              { date: 'Jul 1, 2026', change: 'Lounge spend gate', detail: 'Domestic lounge access now requires ₹60,000 spend in the previous calendar quarter. No voucher needed — just swipe — but only if you cleared the spend threshold.', neg: true },
              { date: '2026', change: 'Boarding Edge added', detail: 'New benefit: 2 complimentary travel perks per quarter (spa, Uber transfer, hotel buffet, room upgrade) by uploading your boarding pass on SmartBuy. Partial offset to the cuts.', neg: false },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl" style={{ background: item.neg ? '#FDF1EF' : '#EDF5F0', border: `1px solid ${item.neg ? '#E8C5BF' : '#C8DDD0'}` }}>
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded" style={{ background: 'var(--card)', color: 'var(--text-m)' }}>{item.date}</span>
                  <span className="text-[13px] font-bold" style={{ color: item.neg ? 'var(--red)' : 'var(--green)' }}>{item.neg ? '↓' : '↑'} {item.change}</span>
                </div>
                <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>{item.detail}</p>
              </div>
            ))}
          </div>

          <H2 id="lounge">The lounge change explained</H2>
          <p>This is the change that matters most to existing cardholders. The old appeal was <S>unconditional domestic lounge access</S> — fly 8-10 times a year and walk into any lounge without a thought.</p>
          <div className="p-4 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
            <p className="text-[13px] font-bold mb-2" style={{ color: 'var(--text)' }}>How the new gate works (from July 1, 2026)</p>
            <ul className="space-y-2 text-[13px]" style={{ color: 'var(--text-s)', listStyleType: 'none', padding: 0 }}>
              <li className="flex gap-2"><span style={{ color: 'var(--gold, #B8953E)' }}>→</span><span>Spend <S>₹60,000+ in a calendar quarter</S> to unlock domestic lounge access for the <S>next</S> quarter</span></li>
              <li className="flex gap-2"><span style={{ color: 'var(--gold, #B8953E)' }}>→</span><span>Example: ₹60K spent Apr-Jun 2026 → unlocks lounge access Jul-Sep 2026</span></li>
              <li className="flex gap-2"><span style={{ color: 'var(--gold, #B8953E)' }}>→</span><span>When eligible: 3 domestic visits/quarter (12/year), swipe card to enter — no voucher</span></li>
              <li className="flex gap-2"><span style={{ color: 'var(--green)' }}>→</span><span>International: 6 Priority Pass visits/year — <S>unchanged, no spend gate</S> (after one-time 4-transaction activation)</span></li>
            </ul>
          </div>
          <p>The practical impact: a casual flyer who took lounge visits for granted now needs to <S>engineer ₹2.4 lakh of annual spend</S> (₹60K × 4 quarters) on the card to keep them. That said, the ₹60K quarterly bar is lower than several competing travel cards — so in context, it's a softer gate than some rivals.</p>

          {/* Interactive milestone calculator */}
          <H2 id="milestone-math">The milestone math — where the value really is</H2>
          <p>Regalia Gold's value was never really the base rate — it's the <S>milestone vouchers and SmartBuy multipliers</S>. Use the calculator below to see the guaranteed value at your spend level:</p>

          <div className="p-5 rounded-2xl" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <p className="text-[12px] font-bold uppercase tracking-widest mb-3" style={{ color: 'rgba(250,248,245,0.4)' }}>Your annual spend on this card</p>
            <div className="flex gap-1.5 flex-wrap mb-4">
              {[200000, 400000, 500000, 750000, 1000000].map(v => (
                <button key={v} onClick={() => setAnnualSpend(v)} className="px-3 py-1.5 rounded-lg text-[12px] font-mono"
                  style={{ background: annualSpend === v ? 'var(--gold, #B8953E)' : 'rgba(255,255,255,0.08)', color: annualSpend === v ? 'var(--dark)' : 'rgba(250,248,245,0.6)' }}>
                  ₹{(v/100000).toFixed(0)}L
                </button>
              ))}
            </div>
            <div className="space-y-2 text-[13px]">
              {[
                { label: 'Base reward value (SmartBuy @₹0.50)', value: `₹${Math.round(baseValue).toLocaleString('en-IN')}` },
                { label: 'Quarterly vouchers (₹1.5L/qtr)', value: quarterlyVouchers > 0 ? `₹${quarterlyVouchers.toLocaleString('en-IN')}` : '₹0 (need ₹1.5L/qtr)', warn: quarterlyVouchers === 0 },
                { label: 'Flight voucher (₹5L spend)', value: flightV1 > 0 ? `₹${flightV1.toLocaleString('en-IN')}` : '₹0', warn: flightV1 === 0 },
                { label: 'Flight voucher (₹7.5L spend)', value: flightV2 > 0 ? `₹${flightV2.toLocaleString('en-IN')}` : '₹0', warn: flightV2 === 0 },
                { label: 'Annual fee', value: feeWaived ? '₹0 (waived at ₹4L)' : `₹${fee.toLocaleString('en-IN')}`, good: feeWaived },
                { label: 'Domestic lounge', value: loungeEligible ? 'Unlocked ✓' : 'Locked (need ₹60K/qtr)', warn: !loungeEligible, good: loungeEligible },
                { label: 'Total guaranteed value', value: `₹${Math.round(totalValue).toLocaleString('en-IN')}`, highlight: true },
              ].map((r, i) => (
                <div key={i} className="flex justify-between py-1.5" style={{ borderBottom: i < 6 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                  <span style={{ color: 'rgba(250,248,245,0.55)' }}>{r.label}</span>
                  <span className="font-mono font-semibold" style={{ color: r.highlight ? '#6ee7b7' : r.good ? '#6ee7b7' : r.warn ? '#fca5a5' : 'rgba(250,248,245,0.85)' }}>{r.value}</span>
                </div>
              ))}
            </div>
            <p className="text-[11px] mt-3" style={{ color: 'rgba(250,248,245,0.4)' }}>Excludes Boarding Edge perks and SmartBuy accelerator multipliers, which add further value. Vouchers shown at face value.</p>
          </div>

          <p>At ₹7.5L annual spend, the guaranteed milestone value (vouchers + flight vouchers + waived fee) lands around <S>₹18,500 before counting a single extra SmartBuy multiplier</S> — which is why engaged spenders still rate this card highly despite the cuts.</p>

          {/* Mid CTA */}
          <div className="p-5 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <div>
              <p className="text-[14px] font-semibold">See your Regalia Gold points' real value</p>
              <p className="text-[12px] mt-1" style={{ color: 'rgba(250,248,245,0.5)' }}>SmartBuy vs cashback vs vouchers — ranked by ₹.</p>
            </div>
            <a href="/" className="shrink-0 px-5 py-2.5 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Open Calculator →</a>
          </div>

          <H2 id="rewards">Rewards & redemption</H2>
          <p>Regalia Gold earns <S>5 reward points per ₹200</S> on all retail spends — notably including insurance, utilities, and education, which most premium cards exclude (with caps: 2,000 RP/month on grocery, 2,000 RP/day on insurance). At the SmartBuy value of ₹0.50/RP, that's roughly a 1.6% base return.</p>
          <div className="p-4 rounded-xl" style={{ background: '#FBF8F0', border: '1px solid #E8DFC5' }}>
            <p className="text-[13px] font-bold mb-2" style={{ color: 'var(--gold, #B8953E)' }}>Redemption value by method</p>
            <div className="space-y-1.5 text-[13px]">
              {[
                ['SmartBuy (flights/hotels)', '₹0.50/RP', 'Best — always use this', 'var(--green)'],
                ['Airline/hotel partner transfer', '₹0.50+/RP', 'Strong for travel', 'var(--green)'],
                ['Product catalogue', '~₹0.35/RP', 'Avoid', 'var(--gold, #B8953E)'],
                ['Cashback / statement credit', '~₹0.20/RP', 'Worst — never use', 'var(--red)'],
              ].map(([method, rate, note, color], i) => (
                <div key={i} className="flex items-center justify-between">
                  <span style={{ color: 'var(--text-s)' }}>{method}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold" style={{ color }}>{rate}</span>
                    <span className="text-[11px]" style={{ color: 'var(--text-m)' }}>{note}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p>The rule is unchanged by the devaluation: <S>always redeem through SmartBuy.</S> Statement credit gives you 60% less value (₹0.20 vs ₹0.50). HDFC SmartBuy remains the engine that powers this card — see our <a href="/blog/hdfc-smartbuy-guide-2026" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>full SmartBuy guide</a> for the voucher-loop strategy.</p>

          <H2 id="keep-drop">Keep it or drop it?</H2>
          <div className="space-y-3">
            <div className="p-4 rounded-xl" style={{ background: '#EDF5F0', border: '1px solid #C8DDD0' }}>
              <p className="text-[13px] font-bold mb-2" style={{ color: 'var(--green)' }}>Keep Regalia Gold if:</p>
              <ul className="space-y-1.5 text-[13px]" style={{ color: 'var(--text-s)', listStyleType: 'none', padding: 0 }}>
                <li className="flex gap-2"><span style={{ color: 'var(--green)' }}>→</span><span>You book flights/hotels through SmartBuy — the multipliers and ₹0.50/RP value clear the fee easily</span></li>
                <li className="flex gap-2"><span style={{ color: 'var(--green)' }}>→</span><span>You spend ₹4L+ annually (fee waived) and can hit ₹5L/₹7.5L milestones for ₹10,000 in flight vouchers</span></li>
                <li className="flex gap-2"><span style={{ color: 'var(--green)' }}>→</span><span>You pay insurance premiums on the card — Regalia Gold rewards them where most cards don't</span></li>
                <li className="flex gap-2"><span style={{ color: 'var(--green)' }}>→</span><span>₹60K/quarter is comfortable for you — lounge access then remains effectively free</span></li>
              </ul>
            </div>
            <div className="p-4 rounded-xl" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
              <p className="text-[13px] font-bold mb-2" style={{ color: 'var(--red)' }}>Reconsider if:</p>
              <ul className="space-y-1.5 text-[13px]" style={{ color: 'var(--text-s)', listStyleType: 'none', padding: 0 }}>
                <li className="flex gap-2"><span style={{ color: 'var(--red)' }}>→</span><span>Lounge access was your only reason to hold it — the ₹60K/quarter gate breaks the set-and-forget appeal</span></li>
                <li className="flex gap-2"><span style={{ color: 'var(--red)' }}>→</span><span>Your spend is below ₹4L/year — you'll pay the ₹2,500 fee and miss most milestones</span></li>
                <li className="flex gap-2"><span style={{ color: 'var(--red)' }}>→</span><span>You don't use SmartBuy — without it, the base 1.6% rate is unremarkable</span></li>
                <li className="flex gap-2"><span style={{ color: 'var(--red)' }}>→</span><span>You can get HDFC Infinia or Diners Club Black — both offer unconditional unlimited lounge access</span></li>
              </ul>
            </div>
          </div>

          <H2 id="bottom-line">The bottom line</H2>
          <p>Regalia Gold's 2026 changes are real but not fatal. <S>For engaged cardholders who use SmartBuy and hit the milestones, it remains one of the better mid-premium value cards in India</S> — the ₹18,500 of guaranteed milestone value at ₹7.5L spend speaks for itself. The base-rate cut and DCC markup are minor irritants in that context.</p>
          <p>But the card lost its standout feature: <S>effortless, unconditional lounge access.</S> If that was why it sat in your wallet, the ₹60,000 quarterly gate from July 2026 is the moment to decide — either commit to the spend, or move to a card where lounge access isn't conditional (the unlimited tier, or a no-spend mid-range card like SBI Elite from our <a href="/blog/best-credit-cards-lounge-access-india-2026" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>lounge access guide</a>).</p>
          <p>Check exactly what your Regalia Gold points are worth across every redemption method with the <a href="/" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>PointsMax calculator</a>, see what else changed across HDFC cards in the <a href="/blog/credit-card-devaluation-tracker-india-2026" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>devaluation tracker</a>, and learn the maximum-value method in our guide on <a href="/blog/how-to-redeem-credit-card-points-india-2026" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>how to redeem credit card points</a>.</p>

          <div className="p-6 rounded-2xl text-center mt-8" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <p className="text-[16px] font-semibold">Is your Regalia Gold still worth its fee?</p>
            <p className="text-[13px] mt-1 mb-4" style={{ color: 'rgba(250,248,245,0.5)' }}>Run your spend and points through the calculator to see real net value.</p>
            <a href="/tools/breakeven" className="inline-block px-6 py-2.5 rounded-xl text-[14px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Open Breakeven Calculator →</a>
          </div>

          <p className="text-[11px] mt-8 leading-relaxed" style={{ color: 'var(--text-m)' }}>
            <strong>Disclaimer:</strong> Card terms, reward rates, lounge rules, and fees are based on publicly available HDFC communications and reviews as of June 2026 and change without notice. The lounge spend gate takes effect July 1, 2026. Always verify current terms on hdfcbank.com before applying or relying on any benefit. PointsMax is not affiliated with HDFC Bank. Not financial advice.
          </p>

          <FeedbackWidget pageSlug="hdfc-regalia-gold-credit-card-review-2026" pageTitle="HDFC Regalia Gold Review 2026" />
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
            <p className="text-[13px]" style={{ color: 'rgba(250,248,245,0.6)' }}>Is your <strong style={{ color: '#FAF8F5' }}>Regalia Gold</strong> worth the fee?</p>
            <a href="/tools/breakeven" className="shrink-0 px-4 py-2 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Breakeven Calculator →</a>
          </div>
        </div>
      )}
    </div>
  )
}
