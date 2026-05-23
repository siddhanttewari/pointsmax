'use client'

import { useState, useEffect } from 'react'
import FeedbackWidget from '@/components/FeedbackWidget'

const blogJsonLd = {
  '@context': 'https://schema.org', '@type': 'Product',
  name: 'HDFC Diners Club Black Credit Card',
  brand: { '@type': 'Brand', name: 'HDFC Bank' },
  category: 'Credit Card',
  description: 'HDFC Diners Club Black offers the same 3.33% reward rate as Infinia at a lower ₹10,000 fee, waived at ₹8L spend. Includes 22 transfer partners, unlimited lounges, and complimentary subscriptions.',
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.3', bestRating: '5', worstRating: '1', reviewCount: '1' },
  review: {
    '@type': 'Review',
    reviewRating: { '@type': 'Rating', ratingValue: '4.3', bestRating: '5', worstRating: '1' },
    author: { '@type': 'Organization', name: 'PointsMax' },
    datePublished: '2026-05-25',
    reviewBody: 'HDFC Diners Club Black delivers the same reward rate as Infinia at ₹10,000/year with a lower fee waiver threshold of ₹8 lakh. The main limitation is the Diners Club payment network which is not universally accepted internationally.',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is HDFC Diners Club Black better than HDFC Infinia?', acceptedAnswer: { '@type': 'Answer', text: 'For most India-based cardholders, HDFC Diners Club Black is the smarter pick. It offers identical rewards (3.33% via SmartBuy, ₹1/point, 22 transfer partners) at ₹10,000/year versus Infinia\'s ₹12,500, with a lower fee waiver threshold of ₹8 lakh versus ₹10 lakh. The only scenario where Infinia wins is heavy international travel — Visa Infinite is accepted everywhere, Diners Club is not accepted at some merchants outside the Americas.' }},
    { '@type': 'Question', name: 'What is the HDFC Diners Club Black annual fee and how to waive it?', acceptedAnswer: { '@type': 'Answer', text: 'The HDFC Diners Club Black annual fee is ₹10,000 plus GST. It is waived when annual spending on the card reaches ₹8 lakh. This means the card is effectively free for anyone spending above ₹67,000 per month on the card.' }},
    { '@type': 'Question', name: 'What are the complimentary subscriptions on HDFC Diners Club Black?', acceptedAnswer: { '@type': 'Answer', text: 'HDFC Diners Club Black offers complimentary Amazon Prime, Club Marriott, Times Prime, Swiggy One, and MMT Black memberships on achieving ₹8 lakh annual spend. Monthly milestone benefits include 2 vouchers worth ₹500 each from BookMyShow, TataCLiQ, Ola, or cult.fit on spending ₹80,000 per month.' }},
  ],
}

export default function BlogPost() {
  const [showBar, setShowBar] = useState(false)
  useEffect(() => {
    const fn = () => setShowBar(window.scrollY > 600)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const H2 = ({ children }) => <h2 className="pt-6" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', letterSpacing: '-0.01em' }}>{children}</h2>
  const S = ({ children }) => <strong style={{ color: 'var(--text)' }}>{children}</strong>

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <article className="max-w-2xl mx-auto px-5 py-12">
        <div className="flex items-center gap-2 mb-8 text-[13px]" style={{ color: 'var(--text-m)' }}>
          <a href="/" className="hover:text-black/50 transition-colors">PointsMax</a><span>/</span>
          <a href="/blog" className="hover:text-black/50 transition-colors">Blog</a><span>/</span>
          <span style={{ color: 'var(--text-s)' }}>Diners Club Black Review</span>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded" style={{ color: '#2563eb', background: 'rgba(37,99,235,0.06)' }}>Card Review</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>May 25, 2026</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>10 min read</span>
        </div>

        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(24px, 4vw, 36px)', lineHeight: 1.15, letterSpacing: '-0.025em', color: 'var(--text)' }}>
          HDFC Diners Club Black Review 2026: The Accessible Infinia (With One Catch)
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
          Same rewards as Infinia. Lower fee. Easier to get. So why doesn't everyone have this card? There's one thing that trips people up — and it's not what you think.
        </p>

        {/* Quick verdict */}
        <div className="mt-8 p-5 rounded-2xl" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
          <div className="flex items-center justify-between mb-3">
            <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: 'rgba(250,248,245,0.4)' }}>Quick Verdict</p>
            <div className="flex items-center gap-1">
              {[1,2,3,4].map(i => <span key={i} style={{ color: 'var(--gold-l)' }}>★</span>)}
              <span style={{ color: 'rgba(250,248,245,0.25)' }}>★</span>
              <span className="text-[13px] font-mono font-bold ml-1" style={{ color: 'var(--gold-l)' }}>4.3/5</span>
            </div>
          </div>
          <p className="text-[14px] leading-relaxed" style={{ color: 'rgba(250,248,245,0.8)' }}>
            HDFC Diners Club Black is the best premium credit card in India for most people who can't get Infinia — identical rewards at ₹2,500 less annual fee, with a lower spend threshold for fee waiver. The 4.3 instead of 4.5 is entirely because of the Diners Club acceptance network, which is not universally recognised outside India and the Americas. If you travel domestically or to the US/UK, this limitation rarely matters. If you travel to Southeast Asia or the Middle East frequently, it can be genuinely annoying.
          </p>
        </div>

        <div className="mt-10 space-y-6 text-[15px] leading-[1.85]" style={{ color: 'var(--text-s)' }}>

          <p>HDFC Bank has two super-premium cards: Infinia and Diners Club Black. Most review sites treat them as completely different cards. They're not. They're <S>functionally the same card with different plastic.</S></p>
          <p>Same reward rate (3.33%). Same SmartBuy earn rate (10X on flights/hotels). Same per-point value (₹1 on SmartBuy). Same 22 transfer partners. Same unlimited lounge access. Same golf, same concierge, same insurance.</p>
          <p>The differences are: Infinia costs ₹12,500 (waived at ₹10L spend), Diners Black costs ₹10,000 (waived at ₹8L spend). Infinia is invite-only. Diners Black you can apply for directly. Infinia is Visa Infinite. Diners Black runs on the Diners Club network.</p>
          <p>That last point — the Diners Club network — is the one catch. Let's cover everything else first, then come back to it.</p>

          <H2>Fees and eligibility</H2>
          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-[13px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <tbody>
                {[
                  ['Joining fee', '₹10,000 + GST'],
                  ['Annual fee', '₹10,000 + GST (waived on ₹8L annual spend)'],
                  ['Add-on cards', 'Free (up to 3)'],
                  ['Welcome benefit', 'Amazon Prime, Club Marriott, Times Prime, Swiggy One memberships'],
                  ['Forex markup', '2% + GST (~2.36%)'],
                  ['Minimum income (salaried)', '₹2.5 lakh per month'],
                  ['Minimum income (self-employed)', '₹30 lakh per annum ITR'],
                  ['How to apply', 'Direct application — not invite-only'],
                ].map(([l, v], i) => (
                  <tr key={i}>
                    <td className="py-2.5 px-3 font-medium" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)', width: '40%' }}>{l}</td>
                    <td className="py-2.5 px-3" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>The ₹8L fee waiver threshold is genuinely achievable — that's ₹67,000/month on the card. For someone routing grocery, fuel, dining, travel, and online shopping through one card, this is very doable. At that spend level, the card is effectively free and returns ₹26,667/year in SmartBuy rewards.</p>

          <H2>The reward structure: identical to Infinia</H2>
          <p>This is where Diners Black surprises people. The reward engine is exactly the same as Infinia:</p>

          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-[13px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead><tr>
                <th className="text-left py-3 px-3 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Redemption method</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>₹/point</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Earn rate</th>
              </tr></thead>
              <tbody>
                {[
                  ['SmartBuy flights & hotels', '₹1.00', '10X on SmartBuy'],
                  ['SmartBuy Apple products', '₹1.00', '10X on SmartBuy'],
                  ['Airline mile transfers (1:1)', '₹1.00-3.00*', '5X base'],
                  ['SmartBuy vouchers (Gyftr)', '₹0.50', '3X on SmartBuy'],
                  ['Gift vouchers', '₹0.50', '5X base'],
                  ['Statement credit', '₹0.30', '5X base'],
                  ['Product catalogue', '₹0.20', '5X base'],
                ].map(([m, v, e], i) => (
                  <tr key={i}>
                    <td className="py-2.5 px-3 font-medium" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{m}</td>
                    <td className="py-2.5 px-2 text-center font-mono font-bold" style={{ color: i < 3 ? 'var(--green)' : i > 4 ? 'var(--red)' : 'var(--gold)', borderBottom: '1px solid var(--border)' }}>{v}</td>
                    <td className="py-2.5 px-2 text-center font-mono" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>{e}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-[11px] mt-2" style={{ color: 'var(--text-m)' }}>*SmartBuy bonus points capped at 7,500 per calendar month. Base earn: 5 RP per ₹150 spent.</p>
          </div>

          <p>The only difference from Infinia: <S>Diners Black earns 3X on SmartBuy vouchers vs Infinia's 5X.</S> If the voucher hack is a big part of your strategy (buying Amazon/BigBasket/Swiggy vouchers on SmartBuy for accelerated points), Infinia pulls ahead here. For everything else — travel bookings, airline transfers, base spend — they're identical.</p>
          <p>Check what your Diners Black points are worth right now using the <a href="/" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>PointsMax calculator</a>.</p>

          <H2>The complimentary subscriptions: genuinely valuable</H2>
          <p>This is where Diners Black pulls ahead of Infinia on paper. On achieving ₹8 lakh annual spend, you get:</p>

          <div className="grid grid-cols-2 gap-2 mt-2">
            {[
              { name: 'Amazon Prime', value: '₹1,499/yr', icon: '📦' },
              { name: 'Club Marriott', value: '₹7,000+/yr', icon: '🏨' },
              { name: 'Times Prime', value: '₹999/yr', icon: '📰' },
              { name: 'Swiggy One', value: '₹399/yr', icon: '🍔' },
              { name: 'MMT Black', value: '₹2,999/yr', icon: '✈️' },
              { name: 'BookMyShow/OLA/TataCLiQ vouchers', value: '₹1,000/mo*', icon: '🎬' },
            ].map((s, i) => (
              <div key={i} className="p-3 rounded-lg" style={{ background: 'var(--bg-s)', border: '1px solid var(--border)' }}>
                <p className="text-[13px] font-semibold" style={{ color: 'var(--text)' }}>{s.icon} {s.name}</p>
                <p className="text-[11px] mt-0.5" style={{ color: 'var(--green)' }}>{s.value}</p>
              </div>
            ))}
          </div>
          <p className="text-[12px] mt-2" style={{ color: 'var(--text-m)' }}>*2 × ₹500 vouchers per month on ₹80,000 monthly spend. That's ₹12,000/year additional value.</p>

          <p>At face value: Amazon Prime (₹1,499) + Club Marriott (₹7,000+) + Times Prime (₹999) + Swiggy One (₹399) + MMT Black (₹2,999) = <S>₹12,896 in subscription value</S> — more than the ₹10,000 annual fee, before counting a single reward point.</p>

          <p>The practical caveat: you need to actually use these. Club Marriott is only valuable if you stay at Marriott properties. Times Prime is useful if you read ET or use their partner apps. Don't count subscriptions you won't use when calculating card value.</p>

          <div className="p-4 rounded-xl mt-2" style={{ background: '#EDF5F0', border: '1px solid #C8DDD0' }}>
            <p className="text-[13px] font-semibold mb-1" style={{ color: 'var(--green)' }}>Honest subscription value for most users</p>
            <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>Amazon Prime (₹1,499) + Swiggy One (₹399) = ₹1,898 that nearly everyone will use. Club Marriott and MMT Black are high-value only if you travel and stay at premium hotels regularly. Be conservative in your mental math.</p>
          </div>

          {/* Mid-article CTA */}
          <div className="p-5 rounded-xl my-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <div>
              <p className="text-[14px] font-semibold">Have Diners Club Black reward points?</p>
              <p className="text-[12px] mt-1" style={{ color: 'rgba(250,248,245,0.5)' }}>See every redemption option ranked by ₹ value — SmartBuy, transfers, vouchers.</p>
            </div>
            <a href="/" className="shrink-0 px-5 py-2.5 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>Check My Points →</a>
          </div>

          <H2>The 22 transfer partners: same as Infinia</H2>
          <p>Diners Club Black has access to all 22 transfer partners including Singapore Airlines KrisFlyer (1:1), Finnair Plus (1:1), Emirates Skywards (1:1), Air India Flying Returns (1:1), and Marriott Bonvoy (1:4).</p>
          <p>The devalued partners (Turkish Airlines and Avianca at 2:1 since January 2026) apply to Diners Black too — same as Infinia. See the full <a href="/transfers" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>transfer partners directory</a> for current ratios.</p>
          <p>Our <a href="/blog/credit-card-airline-miles-transfer-india-2026" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>complete airline transfers guide</a> covers which transfers are worth it and which to avoid — all of it applies identically to Diners Black.</p>

          <H2>The milestone benefits</H2>
          <p>Diners Black has a tiered milestone system that adds value on top of base rewards:</p>
          <ul className="space-y-2 pl-1" style={{ listStyleType: 'none' }}>
            <li className="flex gap-2"><span style={{ color: 'var(--gold)' }}>→</span><span><S>₹80,000/month spend:</S> 2 vouchers worth ₹500 each from BookMyShow, TataCLiQ, Ola, or cult.fit. That's ₹1,000/month = ₹12,000/year if you hit this every month.</span></li>
            <li className="flex gap-2"><span style={{ color: 'var(--gold)' }}>→</span><span><S>₹4 lakh/quarter spend:</S> 10,000 bonus reward points (worth ₹10,000 on SmartBuy). Hitting this every quarter adds ₹40,000/year in bonus rewards.</span></li>
            <li className="flex gap-2"><span style={{ color: 'var(--gold)' }}>→</span><span><S>₹8 lakh/year spend:</S> All complimentary subscriptions unlocked.</span></li>
          </ul>
          <p>For someone spending ₹3-4 lakh/month, the quarterly milestone (₹4L in 3 months) is easily achievable — that's ₹40,000/year in additional free SmartBuy value, on top of the base rewards.</p>

          <H2>The catch: the Diners Club network</H2>
          <p>Here it is. The one thing that makes some people choose Infinia over Diners Black despite the higher fee.</p>
          <p><S>Diners Club is not universally accepted internationally.</S> In India, it works fine — all major merchants, online platforms, and SmartBuy accept it. In the US and UK, it's widely accepted (Diners Club has strong penetration there). But in Southeast Asia (Thailand, Vietnam, Indonesia, Malaysia), parts of the Middle East, and some European countries, you may encounter merchants that don't accept Diners Club.</p>
          <p>How often does this actually happen? Less than you'd think. Major hotels, airlines, and online platforms accept Diners Club nearly everywhere. The problem is more likely to surface at smaller restaurants, local stores, or niche merchants in these regions.</p>
          <p>The practical workaround: carry a Visa or Mastercard as backup when travelling internationally. A free Scapia Federal card (Visa, zero forex markup) handles this perfectly — use Diners Black where accepted for 3.33% return, fall back to Scapia for the rare merchant that doesn't accept Diners.</p>

          <H2>Diners Club Black vs Infinia: the honest comparison</H2>
          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-[13px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead><tr>
                <th className="text-left py-3 px-3 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}></th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Diners Black</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Infinia</th>
              </tr></thead>
              <tbody>
                {[
                  ['Annual fee', '₹10,000', '₹12,500'],
                  ['Fee waiver spend', '₹8 lakh', '₹10 lakh'],
                  ['Reward rate', '3.33%', '3.33%'],
                  ['SmartBuy flights/hotels', '10X', '10X'],
                  ['SmartBuy vouchers', '3X', '5X'],
                  ['Per-point SmartBuy value', '₹1.00', '₹1.00'],
                  ['Transfer partners', '22', '22'],
                  ['Lounge access', 'Unlimited', 'Unlimited'],
                  ['Subscriptions', 'Amazon Prime, Club Marriott, Times Prime, Swiggy One, MMT Black', 'Club Marriott only'],
                  ['Forex markup', '2% + GST', '2% + GST'],
                  ['Network', 'Diners Club', 'Visa Infinite'],
                  ['How to get', 'Direct application', 'Invite only'],
                  ['Retention requirement', 'Less strict', '₹18L/yr or ₹50L relationship'],
                ].map(([l, dcb, inf], i) => (
                  <tr key={i}>
                    <td className="py-2.5 px-3 font-medium" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{l}</td>
                    <td className="py-2.5 px-2 text-center text-[12px]" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)', fontWeight: 500 }}>{dcb}</td>
                    <td className="py-2.5 px-2 text-center text-[12px]" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>{inf}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4"><S>Our take:</S> Diners Black wins on paper — lower fee, lower fee waiver threshold, more complimentary subscriptions, no invite needed, less aggressive retention requirements. Infinia wins in one scenario: if you travel heavily to regions where Diners Club acceptance is patchy and you don't want to carry a backup card.</p>
          <p>For most Indians who travel primarily domestic + UK/US + a few Southeast Asian trips, <S>Diners Black is the better choice.</S></p>

          <H2>Who should get HDFC Diners Club Black?</H2>
          <ul className="space-y-2 pl-1" style={{ listStyleType: 'none' }}>
            <li className="flex gap-2"><span style={{ color: 'var(--green)' }}>✓</span><span><S>You want Infinia-level rewards but can't get Infinia.</S> Direct application possible at ₹2.5L/month salaried or ₹30L/year self-employed income.</span></li>
            <li className="flex gap-2"><span style={{ color: 'var(--green)' }}>✓</span><span><S>You spend ₹5-15 lakh/year on a single card.</S> The reward rate is unmatched in this tier and the fee waiver at ₹8L is achievable.</span></li>
            <li className="flex gap-2"><span style={{ color: 'var(--green)' }}>✓</span><span><S>You book travel via SmartBuy.</S> 10X on flights/hotels at ₹1/point = 6.67% effective return on travel.</span></li>
            <li className="flex gap-2"><span style={{ color: 'var(--green)' }}>✓</span><span><S>You want complimentary Amazon Prime and Swiggy One.</S> At minimum, these two subscriptions (₹1,898/yr) significantly offset the fee.</span></li>
          </ul>

          <H2>Who should skip it?</H2>
          <ul className="space-y-2 pl-1" style={{ listStyleType: 'none' }}>
            <li className="flex gap-2"><span style={{ color: 'var(--red)' }}>✕</span><span><S>You travel frequently to Southeast Asia without a backup card.</S> Diners Club acceptance is inconsistent in Thailand, Vietnam, Indonesia. Get Infinia or carry a Visa as backup.</span></li>
            <li className="flex gap-2"><span style={{ color: 'var(--red)' }}>✕</span><span><S>You spend under ₹3 lakh/year.</S> The fee won't be waived and the rewards won't justify the cost. Consider the <a href="/blog/best-lifetime-free-credit-cards-india-2026" style={{ color: 'var(--red)', textDecoration: 'underline' }}>free card stack</a> instead.</span></li>
            <li className="flex gap-2"><span style={{ color: 'var(--red)' }}>✕</span><span><S>You already have HDFC Infinia.</S> No reason to hold both — they're the same card.</span></li>
          </ul>

          <H2>The bottom line</H2>
          <p>HDFC Diners Club Black is the most underrated premium credit card in India. It matches Infinia on every metric that matters — reward rate, per-point value, transfer partners, lounge access — at a lower fee with easier eligibility and lower retention requirements.</p>
          <p>The Diners Club network limitation is real but manageable with a free backup Visa card. For most people, this is a non-issue 95% of the time.</p>
          <p>If you can't get Infinia or don't want the ₹18L spend pressure to retain it, Diners Club Black is the answer. Apply directly, spend ₹8L/year to waive the fee, book travel via SmartBuy, and you're running one of the highest reward-rate cards available in India at effectively zero cost.</p>

          <p className="mt-4"><S>3 actions:</S></p>
          <div className="space-y-2 mt-2">
            <div className="flex gap-3"><span className="w-6 h-6 rounded-full grid place-items-center text-[12px] font-bold shrink-0" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>1</span><p><a href="/" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>Check your Diners Black points value</a> — make sure you're using SmartBuy and not the catalogue.</p></div>
            <div className="flex gap-3"><span className="w-6 h-6 rounded-full grid place-items-center text-[12px] font-bold shrink-0" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>2</span><p>Read the <a href="/blog/hdfc-smartbuy-guide-2026" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>SmartBuy guide</a> to maximise 10X on travel and vouchers.</p></div>
            <div className="flex gap-3"><span className="w-6 h-6 rounded-full grid place-items-center text-[12px] font-bold shrink-0" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>3</span><p>If you travel internationally often, get a free <a href="/blog/best-lifetime-free-credit-cards-india-2026" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>Scapia Federal</a> as your backup Visa for the rare Diners Club non-acceptance scenario.</p></div>
          </div>

          <div className="p-6 rounded-2xl text-center mt-8" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <p className="text-[16px] font-semibold">Check your Diners Black points value</p>
            <p className="text-[13px] mt-1 mb-4" style={{ color: 'rgba(250,248,245,0.5)' }}>SmartBuy, airline transfers, vouchers — every method ranked.</p>
            <a href="/" className="inline-block px-6 py-2.5 rounded-xl text-[14px] font-semibold" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>Open PointsMax Calculator →</a>
          </div>

          <p className="text-[11px] mt-8 leading-relaxed" style={{ color: 'var(--text-m)' }}>
            <strong>Disclaimer:</strong> Based on publicly available information from HDFC Bank's website as of May 2026. Fees, earn rates, subscription benefits, and partner programs change without notice. Always verify current terms at hdfcbank.com. PointsMax is not affiliated with HDFC Bank. Not financial advice.
          </p>

          <FeedbackWidget pageSlug="hdfc-diners-club-black-credit-card-review-2026" pageTitle="HDFC Diners Club Black Review 2026" />
        </div>
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
            <p className="text-[13px] hidden sm:block" style={{ color: 'rgba(250,248,245,0.6)' }}>Check your <strong style={{ color: '#FAF8F5' }}>Diners Black points</strong></p>
            <p className="text-[13px] sm:hidden" style={{ color: 'rgba(250,248,245,0.6)' }}>Check points value</p>
            <a href="/" className="shrink-0 px-4 py-2 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>Open Calculator →</a>
          </div>
        </div>
      )}
    </div>
  )
}
