'use client'

import { useState, useEffect } from 'react'
import FeedbackWidget from '@/components/FeedbackWidget'

const blogJsonLd = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Singapore Airlines KrisFlyer India Guide 2026: Transfer Cards, Routes and Sweet Spots',
  datePublished: '2026-06-01', dateModified: '2026-06-01',
  author: { '@type': 'Organization', name: 'PointsMax' },
  publisher: { '@type': 'Organization', name: 'PointsMax', url: 'https://www.pointsmax.in' },
  mainEntityOfPage: 'https://www.pointsmax.in/blog/singapore-airlines-krisflyer-india-guide-2026',
}

const faqJsonLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Which Indian credit cards transfer to Singapore Airlines KrisFlyer?', acceptedAnswer: { '@type': 'Answer', text: 'HDFC Infinia, HDFC Diners Club Black, and HDFC Regalia Gold transfer to KrisFlyer at 1:1 ratio. Axis Magnus and Atlas transferred at 5:2 ratio (post-April 2026). American Express Platinum and Gold transfer via Membership Rewards to KrisFlyer at 1:1.' }},
    { '@type': 'Question', name: 'How many KrisFlyer miles for Delhi to Singapore business class?', acceptedAnswer: { '@type': 'Answer', text: 'After the November 2025 award chart changes, Delhi to Singapore business class costs 46,000 KrisFlyer miles one-way on a Saver award. Round trip is 92,000 miles. The cash equivalent for this route is approximately ₹80,000-1,00,000, giving an effective value of ₹1.74-2.17 per KrisFlyer mile.' }},
    { '@type': 'Question', name: 'How long do KrisFlyer miles last?', acceptedAnswer: { '@type': 'Answer', text: 'KrisFlyer miles expire 3 years from the date they are credited to your account. Each transfer or earning activity creates a new batch with its own expiry date. You can extend miles by earning or spending KrisFlyer miles at least once every 3 years — even a small hotel or retail partner transaction keeps your miles active.' }},
    { '@type': 'Question', name: 'What is the difference between KrisFlyer Saver, Advantage and Access awards?', acceptedAnswer: { '@type': 'Answer', text: 'Saver awards have the lowest mile cost and fixed pricing but limited seat availability — typically 2-4 seats per flight. Advantage awards cost 15-20% more miles but have significantly more seats available. Access awards, introduced November 2025, are dynamically priced with no fixed chart and are available on any seat as long as the flight has inventory — the most expensive but most available option.' }},
  ],
}

export default function BlogPost() {
  const [showBar, setShowBar] = useState(false)
  const [activeTab, setActiveTab] = useState('economy')
  useEffect(() => {
    const fn = () => setShowBar(window.scrollY > 600)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const H2 = ({ children }) => <h2 className="pt-8" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', letterSpacing: '-0.01em' }}>{children}</h2>
  const S = ({ children }) => <strong style={{ color: 'var(--text)' }}>{children}</strong>

  const routes = {
    economy: [
      { from: 'DEL (Delhi)', miles: '17,500', cash: '₹18,000-22,000', value: '₹1.03-1.26' },
      { from: 'BOM (Mumbai)', miles: '17,500', cash: '₹18,000-22,000', value: '₹1.03-1.26' },
      { from: 'BLR (Bangalore)', miles: '17,500', cash: '₹20,000-25,000', value: '₹1.14-1.43' },
      { from: 'MAA (Chennai)', miles: '13,000', cash: '₹14,000-18,000', value: '₹1.08-1.38' },
      { from: 'HYD (Hyderabad)', miles: '17,500', cash: '₹19,000-23,000', value: '₹1.09-1.31' },
    ],
    business: [
      { from: 'DEL (Delhi)', miles: '46,000', cash: '₹80,000-1,00,000', value: '₹1.74-2.17 ✅' },
      { from: 'BOM (Mumbai)', miles: '46,000', cash: '₹85,000-1,05,000', value: '₹1.85-2.28 ✅' },
      { from: 'BLR (Bangalore)', miles: '46,000', cash: '₹90,000-1,10,000', value: '₹1.96-2.39 ✅' },
      { from: 'MAA (Chennai)', miles: '35,000', cash: '₹65,000-80,000', value: '₹1.86-2.29 ✅' },
      { from: 'HYD (Hyderabad)', miles: '46,000', cash: '₹80,000-1,00,000', value: '₹1.74-2.17 ✅' },
    ],
  }

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <article className="max-w-2xl mx-auto px-5 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 text-[13px]" style={{ color: 'var(--text-m)' }}>
          <a href="/">PointsMax</a><span>/</span>
          <a href="/blog">Learn</a><span>/</span>
          <span style={{ color: 'var(--text-s)' }}>KrisFlyer India Guide</span>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded" style={{ color: '#0891b2', background: 'rgba(8,145,178,0.08)' }}>Loyalty Program Guide</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>June 1, 2026</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>14 min read</span>
        </div>

        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(24px, 4vw, 36px)', lineHeight: 1.15, letterSpacing: '-0.025em', color: 'var(--text)' }}>
          Singapore Airlines KrisFlyer: The Complete India Guide 2026
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
          Which Indian cards transfer at 1:1, the post-November 2025 award chart decoded, India route sweet spots with real mile counts, and the step-by-step booking guide — everything an Indian cardholder needs to use KrisFlyer intelligently.
        </p>

        {/* Quick stats */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { n: '1:1', label: 'Transfer ratio (HDFC)' },
            { n: '46K', label: 'DEL→SIN Business miles' },
            { n: '3 yrs', label: 'Miles expiry' },
            { n: '5-20%', label: 'Nov 2025 devaluation' },
          ].map((s, i) => (
            <div key={i} className="p-3 rounded-xl text-center" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
              <p className="text-[20px] font-mono font-bold" style={{ color: 'var(--text)' }}>{s.n}</p>
              <p className="text-[11px] mt-0.5" style={{ color: 'var(--text-m)' }}>{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 space-y-6 text-[15px] leading-[1.85]" style={{ color: 'var(--text-s)' }}>

          <p>KrisFlyer is the most popular airline loyalty program among Indian credit card holders — and for good reason. HDFC Infinia transfers at 1:1, Singapore Airlines flies the A380 directly to Delhi and Mumbai, and business class availability on India routes is genuinely among the best in the world for award bookings.</p>
          <p>But the program isn't simple. The November 2025 award chart changed significantly. There are now three redemption types — Saver, Advantage, and Access — with very different mile requirements. And the right strategy for an Indian cardholder using HDFC Infinia is quite different from someone using an Axis card at 5:2 ratio.</p>
          <p>This guide covers everything you need to know, specifically from an India perspective.</p>

          <H2>What is KrisFlyer and why does it matter for Indian cardholders?</H2>
          <p>KrisFlyer is Singapore Airlines' frequent flyer programme. You earn miles by flying Singapore Airlines or its <S>Star Alliance</S> partners (Air India, Lufthansa, United, ANA, and 22 others), and redeem them for award flights in any cabin class.</p>
          <p>For Indian cardholders, KrisFlyer matters because:</p>
          <ul className="space-y-2 pl-1 mt-2" style={{ listStyleType: 'none' }}>
            <li className="flex gap-2"><span style={{ color: 'var(--gold)' }}>→</span><span><S>HDFC Infinia and Diners Club Black transfer at 1:1.</S> 10,000 reward points becomes 10,000 KrisFlyer miles. No better ratio exists from any Indian premium card.</span></li>
            <li className="flex gap-2"><span style={{ color: 'var(--gold)' }}>→</span><span><S>Singapore Airlines flies to Delhi and Mumbai directly.</S> Both routes operate the A380, which means access to Business Class Suites — widely considered one of the best products in the air.</span></li>
            <li className="flex gap-2"><span style={{ color: 'var(--gold)' }}>→</span><span><S>Star Alliance membership unlocks Air India redemptions.</S> You can use KrisFlyer miles to book Air India flights — useful for domestic connections and select international routes.</span></li>
            <li className="flex gap-2"><span style={{ color: 'var(--gold)' }}>→</span><span><S>No fuel surcharges on Singapore Airlines metal.</S> Unlike British Airways (which charges hefty fuel surcharges), Singapore Airlines award bookings on SQ-operated flights are genuinely cheap in taxes — typically ₹3,000-8,000 one-way.</span></li>
          </ul>

          <H2>Which Indian credit cards transfer to KrisFlyer — and at what ratio?</H2>
          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-[13px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead><tr>
                <th className="text-left py-3 px-3 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Card</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Transfer ratio</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>10,000 pts =</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Notes</th>
              </tr></thead>
              <tbody>
                {[
                  ['HDFC Infinia', '1:1', '10,000 miles', 'Best in India. Use this.', 'var(--green)'],
                  ['HDFC Diners Club Black', '1:1', '10,000 miles', 'Same as Infinia', 'var(--green)'],
                  ['HDFC Regalia Gold', '2:1', '5,000 miles', 'Less efficient — use SmartBuy instead', 'var(--gold)'],
                  ['Amex Platinum/Gold', '1:1', '10,000 miles', 'Via Membership Rewards programme', 'var(--green)'],
                  ['Axis Magnus', '5:2', '4,000 miles', 'Post-April 2026. Significantly worse value', 'var(--red)'],
                  ['Axis Atlas', '5:2', '4,000 miles', 'Post-April 2026. Significantly worse value', 'var(--red)'],
                ].map(([card, ratio, miles, note, color], i) => (
                  <tr key={i}>
                    <td className="py-2.5 px-3 font-medium" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{card}</td>
                    <td className="py-2.5 px-2 text-center font-mono font-bold" style={{ color, borderBottom: '1px solid var(--border)' }}>{ratio}</td>
                    <td className="py-2.5 px-2 text-center font-mono" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>{miles}</td>
                    <td className="py-2.5 px-2 text-[12px]" style={{ color: 'var(--text-m)', borderBottom: '1px solid var(--border)' }}>{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>The bottom line: <S>if you have HDFC Infinia or Diners Club Black, KrisFlyer is your #1 transfer destination.</S> If you're on Axis Magnus or Atlas at the post-April 2026 5:2 ratio, the math is much less compelling — SmartBuy travel portal at ₹0.50/point often beats a transfer that yields 4,000 miles per 10,000 points.</p>

          <H2>The November 2025 award chart changes — what actually changed</H2>
          <p>Singapore Airlines devalued KrisFlyer in November 2025 for the first time since 2022. Here's what changed and what it means for Indian cardholders specifically:</p>

          <div className="space-y-3">
            {[
              { type: 'bad', title: 'Business class got 5% more expensive on most India routes', desc: 'DEL/BOM to SIN business class went from approximately 43,750 to 46,000 miles one-way (Saver). A meaningful increase but the absolute value per mile is still strong at ₹1.74-2.17.' },
              { type: 'bad', title: 'Istanbul sweet spot took a 20% hit', desc: 'Istanbul was the best-value European gateway — Business Class from SIN at 68,000 miles vs 108,500 for most of Europe. Now 68,000 → 80,000 miles. Still cheaper than direct Europe, but the bargain is smaller.' },
              { type: 'bad', title: 'Star Alliance partner flights cost 5-12% more', desc: 'If you were planning to use KrisFlyer miles on Air India, Lufthansa, or United flights, expect 5-12% higher mile requirements versus pre-November 2025.' },
              { type: 'neutral', title: 'Access awards introduced — dynamic pricing', desc: 'New third tier with no fixed chart. More availability than Saver but pricing varies with demand. Useful when Saver and Advantage seats are gone but priced significantly higher — typically 40-100% more than Saver.' },
              { type: 'good', title: 'Economy Saver rates to Southeast Asia reduced slightly', desc: 'Economy to Thailand, Indonesia, Malaysia, Vietnam dropped ~5%. Less relevant for Indian cardholders chasing business class, but good news if you\'re using KrisFlyer for leisure economy trips in Asia.' },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl" style={{
                background: item.type === 'bad' ? '#FDF1EF' : item.type === 'good' ? '#EDF5F0' : 'var(--bg-s)',
                border: `1px solid ${item.type === 'bad' ? '#E8C5BF' : item.type === 'good' ? '#C8DDD0' : 'var(--border)'}`,
              }}>
                <p className="text-[13px] font-semibold mb-1" style={{ color: item.type === 'bad' ? 'var(--red)' : item.type === 'good' ? 'var(--green)' : 'var(--text)' }}>
                  {item.type === 'bad' ? '↑' : item.type === 'good' ? '↓' : '→'} {item.title}
                </p>
                <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <H2>Saver vs Advantage vs Access: which should you book?</H2>
          <p>This is the most common source of confusion. Here's the plain-English breakdown:</p>

          <div className="grid gap-3 mt-2">
            {[
              { name: 'Saver', color: 'var(--green)', badge: 'Best value', miles: 'Lowest fixed rate', seats: '2-4 per flight', book: 'Up to 355 days ahead', tip: 'Book as early as possible — up to 11 months before travel. India routes often open with good Saver availability. Mid-week flights (Tue/Wed) have better Saver space than weekends.' },
              { name: 'Advantage', color: 'var(--gold)', badge: 'More availability', miles: '15-20% more than Saver', seats: '8-12 per flight', book: '1-4 months ahead', tip: 'Good option if Saver is sold out and you have a fixed travel date. The extra miles are worth paying to lock in your preferred dates.' },
              { name: 'Access', color: 'var(--red)', badge: 'Last resort', miles: 'Dynamic — no fixed chart', seats: 'Any available seat', book: 'Anytime', tip: 'Only use if Saver and Advantage are both unavailable and your dates are fixed. Access awards can cost 50-100% more miles than Saver. Check your options carefully before booking.' },
            ].map((t, i) => (
              <div key={i} className="p-4 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[15px] font-bold" style={{ color: 'var(--text)' }}>{t.name}</span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded" style={{ color: t.color, background: t.color + '12' }}>{t.badge}</span>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-2 text-[12px]">
                  <div><p style={{ color: 'var(--text-m)' }}>Miles</p><p style={{ color: 'var(--text)' }}>{t.miles}</p></div>
                  <div><p style={{ color: 'var(--text-m)' }}>Availability</p><p style={{ color: 'var(--text)' }}>{t.seats}</p></div>
                  <div><p style={{ color: 'var(--text-m)' }}>Book when</p><p style={{ color: 'var(--text)' }}>{t.book}</p></div>
                </div>
                <p className="text-[12px]" style={{ color: 'var(--text-s)' }}><strong style={{ color: 'var(--text)' }}>Strategy:</strong> {t.tip}</p>
              </div>
            ))}
          </div>

          {/* Mid-article CTA */}
          <div className="p-5 rounded-xl my-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <div>
              <p className="text-[14px] font-semibold">Check how many KrisFlyer miles your Infinia points are worth</p>
              <p className="text-[12px] mt-1" style={{ color: 'rgba(250,248,245,0.5)' }}>Select HDFC Infinia → see KrisFlyer transfer value vs SmartBuy vs vouchers.</p>
            </div>
            <a href="/" className="shrink-0 px-5 py-2.5 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>Open Calculator →</a>
          </div>

          <H2>India route sweet spots: miles required and real ₹ value</H2>
          <p>All figures are post-November 2025 Saver rates, one-way. Cash prices are approximate based on May 2026 fares.</p>

          <div className="flex gap-1.5 mb-3">
            {['economy', 'business'].map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className="px-4 py-2 rounded-lg text-[13px] font-medium transition-all capitalize"
                style={{ background: activeTab === tab ? 'var(--dark)' : 'var(--bg-s)', color: activeTab === tab ? '#FAF8F5' : 'var(--text-s)', border: '1px solid var(--border)' }}>
                {tab} class
              </button>
            ))}
          </div>

          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-[13px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead><tr>
                <th className="text-left py-3 px-3 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Indian city → Singapore</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Saver miles</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Cash price</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>₹/mile</th>
              </tr></thead>
              <tbody>
                {routes[activeTab].map((r, i) => (
                  <tr key={i}>
                    <td className="py-2.5 px-3 font-medium" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{r.from} → SIN</td>
                    <td className="py-2.5 px-2 text-center font-mono" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>{r.miles}</td>
                    <td className="py-2.5 px-2 text-center font-mono" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>{r.cash}</td>
                    <td className="py-2.5 px-2 text-center font-mono font-bold" style={{ color: r.value.includes('✅') ? 'var(--green)' : 'var(--text-m)', borderBottom: '1px solid var(--border)' }}>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-[11px] mt-2" style={{ color: 'var(--text-m)' }}>
              {activeTab === 'business' ? '✅ All business class redemptions exceed ₹1.50/mile — the threshold where transfers beat SmartBuy (₹1.00/point).' : 'Economy redemptions give ₹1.03-1.43/mile — close to but not significantly above SmartBuy\'s ₹1.00/point. Only worth transferring if your Saver booking is at the high end of cash prices.'}
            </p>
          </div>

          <p>The key insight: <S>business class is where KrisFlyer miles earn their keep.</S> At 46,000 Saver miles for DEL-SIN business (vs ₹85,000+ cash), you're getting ₹1.85/mile — nearly double what SmartBuy delivers. Economy rarely justifies the transfer when SmartBuy gives a reliable ₹1.00/point without the complexity.</p>

          <H2>Beyond Singapore: using KrisFlyer miles from India</H2>
          <p>KrisFlyer miles aren't just for Singapore. Here are the most valuable India-originating redemptions using Singapore as a connection hub:</p>

          <div className="space-y-3 mt-2">
            {[
              { route: 'India → Singapore → Japan (Tokyo/Osaka)', miles: '60,000', cabin: 'Business Saver', why: 'SQ operates A380 and 787 to Japan. Business class to Tokyo is genuinely premium. Cash price ₹1.5-2L makes this a strong ₹2.5+/mile redemption.' },
              { route: 'India → Singapore → Australia', miles: '72,000', cabin: 'Business Saver', why: 'DEL/BOM-SYD/MEL business class via Singapore. Cash ₹2.5-3.5L. One of the better long-haul redemptions.' },
              { route: 'India → Singapore → New Zealand', miles: '72,000', cabin: 'Business Saver', why: 'Same zone as Australia. DEL-AKL via SIN. Excellent value at ₹3L+ cash equivalent.' },
              { route: 'India → Singapore (free stopover) → Europe', miles: '108,500', cabin: 'Business Saver', why: 'KrisFlyer allows a free stopover in Singapore on connecting itineraries. You get 2 nights in Singapore included. DEL-SIN-LHR business for 108,500 miles + ~₹5,000 taxes vs ₹2.5-3L cash.' },
            ].map((r, i) => (
              <div key={i} className="p-4 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <div className="flex items-start justify-between gap-3">
                  <p className="text-[14px] font-semibold" style={{ color: 'var(--text)' }}>{r.route}</p>
                  <div className="text-right shrink-0">
                    <p className="font-mono font-bold text-[13px]" style={{ color: 'var(--green)' }}>{r.miles}</p>
                    <p className="text-[10px]" style={{ color: 'var(--text-m)' }}>{r.cabin}</p>
                  </div>
                </div>
                <p className="text-[13px] mt-1.5" style={{ color: 'var(--text-s)' }}>{r.why}</p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl" style={{ background: '#EDF5F0', border: '1px solid #C8DDD0' }}>
            <p className="text-[13px] font-semibold mb-1" style={{ color: 'var(--green)' }}>The Singapore stopover rule</p>
            <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>On one-way or round-trip award bookings that connect through Singapore, KrisFlyer allows a free stopover of up to 30 days. So DEL → SIN → LHR on a single award booking gets you 2-3 nights in Singapore at no additional mile cost. Plan your itinerary accordingly — this is one of the best underused features in the programme.</p>
          </div>

          <H2>Step-by-step: how to transfer HDFC Infinia points to KrisFlyer</H2>
          <div className="space-y-3 mt-2">
            {[
              { n: '1', title: 'Join KrisFlyer for free', desc: 'Go to singaporeair.com → KrisFlyer → Join. It\'s free. Note your KrisFlyer membership number — you\'ll need it for the transfer.' },
              { n: '2', title: 'Log into HDFC NetBanking', desc: 'Cards → Credit Cards → Select your Infinia card → Reward Points → Redeem. Or go directly to offers.smartbuy.hdfc.bank.in.' },
              { n: '3', title: 'Select Airline Transfers', desc: 'In the redemption menu, choose "Airline Transfer Partners." Select Singapore Airlines KrisFlyer from the list.' },
              { n: '4', title: 'Enter your KrisFlyer number and points', desc: 'Input your membership number. Enter how many reward points to transfer (minimum usually 5,000). Confirm the 1:1 conversion — 10,000 points = 10,000 miles.' },
              { n: '5', title: 'Allow 3-5 business days', desc: 'KrisFlyer miles usually post within 3 business days. Check your KrisFlyer account at singaporeair.com to confirm. Don\'t panic if it takes 5 days.' },
              { n: '6', title: 'Search for Saver award seats', desc: 'Log into singaporeair.com → Book Flights → toggle "Redeem Flights." Select Saver. For best results, search 1-3 months ahead for Advantage, 6-11 months ahead for Saver. Mid-week departures have more Saver availability.' },
              { n: '7', title: 'Pay taxes with any card', desc: 'After selecting your award flight, you pay taxes in cash. DEL-SIN business taxes are typically ₹3,500-8,000 one-way. You can pay with any Indian credit or debit card — no restriction to the card you used for the transfer.' },
            ].map((s, i) => (
              <div key={i} className="flex gap-3">
                <span className="w-7 h-7 rounded-full grid place-items-center text-[12px] font-bold shrink-0" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>{s.n}</span>
                <div>
                  <p className="text-[14px] font-semibold" style={{ color: 'var(--text)' }}>{s.title}</p>
                  <p className="text-[13px] mt-0.5" style={{ color: 'var(--text-s)' }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <H2>How KrisFlyer miles expire — and how to extend them</H2>
          <p>KrisFlyer miles expire <S>3 years from the date they are credited</S> to your account. Each transfer from HDFC creates a new batch with its own 3-year clock — so if you transferred 20,000 miles in January 2026, those expire January 2029.</p>
          <p>The important thing: <S>you can extend the expiry by earning or spending KrisFlyer miles at least once every 3 years.</S> Activity keeps the entire account active. Small ways to keep miles alive:</p>
          <ul className="space-y-1 pl-1 mt-2" style={{ listStyleType: 'none' }}>
            <li className="flex gap-2"><span style={{ color: 'var(--gold)' }}>→</span><span>Transfer even 1,000 points from HDFC — this earns new miles and resets the activity clock</span></li>
            <li className="flex gap-2"><span style={{ color: 'var(--gold)' }}>→</span><span>Book a hotel via the KrisFlyer hotel partners (small earn, keeps account active)</span></li>
            <li className="flex gap-2"><span style={{ color: 'var(--gold)' }}>→</span><span>Use a KrisFlyer shopping partner (Agoda, Grab, etc.)</span></li>
            <li className="flex gap-2"><span style={{ color: 'var(--gold)' }}>→</span><span>Fly Singapore Airlines on a paid ticket and credit miles to KrisFlyer</span></li>
          </ul>
          <p className="mt-3">Use our free <a href="/tools/expiry-reminder" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>Points Expiry Reminder</a> to set an email alert 60 days before your KrisFlyer miles are at risk.</p>

          <H2>When NOT to transfer to KrisFlyer</H2>
          <div className="space-y-3">
            {[
              { title: 'For economy flights — usually', desc: 'Economy redemptions give ₹1.03-1.43/mile on India-Singapore routes. SmartBuy travel gives ₹1.00/point reliably without the complexity. Unless you\'re booking a longer haul or catching a good sale fare, economy transfers rarely make sense.' },
              { title: 'Without a specific booking in mind', desc: 'Transfers are irreversible. Never transfer speculatively. Transfer only when you\'ve searched and confirmed Saver seat availability on your actual travel dates. The award space you see today may not be there in a week.' },
              { title: 'If you\'re on Axis Magnus at 5:2', desc: '10,000 EDGE points converts to only 4,000 KrisFlyer miles. At 46,000 miles for DEL-SIN business, you need 115,000 EDGE points for one seat. That\'s a lot of points for a single redemption. Travel EDGE portal at ₹0.50/point often makes more sense.' },
              { title: 'For Star Alliance partner flights with fuel surcharges', desc: 'KrisFlyer miles on Lufthansa, Swiss, or other Star Alliance partners often carry substantial fuel surcharges (YQ charges). What looks like a ₹2.50/mile redemption becomes ₹1.20/mile after you pay ₹50,000 in surcharges. Always check total cash outlay, not just miles.' },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
                <p className="text-[13px] font-bold mb-1" style={{ color: 'var(--red)' }}>✕ {item.title}</p>
                <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <H2>KrisFlyer vs SmartBuy: the decision framework</H2>
          <div className="p-5 rounded-xl" style={{ background: 'var(--bg-s)', border: '1px solid var(--border)' }}>
            <div className="space-y-3 text-[13px]">
              {[
                { condition: 'Business/First class international', action: 'Transfer to KrisFlyer', color: 'var(--green)' },
                { condition: 'Economy international (₹1.50+/mile value)', action: 'Transfer to KrisFlyer', color: 'var(--green)' },
                { condition: 'Economy international (below ₹1.50/mile)', action: 'Use SmartBuy portal', color: 'var(--gold)' },
                { condition: 'Domestic India flights', action: 'Use SmartBuy portal', color: 'var(--gold)' },
                { condition: 'Hotel stays', action: 'Use SmartBuy vouchers (5X earn)', color: 'var(--gold)' },
                { condition: 'No travel planned in 6 months', action: 'Do NOT transfer — wait', color: 'var(--red)' },
              ].map((r, i) => (
                <div key={i} className="flex items-center justify-between gap-4 py-2" style={{ borderBottom: i < 5 ? '1px solid var(--border)' : 'none' }}>
                  <span style={{ color: 'var(--text-s)' }}>{r.condition}</span>
                  <span className="text-[12px] font-semibold shrink-0" style={{ color: r.color }}>{r.action}</span>
                </div>
              ))}
            </div>
          </div>

          <H2>The bottom line</H2>
          <p>KrisFlyer remains the best airline transfer programme for Indian premium cardholders in 2026. Despite the November 2025 devaluation, the 1:1 transfer from HDFC Infinia to business class on India-Singapore routes still delivers ₹1.74-2.17/mile — nearly double what SmartBuy offers.</p>
          <p>The strategy is straightforward: use Infinia or Diners Club Black as your primary earn card, transfer to KrisFlyer only when you have a specific business class booking in mind, search for Saver availability 6-11 months ahead, and take advantage of the free Singapore stopover rule when routing to destinations beyond.</p>
          <p>To see exactly how many KrisFlyer miles your current HDFC balance would give you, use the <a href="/" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>PointsMax calculator</a> — select HDFC Infinia and check the KrisFlyer transfer value against your other redemption options. You can also see all current transfer partner ratios at the <a href="/transfers" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>Transfer Partners directory</a>.</p>

          <div className="p-6 rounded-2xl text-center mt-8" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <p className="text-[16px] font-semibold">See your Infinia points as KrisFlyer miles</p>
            <p className="text-[13px] mt-1 mb-4" style={{ color: 'rgba(250,248,245,0.5)' }}>Compare KrisFlyer transfer value vs SmartBuy, vouchers, and catalogue — all in rupees.</p>
            <a href="/" className="inline-block px-6 py-2.5 rounded-xl text-[14px] font-semibold" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>Open PointsMax Calculator →</a>
          </div>

          <p className="text-[11px] mt-8 leading-relaxed" style={{ color: 'var(--text-m)' }}>
            <strong>Disclaimer:</strong> Award chart rates are based on Singapore Airlines KrisFlyer post-November 2025 Saver pricing. Cash fare estimates are approximate based on May 2026 searches. Award availability, mile requirements, and partner terms change without notice. Always verify current rates on singaporeair.com before transferring miles. Transfers are irreversible. PointsMax is not affiliated with Singapore Airlines. Not financial advice.
          </p>

          <FeedbackWidget pageSlug="singapore-airlines-krisflyer-india-guide-2026" pageTitle="Singapore Airlines KrisFlyer India Guide 2026" />
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
        <div className="fixed bottom-0 left-0 right-0 z-50" style={{ background: 'var(--dark)', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '10px 16px' }}>
          <div className="max-w-2xl mx-auto flex items-center justify-between gap-3">
            <p className="text-[13px] hidden sm:block" style={{ color: 'rgba(250,248,245,0.6)' }}>Check KrisFlyer value vs <strong style={{ color: '#FAF8F5' }}>SmartBuy</strong></p>
            <p className="text-[13px] sm:hidden" style={{ color: 'rgba(250,248,245,0.6)' }}>Check KrisFlyer miles value</p>
            <a href="/" className="shrink-0 px-4 py-2 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>Open Calculator →</a>
          </div>
        </div>
      )}
    </div>
  )
}
