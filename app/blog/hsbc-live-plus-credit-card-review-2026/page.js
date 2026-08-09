'use client'

import { useState, useEffect } from 'react'
import FeedbackWidget from '@/components/FeedbackWidget'
import PageNav from '@/components/PageNav'

const productJsonLd = {
  '@context': 'https://schema.org', '@type': 'Product',
  name: 'HSBC Live+ Credit Card',
  description: 'A cashback credit card offering 10% cashback on dining, food delivery, groceries, shopping, and utilities (up to ₹1,200 per statement cycle) and 1.5% unlimited cashback elsewhere, on the Visa Infinite platform.',
  brand: { '@type': 'Brand', name: 'HSBC' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.4', bestRating: '5', worstRating: '1', reviewCount: '1' },
  review: {
    '@type': 'Review',
    reviewRating: { '@type': 'Rating', ratingValue: '4.4', bestRating: '5', worstRating: '1' },
    author: { '@type': 'Organization', name: 'PointsMax' },
    reviewBody: 'The upgraded HSBC Live+ is one of the strongest everyday cashback cards in India in 2026. After its July 26 upgrade, it earns 10% cashback across five categories capped at ₹1,200 per statement cycle, plus 1.5% unlimited on other spends, with a low ₹999 fee waived at ₹2 lakh annual spend. The cashback is auto-credited with no redemption hassle. Weaknesses: several excluded categories, no cashback on international spends despite the improved 1.99% forex, and it does not work on UPI. Best for urban everyday spenders on dining, groceries, and utilities.',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is the HSBC Live+ credit card worth it in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, for everyday urban spenders the HSBC Live+ is one of the best-value cashback cards in India in 2026. For a ₹999 fee (waived on ₹2 lakh annual spend), it gives 10% cashback on dining, food delivery, groceries, shopping, and utilities up to ₹1,200 per statement cycle, plus 1.5% unlimited elsewhere. If you spend around ₹12,000 a month across those categories you earn the full ₹1,200, or ₹14,400 a year, easily justifying the fee. It is less suited to international spenders (no cashback abroad) and UPI users (it is a Visa card, so no UPI).' }},
    { '@type': 'Question', name: 'What is the cashback cap on the HSBC Live+ card?', acceptedAnswer: { '@type': 'Answer', text: 'The 10% accelerated cashback is capped at ₹1,200 per statement cycle after the July 2026 upgrade (raised from ₹1,000). This means the 10% sweet spot is about ₹12,000 of eligible spending per cycle. Beyond that, eligible category spends earn the base 1.5% unlimited cashback. The 1.5% base cashback has no cap. Over a year, the maximum accelerated cashback works out to roughly ₹14,400.' }},
    { '@type': 'Question', name: 'Which categories earn 10% cashback on HSBC Live+?', acceptedAnswer: { '@type': 'Answer', text: 'After the July 26, 2026 upgrade, the HSBC Live+ earns 10% cashback on five categories: dining, food delivery, groceries, shopping, and utility bill payments. Purchases on Amazon, Flipkart, and Myntra are excluded from the 10% rate and earn 1.5% instead. International spends earn no cashback. All other eligible spends earn 1.5% unlimited cashback.' }},
    { '@type': 'Question', name: 'Does the HSBC Live+ card work on UPI?', acceptedAnswer: { '@type': 'Answer', text: 'No. The HSBC Live+ is a Visa card (upgraded to Visa Infinite in July 2026), and only RuPay credit cards can be linked to UPI in India. If you want to earn rewards on UPI QR payments, HSBC offers the RuPay Cashback and RuPay Platinum cards instead. The Live+ is best used for online shopping, dining, groceries, and utility payments via card, not UPI.' }},
  ],
}

export default function BlogPost() {
  const [showBar, setShowBar] = useState(false)
  const [monthly, setMonthly] = useState(12000)

  useEffect(() => {
    const fn = () => setShowBar(window.scrollY > 600)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const H2 = ({ children, id }) => (
    <h2 id={id} className="pt-8 scroll-mt-20" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', letterSpacing: '-0.01em' }}>{children}</h2>
  )
  const S = ({ children }) => <strong style={{ color: 'var(--text)' }}>{children}</strong>

  // Cashback estimator: 10% on eligible up to ₹1,200/cycle, then implied 1.5%
  const accel = Math.min(monthly * 0.10, 1200)
  const annualAccel = accel * 12
  const fmt = (n) => '₹' + Math.round(n).toLocaleString('en-IN')

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageNav />

      <article className="max-w-2xl mx-auto px-5 py-12">
        <div className="flex items-center gap-2 mb-8 text-[13px]" style={{ color: 'var(--text-m)' }}>
          <a href="/">PointsMax</a><span>/</span>
          <a href="/blog">Learn</a><span>/</span>
          <span style={{ color: 'var(--text-s)' }}>HSBC Live+ Review</span>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded" style={{ color: 'var(--gold, #B8953E)', background: 'rgba(184,149,62,0.1)' }}>Card Review</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>July 10, 2026</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>12 min read</span>
        </div>

        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(24px, 4vw, 36px)', lineHeight: 1.15, letterSpacing: '-0.025em', color: 'var(--text)' }}>
          HSBC Live+ Credit Card Review 2026: Is the Upgraded Cashback Card Worth It?
        </h1>

        {/* Rating badge */}
        <div className="mt-6 flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full" style={{ background: 'var(--dark)' }}>
            <span className="text-[15px] font-bold font-mono" style={{ color: '#FAF8F5' }}>4.4</span>
            <span className="text-[12px]" style={{ color: 'rgba(250,248,245,0.5)' }}>/ 5</span>
          </div>
          <span className="text-[13px]" style={{ color: 'var(--text-m)' }}>Strong everyday cashback · low fee · not for UPI or international</span>
        </div>

        {/* DIRECT ANSWER BLOCK */}
        <div className="mt-8 p-5 rounded-2xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
          <p className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--text-m)' }}>Quick verdict</p>
          <p className="text-[15px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
            <S>After its July 26, 2026 upgrade, the HSBC Live+ is one of the best everyday cashback cards in India.</S> It earns <S>10% cashback on five categories</S> — dining, food delivery, groceries, shopping, and utilities — capped at ₹1,200 per statement cycle, plus <S>1.5% unlimited</S> on everything else. At a ₹999 fee (waived at ₹2 lakh annual spend), with cashback auto-credited and no points to track, it's excellent value for urban spenders. The catches: several excluded categories, <S>no cashback on international spends</S> (despite an improved 1.99% forex), and it <S>doesn't work on UPI</S>.
          </p>
        </div>

        <div className="mt-10 space-y-6 text-[15px] leading-[1.85]" style={{ color: 'var(--text-s)' }}>

          <H2 id="upgrade">What the July 2026 upgrade changed</H2>
          <p>The Live+ (formerly the HSBC Cashback Card) had a rocky few weeks — a devaluation followed almost immediately by a bigger revaluation. From <S>July 26, 2026</S>, the improvements are real:</p>
          <div className="space-y-2">
            {[
              ['Upgraded to Visa Infinite', 'From Visa Signature — unlocking Meet & Assist, select ITC Hotels stays, and other premium Visa privileges.'],
              ['10% cashback expanded to 5 categories', 'Shopping and utilities joined dining, food delivery, and groceries. Shopping cashback jumped from 1.5% to 10% on eligible merchants.'],
              ['Cap raised ₹1,000 → ₹1,200 per cycle', 'The 10% sweet spot moved to ~₹12,000 eligible spend per statement cycle.'],
              ['Forex markup cut 3.5% → 1.99%', 'Much more competitive abroad — though note, no cashback on international spends.'],
              ['New fuel benefit', '₹250 cashback per quarter on eligible contactless fuel transactions.'],
              ['International lounge access added', 'One international visit a year — but this starts later, from September 1, 2026. Domestic visits reduced to 2/year.'],
            ].map(([t, d], i) => (
              <div key={i} className="p-3 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <p className="text-[13px] font-semibold" style={{ color: 'var(--text)' }}>{t}</p>
                <p className="text-[12px] mt-0.5" style={{ color: 'var(--text-m)' }}>{d}</p>
              </div>
            ))}
          </div>
          <p className="text-[13px]" style={{ color: 'var(--text-m)' }}>This made HSBC one of the very few Indian issuers <em>improving</em> a card in 2026 while HDFC, SBI, and Axis were cutting — the context behind all the recent buzz. For the full picture, see our <a href="/blog/best-hsbc-credit-cards-india-2026" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>HSBC lineup guide</a>.</p>

          <H2 id="cashback-math">The cashback math (and the sweet spot)</H2>
          <p>The structure is refreshingly simple: <S>10% on the five eligible categories up to ₹1,200 cashback per statement cycle, then 1.5% unlimited on everything else.</S> The ₹1,200 cap means the 10% "sweet spot" is about <S>₹12,000 of eligible spending per cycle</S> — spend that much on dining, groceries, food delivery, shopping, and utilities and you max the accelerated cashback. Beyond that, those categories drop to the base 1.5%.</p>

          {/* Interactive cashback estimator */}
          <div className="p-5 rounded-2xl" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <p className="text-[13px] font-semibold mb-3">Estimate your accelerated cashback</p>
            <label className="block text-[12px] mb-2" style={{ color: 'rgba(250,248,245,0.6)' }}>Monthly spend on eligible categories: <span className="font-mono font-bold" style={{ color: '#FAF8F5' }}>{fmt(monthly)}</span></label>
            <input type="range" min="2000" max="25000" step="1000" value={monthly} onChange={e => setMonthly(parseInt(e.target.value))} className="w-full mb-4" style={{ accentColor: 'var(--gold, #B8953E)' }} />
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-[11px]" style={{ color: 'rgba(250,248,245,0.5)' }}>Monthly cashback</p>
                <p className="text-[22px] font-mono font-bold" style={{ color: '#6ee7b7' }}>{fmt(accel)}</p>
                {monthly * 0.10 > 1200 && <p className="text-[10px] mt-0.5" style={{ color: '#fcd34d' }}>Capped at ₹1,200 — you're past the sweet spot</p>}
              </div>
              <div>
                <p className="text-[11px]" style={{ color: 'rgba(250,248,245,0.5)' }}>Yearly (10% portion)</p>
                <p className="text-[22px] font-mono font-bold" style={{ color: '#6ee7b7' }}>{fmt(annualAccel)}</p>
              </div>
            </div>
            <p className="text-[11px] mt-3" style={{ color: 'rgba(250,248,245,0.4)' }}>Plus 1.5% unlimited on all other spends and category spend beyond the cap. Fee is ₹999 (waived at ₹2L annual spend).</p>
          </div>

          <H2 id="categories">The 10% categories (and the exclusions)</H2>
          <p>Eligible for 10% (up to the cap): <S>dining, food delivery, groceries, shopping, and utility bill payments.</S> The important exclusions to know:</p>
          <div className="space-y-2">
            {[
              ['Amazon, Flipkart, Myntra', 'Excluded from 10% — these earn 1.5% instead. A big caveat if most of your shopping is on these.'],
              ['International spends', 'No cashback at all abroad, even though the forex markup improved to 1.99%.'],
              ['Other excluded MCCs', 'Categories like rent, wallet loads, fuel (separate ₹250/qtr benefit), and insurance are typically excluded from the 10% — check the MCC before large spends.'],
            ].map(([t, d], i) => (
              <div key={i} className="p-3 rounded-xl" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
                <p className="text-[13px] font-semibold" style={{ color: 'var(--red)' }}>{t}</p>
                <p className="text-[12px] mt-0.5" style={{ color: 'var(--text-s)' }}>{d}</p>
              </div>
            ))}
          </div>

          <H2 id="pros-cons">Pros & cons</H2>
          <div className="grid grid-cols-1 gap-3">
            <div className="p-4 rounded-xl" style={{ background: '#EDF5F0', border: '1px solid #C8DDD0' }}>
              <p className="text-[13px] font-bold mb-2" style={{ color: 'var(--green)' }}>✓ What's great</p>
              <ul className="space-y-1.5 text-[13px]" style={{ color: 'var(--text-s)', listStyleType: 'none', padding: 0 }}>
                {['10% on five everyday categories — genuinely high for the fee','Cashback auto-credited — no points, no redemption portal','Low ₹999 fee, easily waived at ₹2L annual spend','1.5% unlimited base with no cap','Improved 1.99% forex + Visa Infinite perks','₹1,000 welcome cashback (₹25k spend in 30 days)'].map((t,i) => <li key={i} className="flex gap-2"><span style={{ color: 'var(--green)' }}>✓</span><span>{t}</span></li>)}
              </ul>
            </div>
            <div className="p-4 rounded-xl" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
              <p className="text-[13px] font-bold mb-2" style={{ color: 'var(--red)' }}>✕ What's not</p>
              <ul className="space-y-1.5 text-[13px]" style={{ color: 'var(--text-s)', listStyleType: 'none', padding: 0 }}>
                {['No cashback on international spends','Amazon/Flipkart/Myntra excluded from 10%','Doesn\'t work on UPI (it\'s a Visa card)','Several excluded categories — check MCCs','Domestic lounge cut to 2/year; intl lounge only from Sep 1','₹1,200 cap limits value for very high spenders'].map((t,i) => <li key={i} className="flex gap-2"><span style={{ color: 'var(--red)' }}>✕</span><span>{t}</span></li>)}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="p-5 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
            <div>
              <p className="text-[14px] font-semibold" style={{ color: 'var(--text)' }}>Will the ₹999 fee pay for itself?</p>
              <p className="text-[12px] mt-1" style={{ color: 'var(--text-m)' }}>Run your numbers through our breakeven calculator.</p>
            </div>
            <a href="/tools/breakeven" className="shrink-0 px-5 py-2.5 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Check Breakeven →</a>
          </div>

          <H2 id="who-for">Who should get it — and who should skip it</H2>
          <div className="grid grid-cols-1 gap-3">
            <div className="p-4 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
              <p className="text-[13px] font-bold mb-1" style={{ color: 'var(--green)' }}>Get it if…</p>
              <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>You're an urban spender who puts ₹8,000-₹12,000+ a month into dining, groceries, food delivery, and utilities; you want simple auto-cashback with no points to manage; and you value a low, easily-waived fee. For this profile, it's among the best-value cards in India right now.</p>
            </div>
            <div className="p-4 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
              <p className="text-[13px] font-bold mb-1" style={{ color: 'var(--red)' }}>Skip it if…</p>
              <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>Most of your shopping is on Amazon/Flipkart (excluded from 10%), you spend heavily abroad (no international cashback), or you want to earn on UPI (get an HSBC RuPay card instead). Very high spenders may find the ₹1,200 cap limiting and prefer an uncapped flat-rate card.</p>
            </div>
          </div>

          <H2 id="verdict">The verdict</H2>
          <p>The upgraded HSBC Live+ earns its <S>4.4/5</S>. For a ₹999 fee that most urban spenders will get waived, <S>10% across five everyday categories plus 1.5% unlimited, auto-credited with zero hassle, is genuinely excellent value in 2026</S> — especially in a year when almost every other issuer cut rewards. It's not a travel card and not for international or UPI spends, but as a pure everyday cashback engine for dining, groceries, and utilities, few cards match it at this price.</p>
          <p>If that fits how you spend, it's an easy recommendation. Compare it against the rest of the range in our <a href="/blog/best-hsbc-credit-cards-india-2026" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>HSBC lineup guide</a>, check the fee math with our <a href="/tools/breakeven" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>breakeven calculator</a>, or find your overall best-fit with the <a href="/tools/card-quiz" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>card quiz</a>.</p>

          <div className="p-6 rounded-2xl text-center mt-8" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <p className="text-[16px] font-semibold">Is the Live+ your best-fit card?</p>
            <p className="text-[13px] mt-1 mb-4" style={{ color: 'rgba(250,248,245,0.5)' }}>Match your spending to the right card in 60 seconds.</p>
            <a href="/tools/card-quiz" className="inline-block px-6 py-2.5 rounded-xl text-[14px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Take the Card Quiz →</a>
          </div>

          <p className="text-[11px] mt-8 leading-relaxed" style={{ color: 'var(--text-m)' }}>
            <strong>Disclaimer:</strong> Features, cashback rates, caps, categories, and benefits are based on publicly available information as of July 2026 and the July 26, 2026 upgrade; some benefits (e.g. international lounge access) start September 1, 2026. Terms change without notice and eligibility (income, city) applies — always verify on HSBC's official website before applying. Our rating is an independent editorial opinion. PointsMax is not affiliated with HSBC, earns no commission, and this is not financial advice.
          </p>

          <FeedbackWidget pageSlug="hsbc-live-plus-credit-card-review-2026" pageTitle="HSBC Live+ Credit Card Review 2026" />
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
            <p className="text-[13px]" style={{ color: 'rgba(250,248,245,0.6)' }}>Is the Live+ <strong style={{ color: '#FAF8F5' }}>right for you?</strong></p>
            <a href="/tools/card-quiz" className="shrink-0 px-4 py-2 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Take the Quiz →</a>
          </div>
        </div>
      )}
    </div>
  )
}
