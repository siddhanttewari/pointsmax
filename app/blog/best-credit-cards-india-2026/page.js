'use client'

import FeedbackWidget from '@/components/FeedbackWidget'
import PageNav from '@/components/PageNav'

import { useState, useEffect } from 'react'

const blogJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Credit Cards in India 2026: Ranked by Actual Reward Value',
  description: 'Every major Indian card ranked by real per-point rupee value for every spend level.',
  datePublished: '2026-05-19',
  dateModified: '2026-05-19',
  author: { '@type': 'Organization', name: 'PointsMax' },
  publisher: { '@type': 'Organization', name: 'PointsMax', url: 'https://www.pointsmax.in' },
  mainEntityOfPage: 'https://www.pointsmax.in/blog/best-credit-cards-india-2026',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is the best credit card in India for beginners in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'For beginners spending under 5 lakh per year, the Amazon Pay ICICI (5% on Amazon, lifetime free), SBI Cashback (5% online, capped at ₹2,000/month), and IDFC FIRST Select (4X rewards on select categories) offer the best value without annual fees.' }},
    { '@type': 'Question', name: 'Which credit card gives the best rewards per rupee spent in India 2026?', acceptedAnswer: { '@type': 'Answer', text: 'HDFC Infinia gives the highest effective reward value at 3.3% return on SmartBuy travel (₹1/point). For no-annual-fee cards, Amazon Pay ICICI at 5% on Amazon and SBI Cashback at 5% online offer the highest returns on specific categories.' }},
    { '@type': 'Question', name: 'Is HDFC Infinia worth the ₹12,500 annual fee in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'HDFC Infinia is worth it if you spend over ₹10 lakh annually and redeem via SmartBuy travel at ₹1/point. At that spend, you earn roughly ₹33,000 in rewards versus the ₹12,500 fee. Below ₹5 lakh annual spend, a lifetime-free card portfolio gives better net returns.' }},
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
      <PageNav />
      <article className="max-w-2xl mx-auto px-5 py-12">
        <div className="flex items-center gap-2 mb-8 text-[13px]" style={{ color: 'var(--text-m)' }}>
          <a href="/" className="hover:text-black/50 transition-colors">PointsMax</a><span>/</span>
          <a href="/blog" className="hover:text-black/50 transition-colors">Blog</a><span>/</span>
          <span style={{ color: 'var(--text-s)' }}>Best Cards 2026</span>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded" style={{ color: 'var(--green)', background: 'rgba(45,106,79,0.08)' }}>Guide</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>May 19, 2026</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>10 min read</span>
        </div>

        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(24px, 4vw, 36px)', lineHeight: 1.15, letterSpacing: '-0.025em', color: 'var(--text)' }}>
          Best Credit Cards in India 2026: Ranked by What Your Points Are Actually Worth
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
          Not another "top 10" list. We ranked every card by real rupee value per point — because a 10x earn rate means nothing if each point is worth ₹0.10.
        </p>

        <div className="mt-10 space-y-6 text-[15px] leading-[1.85]" style={{ color: 'var(--text-s)' }}>

          <p>
            Every "best credit card" list on the internet ranks cards by earn rates. 10x points here, 5% cashback there. Sounds great on paper.
          </p>
          <p>
            But here's what they don't tell you: <strong style={{ color: 'var(--text)' }}>earn rate × redemption value = actual return</strong>. A card that gives you 10x points worth ₹0.10 each gives you 1% back. A card that gives 3x points worth ₹1.00 each gives you 2% back. The second card is twice as valuable, despite the "lower" earn rate.
          </p>
          <p>
            That's why we ranked these differently. Every card below is judged by one thing: how many rupees you actually get back per ₹100 spent, when you use the best available redemption method.
          </p>
          <p>
            We also split this by annual spend — because the best card for someone spending ₹2 lakh a year is very different from someone spending ₹20 lakh.
          </p>

          <h2 className="pt-6" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', letterSpacing: '-0.01em' }}>
            Which credit card gives the highest real return in India?
          </h2>

          <p>
            <strong style={{ color: 'var(--text)' }}>HDFC Infinia gives the highest overall return at 3.3% on SmartBuy travel</strong> — that's 5 points per ₹150 spent, with each point worth ₹1. No other card in India comes close for all-category spend. But it requires ₹18 lakh annual spend to retain and charges ₹12,500/year.
          </p>

          <p>
            For category-specific spend, Amazon Pay ICICI gives 5% back on Amazon (effectively the highest return on any single platform), and SBI Cashback gives 5% online — though now capped at ₹2,000/month.
          </p>

          <h2 className="pt-6" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', letterSpacing: '-0.01em' }}>
            Best cards if you spend under ₹5 lakh/year
          </h2>

          <p>At this spend level, annual fees eat into your rewards. Every card here is lifetime free or has a fee waiver on minimal spend.</p>

          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-[13px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead>
                <tr>
                  <th className="text-left py-3 px-3 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Card</th>
                  <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Effective return</th>
                  <th className="text-left py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Best for</th>
                  <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Annual fee</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Amazon Pay ICICI', '5%', 'Amazon shoppers', 'Free'],
                  ['SBI Cashback', '5% online', 'Online spenders (₹2K cap)', 'Free*'],
                  ['IDFC FIRST Select', '3-4%', 'Select category spenders', '₹999**'],
                  ['Flipkart Axis', '4% Flipkart', 'Flipkart + Myntra users', 'Free*'],
                  ['HSBC Live+', '10% dining', 'Dining + groceries', 'Free*'],
                  ['Scapia Federal', '2% + lounges', 'Travel + lounge access', 'Free'],
                ].map(([card, ret, best, fee], i) => (
                  <tr key={i}>
                    <td className="py-2.5 px-3 font-medium" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{card}</td>
                    <td className="py-2.5 px-2 text-center font-mono font-bold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>{ret}</td>
                    <td className="py-2.5 px-2" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>{best}</td>
                    <td className="py-2.5 px-2 text-center" style={{ color: 'var(--text-m)', borderBottom: '1px solid var(--border)' }}>{fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-[11px] mt-2" style={{ color: 'var(--text-m)' }}>*Fee waived on minimal annual spend. **Waived on ₹1.25L spend.</p>
          </div>

          <p>
            <strong style={{ color: 'var(--text)' }}>The play:</strong> Don't pick one card. Stack them. Amazon Pay ICICI for Amazon, SBI Cashback for other online, Scapia for travel. That combo costs you ₹0 in fees and covers every category at 2-5% return.
          </p>

          <div className="p-4 rounded-xl" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
            <p className="text-[13px] font-bold uppercase tracking-wide mb-2" style={{ color: 'var(--red)' }}>Common mistake</p>
            <p className="text-[13px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
              Paying ₹5,000-10,000 annual fees at this spend level. On ₹3 lakh annual spend, a ₹5,000 fee card needs to deliver at least 1.7% net return just to break even versus a free card. Most don't.
            </p>
          </div>

          <h2 className="pt-6" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', letterSpacing: '-0.01em' }}>
            Best cards if you spend ₹5-15 lakh/year
          </h2>

          <p>The mid-tier sweet spot. Annual fees become justifiable, but only if you use the right redemption channel. This is where most people waste money.</p>

          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-[13px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead>
                <tr>
                  <th className="text-left py-3 px-3 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Card</th>
                  <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Best ₹/pt</th>
                  <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Effective return</th>
                  <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Fee</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Axis Atlas', '₹0.50', '1.5-2%', '₹5,000'],
                  ['HDFC Regalia Gold', '₹0.50', '1.5-2%', '₹2,500'],
                  ['SBI Elite', '₹0.25', '1-1.5%', '₹4,999'],
                  ['Amex Gold', '₹0.50', '1-2%', '₹9,000'],
                  ['IndusInd Tiger', '₹0.33', '3% on select', '₹599'],
                  ['Equitas Powermiles', '₹0.33', '3-9% intl', '₹1,499'],
                ].map(([card, val, ret, fee], i) => (
                  <tr key={i}>
                    <td className="py-2.5 px-3 font-medium" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{card}</td>
                    <td className="py-2.5 px-2 text-center font-mono font-bold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>{val}</td>
                    <td className="py-2.5 px-2 text-center font-mono" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>{ret}</td>
                    <td className="py-2.5 px-2 text-center" style={{ color: 'var(--text-m)', borderBottom: '1px solid var(--border)' }}>{fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            <strong style={{ color: 'var(--text)' }}>The play:</strong> Axis Atlas is the best all-rounder here. ₹0.50/point on Travel EDGE, airport lounges, and it still has some decent transfer partners post-April 2026. HDFC Regalia Gold is the sleeper pick — half the fee of Atlas with the same SmartBuy per-point value.
          </p>

          {/* Mid-article CTA */}
          <div className="p-5 rounded-xl my-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <div>
              <p className="text-[14px] font-semibold">Already have one of these cards?</p>
              <p className="text-[12px] mt-1" style={{ color: 'rgba(250,248,245,0.5)' }}>Check exactly what your points are worth — you might be using the wrong redemption method.</p>
            </div>
            <a href="/" className="shrink-0 px-5 py-2.5 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>
              Check My Points →
            </a>
          </div>

          <h2 className="pt-6" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', letterSpacing: '-0.01em' }}>
            Best cards if you spend ₹15 lakh+/year
          </h2>

          <p>Premium territory. These cards justify their fees through high per-point values, airline transfers, and concierge services. But only if you redeem correctly.</p>

          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-[13px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead>
                <tr>
                  <th className="text-left py-3 px-3 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Card</th>
                  <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Best ₹/pt</th>
                  <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Transfers</th>
                  <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Fee</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['HDFC Infinia', '₹1.00', '22 partners', '₹12,500'],
                  ['HDFC Diners Black', '₹1.00', '22 partners', '₹10,000'],
                  ['Axis Magnus', '₹0.50', '8 partners*', '₹12,500'],
                  ['Amex Platinum', '₹1.00', '10+ partners', '₹60,000'],
                  ['ICICI Emeralde', '₹0.50', 'InterMiles', '₹12,000'],
                ].map(([card, val, transfers, fee], i) => (
                  <tr key={i}>
                    <td className="py-2.5 px-3 font-medium" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{card}</td>
                    <td className="py-2.5 px-2 text-center font-mono font-bold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>{val}</td>
                    <td className="py-2.5 px-2 text-center" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>{transfers}</td>
                    <td className="py-2.5 px-2 text-center" style={{ color: 'var(--text-m)', borderBottom: '1px solid var(--border)' }}>{fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-[11px] mt-2" style={{ color: 'var(--text-m)' }}>*Axis reduced transfer partners in April 2026. Removed Marriott, Accor, Qatar Airways.</p>
          </div>

          <p>
            <strong style={{ color: 'var(--text)' }}>The play:</strong> HDFC Infinia is the undisputed king. ₹1/point on SmartBuy, 22 transfer partners, and the points currency is the strongest in India. If you can't get Infinia (it's invite-only), Diners Club Black gives you the exact same rewards at a lower fee — the only difference is metal vs plastic and the Infinia badge.
          </p>

          <div className="p-4 rounded-xl" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
            <p className="text-[13px] font-bold uppercase tracking-wide mb-2" style={{ color: 'var(--red)' }}>The ₹60,000 question</p>
            <p className="text-[13px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
              Amex Platinum charges ₹60,000/year. To break even, you need to extract ₹60,000 in value from lounge access, hotel credits, and airline transfers. If you travel internationally 4+ times a year and stay at premium hotels, it works. For everyone else, HDFC Infinia gives you equal or better rewards at ₹12,500.
            </p>
          </div>

          <h2 className="pt-6" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', letterSpacing: '-0.01em' }}>
            The portfolio approach: why one card isn't enough
          </h2>

          <p>
            No single credit card gives you the best return on every category. The smartest cardholders in India run a portfolio of 3-4 cards, each optimized for a specific spend type.
          </p>
          <p>Here are two portfolios that work in 2026:</p>

          <div className="p-5 rounded-xl" style={{ background: '#EDF5F0', border: '1px solid #C8DDD0' }}>
            <p className="text-[13px] font-bold uppercase tracking-wide mb-3" style={{ color: 'var(--green)' }}>₹0 fee portfolio (under ₹5L spend)</p>
            <div className="space-y-2 text-[13px]" style={{ color: 'var(--text-s)' }}>
              <p><strong style={{ color: 'var(--text)' }}>Amazon Pay ICICI</strong> — all Amazon/Prime spend (5%)</p>
              <p><strong style={{ color: 'var(--text)' }}>SBI Cashback</strong> — all other online spend (5%, ₹2K cap)</p>
              <p><strong style={{ color: 'var(--text)' }}>Scapia Federal</strong> — travel + international + lounge access (2%)</p>
              <p className="pt-1" style={{ color: 'var(--green)' }}>Annual cost: ₹0 | Blended return: 3-4%</p>
            </div>
          </div>

          <div className="p-5 rounded-xl mt-3" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
            <p className="text-[13px] font-bold uppercase tracking-wide mb-3" style={{ color: 'var(--gold)' }}>Premium portfolio (₹15L+ spend)</p>
            <div className="space-y-2 text-[13px]" style={{ color: 'var(--text-s)' }}>
              <p><strong style={{ color: 'var(--text)' }}>HDFC Infinia</strong> — all travel + big-ticket via SmartBuy (₹1/pt)</p>
              <p><strong style={{ color: 'var(--text)' }}>Amazon Pay ICICI</strong> — Amazon spend (5%)</p>
              <p><strong style={{ color: 'var(--text)' }}>HSBC Live+</strong> — dining + groceries (10%)</p>
              <p className="pt-1" style={{ color: 'var(--gold)' }}>Annual cost: ₹12,500 | Blended return: 3-5%</p>
            </div>
          </div>

          <h2 className="pt-6" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', letterSpacing: '-0.01em' }}>
            The cards we'd avoid in 2026
          </h2>

          <p>A few popular cards that look good on paper but don't deliver after the 2026 changes:</p>

          <div className="space-y-3">
            {[
              ['Axis Vistara cards', 'Vistara merged with Air India. These cards are in limbo with no clear loyalty program migration path.'],
              ['Any card with a product catalogue as the "best" redemption', 'If the highest value your card offers is ₹0.20-0.25/point via a catalogue, you\'re getting less than 1% return. Switch to a free cashback card.'],
              ['ICICI cards redeemed via iReward', 'The catalogue gives you roughly ₹0.15/point. Convert to InterMiles or use for travel vouchers instead.'],
            ].map(([name, reason], i) => (
              <div key={i} className="p-4 rounded-xl" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
                <p className="text-[13px] font-semibold mb-1" style={{ color: 'var(--red)' }}>✕ {name}</p>
                <p className="text-[13px] leading-relaxed" style={{ color: 'var(--text-s)' }}>{reason}</p>
              </div>
            ))}
          </div>

          <h2 className="pt-6" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', letterSpacing: '-0.01em' }}>
            How did we rank these?
          </h2>

          <p>
            Simple. We took the best available per-point value (using <a href="/" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>PointsMax data</a>) and multiplied it by the earn rate. That gives you the true percentage return per rupee spent. Then we factored in annual fee as a drag on total returns.
          </p>
          <p>
            We didn't consider welcome bonuses (one-time), milestone rewards (inconsistent), or lounge access (hard to value in rupees). Just: what do you actually get back, per rupee, over a year of normal spending.
          </p>
          <p>
            If you want to see the exact rupee value of your current card's points, <a href="/" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>check the calculator</a>. Select your card, plug in your balance, and see every option ranked.
          </p>

          {/* Bottom CTA */}
          <div className="p-6 rounded-2xl text-center mt-8" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <p className="text-[16px] font-semibold">Got points sitting on any of these cards?</p>
            <p className="text-[13px] mt-1 mb-4" style={{ color: 'rgba(250,248,245,0.5)' }}>See what they're worth — down to the last rupee.</p>
            <a href="/" className="inline-block px-6 py-2.5 rounded-xl text-[14px] font-semibold" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>Open PointsMax →</a>
          </div>

          <p className="text-[11px] mt-8 leading-relaxed" style={{ color: 'var(--text-m)' }}>
            <strong>Disclaimer:</strong> This article is for informational purposes only. Reward values, fees, and benefits change frequently. Always verify on your bank's website. PointsMax is not affiliated with any bank or card issuer. We do not earn commissions from card applications.
          </p>
        </div>
                <FeedbackWidget pageSlug="best-credit-cards-india-2026" pageTitle="best-credit-cards-india-2026" />
        </article>

      <footer className="py-10 px-5" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[12px]" style={{ color: 'var(--text-m)' }}>
            <a href="/" className="hover:text-black/40 transition-colors">PointsMax</a>
            <span className="mx-2">·</span>
            <a href="/about" className="hover:text-black/40 transition-colors">About</a>
            <span className="mx-2">·</span>
            <a href="/blog" className="hover:text-black/40 transition-colors">Blog</a>
            <span className="mx-2">·</span>
            <a href="/contact" className="hover:text-black/40 transition-colors">Contact</a>
            <span className="mx-2">·</span>
            <a href="/privacy" className="hover:text-black/40 transition-colors">Privacy</a>
            <span className="mx-2">·</span>
            <a href="/terms" className="hover:text-black/40 transition-colors">Terms</a>
          </p>
        </div>
      </footer>

      {showBar && (
        <div className="fixed bottom-0 left-0 right-0 z-50" style={{ background: 'var(--dark)', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '10px 16px' }}>
          <div className="max-w-2xl mx-auto flex items-center justify-between gap-3">
            <p className="text-[13px] hidden sm:block" style={{ color: 'rgba(250,248,245,0.6)' }}>Check your <strong style={{ color: '#FAF8F5' }}>card's</strong> real reward value</p>
            <p className="text-[13px] sm:hidden" style={{ color: 'rgba(250,248,245,0.6)' }}>Check your points value</p>
            <a href="/" className="shrink-0 px-4 py-2 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>Open Calculator →</a>
          </div>
        </div>
      )}
    </div>
  )
}
