'use client'

import { useState, useEffect } from 'react'
import FeedbackWidget from '@/components/FeedbackWidget'

const blogJsonLd = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Best Credit Cards for International Travel India 2026: Ranked by Total Value',
  datePublished: '2026-05-28', dateModified: '2026-05-28',
  author: { '@type': 'Organization', name: 'PointsMax' },
  publisher: { '@type': 'Organization', name: 'PointsMax', url: 'https://www.pointsmax.in' },
  mainEntityOfPage: 'https://www.pointsmax.in/blog/best-credit-cards-international-travel-india-2026',
}

const faqJsonLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Which credit card has zero forex markup in India?', acceptedAnswer: { '@type': 'Answer', text: 'Cards with zero or near-zero forex markup in India include Scapia Federal Bank Credit Card (zero markup, lifetime free), IDFC FIRST Mayura (zero markup, ₹5,999 fee), Axis Burgundy Private (zero markup, invite only), and Niyo Global Card (zero markup, prepaid). Scapia is the best option for most travellers — zero markup with no annual fee.' }},
    { '@type': 'Question', name: 'What is the forex markup on HDFC Infinia?', acceptedAnswer: { '@type': 'Answer', text: 'HDFC Infinia charges a 2% forex markup plus GST, resulting in an effective rate of approximately 2.36% on international transactions. However, the Global Value Programme gives 1% cashback on international spends, reducing the net cost to approximately 1.36%. On ₹5 lakh annual international spend, that\'s about ₹6,800 in net forex costs.' }},
    { '@type': 'Question', name: 'Should I use a travel card or credit card for international travel in India?', acceptedAnswer: { '@type': 'Answer', text: 'A credit card is better than a prepaid travel card for most Indian travellers. Credit cards with low forex markup (like Scapia at zero or Infinia at 2% net) offer better exchange rates than most prepaid travel cards, plus you earn reward points. Use Scapia for daily international spending and a premium card like Infinia for travel bookings to maximise lounge access and reward earning.' }},
  ],
}

export default function BlogPost() {
  const [showBar, setShowBar] = useState(false)
  const [intlSpend, setIntlSpend] = useState(300000)
  useEffect(() => {
    const fn = () => setShowBar(window.scrollY > 600)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const H2 = ({ children }) => <h2 className="pt-6" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', letterSpacing: '-0.01em' }}>{children}</h2>
  const S = ({ children }) => <strong style={{ color: 'var(--text)' }}>{children}</strong>

  const forexCosts = [
    { card: 'Scapia Federal', markup: 0, cashback: 0, net: 0, fee: 0 },
    { card: 'HDFC Infinia (net of GVP)', markup: 2, cashback: 1, net: 1.36, fee: 0 },
    { card: 'HDFC Diners Club Black', markup: 2, cashback: 1, net: 1.36, fee: 0 },
    { card: 'Axis Magnus', markup: 2, cashback: 0, net: 2.36, fee: 12500 },
    { card: 'Standard 3.5% card', markup: 3.5, cashback: 0, net: 4.13, fee: 0 },
  ]

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <article className="max-w-2xl mx-auto px-5 py-12">
        <div className="flex items-center gap-2 mb-8 text-[13px]" style={{ color: 'var(--text-m)' }}>
          <a href="/">PointsMax</a><span>/</span>
          <a href="/blog">Learn</a><span>/</span>
          <span style={{ color: 'var(--text-s)' }}>Best International Travel Cards</span>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded" style={{ color: 'var(--green)', background: 'rgba(45,106,79,0.08)' }}>Listicle</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>May 28, 2026</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>10 min read</span>
        </div>

        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(24px, 4vw, 36px)', lineHeight: 1.15, letterSpacing: '-0.025em', color: 'var(--text)' }}>
          Best Credit Cards for International Travel India 2026: Ranked by What Actually Matters
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
          Most "best travel card" lists focus on welcome bonuses and lounge access. We ranked by the three things that cost you real money abroad: forex markup, reward rate on international spend, and annual fee drag.
        </p>

        <div className="mt-10 space-y-6 text-[15px] leading-[1.85]" style={{ color: 'var(--text-s)' }}>

          <p>Every Indian credit card charges a forex markup on international transactions — a percentage on top of the RBI exchange rate that goes straight to the bank. Most cards charge 3.5%. On ₹5 lakh annual international spend, that's <S>₹20,500 in markup</S> — more than most card annual fees.</p>
          <p>This is the number most travel card comparisons don't lead with, because it's not exciting to talk about costs. But it's the single biggest variable in how much value you extract from your card abroad.</p>

          {/* Interactive forex calculator */}
          <div className="p-5 rounded-2xl" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <p className="text-[12px] font-bold uppercase tracking-widest mb-3" style={{ color: 'rgba(250,248,245,0.4)' }}>What forex markup actually costs you</p>
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="text-[14px]" style={{ color: 'rgba(250,248,245,0.7)' }}>Annual international spend:</span>
              <div className="flex gap-2 flex-wrap">
                {[100000, 300000, 500000, 1000000].map(v => (
                  <button key={v} onClick={() => setIntlSpend(v)}
                    className="px-2.5 py-1 rounded-lg text-[12px] font-mono font-medium"
                    style={{ background: intlSpend === v ? 'var(--gold)' : 'rgba(255,255,255,0.08)', color: intlSpend === v ? 'var(--dark)' : 'rgba(250,248,245,0.6)' }}>
                    ₹{(v / 100000).toFixed(0)}L
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              {forexCosts.map((c, i) => {
                const cost = Math.round((intlSpend * c.net) / 100)
                return (
                  <div key={i} className="flex items-center justify-between py-1.5" style={{ borderBottom: i < forexCosts.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                    <span className="text-[13px]" style={{ color: i === 0 ? '#6ee7b7' : 'rgba(250,248,245,0.6)' }}>{c.card}</span>
                    <div className="text-right">
                      <span className="text-[14px] font-mono font-bold" style={{ color: i === 0 ? '#6ee7b7' : i === forexCosts.length - 1 ? '#fca5a5' : 'rgba(250,248,245,0.7)' }}>
                        {cost === 0 ? '₹0' : `-₹${cost.toLocaleString('en-IN')}`}
                      </span>
                      <span className="text-[11px] ml-1" style={{ color: 'rgba(250,248,245,0.3)' }}>/{c.net}% net</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <H2>What makes a great international travel credit card?</H2>
          <p>Four things — in order of actual financial impact:</p>
          <ol className="space-y-2 pl-5 list-decimal">
            <li><S>Forex markup</S> — the biggest cost variable. Zero is best. 2% net is acceptable. 3.5% is a significant drag on every transaction.</li>
            <li><S>Reward rate on international spend</S> — some cards give accelerated earn on foreign transactions; most don't.</li>
            <li><S>International lounge access</S> — Priority Pass or equivalent. Worth ₹2,000-2,500 per visit if you travel 4+ times a year.</li>
            <li><S>Travel insurance</S> — medical cover abroad is genuinely useful. Check whether your card covers pre-existing conditions and what the claim process looks like.</li>
          </ol>
          <p>Welcome bonuses and domestic perks shouldn't drive your international card choice — they're one-time and easy to game. What matters is the recurring value on every international transaction.</p>

          <H2>Best credit cards for international travel India 2026 — ranked</H2>

          {/* Card 1 */}
          <div className="p-5 rounded-xl" style={{ background: '#EDF5F0', border: '1px solid #C8DDD0' }}>
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-[16px] font-bold" style={{ color: 'var(--text)' }}>🥇 Scapia Federal Bank</p>
                <p className="text-[12px]" style={{ color: 'var(--text-m)' }}>Fee: ₹0 · Forex markup: 0% · Lounge: Domestic unlimited</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-1 rounded" style={{ color: 'var(--green)', background: 'rgba(45,106,79,0.1)' }}>BEST BACKUP</span>
            </div>
            <p style={{ color: 'var(--text-s)' }}>The Scapia Federal card does one thing exceptionally well: <S>zero forex markup, genuinely, with no annual fee.</S> Every other card on this list charges at least 2%. On ₹3 lakh international spend, Scapia saves you ₹8,500-14,000 in markup costs versus a standard 3.5% card.</p>
            <p className="mt-3" style={{ color: 'var(--text-s)' }}>What it doesn't have: international lounge access, airline mile transfers, or a meaningful rewards programme. It's not your primary card — it's the card you use for every international transaction where your premium card isn't optimal.</p>
            <div className="mt-3 p-3 rounded-lg" style={{ background: 'rgba(45,106,79,0.06)' }}>
              <p className="text-[13px]" style={{ color: 'var(--green)' }}><S>The play:</S> Use Scapia for all daily international spending (food, shopping, local transport). Use your premium card only for hotel check-in and large bookings where rewards matter more than forex.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-5 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-[16px] font-bold" style={{ color: 'var(--text)' }}>🥈 HDFC Infinia</p>
                <p className="text-[12px]" style={{ color: 'var(--text-m)' }}>Fee: ₹12,500 (waived ₹10L) · Forex: 2% net ~1.36% after GVP · Lounge: Unlimited intl</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-1 rounded" style={{ color: '#0891b2', background: 'rgba(8,145,178,0.08)' }}>BEST PREMIUM</span>
            </div>
            <p style={{ color: 'var(--text-s)' }}>Infinia is the best all-round premium travel card in India. The 2% forex markup is offset by the Global Value Programme (GVP) which gives 1% cashback on international transactions — bringing the net cost to approximately 1.36%. Combined with the 3.33% SmartBuy reward rate and unlimited Priority Pass lounge access, Infinia is the strongest premium international card available.</p>
            <p className="mt-3" style={{ color: 'var(--text-s)' }}>The transfer partners are the real differentiator. 1:1 to KrisFlyer means business class to Singapore for 46,000 points — your international spend actively builds toward a premium award booking. No other card in India does this as efficiently.</p>
            <ul className="mt-3 space-y-1 text-[13px]" style={{ color: 'var(--text-s)', listStyleType: 'none', padding: 0 }}>
              <li className="flex gap-2"><span style={{ color: 'var(--green)' }}>✓</span><span>Unlimited international lounge access (primary + add-on)</span></li>
              <li className="flex gap-2"><span style={{ color: 'var(--green)' }}>✓</span><span>₹3 crore air accident cover, ₹50L overseas medical insurance</span></li>
              <li className="flex gap-2"><span style={{ color: 'var(--green)' }}>✓</span><span>1:1 transfer to KrisFlyer, Finnair Avios, Emirates Skywards</span></li>
              <li className="flex gap-2"><span style={{ color: 'var(--red)' }}>✕</span><span>Invite-only — not everyone can get it</span></li>
              <li className="flex gap-2"><span style={{ color: 'var(--red)' }}>✕</span><span>2% forex (still better than 3.5% but not zero)</span></li>
            </ul>
            <p className="text-[13px] mt-3" style={{ color: 'var(--text-m)' }}>Full review: <a href="/blog/hdfc-infinia-credit-card-review-2026" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>HDFC Infinia Review 2026 →</a></p>
          </div>

          {/* Card 3 */}
          <div className="p-5 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-[16px] font-bold" style={{ color: 'var(--text)' }}>🥉 HDFC Diners Club Black</p>
                <p className="text-[12px]" style={{ color: 'var(--text-m)' }}>Fee: ₹10,000 (waived ₹8L) · Forex: 2% net ~1.36% after GVP · Lounge: Unlimited intl</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-1 rounded" style={{ color: 'var(--gold)', background: 'rgba(184,149,62,0.08)' }}>BEST ACCESSIBLE</span>
            </div>
            <p style={{ color: 'var(--text-s)' }}>Everything Infinia offers internationally, at ₹2,500 less fee with a lower waiver threshold. Same 1:1 KrisFlyer transfer. Same unlimited Priority Pass. Same GVP cashback on forex. Direct application — no invite needed.</p>
            <p className="mt-3" style={{ color: 'var(--text-s)' }}>The one genuine limitation: <S>Diners Club acceptance is patchy in some Southeast Asian and Middle Eastern countries.</S> Always carry a Visa backup (Scapia works perfectly) when travelling to Thailand, Vietnam, Indonesia, or the UAE.</p>
            <p className="text-[13px] mt-3" style={{ color: 'var(--text-m)' }}>Full review: <a href="/blog/hdfc-diners-club-black-credit-card-review-2026" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>Diners Club Black Review 2026 →</a></p>
          </div>

          {/* Card 4 */}
          <div className="p-5 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-[16px] font-bold" style={{ color: 'var(--text)' }}>4. Amex Platinum Charge Card</p>
                <p className="text-[12px]" style={{ color: 'var(--text-m)' }}>Fee: ₹66,000 · Forex: 3.5% + GST (no GVP) · Lounge: 1,400+ globally</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-1 rounded" style={{ color: '#7c3aed', background: 'rgba(124,58,237,0.08)' }}>LUXURY ONLY</span>
            </div>
            <p style={{ color: 'var(--text-s)' }}>The best card for international experiences, worst for international transactions. Amex charges the full 3.5% + GST forex markup with no cashback offset — making it expensive for daily spending abroad. But the Fine Hotels & Resorts credits, Taj benefits, and Centurion Lounge access make it genuinely powerful for premium stays.</p>
            <p className="mt-3" style={{ color: 'var(--text-s)' }}>The right approach: use Amex Platinum for hotel check-in and restaurant bills where you benefit from hotel credits and dining discounts. Use Scapia for everything else.</p>
            <p className="text-[13px] mt-3" style={{ color: 'var(--text-m)' }}>Full review: <a href="/blog/amex-platinum-charge-card-review-india-2026" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>Amex Platinum Review 2026 →</a></p>
          </div>

          {/* Card 5 */}
          <div className="p-5 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-[16px] font-bold" style={{ color: 'var(--text)' }}>5. Axis Magnus (with caveats)</p>
                <p className="text-[12px]" style={{ color: 'var(--text-m)' }}>Fee: ₹12,500 · Forex: 2% · Lounge: Unlimited intl (Priority Pass)</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-1 rounded" style={{ color: '#64748b', background: 'rgba(100,116,139,0.08)' }}>CONSIDER</span>
            </div>
            <p style={{ color: 'var(--text-s)' }}>Magnus still offers unlimited Priority Pass internationally and 2% forex markup — competitive on both counts. But the post-April 2026 devaluation hurt the reward-earning side significantly. Transfer partners are fewer and at worse ratios (5:2). If you're already an Axis banking customer and have Magnus, it remains a serviceable international card. But as a new choice for international travel specifically? Infinia or Diners Black are clearly better at the same ₹12,500 price point.</p>
            <p className="text-[13px] mt-3" style={{ color: 'var(--text-m)' }}>Full review: <a href="/blog/axis-magnus-credit-card-review-2026" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>Axis Magnus Review 2026 →</a></p>
          </div>

          {/* Card 6 */}
          <div className="p-5 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-[16px] font-bold" style={{ color: 'var(--text)' }}>6. ICICI Emeralde Private</p>
                <p className="text-[12px]" style={{ color: 'var(--text-m)' }}>Fee: ₹12,000 · Forex: 2% · Lounge: Unlimited intl</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-1 rounded" style={{ color: '#64748b', background: 'rgba(100,116,139,0.08)' }}>ICICI CUSTOMERS</span>
            </div>
            <p style={{ color: 'var(--text-s)' }}>Unlimited international lounge access, 2% forex markup, and the InterMiles transfer at ₹0.50/point make Emeralde Private a solid international card for ICICI banking customers. The rewards aren't as strong as Infinia but the overall travel package is competitive. Best suited for those with ICICI as their primary bank who can get the card through their relationship.</p>
          </div>

          {/* Mid-article CTA */}
          <div className="p-5 rounded-xl my-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <div>
              <p className="text-[14px] font-semibold">Already have one of these cards?</p>
              <p className="text-[12px] mt-1" style={{ color: 'rgba(250,248,245,0.5)' }}>Check how much your international spend is actually worth in reward points.</p>
            </div>
            <a href="/" className="shrink-0 px-5 py-2.5 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>Check My Points →</a>
          </div>

          <H2>The two-card strategy for international travel</H2>
          <p>No single card is optimal for every international situation. The smartest approach is a two-card stack:</p>

          <div className="p-5 rounded-xl" style={{ background: '#EDF5F0', border: '1px solid #C8DDD0' }}>
            <p className="text-[14px] font-bold mb-3" style={{ color: 'var(--green)' }}>The international two-card stack</p>
            <div className="space-y-3 text-[14px]">
              <div className="flex gap-3">
                <span className="w-6 h-6 rounded-full grid place-items-center text-[11px] font-bold shrink-0" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>1</span>
                <div>
                  <p style={{ color: 'var(--text)' }}><S>HDFC Infinia or Diners Black</S> — hotel check-in, airline bookings, large purchases</p>
                  <p className="text-[13px]" style={{ color: 'var(--text-m)' }}>Why: 3.33% reward rate, unlimited lounges, 1:1 KrisFlyer transfers, travel insurance</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="w-6 h-6 rounded-full grid place-items-center text-[11px] font-bold shrink-0" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>2</span>
                <div>
                  <p style={{ color: 'var(--text)' }}><S>Scapia Federal</S> — restaurants, shopping, local transport, daily transactions</p>
                  <p className="text-[13px]" style={{ color: 'var(--text-m)' }}>Why: Zero forex markup saves ₹8,500-14,000/year on ₹3-5L intl spend</p>
                </div>
              </div>
            </div>
            <p className="text-[13px] mt-3" style={{ color: 'var(--green)' }}>Combined annual fee: ₹10,000-12,500 (waived at ₹8-10L spend) + ₹0 for Scapia</p>
          </div>

          <H2>What to look for in a travel insurance policy on credit cards</H2>
          <p>Most premium Indian cards include travel insurance but the coverage varies dramatically. Before relying on your card's insurance abroad, check:</p>
          <ul className="space-y-2 pl-1 mt-2" style={{ listStyleType: 'none' }}>
            <li className="flex gap-2"><span style={{ color: 'var(--gold)' }}>→</span><span><S>Is it activated by booking the trip on the card?</S> Most cards require you to book your flight or hotel on the card to activate travel insurance. Don't assume you're covered if you booked on a different card.</span></li>
            <li className="flex gap-2"><span style={{ color: 'var(--gold)' }}>→</span><span><S>What's the overseas medical cover limit?</S> Infinia offers ₹50 lakh — adequate for most regions. USA-based medical bills can exceed this; consider a separate travel policy if visiting the US.</span></li>
            <li className="flex gap-2"><span style={{ color: 'var(--gold)' }}>→</span><span><S>Is the claims process manageable from abroad?</S> HDFC's insurance partner has a 24/7 helpline — genuinely useful. Test the number before you travel.</span></li>
            <li className="flex gap-2"><span style={{ color: 'var(--gold)' }}>→</span><span><S>Are pre-existing conditions covered?</S> Most credit card travel insurance excludes pre-existing medical conditions. If this is relevant to you, a standalone policy is essential.</span></li>
          </ul>

          <H2>Cards to avoid for international travel</H2>
          <div className="space-y-3">
            <div className="p-4 rounded-xl" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
              <p className="text-[13px] font-bold mb-1" style={{ color: 'var(--red)' }}>✕ Any card with 3.5% forex markup and no cashback</p>
              <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>SBI cards, most ICICI mid-range cards, and most basic credit cards charge 3.5% + GST (4.13% effective). On ₹5L international spend, that's ₹20,650/year — more than most card annual fees. Simply having Scapia as a backup eliminates this cost entirely.</p>
            </div>
            <div className="p-4 rounded-xl" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
              <p className="text-[13px] font-bold mb-1" style={{ color: 'var(--red)' }}>✕ Prepaid forex cards from banks</p>
              <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>Bank-issued forex cards (HDFC Multicurrency Platinum, SBI forex card etc.) charge loading fees, conversion fees, and often have worse exchange rates than zero-markup credit cards. The only advantage is spending limits — useful if you're managing a travel budget strictly, not for reward maximisation.</p>
            </div>
            <div className="p-4 rounded-xl" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
              <p className="text-[13px] font-bold mb-1" style={{ color: 'var(--red)' }}>✕ Using your debit card internationally</p>
              <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>Indian debit cards typically charge 3.5-4% forex markup, no travel insurance, no reward points, and offer no dispute protection if your card is compromised abroad. Never use a debit card internationally if a credit card is available.</p>
            </div>
          </div>

          <H2>Quick comparison table</H2>
          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-[12px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead><tr>
                <th className="text-left py-3 px-3 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Card</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Forex (net)</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Intl lounge</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Transfers</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Fee</th>
              </tr></thead>
              <tbody>
                {[
                  ['Scapia Federal', '0%', '❌', '❌', '₹0'],
                  ['HDFC Infinia', '~1.36%', '✅ Unlimited', '22 (1:1)', '₹12,500*'],
                  ['HDFC Diners Black', '~1.36%', '✅ Unlimited', '22 (1:1)', '₹10,000*'],
                  ['Amex Platinum', '~4.13%', '✅ 1,400+', '10+ (1:1)', '₹66,000'],
                  ['Axis Magnus', '~2.36%', '✅ Unlimited', '8 (5:2)', '₹12,500'],
                  ['ICICI Emeralde', '~2.36%', '✅ Unlimited', 'InterMiles', '₹12,000'],
                ].map(([card, forex, lounge, transfers, fee], i) => (
                  <tr key={i}>
                    <td className="py-2.5 px-3 font-medium" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{card}</td>
                    <td className="py-2.5 px-2 text-center font-mono" style={{ color: forex === '0%' ? 'var(--green)' : forex.includes('4') ? 'var(--red)' : 'var(--gold)', borderBottom: '1px solid var(--border)', fontWeight: 600 }}>{forex}</td>
                    <td className="py-2.5 px-2 text-center" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>{lounge}</td>
                    <td className="py-2.5 px-2 text-center" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>{transfers}</td>
                    <td className="py-2.5 px-2 text-center font-mono" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>{fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-[11px] mt-2" style={{ color: 'var(--text-m)' }}>*Fee waived on ₹10L (Infinia) or ₹8L (Diners) annual spend. Forex % includes GST and net of cashback where applicable.</p>
          </div>

          <H2>The bottom line</H2>
          <p>For international travel in 2026, the optimal strategy is simple: <S>get Scapia Federal (free) for zero-markup daily spending</S>, and pair it with <S>HDFC Infinia or Diners Club Black for hotel bookings, airline bookings, and lounge access.</S></p>
          <p>If you only want one card, Infinia gives the best combined package — reward rate, lounge access, transfer partners, and acceptable forex at 1.36% net. But for pure forex efficiency on high-volume international spending, nothing beats Scapia at ₹0.</p>
          <p>To see what your current card's international reward points are worth — including KrisFlyer transfer values — use the <a href="/" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>PointsMax calculator</a>. And check our <a href="/blog/singapore-airlines-krisflyer-india-guide-2026" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>KrisFlyer India guide</a> for how to turn those Infinia points into business class flights.</p>

          <div className="p-6 rounded-2xl text-center mt-8" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <p className="text-[16px] font-semibold">Check your card's international reward value</p>
            <p className="text-[13px] mt-1 mb-4" style={{ color: 'rgba(250,248,245,0.5)' }}>KrisFlyer transfers, SmartBuy, vouchers — every method ranked in rupees.</p>
            <a href="/" className="inline-block px-6 py-2.5 rounded-xl text-[14px] font-semibold" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>Open PointsMax Calculator →</a>
          </div>

          <p className="text-[11px] mt-8 leading-relaxed" style={{ color: 'var(--text-m)' }}>
            <strong>Disclaimer:</strong> Forex markup rates, reward structures, and card benefits change frequently. Always verify current terms on the issuer's website. Travel insurance coverage varies — read your policy documents before relying on card insurance abroad. PointsMax is not affiliated with any bank and earns no affiliate commissions. Not financial advice.
          </p>

          <FeedbackWidget pageSlug="best-credit-cards-international-travel-india-2026" pageTitle="Best Credit Cards for International Travel India 2026" />
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
            <p className="text-[13px] hidden sm:block" style={{ color: 'rgba(250,248,245,0.6)' }}>Check your <strong style={{ color: '#FAF8F5' }}>card's</strong> international travel value</p>
            <p className="text-[13px] sm:hidden" style={{ color: 'rgba(250,248,245,0.6)' }}>Check international points value</p>
            <a href="/" className="shrink-0 px-4 py-2 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>Open Calculator →</a>
          </div>
        </div>
      )}
    </div>
  )
}
