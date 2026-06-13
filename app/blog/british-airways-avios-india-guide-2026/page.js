'use client'

import { useState, useEffect } from 'react'
import FeedbackWidget from '@/components/FeedbackWidget'
import PageNav from '@/components/PageNav'

const faqJsonLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How do I earn British Airways Avios in India?', acceptedAnswer: { '@type': 'Answer', text: 'The most direct way to earn Avios in India is the IndusInd Bank Avios Visa Infinite Credit Card, which earns 3 Avios per ₹200 spent (5 Avios per ₹200 on British Airways flights) and offers a 20,000 Avios welcome bonus. It is the only India co-branded card that earns Avios directly. You select either British Airways or Qatar Airways as your linked program at application. Avios can also be reached indirectly by transferring from other programs, though India has limited direct bank transfer partners to Avios compared to the US.' }},
    { '@type': 'Question', name: 'Can Avios be used across British Airways, Qatar Airways, and Iberia?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Avios is a shared currency across British Airways Club, Qatar Airways Privilege Club, Iberia Plus, Finnair Plus, and Aer Lingus AerClub. You can transfer Avios freely between all these programs at a 1:1 ratio with no fee, as many times as you like, provided the account names match. This lets you earn Avios through any one program and move them to whichever program offers the best award price or availability for your route.' }},
    { '@type': 'Question', name: 'What is the best Avios sweet spot from India?', acceptedAnswer: { '@type': 'Answer', text: 'The standout Avios sweet spot for Indian travellers is Qatar Airways Qsuites business class, bookable via Avios. Qatar business class awards from India to Europe or the US via Doha cost roughly 70,000-87,500 Avios round-trip plus relatively low taxes (under $200), significantly cheaper in fees than booking the same Qsuites through British Airways directly, which can carry $400-800 in surcharges. Booking via Qatar Privilege Club or Iberia Plus avoids BA fuel surcharges.' }},
  ],
}

export default function BlogPost() {
  const [showBar, setShowBar] = useState(false)

  useEffect(() => {
    const fn = () => setShowBar(window.scrollY > 600)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const H2 = ({ children }) => (
    <h2 className="pt-8" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', letterSpacing: '-0.01em' }}>{children}</h2>
  )
  const S = ({ children }) => <strong style={{ color: 'var(--text)' }}>{children}</strong>

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'British Airways Avios India Guide 2026', datePublished: '2026-06-17', dateModified: '2026-06-17', author: { '@type': 'Organization', name: 'PointsMax' }, publisher: { '@type': 'Organization', name: 'PointsMax', url: 'https://www.pointsmax.in' } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageNav />

      <article className="max-w-2xl mx-auto px-5 py-12">
        <div className="flex items-center gap-2 mb-8 text-[13px]" style={{ color: 'var(--text-m)' }}>
          <a href="/">PointsMax</a><span>/</span>
          <a href="/blog">Learn</a><span>/</span>
          <span style={{ color: 'var(--text-s)' }}>British Airways Avios India</span>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded" style={{ color: '#0891b2', background: 'rgba(8,145,178,0.08)' }}>Loyalty Hub</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>June 17, 2026</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>11 min read</span>
        </div>

        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(24px, 4vw, 36px)', lineHeight: 1.15, letterSpacing: '-0.025em', color: 'var(--text)' }}>
          British Airways Avios India Guide 2026: The Qatar Qsuites Sweet Spot Most Indians Miss
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
          Avios isn't just British Airways — it's a shared currency across five airlines, including Qatar Airways and its award-winning Qsuites. For Indian travellers, that opens a business-class sweet spot most people never discover. Here's the complete guide.
        </p>

        {/* Quick stats */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { n: '5', label: 'Airlines share Avios' },
            { n: '1:1', label: 'Free transfers between them' },
            { n: '~70K', label: 'Qatar J round-trip (Avios)' },
            { n: '1', label: 'India card earns Avios direct' },
          ].map((s, i) => (
            <div key={i} className="p-3 rounded-xl text-center" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
              <p className="text-[20px] font-mono font-bold" style={{ color: 'var(--text)' }}>{s.n}</p>
              <p className="text-[11px] mt-0.5" style={{ color: 'var(--text-m)' }}>{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 space-y-6 text-[15px] leading-[1.85]" style={{ color: 'var(--text-s)' }}>

          <p>Most Indian points guides treat British Airways Avios as a niche, fuel-surcharge-heavy program not worth the effort. That reputation is half-right and half-outdated. The key insight that changes everything: <S>Avios is not a British Airways currency — it's a shared currency across five airlines.</S></p>
          <p>British Airways Club, Qatar Airways Privilege Club, Iberia Plus, Finnair Plus, and Aer Lingus AerClub all use Avios, and you can move Avios between them <S>freely at 1:1, with no fee, as many times as you want</S> (as long as account names match). This means you earn Avios once and then route them to whichever program prices your specific flight best. For Indian travellers, the most valuable destination program in that group is Qatar Airways.</p>

          <H2>The Avios ecosystem — one currency, five airlines</H2>
          <div className="grid gap-2">
            {[
              { airline: 'British Airways Club', strength: 'Short-haul distance-based awards, Oneworld partners (Cathay, JAL)', note: 'High fuel surcharges on BA metal' },
              { airline: 'Qatar Airways Privilege Club', strength: 'Qsuites business class, low taxes via Doha', note: 'Best for India → Europe/US business' },
              { airline: 'Iberia Plus', strength: 'Lowest fuel surcharges, Oneworld bookings via Madrid', note: 'Great for avoiding BA surcharges' },
              { airline: 'Finnair Plus', strength: 'Competitive business class via Helsinki', note: 'Good own-metal availability' },
              { airline: 'Aer Lingus AerClub', strength: 'Transatlantic via Dublin', note: 'Niche but useful for US East Coast' },
            ].map((a, i) => (
              <div key={i} className="p-3 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <p className="text-[13px] font-semibold" style={{ color: 'var(--text)' }}>{a.airline}</p>
                <p className="text-[12px] mt-0.5" style={{ color: 'var(--green)' }}>{a.strength}</p>
                <p className="text-[12px] mt-0.5" style={{ color: 'var(--text-m)' }}>{a.note}</p>
              </div>
            ))}
          </div>
          <p>The power move: earn Avios in whichever program is easiest for you (in India, that's usually via British Airways or Qatar through the IndusInd card), then <S>transfer to the program with the best award price for your trip.</S> A Qatar Qsuites flight might price better through Qatar Privilege Club; a Cathay Pacific award might price better through British Airways. Same Avios, moved for free.</p>

          <H2>How to earn Avios in India</H2>
          <p>This is where India differs sharply from the US. American cardholders can transfer from Amex, Chase, Capital One, and others into Avios. In India, the direct earning options are far narrower — which makes the one dedicated card especially important.</p>

          <div className="p-5 rounded-2xl" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <p className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: 'rgba(250,248,245,0.4)' }}>The only direct-earn card in India</p>
            <p className="text-[15px] font-bold mb-1" style={{ color: '#FAF8F5' }}>IndusInd Bank Avios Visa Infinite</p>
            <div className="space-y-2 text-[13px] mt-3">
              {[
                ['Joining fee', '₹10,000 + GST'],
                ['Annual fee', '₹5,000 + GST'],
                ['Base earn rate', '3 Avios per ₹200 spent'],
                ['On BA/Qatar flights', '5 Avios per ₹200 spent'],
                ['Welcome bonus', '20,000 Avios on joining'],
                ['Renewal bonus', '5,000 Avios'],
                ['Milestone', '18,000 Avios at ₹8L spend, +18,000 at next ₹8L'],
                ['Forex markup', '1.5% for chosen destination (low)'],
                ['Lounge', '2 domestic + 2 international/quarter (Priority Pass)'],
              ].map(([label, val], i) => (
                <div key={i} className="flex justify-between py-1.5" style={{ borderBottom: i < 8 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                  <span style={{ color: 'rgba(250,248,245,0.5)' }}>{label}</span>
                  <span className="font-mono font-semibold text-right" style={{ color: 'rgba(250,248,245,0.85)' }}>{val}</span>
                </div>
              ))}
            </div>
          </div>
          <p>At application you choose <S>either British Airways or Qatar Airways</S> as your linked program — the card product changes accordingly, and Avios credit to that program's account. Since Avios transfer freely between the two anyway, the Qatar variant is often preferred because Qatar periodically runs strong signup promotions (a 40,000 Avios offer ran until January 2026, though such offers are pulled without notice).</p>
          <p>The milestone structure is the real value: <S>18,000 Avios at ₹8L spend and another 18,000 at ₹16L</S> means a high spender earns 36,000 milestone Avios per year on top of base earning — enough to meaningfully contribute toward a business class redemption.</p>

          {/* Mid CTA */}
          <div className="p-5 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <div>
              <p className="text-[14px] font-semibold">Compare Avios earning vs your current card</p>
              <p className="text-[12px] mt-1" style={{ color: 'rgba(250,248,245,0.5)' }}>See whether a dedicated Avios card beats your everyday rewards.</p>
            </div>
            <a href="/" className="shrink-0 px-5 py-2.5 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Open Calculator →</a>
          </div>

          <H2>The Qatar Qsuites sweet spot — the reason to care</H2>
          <p>Qatar Airways Qsuites is consistently rated among the best business class products in the world — fully enclosed suites with sliding doors and lie-flat beds. And because Qatar uses Avios, it's bookable with points.</p>
          <div className="p-4 rounded-xl" style={{ background: '#EDF5F0', border: '1px solid #C8DDD0' }}>
            <p className="text-[13px] font-bold mb-2" style={{ color: 'var(--green)' }}>The India advantage: Doha is a natural hub</p>
            <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>India sits perfectly for Qatar's network — Doha (DOH) is a short hop from most Indian metros, and connects onward to Europe, the US, and Africa. Qatar business class awards via Avios from India run roughly <S>70,000-87,500 Avios round-trip to Europe</S>, plus taxes typically under $200 — dramatically cheaper in fees than the $400-800 surcharges British Airways adds on its own metal. Booking the same Qsuites seat through Qatar Privilege Club or Iberia Plus avoids those BA fuel surcharges entirely.</p>
          </div>
          <p>This is the redemption that justifies the whole exercise: <S>fly one of the world's best business class products from India to Europe for ~70,000 Avios and modest taxes</S> — value that's hard to match through any other Indian points pathway.</p>

          <H2>The intermediary transfer trick</H2>
          <p>Here's an advanced move worth knowing. Because Avios pools across programs, you can <S>bridge gaps between credit card points and Avios using an intermediary program.</S></p>
          <p>The classic example (more relevant for those holding international cards): points that can reach Qatar Privilege Club can then be moved onward to British Airways Club, or vice versa, for free at 1:1. So even if your points program partners with only one Avios airline, you effectively gain access to all five. Always check award pricing in each program before transferring — the same flight can cost different Avios amounts depending on which program you book through, and transfers are one-way once made.</p>
          <div className="p-4 rounded-xl" style={{ background: '#FBF8F0', border: '1px solid #E8DFC5' }}>
            <p className="text-[13px]" style={{ color: 'var(--text-s)' }}><strong style={{ color: 'var(--gold, #B8953E)' }}>Rule of thumb: </strong>Earn Avios wherever is easiest, but always <S>search the award in all relevant Avios programs before transferring</S>. Book through the program with the lowest combined Avios + taxes for your specific route. A Cathay award might be cheapest via BA; a Qsuites award cheapest via Qatar.</p>
          </div>

          <H2>Where Avios still disappoints</H2>
          <div className="space-y-3">
            {[
              { title: 'British Airways own-metal fuel surcharges', why: 'Booking BA-operated flights with Avios still carries heavy fuel surcharges (₹30,000-60,000+ on long-haul). Always check whether an Iberia or Qatar routing avoids these before booking BA directly.' },
              { title: 'Limited India direct-earn options', why: 'Unlike the US with its many transfer partners, India has essentially one dedicated Avios card (IndusInd). If you can\'t or don\'t want that card, building a meaningful Avios balance in India is slow.' },
              { title: 'Award availability volatility', why: 'Qsuites Saver award space is competitive and can disappear quickly. The sweet spot is real but requires flexibility on dates and booking well in advance.' },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
                <p className="text-[13px] font-bold mb-1" style={{ color: 'var(--red)' }}>✕ {item.title}</p>
                <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>{item.why}</p>
              </div>
            ))}
          </div>

          <H2>Is the IndusInd Avios card worth it?</H2>
          <div className="space-y-3">
            <div className="p-4 rounded-xl" style={{ background: '#EDF5F0', border: '1px solid #C8DDD0' }}>
              <p className="text-[13px] font-bold mb-2" style={{ color: 'var(--green)' }}>Worth it if:</p>
              <ul className="space-y-1.5 text-[13px]" style={{ color: 'var(--text-s)', listStyleType: 'none', padding: 0 }}>
                <li className="flex gap-2"><span style={{ color: 'var(--green)' }}>→</span><span>You fly internationally and value business class — the Qatar Qsuites redemption is the payoff</span></li>
                <li className="flex gap-2"><span style={{ color: 'var(--green)' }}>→</span><span>You can hit the ₹8L / ₹16L milestones for 36,000 bonus Avios annually</span></li>
                <li className="flex gap-2"><span style={{ color: 'var(--green)' }}>→</span><span>You do significant international spend and value the low 1.5% forex markup on your chosen destination</span></li>
                <li className="flex gap-2"><span style={{ color: 'var(--green)' }}>→</span><span>A strong signup promotion is running (these come and go — time your application)</span></li>
              </ul>
            </div>
            <div className="p-4 rounded-xl" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
              <p className="text-[13px] font-bold mb-2" style={{ color: 'var(--red)' }}>Skip if:</p>
              <ul className="space-y-1.5 text-[13px]" style={{ color: 'var(--text-s)', listStyleType: 'none', padding: 0 }}>
                <li className="flex gap-2"><span style={{ color: 'var(--red)' }}>→</span><span>You travel mostly domestically — Avios offers little value within India</span></li>
                <li className="flex gap-2"><span style={{ color: 'var(--red)' }}>→</span><span>You won't hit the milestones — base earning alone doesn't justify the ₹5,000 annual fee for most</span></li>
                <li className="flex gap-2"><span style={{ color: 'var(--red)' }}>→</span><span>You prefer flexibility — an airline-agnostic card like HDFC Infinia gives more transfer partner choice</span></li>
              </ul>
            </div>
          </div>

          <H2>The bottom line</H2>
          <p>British Airways Avios deserves more respect from Indian travellers than it usually gets — not for British Airways itself, but for what the <S>shared Avios currency unlocks: Qatar Qsuites business class from India to Europe for around 70,000 Avios and modest taxes.</S> That's a genuinely premium redemption that few Indian points pathways can match.</p>
          <p>The catch is earning: with essentially one dedicated card (IndusInd Avios Visa Infinite) and limited transfer options in India, building an Avios balance takes intent. But for international business class flyers who hit the milestone spends, it's one of the more rewarding niche plays in the Indian market.</p>
          <p>Compare Avios earning against your current setup with the <a href="/" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>PointsMax calculator</a>, see all transfer ratios at the <a href="/transfers" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>Transfer Partners directory</a>, and for the Star Alliance alternative (KrisFlyer) read our <a href="/blog/best-krisflyer-routes-india-2026" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>Best KrisFlyer Routes guide</a>.</p>

          <div className="p-6 rounded-2xl text-center mt-8" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <p className="text-[16px] font-semibold">Is an Avios card right for your travel pattern?</p>
            <p className="text-[13px] mt-1 mb-4" style={{ color: 'rgba(250,248,245,0.5)' }}>Compare every Indian card's points value side by side.</p>
            <a href="/" className="inline-block px-6 py-2.5 rounded-xl text-[14px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Open PointsMax Calculator →</a>
          </div>

          <p className="text-[11px] mt-8 leading-relaxed" style={{ color: 'var(--text-m)' }}>
            <strong>Disclaimer:</strong> Avios earning rates, award pricing, transfer mechanics, and signup offers change without notice. Figures based on publicly available program terms as of June 2026. Award availability and fuel surcharges vary by route, date, and program. Always verify current pricing in each Avios program before transferring — transfers are one-way. PointsMax is not affiliated with British Airways, Qatar Airways, or IndusInd Bank. Not financial advice.
          </p>

          <FeedbackWidget pageSlug="british-airways-avios-india-guide-2026" pageTitle="British Airways Avios India Guide 2026" />
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
            <p className="text-[13px]" style={{ color: 'rgba(250,248,245,0.6)' }}>Compare <strong style={{ color: '#FAF8F5' }}>Avios</strong> earning vs your card</p>
            <a href="/" className="shrink-0 px-4 py-2 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Open Calculator →</a>
          </div>
        </div>
      )}
    </div>
  )
}
