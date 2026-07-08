'use client'

import { useState, useEffect } from 'react'
import FeedbackWidget from '@/components/FeedbackWidget'
import PageNav from '@/components/PageNav'

const howToJsonLd = {
  '@context': 'https://schema.org', '@type': 'HowTo',
  name: 'How to Use Marriott Bonvoy Points from India for Maximum Value',
  description: 'A step-by-step strategy to earn and redeem Marriott Bonvoy points from India in 2026 for the highest value.',
  totalTime: 'PT20M',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Earn points through the right channel', text: 'Earn Marriott Bonvoy points via the HDFC Marriott Bonvoy credit card (8 points per ₹150 at Marriott properties, 4 points on travel and dining), the HSBC Taj card, paid stays, or by transferring American Express Membership Rewards points.' },
    { '@type': 'HowToStep', position: 2, name: 'Understand what your points are worth', text: 'Marriott Bonvoy points are worth roughly ₹0.55 to ₹0.95 each (about 0.7-0.8 US cents), depending on the property and dates. Luxury and off-peak redemptions deliver the highest value per point.' },
    { '@type': 'HowToStep', position: 3, name: 'Target high-value redemptions', text: 'Redeem for luxury properties or off-peak award nights where the cents-per-point value is highest. Use the free fifth-night-on-points benefit to cut the effective cost of a 5-night stay by 20%.' },
    { '@type': 'HowToStep', position: 4, name: 'Use free night awards strategically', text: 'The HDFC Marriott card gives a free night award up to 15,000 points on signup and renewal. Apply it to a property that costs close to 15,000 points to extract maximum value.' },
    { '@type': 'HowToStep', position: 5, name: 'Keep points active', text: 'Marriott Bonvoy points expire after 24 months of inactivity. Any earning activity, including a single card transaction, resets the clock. Avoid transferring points to airlines unless you have a specific high-value redemption.' },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How can I earn Marriott Bonvoy points in India?', acceptedAnswer: { '@type': 'Answer', text: 'In India, you can earn Marriott Bonvoy points through the HDFC Bank Marriott Bonvoy credit card, which earns 8 points per ₹150 at participating Marriott hotels and 4 points per ₹150 on travel, dining, and entertainment. The HSBC Taj credit card also earns points within the Taj-Marriott ecosystem. American Express cardholders can transfer Membership Rewards points to Marriott Bonvoy at roughly 2-2.5% reward rate. You also earn points directly on paid stays at Marriott properties as a Bonvoy member.' }},
    { '@type': 'Question', name: 'How much is a Marriott Bonvoy point worth in India?', acceptedAnswer: { '@type': 'Answer', text: 'A Marriott Bonvoy point is worth approximately ₹0.55 to ₹0.95 in India, equivalent to about 0.7-0.8 US cents, depending on the property and dates. Value is highest at luxury properties and during off-peak award pricing, where points can exceed ₹1 each. Budget and select-service hotels typically deliver lower per-point value. The free fifth-night-on-points benefit effectively boosts value by 20% on five-night stays.' }},
    { '@type': 'Question', name: 'Do Marriott Bonvoy points expire?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, Marriott Bonvoy points expire after 24 consecutive months of account inactivity. Any qualifying activity resets the 24-month clock, including earning points from a paid stay or a single transaction on a Marriott co-branded credit card. To keep points alive indefinitely, ensure at least one earning activity every 24 months.' }},
    { '@type': 'Question', name: 'Is the HDFC Marriott Bonvoy credit card worth it in India?', acceptedAnswer: { '@type': 'Answer', text: 'The HDFC Marriott Bonvoy credit card is worth it for people who stay at Marriott properties at least once or twice a year. It provides a free night award (up to 15,000 points) on signup and each renewal, complimentary Marriott Bonvoy Silver Elite status, 10 Elite Night Credits per year toward higher status, and 8 points per ₹150 at Marriott hotels. The free night award alone, valued at up to roughly ₹13,000-14,000, can offset the annual fee for most Marriott guests.' }},
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Marriott Bonvoy India Strategy Guide 2026', datePublished: '2026-06-24', dateModified: '2026-06-24', author: { '@type': 'Organization', name: 'PointsMax', url: 'https://www.pointsmax.in' }, publisher: { '@type': 'Organization', name: 'PointsMax', url: 'https://www.pointsmax.in' } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageNav />

      <article className="max-w-2xl mx-auto px-5 py-12">
        <div className="flex items-center gap-2 mb-8 text-[13px]" style={{ color: 'var(--text-m)' }}>
          <a href="/">PointsMax</a><span>/</span>
          <a href="/blog">Learn</a><span>/</span>
          <span style={{ color: 'var(--text-s)' }}>Marriott Bonvoy India</span>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded" style={{ color: '#0891b2', background: 'rgba(8,145,178,0.08)' }}>Loyalty Hub</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>June 24, 2026</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>12 min read</span>
        </div>

        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(24px, 4vw, 36px)', lineHeight: 1.15, letterSpacing: '-0.025em', color: 'var(--text)' }}>
          Marriott Bonvoy India Strategy Guide 2026: Earn, Transfer & Redeem for Maximum Value
        </h1>

        {/* DIRECT ANSWER BLOCK */}
        <div className="mt-8 p-5 rounded-2xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
          <p className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--text-m)' }}>Quick answer</p>
          <p className="text-[15px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
            <S>Marriott Bonvoy is the world's largest hotel loyalty program, and in India you earn its points mainly through the HDFC Marriott Bonvoy credit card, the HSBC Taj card, paid stays, or by transferring American Express points.</S> Each point is worth roughly ₹0.55-0.95. The best value comes from luxury or off-peak award nights and the free fifth-night-on-points benefit (a built-in 20% discount on 5-night stays). Points expire after 24 months of inactivity, reset by any earning activity. For most Indian travellers, the strategy is: earn via the HDFC card, hold points for hotel redemptions, and avoid transferring to airlines.
          </p>
        </div>

        <p className="mt-6 text-[16px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
          Marriott Bonvoy spans over 9,100 properties across 142 countries and 35+ brands — from select-service Fairfield to the Ritz-Carlton. For Indian travellers, it's the most accessible global hotel program, with two co-branded cards and Amex transfer access. This guide covers exactly how to earn, what your points are worth, and how to redeem them for maximum value in 2026.
        </p>

        <div className="mt-10 space-y-6 text-[15px] leading-[1.85]" style={{ color: 'var(--text-s)' }}>

          <H2 id="how-to-earn">How to earn Marriott Bonvoy points in India</H2>
          <p>There are four practical ways for Indian residents to accumulate Bonvoy points. The co-branded cards are the backbone for most people:</p>

          <div className="space-y-3">
            {[
              { name: 'HDFC Marriott Bonvoy Credit Card', detail: 'India\'s first hotel co-branded card. Earns 8 Marriott Bonvoy points per ₹150 at participating Marriott hotels, and 4 points per ₹150 on travel, dining, and entertainment. Includes a free night award (up to 15,000 points) on signup and renewal, automatic Silver Elite status, and 10 Elite Night Credits per year.', tag: 'Primary card', color: 'var(--green)' },
              { name: 'HSBC Taj Credit Card', detail: 'Operates within the Taj–Marriott ecosystem (IHCL\'s partnership with Marriott). Earns rewards usable in the Taj loyalty program with Marriott crossover benefits. Strong for those who favour Taj properties in India.', tag: 'Alternative card', color: 'var(--gold, #B8953E)' },
              { name: 'American Express transfer', detail: 'Amex Membership Rewards points transfer to Marriott Bonvoy. The Amex Platinum gives an effective ~2.5% reward rate on the transfer; other Amex cards roughly 2%. Useful for topping up a balance before a redemption.', tag: 'Transfer route', color: '#2563eb' },
              { name: 'Paid stays as a Bonvoy member', detail: 'Earn points directly on every paid stay at Marriott properties. Base earning is 10 points per USD for most brands (5 for select-service), boosted by your elite tier. Always add your Bonvoy number to bookings.', tag: 'Direct earning', color: 'var(--text-m)' },
            ].map((m, i) => (
              <div key={i} className="p-4 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <div className="flex items-center justify-between mb-1 flex-wrap gap-2">
                  <p className="text-[14px] font-bold" style={{ color: 'var(--text)' }}>{m.name}</p>
                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded" style={{ color: m.color, background: m.color + '15' }}>{m.tag}</span>
                </div>
                <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>{m.detail}</p>
              </div>
            ))}
          </div>

          <H2 id="card-worth-it">Is the HDFC Marriott Bonvoy card worth it?</H2>
          <p>For anyone who stays at Marriott properties even once or twice a year, the answer is usually yes — and the math is simple:</p>
          <div className="p-5 rounded-2xl" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <p className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: 'rgba(250,248,245,0.4)' }}>The free night award math</p>
            <div className="space-y-2 text-[13px]">
              {[
                ['Free night award value', 'Up to 15,000 points (~₹13,000-14,000)'],
                ['Received on', 'Signup + every renewal'],
                ['Silver Elite status', 'Automatic on activation'],
                ['Elite Night Credits', '10 per year toward higher status'],
                ['Earn at Marriott', '8 points per ₹150 (~5.3 pts/₹100)'],
              ].map(([label, val], i) => (
                <div key={i} className="flex justify-between py-1.5" style={{ borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                  <span style={{ color: 'rgba(250,248,245,0.5)' }}>{label}</span>
                  <span className="font-mono font-semibold text-right" style={{ color: 'rgba(250,248,245,0.85)' }}>{val}</span>
                </div>
              ))}
            </div>
            <p className="text-[12px] mt-3" style={{ color: 'rgba(250,248,245,0.55)' }}>The free night award alone — if redeemed at a property near the 15,000-point ceiling — typically offsets the annual fee. Everything else is upside.</p>
          </div>
          <p>The key to maximising the free night award: <S>use it at a property that costs close to (but not over) 15,000 points.</S> Using it at a 6,000-point budget hotel wastes more than half its value. Save it for a property priced at 13,000-15,000 points.</p>

          {/* Mid CTA */}
          <div className="p-5 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <div>
              <p className="text-[14px] font-semibold">Compare Marriott earning to your other cards</p>
              <p className="text-[12px] mt-1" style={{ color: 'rgba(250,248,245,0.5)' }}>See whether hotel points or flexible points win for your spend.</p>
            </div>
            <a href="/" className="shrink-0 px-5 py-2.5 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Open Calculator →</a>
          </div>

          <H2 id="points-value">What are Marriott Bonvoy points worth?</H2>
          <p><S>Marriott Bonvoy points are worth roughly ₹0.55 to ₹0.95 each</S> (about 0.7-0.8 US cents by international valuations). But unlike a fixed-value currency, the actual value swings widely based on where and when you redeem:</p>

          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-[13px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead><tr>
                <th className="text-left py-3 px-3 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Redemption type</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Typical value/point</th>
                <th className="text-left py-3 px-2 font-semibold" style={{ color: 'var(--text-m)', borderBottom: '1px solid var(--border)' }}>Verdict</th>
              </tr></thead>
              <tbody>
                {[
                  ['Luxury property (Ritz-Carlton, St. Regis)', '₹0.85 - 1.20+', 'Best value', 'var(--green)'],
                  ['Off-peak award nights (PointSavers)', '₹0.80 - 1.10', 'Excellent', 'var(--green)'],
                  ['Standard hotel stays', '₹0.55 - 0.80', 'Solid', 'var(--gold, #B8953E)'],
                  ['Cash + Points awards', '₹0.50 - 0.75', 'Situational', 'var(--gold, #B8953E)'],
                  ['Airline transfer (3:1)', '₹0.40 - 0.60', 'Usually avoid', 'var(--red)'],
                  ['Marriott Bonvoy Moments / merch', '₹0.30 - 0.50', 'Avoid', 'var(--red)'],
                ].map(([type, value, verdict, color], i) => (
                  <tr key={i}>
                    <td className="py-2.5 px-3 font-medium" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{type}</td>
                    <td className="py-2.5 px-2 text-center font-mono font-bold" style={{ color, borderBottom: '1px solid var(--border)' }}>{value}</td>
                    <td className="py-2.5 px-2 text-[12px]" style={{ color: 'var(--text-m)', borderBottom: '1px solid var(--border)' }}>{verdict}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-[11px] mt-2" style={{ color: 'var(--text-m)' }}>Values are typical ranges as of June 2026; actual value depends on dynamic pricing, dates, and property. Verify before redeeming.</p>
          </div>

          <H2 id="sweet-spots">The two sweet spots that maximise value</H2>
          <div className="space-y-4">
            {[
              { num: '1', title: 'The free fifth night on points', detail: 'When you book a 5-night award stay entirely with points, Marriott gives the 5th night free. This is a built-in 20% discount on every 5-night redemption — effectively turning 5 nights into the cost of 4. For longer luxury stays, this is the single biggest value lever in the program. Plan award stays in 5-night blocks where possible.' },
              { num: '2', title: 'Off-peak / PointSavers pricing', detail: 'Marriott prices award nights dynamically, but selected properties periodically discount redemption rates by 20-30% during off-peak periods. Booking these discounted award nights is the best way to push your per-point value above ₹1. Check the award calendar for lower-priced dates before committing points.' },
            ].map((s, i) => (
              <div key={i} className="p-5 rounded-xl" style={{ background: '#EDF5F0', border: '1px solid #C8DDD0' }}>
                <div className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full grid place-items-center text-[12px] font-bold shrink-0" style={{ background: 'var(--green)', color: '#fff' }}>{s.num}</span>
                  <div>
                    <p className="text-[14px] font-bold mb-1" style={{ color: 'var(--green)' }}>{s.title}</p>
                    <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>{s.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p>Stack both — a <S>5-night off-peak luxury stay</S> — and your effective per-point value can comfortably exceed ₹1.10, well above the program average. That's the redemption to aim for.</p>

          <H2 id="airline-transfer">Should you transfer Marriott points to airlines?</H2>
          <p>Marriott partners with 40+ airlines, transferring at a <S>3:1 ratio with a 5,000-mile bonus per 60,000 points transferred</S> (so 60,000 points become 25,000 miles). It sounds flexible, but the math is usually poor:</p>
          <div className="p-4 rounded-xl" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
            <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>At 3:1, you're converting points worth ₹0.55-0.95 each into miles at a steep discount. <S>For most Indian travellers, transferring Bonvoy points to airlines destroys value.</S> Marriott points are hotel currency — keep them for hotels. The rare exception is topping up an airline balance for a specific high-value redemption you can't otherwise reach, and only when a transfer bonus is running. For airline miles, earn through dedicated cards instead — see our <a href="/blog/best-krisflyer-routes-india-2026" style={{ color: 'var(--red)', textDecoration: 'underline' }}>KrisFlyer</a> and <a href="/blog/british-airways-avios-india-guide-2026" style={{ color: 'var(--red)', textDecoration: 'underline' }}>Avios</a> guides.</p>
          </div>

          <H2 id="step-by-step">The complete India strategy, step by step</H2>
          <div className="space-y-3">
            {[
              { t: 'Earn through the HDFC Marriott card', d: 'Use it for Marriott stays (8 pts/₹150) and travel/dining (4 pts/₹150). Collect the free night award on signup and each renewal.' },
              { t: 'Hold points for hotel redemptions', d: 'Don\'t redeem for merchandise, Moments, or airline transfers. Hotel award nights are where the value is.' },
              { t: 'Target luxury or off-peak nights', d: 'Aim your points at Ritz-Carlton/St. Regis or PointSavers off-peak dates where per-point value peaks above ₹1.' },
              { t: 'Book in 5-night blocks when possible', d: 'The free fifth night is a 20% discount. For longer stays, structure them as 5-night award bookings.' },
              { t: 'Use the free night award near its ceiling', d: 'Redeem the up-to-15,000-point free night at a property costing 13,000-15,000 points, never on a cheap hotel.' },
              { t: 'Keep the account active', d: 'Points expire after 24 months of inactivity. One card transaction or paid stay resets the clock for your whole balance.' },
            ].map((s, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="w-7 h-7 rounded-full grid place-items-center text-[12px] font-bold shrink-0 mt-0.5" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>{i+1}</span>
                <div>
                  <p className="text-[14px] font-semibold" style={{ color: 'var(--text)' }}>{s.t}</p>
                  <p className="text-[13px] mt-0.5" style={{ color: 'var(--text-s)' }}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>

          <H2 id="expiry">Keeping your points alive</H2>
          <p><S>Marriott Bonvoy points expire after 24 consecutive months of inactivity.</S> The reset is easy: any earning activity — a paid stay, or even a single ₹1 transaction on a Marriott co-branded card — resets the 24-month clock for your entire balance. If you hold the HDFC Marriott card and use it occasionally, your points effectively never expire. Set a calendar reminder for 22 months out if you're not a regular user.</p>

          <H2 id="bottom-line">The bottom line</H2>
          <p>Marriott Bonvoy is the most practical global hotel program for Indian travellers in 2026 — accessible through the HDFC Marriott card and HSBC Taj card, with Amex transfer as a top-up route. <S>The winning strategy is straightforward: earn through the HDFC card, hold points for hotel stays, target luxury or off-peak nights, exploit the free fifth night, and never transfer to airlines.</S></p>
          <p>Points are worth ₹0.55-0.95 each on average, but disciplined redemption — 5-night off-peak luxury stays — pushes that past ₹1.10. Combined with the card's free night award and Silver status, it's a genuinely rewarding program for anyone who stays at Marriott properties even occasionally.</p>
          <p>See how Marriott earning compares to flexible points for your spend with the <a href="/" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>PointsMax calculator</a>, and for the broader redemption framework read our guide on <a href="/blog/how-to-redeem-credit-card-points-india-2026" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>how to redeem credit card points for maximum value</a>. For hotel programs beyond Marriott, see our guide to <a href="/blog/accor-hilton-ihg-india-hotel-points-guide-2026" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>Accor, Hilton & IHG in India</a>. For airline alternatives, see the <a href="/blog/best-krisflyer-routes-india-2026" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>KrisFlyer routes guide</a>.</p>

          <div className="p-6 rounded-2xl text-center mt-8" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <p className="text-[16px] font-semibold">Hotel points or flexible points — which wins for you?</p>
            <p className="text-[13px] mt-1 mb-4" style={{ color: 'rgba(250,248,245,0.5)' }}>Compare every Indian card's points value side by side, free.</p>
            <a href="/" className="inline-block px-6 py-2.5 rounded-xl text-[14px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Open PointsMax Calculator →</a>
          </div>

          <p className="text-[11px] mt-8 leading-relaxed" style={{ color: 'var(--text-m)' }}>
            <strong>Disclaimer:</strong> Program terms, earn rates, point values, and card benefits change without notice. Point values are typical ranges as of June 2026 based on publicly available valuations and vary by property and date. Award pricing is dynamic. Always verify current terms at marriott.com and your card issuer before relying on any benefit. PointsMax is not affiliated with Marriott, HDFC Bank, HSBC, or American Express. Not financial advice.
          </p>

          <FeedbackWidget pageSlug="marriott-bonvoy-india-strategy-guide-2026" pageTitle="Marriott Bonvoy India Strategy Guide 2026" />
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
            <p className="text-[13px]" style={{ color: 'rgba(250,248,245,0.6)' }}>Compare <strong style={{ color: '#FAF8F5' }}>Marriott</strong> earning vs your cards</p>
            <a href="/" className="shrink-0 px-4 py-2 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Open Calculator →</a>
          </div>
        </div>
      )}
    </div>
  )
}
