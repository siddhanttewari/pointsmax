'use client'

import FeedbackWidget from '@/components/FeedbackWidget'
import PageNav from '@/components/PageNav'

import { useState, useEffect } from 'react'

const blogMeta = {
  title: 'What Are Your Credit Card Points Actually Worth in 2026? The Real Numbers',
  description: 'Every Indian bank slashed credit card rewards in 2026. Here\'s what your HDFC, Axis, SBI, ICICI, and Amex points are really worth now — per-point values, best redemption methods, and the mistakes costing you money.',
}

const blogJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What Are Your Credit Card Points Actually Worth in 2026? The Real Numbers',
  description: 'Every Indian bank slashed credit card rewards in 2026. Here is what your points are really worth now.',
  datePublished: '2026-05-18',
  dateModified: '2026-05-18',
  author: { '@type': 'Organization', name: 'PointsMax' },
  publisher: { '@type': 'Organization', name: 'PointsMax', url: 'https://www.pointsmax.in' },
  mainEntityOfPage: 'https://www.pointsmax.in/blog/credit-card-points-value-india-2026',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much is 1 HDFC reward point worth in rupees in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For HDFC Infinia and Diners Club Black, 1 reward point is worth ₹1 when redeemed for flights or hotels on SmartBuy, ₹1 for Apple/Tanishq vouchers, ₹0.50 for gift vouchers, and ₹0.30 for statement credit. For HDFC Regalia, 1 point is worth approximately ₹0.50 on SmartBuy travel.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which credit card gives the highest reward points value in India in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'HDFC Infinia gives the highest per-point value at ₹1/point on SmartBuy travel and Apple/Tanishq vouchers. Axis Magnus gives ₹0.50/point on Travel EDGE. For lifetime-free cards, Amazon Pay ICICI gives 5% instant cashback on Amazon, which is the highest effective return among no-fee cards.',
      },
    },
  ],
}

export default function BlogPost() {
  const [showBar, setShowBar] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowBar(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <>
      <PageNav />
      <article className="max-w-2xl mx-auto px-5 py-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 text-[13px]" style={{ color: 'var(--text-m)' }}>
          <a href="/" className="hover:text-black/50 transition-colors">PointsMax</a>
          <span>/</span>
          <a href="/blog" className="hover:text-black/50 transition-colors">Blog</a>
          <span>/</span>
          <span style={{ color: 'var(--text-s)' }}>Points Value 2026</span>
        </div>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded" style={{ color: 'var(--green)', background: 'rgba(110,231,183,0.08)' }}>Guide</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>May 18, 2026</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>8 min read</span>
        </div>

        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(24px, 4vw, 36px)', lineHeight: 1.15, letterSpacing: '-0.025em', color: 'var(--text)' }}>
          What Are Your Credit Card Points Actually Worth? The 2026 Reality Check
        </h1>

        <p className="mt-4 text-[16px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
          Every major Indian bank slashed rewards this year. Here's what your points are <em>really</em> worth now — card by card, method by method.
        </p>

        {/* Body */}
        <div className="mt-10 space-y-6 text-[15px] leading-[1.85]" style={{ color: 'var(--text-s)' }}>

          {/* ── HOOK ── */}
          <p>
            Let's start with a number that might sting a little.
          </p>
          <p>
            If you have 50,000 HDFC Infinia reward points sitting in your account right now, they could be worth <strong style={{ color: 'var(--green)' }}>₹50,000</strong> or <strong style={{ color: 'var(--red)' }}>₹10,000</strong>. Same points. Same card. The difference? How you choose to use them.
          </p>
          <p>
            And that 5x gap isn't even the worst of it. Between January and April 2026, every major Indian bank — HDFC, Axis, SBI, ICICI, Amex — quietly made your points worth less. Cashback caps got tighter. Transfer partners disappeared overnight. Earn rates dropped. Lounge access got locked behind spend thresholds.
          </p>
          <p>
            Most people didn't notice. Banks don't exactly send you a push notification saying <em>"hey, we just made your rewards 40% less valuable."</em>
          </p>
          <p>
            So here's what this post does: give you the actual rupee value of every major credit card's reward points in India, as of right now, after all the 2026 changes. No affiliate links, no "apply now" buttons, no sponsored rankings. Just the numbers.
          </p>

          {/* ── SECTION: THE TABLE ── */}
          <h2 className="pt-4" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', letterSpacing: '-0.01em' }}>
            The cheat sheet: what 1 point is worth across banks
          </h2>

          <p>Before we get into the details, here's the summary. Bookmark this.</p>

          {/* Value table */}
          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-[13px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead>
                <tr>
                  <th className="text-left py-3 px-3 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>Card</th>
                  <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>Best ₹/pt</th>
                  <th className="text-left py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>Best method</th>
                  <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--red)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>Worst ₹/pt</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['HDFC Infinia', '₹1.00', 'SmartBuy flights/hotels', '₹0.20'],
                  ['HDFC Diners Black', '₹1.00', 'SmartBuy flights/hotels', '₹0.20'],
                  ['HDFC Regalia Gold', '₹0.50', 'SmartBuy travel', '₹0.20'],
                  ['Axis Magnus', '₹0.50', 'Travel EDGE portal', '₹0.20'],
                  ['Axis Atlas', '₹0.50', 'Travel EDGE portal', '₹0.20'],
                  ['SBI Elite', '₹0.25', 'E-vouchers', '₹0.10'],
                  ['ICICI Emeralde', '₹0.50', 'InterMiles transfer', '₹0.25'],
                  ['ICICI Sapphiro', '₹0.25', 'Gift vouchers', '₹0.15'],
                  ['Amex Platinum', '₹1.00', 'Airline transfers', '₹0.30'],
                  ['Amex Gold', '₹0.50', 'Travel redemption', '₹0.30'],
                ].map(([card, best, method, worst], i) => (
                  <tr key={i}>
                    <td className="py-2.5 px-3 font-medium" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{card}</td>
                    <td className="py-2.5 px-2 text-center font-mono font-bold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>{best}</td>
                    <td className="py-2.5 px-2" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>{method}</td>
                    <td className="py-2.5 px-2 text-center font-mono" style={{ color: 'var(--red)', borderBottom: '1px solid var(--border)' }}>{worst}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-xl" style={{ background: '#ECFEFF', border: '1px solid #CFFAFE' }}>
            <p className="text-[13px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
              <strong style={{ color: 'var(--gold)' }}>Want the exact calculation for your card?</strong> Head to <a href="/" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>PointsMax</a> — select your card, enter your points, and see every option ranked.
            </p>
          </div>

          {/* ── SECTION: HDFC ── */}
          <h2 className="pt-6" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', letterSpacing: '-0.01em' }}>
            HDFC Bank: still the king, but the crown got heavier
          </h2>

          <p>
            HDFC Infinia and Diners Club Black remain the most valuable reward point currencies in India. One point equals one rupee when you book flights or hotels through SmartBuy. That hasn't changed.
          </p>
          <p>
            What <em>has</em> changed:
          </p>
          <ul className="space-y-2 pl-1" style={{ listStyleType: 'none' }}>
            <li className="flex gap-2">
              <span style={{ color: 'var(--red)' }}>→</span>
              <span>SmartBuy bonus earn rate dropped from <strong style={{ color: 'var(--text)' }}>5x to 3x</strong> in January 2026. That's a 40% cut to your accelerated earning.</span>
            </li>
            <li className="flex gap-2">
              <span style={{ color: 'var(--red)' }}>→</span>
              <span>Monthly redemptions capped at <strong style={{ color: 'var(--text)' }}>5 times per month</strong> (February 2026). Power users who split redemptions across categories feel this.</span>
            </li>
            <li className="flex gap-2">
              <span style={{ color: 'var(--red)' }}>→</span>
              <span>Transfer partner ratios for <strong style={{ color: 'var(--text)' }}>Turkish Airlines and Avianca</strong> went from 1:1 to 2:1. Your points buy half the miles they used to.</span>
            </li>
            <li className="flex gap-2">
              <span style={{ color: 'var(--red)' }}>→</span>
              <span>Infinia now requires <strong style={{ color: 'var(--text)' }}>₹18 lakh annual spend</strong> (or ₹50 lakh banking relationship) to retain. Don't hit it? Risk a downgrade.</span>
            </li>
          </ul>
          <p>
            The base reward rate — 5 points per ₹150, or 3.3% on SmartBuy travel — still makes Infinia the best card in India by a mile. But the bar to keep it keeps going up.
          </p>
          <p>
            <strong style={{ color: 'var(--text)' }}>The play:</strong> If you have Infinia, always redeem via SmartBuy for travel at ₹1/point. Never use the product catalogue (₹0.20/point). Transfer to airlines only for specific business class bookings — Singapore Airlines KrisFlyer and Finnair Plus are still 1:1. Everything else has been devalued.
          </p>

          {/* ── SECTION: AXIS ── */}
          <h2 className="pt-6" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', letterSpacing: '-0.01em' }}>
            Axis Bank: the one that hurt the most
          </h2>

          <p>
            Axis dropped a bomb in April 2026.
          </p>
          <p>
            Overnight, they removed <strong style={{ color: 'var(--text)' }}>Marriott Bonvoy, Accor Live Limitless, and Qatar Airways Privilege Club</strong> as transfer partners. If you'd been saving Axis EDGE points for a Marriott hotel redemption — sorry. Gone.
          </p>
          <p>
            On top of that:
          </p>
          <ul className="space-y-2 pl-1" style={{ listStyleType: 'none' }}>
            <li className="flex gap-2">
              <span style={{ color: 'var(--red)' }}>→</span>
              <span>Several transfer ratios were reduced. You now get less miles per EDGE point across remaining partners.</span>
            </li>
            <li className="flex gap-2">
              <span style={{ color: 'var(--red)' }}>→</span>
              <span>The Airtel Axis Card's cashback is now <strong style={{ color: 'var(--text)' }}>linked to general spending</strong>. Use it only for Airtel bills? Your cashback could effectively be ₹0.</span>
            </li>
            <li className="flex gap-2">
              <span style={{ color: 'var(--red)' }}>→</span>
              <span>Lounge access on several Axis cards was quietly discontinued or made spend-linked.</span>
            </li>
          </ul>
          <p>
            Axis Magnus and Atlas cardholders can still get ₹0.50/point through the Travel EDGE portal for flight bookings, which remains a decent deal. But the transfer partner ecosystem that once made these cards competitive with HDFC has been gutted.
          </p>

          {/* ── SECTION: SBI ── */}
          <h2 className="pt-6" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', letterSpacing: '-0.01em' }}>
            SBI Card: death by a thousand caps
          </h2>

          <p>
            SBI didn't remove partners or slash earn rates. Instead, they went after redemption flexibility:
          </p>
          <ul className="space-y-2 pl-1" style={{ listStyleType: 'none' }}>
            <li className="flex gap-2">
              <span style={{ color: 'var(--red)' }}>→</span>
              <span>Cashback on the SBI Cashback Card: 5% online capped at <strong style={{ color: 'var(--text)' }}>₹2,000/month</strong> (was ₹5,000)</span>
            </li>
            <li className="flex gap-2">
              <span style={{ color: 'var(--red)' }}>→</span>
              <span>Statement credit redemption: only in <strong style={{ color: 'var(--text)' }}>multiples of 4,000 points</strong>. Have 3,999 points? You can't redeem any.</span>
            </li>
            <li className="flex gap-2">
              <span style={{ color: 'var(--red)' }}>→</span>
              <span>Monthly cap: <strong style={{ color: 'var(--text)' }}>60,000 points maximum</strong> across several cards.</span>
            </li>
            <li className="flex gap-2">
              <span style={{ color: 'var(--red)' }}>→</span>
              <span>Gaming, toll, and government payments no longer earn cashback.</span>
            </li>
          </ul>
          <p>
            SBI reward points are still worth about ₹0.25/point when redeemed for e-vouchers. Not exciting, but straightforward. The damage is mainly to cashback card users who relied on the higher caps.
          </p>

          {/* Mid-article CTA */}
          <div className="p-5 rounded-xl my-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <div>
              <p className="text-[14px] font-semibold">Have HDFC, Axis, or SBI points sitting idle?</p>
              <p className="text-[12px] mt-1" style={{ color: 'rgba(250,248,245,0.5)' }}>See exactly what they're worth — ranked by value, not by what the bank wants you to pick.</p>
            </div>
            <a href="/" className="shrink-0 px-5 py-2.5 rounded-lg text-[13px] font-semibold transition-all duration-200" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>
              Check My Points →
            </a>
          </div>

          {/* ── SECTION: 3 MISTAKES ── */}
          <h2 className="pt-6" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', letterSpacing: '-0.01em' }}>
            The 3 mistakes that are costing you money
          </h2>

          {/* Mistake 1 */}
          <div className="p-5 rounded-xl" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
            <p className="text-[13px] font-bold uppercase tracking-wide mb-2" style={{ color: 'var(--red)' }}>Mistake #1</p>
            <p style={{ color: 'var(--text)' }}>
              <strong>Redeeming for the product catalogue.</strong> On HDFC Infinia, catalogue redemption gives you ₹0.20/point. SmartBuy travel gives ₹1/point. That means 10,000 points is worth either ₹2,000 or ₹10,000. The catalogue literally costs you 80% of your points' value.
            </p>
          </div>

          {/* Mistake 2 */}
          <div className="p-5 rounded-xl mt-3" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
            <p className="text-[13px] font-bold uppercase tracking-wide mb-2" style={{ color: 'var(--red)' }}>Mistake #2</p>
            <p style={{ color: 'var(--text)' }}>
              <strong>Transferring points without a booking in mind.</strong> People transfer to airline miles thinking "I'll use them someday." Then the program devalues (Axis + Marriott, anyone?) and your points are stuck in a worse currency. Only transfer when you have a specific flight or hotel in sight.
            </p>
          </div>

          {/* Mistake 3 */}
          <div className="p-5 rounded-xl mt-3" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
            <p className="text-[13px] font-bold uppercase tracking-wide mb-2" style={{ color: 'var(--red)' }}>Mistake #3</p>
            <p style={{ color: 'var(--text)' }}>
              <strong>Hoarding points and waiting for "something better."</strong> In 2026, the trend is clear: points get less valuable over time, not more. Every devaluation makes your balance worth fewer rupees. If you have points, use them. The best time to redeem was yesterday.
            </p>
          </div>

          {/* ── SECTION: WHAT TO DO ── */}
          <h2 className="pt-6" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', letterSpacing: '-0.01em' }}>
            Okay, so what should I actually do?
          </h2>

          <p>Three things:</p>

          <div className="space-y-4 mt-2">
            <div className="flex gap-3">
              <span className="text-[20px] font-mono font-bold shrink-0 w-8 h-8 grid place-items-center rounded-lg" style={{ color: 'var(--green)', background: '#EDF5F0' }}>1</span>
              <p><strong style={{ color: 'var(--text)' }}>Check your actual per-point value.</strong> Use <a href="/" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>PointsMax</a> to see exactly what your points are worth across every redemption method. You might be surprised at how much value you're leaving on the table.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-[20px] font-mono font-bold shrink-0 w-8 h-8 grid place-items-center rounded-lg" style={{ color: 'var(--green)', background: '#EDF5F0' }}>2</span>
              <p><strong style={{ color: 'var(--text)' }}>Redeem before the next devaluation.</strong> If you have points sitting idle, book a trip. Buy vouchers at the best rate. Don't let them collect dust while banks chip away at their value.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-[20px] font-mono font-bold shrink-0 w-8 h-8 grid place-items-center rounded-lg" style={{ color: 'var(--green)', background: '#EDF5F0' }}>3</span>
              <p><strong style={{ color: 'var(--text)' }}>Stop paying annual fees for benefits you can't use.</strong> If you're spending ₹5 lakh a year, a lifetime-free card portfolio (Amazon Pay ICICI + BoB Eterna + Scapia Federal) will outperform most paid premium cards after devaluations. Do the math before auto-paying that ₹10,000 renewal.</p>
            </div>
          </div>

          {/* ── SECTION: BOTTOM LINE ── */}
          <h2 className="pt-6" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', letterSpacing: '-0.01em' }}>
            The bottom line
          </h2>

          <p>
            The golden age of Indian credit card rewards is over. That's not cynicism — it's just what the data says. Banks are moving from "reward everyone" to "reward heavy spenders conditionally."
          </p>
          <p>
            But here's the thing: most people are still redeeming their points the wrong way. They're using the catalogue when they should be using SmartBuy. They're hoarding when they should be booking. They're paying ₹12,500 annual fees for cards whose benefits they use 30% of.
          </p>
          <p>
            The game hasn't ended. It's just gotten more specific. Know what your points are worth. Use them at the right time, through the right channel. That's it. That's the whole strategy.
          </p>

          {/* CTA */}
          <div className="p-6 rounded-2xl text-center mt-8" style={{ background: '#EDF5F0', border: '1px solid rgba(45,106,79,0.12)' }}>
            <p className="text-[16px] font-semibold" style={{ color: 'var(--text)' }}>
              Check your points value now
            </p>
            <p className="text-[13px] mt-1 mb-4" style={{ color: 'var(--text-s)' }}>
              25+ Indian cards. Every redemption option ranked.
            </p>
            <a href="/" className="inline-block px-6 py-2.5 rounded-xl text-[14px] font-semibold transition-all duration-200"
              style={{ background: 'rgba(45,106,79,0.1)', color: 'var(--green)', border: '1px solid #C8DDD0' }}>
              Open PointsMax →
            </a>
          </div>

          {/* Disclaimer */}
          <p className="text-[11px] mt-8 leading-relaxed" style={{ color: 'var(--text-m)' }}>
            <strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute financial advice. Reward point values, redemption rates, and card benefits change frequently. Always verify current terms on your bank's official website before making redemption decisions. PointsMax is not affiliated with any bank or financial institution.
          </p>
        </div>
                <FeedbackWidget pageSlug="credit-card-points-value-india-2026" pageTitle="credit-card-points-value-india-2026" />
        </article>

      {/* Footer */}
      <footer className="py-10 px-5" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[12px]" style={{ color: 'var(--text-m)' }}>
            <a href="/" className="hover:text-black/40 transition-colors">PointsMax</a>
            <span className="mx-2">·</span>
            <a href="/blog" className="hover:text-black/40 transition-colors">Blog</a>
            <span className="mx-2">·</span>
            <a href="/privacy" className="hover:text-black/40 transition-colors">Privacy</a>
          </p>
        </div>
      </footer>

      {/* Sticky bottom CTA */}
      {showBar && (
        <div className="fixed bottom-0 left-0 right-0 z-50 transition-all duration-300"
          style={{ background: 'var(--dark)', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '10px 16px' }}>
          <div className="max-w-2xl mx-auto flex items-center justify-between gap-3">
            <p className="text-[13px] hidden sm:block" style={{ color: 'rgba(250,248,245,0.6)' }}>
              What are <strong style={{ color: '#FAF8F5' }}>your</strong> points worth?
            </p>
            <p className="text-[13px] sm:hidden" style={{ color: 'rgba(250,248,245,0.6)' }}>
              Check your points value
            </p>
            <a href="/" className="shrink-0 px-4 py-2 rounded-lg text-[13px] font-semibold"
              style={{ background: 'var(--gold)', color: 'var(--dark)' }}>
              Open Calculator →
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
