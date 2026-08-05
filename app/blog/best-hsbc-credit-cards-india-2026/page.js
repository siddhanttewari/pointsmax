'use client'

import { useState, useEffect } from 'react'
import FeedbackWidget from '@/components/FeedbackWidget'
import PageNav from '@/components/PageNav'

const faqJsonLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Which is the best HSBC credit card in India in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'It depends on your spending. HSBC Live+ is best for high cashback on everyday spends after its July 2026 Visa Infinite upgrade (10% cashback across five categories, up to ₹1,200/month). HSBC TravelOne is best for frequent travellers wanting lounge access and 1:1 airline transfers. HSBC RuPay Cashback is best for UPI-first users who dine out (10% on dining/food delivery/groceries, plus lounge access, at just ₹499). HSBC Visa Platinum and RuPay Platinum are the best lifetime-free options, with RuPay Platinum adding UPI. For most urban spenders, Live+ or RuPay Cashback deliver the strongest everyday value.' }},
    { '@type': 'Question', name: 'What changed with the HSBC Live+ card in July 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Effective July 26, 2026, the HSBC Live+ card was upgraded to Visa Infinite. The 10% accelerated cashback was expanded from dining, food delivery and groceries to also include utilities and shopping (excluding Amazon, Flipkart, Myntra). The monthly cashback cap rose from ₹1,000 to ₹1,200, the foreign transaction markup was cut from 3.5% to 1.99%, and an international airport lounge visit was added. Domestic lounge visits were reduced from 4 to 2 per year. This makes HSBC one of the few issuers improving cards in 2026 while HDFC, SBI and Axis cut rewards.' }},
    { '@type': 'Question', name: 'Which HSBC credit cards are lifetime free?', acceptedAnswer: { '@type': 'Answer', text: 'Three HSBC credit cards have zero joining and annual fee for life: HSBC Visa Platinum, HSBC RuPay Platinum, and HSBC RuPay Cashback. The RuPay Cashback card technically has a ₹499 fee in some listings but is often offered fee-waived; the two Platinum cards are genuinely lifetime free. HSBC Live+ (₹999) and TravelOne (₹4,999) carry annual fees that can be waived by meeting a spend threshold.' }},
    { '@type': 'Question', name: 'Which HSBC credit cards work with UPI?', acceptedAnswer: { '@type': 'Answer', text: 'Only HSBC RuPay cards can be linked to UPI: the HSBC RuPay Cashback and HSBC RuPay Platinum. HSBC Live+, TravelOne, and Visa Platinum are on the Visa network and cannot be linked to UPI. If earning rewards on UPI QR payments matters to you, choose one of the two RuPay variants.' }},
  ],
}

export default function BlogPost() {
  const [showBar, setShowBar] = useState(false)
  const [tab, setTab] = useState('live-plus')

  useEffect(() => {
    const fn = () => setShowBar(window.scrollY > 600)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const H2 = ({ children, id }) => (
    <h2 id={id} className="pt-8 scroll-mt-20" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', letterSpacing: '-0.01em' }}>{children}</h2>
  )
  const S = ({ children }) => <strong style={{ color: 'var(--text)' }}>{children}</strong>

  const cards = {
    'live-plus': {
      name: 'HSBC Live+', tag: 'Best for cashback', fee: '₹999 (waived at ₹2L spend)', network: 'Visa Infinite', upi: 'No',
      highlights: [
        '10% cashback on 5 categories: dining, food delivery, groceries, utilities, and shopping (excl. Amazon/Flipkart/Myntra)',
        'Monthly cashback cap ₹1,200 (raised from ₹1,000 in July 2026)',
        '1.5% unlimited cashback on all other spends',
        'Forex markup cut to 1.99% (from 3.5%)',
        '2 domestic + 1 international lounge visit per year',
      ],
      best: 'High spenders who want maximum everyday cashback and can hit the ₹1,200 monthly cap.',
    },
    'travelone': {
      name: 'HSBC TravelOne', tag: 'Best for travel', fee: '₹4,999 (waivable)', network: 'Visa', upi: 'No',
      highlights: [
        '4 reward points per ₹100 on flights, travel platforms & international spends (~4%)',
        '2 reward points per ₹100 on everything else (~2%)',
        '1:1 transfer to 20+ airline & hotel partners',
        'Strong domestic + international lounge access',
        'Welcome: ₹1,000 cashback + PostCard voucher + EazyDiner membership',
      ],
      best: 'Frequent travellers who value fast air-mile accumulation at a 1:1 transfer ratio and lounge access.',
    },
    'rupay-cashback': {
      name: 'HSBC RuPay Cashback', tag: 'Best value + UPI', fee: '₹499', network: 'RuPay + JCB', upi: 'Yes',
      highlights: [
        '10% cashback on dining, food delivery & groceries (cap ₹400/month)',
        'UPI-enabled — earn on QR payments',
        '8–10 domestic lounge visits per year',
        'JCB network for international acceptance in ~160 countries',
        'Welcome: ₹500 cashback + Amazon voucher + EazyDiner',
      ],
      best: 'UPI-first urban spenders who dine out — huge value for a ₹499 fee, plus rare lounge access at this price.',
    },
    'visa-platinum': {
      name: 'HSBC Visa Platinum', tag: 'Lifetime free', fee: '₹0 (LTF)', network: 'Visa', upi: 'No',
      highlights: [
        '2 reward points per ₹150 on retail spends',
        '5X accelerated points above ₹4 lakh annual spend',
        '20 travel transfer partners at 2:1 ratio',
        'Zero joining and annual fee for life',
        'Simple, no-frills rewards card',
      ],
      best: 'Anyone wanting HSBC transfer partners at zero fee, and high spenders who cross ₹4L for the 5X boost.',
    },
    'rupay-platinum': {
      name: 'HSBC RuPay Platinum', tag: 'Lifetime free + UPI', fee: '₹0 (LTF)', network: 'RuPay', upi: 'Yes',
      highlights: [
        '2 reward points per ₹150 on eligible spends',
        'UPI-enabled — the LTF way to earn on QR payments',
        '15+ airline & hotel transfer partners',
        'Zero joining and annual fee for life',
        'No milestone benefits or lounge access',
      ],
      best: 'First-time users and UPI-first spenders who want transferable miles at zero cost.',
    },
  }
  const c = cards[tab]

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Best HSBC Credit Cards in India 2026: All 5 Compared', datePublished: '2026-07-09', dateModified: '2026-07-09', author: { '@type': 'Organization', name: 'PointsMax', url: 'https://www.pointsmax.in' }, publisher: { '@type': 'Organization', name: 'PointsMax', url: 'https://www.pointsmax.in' } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageNav />

      <article className="max-w-2xl mx-auto px-5 py-12">
        <div className="flex items-center gap-2 mb-8 text-[13px]" style={{ color: 'var(--text-m)' }}>
          <a href="/">PointsMax</a><span>/</span>
          <a href="/blog">Learn</a><span>/</span>
          <span style={{ color: 'var(--text-s)' }}>Best HSBC Cards</span>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded" style={{ color: 'var(--gold)', background: 'rgba(184,149,62,0.08)' }}>Card Guide</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>July 9, 2026</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>12 min read</span>
        </div>

        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(24px, 4vw, 36px)', lineHeight: 1.15, letterSpacing: '-0.025em', color: 'var(--text)' }}>
          Best HSBC Credit Cards in India 2026: All 5 Compared
        </h1>

        {/* DIRECT ANSWER BLOCK */}
        <div className="mt-8 p-5 rounded-2xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
          <p className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--text-m)' }}>Quick answer</p>
          <p className="text-[15px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
            <S>HSBC offers 5 cards in India, and — unusually for 2026 — it's improving them while HDFC, SBI and Axis cut.</S> For everyday cashback, <S>Live+</S> (₹999) is strongest after its July 2026 Visa Infinite upgrade (10% across five categories). For travel, <S>TravelOne</S> (₹4,999) gives 1:1 air-mile transfers and strong lounge access. For UPI + value, <S>RuPay Cashback</S> (₹499) is a standout — 10% on food categories plus lounge access. The two lifetime-free options are <S>Visa Platinum</S> and <S>RuPay Platinum</S> (the latter adds UPI). Which fits you comes down to cashback vs travel vs UPI vs zero-fee.
          </p>
        </div>

        <p className="mt-6 text-[16px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
          HSBC has quietly become one of India's most interesting card issuers again. While the big domestic banks spent 2026 trimming rewards and adding spend-gates, HSBC went the other way — most visibly with a July 2026 upgrade to its Live+ card. Here's every HSBC card compared, and exactly which one suits your spending.
        </p>

        <div className="mt-10 space-y-6 text-[15px] leading-[1.85]" style={{ color: 'var(--text-s)' }}>

          <H2 id="upgrade">The July 2026 Live+ upgrade (why HSBC is trending)</H2>
          <p>The reason HSBC is all over social media right now: <S>on July 26, 2026, the Live+ card got materially better, not worse.</S> The upgrades:</p>
          <div className="p-4 rounded-xl" style={{ background: '#EDF5F0', border: '1px solid #C8DDD0' }}>
            <ul className="space-y-1.5 text-[13px]" style={{ color: 'var(--text-s)', listStyleType: 'none', padding: 0 }}>
              <li className="flex gap-2"><span style={{ color: 'var(--green)' }}>↑</span><span>Upgraded to <S>Visa Infinite</S></span></li>
              <li className="flex gap-2"><span style={{ color: 'var(--green)' }}>↑</span><span>10% cashback expanded to <S>5 categories</S> (added utilities + shopping)</span></li>
              <li className="flex gap-2"><span style={{ color: 'var(--green)' }}>↑</span><span>Monthly cap raised <S>₹1,000 → ₹1,200</S></span></li>
              <li className="flex gap-2"><span style={{ color: 'var(--green)' }}>↑</span><span>Forex markup cut <S>3.5% → 1.99%</S></span></li>
              <li className="flex gap-2"><span style={{ color: 'var(--green)' }}>↑</span><span>Added <S>international lounge</S> access</span></li>
              <li className="flex gap-2"><span style={{ color: 'var(--red)' }}>↓</span><span>Domestic lounge reduced 4 → 2 per year (the one trade-off)</span></li>
            </ul>
          </div>
          <p>In a year of devaluations across the industry, a bank <em>adding</em> value stands out — which is exactly why creators and cardholders are paying attention.</p>

          <H2 id="all-five">All 5 HSBC cards at a glance</H2>
          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-[12px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead><tr>
                <th className="text-left py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Card</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--text-m)', borderBottom: '1px solid var(--border)' }}>Fee</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--text-m)', borderBottom: '1px solid var(--border)' }}>UPI</th>
                <th className="text-left py-3 px-2 font-semibold" style={{ color: 'var(--text-m)', borderBottom: '1px solid var(--border)' }}>Best for</th>
              </tr></thead>
              <tbody>
                {[
                  ['Live+', '₹999', 'No', 'Everyday cashback'],
                  ['TravelOne', '₹4,999', 'No', 'Travel & lounges'],
                  ['RuPay Cashback', '₹499', 'Yes', 'UPI + food cashback'],
                  ['Visa Platinum', 'LTF', 'No', 'Zero-fee + 5X boost'],
                  ['RuPay Platinum', 'LTF', 'Yes', 'Zero-fee + UPI'],
                ].map(([card, fee, upi, best], i) => (
                  <tr key={i}>
                    <td className="py-2.5 px-2 font-medium" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{card}</td>
                    <td className="py-2.5 px-2 text-center font-mono" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>{fee}</td>
                    <td className="py-2.5 px-2 text-center" style={{ color: upi === 'Yes' ? 'var(--green)' : 'var(--text-m)', borderBottom: '1px solid var(--border)' }}>{upi}</td>
                    <td className="py-2.5 px-2 text-[11px]" style={{ color: 'var(--text-m)', borderBottom: '1px solid var(--border)' }}>{best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <H2 id="deep-dive">Each card in detail</H2>
          <p>Tap a card to see its full breakdown:</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {Object.entries(cards).map(([key, info]) => (
              <button key={key} onClick={() => setTab(key)}
                className="px-3 py-2 rounded-xl text-[12px] font-semibold transition-all"
                style={{ background: tab === key ? 'var(--dark)' : 'var(--bg-s)', color: tab === key ? '#FAF8F5' : 'var(--text-s)', border: '1px solid var(--border)' }}>
                {info.name.replace('HSBC ', '')}
              </button>
            ))}
          </div>
          <div className="p-5 rounded-2xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
            <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
              <h3 className="text-[18px] font-bold" style={{ color: 'var(--text)', fontFamily: 'Playfair Display, serif' }}>{c.name}</h3>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded" style={{ color: 'var(--gold)', background: 'rgba(184,149,62,0.08)' }}>{c.tag}</span>
            </div>
            <div className="flex gap-4 mb-3 text-[12px]" style={{ color: 'var(--text-m)' }}>
              <span>Fee: <strong style={{ color: 'var(--text-s)' }}>{c.fee}</strong></span>
              <span>Network: <strong style={{ color: 'var(--text-s)' }}>{c.network}</strong></span>
              <span>UPI: <strong style={{ color: c.upi === 'Yes' ? 'var(--green)' : 'var(--text-s)' }}>{c.upi}</strong></span>
            </div>
            <ul className="space-y-1.5 mb-3">
              {c.highlights.map((h, i) => (
                <li key={i} className="flex gap-2 text-[13px]" style={{ color: 'var(--text-s)' }}><span style={{ color: 'var(--gold)' }}>•</span><span>{h}</span></li>
              ))}
            </ul>
            <div className="p-3 rounded-lg" style={{ background: 'var(--bg-s)' }}>
              <p className="text-[12px]" style={{ color: 'var(--text-s)' }}><strong style={{ color: 'var(--text)' }}>Best for:</strong> {c.best}</p>
            </div>
          </div>

          {/* Mid CTA */}
          <div className="p-5 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <div>
              <p className="text-[14px] font-semibold">Not sure which HSBC card fits you?</p>
              <p className="text-[12px] mt-1" style={{ color: 'rgba(250,248,245,0.5)' }}>Our 60-second quiz matches you to the right card.</p>
            </div>
            <a href="/tools/card-quiz" className="shrink-0 px-5 py-2.5 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Take the Quiz →</a>
          </div>

          <H2 id="which-for-you">Which HSBC card should you get?</H2>
          <div className="space-y-2">
            {[
              { q: 'You dine out and want maximum cashback', a: 'Live+ if you spend enough to hit the ₹1,200 cap; RuPay Cashback (₹499) if you want UPI and lower fee.' },
              { q: 'You travel frequently', a: 'TravelOne — 1:1 air-mile transfers and the strongest lounge access in the lineup.' },
              { q: 'You want to earn rewards on UPI', a: 'RuPay Cashback (for food cashback) or RuPay Platinum (lifetime free) — only RuPay cards do UPI.' },
              { q: 'You want zero annual fee', a: 'Visa Platinum or RuPay Platinum. Pick RuPay Platinum if you want UPI, Visa Platinum if you cross ₹4L/year for the 5X boost.' },
              { q: 'It\'s your first credit card', a: 'RuPay Platinum — lifetime free, simple, UPI-enabled, with transferable miles.' },
            ].map((item, i) => (
              <div key={i} className="p-3 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <p className="text-[13px] font-semibold" style={{ color: 'var(--text)' }}>{item.q}</p>
                <p className="text-[12px] mt-0.5" style={{ color: 'var(--text-m)' }}>→ {item.a}</p>
              </div>
            ))}
          </div>

          <H2 id="bottom-line">The bottom line</H2>
          <p>HSBC's lineup punches above its weight in 2026, and the direction of travel matters: <S>while most Indian issuers are cutting, HSBC is investing in its cards.</S> For everyday cashback the upgraded Live+ is the headline, but the ₹499 RuPay Cashback is arguably the best value in the range — UPI, 10% on food, and lounge access at a tiny fee. Travellers should look at TravelOne, and anyone wanting zero fee has two solid lifetime-free options.</p>
          <p>The Live+ upgrade deserves its own deep-dive — read our full <a href="/blog/hsbc-live-plus-credit-card-review-2026" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>HSBC Live+ review</a> for the complete cashback math. Match any card to your spending with the <a href="/tools/card-quiz" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>card quiz</a>, and if you're comparing against cutting issuers, see our <a href="/blog/credit-card-devaluation-tracker-india-2026" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>devaluation tracker</a>.</p>

          <div className="p-6 rounded-2xl text-center mt-8" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <p className="text-[16px] font-semibold">Find your perfect HSBC card</p>
            <p className="text-[13px] mt-1 mb-4" style={{ color: 'rgba(250,248,245,0.5)' }}>Answer a few questions and get matched in 60 seconds.</p>
            <a href="/tools/card-quiz" className="inline-block px-6 py-2.5 rounded-xl text-[14px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Take the Card Quiz →</a>
          </div>

          <p className="text-[11px] mt-8 leading-relaxed" style={{ color: 'var(--text-m)' }}>
            <strong>Disclaimer:</strong> Card features, fees, reward rates, caps, and lounge benefits are based on publicly available information as of July 2026 and can change without notice. Always verify current terms on HSBC's official pages before applying. PointsMax is not affiliated with HSBC or any bank, earns no commission, and this is not financial advice.
          </p>

          <FeedbackWidget pageSlug="best-hsbc-credit-cards-india-2026" pageTitle="Best HSBC Credit Cards in India 2026" />
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
            <p className="text-[13px]" style={{ color: 'rgba(250,248,245,0.6)' }}>Which HSBC card <strong style={{ color: '#FAF8F5' }}>fits you?</strong></p>
            <a href="/tools/card-quiz" className="shrink-0 px-4 py-2 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Take the Quiz →</a>
          </div>
        </div>
      )}
    </div>
  )
}
