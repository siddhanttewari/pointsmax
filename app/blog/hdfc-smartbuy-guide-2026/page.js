'use client'

import { useState, useEffect } from 'react'

const blogJsonLd = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'HDFC SmartBuy Guide 2026: How to Get ₹1 Per Point on Infinia, Diners Black and Regalia',
  datePublished: '2026-05-20', dateModified: '2026-05-20',
  author: { '@type': 'Organization', name: 'PointsMax' },
  publisher: { '@type': 'Organization', name: 'PointsMax', url: 'https://www.pointsmax.in' },
  mainEntityOfPage: 'https://www.pointsmax.in/blog/hdfc-smartbuy-guide-2026',
}

const faqJsonLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much is 1 HDFC reward point worth on SmartBuy?', acceptedAnswer: { '@type': 'Answer', text: 'On SmartBuy, 1 HDFC Infinia or Diners Club Black reward point is worth ₹1 when redeemed for flights, hotels, or instant vouchers. For Regalia Gold, 1 point equals approximately ₹0.50. For Regalia and MoneyBack+, the value is lower at around ₹0.20-0.30 per point.' }},
    { '@type': 'Question', name: 'What categories are eligible for SmartBuy bonus reward points?', acceptedAnswer: { '@type': 'Answer', text: 'SmartBuy bonus points apply to flights, hotels, bus tickets, rail bookings, instant vouchers (brands like Amazon, Flipkart, Tanishq), Apple Imagine Tresor products, MakeMyTrip holiday packages, Zoomcar, Jockey, Duty Free via Adani One, Myntra, and Pharmeasy.' }},
    { '@type': 'Question', name: 'What is the monthly SmartBuy redemption cap for HDFC Infinia?', acceptedAnswer: { '@type': 'Answer', text: 'HDFC Infinia cardholders can redeem a maximum of 50,000 reward points per calendar month for travel bookings on SmartBuy. The 70/30 rule also applies — you can pay up to 70% of any booking with points, and the remaining 30% must be paid via your credit card.' }},
  ],
}

export default function BlogPost() {
  const [showBar, setShowBar] = useState(false)
  useEffect(() => {
    const fn = () => setShowBar(window.scrollY > 600)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <article className="max-w-2xl mx-auto px-5 py-12">
        <div className="flex items-center gap-2 mb-8 text-[13px]" style={{ color: 'var(--text-m)' }}>
          <a href="/" className="hover:text-black/50 transition-colors">PointsMax</a><span>/</span>
          <a href="/blog" className="hover:text-black/50 transition-colors">Blog</a><span>/</span>
          <span style={{ color: 'var(--text-s)' }}>SmartBuy Guide</span>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded" style={{ color: '#2563eb', background: 'rgba(37,99,235,0.06)' }}>Deep Dive</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>May 20, 2026</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>9 min read</span>
        </div>

        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(24px, 4vw, 36px)', lineHeight: 1.15, letterSpacing: '-0.025em', color: 'var(--text)' }}>
          HDFC SmartBuy: The Only Way to Get ₹1 Per Point (And the Tricks They Don't Tell You)
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
          SmartBuy is the single most valuable feature of any HDFC credit card. It's also the most misunderstood. Here's how it actually works in 2026.
        </p>

        <div className="mt-10 space-y-6 text-[15px] leading-[1.85]" style={{ color: 'var(--text-s)' }}>

          <p>If you have an HDFC Infinia or Diners Club Black credit card and you've never used SmartBuy, you've probably been leaving 60-80% of your points' value on the table.</p>
          <p>That's not an exaggeration. The same 10,000 reward points are worth <strong style={{ color: 'var(--green)' }}>₹10,000 on SmartBuy</strong> and <strong style={{ color: 'var(--red)' }}>₹2,000 on the product catalogue</strong>. Five times the value. Same card, same points, different checkout page.</p>
          <p>SmartBuy is HDFC Bank's rewards portal — essentially a website where you book flights, hotels, buy vouchers, and shop for products, all while earning accelerated reward points and redeeming your existing points at the highest possible value.</p>
          <p>The catch? It's surprisingly clunky to navigate, the rules change often, and HDFC doesn't exactly make the fine print easy to find. So here's everything you need to know, updated for the 2026-27 cycle.</p>

          <h2 className="pt-4" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', letterSpacing: '-0.01em' }}>
            How many bonus points do you earn on SmartBuy?
          </h2>

          <p><strong style={{ color: 'var(--text)' }}>It depends entirely on your card.</strong> HDFC Infinia earns 10x reward points on flights and hotels, while a Regalia earns just 2x on the same booking. Here's the current earn structure:</p>

          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-[13px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead>
                <tr>
                  <th className="text-left py-3 px-3 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Card</th>
                  <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Flights/Hotels</th>
                  <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Vouchers</th>
                  <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>₹/point</th>
                  <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Effective return</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Infinia', '10x', '5x', '₹1.00', '3.3%'],
                  ['Diners Club Black', '10x', '3x*', '₹1.00', '3.3%'],
                  ['Regalia Gold', '5x', '5x', '₹0.50', '1.7%'],
                  ['Regalia', '2x', '2x', '₹0.30', '0.6%'],
                  ['MoneyBack+', '5x cashback', '5x cashback', 'N/A', '~2.5%'],
                ].map(([card, fh, v, val, ret], i) => (
                  <tr key={i}>
                    <td className="py-2.5 px-3 font-medium" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{card}</td>
                    <td className="py-2.5 px-2 text-center font-mono" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>{fh}</td>
                    <td className="py-2.5 px-2 text-center font-mono" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>{v}</td>
                    <td className="py-2.5 px-2 text-center font-mono font-bold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>{val}</td>
                    <td className="py-2.5 px-2 text-center font-mono font-bold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>{ret}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-[11px] mt-2" style={{ color: 'var(--text-m)' }}>*Diners Black earns 3x on vouchers while Regalia Gold earns 5x — use Regalia Gold for voucher purchases if you hold both.</p>
          </div>

          <h2 className="pt-6" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', letterSpacing: '-0.01em' }}>
            What can you buy on SmartBuy?
          </h2>

          <p><strong style={{ color: 'var(--text)' }}>More than you'd expect.</strong> SmartBuy isn't just for travel anymore. The eligible categories as of April 2026:</p>

          <div className="grid grid-cols-2 gap-2 my-4">
            {[
              ['✈️ Flights', 'EaseMyTrip, Cleartrip, Yatra'],
              ['🏨 Hotels', 'Cleartrip, Yatra, MakeMyTrip'],
              ['🎫 Instant Vouchers', 'Amazon, Flipkart, Tanishq, Swiggy, BigBasket, 100+ brands'],
              ['🍎 Apple Products', 'Apple Imagine Tresor store'],
              ['🚌 Bus & Rail', 'RedBus, IRCTC'],
              ['🏖️ Holiday Packages', 'MakeMyTrip packages'],
              ['🚗 Car Rentals', 'Zoomcar'],
              ['👕 Fashion', 'Myntra, Jockey'],
              ['🛫 Duty Free', 'Adani One stores'],
              ['💊 Pharmacy', 'Pharmeasy*'],
            ].map(([cat, detail], i) => (
              <div key={i} className="p-3 rounded-lg" style={{ background: 'var(--bg-s)', border: '1px solid var(--border)' }}>
                <p className="text-[13px] font-semibold" style={{ color: 'var(--text)' }}>{cat}</p>
                <p className="text-[11px] mt-0.5" style={{ color: 'var(--text-m)' }}>{detail}</p>
              </div>
            ))}
          </div>
          <p className="text-[12px]" style={{ color: 'var(--text-m)' }}>*Pharmeasy currently unavailable due to technical issues per HDFC.</p>

          <h2 className="pt-6" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', letterSpacing: '-0.01em' }}>
            The voucher hack: turning grocery runs into 5x points
          </h2>

          <p>This is the trick that experienced HDFC cardholders swear by. Instead of swiping your card at a store and earning the base 1-2x points, you buy an instant voucher for that store on SmartBuy first.</p>

          <div className="p-5 rounded-xl" style={{ background: '#EDF5F0', border: '1px solid #C8DDD0' }}>
            <p className="text-[13px] font-bold uppercase tracking-wide mb-3" style={{ color: 'var(--green)' }}>How it works</p>
            <div className="space-y-2 text-[13px]" style={{ color: 'var(--text-s)' }}>
              <p><strong style={{ color: 'var(--text)' }}>Step 1:</strong> Go to SmartBuy → Instant Vouchers</p>
              <p><strong style={{ color: 'var(--text)' }}>Step 2:</strong> Buy a BigBasket/Swiggy Instamart voucher with your Infinia → earn 5x points</p>
              <p><strong style={{ color: 'var(--text)' }}>Step 3:</strong> Use the voucher for your regular grocery order</p>
              <p className="pt-2" style={{ color: 'var(--green)' }}>Result: You just earned 5x points on groceries instead of 1x. That's a 3.3% return on what would have been a 0.66% return.</p>
            </div>
          </div>

          <p>This works for almost anything — Amazon vouchers for online shopping, Swiggy vouchers for food delivery, Myntra vouchers for clothes, even Croma vouchers for electronics. The only requirement is that the brand is available on SmartBuy Instant Vouchers.</p>

          <p><strong style={{ color: 'var(--text)' }}>Pro tip:</strong> Regalia Gold earns 5x on vouchers while Diners Black earns 3x. If you have both cards, always use Regalia Gold for voucher purchases. Use Diners Black only for 10x categories like hotels and flights.</p>

          <h2 className="pt-6" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', letterSpacing: '-0.01em' }}>
            The 70/30 rule and the monthly cap
          </h2>

          <p>Two limits you need to know about:</p>

          <div className="p-4 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
            <p className="text-[14px] font-semibold mb-2" style={{ color: 'var(--text)' }}>The 70/30 rule</p>
            <p className="text-[13px] leading-relaxed" style={{ color: 'var(--text-s)' }}>You can pay a maximum of 70% of any travel booking (flights, hotels) using reward points. The remaining 30% must be paid with your credit card. This actually works in your favour — the 30% card payment still earns bonus SmartBuy points, creating a compounding loop.</p>
          </div>

          <div className="p-4 rounded-xl mt-3" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
            <p className="text-[14px] font-semibold mb-2" style={{ color: 'var(--red)' }}>Monthly redemption cap: 50,000 points</p>
            <p className="text-[13px] leading-relaxed" style={{ color: 'var(--text-s)' }}>As of 2026, you can redeem a maximum of 50,000 reward points per calendar month for travel bookings on SmartBuy. That's ₹50,000 worth of travel. If you have more points, split redemptions across months, or use the overflow for instant vouchers — which have a separate, higher cap.</p>
          </div>

          {/* Mid-article CTA */}
          <div className="p-5 rounded-xl my-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <div>
              <p className="text-[14px] font-semibold">Have HDFC reward points?</p>
              <p className="text-[12px] mt-1" style={{ color: 'rgba(250,248,245,0.5)' }}>See the exact rupee value of every redemption method — SmartBuy, vouchers, catalogue, transfers.</p>
            </div>
            <a href="/" className="shrink-0 px-5 py-2.5 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>
              Check My Points →
            </a>
          </div>

          <h2 className="pt-4" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', letterSpacing: '-0.01em' }}>
            4 SmartBuy mistakes that waste your points
          </h2>

          <div className="space-y-3">
            <div className="p-4 rounded-xl" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
              <p className="text-[13px] font-bold mb-1" style={{ color: 'var(--red)' }}>✕ Redeeming for the product catalogue</p>
              <p className="text-[13px] leading-relaxed" style={{ color: 'var(--text-s)' }}>The catalogue gives you ₹0.20/point. SmartBuy travel gives ₹1/point. That's 80% value destruction. There is literally no scenario where the catalogue is the right choice if SmartBuy is available.</p>
            </div>
            <div className="p-4 rounded-xl" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
              <p className="text-[13px] font-bold mb-1" style={{ color: 'var(--red)' }}>✕ Booking travel outside SmartBuy</p>
              <p className="text-[13px] leading-relaxed" style={{ color: 'var(--text-s)' }}>If you book on MakeMyTrip or Cleartrip directly, you earn the base 1-2x reward points. The exact same booking through SmartBuy earns 5-10x. Same flight. Same price. Up to 5x more points.</p>
            </div>
            <div className="p-4 rounded-xl" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
              <p className="text-[13px] font-bold mb-1" style={{ color: 'var(--red)' }}>✕ Not using the voucher hack for everyday spending</p>
              <p className="text-[13px] leading-relaxed" style={{ color: 'var(--text-s)' }}>Every direct swipe at a grocery store, restaurant, or clothing shop earns you base points. Buying a voucher first converts that spend to 3-5x. It takes 2 extra minutes and triples your return.</p>
            </div>
            <div className="p-4 rounded-xl" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
              <p className="text-[13px] font-bold mb-1" style={{ color: 'var(--red)' }}>✕ Using Diners Black for vouchers instead of Regalia Gold</p>
              <p className="text-[13px] leading-relaxed" style={{ color: 'var(--text-s)' }}>As of April 2026, Regalia Gold earns 5x on vouchers while Diners Black only earns 3x. If you hold both cards, this is a 67% difference in earn rate on the same purchase. Card selection matters.</p>
            </div>
          </div>

          <h2 className="pt-6" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', letterSpacing: '-0.01em' }}>
            Step-by-step: how to redeem points on SmartBuy
          </h2>

          <p>The process isn't obvious, so here's the walkthrough:</p>

          <div className="space-y-3 mt-2">
            {[
              ['Go to offers.smartbuy.hdfc.bank.in', 'Bookmark this. Don\'t Google "SmartBuy" — you\'ll get ten affiliate sites before the real one.'],
              ['Pick your category', 'Flights, Hotels, Instant Vouchers, or whatever you need.'],
              ['Search and select', 'For flights, enter your route and dates. SmartBuy aggregates prices from EaseMyTrip, Cleartrip, and Yatra.'],
              ['Choose "Pay with Reward Points"', 'On the payment page, you\'ll see an option to adjust how many points to use. Slide it up to 70% (the max).'],
              ['Pay the remaining 30% with your HDFC card', 'This portion still earns bonus SmartBuy points. Yes, you earn points while spending points.'],
              ['Wait for points to post', 'Bonus points are credited within 90 working days from the end of the transaction month. Be patient.'],
            ].map(([step, detail], i) => (
              <div key={i} className="flex gap-3">
                <span className="text-[16px] font-mono font-bold shrink-0 w-7 h-7 grid place-items-center rounded-lg" style={{ color: 'var(--gold)', background: 'rgba(184,149,62,0.08)' }}>{i + 1}</span>
                <div>
                  <p className="text-[14px] font-semibold" style={{ color: 'var(--text)' }}>{step}</p>
                  <p className="text-[13px] mt-0.5" style={{ color: 'var(--text-s)' }}>{detail}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="pt-6" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', letterSpacing: '-0.01em' }}>
            Worth knowing: what changed in 2026
          </h2>

          <p>A few updates from this year that affect SmartBuy strategy:</p>

          <ul className="space-y-2 pl-1" style={{ listStyleType: 'none' }}>
            <li className="flex gap-2"><span style={{ color: 'var(--red)' }}>→</span><span>SmartBuy bonus earn rate reportedly reduced from 5x to 3x for some card tiers in January 2026</span></li>
            <li className="flex gap-2"><span style={{ color: 'var(--red)' }}>→</span><span>Monthly redemptions capped at 5 per calendar month for travel bookings</span></li>
            <li className="flex gap-2"><span style={{ color: 'var(--red)' }}>→</span><span>Points posting timeline remains at 90 working days — so book now, expect points in ~4 months</span></li>
            <li className="flex gap-2"><span style={{ color: 'var(--green)' }}>→</span><span>New categories added: Duty Free via Adani One, Myntra fashion, Jockey</span></li>
            <li className="flex gap-2"><span style={{ color: 'var(--green)' }}>→</span><span>The 70/30 card payment on travel still earns bonus points — the compounding loop still works</span></li>
          </ul>

          <h2 className="pt-6" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', letterSpacing: '-0.01em' }}>
            The one-line summary
          </h2>

          <p>SmartBuy is free money if you use it. ₹1/point on travel, 3-5x earn rate on everyday spending through the voucher hack, and a compounding loop that generates new points while you spend old ones. The only real effort is remembering to start on the SmartBuy portal instead of going directly to the booking site.</p>

          <p>If you've been using the HDFC product catalogue or redeeming for statement credit, you've been getting 20-50 paise per point instead of ₹1. Switch to SmartBuy. Seriously. It's the single highest-ROI change you can make to your credit card strategy.</p>

          {/* Bottom CTA */}
          <div className="p-6 rounded-2xl text-center mt-8" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <p className="text-[16px] font-semibold">See your HDFC card's full value breakdown</p>
            <p className="text-[13px] mt-1 mb-4" style={{ color: 'rgba(250,248,245,0.5)' }}>SmartBuy, vouchers, catalogue, airline transfers — every method ranked.</p>
            <a href="/" className="inline-block px-6 py-2.5 rounded-xl text-[14px] font-semibold" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>Open PointsMax →</a>
          </div>

          <p className="text-[11px] mt-8 leading-relaxed" style={{ color: 'var(--text-m)' }}>
            <strong>Disclaimer:</strong> This guide is based on publicly available information from HDFC Bank's SmartBuy portal as of May 2026. Earn rates, redemption caps, and eligible categories can change without notice. Always check the SmartBuy T&Cs before transacting. PointsMax is not affiliated with HDFC Bank.
          </p>
        </div>
      </article>

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

      {showBar && (
        <div className="fixed bottom-0 left-0 right-0 z-50" style={{ background: 'var(--dark)', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '10px 16px' }}>
          <div className="max-w-2xl mx-auto flex items-center justify-between gap-3">
            <p className="text-[13px] hidden sm:block" style={{ color: 'rgba(250,248,245,0.6)' }}>Got HDFC <strong style={{ color: '#FAF8F5' }}>reward points</strong>?</p>
            <p className="text-[13px] sm:hidden" style={{ color: 'rgba(250,248,245,0.6)' }}>Check your HDFC points</p>
            <a href="/" className="shrink-0 px-4 py-2 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>Open Calculator →</a>
          </div>
        </div>
      )}
    </div>
  )
}
