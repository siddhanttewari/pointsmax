'use client'

import { useState, useEffect } from 'react'
import FeedbackWidget from '@/components/FeedbackWidget'
import PageNav from '@/components/PageNav'

const faqJsonLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is HDFC Infinia better than Axis Magnus in 2026?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, HDFC Infinia is clearly better than Axis Magnus in 2026. After the April 2026 devaluation, Axis Magnus cut its transfer ratio from 5:4 to 5:2, removed Marriott Bonvoy, Accor, and Qatar Airways as partners, and discontinued the monthly milestone program. At the same ₹12,500 annual fee, Infinia offers ₹1/point on SmartBuy vs Magnus\'s ₹0.50/point on Travel EDGE, 22 transfer partners at 1:1 ratio vs Magnus\'s 10 at 5:2, and a lower fee waiver threshold of ₹10L vs Magnus\'s ₹15L.' }
    },
    {
      '@type': 'Question',
      name: 'What is the effective reward rate of HDFC Infinia vs Axis Magnus in 2026?',
      acceptedAnswer: { '@type': 'Answer', text: 'HDFC Infinia gives an effective reward rate of 3.33% on SmartBuy travel and voucher bookings (5 points per ₹150, at ₹1/point). Axis Magnus gives approximately 1.5-2% via Travel EDGE portal (12 EDGE points per ₹200 at ₹0.25/point effective), or 1.2% via airline transfers at the 5:2 ratio. Infinia\'s rate is more than double Magnus post-devaluation.' }
    },
    {
      '@type': 'Question',
      name: 'Can I switch from Axis Magnus to HDFC Infinia?',
      acceptedAnswer: { '@type': 'Answer', text: 'You cannot directly switch — they are cards from different banks. HDFC Infinia requires an invitation or meeting specific criteria (typically HDFC banking relationship with ₹8-10L+ in deposits or salary account). If you currently have Magnus and want Infinia, apply via HDFC NetBanking or speak with your HDFC relationship manager. You can hold both cards simultaneously if eligible.' }
    },
  ],
}

export default function BlogPost() {
  const [showBar, setShowBar] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')

  useEffect(() => {
    const fn = () => setShowBar(window.scrollY > 600)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const H2 = ({ children }) => (
    <h2 className="pt-8" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', letterSpacing: '-0.01em' }}>
      {children}
    </h2>
  )
  const S = ({ children }) => <strong style={{ color: 'var(--text)' }}>{children}</strong>

  const ROWS = [
    { label: 'Annual fee', infinia: '₹12,500', magnus: '₹12,500', winner: null, note: 'Same fee — different value delivered' },
    { label: 'Fee waiver', infinia: '₹10L spend', magnus: '₹15L spend', winner: 'infinia', note: 'Infinia waived ₹5L earlier per year' },
    { label: 'Base earn rate', infinia: '3.33% (5 pts/₹150)', magnus: '3% (12 pts/₹200)', winner: null, note: 'Similar base, but redemption value diverges sharply' },
    { label: 'Best ₹/point', infinia: '₹1.00 (SmartBuy)', magnus: '₹0.50 (Travel EDGE)', winner: 'infinia', note: '2x better redemption value at every spend level' },
    { label: 'Effective return (SmartBuy/portal)', infinia: '3.33%', magnus: '1.5%', winner: 'infinia', note: 'Infinia more than doubles Magnus on portal redemptions' },
    { label: 'Transfer ratio', infinia: '1:1', magnus: '5:2 (post-Apr 2026)', winner: 'infinia', note: 'Magnus halved its ratio in April 2026' },
    { label: 'Transfer partners', infinia: '22 partners', magnus: '10 partners', winner: 'infinia', note: 'Marriott, Accor, Qatar removed from Magnus in Apr 2026' },
    { label: 'Marriott Bonvoy', infinia: '✅ Available', magnus: '❌ Removed Apr 2026', winner: 'infinia', note: null },
    { label: 'KrisFlyer ratio', infinia: '1:1 (best)', magnus: '5:2 (poor)', winner: 'infinia', note: 'For DEL-SIN business class: 10K pts → 10K miles vs 4K miles' },
    { label: 'Monthly SmartBuy cap', infinia: '15,000 pts/month', magnus: 'No SmartBuy access', winner: 'infinia', note: 'Magnus only has Travel EDGE portal' },
    { label: 'Intl lounge access', infinia: 'Unlimited (primary + add-on)', magnus: 'Unlimited Priority Pass', winner: null, note: 'Both unlimited internationally' },
    { label: 'Lounge guest visits', infinia: 'Unlimited', magnus: '4/year (capped)', winner: 'infinia', note: 'Magnus capped guest lounge visits' },
    { label: 'Forex markup', infinia: '2% (net ~1.36% after GVP)', magnus: '2% (no cashback offset)', winner: 'infinia', note: 'GVP gives 1% back on international spend on Infinia' },
    { label: 'Renewal benefit', infinia: '12,500 pts on renewal', magnus: '❌ Discontinued', winner: 'infinia', note: 'Magnus discontinued its renewal benefit' },
    { label: 'Monthly milestone', infinia: 'Up to 5 redemptions/mo', magnus: '❌ Discontinued Apr 2026', winner: 'infinia', note: 'Was Magnus\'s best feature — now gone' },
    { label: 'How to get', infinia: 'Invite / HDFC banking', magnus: 'Direct application', winner: 'magnus', note: 'Magnus easier to get; Infinia requires relationship' },
    { label: 'Travel insurance', infinia: '₹50L medical, ₹3Cr air accident', magnus: '₹50L medical, ₹3Cr air accident', winner: null, note: 'Similar coverage' },
  ]

  const tabs = ['overview', 'rewards', 'travel', 'verdict']

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'HDFC Infinia vs Axis Magnus 2026', datePublished: '2026-06-03', author: { '@type': 'Organization', name: 'PointsMax' }, publisher: { '@type': 'Organization', name: 'PointsMax', url: 'https://www.pointsmax.in' } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageNav />

      <article className="max-w-2xl mx-auto px-5 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 text-[13px]" style={{ color: 'var(--text-m)' }}>
          <a href="/">PointsMax</a><span>/</span>
          <a href="/blog">Learn</a><span>/</span>
          <span style={{ color: 'var(--text-s)' }}>Infinia vs Magnus</span>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded" style={{ color: '#7c3aed', background: 'rgba(124,58,237,0.08)' }}>Comparison</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>June 3, 2026</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>10 min read</span>
        </div>

        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(24px, 4vw, 36px)', lineHeight: 1.15, letterSpacing: '-0.025em', color: 'var(--text)' }}>
          HDFC Infinia vs Axis Magnus 2026: The Honest Comparison After April's Devaluation
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
          Same ₹12,500 annual fee. Completely different value after April 2026. Here's every dimension compared — with real numbers, not marketing claims.
        </p>

        {/* Verdict card */}
        <div className="mt-8 p-5 rounded-2xl" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
          <p className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: 'rgba(250,248,245,0.4)' }}>Quick verdict</p>
          <div className="grid grid-cols-2 gap-4">
            {[
              { card: 'HDFC Infinia', score: '4.5/5', status: 'Winner', color: 'var(--green)', verdict: 'Best all-round premium card in India. ₹1/pt on SmartBuy, 1:1 KrisFlyer, 22 partners. Worth every rupee of the fee.' },
              { card: 'Axis Magnus', score: '2.8/5', status: 'Fallen behind', color: 'var(--red)', verdict: 'Post-April 2026, significantly devalued. Half the transfer ratio, best partners removed. Hard to justify at ₹12,500.' },
            ].map((v, i) => (
              <div key={i} className="p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <p className="text-[13px] font-bold mb-1" style={{ color: '#FAF8F5' }}>{v.card}</p>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[18px] font-mono font-bold" style={{ color: v.color }}>{v.score}</span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded" style={{ color: v.color, background: v.color + '20' }}>{v.status}</span>
                </div>
                <p className="text-[12px] leading-relaxed" style={{ color: 'rgba(250,248,245,0.55)' }}>{v.verdict}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 space-y-6 text-[15px] leading-[1.85]" style={{ color: 'var(--text-s)' }}>

          <p>For three years, the debate was genuine. Axis Magnus's high earn rate and premium transfer partners made it a real challenger to HDFC Infinia. Some months, Magnus won. Some months, Infinia did. The answer genuinely depended on your spending pattern.</p>
          <p>April 2, 2026 ended that debate. <S>Axis removed Marriott, Accor, and Qatar from its partner list overnight.</S> It halved the transfer ratio from 5:4 to 5:2 without prior notice. It discontinued the monthly milestone program that had been Magnus's best feature for high spenders. At the same ₹12,500 annual fee, Magnus now delivers roughly half the value it did three months ago.</p>
          <p>The comparison below reflects the current state of both cards as of June 2026.</p>

          <H2>The full head-to-head</H2>

          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-[13px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead>
                <tr>
                  <th className="text-left py-3 px-3 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)', minWidth: '120px' }}></th>
                  <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>HDFC Infinia</th>
                  <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--red)', borderBottom: '1px solid var(--border)' }}>Axis Magnus</th>
                  <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--text-m)', borderBottom: '1px solid var(--border)', minWidth: '60px' }}>Winner</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r, i) => (
                  <tr key={i}>
                    <td className="py-2.5 px-3 font-medium" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{r.label}</td>
                    <td className="py-2.5 px-2 text-center text-[12px]" style={{ color: r.winner === 'infinia' ? 'var(--green)' : 'var(--text-s)', fontWeight: r.winner === 'infinia' ? 600 : 400, borderBottom: '1px solid var(--border)' }}>{r.infinia}</td>
                    <td className="py-2.5 px-2 text-center text-[12px]" style={{ color: r.magnus.includes('❌') || r.winner === 'infinia' ? 'var(--text-m)' : r.winner === 'magnus' ? 'var(--green)' : 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>{r.magnus}</td>
                    <td className="py-2.5 px-2 text-center text-[12px]" style={{ borderBottom: '1px solid var(--border)' }}>
                      {r.winner === 'infinia' && <span className="font-bold" style={{ color: 'var(--green)' }}>Infinia ✓</span>}
                      {r.winner === 'magnus' && <span className="font-bold" style={{ color: 'var(--gold)' }}>Magnus ✓</span>}
                      {!r.winner && <span style={{ color: 'var(--text-m)' }}>Tie</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[12px]" style={{ color: 'var(--text-m)' }}>All data as of June 2026. Magnus figures reflect post-April 2026 devaluation.</p>

          <H2>The rewards gap — in real rupees</H2>
          <p>Numbers tell the story more clearly than any comparison table. Consider a cardholder spending ₹10 lakh annually, split roughly 60% general spend, 30% travel/SmartBuy, 10% forex:</p>

          <div className="space-y-3">
            {[
              { label: 'Annual spend', infinia: '₹10,00,000', magnus: '₹10,00,000' },
              { label: 'Points earned (base)', infinia: '33,333 pts', magnus: '60,000 EDGE pts' },
              { label: 'Value at best redemption', infinia: '₹33,333 (SmartBuy @₹1/pt)', magnus: '₹15,000 (Travel EDGE @₹0.25/pt)' },
              { label: 'KrisFlyer miles (via transfer)', infinia: '33,333 miles (1:1)', magnus: '24,000 miles (5:2)' },
              { label: 'Annual fee', infinia: '₹0 (waived at ₹10L)', magnus: '₹12,500 (waiver needs ₹15L)' },
              { label: 'Net value', infinia: '₹33,333', magnus: '₹2,500 (after paying fee)', highlight: true },
            ].map((r, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl" style={{ background: r.highlight ? 'var(--dark)' : 'var(--card)', border: `1px solid ${r.highlight ? 'transparent' : 'var(--border)'}` }}>
                <span className="text-[13px] font-medium" style={{ color: r.highlight ? 'rgba(250,248,245,0.6)' : 'var(--text)' }}>{r.label}</span>
                <div className="flex gap-6 text-right">
                  <span className="text-[12px] font-mono" style={{ color: r.highlight ? 'var(--green)' : 'var(--green)', minWidth: '120px' }}>{r.infinia}</span>
                  <span className="text-[12px] font-mono" style={{ color: r.highlight ? '#fca5a5' : 'var(--text-m)', minWidth: '120px' }}>{r.magnus}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-2">The difference is stark: at ₹10L spend, <S>Infinia delivers ₹33,333 in value with the fee waived</S>, while Magnus delivers ₹15,000 with ₹12,500 deducted for the fee — a net of ₹2,500. That's a 13x difference in net annual value from the same spend.</p>

          {/* Mid CTA */}
          <div className="p-5 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <div>
              <p className="text-[14px] font-semibold">Check your exact points value</p>
              <p className="text-[12px] mt-1" style={{ color: 'rgba(250,248,245,0.5)' }}>Enter your balance, see rupee value for both cards side by side.</p>
            </div>
            <a href="/" className="shrink-0 px-5 py-2.5 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>Open Calculator →</a>
          </div>

          <H2>Where Magnus still has an edge</H2>
          <p>To be fair, Magnus isn't worthless in every scenario:</p>
          <div className="space-y-3">
            {[
              { title: 'Easier to get', desc: 'Infinia is invite-only or requires a specific HDFC banking relationship. Magnus can be applied for directly — making it the only realistic option for many applicants in the premium segment.' },
              { title: 'High spenders above ₹1.5L/month', desc: 'Magnus earns 35 EDGE points per ₹200 above ₹1.5L monthly spend. At that earn rate, even the 5:2 transfer ratio produces competitive airline mile yields — approximately 2.5% effective return. But only if you actually spend above ₹1.5L/month consistently.' },
              { title: 'Axis Burgundy customers', desc: 'If your primary banking is with Axis Burgundy, Magnus integrates naturally with your relationship. The Burgundy version retains a more favourable ratio and the card fits within an existing banking ecosystem.' },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl" style={{ background: '#EDF5F0', border: '1px solid #C8DDD0' }}>
                <p className="text-[13px] font-semibold mb-1" style={{ color: 'var(--green)' }}>✓ {item.title}</p>
                <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <H2>If you currently hold Axis Magnus: what should you do?</H2>

          <div className="space-y-3">
            <div className="p-4 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
              <p className="text-[13px] font-bold mb-2" style={{ color: 'var(--text)' }}>Keep Magnus if:</p>
              <ul className="space-y-1.5 text-[13px]" style={{ color: 'var(--text-s)', listStyleType: 'none', padding: 0 }}>
                <li className="flex gap-2"><span style={{ color: 'var(--green)' }}>→</span><span>You bank with Axis Burgundy and the card is part of your banking relationship</span></li>
                <li className="flex gap-2"><span style={{ color: 'var(--green)' }}>→</span><span>You spend above ₹1.5L/month and hit the accelerated earn rate consistently</span></li>
                <li className="flex gap-2"><span style={{ color: 'var(--green)' }}>→</span><span>You use Travel EDGE for bookings and ₹0.50/point works for your use case</span></li>
                <li className="flex gap-2"><span style={{ color: 'var(--green)' }}>→</span><span>You can't qualify for Infinia yet and Magnus is your best current option</span></li>
              </ul>
            </div>
            <div className="p-4 rounded-xl" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
              <p className="text-[13px] font-bold mb-2" style={{ color: 'var(--red)' }}>Switch to Infinia if:</p>
              <ul className="space-y-1.5 text-[13px]" style={{ color: 'var(--text-s)', listStyleType: 'none', padding: 0 }}>
                <li className="flex gap-2"><span style={{ color: 'var(--red)' }}>→</span><span>You were using Magnus primarily for Marriott, Accor, or Qatar transfers — those are gone</span></li>
                <li className="flex gap-2"><span style={{ color: 'var(--red)' }}>→</span><span>You have or can establish an HDFC banking relationship to qualify for an invite</span></li>
                <li className="flex gap-2"><span style={{ color: 'var(--red)' }}>→</span><span>You spend ₹10-15L annually — Infinia waives at ₹10L, Magnus needs ₹15L</span></li>
                <li className="flex gap-2"><span style={{ color: 'var(--red)' }}>→</span><span>Your primary goal is airline miles — Infinia's 1:1 KrisFlyer ratio doubles Magnus's yield</span></li>
              </ul>
            </div>
          </div>

          <H2>What about HDFC Diners Club Black?</H2>
          <p>Worth flagging: if you can't get Infinia, <S>HDFC Diners Club Black gives identical rewards at ₹10,000/year</S> — ₹2,500 cheaper than Infinia and Magnus both, with a lower fee waiver threshold of ₹8L. The only practical limitation is Diners Club network acceptance, which is patchy in some Southeast Asian countries. As a primary India card, Diners Black is as strong as Infinia.</p>
          <p>Read our full <a href="/blog/hdfc-diners-club-black-credit-card-review-2026" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>Diners Club Black review</a> for the full comparison.</p>

          <H2>The bottom line</H2>
          <p>Before April 2026, this was a nuanced comparison. After April 2026, it isn't. <S>If you spend ₹10L+ annually and can qualify for HDFC Infinia, there's no scenario where Axis Magnus at the same price is the better card.</S></p>
          <p>The only reason to choose Magnus over Infinia today is accessibility — Magnus can be applied for directly, while Infinia requires an HDFC relationship or invitation. That's a real constraint for many applicants, and Magnus remains a serviceable card. But as the objectively better option at an identical price, Infinia wins on every dimension that matters in 2026.</p>
          <p>To see exactly what your existing points are worth on either card — and compare redemption paths — use the <a href="/" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>PointsMax calculator</a>. And check the <a href="/blog/credit-card-devaluation-tracker-india-2026" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>devaluation tracker</a> for the full documented history of what changed and when.</p>

          <div className="p-6 rounded-2xl text-center mt-8" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <p className="text-[16px] font-semibold">See what your Infinia or Magnus points are worth</p>
            <p className="text-[13px] mt-1 mb-4" style={{ color: 'rgba(250,248,245,0.5)' }}>Every redemption method ranked by ₹ value. Updated for post-April 2026 rates.</p>
            <a href="/" className="inline-block px-6 py-2.5 rounded-xl text-[14px] font-semibold" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>Open PointsMax Calculator →</a>
          </div>

          <p className="text-[11px] mt-8 leading-relaxed" style={{ color: 'var(--text-m)' }}>
            <strong>Disclaimer:</strong> All figures based on publicly available card T&Cs, bank websites, and SmartBuy/Travel EDGE portal rates as of June 2026. Reward rates, partner availability, and fee structures change without notice. Always verify current terms before applying or transferring points. PointsMax is not affiliated with HDFC Bank or Axis Bank. Not financial advice.
          </p>

          <FeedbackWidget pageSlug="hdfc-infinia-vs-axis-magnus-2026" pageTitle="HDFC Infinia vs Axis Magnus 2026" />
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
            <p className="text-[13px]" style={{ color: 'rgba(250,248,245,0.6)' }}>Compare <strong style={{ color: '#FAF8F5' }}>Infinia vs Magnus</strong> points value</p>
            <a href="/" className="shrink-0 px-4 py-2 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>Open Calculator →</a>
          </div>
        </div>
      )}
    </div>
  )
}
