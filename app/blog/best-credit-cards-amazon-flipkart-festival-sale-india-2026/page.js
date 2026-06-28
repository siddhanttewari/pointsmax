'use client'

import { useState, useEffect } from 'react'
import FeedbackWidget from '@/components/FeedbackWidget'
import PageNav from '@/components/PageNav'

const howToJsonLd = {
  '@context': 'https://schema.org', '@type': 'HowTo',
  name: 'How to Maximise Savings During Amazon and Flipkart Festival Sales in India',
  description: 'A step-by-step method to stack credit card offers for maximum savings during the Amazon Great Indian Festival and Flipkart Big Billion Days 2026.',
  totalTime: 'PT15M',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Use the partner-bank card for the instant discount', text: 'Amazon partners with SBI and Flipkart with Axis/ICICI for a 10% instant discount during the festive sale. Use the partner bank card to claim this at checkout.' },
    { '@type': 'HowToStep', position: 2, name: 'Prefer the co-branded card for ongoing cashback', text: 'The Amazon Pay ICICI card gives 5% back on Amazon (Prime) and the Flipkart Axis card gives 5% on Flipkart, stackable on top of platform offers where eligible.' },
    { '@type': 'HowToStep', position: 3, name: 'Stack platform coupons and SuperCoins', text: 'Add Flipkart SuperCoins or Amazon coupons on top of the bank discount and card cashback to compound savings.' },
    { '@type': 'HowToStep', position: 4, name: 'Use no-cost EMI on big-ticket items', text: 'For phones, laptops, and appliances, convert to no-cost EMI to spread the cost without interest while still claiming discounts.' },
    { '@type': 'HowToStep', position: 5, name: 'Shop on peak discount days', text: 'Banks raise discounts on specific days during the sale. Track daily offers and time high-value purchases to the best-discount day.' },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Which credit card is best for the Amazon Great Indian Festival 2026?', acceptedAnswer: { '@type': 'Answer', text: 'For the Amazon Great Indian Festival 2026, the best cards are the partner bank card offering the instant discount (Amazon typically partners with SBI for a 10% instant discount), plus the Amazon Pay ICICI Credit Card, which gives 5% cashback for Prime members and 3% for non-Prime on Amazon spends with no annual fee. The ideal approach is to use the SBI card if it carries the instant-discount tie-up, or the Amazon Pay ICICI card for guaranteed year-round cashback that can stack with other sale offers.' }},
    { '@type': 'Question', name: 'Which credit card is best for Flipkart Big Billion Days 2026?', acceptedAnswer: { '@type': 'Answer', text: 'For Flipkart Big Billion Days 2026, Flipkart typically partners with Axis and ICICI for a 10% instant discount (up to ₹1,750 on a minimum purchase, with higher caps on larger orders). The Flipkart Axis Bank Credit Card gives 5% cashback on Flipkart and Myntra, making it the strongest co-branded option. The Flipkart SBI card is another co-branded choice. Use the partner bank card to claim the instant discount, then layer card cashback and SuperCoins on top.' }},
    { '@type': 'Question', name: 'How do I stack offers to save the most during festival sales?', acceptedAnswer: { '@type': 'Answer', text: 'To stack offers during Indian festival sales, combine four layers: (1) the bank instant discount from the partner bank card, usually 10%; (2) co-branded card cashback, such as 5% on the Amazon Pay ICICI or Flipkart Axis card; (3) platform coupons or SuperCoins; and (4) no-cost EMI on big-ticket items. Stacking the instant discount with card cashback alone can push effective savings into the high teens or low twenties percent on eligible products.' }},
    { '@type': 'Question', name: 'When is the Amazon and Flipkart festival sale in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'The Amazon Great Indian Festival and Flipkart Big Billion Days 2026 are both expected to begin in late September 2026, around September 22-23, with early access typically a day earlier for Amazon Prime and Flipkart Plus members. These are the largest sale events of the Indian festive season and feature the deepest discounts and the strongest bank offers of the year. Exact dates are confirmed closer to the event.' }},
  ],
}

export default function BlogPost() {
  const [showBar, setShowBar] = useState(false)
  const [platform, setPlatform] = useState('amazon')

  useEffect(() => {
    const fn = () => setShowBar(window.scrollY > 600)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const H2 = ({ children, id }) => (
    <h2 id={id} className="pt-8 scroll-mt-20" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', letterSpacing: '-0.01em' }}>{children}</h2>
  )
  const S = ({ children }) => <strong style={{ color: 'var(--text)' }}>{children}</strong>

  const PLATFORMS = {
    amazon: {
      name: 'Amazon Great Indian Festival',
      partnerBank: 'SBI (typical 10% instant discount)',
      color: '#ff9900',
      cards: [
        { name: 'Amazon Pay ICICI', fee: 'Lifetime free', benefit: '5% back (Prime) / 3% (non-Prime) on Amazon', why: 'The default Amazon card. Cashback as Amazon Pay balance. Stacks with instant discounts.', best: true },
        { name: 'SBI partner card', fee: 'Varies', benefit: '10% instant discount (if tie-up active)', why: 'Use whichever SBI card carries the festival instant-discount tie-up to claim the headline 10% off.', best: false },
        { name: 'HDFC Millennia', fee: '₹1,000 (waivable)', benefit: '5% cashback on Amazon + Flipkart', why: 'Covers both platforms — useful if you shop across Amazon and Flipkart.', best: false },
        { name: 'Cashback SBI Card', fee: '₹999', benefit: '5% on all online spends (cap ₹5,000/cycle)', why: 'Universal online cashback — good when no co-branded card applies.', best: false },
      ],
    },
    flipkart: {
      name: 'Flipkart Big Billion Days',
      partnerBank: 'Axis / ICICI / Kotak (typical 10% instant discount)',
      color: '#2874f0',
      cards: [
        { name: 'Flipkart Axis Bank', fee: '₹500 (waivable)', benefit: '5% on Flipkart & Myntra, 4% on preferred partners', why: 'The strongest Flipkart co-branded card. 5% on Flipkart stacks with the bank instant discount.', best: true },
        { name: 'Axis / ICICI partner card', fee: 'Varies', benefit: '10% instant discount (if tie-up active)', why: 'Flipkart usually partners with Axis and ICICI for the headline 10% instant discount — use the eligible card.', best: false },
        { name: 'Flipkart SBI Card', fee: 'Varies', benefit: 'Co-branded Flipkart cashback', why: 'Alternative co-branded option; may feature in bank tie-ups for double-dip benefits.', best: false },
        { name: 'HDFC Millennia', fee: '₹1,000 (waivable)', benefit: '5% cashback on Flipkart + Amazon', why: 'Covers both platforms — versatile for cross-platform shoppers.', best: false },
      ],
    },
  }

  const pf = PLATFORMS[platform]

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Best Credit Cards for Amazon & Flipkart Festival Sale 2026', datePublished: '2026-07-02', dateModified: '2026-07-02', author: { '@type': 'Organization', name: 'PointsMax', url: 'https://www.pointsmax.in' }, publisher: { '@type': 'Organization', name: 'PointsMax', url: 'https://www.pointsmax.in' } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageNav />

      <article className="max-w-2xl mx-auto px-5 py-12">
        <div className="flex items-center gap-2 mb-8 text-[13px]" style={{ color: 'var(--text-m)' }}>
          <a href="/">PointsMax</a><span>/</span>
          <a href="/blog">Learn</a><span>/</span>
          <span style={{ color: 'var(--text-s)' }}>Festival Sale Cards</span>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded" style={{ color: 'var(--green)', background: 'rgba(45,106,79,0.08)' }}>Seasonal Guide</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>July 2, 2026</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>9 min read</span>
        </div>

        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(24px, 4vw, 36px)', lineHeight: 1.15, letterSpacing: '-0.025em', color: 'var(--text)' }}>
          Best Credit Cards for Amazon & Flipkart Festival Sale 2026: Maximum Savings Guide
        </h1>

        {/* DIRECT ANSWER BLOCK */}
        <div className="mt-8 p-5 rounded-2xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
          <p className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--text-m)' }}>Quick answer</p>
          <p className="text-[15px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
            <S>For the Amazon Great Indian Festival and Flipkart Big Billion Days 2026 (expected late September), the biggest savings come from stacking, not from one card.</S> Use the partner bank card for the 10% instant discount — SBI for Amazon, Axis/ICICI for Flipkart — then layer co-branded cashback (Amazon Pay ICICI 5%, Flipkart Axis 5%), platform coupons/SuperCoins, and no-cost EMI on big-ticket items. Stacking the instant discount with card cashback alone pushes effective savings into the high teens or low twenties percent on eligible products.
          </p>
        </div>

        <p className="mt-6 text-[16px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
          India's two biggest sales — the Amazon Great Indian Festival and Flipkart Big Billion Days — are expected to land in late September 2026, with the deepest discounts and strongest bank offers of the year. The savvy move isn't just finding deals; it's using the right card to stack offers. Here's exactly which card to use on each platform, and how to combine them for maximum savings.
        </p>

        <div className="mt-10 space-y-6 text-[15px] leading-[1.85]" style={{ color: 'var(--text-s)' }}>

          <H2 id="stacking">The stacking strategy — where the real savings are</H2>
          <p>The single biggest mistake shoppers make is treating the headline "10% instant discount" as the whole deal. <S>The real savings come from layering four separate offers on the same purchase:</S></p>
          <div className="space-y-2">
            {[
              { n: '1', layer: 'Bank instant discount', val: '~10%', detail: 'From the partner bank card (SBI for Amazon, Axis/ICICI for Flipkart). Applied at checkout, capped per order.' },
              { n: '2', layer: 'Co-branded card cashback', val: '3-5%', detail: 'Amazon Pay ICICI (5% Prime) or Flipkart Axis (5%). Credited after purchase, stacks on top.' },
              { n: '3', layer: 'Platform coupons / SuperCoins', val: 'Varies', detail: 'Flipkart SuperCoins, Amazon coupons, exchange bonuses. Add at checkout.' },
              { n: '4', layer: 'No-cost EMI', val: 'Cashflow', detail: 'On big-ticket items — spreads cost without interest while you still claim discounts.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start p-3 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <span className="w-8 h-8 rounded-full grid place-items-center text-[13px] font-bold shrink-0" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>{item.n}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between flex-wrap gap-1">
                    <p className="text-[14px] font-semibold" style={{ color: 'var(--text)' }}>{item.layer}</p>
                    <span className="text-[12px] font-mono font-bold" style={{ color: 'var(--green)' }}>{item.val}</span>
                  </div>
                  <p className="text-[12px] mt-0.5" style={{ color: 'var(--text-m)' }}>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 rounded-xl" style={{ background: '#EDF5F0', border: '1px solid #C8DDD0' }}>
            <p className="text-[13px] font-bold mb-1" style={{ color: 'var(--green)' }}>Worked example: ₹50,000 phone</p>
            <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>10% instant discount (capped, say ₹1,750-2,500) + 5% co-branded cashback (₹2,500) + exchange/coupon + no-cost EMI. On eligible products, <S>stacked savings frequently reach 15-22% of the cash price</S> — versus the ~10% most shoppers settle for by using just the instant discount.</p>
          </div>

          <H2 id="by-platform">Best card by platform</H2>
          <div className="flex gap-2 mb-4">
            {Object.entries(PLATFORMS).map(([key, info]) => (
              <button key={key} onClick={() => setPlatform(key)}
                className="flex-1 py-2.5 px-3 rounded-xl text-[13px] font-semibold transition-all"
                style={{ background: platform === key ? 'var(--dark)' : 'var(--bg-s)', color: platform === key ? '#FAF8F5' : 'var(--text-s)', border: '1px solid var(--border)' }}>
                {info.name.split(' ')[0]}
              </button>
            ))}
          </div>

          <div className="p-3 rounded-xl mb-3" style={{ background: pf.color + '12', border: `1px solid ${pf.color}30` }}>
            <p className="text-[13px]" style={{ color: 'var(--text-s)' }}><span className="font-bold" style={{ color: pf.color }}>{pf.name}:</span> Partner bank for instant discount — <S>{pf.partnerBank}</S></p>
          </div>

          <div className="space-y-3">
            {pf.cards.map((card, i) => (
              <div key={i} className="p-4 rounded-xl" style={{ background: 'var(--card)', border: card.best ? '2px solid var(--green)' : '1px solid var(--border)' }}>
                <div className="flex items-start justify-between gap-2 flex-wrap mb-1">
                  <div className="flex items-center gap-2">
                    <p className="text-[15px] font-semibold" style={{ color: 'var(--text)' }}>{card.name}</p>
                    {card.best && <span className="text-[10px] font-bold px-1.5 py-0.5 rounded" style={{ color: 'var(--green)', background: 'rgba(45,106,79,0.1)' }}>TOP PICK</span>}
                  </div>
                  <span className="text-[12px] font-mono" style={{ color: 'var(--text-m)' }}>{card.fee}</span>
                </div>
                <p className="text-[13px] font-semibold mb-1" style={{ color: 'var(--green)' }}>{card.benefit}</p>
                <p className="text-[12px]" style={{ color: 'var(--text-m)' }}>{card.why}</p>
              </div>
            ))}
          </div>

          {/* Mid CTA */}
          <div className="p-5 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <div>
              <p className="text-[14px] font-semibold">Not sure which card to apply for before the sale?</p>
              <p className="text-[12px] mt-1" style={{ color: 'rgba(250,248,245,0.5)' }}>Take the 60-second quiz to find your best festival card.</p>
            </div>
            <a href="/tools/card-quiz" className="shrink-0 px-5 py-2.5 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Take the Quiz →</a>
          </div>

          <H2 id="cross-platform">The best all-rounder cards</H2>
          <p>If you don't want to hold separate co-branded cards for each platform, two cards cover both:</p>
          <div className="space-y-3">
            {[
              { name: 'HDFC Millennia', detail: '5% cashback on both Amazon and Flipkart (plus other partners), 1% elsewhere. The single most versatile festival card if you shop across platforms. ₹1,000 fee, waivable on ₹1L annual spend.' },
              { name: 'SBI Cashback Card', detail: '5% on all online spends (cap ₹5,000/cycle, no merchant restriction). The universal online card — works on any e-commerce site, not just Amazon/Flipkart. ₹999 fee. See our full review for details.', href: '/blog/best-lifetime-free-credit-cards-india-2026' },
            ].map((card, i) => (
              <div key={i} className="p-4 rounded-xl" style={{ background: '#FBF8F0', border: '1px solid #E8DFC5' }}>
                <p className="text-[14px] font-bold mb-1" style={{ color: 'var(--gold, #B8953E)' }}>{card.name}</p>
                <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>{card.detail}{card.href && <> <a href={card.href} style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>See the free cards guide</a>.</>}</p>
              </div>
            ))}
          </div>

          <H2 id="timing">Timing & preparation checklist</H2>
          <div className="space-y-2">
            {[
              'Apply for your festival card NOW — co-branded cards take 1-2 weeks to arrive; don\'t wait until the sale starts',
              'Add items to your wishlist before the sale so you can check out fast when deals drop',
              'Confirm which bank holds the instant-discount tie-up (Amazon→SBI, Flipkart→Axis/ICICI) when the sale dates are announced',
              'Check daily — banks raise discounts on specific days; time big purchases to peak-discount days',
              'Use no-cost EMI on phones/laptops/appliances to spread cost without losing the discount',
              'Verify the per-order discount cap — instant discounts are capped (often ₹1,750-2,500), so split very large orders if it helps',
            ].map((tip, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="w-6 h-6 rounded-full grid place-items-center text-[11px] font-bold shrink-0 mt-0.5" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>{i+1}</span>
                <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>{tip}</p>
              </div>
            ))}
          </div>

          <H2 id="mistakes">Mistakes that cost you savings</H2>
          <div className="space-y-3">
            {[
              { m: 'Using only the instant discount', c: 'Most shoppers stop at the 10% instant discount and miss the co-branded cashback that stacks on top. That\'s leaving 5% on the table.' },
              { m: 'Applying for the card too late', c: 'Co-branded cards take 1-2 weeks to arrive. Apply now — if it arrives after the sale starts, you miss the entire event.' },
              { m: 'Ignoring the discount cap', c: 'The 10% instant discount is capped per order (often ₹1,750-2,500). On a ₹1L purchase, that\'s effectively under 2.5% — so the co-branded cashback matters even more on big-ticket items.' },
              { m: 'Buying things you don\'t need', c: 'A 20% discount on something you wouldn\'t have bought isn\'t a saving — it\'s a 80% spend. The best festival strategy is buying planned purchases at the lowest price, not impulse-buying for the discount.' },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
                <p className="text-[13px] font-bold mb-1" style={{ color: 'var(--red)' }}>✕ {item.m}</p>
                <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>{item.c}</p>
              </div>
            ))}
          </div>

          <H2 id="bottom-line">The bottom line</H2>
          <p>The Amazon Great Indian Festival and Flipkart Big Billion Days 2026 are the best shopping events of the year to buy planned big-ticket purchases. But the discount you see is rarely the discount you can get. <S>The winning move is stacking: partner-bank instant discount + co-branded card cashback + platform coupons + no-cost EMI.</S></p>
          <p>For Amazon, lead with the Amazon Pay ICICI card (5% Prime) plus the SBI instant discount. For Flipkart, the Flipkart Axis card (5%) plus the Axis/ICICI instant discount. If you shop across both, HDFC Millennia or the SBI Cashback card covers everything. And whatever you do — apply for the card now, because it won't arrive in time if you wait for the sale to start.</p>
          <p>Not sure which card fits your shopping? Take the <a href="/tools/card-quiz" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>card quiz</a>, compare cashback value with the <a href="/" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>PointsMax calculator</a>, and for the broader strategy see <a href="/blog/best-lifetime-free-credit-cards-india-2026" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>the best lifetime-free cards</a> and <a href="/blog/points-maximisation-playbook-india-2026" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>The Points Maximisation Playbook</a>.</p>

          <div className="p-6 rounded-2xl text-center mt-8" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <p className="text-[16px] font-semibold">Get festival-ready before the sale</p>
            <p className="text-[13px] mt-1 mb-4" style={{ color: 'rgba(250,248,245,0.5)' }}>Find your best card now so it arrives before the September rush.</p>
            <a href="/tools/card-quiz" className="inline-block px-6 py-2.5 rounded-xl text-[14px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Take the Card Quiz →</a>
          </div>

          <p className="text-[11px] mt-8 leading-relaxed" style={{ color: 'var(--text-m)' }}>
            <strong>Disclaimer:</strong> Sale dates, bank partnerships, instant-discount caps, and card benefits are confirmed by the platforms and banks closer to each event and change every year. Figures here are based on historical patterns and publicly available information as of July 2026 — verify the exact 2026 partner banks, caps, and terms on Amazon, Flipkart, and your card issuer before shopping. PointsMax is not affiliated with any bank, Amazon, or Flipkart, and earns no affiliate commissions. Not financial advice.
          </p>

          <FeedbackWidget pageSlug="best-credit-cards-amazon-flipkart-festival-sale-india-2026" pageTitle="Best Credit Cards for Amazon & Flipkart Festival Sale 2026" />
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
            <p className="text-[13px]" style={{ color: 'rgba(250,248,245,0.6)' }}>Find your best <strong style={{ color: '#FAF8F5' }}>festival card</strong></p>
            <a href="/tools/card-quiz" className="shrink-0 px-4 py-2 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Take the Quiz →</a>
          </div>
        </div>
      )}
    </div>
  )
}
