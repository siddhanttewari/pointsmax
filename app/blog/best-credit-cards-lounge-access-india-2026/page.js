'use client'

import { useState, useEffect } from 'react'
import FeedbackWidget from '@/components/FeedbackWidget'
import PageNav from '@/components/PageNav'

const faqJsonLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Which credit card gives unlimited lounge access in India in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'HDFC Infinia is the benchmark for unlimited lounge access in India in 2026 — unlimited domestic visits, unlimited international via Priority Pass, no spend conditions, and add-on cardholders also get unlimited access. Other unlimited options include HDFC Diners Club Black, RBL\'s top-tier invite cards, and ICICI Emeralde Private Metal. Most of these are invite-only or require a strong banking relationship. Note that several previously-unlimited cards like Axis Magnus and Tata Neu Infinity now require ₹50,000 quarterly spend to unlock lounge access.' }},
    { '@type': 'Question', name: 'What happened to DreamFolks lounge access in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'DreamFolks, which aggregated domestic lounge access for most Indian credit cards, lost major airport contracts through 2025-2026 as airport operators brought lounge access in-house. ICICI phased out domestic DreamFolks access in July 2025. Lounge access is now fragmented across multiple networks: Priority Pass (international + limited domestic), Adani LoungeOne (Adani-operated airports like Ahmedabad, Jaipur, Lucknow, Guwahati), and HOI/Encalm (Bengaluru T2 and others). You now need to check which network your card and your departure airport use before travelling.' }},
    { '@type': 'Question', name: 'Is there a lifetime-free credit card with lounge access in India 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, a few lifetime-free cards still offer lounge access in 2026, though most now require monthly spend to unlock visits. Options include Scapia Federal (unlimited domestic after monthly spend, zero forex markup), IndusInd Tiger (complimentary domestic and international visits, no annual fee), AU ixigo (₹999 but effectively low-cost, no spend criteria for lounge), and IDFC FIRST Select/Wealth (lounge with ₹20K/month spend). Pure no-spend, no-fee lounge access has largely disappeared.' }},
  ],
}

export default function BlogPost() {
  const [showBar, setShowBar] = useState(false)
  const [budget, setBudget] = useState('unlimited')

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
    unlimited: {
      label: 'Unlimited (premium)',
      cards: [
        { name: 'HDFC Infinia', fee: '₹12,500', access: 'Unlimited domestic + intl', spend: 'No spend condition', note: 'The benchmark. Add-on cards also unlimited. Invite-only.', best: true },
        { name: 'HDFC Diners Club Black', fee: '₹10,000', access: 'Unlimited domestic + intl', spend: 'No spend condition', note: 'Same access as Infinia, ₹2,500 cheaper. Diners network.', best: false },
        { name: 'ICICI Emeralde Private Metal', fee: '₹12,499', access: 'Unlimited domestic + intl', spend: 'No spend condition', note: '12 guest visits/yr — best for family travel. Invite-only.', best: false },
        { name: 'Axis Reserve', fee: '₹50,000', access: 'Unlimited via Priority Pass', spend: 'No spend condition', note: 'Ultra-premium. High fee, niche.', best: false },
      ],
    },
    midrange: {
      label: 'Mid-range (₹2,500-5,000)',
      cards: [
        { name: 'SBI Card Elite', fee: '₹4,999', access: '8 domestic + 6 intl', spend: 'No spend condition ✓', note: 'Strongest mid-range — no quarterly spend gate.', best: true },
        { name: 'Axis Atlas', fee: '₹5,000', access: '12-18 domestic by tier + intl', spend: 'No spend condition', note: 'Lounge scales with Silver/Gold/Platinum tier.', best: false },
        { name: 'HDFC Regalia Gold', fee: '₹2,500', access: '6 domestic + 6 intl (Priority Pass)', spend: '4 txns for Priority Pass', note: 'Cheapest with intl access. Add-on gets access too.', best: false },
        { name: 'SBI Prime', fee: '₹2,999', access: '8 domestic + 4 intl', spend: 'No spend condition ✓', note: 'Reliable no-spend domestic access.', best: false },
      ],
    },
    free: {
      label: 'Lifetime-free / low-cost',
      cards: [
        { name: 'Scapia Federal', fee: '₹0 (LTF)', access: 'Unlimited domestic*', spend: '*After monthly spend', note: 'LTF + zero forex markup. Spend unlocks lounge.', best: true },
        { name: 'IndusInd Tiger', fee: '₹0 (LTF)', access: 'Domestic + intl visits', spend: 'No annual fee', note: 'LTF with both domestic & intl. Low forex.', best: false },
        { name: 'AU ixigo', fee: '₹999', access: 'Domestic, no spend gate', spend: 'No spend condition ✓', note: 'Low fee, reliable no-spend domestic lounge.', best: false },
        { name: 'IDFC FIRST Wealth', fee: '₹0 (LTF)', access: 'Domestic with spend', spend: '₹20K/month', note: 'LTF but needs monthly spend to unlock.', best: false },
      ],
    },
  }

  const activeTier = TIERS[budget]

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Best Credit Cards for Lounge Access India 2026', datePublished: '2026-06-19', dateModified: '2026-06-19', author: { '@type': 'Organization', name: 'PointsMax' }, publisher: { '@type': 'Organization', name: 'PointsMax', url: 'https://www.pointsmax.in' } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageNav />

      <article className="max-w-2xl mx-auto px-5 py-12">
        <div className="flex items-center gap-2 mb-8 text-[13px]" style={{ color: 'var(--text-m)' }}>
          <a href="/">PointsMax</a><span>/</span>
          <a href="/blog">Learn</a><span>/</span>
          <span style={{ color: 'var(--text-s)' }}>Best Lounge Access Cards</span>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded" style={{ color: 'var(--green)', background: 'rgba(45,106,79,0.08)' }}>Guide</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>June 19, 2026</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>10 min read</span>
        </div>

        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(24px, 4vw, 36px)', lineHeight: 1.15, letterSpacing: '-0.025em', color: 'var(--text)' }}>
          Best Credit Cards for Lounge Access India 2026: After the DreamFolks Collapse
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
          Airport lounge access in India broke in 2025 — DreamFolks lost its grip, networks fragmented, and "unlimited" quietly became "₹50,000 quarterly spend" on many cards. Here's what actually works in 2026, and which network your card really uses now.
        </p>

        {/* The big change callout */}
        <div className="mt-8 p-5 rounded-2xl" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
          <p className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: 'rgba(250,248,245,0.4)' }}>What changed in 2025-2026</p>
          <p className="text-[14px] leading-relaxed" style={{ color: 'rgba(250,248,245,0.75)' }}>
            For years, <S>DreamFolks</S> was the invisible plumbing behind almost every Indian card's domestic lounge access. Through 2025, airport operators began pulling lounge access in-house — ICICI phased out domestic DreamFolks access in July 2025, and access fragmented across <S>three separate networks</S>. Your card might still say "complimentary lounge access," but which lounges you can actually enter now depends on your departure airport's operator. This guide accounts for that.
          </p>
        </div>

        <div className="mt-10 space-y-6 text-[15px] leading-[1.85]" style={{ color: 'var(--text-s)' }}>

          <H2>First: understand the three networks</H2>
          <p>Before picking a card, understand the post-DreamFolks landscape. There are now three main lounge networks, and your card uses one or more of them:</p>

          <div className="space-y-3">
            {[
              { name: 'Priority Pass', color: '#0891b2', bg: '#ECFEFF', border: '#CFFAFE', coverage: '1,700+ lounges in 140+ countries', detail: 'Still the gold standard for international access. Domestic India coverage is limited (~25-30 lounges at major airports). Cards with Priority Pass were unaffected by the DreamFolks collapse. Cards: HDFC Infinia, Diners Club Black, Axis Reserve, Amex Platinum, SBI Prime/Elite, ICICI Emeralde.' },
              { name: 'Adani LoungeOne', color: 'var(--gold, #B8953E)', bg: '#FBF8F0', border: '#E8DFC5', coverage: 'All Adani-operated airports', detail: 'Handles lounges at Ahmedabad, Jaipur, Lucknow, Mangalore, Guwahati, Trivandrum, Pune — expanding through 2026. Download the Adani LoungeOne app, link your card, generate a QR code at the lounge. If you fly through these airports, this is the network that matters.' },
              { name: 'HOI / Encalm', color: '#7c3aed', bg: '#F5F3FF', border: '#DDD6FE', coverage: 'Bengaluru T2 and select airports', detail: 'Bengaluru\'s new Terminal 2 routes lounge access through HOI as of Q1 2026, though Encalm is still finalising the full T2 rollout. Always confirm in-app before your flight if departing from BLR T2.' },
            ].map((n, i) => (
              <div key={i} className="rounded-xl overflow-hidden" style={{ border: `1px solid ${n.border}` }}>
                <div className="px-4 py-3 flex items-center justify-between" style={{ background: n.bg }}>
                  <p className="text-[14px] font-bold" style={{ color: n.color }}>{n.name}</p>
                  <span className="text-[11px] font-semibold" style={{ color: n.color }}>{n.coverage}</span>
                </div>
                <div className="px-4 py-3" style={{ background: 'var(--card)' }}>
                  <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>{n.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
            <p className="text-[13px] font-bold mb-1" style={{ color: 'var(--red)' }}>The practical headache</p>
            <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>You can no longer assume "my card has lounge access" means you'll get in at any airport. Before travelling, check whether your departure airport uses Priority Pass, Adani LoungeOne, or HOI — and whether your card supports that network. Keep the relevant apps installed. Walk-in lounge fees are <S>₹1,500-2,500</S> if you get it wrong.</p>
          </div>

          <H2>Best cards by budget</H2>

          <div className="flex gap-1.5 mb-4">
            {Object.entries(TIERS).map(([key, t]) => (
              <button key={key} onClick={() => setBudget(key)}
                className="flex-1 py-2 px-2 rounded-xl text-[12px] font-semibold transition-all"
                style={{ background: budget === key ? 'var(--dark)' : 'var(--bg-s)', color: budget === key ? '#FAF8F5' : 'var(--text-s)', border: '1px solid var(--border)' }}>
                {t.label.split(' ')[0]}
              </button>
            ))}
          </div>

          <p className="text-[13px] font-semibold" style={{ color: 'var(--text)' }}>{activeTier.label}</p>
          <div className="space-y-3">
            {activeTier.cards.map((card, i) => (
              <div key={i} className="p-4 rounded-xl" style={{ background: 'var(--card)', border: card.best ? '2px solid var(--green)' : '1px solid var(--border)' }}>
                <div className="flex items-start justify-between gap-2 flex-wrap mb-1">
                  <div className="flex items-center gap-2">
                    <p className="text-[15px] font-semibold" style={{ color: 'var(--text)' }}>{card.name}</p>
                    {card.best && <span className="text-[10px] font-bold px-1.5 py-0.5 rounded" style={{ color: 'var(--green)', background: 'rgba(45,106,79,0.1)' }}>TOP PICK</span>}
                  </div>
                  <span className="text-[12px] font-mono" style={{ color: 'var(--text-m)' }}>{card.fee}</span>
                </div>
                <div className="flex items-center gap-2 flex-wrap mb-2">
                  <span className="text-[12px] font-semibold" style={{ color: 'var(--green)' }}>{card.access}</span>
                  <span className="text-[11px] px-2 py-0.5 rounded-full" style={{ background: 'var(--bg-s)', color: card.spend.includes('✓') ? 'var(--green)' : 'var(--text-m)', border: '1px solid var(--border)' }}>{card.spend}</span>
                </div>
                <p className="text-[12px]" style={{ color: 'var(--text-m)' }}>{card.note}</p>
              </div>
            ))}
          </div>

          {/* Mid CTA */}
          <div className="p-5 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <div>
              <p className="text-[14px] font-semibold">Is your lounge card's fee worth it?</p>
              <p className="text-[12px] mt-1" style={{ color: 'rgba(250,248,245,0.5)' }}>Factor in lounge value + rewards to see real breakeven.</p>
            </div>
            <a href="/tools/breakeven" className="shrink-0 px-5 py-2.5 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Breakeven Calculator →</a>
          </div>

          <H2>The "unlimited became conditional" trap</H2>
          <p>The most important 2026 development for existing cardholders: <S>several cards that used to offer unlimited or generous lounge access now gate it behind spend requirements.</S></p>
          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-[13px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead><tr>
                <th className="text-left py-3 px-3 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Card</th>
                <th className="text-left py-3 px-2 font-semibold" style={{ color: 'var(--red)', borderBottom: '1px solid var(--border)' }}>New condition (2026)</th>
              </tr></thead>
              <tbody>
                {[
                  ['Axis Magnus', '₹50,000 spend in last 3 months to keep lounge access'],
                  ['Tata Neu Infinity (HDFC)', '₹50,000 quarterly spend to unlock lounge (since June 2025)'],
                  ['Several RBL cards', '₹35,000-50,000 spend rule for lounge unlock'],
                  ['HDFC Regalia (base)', '₹1 lakh quarterly spend for reliable lounge benefit'],
                ].map(([card, cond], i) => (
                  <tr key={i}>
                    <td className="py-2.5 px-3 font-medium" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{card}</td>
                    <td className="py-2.5 px-2 text-[12px]" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>{cond}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>If lounge access is your primary reason for holding a card, prioritise cards with <S>no spend condition</S> — SBI Elite, SBI Prime, HDFC Regalia Gold (after the one-time 4-transaction Priority Pass activation), or the unlimited premium cards.</p>

          <H2>Our picks by traveller type</H2>
          <div className="space-y-3">
            {[
              { type: 'Frequent flyer, high spender', pick: 'HDFC Infinia or Diners Club Black', why: 'Unlimited domestic + international, no spend gate, add-on cards included. The Diners Black saves ₹2,500 vs Infinia for identical access. If you can get either, nothing else competes.' },
              { type: 'Family traveller', pick: 'ICICI Emeralde Private Metal', why: '12 complimentary guest visits per year is the differentiator — most unlimited cards only cover the primary cardholder generously. Best for couples/families travelling together.' },
              { type: 'Moderate traveller, value-focused', pick: 'SBI Card Elite or HDFC Regalia Gold', why: 'SBI Elite gives 8 domestic + 6 international with zero spend condition at ₹4,999. Regalia Gold is the cheapest with international access at ₹2,500.' },
              { type: 'Budget / first card', pick: 'Scapia Federal or AU ixigo', why: 'Scapia is lifetime-free with unlimited domestic (after monthly spend) plus zero forex markup. AU ixigo at ₹999 gives reliable no-spend domestic access.' },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl" style={{ background: '#EDF5F0', border: '1px solid #C8DDD0' }}>
                <p className="text-[12px] font-semibold uppercase tracking-wide mb-1" style={{ color: 'var(--text-m)' }}>{item.type}</p>
                <p className="text-[14px] font-bold mb-1" style={{ color: 'var(--green)' }}>→ {item.pick}</p>
                <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>{item.why}</p>
              </div>
            ))}
          </div>

          <H2>How to never get turned away at a lounge</H2>
          <div className="space-y-2">
            {[
              'Install the right apps before you travel: Priority Pass, Adani LoungeOne, and HOI/Encalm if relevant to your route',
              'Check your departure airport\'s operator — Adani airports (Ahmedabad, Jaipur, Lucknow, Guwahati, etc.) need the LoungeOne app',
              'For HDFC Regalia Gold and similar, complete the one-time 4-transaction requirement to activate Priority Pass before your trip',
              'Confirm your card\'s current lounge terms — spend conditions changed in 2025-2026 and "unlimited" may now require quarterly spend',
              'Carry a backup: if your primary card\'s network isn\'t supported at an airport, a second card on a different network saves the ₹1,500-2,500 walk-in fee',
            ].map((tip, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="w-6 h-6 rounded-full grid place-items-center text-[11px] font-bold shrink-0 mt-0.5" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>{i+1}</span>
                <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>{tip}</p>
              </div>
            ))}
          </div>

          <H2>The bottom line</H2>
          <p>Lounge access in India is no longer the simple "premium card = lounge" equation it once was. <S>The DreamFolks collapse fragmented domestic access across Priority Pass, Adani LoungeOne, and HOI</S> — and many cards quietly added spend conditions in 2025-2026.</p>
          <p>For unconditional unlimited access, HDFC Infinia and Diners Club Black remain unmatched. For value, SBI Elite and HDFC Regalia Gold deliver reliable no-spend access at mid-range fees. And for budget-conscious travellers, Scapia and AU ixigo keep lounge access accessible without a premium fee. Whatever you hold, the new reality is: <S>check the network and the spend condition before you fly.</S></p>
          <p>Use the <a href="/tools/breakeven" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>Fee Breakeven Calculator</a> to see whether your lounge card's fee is justified by your actual usage, and compare full card value with the <a href="/" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>PointsMax calculator</a>. For the premium cards mentioned, see our <a href="/blog/hdfc-infinia-credit-card-review-2026" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>HDFC Infinia review</a> and <a href="/blog/hdfc-diners-club-black-credit-card-review-2026" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>Diners Club Black review</a>.</p>

          <div className="p-6 rounded-2xl text-center mt-8" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <p className="text-[16px] font-semibold">Is your lounge card actually worth its fee?</p>
            <p className="text-[13px] mt-1 mb-4" style={{ color: 'rgba(250,248,245,0.5)' }}>Factor in lounge visits + reward value to find your real breakeven.</p>
            <a href="/tools/breakeven" className="inline-block px-6 py-2.5 rounded-xl text-[14px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Open Breakeven Calculator →</a>
          </div>

          <p className="text-[11px] mt-8 leading-relaxed" style={{ color: 'var(--text-m)' }}>
            <strong>Disclaimer:</strong> Lounge access networks, card terms, and spend conditions are changing rapidly in 2025-2026 following the DreamFolks restructuring. Details here are based on publicly available information as of June 2026 and may change without notice. Always verify your card's current lounge terms and your departure airport's network in the relevant app before travelling. PointsMax is not affiliated with any bank or lounge network. Not financial advice.
          </p>

          <FeedbackWidget pageSlug="best-credit-cards-lounge-access-india-2026" pageTitle="Best Credit Cards for Lounge Access India 2026" />
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
            <p className="text-[13px]" style={{ color: 'rgba(250,248,245,0.6)' }}>Is your <strong style={{ color: '#FAF8F5' }}>lounge card</strong> worth the fee?</p>
            <a href="/tools/breakeven" className="shrink-0 px-4 py-2 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Breakeven Calculator →</a>
          </div>
        </div>
      )}
    </div>
  )
}
