'use client'
import { useState, useEffect } from 'react'
import FeedbackWidget from '@/components/FeedbackWidget'
import PageNav from '@/components/PageNav'

const faqJsonLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Which Indian credit cards transfer to Marriott Bonvoy?', acceptedAnswer: { '@type': 'Answer', text: 'After the April 2026 changes, only HDFC Infinia and HDFC Diners Club Black transfer to Marriott Bonvoy — at a 1:4 ratio (1 reward point = 4 Bonvoy points, or 4 reward points = 1 Bonvoy point). Axis Bank removed Marriott Bonvoy as a transfer partner in April 2026. HSBC Premier transfers to Marriott at 1:1.' }},
    { '@type': 'Question', name: 'Is it worth transferring Indian credit card points to hotel programs?', acceptedAnswer: { '@type': 'Answer', text: 'Hotel transfers are worth it for specific redemptions — primarily luxury property stays where the cash price is very high. The Marriott 5-night award (4 nights + 1 free) using Points + Cash at a category 5-7 property can yield ₹2-3 per point. However, HDFC Infinia\'s 1:4 Marriott ratio means you need 4 reward points per Bonvoy point, making the effective value low unless targeting high-category properties.' }},
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

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Best Credit Cards for Hotels on Points India 2026', datePublished: '2026-05-30', author: { '@type': 'Organization', name: 'PointsMax' }, publisher: { '@type': 'Organization', name: 'PointsMax', url: 'https://www.pointsmax.in' } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <>
      <PageNav />
      <article className="max-w-2xl mx-auto px-5 py-12">
        <div className="flex items-center gap-2 mb-8 text-[13px]" style={{ color: 'var(--text-m)' }}>
          <a href="/">PointsMax</a><span>/</span><a href="/blog">Learn</a><span>/</span>
          <span style={{ color: 'var(--text-s)' }}>Hotels on Points</span>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded" style={{ color: '#0891b2', background: 'rgba(8,145,178,0.08)' }}>Guide</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>May 30, 2026</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>8 min read</span>
        </div>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(24px,4vw,36px)', lineHeight: 1.15, letterSpacing: '-0.025em', color: 'var(--text)' }}>
          Best Credit Cards for Hotels on Points India 2026
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
          After Axis removed Marriott and Accor in April 2026, the hotel transfer landscape changed dramatically. Here's what's left, what it's worth, and when hotel transfers beat SmartBuy.
        </p>

        <div className="mt-6 p-4 rounded-xl" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
          <p className="text-[13px] font-bold mb-1" style={{ color: 'var(--red)' }}>April 2026: Axis removed its best hotel transfers</p>
          <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>Axis Bank removed Marriott Bonvoy and Accor Live Limitless as transfer partners in April 2026. If you have Axis Magnus or Atlas and were accumulating EDGE points for a Marriott redemption, those transfer paths are gone. Your only hotel transfer options on Axis now are ITC Hotels and IHG One Rewards.</p>
        </div>

        <div className="mt-8 space-y-6 text-[15px] leading-[1.85]" style={{ color: 'var(--text-s)' }}>

          <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)' }}>Hotel transfer partner status — May 2026</h2>

          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-[13px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead><tr>
                <th className="text-left py-3 px-3 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Program</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>HDFC Infinia</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Axis Magnus</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>HSBC Premier</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Amex Plat</th>
              </tr></thead>
              <tbody>
                {[
                  ['Marriott Bonvoy', '1:4 ✅', '❌ Removed', '1:1 ✅', '1:1 ✅'],
                  ['Accor Live Limitless', '❌', '❌ Removed', '1:1 ✅', '❌'],
                  ['IHG One Rewards', '1:1 ✅', '5:2 ✅', '1:1 ✅', '❌'],
                  ['ITC Hotels', '1:1 ✅', '5:2 ✅', '❌', '❌'],
                  ['Hilton Honors', '❌', '❌', '❌', '1:1 ✅'],
                ].map(([prog, hdfc, axis, hsbc, amex], i) => (
                  <tr key={i}>
                    <td className="py-2.5 px-3 font-medium" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{prog}</td>
                    {[hdfc, axis, hsbc, amex].map((v, j) => (
                      <td key={j} className="py-2.5 px-2 text-center text-[12px]" style={{ color: v.includes('❌') ? 'var(--red)' : 'var(--green)', fontWeight: 500, borderBottom: '1px solid var(--border)' }}>{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)' }}>The card-by-card verdict for hotel points</h2>

          <div className="space-y-3">
            {[
              { name: 'HDFC Infinia/Diners Black — best overall', color: 'var(--green)', content: 'IHG One Rewards at 1:1 is the most actionable hotel transfer. ITC Hotels at 1:1 gives excellent India redemption value — ITC Grand Chola Chennai or ITC Maurya Delhi on points is genuinely aspirational. Marriott at 1:4 is mathematically poor (you need 4 reward points per Bonvoy point) but the 5-night certificate can deliver value at Category 6-7 properties.' },
              { name: 'HSBC Premier — best for Accor and Marriott', color: 'var(--green)', content: 'HSBC Premier\'s 1:1 to both Accor Live Limitless AND Marriott Bonvoy makes it the best card for hotel transfers in India after April 2026. Accor 1:1 is particularly valuable — Accor Le Club points are worth ~₹1.60-2.00 at premium Sofitel and Fairmont properties. But Premier requires ₹40L+ HSBC assets or ₹3L+/month salary.' },
              { name: 'Amex Platinum — Marriott and Hilton', color: 'var(--gold)', content: 'Amex Platinum transfers to Marriott at 1:1 (the best ratio in India) and Hilton Honors at 1:1. Combined with Marriott Gold status and Fine Hotels & Resorts, Amex is the strongest luxury hotel ecosystem. The ₹66,000 fee limits it to very heavy hotel spenders.' },
              { name: 'Axis Magnus/Atlas — very limited', color: 'var(--red)', content: 'With Marriott and Accor removed, hotel transfers on Axis are now just ITC and IHG at 5:2 ratio. The value is low. For hotel points, Axis cards are essentially irrelevant after April 2026.' },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <p className="text-[14px] font-semibold mb-2" style={{ color: item.color }}>{item.name}</p>
                <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>{item.content}</p>
              </div>
            ))}
          </div>

          <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)' }}>When hotel transfers beat SmartBuy</h2>
          <p>Hotel transfers only make sense when the cash price of the stay is significantly above what you'd pay at the portal. The benchmark: SmartBuy gives ₹1/point. You need to extract more than ₹1/point from the hotel transfer to justify it.</p>
          <div className="p-4 rounded-xl" style={{ background: '#EDF5F0', border: '1px solid #C8DDD0' }}>
            <p className="text-[13px] font-semibold mb-2" style={{ color: 'var(--green)' }}>When hotel transfers make sense</p>
            <ul className="space-y-1.5 text-[13px]" style={{ color: 'var(--text-s)', listStyleType: 'none', padding: 0 }}>
              <li className="flex gap-2"><span style={{ color: 'var(--green)' }}>✓</span><span>Marriott 5-night certificate at a Category 6 property (e.g., JW Marriott Mumbai at ₹25,000/night — 5 nights for price of 4)</span></li>
              <li className="flex gap-2"><span style={{ color: 'var(--green)' }}>✓</span><span>ITC Grand Chola or ITC Maurya via ITC One — rack rates ₹20,000+/night, points value at ₹2+ per point</span></li>
              <li className="flex gap-2"><span style={{ color: 'var(--green)' }}>✓</span><span>Accor Sofitel or Fairmont via HSBC Premier — international properties where Accor points yield ₹1.60-2.00</span></li>
            </ul>
          </div>

          <p>See all current hotel transfer ratios for your card at the <a href="/transfers" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>Transfer Partners directory →</a></p>

          <FeedbackWidget pageSlug="best-credit-cards-hotels-on-points-india-2026" pageTitle="Best Credit Cards for Hotels on Points India 2026" />
        </div>
      </article>
      <footer className="py-10 px-5" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[12px]" style={{ color: 'var(--text-m)' }}><a href="/">PointsMax</a><span className="mx-2">·</span><a href="/transfers">Transfers</a><span className="mx-2">·</span><a href="/blog">Learn</a></p>
        </div>
      </footer>
      {showBar && (
        <div className="fixed bottom-0 left-0 right-0 z-50" style={{ background: 'var(--dark)', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '10px 16px' }}>
          <div className="max-w-2xl mx-auto flex items-center justify-between gap-3">
            <p className="text-[13px]" style={{ color: 'rgba(250,248,245,0.6)' }}>Check hotel points value</p>
            <a href="/" className="shrink-0 px-4 py-2 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>Open Calculator →</a>
          </div>
        </div>
      )}
    </div>
  )
}
