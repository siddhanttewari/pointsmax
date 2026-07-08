'use client'

import { useState, useEffect } from 'react'
import FeedbackWidget from '@/components/FeedbackWidget'
import PageNav from '@/components/PageNav'

const faqJsonLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Which is better: HDFC Diners Club Black or ICICI Emeralde Private Metal?', acceptedAnswer: { '@type': 'Answer', text: 'It depends on your spending and banking relationship. ICICI Emeralde Private Metal wins on deterministic everyday value — a flat 3% base including utilities, insurance, and education, unlimited lounge access for add-on cardholders, trip cancellation cover, and a fee-offsetting welcome basket. HDFC Diners Club Black wins for travel-heavy users who book flights and hotels through SmartBuy at ₹1 per point with 22 transfer partners, and it is easier to obtain than the invite-only Emeralde. After the July 2026 SmartBuy voucher cap, Diners Black lost some everyday-earning appeal, narrowing the gap in Emeralde\'s favour for non-travellers. For ICICI banking customers who use iShop, Emeralde is often the better card; for those in the HDFC travel ecosystem, Diners Black.' }},
    { '@type': 'Question', name: 'What is the difference in reward rate between Diners Black and Emeralde Private Metal?', acceptedAnswer: { '@type': 'Answer', text: 'HDFC Diners Club Black earns 5 reward points per ₹150 (about 3.33%) redeemable at ₹1 per point on SmartBuy travel, with up to 10X on SmartBuy flights and hotels. ICICI Emeralde Private Metal earns 6 reward points per ₹200 (a flat 3%) redeemable at ₹1 per point via iShop, with 6X on flights and vouchers and 12X on hotels. Diners Black has a marginally higher base rate, but Emeralde rewards utilities, insurance, and education that Diners Black and most premium cards exclude or cap.' }},
    { '@type': 'Question', name: 'Is ICICI Emeralde Private Metal harder to get than HDFC Diners Club Black?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. ICICI Emeralde Private Metal is strictly invite-only and relationship-driven, typically requiring ICICI Private Banking or wealth status, a salary around ₹3 lakh per month, or an existing ₹10 lakh-plus credit limit. HDFC Diners Club Black can be applied for directly and is attainable for salaried professionals meeting HDFC\'s income and credit criteria, making it significantly more accessible than the Emeralde.' }},
  ],
}

export default function BlogPost() {
  const [showBar, setShowBar] = useState(false)

  useEffect(() => {
    const fn = () => setShowBar(window.scrollY > 600)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const H2 = ({ children, id }) => (
    <h2 id={id} className="pt-8 scroll-mt-20" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', letterSpacing: '-0.01em' }}>{children}</h2>
  )
  const S = ({ children }) => <strong style={{ color: 'var(--text)' }}>{children}</strong>

  // Winner-by-category data
  const categories = [
    { cat: 'Base reward rate', diners: '3.33% (5 RP/₹150)', emeralde: '3% flat (6 RP/₹200)', winner: 'diners', note: 'Diners edges ahead on headline rate' },
    { cat: 'Utilities / insurance / education', diners: 'Mostly excluded', emeralde: '3% (with caps)', winner: 'emeralde', note: 'Emeralde rewards what others exclude' },
    { cat: 'Accelerated portal', diners: 'SmartBuy up to 10X', emeralde: 'iShop 6X / 12X hotels', winner: 'tie', note: 'Both strong; different ecosystems' },
    { cat: 'Everyday voucher earning', diners: 'Capped 3,000 pts/mo (Jul 2026)', emeralde: 'Not voucher-dependent', winner: 'emeralde', note: 'July HDFC cap hurt Diners here' },
    { cat: 'Lounge for add-on cards', diners: 'Unlimited', emeralde: 'Unlimited', winner: 'tie', note: 'Both cover add-ons — rare and valuable' },
    { cat: 'Trip cancellation cover', diners: 'No', emeralde: '₹12,000/yr', winner: 'emeralde', note: 'Emeralde-only benefit' },
    { cat: 'Transfer partners', diners: '22 partners', emeralde: 'Limited (Air India poor)', winner: 'diners', note: 'Diners far stronger for miles' },
    { cat: 'Welcome benefits', diners: 'Subscriptions bundle', emeralde: '12.5K pts + Taj + EazyDiner', winner: 'emeralde', note: 'Emeralde basket ≈ offsets fee' },
    { cat: 'Fee', diners: '₹10,000 (waived ₹8L)', emeralde: '₹12,499 (waived ₹10L)', winner: 'diners', note: 'Diners cheaper + lower waiver bar' },
    { cat: 'Accessibility', diners: 'Apply directly', emeralde: 'Invite-only', winner: 'diners', note: 'Diners far easier to get' },
  ]

  const Cell = ({ active }) => active
    ? <span className="inline-flex items-center justify-center w-5 h-5 rounded-full text-[11px] font-bold" style={{ background: 'var(--green)', color: '#fff' }}>✓</span>
    : <span style={{ color: 'var(--text-m)' }}>—</span>

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'HDFC Diners Club Black vs ICICI Emeralde Private Metal 2026', datePublished: '2026-07-04', dateModified: '2026-07-04', author: { '@type': 'Organization', name: 'PointsMax', url: 'https://www.pointsmax.in' }, publisher: { '@type': 'Organization', name: 'PointsMax', url: 'https://www.pointsmax.in' } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageNav />

      <article className="max-w-2xl mx-auto px-5 py-12">
        <div className="flex items-center gap-2 mb-8 text-[13px]" style={{ color: 'var(--text-m)' }}>
          <a href="/">PointsMax</a><span>/</span>
          <a href="/blog">Learn</a><span>/</span>
          <span style={{ color: 'var(--text-s)' }}>Diners Black vs Emeralde</span>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded" style={{ color: '#7c3aed', background: 'rgba(124,58,237,0.08)' }}>Comparison</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>July 4, 2026</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>10 min read</span>
        </div>

        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(24px, 4vw, 36px)', lineHeight: 1.15, letterSpacing: '-0.025em', color: 'var(--text)' }}>
          HDFC Diners Club Black vs ICICI Emeralde Private Metal 2026: Which Premium Card Wins?
        </h1>

        {/* DIRECT ANSWER BLOCK */}
        <div className="mt-8 p-5 rounded-2xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
          <p className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--text-m)' }}>Quick answer</p>
          <p className="text-[15px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
            <S>ICICI Emeralde Private Metal wins on guaranteed everyday value; HDFC Diners Club Black wins on travel and accessibility.</S> Emeralde's flat 3% includes utilities, insurance, and education (which Diners Black excludes), adds trip-cancellation cover, and its welcome basket offsets the fee — but it's strictly invite-only. Diners Black is cheaper (₹10,000 vs ₹12,499), easier to get, and stronger for travel with 22 transfer partners and ₹1/point SmartBuy travel. The July 2026 HDFC voucher cap dented Diners Black's everyday-earning edge, tilting things toward Emeralde for non-travellers. Bottom line: ICICI wealth customers who use iShop → Emeralde; travel-focused or those who can't get an invite → Diners Black.
          </p>
        </div>

        <p className="mt-6 text-[16px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
          These are two of India's best super-premium metal cards, priced within ₹2,500 of each other. Both give unlimited lounge access, strong reward rates, and a premium experience. But they win at different things — and a recent HDFC change shifted the balance. Here's the clear head-to-head.
        </p>

        <H2 id="at-a-glance">At a glance</H2>
        <div className="grid grid-cols-2 gap-3 mt-4">
          <div className="p-4 rounded-2xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
            <p className="text-[13px] font-bold mb-2" style={{ color: '#2563eb' }}>HDFC Diners Club Black</p>
            <div className="space-y-1.5 text-[12px]" style={{ color: 'var(--text-s)' }}>
              <p>💳 ₹10,000 fee (waived ₹8L)</p>
              <p>📈 3.33% base · ₹1/pt SmartBuy</p>
              <p>✈️ 22 transfer partners</p>
              <p>🛋️ Unlimited lounge (+ add-ons)</p>
              <p>✅ Apply directly</p>
            </div>
          </div>
          <div className="p-4 rounded-2xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
            <p className="text-[13px] font-bold mb-2" style={{ color: '#7c3aed' }}>ICICI Emeralde Private</p>
            <div className="space-y-1.5 text-[12px]" style={{ color: 'var(--text-s)' }}>
              <p>💳 ₹12,499 fee (waived ₹10L)</p>
              <p>📈 3% flat · incl. utilities/insurance</p>
              <p>🛍️ iShop 6X/12X accelerators</p>
              <p>🛋️ Unlimited lounge (+ add-ons)</p>
              <p>🔒 Invite-only</p>
            </div>
          </div>
        </div>

        <div className="mt-10 space-y-6 text-[15px] leading-[1.85]" style={{ color: 'var(--text-s)' }}>

          <H2 id="category-by-category">Winner by category</H2>
          <p>Here's how the two stack up across the ten things that actually matter:</p>
          <div className="space-y-2">
            {categories.map((c, i) => (
              <div key={i} className="p-3 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <div className="flex items-center justify-between mb-1.5">
                  <p className="text-[13px] font-semibold" style={{ color: 'var(--text)' }}>{c.cat}</p>
                  {c.winner === 'tie'
                    ? <span className="text-[10px] font-bold px-2 py-0.5 rounded" style={{ color: 'var(--text-m)', background: 'var(--bg-s)' }}>TIE</span>
                    : <span className="text-[10px] font-bold px-2 py-0.5 rounded" style={{ color: c.winner === 'diners' ? '#2563eb' : '#7c3aed', background: c.winner === 'diners' ? 'rgba(37,99,235,0.1)' : 'rgba(124,58,237,0.1)' }}>{c.winner === 'diners' ? 'DINERS' : 'EMERALDE'}</span>}
                </div>
                <div className="grid grid-cols-2 gap-2 text-[12px]">
                  <div className="flex items-center gap-1.5">
                    <Cell active={c.winner === 'diners' || c.winner === 'tie'} />
                    <span style={{ color: 'var(--text-s)' }}>{c.diners}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Cell active={c.winner === 'emeralde' || c.winner === 'tie'} />
                    <span style={{ color: 'var(--text-s)' }}>{c.emeralde}</span>
                  </div>
                </div>
                <p className="text-[11px] mt-1.5" style={{ color: 'var(--text-m)' }}>{c.note}</p>
              </div>
            ))}
          </div>

          {/* Mid CTA */}
          <div className="p-5 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <div>
              <p className="text-[14px] font-semibold">Which wins for your actual spend?</p>
              <p className="text-[12px] mt-1" style={{ color: 'rgba(250,248,245,0.5)' }}>Run both through the calculator to see real net value.</p>
            </div>
            <a href="/" className="shrink-0 px-5 py-2.5 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Open Calculator →</a>
          </div>

          <H2 id="rewards">Rewards & redemption</H2>
          <p><S>Diners Black earns 3.33% (5 RP per ₹150); Emeralde earns a flat 3% (6 RP per ₹200).</S> On headline rate, Diners Black is marginally ahead. But two things complicate that:</p>
          <p>First, <S>Emeralde rewards categories Diners Black doesn't</S> — utilities, insurance, and education earn the full 3% (with caps), where Diners Black and most premium cards exclude or heavily cap them. If you pay large insurance premiums or utility bills on card, Emeralde pulls ahead in practice.</p>
          <p>Second, <S>the July 2026 SmartBuy voucher cap changed the everyday-earning picture for Diners Black.</S> HDFC capped brand-voucher earning at 3,000 points/month (down from 10,000), so the popular voucher-loop strategy on everyday spend is now limited. Diners Black is still excellent for travel booked via SmartBuy — but its everyday edge narrowed. (See our <a href="/blog/hdfc-smartbuy-voucher-cap-july-2026" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>full breakdown of the voucher cap</a>.)</p>
          <p>On redemption, both give <S>₹1 per point</S> through their portals — Diners Black via SmartBuy (flights, hotels, Apple, Tanishq), Emeralde via iShop (flights, vouchers, premium brands). Both drop to ₹0.40 or less on statement credit, so always use the portal.</p>

          <H2 id="portals">SmartBuy vs iShop</H2>
          <p>Both cards live and die by their accelerated portal:</p>
          <div className="space-y-3">
            <div className="p-4 rounded-xl" style={{ background: '#EDF2FB', border: '1px solid #C5D4E8' }}>
              <p className="text-[13px] font-bold mb-1" style={{ color: '#2563eb' }}>HDFC SmartBuy</p>
              <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>Up to 10X on flights and hotels, ₹1/point redemption, and access to 22 airline/hotel transfer partners (KrisFlyer, Avios, and more still at strong ratios). The deepest travel-transfer ecosystem in India. The July 2026 voucher cap limits the everyday-voucher route, pushing value toward travel bookings.</p>
            </div>
            <div className="p-4 rounded-xl" style={{ background: '#F5F0FB', border: '1px solid #DDD0EE' }}>
              <p className="text-[13px] font-bold mb-1" style={{ color: '#7c3aed' }}>ICICI iShop</p>
              <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>6X on flights and vouchers, 12X on hotels — the highest hotel multiplier of any Indian portal. ₹1/point on flights, hotels, and premium brand vouchers (Apple, Tanishq, Tumi). Weaker on airline transfers than SmartBuy, so best for those who redeem for travel bookings and vouchers rather than miles.</p>
            </div>
          </div>
          <p>The verdict: <S>SmartBuy wins for airline-miles maximisers; iShop wins for hotel bookings and guaranteed portal value.</S></p>

          <H2 id="lounge-lifestyle">Lounge & lifestyle</H2>
          <p>Both give <S>unlimited domestic and international lounge access — and crucially, both extend it to add-on cardholders</S>, a rare and genuinely valuable benefit for couples and families. This one's a tie.</p>
          <p>Where Emeralde pulls ahead: <S>trip cancellation cover (up to ₹12,000/year)</S>, unlimited golf, and 12 guest lounge visits. Diners Black counters with a stronger complimentary-subscriptions bundle (Amazon Prime, Club Marriott, Times Prime, Swiggy One, MMT Black) that can exceed its ₹10,000 fee in face value alone.</p>

          <H2 id="welcome-fee">Welcome benefits & fee</H2>
          <p><S>Diners Black is cheaper — ₹10,000 vs ₹12,499 — with a lower fee-waiver bar (₹8L vs ₹10L annual spend).</S> Both are effectively free for their target spenders.</p>
          <p>On welcome benefits, Emeralde is stronger: <S>12,500 reward points (₹12,500 at iShop value) plus Taj Epicure and EazyDiner Prime memberships, repeated on renewal</S> — a basket that essentially offsets the fee in year one. Diners Black leans on its ongoing subscription bundle rather than a big welcome hit.</p>

          <H2 id="eligibility">Eligibility — the deciding factor for many</H2>
          <div className="p-4 rounded-xl" style={{ background: '#FBF8F0', border: '1px solid #E8DFC5' }}>
            <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>This is often what settles it. <S>Diners Black can be applied for directly</S> and is attainable for salaried professionals meeting HDFC's criteria. <S>Emeralde Private Metal is strictly invite-only</S> — typically requiring ICICI Private Banking/wealth status, ~₹3 lakh/month salary, or an existing ₹10 lakh+ credit limit. For many people, Emeralde simply isn't obtainable without a deep ICICI relationship, which makes Diners Black the practical choice regardless of the feature comparison.</p>
          </div>

          <H2 id="who-should">Which should you choose?</H2>
          <div className="space-y-3">
            <div className="p-4 rounded-xl" style={{ background: '#EDF2FB', border: '1px solid #C5D4E8' }}>
              <p className="text-[13px] font-bold mb-2" style={{ color: '#2563eb' }}>Choose HDFC Diners Club Black if:</p>
              <ul className="space-y-1.5 text-[13px]" style={{ color: 'var(--text-s)', listStyleType: 'none', padding: 0 }}>
                <li className="flex gap-2"><span style={{ color: '#2563eb' }}>→</span><span>You travel and value airline transfers — 22 partners beat Emeralde comfortably</span></li>
                <li className="flex gap-2"><span style={{ color: '#2563eb' }}>→</span><span>You want a lower fee (₹10,000) and lower waiver bar (₹8L)</span></li>
                <li className="flex gap-2"><span style={{ color: '#2563eb' }}>→</span><span>You can't get an Emeralde invite — Diners Black you can just apply for</span></li>
                <li className="flex gap-2"><span style={{ color: '#2563eb' }}>→</span><span>You value the subscription bundle (Prime, Club Marriott, MMT Black, etc.)</span></li>
              </ul>
            </div>
            <div className="p-4 rounded-xl" style={{ background: '#F5F0FB', border: '1px solid #DDD0EE' }}>
              <p className="text-[13px] font-bold mb-2" style={{ color: '#7c3aed' }}>Choose ICICI Emeralde Private Metal if:</p>
              <ul className="space-y-1.5 text-[13px]" style={{ color: 'var(--text-s)', listStyleType: 'none', padding: 0 }}>
                <li className="flex gap-2"><span style={{ color: '#7c3aed' }}>→</span><span>You're an ICICI wealth customer who can clear the invite bar</span></li>
                <li className="flex gap-2"><span style={{ color: '#7c3aed' }}>→</span><span>You pay large utilities/insurance/education on card — Emeralde rewards these</span></li>
                <li className="flex gap-2"><span style={{ color: '#7c3aed' }}>→</span><span>You want guaranteed everyday value over travel-transfer optionality</span></li>
                <li className="flex gap-2"><span style={{ color: '#7c3aed' }}>→</span><span>You value trip cancellation cover and the 12X hotel portal rate</span></li>
              </ul>
            </div>
          </div>

          <H2 id="bottom-line">The bottom line</H2>
          <p>These are both excellent cards, and for most people the decision comes down to two questions: <S>can you get the Emeralde invite, and do you travel enough to use Diners Black's transfer partners?</S></p>
          <p>If you're an ICICI wealth customer who spends across utilities and insurance and books hotels via iShop, Emeralde delivers the better guaranteed value — and the July 2026 HDFC voucher cap only strengthened that case for everyday spenders. If you travel frequently, want airline miles, prefer a lower fee, or simply can't get an Emeralde invite, Diners Club Black is the more practical and travel-rewarding choice.</p>
          <p>Read the full <a href="/blog/hdfc-diners-club-black-credit-card-review-2026" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>Diners Club Black review</a> and <a href="/blog/icici-emeralde-private-metal-credit-card-review-2026" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>Emeralde Private Metal review</a>, compare real value with the <a href="/" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>PointsMax calculator</a>, and see how the July change affects HDFC cards in our <a href="/blog/hdfc-smartbuy-voucher-cap-july-2026" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>SmartBuy voucher cap breakdown</a>.</p>

          <div className="p-6 rounded-2xl text-center mt-8" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <p className="text-[16px] font-semibold">Diners Black or Emeralde — which wins for you?</p>
            <p className="text-[13px] mt-1 mb-4" style={{ color: 'rgba(250,248,245,0.5)' }}>Run your spend through the calculator and compare real net value.</p>
            <a href="/" className="inline-block px-6 py-2.5 rounded-xl text-[14px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Open PointsMax Calculator →</a>
          </div>

          <p className="text-[11px] mt-8 leading-relaxed" style={{ color: 'var(--text-m)' }}>
            <strong>Disclaimer:</strong> Card terms, reward rates, benefits, and eligibility are based on publicly available information as of July 2026 and change without notice. The July 2026 SmartBuy voucher cap may be temporary. Always verify current terms with HDFC Bank and ICICI Bank before applying. PointsMax is not affiliated with either bank. Not financial advice.
          </p>

          <FeedbackWidget pageSlug="hdfc-diners-black-vs-icici-emeralde-private-2026" pageTitle="HDFC Diners Club Black vs ICICI Emeralde Private Metal 2026" />
        </div>
      </article>

      <footer className="py-10 px-5" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[12px]" style={{ color: 'var(--text-m)' }}>
            <a href="/">PointsMax</a><span className="mx-2">·</span>
            <a href="/about">About</a><span className="mx-2">·</span>
            <a href="/blog">Blog</a><span className="mx-2">·</span>
            <a href="/transfers">Transfers</a><span className="mx-2">·</span>
            <a href="/contact">Contact</a><span className="mx-2">·</span>
            <a href="/privacy">Privacy</a><span className="mx-2">·</span>
            <a href="/terms">Terms</a>
          </p>
        </div>
      </footer>

      {showBar && (
        <div className="hidden sm:block fixed bottom-0 left-0 right-0 z-50" style={{ background: 'var(--dark)', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '10px 16px' }}>
          <div className="max-w-2xl mx-auto flex items-center justify-between gap-3">
            <p className="text-[13px]" style={{ color: 'rgba(250,248,245,0.6)' }}><strong style={{ color: '#FAF8F5' }}>Diners Black vs Emeralde</strong> — which for you?</p>
            <a href="/" className="shrink-0 px-4 py-2 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Open Calculator →</a>
          </div>
        </div>
      )}
    </div>
  )
}
