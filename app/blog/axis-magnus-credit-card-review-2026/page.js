'use client'

import { useState, useEffect } from 'react'
import FeedbackWidget from '@/components/FeedbackWidget'
import PageNav from '@/components/PageNav'

const blogJsonLd = {
  '@context': 'https://schema.org', '@type': 'Product',
  name: 'Axis Magnus Credit Card',
  brand: { '@type': 'Brand', name: 'Axis Bank' },
  category: 'Credit Card',
  description: 'Axis Magnus is a premium travel credit card that was significantly devalued in April 2026, with Marriott, Accor, and Qatar Airways removed as transfer partners and the transfer ratio halved from 5:4 to 5:2.',
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '3.2', bestRating: '5', worstRating: '1', reviewCount: '1' },
  review: {
    '@type': 'Review',
    reviewRating: { '@type': 'Rating', ratingValue: '3.2', bestRating: '5', worstRating: '1' },
    author: { '@type': 'Organization', name: 'PointsMax' },
    datePublished: '2026-05-26',
    reviewBody: 'Post April 2026 devaluation, Axis Magnus has lost its best transfer partners and halved its conversion ratio. The card still offers decent value for Axis Burgundy banking customers who travel, but it can no longer be recommended as a primary premium card over HDFC Infinia or Diners Club Black.',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is Axis Magnus credit card worth it after the April 2026 devaluation?', acceptedAnswer: { '@type': 'Answer', text: 'For most users, no — not as a primary premium card. The April 2026 devaluation removed Marriott Bonvoy, Accor, and Qatar Airways as transfer partners and halved the transfer ratio from 5:4 to 5:2. The monthly milestone program was also discontinued. HDFC Infinia or Diners Club Black now offer substantially better value for the same ₹12,500 fee. Magnus still makes sense for Axis Burgundy banking customers who specifically use Travel EDGE for hotel bookings.' }},
    { '@type': 'Question', name: 'What transfer partners does Axis Magnus have after April 2026?', acceptedAnswer: { '@type': 'Answer', text: 'After April 2026, Axis Magnus transfer partners include Group A: Air Canada Aeroplan, Japan Airlines, Singapore Airlines KrisFlyer (capped at 1 lakh points). Group B: Air France-KLM Flying Blue, Air India Flying Returns, ITC Hotels, IHG One Rewards, British Airways Avios, Finnair Plus, Vietnam Airlines Lotusmiles (capped at 4 lakh points). Marriott Bonvoy, Accor Live Limitless, and Qatar Airways were removed.' }},
    { '@type': 'Question', name: 'What is the Axis Magnus EDGE reward points value in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'On the Axis Magnus, 1 EDGE reward point is worth ₹0.20 via the EDGE rewards portal. Via Travel EDGE portal for flight/hotel bookings, the effective value is approximately ₹0.50 per point. Via airline transfers at the new 5:2 ratio, the value varies by program — roughly ₹0.40-0.80 per point depending on the redemption.' }},
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
      <>
      <PageNav />
      <article className="max-w-2xl mx-auto px-5 py-12">
        <div className="flex items-center gap-2 mb-8 text-[13px]" style={{ color: 'var(--text-m)' }}>
          <a href="/" className="hover:text-black/50 transition-colors">PointsMax</a><span>/</span>
          <a href="/blog" className="hover:text-black/50 transition-colors">Blog</a><span>/</span>
          <span style={{ color: 'var(--text-s)' }}>Axis Magnus Review</span>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded" style={{ color: '#2563eb', background: 'rgba(37,99,235,0.06)' }}>Card Review</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>May 26, 2026</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>11 min read</span>
        </div>

        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(24px, 4vw, 36px)', lineHeight: 1.15, letterSpacing: '-0.025em', color: 'var(--text)' }}>
          Axis Magnus Review 2026: Still Worth ₹12,500 After the April Massacre?
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
          Marriott gone. Accor gone. Qatar gone. Transfer ratio halved overnight with zero notice. Here's what's left — and whether you should keep the card.
        </p>

        {/* Quick verdict */}
        <div className="mt-8 p-5 rounded-2xl" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
          <div className="flex items-center justify-between mb-3">
            <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: 'rgba(250,248,245,0.4)' }}>Quick Verdict</p>
            <div className="flex items-center gap-1">
              {[1,2,3].map(i => <span key={i} style={{ color: 'var(--gold-l)' }}>★</span>)}
              <span style={{ color: 'rgba(250,248,245,0.2)' }}>★</span>
              <span style={{ color: 'rgba(250,248,245,0.2)' }}>★</span>
              <span className="text-[13px] font-mono font-bold ml-1" style={{ color: 'var(--gold-l)' }}>3.2/5</span>
            </div>
          </div>
          <p className="text-[14px] leading-relaxed" style={{ color: 'rgba(250,248,245,0.8)' }}>
            Axis Magnus was a compelling card before April 2026. After the devaluation, it's an average card at a premium price. The removal of Marriott, Accor, and Qatar Airways — combined with the transfer ratio cut from 5:4 to 5:2 and milestone program discontinuation — has stripped out the card's best features. For new applicants, HDFC Infinia or Diners Club Black are now clearly superior at the same price point. Existing Magnus holders who bank with Axis Burgundy and use Travel EDGE for hotel bookings can still extract acceptable value, but as a primary travel card, it's been overtaken.
          </p>
        </div>

        <div className="mt-10 space-y-6 text-[15px] leading-[1.85]" style={{ color: 'var(--text-s)' }}>

          <p>On April 2, 2026, Axis Bank cardholders woke up to an email they hadn't expected.</p>
          <p>Three of the most popular transfer partners — <S>Marriott Bonvoy, Accor Live Limitless, and Qatar Airways Privilege Club</S> — had been removed from the Magnus transfer program. No 30-day advance notice (which Axis's own MITC requires). No migration option. Gone overnight.</p>
          <p>That same update also <S>halved the transfer ratio from 5:4 to 5:2</S>. Meaning 50,000 EDGE points that previously converted to 40,000 airline miles now convert to only 20,000. And the monthly milestone program — which let high spenders earn an extra 25,000 points per month — was discontinued entirely.</p>
          <p>The India credit card community was livid, and rightly so. This review covers what the card looks like in May 2026 — after all the damage — and whether it's worth keeping.</p>

          <H2>Everything that changed in April 2026</H2>

          <div className="space-y-2">
            {[
              { label: 'Transfer partners removed', value: 'Marriott Bonvoy, Accor Live Limitless, Qatar Airways Privilege Club', type: 'bad' },
              { label: 'New partners added', value: 'British Airways Avios, Finnair Plus, Vietnam Airlines Lotusmiles (all at worse ratios)', type: 'neutral' },
              { label: 'Transfer ratio (standard Magnus)', value: '5:4 → 5:2 (effectively halved)', type: 'bad' },
              { label: 'Monthly milestone program', value: 'Discontinued. Max 72,000 reward points/year at base rate.', type: 'bad' },
              { label: 'Transfer caps', value: 'Group A: max 1 lakh points/year. Group B: max 4 lakh points/year.', type: 'bad' },
              { label: 'Prior notice given', value: 'Zero — implemented overnight on April 2', type: 'bad' },
              { label: 'Burgundy Private exception', value: 'Magnus for Burgundy Private keeps 5:4 ratio', type: 'good' },
            ].map((r, i) => (
              <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl" style={{
                background: r.type === 'bad' ? '#FDF1EF' : r.type === 'good' ? '#EDF5F0' : 'var(--bg-s)',
                border: `1px solid ${r.type === 'bad' ? '#E8C5BF' : r.type === 'good' ? '#C8DDD0' : 'var(--border)'}`,
              }}>
                <span style={{ color: r.type === 'bad' ? 'var(--red)' : r.type === 'good' ? 'var(--green)' : 'var(--text-m)', fontSize: '14px' }}>{r.type === 'bad' ? '✕' : r.type === 'good' ? '✓' : '→'}</span>
                <div>
                  <p className="text-[13px] font-semibold" style={{ color: 'var(--text)' }}>{r.label}</p>
                  <p className="text-[13px] mt-0.5" style={{ color: 'var(--text-s)' }}>{r.value}</p>
                </div>
              </div>
            ))}
          </div>

          <p>The most damaging part isn't even the partner removals — it's the <S>5:4 to 5:2 ratio change</S>. This means the effective reward rate on transfers dropped from roughly 2% to 1.2%. For a ₹12,500/year premium travel card, 1.2% is an embarrassingly thin return.</p>

          <H2>What are EDGE reward points worth now?</H2>

          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-[13px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead><tr>
                <th className="text-left py-3 px-3 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Redemption method</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>₹/point</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Rating</th>
              </tr></thead>
              <tbody>
                {[
                  ['Travel EDGE portal (flights/hotels)', '₹0.50', 'BEST', 'var(--green)'],
                  ['Airline transfers (5:2 ratio, best program)', '₹0.40-0.60', 'OKAY', 'var(--gold)'],
                  ['Hotel transfers (5:2 ratio)', '₹0.30-0.40', 'POOR', 'var(--red)'],
                  ['EDGE rewards portal (products/vouchers)', '₹0.20', 'AVOID', 'var(--red)'],
                ].map(([m, v, r, c], i) => (
                  <tr key={i}>
                    <td className="py-2.5 px-3 font-medium" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{m}</td>
                    <td className="py-2.5 px-2 text-center font-mono font-bold" style={{ color: c, borderBottom: '1px solid var(--border)' }}>{v}</td>
                    <td className="py-2.5 px-2 text-center" style={{ borderBottom: '1px solid var(--border)' }}>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded" style={{ color: c, background: c + '12' }}>{r}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>The best redemption is now the <S>Travel EDGE portal at ₹0.50/point</S> — not transfers. This is a significant reversal from the card's original value proposition which was built entirely around airline/hotel transfers. The portal gives you predictable value without the cap constraints.</p>
          <p>Check the exact rupee value of your EDGE points using the <a href="/" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>PointsMax calculator</a>.</p>

          <H2>Transfer partners after April 2026</H2>
          <p>The remaining partner network, split into groups with annual caps:</p>

          <div className="p-4 rounded-xl mb-3" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
            <p className="text-[12px] font-bold uppercase tracking-widest mb-3" style={{ color: '#0891b2' }}>Group A — max 1 lakh points/year (5:2 ratio)</p>
            <div className="space-y-1.5 text-[13px]" style={{ color: 'var(--text-s)' }}>
              <p>🇨🇦 Air Canada Aeroplan</p>
              <p>🇯🇵 Japan Airlines Mileage Bank</p>
              <p>🇸🇬 Singapore Airlines KrisFlyer</p>
            </div>
          </div>
          <div className="p-4 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
            <p className="text-[12px] font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--gold)' }}>Group B — max 4 lakh points/year (5:2 ratio)</p>
            <div className="space-y-1.5 text-[13px]" style={{ color: 'var(--text-s)' }}>
              <p>🇫🇷 Air France-KLM Flying Blue</p>
              <p>🇮🇳 Air India Flying Returns</p>
              <p>🏨 ITC Hotels</p>
              <p>🏨 IHG One Rewards</p>
              <p>🇬🇧 British Airways Avios (new, April 2026)</p>
              <p>🇫🇮 Finnair Plus (new, April 2026)</p>
              <p>🇻🇳 Vietnam Airlines Lotusmiles (new, April 2026)</p>
            </div>
          </div>

          <div className="p-4 rounded-xl mt-3" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
            <p className="text-[13px] font-bold mb-1" style={{ color: 'var(--red)' }}>The new partners don't compensate</p>
            <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>British Airways and Finnair Plus were added but at 5:2 ratio, making them worth about ₹0.40-0.50/point. The same programs on HDFC Infinia transfer at 1:1, giving ₹1.00/point or more. So Magnus users transferring to BA Avios get roughly half the value of Infinia users doing the same transfer.</p>
          </div>

          {/* Mid-article CTA */}
          <div className="p-5 rounded-xl my-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <div>
              <p className="text-[14px] font-semibold">Have Axis Magnus EDGE points?</p>
              <p className="text-[12px] mt-1" style={{ color: 'rgba(250,248,245,0.5)' }}>See which redemption gives you the best ₹ value right now.</p>
            </div>
            <a href="/" className="shrink-0 px-5 py-2.5 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>Check My Points →</a>
          </div>

          <H2>What still works on Axis Magnus</H2>
          <p>Despite the damage, not everything is broken. Here's what still delivers value:</p>

          <ul className="space-y-2 pl-1" style={{ listStyleType: 'none' }}>
            <li className="flex gap-2"><span style={{ color: 'var(--green)' }}>✓</span><span><S>Travel EDGE portal at ₹0.50/point.</S> For straightforward flight and hotel bookings, this is predictable and decent. The portal aggregates multiple booking options.</span></li>
            <li className="flex gap-2"><span style={{ color: 'var(--green)' }}>✓</span><span><S>Unlimited lounge access.</S> Still available for primary and add-on holders domestically and internationally. This alone is worth ₹15,000-20,000/year for frequent flyers.</span></li>
            <li className="flex gap-2"><span style={{ color: 'var(--green)' }}>✓</span><span><S>Low forex markup of 2%.</S> Competitive for international transactions.</span></li>
            <li className="flex gap-2"><span style={{ color: 'var(--green)' }}>✓</span><span><S>High earn rate for Burgundy customers.</S> Magnus for Burgundy still earns 35 EDGE points per ₹200 at ₹1.5L/month spend milestone — meaningful if you're a heavy spender.</span></li>
            <li className="flex gap-2"><span style={{ color: 'var(--green)' }}>✓</span><span><S>Fee waiver at ₹15L spend.</S> At this spend level, the effective return via Travel EDGE (1.5L × ₹0.50/pt) is reasonable.</span></li>
          </ul>

          <H2>Axis Magnus vs HDFC Infinia: the comparison that matters</H2>

          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-[13px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead><tr>
                <th className="text-left py-3 px-3 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}></th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--red)', borderBottom: '1px solid var(--border)' }}>Axis Magnus</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>HDFC Infinia</th>
              </tr></thead>
              <tbody>
                {[
                  ['Annual fee', '₹12,500', '₹12,500'],
                  ['Fee waiver', '₹15L spend', '₹10L spend ✓'],
                  ['Best ₹/point', '₹0.50 (Travel EDGE)', '₹1.00 (SmartBuy) ✓'],
                  ['Effective reward rate', '1.5-2%', '3.33% ✓'],
                  ['Transfer ratio', '5:2 (poor)', '1:1 ✓'],
                  ['Transfer partners', '10 (with caps)', '22 (no caps) ✓'],
                  ['Marriott Bonvoy', '❌ Removed', '✓ Available'],
                  ['Singapore KrisFlyer', '5:2 ratio', '1:1 ratio ✓'],
                  ['Monthly milestone', '❌ Discontinued', '5 redemptions/month ✓'],
                  ['How to get', 'Direct application', 'Invite only'],
                  ['Retention requirement', 'Less strict', '₹18L or ₹50L bank'],
                ].map(([l, m, i], idx) => (
                  <tr key={idx}>
                    <td className="py-2.5 px-3 font-medium" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{l}</td>
                    <td className="py-2.5 px-2 text-center text-[12px]" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>{m}</td>
                    <td className="py-2.5 px-2 text-center text-[12px]" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)', fontWeight: 500 }}>{i}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4">The comparison is brutal. <S>At the same ₹12,500 annual fee, Infinia gives twice the per-point value, more than twice the transfer partners, better ratios, and a lower fee waiver threshold.</S> There's no reasonable scenario where Magnus is better than Infinia for a new card seeker today.</p>
          <p>The only reason to pick Magnus over Infinia is if you bank with Axis and can't get Infinia. Read our <a href="/blog/hdfc-infinia-credit-card-review-2026" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>full Infinia review</a> for the comparison in detail.</p>

          <H2>Who should still keep Axis Magnus?</H2>

          <div className="space-y-3">
            <div className="p-4 rounded-xl" style={{ background: '#EDF5F0', border: '1px solid #C8DDD0' }}>
              <p className="text-[13px] font-semibold mb-1" style={{ color: 'var(--green)' }}>Keep it if...</p>
              <ul className="space-y-1.5 text-[13px]" style={{ color: 'var(--text-s)' }}>
                <li>→ You're an Axis Burgundy customer and the card was provided as part of your relationship</li>
                <li>→ You primarily use Travel EDGE for hotel bookings and the ₹0.50/point value works for you</li>
                <li>→ You hit ₹1.5L/month consistently and earn the high-spend milestone rate</li>
                <li>→ The unlimited lounge access is genuinely valuable to you (8+ visits/year)</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
              <p className="text-[13px] font-semibold mb-1" style={{ color: 'var(--red)' }}>Switch if...</p>
              <ul className="space-y-1.5 text-[13px]" style={{ color: 'var(--text-s)' }}>
                <li>→ You were primarily using Marriott, Accor, or Qatar transfers — those are gone</li>
                <li>→ You're looking for the best overall premium card — Infinia wins clearly</li>
                <li>→ You don't have Axis Burgundy banking — the card makes less sense without that relationship</li>
                <li>→ You spend under ₹8L/year — the fee won't be waived and returns won't justify the cost</li>
              </ul>
            </div>
          </div>

          <H2>The bottom line</H2>
          <p>Axis Magnus was a compelling card in 2023-2024. In May 2026, it's not. The April devaluation removed its best features — Marriott for luxury hotel redemptions, Accor for guaranteed fixed value, Qatar for Qsuite — and halved the transfer ratio on everything that remained.</p>
          <p>What's left is a ₹12,500/year card that gives you ₹0.50/point on Travel EDGE and 1.2% effective return via transfers. HDFC Diners Club Black gives ₹1.00/point on SmartBuy at ₹10,000/year with a lower fee waiver. There's no world where Magnus is the right choice for a new applicant today.</p>
          <p>If you have existing EDGE points, use the <a href="/" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>PointsMax calculator</a> to find the best current redemption. Travel EDGE at ₹0.50/point is likely your best bet given the transfer ratio changes. Check all <a href="/transfers" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>current Axis transfer partners</a> before transferring — availability and caps change frequently post-devaluation.</p>
          <p>If you're deciding between Magnus and another premium card, read our <a href="/blog/best-credit-cards-india-2026" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>best credit cards by spend level</a> guide for the full picture.</p>

          <div className="p-6 rounded-2xl text-center mt-8" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <p className="text-[16px] font-semibold">Check your Axis Magnus EDGE points value</p>
            <p className="text-[13px] mt-1 mb-4" style={{ color: 'rgba(250,248,245,0.5)' }}>Travel EDGE, airline transfers, portal — every option ranked by ₹ value.</p>
            <a href="/" className="inline-block px-6 py-2.5 rounded-xl text-[14px] font-semibold" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>Open PointsMax Calculator →</a>
          </div>

          <p className="text-[11px] mt-8 leading-relaxed" style={{ color: 'var(--text-m)' }}>
            <strong>Disclaimer:</strong> Based on publicly available information from Axis Bank's website and Travel EDGE T&Cs as of May 2026. Transfer ratios, partner availability, and earn rates change without notice. Always verify current terms at axisbank.com. PointsMax is not affiliated with Axis Bank. Not financial advice.
          </p>

          <FeedbackWidget pageSlug="axis-magnus-credit-card-review-2026" pageTitle="Axis Magnus Credit Card Review 2026" />
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
            <p className="text-[13px] hidden sm:block" style={{ color: 'rgba(250,248,245,0.6)' }}>Check your <strong style={{ color: '#FAF8F5' }}>Axis Magnus</strong> points value</p>
            <p className="text-[13px] sm:hidden" style={{ color: 'rgba(250,248,245,0.6)' }}>Check EDGE points value</p>
            <a href="/" className="shrink-0 px-4 py-2 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>Open Calculator →</a>
          </div>
        </div>
      )}
    </div>
  )
}
