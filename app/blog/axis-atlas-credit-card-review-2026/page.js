'use client'

import { useState, useEffect } from 'react'
import FeedbackWidget from '@/components/FeedbackWidget'
import PageNav from '@/components/PageNav'

const blogJsonLd = {
  '@context': 'https://schema.org', '@type': 'Product',
  name: 'Axis Atlas Credit Card',
  brand: { '@type': 'Brand', name: 'Axis Bank' },
  category: 'Credit Card',
  description: 'Axis Atlas is a travel-focused credit card with a tiered earn structure and airline/hotel transfer partners. It was significantly affected by the April 2026 devaluation which removed Accor, Marriott Bonvoy, and Qatar Airways as transfer partners.',
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '3.4', bestRating: '5', worstRating: '1', reviewCount: '1' },
  review: {
    '@type': 'Review',
    reviewRating: { '@type': 'Rating', ratingValue: '3.4', bestRating: '5', worstRating: '1' },
    author: { '@type': 'Organization', name: 'PointsMax' },
    datePublished: '2026-06-07',
    reviewBody: 'Axis Atlas remains a viable entry-level travel card at ₹5,000 after the April 2026 devaluation — primarily for ₹7.5-15L annual spenders who use the tiered milestone structure. The removal of Accor, Marriott, and Qatar hurts but the 5X travel earn rate and 1:2 transfer to KrisFlyer/Flying Blue still delivers decent value. Not recommended over HDFC Diners Club Black at the same spend level.',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is Axis Atlas credit card worth it in 2026 after the devaluation?', acceptedAnswer: { '@type': 'Answer', text: 'Axis Atlas is worth considering in 2026 specifically for travellers spending ₹7.5-15 lakh annually who can use the tiered milestone program to earn bonus EDGE Miles. The 5 EDGE Miles per ₹100 on travel and 1:2 transfer to KrisFlyer still delivers 2-3% effective return on travel spend. However, the removal of Accor, Marriott, and Qatar in April 2026 removed the best high-value redemption paths. At the same ₹5,000 fee level, HSBC TravelOne offers better transfer partner stability.' }},
    { '@type': 'Question', name: 'What are the current Axis Atlas transfer partners in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'After April 2026, Axis Atlas transfer partners are: Group A (30,000 miles cap/year) — Air Canada Aeroplan, Japan Airlines Mileage Bank, Singapore Airlines KrisFlyer. Group B (1,20,000 miles cap/year) — Air France-KLM Flying Blue, Air India Flying Returns, ITC Hotels, IHG One Rewards, British Airways Avios, Finnair Plus, Vietnam Airlines Lotusmiles. Accor Live Limitless, Marriott Bonvoy, and Qatar Airways were removed in April 2026.' }},
    { '@type': 'Question', name: 'What is the difference between Axis Atlas Silver, Gold, and Platinum tiers?', acceptedAnswer: { '@type': 'Answer', text: 'Axis Atlas has three tiers based on annual spend. Silver (base): 8 domestic + 4 international lounge visits per year, no milestone bonus. Gold (₹7.5 lakh spend): 12 domestic + 6 international lounge visits, 2,500 bonus EDGE Miles. Platinum (₹15 lakh spend): 18 domestic + 12 international lounge visits, 10,000 bonus EDGE Miles (worth approximately ₹5,000-10,000 depending on transfer). The annual fee of ₹5,000 has no spend-based waiver.' }},
  ],
}

export default function BlogPost() {
  const [showBar, setShowBar] = useState(false)
  const [tier, setTier] = useState('gold')

  useEffect(() => {
    const fn = () => setShowBar(window.scrollY > 600)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const H2 = ({ children }) => (
    <h2 className="pt-8" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', letterSpacing: '-0.01em' }}>{children}</h2>
  )
  const S = ({ children }) => <strong style={{ color: 'var(--text)' }}>{children}</strong>

  const TIERS = {
    silver: { label: 'Silver (base)', spend: '< ₹7.5L/year', lounge: '8 domestic + 4 intl', milestone: 'None', fee: '₹5,000', netFee: '₹5,000', color: '#888' },
    gold: { label: 'Gold', spend: '₹7.5L-15L/year', lounge: '12 domestic + 6 intl', milestone: '2,500 EDGE Miles (~₹2,500)', fee: '₹5,000', netFee: '₹2,500', color: 'var(--gold)' },
    platinum: { label: 'Platinum', spend: '₹15L+/year', lounge: '18 domestic + 12 intl', milestone: '10,000 EDGE Miles (~₹5,000-10,000)', fee: '₹5,000', netFee: '₹0 to -₹5,000 (fee recovered)', color: 'var(--green)' },
  }

  const activeTier = TIERS[tier]

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageNav />

      <article className="max-w-2xl mx-auto px-5 py-12">
        <div className="flex items-center gap-2 mb-8 text-[13px]" style={{ color: 'var(--text-m)' }}>
          <a href="/">PointsMax</a><span>/</span>
          <a href="/blog">Learn</a><span>/</span>
          <span style={{ color: 'var(--text-s)' }}>Axis Atlas Review</span>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded" style={{ color: '#2563eb', background: 'rgba(37,99,235,0.06)' }}>Card Review</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>June 7, 2026</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>11 min read</span>
        </div>

        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(24px, 4vw, 36px)', lineHeight: 1.15, letterSpacing: '-0.025em', color: 'var(--text)' }}>
          Axis Atlas Credit Card Review 2026: Worth ₹5,000 After the April Devaluation?
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
          Accor gone. Marriott gone. Qatar gone. But unlike its sibling Magnus, Atlas still has a case — at the right spend tier. Here's the full honest assessment of where it stands in June 2026.
        </p>

        {/* Quick verdict */}
        <div className="mt-8 p-5 rounded-2xl" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
          <div className="flex items-center justify-between mb-3">
            <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: 'rgba(250,248,245,0.4)' }}>Quick verdict</p>
            <div className="flex items-center gap-1">
              {[1,2,3].map(i => <span key={i} style={{ color: 'var(--gold-l, #B8953E)' }}>★</span>)}
              <span style={{ color: 'rgba(250,248,245,0.25)' }}>★</span>
              <span style={{ color: 'rgba(250,248,245,0.25)' }}>★</span>
              <span className="text-[13px] font-mono font-bold ml-1" style={{ color: 'var(--gold-l, #B8953E)' }}>3.4/5</span>
            </div>
          </div>
          <p className="text-[14px] leading-relaxed" style={{ color: 'rgba(250,248,245,0.75)' }}>
            Atlas survives the April 2026 devaluation better than Magnus because of one key difference: its ₹5,000 annual fee is lower and its tiered milestone structure still makes mathematical sense for ₹7.5-15L spenders. The 5X travel earn rate + 1:2 KrisFlyer transfer still produces a 2-3% effective return on travel spend. That said — at the same fee tier, HSBC TravelOne now carries less devaluation risk and more partner stability. Atlas is a hold, not a buy in 2026.
          </p>
        </div>

        <div className="mt-10 space-y-6 text-[15px] leading-[1.85]" style={{ color: 'var(--text-s)' }}>

          <p>Atlas and Magnus are often discussed together as Axis Bank's premium travel cards. But they serve different spenders at different price points — Magnus at ₹12,500, Atlas at ₹5,000. This pricing difference is critical when evaluating the post-devaluation state of both cards.</p>
          <p>The April 2, 2026 changes hit Atlas the same way they hit Magnus: <S>Accor Live Limitless, Marriott Bonvoy, and Qatar Airways Privilege Club all removed overnight</S>, with British Airways Avios, Finnair Plus, and Vietnam Airlines Lotusmiles added as replacements. The transfer ratios stayed at 1:2 (1 EDGE Mile = 2 partner miles) — Atlas was spared the ratio cut that halved Magnus's value — but the loss of Accor's fixed-value floor is a significant blow to the card's best use case.</p>

          <H2>The tier structure — where Atlas is genuinely different</H2>
          <p>Unlike most credit cards, Atlas has a formal spending tier system that changes your benefits based on annual spend. This is worth understanding carefully before evaluating the card.</p>

          <div className="flex gap-1.5 mb-4">
            {Object.entries(TIERS).map(([key, t]) => (
              <button key={key} onClick={() => setTier(key)}
                className="flex-1 py-2 px-2 rounded-xl text-[12px] font-semibold transition-all"
                style={{ background: tier === key ? 'var(--dark)' : 'var(--bg-s)', color: tier === key ? '#FAF8F5' : 'var(--text-s)', border: '1px solid var(--border)' }}>
                {t.label}
              </button>
            ))}
          </div>

          <div className="p-5 rounded-2xl" style={{ background: 'var(--card)', border: `2px solid ${activeTier.color}` }}>
            <p className="text-[15px] font-bold mb-4" style={{ color: activeTier.color }}>{activeTier.label} Tier</p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Annual spend needed', value: activeTier.spend },
                { label: 'Lounge access', value: activeTier.lounge },
                { label: 'Milestone reward', value: activeTier.milestone },
                { label: 'Annual fee', value: activeTier.fee },
                { label: 'Effective net fee', value: activeTier.netFee },
              ].map((item, i) => (
                <div key={i} className="p-3 rounded-xl" style={{ background: 'var(--bg-s)' }}>
                  <p className="text-[11px]" style={{ color: 'var(--text-m)' }}>{item.label}</p>
                  <p className="text-[13px] font-semibold mt-0.5" style={{ color: 'var(--text)' }}>{item.value}</p>
                </div>
              ))}
            </div>
            {tier === 'platinum' && (
              <div className="mt-3 p-3 rounded-xl" style={{ background: '#EDF5F0', border: '1px solid #C8DDD0' }}>
                <p className="text-[12px]" style={{ color: 'var(--green)' }}>At Platinum: 10,000 EDGE Miles milestone bonus transferred to KrisFlyer at 1:2 = 20,000 KrisFlyer miles worth ₹10,000+ on a DEL-SIN business class redemption. The ₹5,000 fee is recovered and then some.</p>
              </div>
            )}
            {tier === 'silver' && (
              <div className="mt-3 p-3 rounded-xl" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
                <p className="text-[12px]" style={{ color: 'var(--red)' }}>At Silver: No milestone bonus. You pay ₹5,000 for a card with limited lounge access and standard earn rates. Not worth it — you're better off with HSBC TravelOne or HDFC Regalia Gold at this spend level.</p>
              </div>
            )}
          </div>

          <p>The math is clear: <S>Atlas is a different card depending on your spending tier.</S> Below ₹7.5L annually, it's overpriced. At ₹7.5-15L, the milestone bonus partially offsets the fee. At ₹15L+, it gets interesting — but at that spend level, HDFC Diners Club Black at ₹10,000 with a ₹8L fee waiver becomes the obvious alternative.</p>

          <H2>Earn rates — where Atlas genuinely earns</H2>

          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-[13px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead><tr>
                <th className="text-left py-3 px-3 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Category</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>EDGE Miles</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Effective return</th>
                <th className="text-left py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Note</th>
              </tr></thead>
              <tbody>
                {[
                  ['Travel (flights/hotels direct)', '5 per ₹100', '2-3% via transfer', 'Cap: ₹2L/month', 'var(--green)'],
                  ['All other retail', '2 per ₹100', '0.8-1%', 'Most everyday spend', 'var(--gold)'],
                  ['Travel EDGE portal', '1 per ₹100 + ₹1/mile portal rate', '1%', 'Lower than direct', 'var(--text-m)'],
                  ['Fuel, utilities, insurance', '0', '0%', 'Excluded categories', 'var(--red)'],
                  ['Government payments', '0', '0%', 'Tax/fee payments excluded', 'var(--red)'],
                ].map(([cat, miles, ret, note, color], i) => (
                  <tr key={i}>
                    <td className="py-2.5 px-3 font-medium" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{cat}</td>
                    <td className="py-2.5 px-2 text-center font-mono" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>{miles}</td>
                    <td className="py-2.5 px-2 text-center font-mono font-bold" style={{ color, borderBottom: '1px solid var(--border)' }}>{ret}</td>
                    <td className="py-2.5 px-2 text-[12px]" style={{ color: 'var(--text-m)', borderBottom: '1px solid var(--border)' }}>{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>The 5X on direct travel bookings is the headline feature — and it's genuine. At 5 EDGE Miles per ₹100 transferring 1:2 to KrisFlyer, you get <S>10 KrisFlyer miles per ₹100</S> on direct flight bookings. On a DEL-SIN business class worth ₹85,000, that's an effective 2.5% return — not spectacular but meaningful on a ₹5,000 fee card.</p>
          <p>The problem: <S>the ₹2L/month cap on 5X travel</S>. Spend ₹24L/year on travel and earn 5X on all of it — but only ₹2L/month at 5X, above that drops to 2X. For most users this cap won't matter, but heavy travel bookers need to be aware.</p>

          {/* Mid CTA */}
          <div className="p-5 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <div>
              <p className="text-[14px] font-semibold">Check your Axis Atlas EDGE Miles value</p>
              <p className="text-[12px] mt-1" style={{ color: 'rgba(250,248,245,0.5)' }}>Travel EDGE portal vs KrisFlyer transfer vs Flying Blue — ranked by ₹.</p>
            </div>
            <a href="/" className="shrink-0 px-5 py-2.5 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Open Calculator →</a>
          </div>

          <H2>Transfer partners after April 2026</H2>

          <div className="grid gap-3">
            {[
              { group: 'Group A', cap: 'Max 30,000 miles/year', color: '#0891b2', bg: '#ECFEFF', border: '#CFFAFE', partners: [
                { name: 'Air Canada Aeroplan', ratio: '1:2', note: 'Star Alliance' },
                { name: 'Japan Airlines Mileage Bank', ratio: '1:2', note: 'Oneworld' },
                { name: 'Singapore Airlines KrisFlyer', ratio: '1:2', note: 'Star Alliance — best value from India' },
              ]},
              { group: 'Group B', cap: 'Max 1,20,000 miles/year', color: 'var(--gold, #B8953E)', bg: '#FBF8F0', border: '#E8DFC5', partners: [
                { name: 'Air France-KLM Flying Blue', ratio: '1:2', note: 'SkyTeam' },
                { name: 'Air India Flying Returns', ratio: '1:2', note: 'Star Alliance' },
                { name: 'ITC Hotels Club ITC', ratio: '1:2', note: 'India hotels' },
                { name: 'IHG One Rewards', ratio: '1:2', note: 'Hotel program' },
                { name: 'British Airways Avios', ratio: '1:2', note: 'New Apr 2026. Oneworld ecosystem.' },
                { name: 'Finnair Plus', ratio: '1:2', note: 'New Apr 2026. Oneworld.' },
                { name: 'Vietnam Airlines Lotusmiles', ratio: '1:2', note: 'New Apr 2026. SkyTeam.' },
              ]},
            ].map((g, gi) => (
              <div key={gi} className="rounded-xl overflow-hidden" style={{ border: `1px solid ${g.border}` }}>
                <div className="px-4 py-3 flex items-center justify-between" style={{ background: g.bg }}>
                  <p className="text-[13px] font-bold" style={{ color: g.color }}>{g.group}</p>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded" style={{ color: g.color, background: 'rgba(255,255,255,0.6)' }}>{g.cap}</span>
                </div>
                {g.partners.map((p, pi) => (
                  <div key={pi} className="flex items-center justify-between px-4 py-2.5" style={{ borderTop: '1px solid var(--border)', background: 'var(--card)' }}>
                    <div>
                      <span className="text-[13px] font-medium" style={{ color: 'var(--text)' }}>{p.name}</span>
                      <span className="text-[11px] ml-2" style={{ color: 'var(--text-m)' }}>{p.note}</span>
                    </div>
                    <span className="text-[12px] font-mono font-bold" style={{ color: 'var(--green)' }}>{p.ratio}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
            <p className="text-[13px] font-bold mb-1" style={{ color: 'var(--red)' }}>Partners removed April 2, 2026 — zero advance notice</p>
            <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>Accor Live Limitless, Marriott Bonvoy, Qatar Airways Privilege Club. The Accor removal is the most damaging — Accor had been the only "fixed value" redemption on Atlas where you could reliably get ₹1/mile regardless of availability. Its removal means every remaining redemption is variable based on airline award availability.</p>
          </div>

          <H2>Atlas vs HSBC TravelOne: the real comparison</H2>
          <p>With Magnus clearly beaten by Infinia, the more interesting 2026 comparison is Atlas vs HSBC TravelOne — both mid-tier travel cards at around ₹5,000/year.</p>

          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-[13px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead><tr>
                <th className="text-left py-3 px-3 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}></th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--gold, #B8953E)', borderBottom: '1px solid var(--border)' }}>Axis Atlas</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>HSBC TravelOne</th>
              </tr></thead>
              <tbody>
                {[
                  ['Annual fee', '₹5,000 (no waiver)', '₹4,999 (no waiver)'],
                  ['Travel earn rate', '5 EDGE Miles/₹100', '3 pts/₹100'],
                  ['General earn rate', '2 EDGE Miles/₹100', '1 pt/₹100'],
                  ['Transfer ratio', '1:2 (1 mile = 2 partner)', '1:1 (1 pt = 1 partner mile)'],
                  ['Effective travel return', '~2-3% via KrisFlyer', '~2-3% via KrisFlyer'],
                  ['KrisFlyer transfer', '1:2', '1:1 ✅'],
                  ['Marriott Bonvoy', '❌ Removed Apr 2026', '✅ Available 1:1'],
                  ['Accor Live Limitless', '❌ Removed Apr 2026', '✅ Available 1:1'],
                  ['Transfer partners', '10 partners', '15+ partners'],
                  ['Forex markup', '3.5% + GST', '1.5% + GST ✅'],
                  ['Tier milestones', '✅ Bonus miles at ₹7.5L/₹15L', '❌ No tier structure'],
                  ['Devaluation risk', 'High (multiple rounds)', 'Low (expanding, not cutting)'],
                  ['Lounge (intl)', '4-12/year by tier', '4/year'],
                ].map(([label, atlas, travelone], i) => (
                  <tr key={i}>
                    <td className="py-2.5 px-3 font-medium" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{label}</td>
                    <td className="py-2.5 px-2 text-center text-[12px]" style={{ color: atlas.includes('❌') ? 'var(--red)' : atlas.includes('✅') ? 'var(--green)' : 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>{atlas}</td>
                    <td className="py-2.5 px-2 text-center text-[12px]" style={{ color: travelone.includes('✅') ? 'var(--green)' : travelone.includes('❌') ? 'var(--red)' : 'var(--text-s)', fontWeight: travelone.includes('✅') ? 500 : 400, borderBottom: '1px solid var(--border)' }}>{travelone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-3">The effective travel return on both cards is similar — both reach 2-3% on travel when transfers work well. But <S>HSBC TravelOne wins on partner stability, forex markup, and Marriott/Accor access.</S> Atlas wins on tier milestones for ₹15L spenders and higher lounge access at Platinum.</p>

          <H2>Who should keep Axis Atlas in 2026?</H2>
          <div className="space-y-3">
            <div className="p-4 rounded-xl" style={{ background: '#EDF5F0', border: '1px solid #C8DDD0' }}>
              <p className="text-[13px] font-bold mb-2" style={{ color: 'var(--green)' }}>Keep Atlas if:</p>
              <ul className="space-y-1.5 text-[13px]" style={{ color: 'var(--text-s)', listStyleType: 'none', padding: 0 }}>
                <li className="flex gap-2"><span style={{ color: 'var(--green)' }}>→</span><span>You spend ₹7.5-15L annually and consistently hit Gold or Platinum tier — the milestone bonus partially justifies the fee</span></li>
                <li className="flex gap-2"><span style={{ color: 'var(--green)' }}>→</span><span>You book flights and hotels directly (not via OTAs) — the 5X travel earn rate is genuinely strong</span></li>
                <li className="flex gap-2"><span style={{ color: 'var(--green)' }}>→</span><span>You primarily transfer to KrisFlyer or Flying Blue — both remain in Group B with decent caps</span></li>
                <li className="flex gap-2"><span style={{ color: 'var(--green)' }}>→</span><span>You're an Axis Bank customer and the card fits your banking ecosystem</span></li>
              </ul>
            </div>
            <div className="p-4 rounded-xl" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
              <p className="text-[13px] font-bold mb-2" style={{ color: 'var(--red)' }}>Switch if:</p>
              <ul className="space-y-1.5 text-[13px]" style={{ color: 'var(--text-s)', listStyleType: 'none', padding: 0 }}>
                <li className="flex gap-2"><span style={{ color: 'var(--red)' }}>→</span><span>You were primarily using Atlas for Accor or Marriott transfers — those partners are gone</span></li>
                <li className="flex gap-2"><span style={{ color: 'var(--red)' }}>→</span><span>You spend below ₹7.5L/year — Silver tier doesn't justify the ₹5,000 fee</span></li>
                <li className="flex gap-2"><span style={{ color: 'var(--red)' }}>→</span><span>You do significant international spending — Atlas's 3.5% forex markup is punishing; TravelOne's 1.5% is much better</span></li>
                <li className="flex gap-2"><span style={{ color: 'var(--red)' }}>→</span><span>You can qualify for HDFC Diners Club Black at ₹10,000 — better partners, 1:1 ratios, fee waived at ₹8L spend</span></li>
              </ul>
            </div>
          </div>

          <H2>The bottom line</H2>
          <p>Axis Atlas is in an awkward position post-April 2026. <S>It's meaningfully better than Magnus</S> — the lower fee, retained 1:2 transfer ratio (not halved like Magnus), and tier milestone structure give it a genuine use case for ₹7.5-15L spenders. But it's <S>clearly behind HSBC TravelOne</S> on partner quality, forex markup, and devaluation risk.</p>
          <p>If you're holding Atlas and hitting Gold or Platinum tier, keeping it makes sense — particularly for domestic travel bookings where the 5X earn is strong and you're transferring to KrisFlyer. If you're evaluating it fresh today, TravelOne is the safer choice at nearly the same price.</p>
          <p>Check what your existing Atlas EDGE Miles are worth using the <a href="/" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>PointsMax calculator</a>. See all current transfer partner ratios at the <a href="/transfers" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>Transfer Partners directory</a>. And for the full Axis devaluation timeline, read our <a href="/blog/credit-card-devaluation-tracker-india-2026" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>devaluation tracker</a>.</p>

          <div className="p-6 rounded-2xl text-center mt-8" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <p className="text-[16px] font-semibold">Check your Axis Atlas EDGE Miles value</p>
            <p className="text-[13px] mt-1 mb-4" style={{ color: 'rgba(250,248,245,0.5)' }}>KrisFlyer transfer, Travel EDGE portal, Flying Blue — every option in rupees.</p>
            <a href="/" className="inline-block px-6 py-2.5 rounded-xl text-[14px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Open PointsMax Calculator →</a>
          </div>

          <p className="text-[11px] mt-8 leading-relaxed" style={{ color: 'var(--text-m)' }}>
            <strong>Disclaimer:</strong> All data based on Axis Bank's official website, Atlas T&Cs, and transfer partner terms as of June 2026. Earn rates, partner availability, and tier benefits change without notice. Always verify at axisbank.com before applying or transferring miles. Transfers are irreversible. PointsMax is not affiliated with Axis Bank. Not financial advice.
          </p>

          <FeedbackWidget pageSlug="axis-atlas-credit-card-review-2026" pageTitle="Axis Atlas Credit Card Review 2026" />
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
            <p className="text-[13px]" style={{ color: 'rgba(250,248,245,0.6)' }}>Check your <strong style={{ color: '#FAF8F5' }}>Axis Atlas</strong> EDGE Miles value</p>
            <a href="/" className="shrink-0 px-4 py-2 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Open Calculator →</a>
          </div>
        </div>
      )}
    </div>
  )
}
