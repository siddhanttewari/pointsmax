'use client'

import FeedbackWidget from '@/components/FeedbackWidget'
import PageNav from '@/components/PageNav'

import { useState, useEffect } from 'react'

const blogJsonLd = {
  '@context': 'https://schema.org', '@type': 'Product',
  name: 'HDFC Infinia Credit Card',
  brand: { '@type': 'Brand', name: 'HDFC Bank' },
  category: 'Credit Card',
  description: 'HDFC Infinia is a super-premium metal credit card offering ₹1 per reward point on SmartBuy travel, 22 airline/hotel transfer partners, and unlimited lounge access.',
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.5', bestRating: '5', worstRating: '1', reviewCount: '1' },
  review: {
    '@type': 'Review',
    reviewRating: { '@type': 'Rating', ratingValue: '4.5', bestRating: '5', worstRating: '1' },
    author: { '@type': 'Organization', name: 'PointsMax' },
    datePublished: '2026-05-21',
    reviewBody: 'HDFC Infinia remains the most valuable credit card in India in 2026, offering ₹1 per reward point on SmartBuy travel and 22 airline/hotel transfer partners. However, new monthly caps and an ₹18L annual spend requirement to retain the card make it less accessible than before.',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is HDFC Infinia credit card worth the ₹12,500 annual fee in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, if you spend over ₹5 lakh annually and redeem via SmartBuy travel at ₹1/point. At ₹12 lakh annual spend, you earn roughly ₹40,000 in rewards minus ₹12,500 fee = ₹27,500 net value. The fee is also waived on ₹10 lakh annual spend. Below ₹5 lakh spend, a lifetime-free card portfolio gives better net returns.' }},
    { '@type': 'Question', name: 'How to get HDFC Infinia credit card in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'HDFC Infinia is invite-only. You cannot apply directly. The most reliable paths are: upgrade from HDFC Regalia after spending ₹8-10 lakh annually for 12-18 months, maintain a ₹50 lakh+ banking relationship with HDFC, or have a salary account with ₹3 lakh+ monthly credit. From April 2026, you also need ₹18 lakh annual spend or ₹50 lakh relationship value to retain the card.' }},
    { '@type': 'Question', name: 'What are the HDFC Infinia transfer partners in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'HDFC Infinia has 22 transfer partners including Singapore Airlines KrisFlyer (1:1), Finnair Plus (1:1), British Airways Avios (1:1), Emirates Skywards (1:1), Air India Flying Returns (1:1), Japan Airlines (1:1), and Marriott Bonvoy (1:4). Turkish Airlines and Avianca were devalued from 1:1 to 2:1 in January 2026.' }},
    { '@type': 'Question', name: 'What is the HDFC Infinia reward point value in rupees?', acceptedAnswer: { '@type': 'Answer', text: 'One HDFC Infinia reward point equals ₹1 when redeemed for flights, hotels, Apple products, or Tanishq vouchers on SmartBuy. Gift vouchers give ₹0.50 per point. Statement credit gives ₹0.30 per point. Product catalogue gives only ₹0.20 per point.' }},
  ],
}

export default function BlogPost() {
  const [showBar, setShowBar] = useState(false)
  useEffect(() => {
    const fn = () => setShowBar(window.scrollY > 600)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const S = ({ children }) => <strong style={{ color: 'var(--text)' }}>{children}</strong>
  const H2 = ({ children }) => <h2 className="pt-6" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', letterSpacing: '-0.01em' }}>{children}</h2>
  const Tip = ({ title, children }) => <div className="p-4 rounded-xl" style={{ background: '#EDF5F0', border: '1px solid #C8DDD0' }}><p className="text-[13px] font-bold uppercase tracking-wide mb-2" style={{ color: 'var(--green)' }}>{title}</p><p className="text-[13px] leading-relaxed" style={{ color: 'var(--text-s)' }}>{children}</p></div>
  const Warn = ({ title, children }) => <div className="p-4 rounded-xl" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}><p className="text-[13px] font-bold mb-1" style={{ color: 'var(--red)' }}>{title}</p><p className="text-[13px] leading-relaxed" style={{ color: 'var(--text-s)' }}>{children}</p></div>

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <>
      <PageNav />
      <article className="max-w-2xl mx-auto px-5 py-12">
        <div className="flex items-center gap-2 mb-8 text-[13px]" style={{ color: 'var(--text-m)' }}>
          <a href="/" className="hover:text-black/50 transition-colors">PointsMax</a><span>/</span>
          <a href="/blog" className="hover:text-black/50 transition-colors">Blog</a><span>/</span>
          <span style={{ color: 'var(--text-s)' }}>HDFC Infinia Review</span>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded" style={{ color: '#2563eb', background: 'rgba(37,99,235,0.06)' }}>Card Review</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>May 21, 2026</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>12 min read</span>
        </div>

        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(24px, 4vw, 36px)', lineHeight: 1.15, letterSpacing: '-0.025em', color: 'var(--text)' }}>
          HDFC Infinia Credit Card Review 2026: Still India's Most Valuable Card?
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
          After monthly caps, retention requirements, and SmartBuy changes — is the Infinia still worth chasing? Here's the full picture with actual numbers.
        </p>

        {/* Quick verdict */}
        <div className="mt-8 p-5 rounded-2xl" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
          <div className="flex items-center justify-between mb-3">
            <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: 'rgba(250,248,245,0.4)' }}>Quick Verdict</p>
            <div className="flex items-center gap-1">
              {[1,2,3,4].map(i => <span key={i} style={{ color: 'var(--gold-l)' }}>★</span>)}
              <span style={{ color: 'rgba(250,248,245,0.2)' }}>★</span>
              <span className="text-[13px] font-mono font-bold ml-1" style={{ color: 'var(--gold-l)' }}>4.5/5</span>
            </div>
          </div>
          <p className="text-[14px] leading-relaxed" style={{ color: 'rgba(250,248,245,0.8)' }}>
            HDFC Infinia remains the single most valuable credit card in India. At ₹1/point on SmartBuy and 22 transfer partners, no other card comes close on rewards. But the ₹18 lakh annual spend retention requirement (effective April 2026) and new monthly redemption caps make it less of a "set and forget" card than it used to be. If you spend over ₹10 lakh/year and redeem via SmartBuy, it's still an easy yes. Below that threshold, HDFC Diners Club Black or Regalia Gold deliver similar value at lower stakes.
          </p>
        </div>

        <div className="mt-10 space-y-6 text-[15px] leading-[1.85]" style={{ color: 'var(--text-s)' }}>

          <H2>Who is HDFC Infinia for (and who should skip it)?</H2>
          <p><S>Infinia is for people who spend ₹10-30 lakh annually, travel at least twice a year, and will actually use SmartBuy for bookings.</S> If you hit all three, Infinia pays for itself many times over. If you spend ₹5 lakh a year, barely travel, and redeem through the catalogue — Infinia is a ₹12,500 annual fee for a card you're using at 20% of its potential.</p>
          <p>This card is invite-only, which means HDFC decides who gets it. You can't walk into a branch and apply. More on how to get the invite later in this review.</p>

          <H2>Fees: what does HDFC Infinia cost?</H2>
          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-[13px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <tbody>
                {[
                  ['Joining fee', '₹12,500 + GST'],
                  ['Annual fee', '₹12,500 + GST (waived on ₹10L spend)'],
                  ['Add-on card', 'Free (up to 4)'],
                  ['Welcome bonus', '12,500 reward points (= ₹12,500 on SmartBuy)'],
                  ['Forex markup', '2% + GST (net ~0.64% after Global Value Program cashback)'],
                  ['Interest rate', '3.49% per month (41.88% APR)'],
                  ['Retention requirement', '₹18L annual spend OR ₹50L banking relationship (from April 2026)'],
                ].map(([label, value], i) => (
                  <tr key={i}>
                    <td className="py-2.5 px-3 font-medium" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)', width: '40%' }}>{label}</td>
                    <td className="py-2.5 px-3" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>The welcome bonus of 12,500 points effectively makes the first year free — you get back ₹12,500 in SmartBuy value, which exactly offsets the joining fee. From year two, the fee is waived if you spend ₹10 lakh. Most Infinia holders clear this easily.</p>

          <H2>How much is 1 HDFC Infinia reward point worth?</H2>
          <p><S>It depends entirely on how you redeem.</S> The same point is worth anywhere from ₹0.20 to ₹1.00 — a 5x gap. Here's every redemption channel:</p>

          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-[13px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead><tr>
                <th className="text-left py-3 px-3 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Redemption method</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>₹/point</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Rating</th>
              </tr></thead>
              <tbody>
                {[
                  ['SmartBuy flights & hotels', '₹1.00', 'BEST', 'var(--green)'],
                  ['SmartBuy Apple products', '₹1.00', 'BEST', 'var(--green)'],
                  ['SmartBuy Tanishq vouchers', '₹1.00', 'BEST', 'var(--green)'],
                  ['Airline mile transfers (1:1)', '₹1.00-3.00*', 'BEST', 'var(--green)'],
                  ['SmartBuy brand vouchers (Gyftr)', '₹0.50', 'GOOD', 'var(--gold)'],
                  ['Gift vouchers (NetBanking)', '₹0.50', 'GOOD', 'var(--gold)'],
                  ['Statement credit / cashback', '₹0.30', 'AVOID', 'var(--red)'],
                  ['Product catalogue', '₹0.20', 'AVOID', 'var(--red)'],
                ].map(([method, val, rating, color], i) => (
                  <tr key={i}>
                    <td className="py-2.5 px-3 font-medium" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{method}</td>
                    <td className="py-2.5 px-2 text-center font-mono font-bold" style={{ color, borderBottom: '1px solid var(--border)' }}>{val}</td>
                    <td className="py-2.5 px-2 text-center" style={{ borderBottom: '1px solid var(--border)' }}>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded" style={{ color, background: color + '12' }}>{rating}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-[11px] mt-2" style={{ color: 'var(--text-m)' }}>*Airline transfer value depends on the booking. Business class redemptions on KrisFlyer can yield ₹1.90-4.00 per point. Economy yields ₹0.50-1.00.</p>
          </div>

          <Tip title="The rule">Always redeem via SmartBuy travel at ₹1/point. If you don't have travel to book, use SmartBuy vouchers (Amazon, Flipkart, BigBasket, Swiggy) at ₹0.50/point. Never touch the product catalogue.</Tip>

          <p>Want to see the exact calculation for your points balance? <a href="/" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>Run them through the PointsMax calculator</a> — select HDFC Infinia and enter your balance.</p>

          <H2>SmartBuy: how the rewards engine actually works</H2>
          <p>SmartBuy is HDFC's rewards portal and the reason Infinia exists. You earn <S>5 reward points per ₹150 spent</S> on all retail purchases (3.33% base rate). On SmartBuy, this accelerates to <S>10x for flights and hotels</S> and <S>5x for brand vouchers</S>.</p>
          <p>We wrote a detailed guide on maximizing SmartBuy — including the voucher hack, the 70/30 rule, and the 4 mistakes that waste your points. <a href="/blog/hdfc-smartbuy-guide-2026" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>Read the full HDFC SmartBuy Guide here</a>.</p>

          <H2>The 2026 changes: what got nerfed?</H2>
          <p>Infinia had a rough start to 2026. Here's every change that affects cardholders:</p>

          <div className="space-y-2">
            <Warn title="January 2026: SmartBuy voucher earn rate scare">HDFC announced a reduction from 5x to 3x on Gyftr vouchers. After backlash, this was effectively rolled back — 5x continues on vouchers as of January 16, 2026. But the scare signaled HDFC's intent to eventually reduce this.</Warn>
            <Warn title="February 2026: Monthly redemption caps">Redemptions capped at 5 times per month. Travel and airline mile redemptions capped at 1,50,000 points per month. Cashback capped at 50,000 points per month. Total cap: 2,00,000 points per statement cycle. If you're a heavy accumulator, plan your redemptions across months.</Warn>
            <Warn title="April 2026: Retention requirement">Cardholders now need ₹18 lakh annual spend (primary + add-on) OR ₹50 lakh banking relationship with HDFC to retain the card. Fall below both thresholds and you risk a downgrade to Regalia — where your points convert at roughly 1:0.6 and the per-point value drops to ₹0.30-0.50.</Warn>
            <Warn title="January 2026: Transfer partner devaluation">Turkish Airlines Miles&amp;Smiles and Avianca LifeMiles changed from 1:1 to 2:1. Effectively halved the value for these specific partners. Singapore Airlines KrisFlyer and Finnair Plus remain at 1:1.</Warn>
          </div>

          <H2>The 22 transfer partners: which ones matter?</H2>
          <p>HDFC Infinia's biggest advantage over every other Indian card is its transfer partner network. No other card comes close to 22 programs. But not all 22 are equally valuable. Here are the ones that actually matter:</p>

          <div className="space-y-2 mt-2">
            {[
              ['🇸🇬 Singapore Airlines KrisFlyer', '1:1', 'Star Alliance', 'The gold standard. No fuel surcharges. DEL-SIN business = 45,000 miles.'],
              ['🇫🇮 Finnair Plus (Avios)', '1:1', 'Oneworld', 'Free transfer to BA/Qatar/Iberia. The Avios hack gateway.'],
              ['🇦🇪 Emirates Skywards', '1:1', 'N/A', 'Premium product but high fuel surcharges. Best for first class.'],
              ['🇮🇳 Air India Flying Returns', '1:1', 'Star Alliance', 'Useful for domestic and Asia routes. Improving post-Tata merger.'],
              ['🇯🇵 Japan Airlines (JAL)', '1:1', 'Oneworld', 'Sweet spot for Japan routes. Low surcharges.'],
              ['🏨 Marriott Bonvoy', '1:4', 'Hotel', 'Ratio makes it expensive. Only worth it for 5-night packages.'],
            ].map(([name, ratio, alliance, note], i) => (
              <div key={i} className="p-3.5 rounded-xl flex items-start gap-3" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[13px] font-semibold" style={{ color: 'var(--text)' }}>{name}</span>
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded" style={{ color: 'var(--green)', background: 'rgba(45,106,79,0.08)' }}>{ratio}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded" style={{ color: 'var(--text-m)', background: 'var(--bg-s)' }}>{alliance}</span>
                  </div>
                  <p className="text-[12px] mt-1" style={{ color: 'var(--text-m)' }}>{note}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3">See all 22 partners with current ratios on the <a href="/transfers" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>Transfer Partners directory</a>. We also wrote a detailed guide on <a href="/blog/credit-card-airline-miles-transfer-india-2026" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>when to transfer vs use the travel portal</a>.</p>

          {/* Mid-article CTA */}
          <div className="p-5 rounded-xl my-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <div>
              <p className="text-[14px] font-semibold">Got Infinia reward points?</p>
              <p className="text-[12px] mt-1" style={{ color: 'rgba(250,248,245,0.5)' }}>See every redemption option ranked by ₹ value — SmartBuy, transfers, vouchers, everything.</p>
            </div>
            <a href="/" className="shrink-0 px-5 py-2.5 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>Check My Points →</a>
          </div>

          <H2>Travel and lifestyle benefits</H2>
          <p>Beyond rewards, Infinia packs genuine travel utility:</p>
          <ul className="space-y-2 pl-1" style={{ listStyleType: 'none' }}>
            <li className="flex gap-2"><span style={{ color: 'var(--green)' }}>✓</span><span><S>Unlimited domestic and international lounge access</S> — primary and add-on cardholders. No cap on visits.</span></li>
            <li className="flex gap-2"><span style={{ color: 'var(--green)' }}>✓</span><span><S>2% forex markup + 1% cashback via Global Value Program</S> — net cost of ~0.64% on international transactions. Among the lowest in India.</span></li>
            <li className="flex gap-2"><span style={{ color: 'var(--green)' }}>✓</span><span><S>Club Marriott membership</S> — complimentary first year. Gives dining discounts and room upgrades at Marriott properties.</span></li>
            <li className="flex gap-2"><span style={{ color: 'var(--green)' }}>✓</span><span><S>Unlimited golf games and lessons</S> at select courses across India.</span></li>
            <li className="flex gap-2"><span style={{ color: 'var(--green)' }}>✓</span><span><S>₹3 crore air accident cover</S> and ₹50 lakh overseas medical insurance.</span></li>
            <li className="flex gap-2"><span style={{ color: 'var(--green)' }}>✓</span><span><S>24/7 global concierge service</S> — restaurant bookings, travel planning, event tickets.</span></li>
          </ul>

          <H2>How to get the HDFC Infinia: the invite playbook</H2>
          <p>You cannot apply for Infinia directly. HDFC decides who gets the invite. But there are patterns that work:</p>
          <div className="space-y-3 mt-2">
            {[
              ['Path 1: Upgrade from Regalia', 'Get HDFC Regalia (much easier to get). Spend ₹8-10 lakh annually for 12-18 months. Maintain clean payment history. HDFC auto-upgrades active, high-spending Regalia users. This is the most reliable path.'],
              ['Path 2: Banking relationship', 'Maintain ₹50 lakh+ across HDFC savings, FD, demat, or mutual funds. The relationship manager will proactively offer Infinia. Some users report getting invited at ₹30-40 lakh total relationship.'],
              ['Path 3: Salary account', 'If your company banks with HDFC and your monthly salary credit is ₹3 lakh+, you may get an Infinia offer within 6-12 months of account opening.'],
              ['Path 4: Ask your RM', 'If you have an HDFC relationship manager, simply ask. The worst they say is no. But if your profile is borderline, a direct request can tip the decision.'],
            ].map(([path, detail], i) => (
              <div key={i} className="flex gap-3">
                <span className="text-[14px] font-mono font-bold shrink-0 w-7 h-7 grid place-items-center rounded-lg" style={{ color: 'var(--gold)', background: 'rgba(184,149,62,0.08)' }}>{i + 1}</span>
                <div><p className="text-[14px] font-semibold" style={{ color: 'var(--text)' }}>{path}</p><p className="text-[13px] mt-0.5" style={{ color: 'var(--text-s)' }}>{detail}</p></div>
              </div>
            ))}
          </div>

          <H2>The breakeven math: when does Infinia pay for itself?</H2>
          <p>Let's do the actual calculation at different spend levels:</p>
          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-[13px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead><tr>
                <th className="text-left py-3 px-3 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Annual spend</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Points earned</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>SmartBuy value</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Minus fee</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Net value</th>
              </tr></thead>
              <tbody>
                {[
                  ['₹5L', '16,667', '₹16,667', '₹12,500', '₹4,167'],
                  ['₹10L', '33,333', '₹33,333', '₹0*', '₹33,333'],
                  ['₹15L', '50,000', '₹50,000', '₹0*', '₹50,000'],
                  ['₹20L', '66,667', '₹66,667', '₹0*', '₹66,667'],
                ].map(([spend, pts, val, fee, net], i) => (
                  <tr key={i}>
                    <td className="py-2.5 px-3 font-medium" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{spend}</td>
                    <td className="py-2.5 px-2 text-center font-mono" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>{pts}</td>
                    <td className="py-2.5 px-2 text-center font-mono font-bold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>{val}</td>
                    <td className="py-2.5 px-2 text-center font-mono" style={{ color: 'var(--red)', borderBottom: '1px solid var(--border)' }}>{fee}</td>
                    <td className="py-2.5 px-2 text-center font-mono font-bold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>{net}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-[11px] mt-2" style={{ color: 'var(--text-m)' }}>*Fee waived at ₹10L spend. Points calculated at base rate of 5 RP per ₹150. SmartBuy bonus points earned on top. Actual returns will be higher with SmartBuy bookings.</p>
          </div>
          <p>At ₹10 lakh spend (fee waived), you're getting ₹33,333 in free rewards — a 3.3% return with zero cost. That's hard to beat with any other card in India.</p>

          <H2>HDFC Infinia vs Diners Club Black: which one?</H2>
          <p>This is the most common question because both cards share the same reward rate (3.33%) and the same 22 transfer partners. The differences are small but real:</p>
          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-[13px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead><tr>
                <th className="text-left py-3 px-3 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}></th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Infinia</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Diners Black</th>
              </tr></thead>
              <tbody>
                {[
                  ['Annual fee', '₹12,500', '₹10,000'],
                  ['Fee waiver', '₹10L spend', '₹5L spend'],
                  ['Reward rate', '3.33%', '3.33%'],
                  ['Per-point SmartBuy', '₹1.00', '₹1.00'],
                  ['Transfer partners', '22', '22'],
                  ['Network', 'Visa Infinite', 'Diners Club'],
                  ['Metal card', 'Yes', 'No'],
                  ['International acceptance', 'Universal', 'Limited in some countries'],
                  ['Retention requirement', '₹18L or ₹50L relationship', 'Less strict'],
                ].map(([label, inf, dcb], i) => (
                  <tr key={i}>
                    <td className="py-2.5 px-3 font-medium" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{label}</td>
                    <td className="py-2.5 px-2 text-center" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>{inf}</td>
                    <td className="py-2.5 px-2 text-center" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>{dcb}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p><S>Our take:</S> If you travel internationally a lot, get Infinia — Visa Infinite is accepted everywhere, Diners Club isn't. If you mostly spend domestically and want the same rewards at a lower fee and easier waiver, Diners Club Black is the smarter pick. The rewards are identical.</p>

          <H2>Alternatives if you can't get Infinia</H2>
          <p>Infinia is invite-only and the retention bar is high. If you can't get it or don't want the ₹18L spend pressure, here are the realistic alternatives:</p>
          <ul className="space-y-2 pl-1" style={{ listStyleType: 'none' }}>
            <li className="flex gap-2"><span style={{ color: 'var(--gold)' }}>→</span><span><S>HDFC Diners Club Black</S> — same rewards, same transfers, lower fee, easier to get. The best Infinia alternative.</span></li>
            <li className="flex gap-2"><span style={{ color: 'var(--gold)' }}>→</span><span><S>HDFC Regalia Gold</S> — ₹0.50/point on SmartBuy, 5x on vouchers. Much lower barrier to entry at ₹2,500 fee.</span></li>
            <li className="flex gap-2"><span style={{ color: 'var(--gold)' }}>→</span><span><S>Axis Atlas</S> — ₹0.50/point on Travel EDGE, some transfer partners still active. ₹5,000 fee. Good for Axis banking customers.</span></li>
            <li className="flex gap-2"><span style={{ color: 'var(--gold)' }}>→</span><span><S>Amex Gold</S> — ₹0.50-1.00/point via airline transfers. Good for international travellers. ₹9,000 fee.</span></li>
          </ul>
          <p>Compare all these cards side-by-side in our <a href="/blog/best-credit-cards-india-2026" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>Best Credit Cards India 2026 guide</a>.</p>

          <H2>Common Infinia mistakes that waste points</H2>
          <div className="space-y-3">
            <Warn title="✕ Redeeming via product catalogue">Gives you ₹0.20/point. SmartBuy gives ₹1/point. The catalogue is 80% value destruction. There is no scenario where this is the right choice.</Warn>
            <Warn title="✕ Not using the voucher hack for everyday spending">Every direct swipe at a store earns 1x. Buying a SmartBuy voucher first earns 5x. Two extra minutes, 5x the points. We explain exactly how in the SmartBuy guide.</Warn>
            <Warn title="✕ Hoarding points beyond 3 years">Infinia points expire 3 years from accrual date. People forget. Banks devalue. Use your points — the best time to redeem was yesterday.</Warn>
            <Warn title="✕ Transferring to Turkish or Avianca post-2026">Both went from 1:1 to 2:1. Unless you have a very specific routing, KrisFlyer at 1:1 is strictly better for Star Alliance redemptions.</Warn>
          </div>

          <H2>The bottom line</H2>
          <p>HDFC Infinia is still the best credit card in India in 2026. The ₹1/point SmartBuy value, 22 transfer partners (with KrisFlyer and Finnair still at 1:1), unlimited lounge access, and low forex markup create a package no other card matches.</p>
          <p>But — and this is a real but — the April 2026 retention requirement means you now need to justify ₹18 lakh annual spend or a ₹50 lakh banking relationship just to keep the card. That changes Infinia from "the best card for high spenders" to "the best card for high spenders who can prove it."</p>
          <p>If you're at ₹10 lakh+ annual spend and use SmartBuy, Infinia is an easy yes. If you're below that or don't want the retention pressure, Diners Club Black gives you 95% of the same value at 70% of the commitment.</p>

          <p className="mt-4"><S>3 things to do right now:</S></p>
          <div className="space-y-2 mt-2">
            <div className="flex gap-3"><span className="w-6 h-6 rounded-full grid place-items-center text-[12px] font-bold shrink-0" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>1</span><p><a href="/" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>Check your Infinia points value</a> — see exactly what your balance is worth across every redemption method.</p></div>
            <div className="flex gap-3"><span className="w-6 h-6 rounded-full grid place-items-center text-[12px] font-bold shrink-0" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>2</span><p>Read the <a href="/blog/hdfc-smartbuy-guide-2026" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>SmartBuy guide</a> — learn the voucher hack and the 70/30 compounding loop.</p></div>
            <div className="flex gap-3"><span className="w-6 h-6 rounded-full grid place-items-center text-[12px] font-bold shrink-0" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>3</span><p>Check if you're hitting the ₹18 lakh threshold — if not, either increase SmartBuy routing or consider a pre-emptive switch to Diners Black.</p></div>
          </div>

          {/* Bottom CTA */}
          <div className="p-6 rounded-2xl text-center mt-8" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <p className="text-[16px] font-semibold">See your HDFC Infinia points value</p>
            <p className="text-[13px] mt-1 mb-4" style={{ color: 'rgba(250,248,245,0.5)' }}>SmartBuy, transfers, vouchers, catalogue — every method ranked by ₹ value.</p>
            <a href="/" className="inline-block px-6 py-2.5 rounded-xl text-[14px] font-semibold" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>Open PointsMax Calculator →</a>
          </div>

          <p className="text-[11px] mt-8 leading-relaxed" style={{ color: 'var(--text-m)' }}>
            <strong>Disclaimer:</strong> This review is based on publicly available information from HDFC Bank's website, SmartBuy portal, and reward program terms as of May 2026. Fees, earn rates, transfer ratios, and benefits change without notice. Always verify current terms at hdfcbank.com. PointsMax is not affiliated with HDFC Bank. We do not earn commissions from card applications. This is not financial advice.
          </p>
        </div>
                <FeedbackWidget pageSlug="hdfc-infinia-credit-card-review-2026" pageTitle="hdfc-infinia-credit-card-review-2026" />
        </article>

      <footer className="py-10 px-5" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[12px]" style={{ color: 'var(--text-m)' }}>
            <a href="/" className="hover:text-black/40 transition-colors">PointsMax</a><span className="mx-2">·</span>
            <a href="/transfers" className="hover:text-black/40 transition-colors">Transfers</a><span className="mx-2">·</span>
            <a href="/blog" className="hover:text-black/40 transition-colors">Blog</a><span className="mx-2">·</span>
            <a href="/privacy" className="hover:text-black/40 transition-colors">Privacy</a>
          </p>
        </div>
      </footer>

      {showBar && (
        <div className="fixed bottom-0 left-0 right-0 z-50" style={{ background: 'var(--dark)', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '10px 16px' }}>
          <div className="max-w-2xl mx-auto flex items-center justify-between gap-3">
            <p className="text-[13px] hidden sm:block" style={{ color: 'rgba(250,248,245,0.6)' }}>Check your <strong style={{ color: '#FAF8F5' }}>Infinia points</strong> value</p>
            <p className="text-[13px] sm:hidden" style={{ color: 'rgba(250,248,245,0.6)' }}>Check Infinia points</p>
            <a href="/" className="shrink-0 px-4 py-2 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>Open Calculator →</a>
          </div>
        </div>
      )}
    </div>
  )
}
