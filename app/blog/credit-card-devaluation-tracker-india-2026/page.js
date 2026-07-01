'use client'

import { useState, useEffect } from 'react'
import FeedbackWidget from '@/components/FeedbackWidget'
import PageNav from '@/components/PageNav'

const blogJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Indian Credit Card Devaluation Tracker 2024-2026: Every Change, Every Bank',
  datePublished: '2026-05-27',
  dateModified: '2026-07-03',
  author: { '@type': 'Organization', name: 'PointsMax' },
  publisher: { '@type': 'Organization', name: 'PointsMax', url: 'https://www.pointsmax.in' },
  mainEntityOfPage: 'https://www.pointsmax.in/blog/credit-card-devaluation-tracker-india-2026',
  about: { '@type': 'Thing', name: 'Credit Card Reward Devaluations India' },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which Indian credit cards were devalued in 2026?',
      acceptedAnswer: { '@type': 'Answer', text: 'Major 2026 devaluations: HDFC Bank (July 2026) capped SmartBuy brand-voucher earning at 3,000 Reward Points/month, cutting Infinia voucher earning by 80% (from up to 15,000). Axis Bank (April 2026) removed Marriott Bonvoy, Accor, and Qatar Airways as transfer partners and cut transfer ratios from 5:4 to 5:2 on Magnus and Atlas. HDFC Bank (January 2026) reduced Turkish Airlines and Avianca LifeMiles transfer ratios from 1:1 to 2:1. SBI (2026) capped monthly cashback on SBI Cashback Card at ₹2,000. ICICI Bank reduced base reward rate on several cards.' },
    },
    {
      '@type': 'Question',
      name: 'What happened to Axis Magnus transfer partners in April 2026?',
      acceptedAnswer: { '@type': 'Answer', text: 'On April 2, 2026, Axis Bank removed Marriott Bonvoy, Accor Live Limitless, and Qatar Airways Privilege Club from the Magnus and Atlas transfer partner lists with zero advance notice. The transfer ratio for remaining partners was simultaneously cut from 5:4 to 5:2, halving the effective miles value. Three new partners were added — British Airways Avios, Finnair Plus, and Vietnam Airlines Lotusmiles — but at worse ratios.' },
    },
    {
      '@type': 'Question',
      name: 'Which Indian credit card has NOT been devalued and still offers the best rewards?',
      acceptedAnswer: { '@type': 'Answer', text: 'HDFC Infinia and Diners Club Black remain among the least devalued premium cards for travel: SmartBuy still gives ₹1/point on flights and hotels, and KrisFlyer and Finnair transfers remain at 1:1. However, effective July 1, 2026, HDFC capped SmartBuy brand-voucher earning at 3,000 points/month (down from up to 15,000 on Infinia), so the popular voucher-loop earning strategy is now heavily limited — though this may be temporary. Amazon Pay ICICI remains the most stable, undevalued at 5% on Amazon for Prime members with no changes announced.' },
    },
    {
      '@type': 'Question',
      name: 'Did HDFC SmartBuy reward rates change in 2026?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, twice. HDFC announced a SmartBuy voucher earn rate cut from 5X to 3X in January 2026 but rolled it back on January 16 after backlash. Then, effective July 1, 2026, HDFC introduced a separate monthly cap of 3,000 Reward Points on brand voucher purchases via GyFTR/Woohoo. This cut voucher earning for Infinia from up to 15,000 points/month to 3,000 (an 80% reduction) and for Diners Club Black from 10,000 to 3,000. The overall SmartBuy accelerated caps are unchanged, but can now only be reached via flight/hotel bookings rather than vouchers. This July change is published for July 2026 only so far and may be a temporary experiment.' },
    },
  ],
}

const DEVALUATIONS = [
  {
    month: 'July 2026',
    severity: 'major',
    bank: 'HDFC Bank',
    cards: ['Infinia', 'Diners Club Black', 'BizBlack', 'Regalia Gold'],
    changes: [
      { type: 'bad', text: 'New separate monthly cap of 3,000 Reward Points on SmartBuy Brand Voucher purchases (GyFTR/Woohoo), effective July 1, 2026' },
      { type: 'bad', text: 'Infinia: voucher earning effectively cut from 15,000 → 3,000 points/month — an 80% reduction on the most popular earning route' },
      { type: 'bad', text: 'Diners Club Black Metal: voucher earning cut from 10,000 → 3,000 points/month' },
      { type: 'bad', text: 'Regalia Gold: loses roughly a quarter of its voucher earning capacity' },
      { type: 'neutral', text: 'Overall SmartBuy accelerated caps UNCHANGED (Infinia 15,000 / Diners Black 10,000 / Regalia Gold 4,000) — but now only reachable via flights/hotels, not vouchers' },
      { type: 'note', text: 'Published for July 2026 only so far — may be a temporary experiment. HDFC has rolled back a similar SmartBuy cut before (Jan 2026). Verify current terms before relying on it.' },
    ],
    impact: 'The single most consequential SmartBuy change in years. The dominant Infinia/Diners strategy was buying brand vouchers (Amazon, Flipkart, Swiggy, etc.) to hit the full monthly accelerated cap, then redeeming at ₹1/point. That route is now capped at 3,000 points; to still hit 15,000, cardholders must book flights/hotels directly through SmartBuy. Everyday-spend value on these cards drops sharply for voucher-reliant users. Framed as live but potentially temporary.',
  },
  {
    month: 'April 2026',
    severity: 'critical',
    bank: 'Axis Bank',
    cards: ['Magnus', 'Magnus Burgundy', 'Atlas', 'Horizon', 'Olympus'],
    changes: [
      { type: 'bad', text: 'Marriott Bonvoy removed as transfer partner — zero advance notice' },
      { type: 'bad', text: 'Accor Live Limitless removed — was the highest fixed-value hotel transfer in India' },
      { type: 'bad', text: 'Qatar Airways Privilege Club removed — ended Qsuite access via Axis' },
      { type: 'bad', text: 'Transfer ratio cut: 5:4 → 5:2 on standard Magnus and Atlas (ratio halved)' },
      { type: 'bad', text: 'Monthly milestone program discontinued — max yearly accumulation now 72,000 points at base rate' },
      { type: 'bad', text: 'Group caps introduced: Group A max 1L points/year, Group B max 4L points/year' },
      { type: 'neutral', text: 'New partners added: British Airways Avios, Finnair Plus, Vietnam Airlines Lotusmiles (all at 5:2)' },
      { type: 'note', text: 'Exception: Magnus for Burgundy Private keeps 5:4 ratio' },
    ],
    impact: 'Catastrophic for existing holders. Effective reward rate dropped from ~3% to ~1.2% via transfers. Accor\'s removal eliminated the only fixed-value hotel redemption in the Axis ecosystem.',
  },
  {
    month: 'January 2026',
    severity: 'major',
    bank: 'HDFC Bank',
    cards: ['Infinia', 'Diners Club Black', 'Regalia Gold'],
    changes: [
      { type: 'bad', text: 'Turkish Airlines Miles&Smiles transfer ratio: 1:1 → 2:1 (value halved)' },
      { type: 'bad', text: 'Avianca LifeMiles transfer ratio: 1:1 → 2:1 (value halved)' },
      { type: 'bad', text: 'SmartBuy voucher earn rate announced: 5X → 3X (on Gyftr/brand vouchers)' },
      { type: 'good', text: 'SmartBuy 5X voucher rate ROLLED BACK on January 16 after customer backlash — 5X restored' },
      { type: 'bad', text: 'Monthly redemption cap introduced: 5 redemptions per month, 2L points per statement cycle' },
    ],
    impact: 'The SmartBuy rollback was a rare win for cardholders. Turkish and Avianca devaluations hurt niche users but KrisFlyer (the most popular transfer) remained at 1:1. The monthly caps affect only very high spenders.',
  },
  {
    month: 'February 2026',
    severity: 'moderate',
    bank: 'HDFC Bank',
    cards: ['Infinia', 'Diners Club Black'],
    changes: [
      { type: 'bad', text: 'Retention requirement introduced from April 2026: ₹18L annual spend OR ₹50L banking relationship to keep Infinia' },
      { type: 'bad', text: 'Travel redemption cap: 1,50,000 points per month for airline/hotel bookings' },
      { type: 'bad', text: 'Cashback redemption cap: 50,000 points per month' },
    ],
    impact: 'Mostly affects ultra-high spenders who were using redemption arbitrage strategies. For typical ₹10-15L/year cardholders, the caps are rarely hit in practice.',
  },
  {
    month: '2026 (ongoing)',
    severity: 'moderate',
    bank: 'SBI',
    cards: ['SBI Cashback Card'],
    changes: [
      { type: 'bad', text: 'Online cashback capped at ₹2,000 per month (equivalent to ₹40,000 monthly online spend at 5%)' },
      { type: 'bad', text: 'Gaming transactions excluded from cashback eligibility' },
      { type: 'bad', text: 'Certain utility and government payment categories excluded' },
    ],
    impact: 'Significant for heavy online spenders who were using SBI Cashback as a primary card for all online spend. The ₹2K cap effectively limits the card\'s value for anyone spending more than ₹40K/month online.',
  },
  {
    month: 'June 2025',
    severity: 'moderate',
    bank: 'Axis Bank',
    cards: ['Magnus', 'Atlas', 'Flipkart Axis', 'Airtel Axis'],
    changes: [
      { type: 'bad', text: 'T&C updated across card portfolio — broad changes to benefit structures' },
      { type: 'bad', text: 'Lounge access on some mid-tier Axis cards linked to minimum quarterly spend (₹50,000)' },
      { type: 'bad', text: 'Airtel Axis: Swiggy and BigBasket cashback removed' },
      { type: 'bad', text: 'Cashback caps restructured on cashback-focused cards' },
    ],
    impact: 'Mid-2025 changes signaled Axis\'s cost-cutting direction. The lounge access spend requirement was an early warning sign for what came in April 2026.',
  },
  {
    month: 'April 2024',
    severity: 'major',
    bank: 'Axis Bank',
    cards: ['Magnus', 'Atlas'],
    changes: [
      { type: 'bad', text: 'Transfer partner groups (A and B) introduced with annual caps' },
      { type: 'bad', text: 'Group A: max 2L points/year (later revised down further in 2026)' },
      { type: 'bad', text: 'Group B: max 8L points/year (later revised down further in 2026)' },
      { type: 'bad', text: 'Priority Pass guest lounge visits capped at 4 per year' },
    ],
    impact: 'First introduction of transfer caps — limited redemption potential for heavy spenders. The April 2026 changes were a continuation and acceleration of this trend.',
  },
  {
    month: 'September 2023',
    severity: 'critical',
    bank: 'Axis Bank',
    cards: ['Magnus'],
    changes: [
      { type: 'bad', text: 'Transfer ratio cut: 5:4 → 5:2 for standard Magnus (Burgundy kept 5:4 for longer)' },
      { type: 'bad', text: 'Monthly milestone bonus points significantly reduced' },
      { type: 'bad', text: 'Welcome benefit of complimentary domestic flight ticket removed' },
    ],
    impact: 'The original Magnus devaluation that started the downfall. Before this, Magnus was arguably the best premium travel card in India. This was the first cut; April 2026 finished the job.',
  },
  {
    month: '2023-2024',
    severity: 'moderate',
    bank: 'ICICI Bank',
    cards: ['Multiple cards'],
    changes: [
      { type: 'bad', text: 'Base reward rate reduced across several cards' },
      { type: 'bad', text: 'iReward catalogue value reduced from ₹0.25 to ₹0.15/point on some cards' },
      { type: 'bad', text: 'Emeralde Private: InterMiles transfer caps introduced' },
    ],
    impact: 'ICICI reduced rewards gradually rather than with a single large cut. The cumulative effect has made most ICICI cards poor value except Emeralde Private via InterMiles.',
  },
]

const SEVERITY_CONFIG = {
  critical: { label: 'Critical', color: 'var(--red)', bg: '#FDF1EF', border: '#E8C5BF' },
  major: { label: 'Major', color: '#92782A', bg: '#FBF8F0', border: '#E8DFC5' },
  moderate: { label: 'Moderate', color: '#0891b2', bg: '#ECFEFF', border: '#CFFAFE' },
  minor: { label: 'Minor', color: 'var(--text-m)', bg: 'var(--bg-s)', border: 'var(--border)' },
}

export default function BlogPost() {
  const [showBar, setShowBar] = useState(false)
  const [filterBank, setFilterBank] = useState('All')

  useEffect(() => {
    const fn = () => setShowBar(window.scrollY > 600)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const H2 = ({ children }) => (
    <h2 className="pt-6" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', letterSpacing: '-0.01em' }}>
      {children}
    </h2>
  )
  const S = ({ children }) => <strong style={{ color: 'var(--text)' }}>{children}</strong>

  const banks = ['All', ...new Set(DEVALUATIONS.map(d => d.bank))]
  const filtered = filterBank === 'All' ? DEVALUATIONS : DEVALUATIONS.filter(d => d.bank === filterBank)

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageNav />
      <article className="max-w-2xl mx-auto px-5 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 text-[13px]" style={{ color: 'var(--text-m)' }}>
          <a href="/" className="hover:text-black/50 transition-colors">PointsMax</a><span>/</span>
          <a href="/blog" className="hover:text-black/50 transition-colors">Blog</a><span>/</span>
          <span style={{ color: 'var(--text-s)' }}>Devaluation Tracker</span>
        </div>

        {/* Meta */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded" style={{ color: 'var(--red)', background: 'rgba(220,38,38,0.06)' }}>Evergreen Tracker</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>Last updated: July 3, 2026</span>
          <span className="text-[12px] px-2 py-0.5 rounded" style={{ color: 'var(--green)', background: 'rgba(45,106,79,0.06)', fontSize: '11px', fontWeight: 700 }}>↻ Updated monthly</span>
        </div>

        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(24px, 4vw, 36px)', lineHeight: 1.15, letterSpacing: '-0.025em', color: 'var(--text)' }}>
          Indian Credit Card Devaluation Tracker 2024–2026
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
          Every reward cut, transfer partner removal, and earn rate reduction across HDFC, Axis, SBI, ICICI, and Amex — documented with dates, what changed, and how much value was lost. Updated every month.
        </p>

        {/* Summary scoreboard */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { bank: 'Axis Bank', status: 'Most Devalued', color: 'var(--red)', events: 4 },
            { bank: 'HDFC Bank', status: 'Voucher Cut (Jul)', color: 'var(--gold, #B8953E)', events: 4 },
            { bank: 'SBI', status: 'Cap Added', color: '#92782A', events: 1 },
            { bank: 'ICICI', status: 'Gradual Cuts', color: '#0891b2', events: 1 },
          ].map((s, i) => (
            <div key={i} className="p-3.5 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
              <p className="text-[13px] font-bold" style={{ color: 'var(--text)' }}>{s.bank}</p>
              <p className="text-[11px] font-semibold mt-0.5" style={{ color: s.color }}>{s.status}</p>
              <p className="text-[11px] mt-1" style={{ color: 'var(--text-m)' }}>{s.events} devaluation{s.events > 1 ? 's' : ''} tracked</p>
            </div>
          ))}
        </div>

        <div className="mt-10 space-y-6 text-[15px] leading-[1.85]" style={{ color: 'var(--text-s)' }}>

          <p>India's credit card reward landscape changed more in the 18 months between September 2023 and April 2026 than in the previous five years combined. Banks that built entire card portfolios on the premise of generous airline mile transfers and high earn rates quietly — and in some cases overnight — dismantled those programmes.</p>

          <p>This page documents every significant change we can verify, with dates, affected cards, and a plain-English explanation of what was lost. We update it monthly as new changes are announced or discovered.</p>

          <div className="p-4 rounded-xl" style={{ background: '#EDF5F0', border: '1px solid #C8DDD0' }}>
            <p className="text-[13px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
              <strong style={{ color: 'var(--green)' }}>How to use this tracker:</strong> Find your card below to see what changed and when. Then use the <a href="/" style={{ color: 'var(--green)', textDecoration: 'underline' }}>PointsMax calculator</a> to see what your existing points are worth at current (post-devaluation) rates. If your card has been significantly devalued, our <a href="/blog/best-credit-cards-india-2026" style={{ color: 'var(--green)', textDecoration: 'underline' }}>best cards guide</a> shows the alternatives, and our <a href="/blog/how-to-redeem-credit-card-points-india-2026" style={{ color: 'var(--green)', textDecoration: 'underline' }}>guide to redeeming points for maximum value</a> helps you use what you have before it devalues further.
            </p>
          </div>

          <H2>The big picture: why is this happening?</H2>
          <p>Three forces are driving the devaluation wave:</p>
          <ul className="space-y-2 pl-1" style={{ listStyleType: 'none' }}>
            <li className="flex gap-2"><span style={{ color: 'var(--gold)' }}>1.</span><span><S>Rupee depreciation.</S> Banks buy airline miles and hotel points from loyalty programmes in USD. As the rupee weakened against the dollar from 2023 onwards, the same rupee-denominated card spend generated fewer miles at increasing cost to the bank.</span></li>
            <li className="flex gap-2"><span style={{ color: 'var(--gold)' }}>2.</span><span><S>Higher-than-expected redemptions.</S> Premium card holders — especially those in points/miles communities — were extracting far more value than banks had modelled. Axis reportedly became one of the world's largest buyers of Accor points before removing the programme entirely.</span></li>
            <li className="flex gap-2"><span style={{ color: 'var(--gold)' }}>3.</span><span><S>RBI margin pressure.</S> Tighter interchange regulations and RBI scrutiny of credit card profitability have pushed banks to cut reward costs across the board.</span></li>
          </ul>
          <p>The result: cards that were priced for one era of economics are being repriced mid-contract. The cards that have held up best are those whose rewards are denominated in rupees (like HDFC SmartBuy) rather than USD-priced airline miles.</p>

          {/* Filter */}
          <H2>Complete devaluation timeline</H2>
          <div className="flex gap-2 flex-wrap mb-4">
            {banks.map(b => (
              <button key={b} onClick={() => setFilterBank(b)}
                className="px-3 py-1.5 rounded-lg text-[12px] font-medium transition-all"
                style={{ background: filterBank === b ? 'var(--dark)' : 'var(--bg-s)', color: filterBank === b ? '#FAF8F5' : 'var(--text-s)', border: '1px solid var(--border)' }}>
                {b}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {filtered.map((d, i) => {
              const cfg = SEVERITY_CONFIG[d.severity] || SEVERITY_CONFIG.minor
              return (
                <div key={i} className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${cfg.border}` }}>
                  {/* Header */}
                  <div className="px-5 py-4 flex items-start justify-between gap-3" style={{ background: cfg.bg }}>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[11px] font-bold uppercase tracking-wide px-2 py-0.5 rounded" style={{ color: cfg.color, background: 'rgba(255,255,255,0.5)' }}>{cfg.label}</span>
                        <span className="text-[12px] font-semibold" style={{ color: 'var(--text-m)' }}>{d.month}</span>
                      </div>
                      <p className="text-[16px] font-bold mt-1" style={{ color: 'var(--text)' }}>{d.bank}</p>
                      <p className="text-[12px] mt-0.5" style={{ color: 'var(--text-m)' }}>Affected: {d.cards.join(', ')}</p>
                    </div>
                  </div>
                  {/* Changes */}
                  <div className="px-5 py-4 space-y-2" style={{ background: 'var(--card)' }}>
                    {d.changes.map((c, j) => (
                      <div key={j} className="flex items-start gap-2 text-[13px]">
                        <span className="shrink-0 mt-0.5" style={{ color: c.type === 'bad' ? 'var(--red)' : c.type === 'good' ? 'var(--green)' : c.type === 'neutral' ? '#0891b2' : 'var(--text-m)' }}>
                          {c.type === 'bad' ? '✕' : c.type === 'good' ? '✓' : c.type === 'neutral' ? '→' : 'ℹ'}
                        </span>
                        <span style={{ color: 'var(--text-s)' }}>{c.text}</span>
                      </div>
                    ))}
                    {/* Impact */}
                    <div className="mt-3 pt-3" style={{ borderTop: '1px solid var(--border)' }}>
                      <p className="text-[12px] leading-relaxed" style={{ color: 'var(--text-m)' }}>
                        <strong style={{ color: 'var(--text-s)' }}>Impact: </strong>{d.impact}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Mid CTA */}
          <div className="p-5 rounded-xl my-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <div>
              <p className="text-[14px] font-semibold">Check your points value at current rates</p>
              <p className="text-[12px] mt-1" style={{ color: 'rgba(250,248,245,0.5)' }}>Post-devaluation values updated. See what your balance is actually worth today.</p>
            </div>
            <a href="/" className="shrink-0 px-5 py-2.5 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>Open Calculator →</a>
          </div>

          <H2>Which cards have held up best after the devaluations?</H2>
          <p>Despite the industry-wide trend, a few cards have emerged from 2024-2026 with their value relatively intact:</p>

          <div className="space-y-3">
            {[
              { name: 'HDFC Infinia', status: 'Voucher route cut', color: 'var(--gold, #B8953E)', desc: 'Still strong for travel: SmartBuy gives ₹1/point on flights/hotels, KrisFlyer and Finnair still 1:1. But the July 2026 change caps brand-voucher earning at 3,000 points/month (was up to 15,000) — an 80% cut to the most popular everyday-earning route. To hit the full cap you now must book travel via SmartBuy. May be temporary. The ₹18L retention requirement also applies from FY2026-27.', link: '/blog/hdfc-infinia-credit-card-review-2026' },
              { name: 'HDFC Diners Club Black', status: 'Voucher route cut', color: 'var(--gold, #B8953E)', desc: 'Same July 2026 voucher cap as Infinia — brand-voucher earning cut from 10,000 to 3,000 points/month. Travel redemption at ₹1/point and transfer partners unchanged. Still among the best in HDFC\'s stable, but the everyday voucher-loop advantage is gone for now.', link: '/blog/hdfc-diners-club-black-credit-card-review-2026' },
              { name: 'Amazon Pay ICICI', status: 'Unchanged', color: 'var(--green)', desc: 'No devaluations announced or implemented. 5% on Amazon for Prime members remains intact. Genuinely one of the most stable rewards propositions in India.', link: '/blog/best-lifetime-free-credit-cards-india-2026' },
              { name: 'Amex Membership Rewards', status: 'Largely intact', color: '#92782A', desc: 'Transfer ratios to most programmes unchanged. The ₹66,000 annual fee has always been the limiting factor, not devaluation.', link: '/blog/amex-platinum-charge-card-review-india-2026' },
              { name: 'Axis Magnus', status: 'Heavily devalued', color: 'var(--red)', desc: 'Multiple rounds of devaluation since 2023. Transfer ratio halved. Best partners removed. Monthly milestone gone. No longer competitive at ₹12,500/year.', link: '/blog/axis-magnus-credit-card-review-2026' },
            ].map((c, i) => (
              <div key={i} className="p-4 rounded-xl flex items-start gap-3" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-[14px] font-semibold" style={{ color: 'var(--text)' }}>{c.name}</p>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded" style={{ color: c.color, background: c.color + '12' }}>{c.status}</span>
                  </div>
                  <p className="text-[13px] mt-1.5 leading-relaxed" style={{ color: 'var(--text-s)' }}>{c.desc}</p>
                  <a href={c.link} className="text-[12px] mt-1 inline-block" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>Full review →</a>
                </div>
              </div>
            ))}
          </div>

          <H2>What should you do if your card was devalued?</H2>

          <div className="space-y-3">
            {[
              { step: '1', title: 'Check your current point value', desc: 'Use the PointsMax calculator to see what your existing balance is worth at post-devaluation rates. You may be surprised — the value gap between best and worst redemption can still be 3-5x on the same card.', cta: '/', ctaText: 'Open calculator' },
              { step: '2', title: 'Redeem existing points sooner', desc: 'Banks can devalue further at any time. Points sitting in your account are subject to future cuts. The best time to redeem was before the devaluation. The second best time is now.', cta: null },
              { step: '3', title: 'Evaluate whether to keep the card', desc: 'For heavily devalued cards like Axis Magnus, the annual fee may no longer be justified. Run the breakeven math — if the card costs ₹12,500 and only returns ₹8,000 in value at current rates, it\'s costing you ₹4,500/year.', cta: '/tools/breakeven', ctaText: 'Breakeven calculator' },
              { step: '4', title: 'Consider a better alternative', desc: 'If you\'re switching, start with our best cards guide for your spend level, or take the card quiz to get a personalised recommendation.', cta: '/tools/card-quiz', ctaText: 'Take card quiz' },
            ].map((s, i) => (
              <div key={i} className="flex gap-3">
                <span className="w-7 h-7 rounded-full grid place-items-center text-[12px] font-bold shrink-0" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>{s.step}</span>
                <div>
                  <p className="text-[14px] font-semibold" style={{ color: 'var(--text)' }}>{s.title}</p>
                  <p className="text-[13px] mt-0.5" style={{ color: 'var(--text-s)' }}>{s.desc}</p>
                  {s.cta && <a href={s.cta} className="text-[12px] mt-1 inline-block" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>{s.ctaText} →</a>}
                </div>
              </div>
            ))}
          </div>

          <H2>Upcoming changes to watch</H2>
          <p>Based on industry patterns and bank communications, these changes are either confirmed or likely in the next 3-6 months:</p>

          <div className="space-y-2">
            {[
              { label: 'HDFC SmartBuy voucher earn rate', status: 'Watch', note: 'The January 2026 rollback bought time but the bank\'s cost pressures haven\'t changed. A voucher earn rate cut is likely within 12 months.' },
              { label: 'Axis Magnus Burgundy 5:4 ratio', status: 'Watch', note: 'Currently the only Axis card with a 5:4 transfer ratio. Given the trajectory, Burgundy\'s protected status may not last beyond 2026.' },
              { label: 'SBI Elite cashback structure', status: 'Watch', note: 'SBI has been gradually reducing reward rates. SBI Elite\'s current earn rate structure may face caps similar to SBI Cashback.' },
              { label: 'ICICI Emeralde InterMiles transfer', status: 'Stable', note: 'No announced changes. InterMiles is the only meaningful transfer option on ICICI cards and appears stable for now.' },
            ].map((w, i) => (
              <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl" style={{ background: 'var(--bg-s)', border: '1px solid var(--border)' }}>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded shrink-0 mt-0.5" style={{ color: w.status === 'Watch' ? '#92782A' : 'var(--green)', background: w.status === 'Watch' ? '#FBF8F0' : '#EDF5F0' }}>{w.status}</span>
                <div>
                  <p className="text-[13px] font-semibold" style={{ color: 'var(--text)' }}>{w.label}</p>
                  <p className="text-[12px] mt-0.5" style={{ color: 'var(--text-s)' }}>{w.note}</p>
                </div>
              </div>
            ))}
          </div>

          <H2>How we track devaluations</H2>
          <p>We monitor bank websites, MITC (Most Important Terms & Conditions) documents, email communications to cardholders, and community reports from r/CreditCardsIndia, r/IndiaInvestments, and r/churningindia. When a change is reported, we verify against the bank's official T&C page before publishing.</p>
          <p>If you spot a devaluation we've missed, <a href="/contact" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>let us know via the contact form</a>. We aim to update this page within 24 hours of any confirmed change.</p>

          <div className="p-6 rounded-2xl text-center mt-8" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <p className="text-[16px] font-semibold">See what your points are worth at current rates</p>
            <p className="text-[13px] mt-1 mb-4" style={{ color: 'rgba(250,248,245,0.5)' }}>All post-devaluation values updated. 25+ cards, every redemption method.</p>
            <a href="/" className="inline-block px-6 py-2.5 rounded-xl text-[14px] font-semibold" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>Open PointsMax Calculator →</a>
          </div>

          <p className="text-[11px] mt-8 leading-relaxed" style={{ color: 'var(--text-m)' }}>
            <strong>Disclaimer:</strong> This tracker is based on publicly available information, bank communications, and community reports. We strive for accuracy but cannot guarantee completeness. Reward rates and card benefits change frequently — always verify current terms on your bank's website. Last updated: July 3, 2026. PointsMax is not affiliated with any bank listed.
          </p>

          <FeedbackWidget pageSlug="credit-card-devaluation-tracker-india-2026" pageTitle="Indian Credit Card Devaluation Tracker 2024-2026" />
        </div>
      </article>

      <footer className="py-10 px-5" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[12px]" style={{ color: 'var(--text-m)' }}>
            <a href="/" className="hover:text-black/40 transition-colors">PointsMax</a>
            <span className="mx-2">·</span>
            <a href="/transfers" className="hover:text-black/40 transition-colors">Transfers</a>
            <span className="mx-2">·</span>
            <a href="/blog" className="hover:text-black/40 transition-colors">Blog</a>
            <span className="mx-2">·</span>
            <a href="/privacy" className="hover:text-black/40 transition-colors">Privacy</a>
          </p>
        </div>
      </footer>

      {showBar && (
        <div className="fixed bottom-0 left-0 right-0 z-50" style={{ background: 'var(--dark)', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '10px 16px' }}>
          <div className="max-w-2xl mx-auto flex items-center justify-between gap-3">
            <p className="text-[13px] hidden sm:block" style={{ color: 'rgba(250,248,245,0.6)' }}>Check your <strong style={{ color: '#FAF8F5' }}>points value</strong> at current rates</p>
            <p className="text-[13px] sm:hidden" style={{ color: 'rgba(250,248,245,0.6)' }}>Check points value</p>
            <a href="/" className="shrink-0 px-4 py-2 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>Open Calculator →</a>
          </div>
        </div>
      )}
    </div>
  )
}
