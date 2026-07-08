'use client'

import { useState, useEffect } from 'react'
import FeedbackWidget from '@/components/FeedbackWidget'
import PageNav from '@/components/PageNav'

const faqJsonLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many KrisFlyer miles to fly business class from India to Singapore?',
      acceptedAnswer: { '@type': 'Answer', text: 'After the November 2025 award chart changes, Delhi or Mumbai to Singapore in business class (Saver) costs 46,000 KrisFlyer miles one-way. Round trip is 92,000 miles. Cash equivalent on this route is approximately ₹85,000-1,00,000 one-way, giving an effective value of ₹1.85-2.17 per KrisFlyer mile — significantly better than other redemption methods.' }
    },
    {
      '@type': 'Question',
      name: 'What is the best KrisFlyer sweet spot from India in 2026?',
      acceptedAnswer: { '@type': 'Answer', text: 'The best KrisFlyer sweet spots from India in 2026 are: (1) DEL/BOM to Singapore business class at 46,000 miles — strong ₹1.85-2.17/mile value. (2) India to Tokyo/Osaka business class at 60,000 miles via Singapore — cash value ₹1.5-2L+ gives excellent ₹2.5+/mile. (3) India to Sydney/Melbourne business class at 72,000 miles — ₹2.5-3.5L cash equivalent. (4) India to Europe via Istanbul (connect to cheap Euro flights) — Istanbul business at 80,000 miles is cheaper than direct Europe at 108,500.' }
    },
    {
      '@type': 'Question',
      name: 'Can you use KrisFlyer miles to fly Air India from India?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — Air India is a Star Alliance member and KrisFlyer miles can be used to book Air India award flights. However, Air India award availability on KrisFlyer is often limited, especially on competitive domestic and international routes. The miles required for Air India via KrisFlyer are generally similar to KrisFlyer\'s Star Alliance partner redemption chart. Check availability at singaporeair.com with the Redeem Flights option.' }
    },
  ],
}

const ROUTES = [
  {
    tier: '🥇 Best value',
    color: 'var(--green)',
    bg: '#EDF5F0',
    border: '#C8DDD0',
    routes: [
      { from: 'DEL/BOM → SIN', cabin: 'Business', miles: '46,000', cash: '₹85,000-1,00,000', value: '₹1.85-2.17/mile', note: 'A380 operated. Book 6-11 months ahead for Saver.' },
      { from: 'BLR/MAA → SIN', cabin: 'Business', miles: '46,000', cash: '₹90,000-1,10,000', value: '₹1.96-2.39/mile', note: 'Slightly higher cash fares = better mile value.' },
      { from: 'DEL/BOM → TYO/OSA', cabin: 'Business', miles: '60,000', cash: '₹1,50,000-2,00,000', value: '₹2.50-3.33/mile', note: 'Via SIN. SQ operates 787 to Japan. Premium value.' },
      { from: 'DEL/BOM → SYD/MEL', cabin: 'Business', miles: '72,000', cash: '₹2,50,000-3,50,000', value: '₹3.47-4.86/mile', note: 'Via SIN. Best absolute ₹/mile on the whole network.' },
      { from: 'DEL/BOM → AKL (NZ)', cabin: 'Business', miles: '72,000', cash: '₹3,00,000-4,00,000', value: '₹4.17-5.56/mile', note: 'Highest ₹/mile from India. Rare but exceptional.' },
    ],
  },
  {
    tier: '🥈 Good value',
    color: 'var(--gold)',
    bg: '#FBF8F0',
    border: '#E8DFC5',
    routes: [
      { from: 'DEL/BOM → SIN', cabin: 'Suites (First)', miles: '92,500', cash: '₹3,00,000+', value: '₹3.24+/mile', note: 'Extremely rare Saver availability. Must book 11 months out.' },
      { from: 'DEL/BOM → IST (Istanbul)', cabin: 'Business', miles: '80,000', cash: '₹1,80,000-2,50,000', value: '₹2.25-3.13/mile', note: 'Via SIN. Istanbul is the Europe gateway hack — see below.' },
      { from: 'DEL/BOM → HND/NRT', cabin: 'Economy', miles: '35,000', cash: '₹55,000-75,000', value: '₹1.57-2.14/mile', note: 'Economy makes sense only on expensive Japan routes.' },
      { from: 'DEL/BOM → SIN → AUS', cabin: 'Economy', miles: '35,000', cash: '₹55,000-70,000', value: '₹1.57-2.00/mile', note: 'Long-haul economy acceptable. Business preferred.' },
    ],
  },
  {
    tier: '⚠️ Poor value — use SmartBuy instead',
    color: 'var(--red)',
    bg: '#FDF1EF',
    border: '#E8C5BF',
    routes: [
      { from: 'DEL/BOM → SIN', cabin: 'Economy', miles: '17,500', cash: '₹18,000-22,000', value: '₹1.03-1.26/mile', note: 'SmartBuy at ₹1/point beats this. Don\'t transfer for SIN economy.' },
      { from: 'Any India → BKK/KUL/CGK', cabin: 'Business', miles: '33,000', cash: '₹35,000-50,000', value: '₹1.06-1.52/mile', note: 'Short-haul SE Asia business is never worth the miles.' },
      { from: 'DEL/BOM → LHR/CDG/FRA', cabin: 'Business', miles: '108,500', cash: '₹2,00,000-2,50,000', value: '₹1.84-2.30/mile', note: 'Use Istanbul hack instead — saves 28,500 miles for similar value.' },
      { from: 'Any → Any', cabin: 'Access award', miles: 'Dynamic (40-100% more)', cash: '—', value: 'Avoid', note: 'Dynamic pricing. Only if Saver/Advantage unavailable and dates fixed.' },
    ],
  },
]

export default function BlogPost() {
  const [showBar, setShowBar] = useState(false)
  const [activeTab, setActiveTab] = useState('best')

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Best KrisFlyer Routes from India 2026', datePublished: '2026-06-04', dateModified: '2026-06-04', author: { '@type': 'Organization', name: 'PointsMax' }, publisher: { '@type': 'Organization', name: 'PointsMax', url: 'https://www.pointsmax.in' } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageNav />

      <article className="max-w-2xl mx-auto px-5 py-12">
        <div className="flex items-center gap-2 mb-8 text-[13px]" style={{ color: 'var(--text-m)' }}>
          <a href="/">PointsMax</a><span>/</span>
          <a href="/blog">Learn</a><span>/</span>
          <span style={{ color: 'var(--text-s)' }}>Best KrisFlyer Routes India</span>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded" style={{ color: '#0891b2', background: 'rgba(8,145,178,0.08)' }}>Loyalty Strategy</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>June 4, 2026</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>11 min read</span>
        </div>

        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(24px, 4vw, 36px)', lineHeight: 1.15, letterSpacing: '-0.025em', color: 'var(--text)' }}>
          Best KrisFlyer Routes from India 2026: Sweet Spots, Miles Required & Real ₹ Value
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
          After the November 2025 award chart devaluation, some routes got significantly more expensive and a few new sweet spots emerged. This guide covers the best — and worst — KrisFlyer redemptions starting from Indian cities, with real mile counts and rupee values for each.
        </p>

        {/* Quick stats */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { n: '46K', label: 'DEL→SIN Business' },
            { n: '60K', label: 'India→Tokyo Business' },
            { n: '72K', label: 'India→Sydney Business' },
            { n: '80K', label: 'Istanbul (Europe hack)' },
          ].map((s, i) => (
            <div key={i} className="p-3 rounded-xl text-center" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
              <p className="text-[20px] font-mono font-bold" style={{ color: 'var(--text)' }}>{s.n}</p>
              <p className="text-[11px] mt-0.5" style={{ color: 'var(--text-m)' }}>{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 space-y-6 text-[15px] leading-[1.85]" style={{ color: 'var(--text-s)' }}>

          <p>KrisFlyer is the best airline programme for Indian cardholders — and we covered the basics in our <a href="/blog/singapore-airlines-krisflyer-india-guide-2026" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>complete KrisFlyer India guide</a>. This guide goes one level deeper: specifically which routes deliver the best value when you're originating from Delhi, Mumbai, Bangalore, or Chennai.</p>
          <p>The core principle: <S>KrisFlyer miles are only worth transferring for long-haul business class.</S> For economy and short-haul flights, HDFC SmartBuy at ₹1/point almost always beats the transfer path. The ₹/mile calculations below assume post-November 2025 Saver rates.</p>

          <H2>Complete route ranking — every major destination</H2>

          <div className="space-y-6">
            {ROUTES.map((tier, ti) => (
              <div key={ti}>
                <p className="text-[13px] font-bold mb-3" style={{ color: tier.color }}>{tier.tier}</p>
                <div className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${tier.border}` }}>
                  <table className="w-full text-[12px]" style={{ borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ background: tier.bg }}>
                        <th className="text-left py-2.5 px-3 font-semibold" style={{ color: 'var(--text-s)' }}>Route</th>
                        <th className="text-center py-2.5 px-2 font-semibold" style={{ color: 'var(--text-s)' }}>Cabin</th>
                        <th className="text-center py-2.5 px-2 font-semibold" style={{ color: 'var(--text-s)' }}>Saver miles</th>
                        <th className="text-center py-2.5 px-2 font-semibold" style={{ color: tier.color }}>₹/mile</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tier.routes.map((r, i) => (
                        <tr key={i} style={{ borderTop: '1px solid var(--border)', background: 'var(--card)' }}>
                          <td className="py-2.5 px-3 font-medium" style={{ color: 'var(--text)' }}>{r.from}</td>
                          <td className="py-2.5 px-2 text-center" style={{ color: 'var(--text-s)' }}>{r.cabin}</td>
                          <td className="py-2.5 px-2 text-center font-mono" style={{ color: 'var(--text-s)' }}>{r.miles}</td>
                          <td className="py-2.5 px-2 text-center font-mono font-bold" style={{ color: tier.color }}>{r.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="px-3 pb-3 pt-2 space-y-1.5" style={{ background: 'var(--card)' }}>
                    {tier.routes.map((r, i) => r.note && (
                      <p key={i} className="text-[11px]" style={{ color: 'var(--text-m)' }}>
                        <span className="font-medium" style={{ color: 'var(--text-s)' }}>{r.from}:</span> {r.note}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mid CTA */}
          <div className="p-5 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <div>
              <p className="text-[14px] font-semibold">How many KrisFlyer miles will your Infinia points give you?</p>
              <p className="text-[12px] mt-1" style={{ color: 'rgba(250,248,245,0.5)' }}>Check the 1:1 transfer value vs SmartBuy for your actual balance.</p>
            </div>
            <a href="/" className="shrink-0 px-5 py-2.5 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>Open Calculator →</a>
          </div>

          <H2>The 3 sweet spots every Indian cardholder should know</H2>

          <div className="space-y-4">
            {[
              {
                num: '1',
                title: 'India → Singapore Business Class: The Reliable Foundation',
                miles: '46,000 miles (Saver)',
                value: '₹1.85-2.17/mile',
                detail: 'This is the workhorse redemption for Indian KrisFlyer holders. At 46,000 Saver miles for business class (post-Nov 2025 chart), and cash fares hovering at ₹85,000-1,00,000 one-way, the effective value of ₹1.85-2.17/mile is nearly double SmartBuy. The A380 operates on DEL-SIN and BOM-SIN routes — which means access to the proper Business Class Suites product, not just a retrofitted narrow-body seat.',
                strategy: 'Book 6-11 months ahead. Mid-week departures (Tue/Wed) have better Saver availability. Don\'t book on weekends or Indian public holidays — Saver seats are gone instantly.',
              },
              {
                num: '2',
                title: 'India → Australia/New Zealand: The Highest ₹/Mile Redemption',
                miles: '72,000 miles (Saver)',
                value: '₹3.47-5.56/mile',
                detail: 'This is where KrisFlyer miles punch hardest from India. DEL/BOM to Sydney, Melbourne, or Auckland via Singapore in business class at 72,000 Saver miles, against cash prices of ₹2.5-4L one-way, gives the highest absolute ₹/mile value on the entire network from India. 72,000 Infinia points → 72,000 KrisFlyer miles → ₹2.5-4L business class seat.',
                strategy: 'The free Singapore stopover rule applies here — build in 2-3 nights in Singapore on the way to Australia at no extra miles cost. Effectively two destinations for 72,000 miles.',
              },
              {
                num: '3',
                title: 'The Istanbul Hack: Europe Business Class for Less',
                miles: '80,000 miles (Saver)',
                value: '₹2.25-3.13/mile',
                detail: 'Direct to most European cities (LHR, CDG, FRA) in business class via Singapore costs 108,500 KrisFlyer miles one-way. But Istanbul costs only 80,000 miles. From Istanbul, budget carrier tickets to any European city cost ₹5,000-15,000. You\'re effectively flying India → Singapore (free stopover) → Istanbul business class → budget to Europe for 80,000 miles + ₹10,000 — vs 108,500 miles for a direct India-London booking.',
                strategy: 'The caveat: Istanbul Saver space is popular. Book exactly 355 days in advance (the booking window opening) when the most Saver seats are available. The hack is widely known in the points community — seats go fast.',
              },
            ].map((s, i) => (
              <div key={i} className="p-5 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <div className="flex items-start gap-3 mb-3">
                  <span className="w-7 h-7 rounded-full grid place-items-center text-[12px] font-bold shrink-0" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>{s.num}</span>
                  <div>
                    <p className="text-[15px] font-semibold" style={{ color: 'var(--text)' }}>{s.title}</p>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-[12px] font-mono" style={{ color: 'var(--text-m)' }}>{s.miles}</span>
                      <span className="text-[12px] font-mono font-bold" style={{ color: 'var(--green)' }}>{s.value}</span>
                    </div>
                  </div>
                </div>
                <p className="text-[13px] leading-relaxed mb-3" style={{ color: 'var(--text-s)' }}>{s.detail}</p>
                <div className="p-3 rounded-lg" style={{ background: 'rgba(184,149,62,0.06)', border: '1px solid rgba(184,149,62,0.15)' }}>
                  <p className="text-[12px]" style={{ color: 'var(--text-s)' }}><strong style={{ color: 'var(--gold)' }}>Strategy: </strong>{s.strategy}</p>
                </div>
              </div>
            ))}
          </div>

          <H2>Routes to avoid on KrisFlyer</H2>
          <p>Three categories where you should <S>not transfer KrisFlyer miles</S> from India:</p>
          <div className="space-y-3">
            {[
              { title: 'Economy to Singapore', why: 'At 17,500 miles for DEL-SIN economy, the ₹/mile is only ₹1.03-1.26 — barely above SmartBuy\'s ₹1/point. Add the irreversibility of a transfer and the Saver availability constraints, and it\'s never worth transferring for SIN economy. Just book on SmartBuy.' },
              { title: 'Short-haul Southeast Asia business', why: 'Bangkok, Kuala Lumpur, Jakarta in business class uses 33,000 miles for what is essentially a 3-hour flight with marginally better seats. Cash prices are ₹35,000-50,000. The ₹/mile barely exceeds SmartBuy and the opportunity cost is enormous — those same miles could put you in SIN or TYO business class.' },
              { title: 'Access awards in any category', why: 'Access awards are dynamically priced with no cap. We\'ve seen Access awards cost 180,000+ miles for routes that have Saver prices of 46,000 miles. Only book Access as an absolute last resort when Saver and Advantage are both sold out and your travel dates are completely fixed.' },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
                <p className="text-[13px] font-bold mb-1" style={{ color: 'var(--red)' }}>✕ {item.title}</p>
                <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>{item.why}</p>
              </div>
            ))}
          </div>

          <H2>How to search Saver availability from India</H2>
          <div className="space-y-3">
            {[
              { n: '1', t: 'Log into singaporeair.com', d: 'Use the main booking engine → switch to "Redeem Flights" → select "Saver" award type.' },
              { n: '2', t: 'Search one-way (not round trip)', d: 'KrisFlyer\'s search engine shows more availability options when searching one-way at a time. Build your itinerary leg by leg.' },
              { n: '3', t: 'Check the calendar view', d: 'The date grid shows green (Saver available) vs grey (only Advantage/Access). Scan ±7 days around your preferred date for green cells.' },
              { n: '4', t: 'Book 6-11 months ahead for best routes', d: 'SIN, TYO, SYD routes open at 355 days and Saver seats are taken fast. Set a calendar reminder 11 months before your target travel date.' },
              { n: '5', t: 'Transfer miles only after confirming availability', d: 'Find your specific flight with Saver availability first. Then initiate the HDFC transfer. Miles take 3-5 business days to post — hold the seat using a credit card payment of just taxes (₹3,000-8,000) if the booking engine allows a hold.' },
            ].map((s, i) => (
              <div key={i} className="flex gap-3">
                <span className="w-7 h-7 rounded-full grid place-items-center text-[12px] font-bold shrink-0 mt-0.5" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>{s.n}</span>
                <div>
                  <p className="text-[14px] font-semibold" style={{ color: 'var(--text)' }}>{s.t}</p>
                  <p className="text-[13px] mt-0.5" style={{ color: 'var(--text-s)' }}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>

          <H2>How to earn enough miles for these routes</H2>
          <p>The quickest path to the miles needed for each sweet spot, using Indian credit cards:</p>
          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-[13px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead>
                <tr>
                  <th className="text-left py-3 px-3 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Destination</th>
                  <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Miles needed</th>
                  <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Infinia spend needed</th>
                  <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>At ₹10L/year spend</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Singapore (1 person, J)', '46,000', '₹13.8L', '~19 months'],
                  ['Singapore (2 people, J)', '92,000', '₹27.6L', '~38 months'],
                  ['Tokyo (1 person, J)', '60,000', '₹18L', '~25 months'],
                  ['Sydney (1 person, J)', '72,000', '₹21.6L', '~30 months'],
                  ['Istanbul/Europe (1 person, J)', '80,000', '₹24L', '~34 months'],
                ].map(([dest, miles, spend, time], i) => (
                  <tr key={i}>
                    <td className="py-2.5 px-3 font-medium" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{dest}</td>
                    <td className="py-2.5 px-2 text-center font-mono" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>{miles}</td>
                    <td className="py-2.5 px-2 text-center font-mono" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>{spend}</td>
                    <td className="py-2.5 px-2 text-center font-mono" style={{ color: 'var(--gold)', fontWeight: 600, borderBottom: '1px solid var(--border)' }}>{time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-[11px] mt-2" style={{ color: 'var(--text-m)' }}>Assumes HDFC Infinia at 1:1 KrisFlyer transfer, ₹10L/year on-card spend earning 33,333 pts/year. J = Business Class Saver award.</p>
          </div>

          <p className="mt-2">The lesson: <S>KrisFlyer miles are a 2-3 year accumulation game</S> for most Indian cardholders. Set a target, accumulate consistently on Infinia, and redeem once — don't drain your balance on smaller redemptions.</p>

          <H2>The bottom line</H2>
          <p>The three routes worth targeting from India in 2026 are Singapore business (reliable, attainable), Australia/New Zealand business (best ₹/mile on the network), and the Istanbul gateway for Europe (saves 28,500 miles vs direct London). Everything else — short-haul SE Asia, economy within Asia, Access awards — should be booked on SmartBuy instead of via KrisFlyer transfer.</p>
          <p>To see how many miles your HDFC Infinia or Diners Club Black balance would give you, check the <a href="/" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>PointsMax calculator</a>. For the full KrisFlyer guide including how to transfer and booking step-by-step, read our <a href="/blog/singapore-airlines-krisflyer-india-guide-2026" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>complete KrisFlyer India guide</a>. And see all current transfer partner ratios at the <a href="/transfers" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>Transfer Partners directory</a>.</p>

          <div className="p-6 rounded-2xl text-center mt-8" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <p className="text-[16px] font-semibold">Check your Infinia → KrisFlyer conversion</p>
            <p className="text-[13px] mt-1 mb-4" style={{ color: 'rgba(250,248,245,0.5)' }}>See exactly how many miles your balance gives you — and what routes you can reach.</p>
            <a href="/" className="inline-block px-6 py-2.5 rounded-xl text-[14px] font-semibold" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>Open PointsMax Calculator →</a>
          </div>

          <p className="text-[11px] mt-8 leading-relaxed" style={{ color: 'var(--text-m)' }}>
            <strong>Disclaimer:</strong> Mile requirements are post-November 2025 KrisFlyer Saver rates. Cash fare estimates are approximate based on June 2026 market prices and vary significantly by season and booking timing. Saver award availability is not guaranteed. Always confirm availability at singaporeair.com before transferring miles — transfers are irreversible. PointsMax is not affiliated with Singapore Airlines. Not financial advice.
          </p>

          <FeedbackWidget pageSlug="best-krisflyer-routes-india-2026" pageTitle="Best KrisFlyer Routes from India 2026" />
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
            <p className="text-[13px]" style={{ color: 'rgba(250,248,245,0.6)' }}>Check your <strong style={{ color: '#FAF8F5' }}>KrisFlyer miles</strong> value</p>
            <a href="/" className="shrink-0 px-4 py-2 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>Open Calculator →</a>
          </div>
        </div>
      )}
    </div>
  )
}
