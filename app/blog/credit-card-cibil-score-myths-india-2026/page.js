'use client'

import { useState, useEffect } from 'react'
import FeedbackWidget from '@/components/FeedbackWidget'
import PageNav from '@/components/PageNav'

const faqJsonLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Does carrying a balance on your credit card improve your CIBIL score?', acceptedAnswer: { '@type': 'Answer', text: 'No. This is one of the most costly myths in India. Carrying a balance does not help your CIBIL score — it only costs you interest of 30-48% a year. Your score is built by paying your full statement balance on time, every month. Paying in full is reported to the bureaus as responsible credit use and is better for your score than revolving a balance. There is no benefit whatsoever to leaving a balance unpaid.' }},
    { '@type': 'Question', name: 'Does checking your own CIBIL score lower it?', acceptedAnswer: { '@type': 'Answer', text: 'No. Checking your own CIBIL score is a soft inquiry and has zero impact on your score. You can check it as often as you like. Only hard inquiries — when a lender pulls your report during a loan or credit card application — can temporarily lower your score by around 5-10 points. Checking your own score monthly is a good habit and is completely free via the official CIBIL site and several banking apps.' }},
    { '@type': 'Question', name: 'Does closing a credit card improve your CIBIL score?', acceptedAnswer: { '@type': 'Answer', text: 'Usually no — closing a card often hurts your score. Closing a card removes its credit limit from your total available credit, which raises your credit utilisation ratio even if your spending stays the same. It can also lower the average age of your credit accounts. Both effects can reduce your score. Unless a card carries an annual fee you cannot justify, keeping old cards open and occasionally used generally helps your score by keeping utilisation low and credit history long.' }},
    { '@type': 'Question', name: 'What is the ideal credit utilisation ratio in India?', acceptedAnswer: { '@type': 'Answer', text: 'Keep your credit utilisation ratio below 30% of your total available credit. Utilisation is roughly 30% of your CIBIL score, second only to payment history. Under 30% is healthy; under 10% is ideal. To calculate it, divide your total outstanding balance across all cards by your total credit limit and multiply by 100. For example, ₹60,000 balance on ₹3,00,000 total limit is 20% utilisation, which is healthy.' }},
    { '@type': 'Question', name: 'Do multiple credit cards hurt your CIBIL score?', acceptedAnswer: { '@type': 'Answer', text: 'Not by themselves. Having multiple credit cards does not inherently hurt your CIBIL score — in fact it can help, because more cards mean a higher total credit limit, which lowers your utilisation ratio if your spending stays the same. What hurts is mismanagement: missing payments on any card, high overall utilisation, or applying for many cards in a short span (each triggering a hard inquiry). Managed responsibly, multiple cards can strengthen your credit profile.' }},
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

  const myths = [
    { myth: 'Carrying a balance improves your score', truth: false, fact: 'False — and it costs you money. Revolving a balance does nothing for your score; it just racks up 30-48% annual interest. Paying your full statement on time is what builds your score. This myth is the single most expensive misconception in Indian personal finance.' },
    { myth: 'Checking your own CIBIL lowers it', truth: false, fact: 'False. Checking your own score is a "soft inquiry" with zero impact. You can check as often as you like. Only "hard inquiries" (a lender pulling your report for an application) cause a temporary 5-10 point dip. Check yours monthly — it\'s free.' },
    { myth: 'Closing an unused card helps your score', truth: false, fact: 'False, usually the opposite. Closing a card removes its limit from your total, raising your utilisation ratio, and can shorten your average account age. Keep old no-fee cards open — they quietly help.' },
    { myth: 'More credit cards always hurt your score', truth: false, fact: 'False. More cards mean a higher total limit, which lowers utilisation. What hurts is missed payments, high overall usage, or many applications at once — not the card count itself.' },
    { myth: 'You should use 100% of your limit to show activity', truth: false, fact: 'False and harmful. Maxing out signals financial stress to bureaus. Keep utilisation under 30% (ideally under 10%). High utilisation is one of the fastest ways to drag your score down.' },
    { myth: 'Paying the minimum due keeps your score healthy', truth: false, fact: 'False. Paying only the minimum avoids a late-payment mark, but it means carrying a balance at 30-48% interest, and over time high revolving debt signals risk. Pay in full whenever you can.' },
    { myth: 'Utilisation doesn\'t matter if you pay on time', truth: false, fact: 'False. Both matter. Payment history is ~35% of your score and utilisation ~30%. You can pay on time and still have a mediocre score if your utilisation is consistently high. They\'re separate factors.' },
    { myth: 'A closed card disappears from your report immediately', truth: false, fact: 'False. Closed accounts in good standing stay on your report for around 7 years and continue contributing positively to your history. Negative marks also linger about 7 years.' },
    { myth: 'You need to carry debt to build credit history', truth: false, fact: 'False. You build history simply by holding and using cards responsibly and paying in full. Debt is never required — responsible use is.' },
  ]

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Credit Card & CIBIL Score Myths in India 2026', datePublished: '2026-07-07', dateModified: '2026-07-07', author: { '@type': 'Organization', name: 'PointsMax', url: 'https://www.pointsmax.in' }, publisher: { '@type': 'Organization', name: 'PointsMax', url: 'https://www.pointsmax.in' } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageNav />

      <article className="max-w-2xl mx-auto px-5 py-12">
        <div className="flex items-center gap-2 mb-8 text-[13px]" style={{ color: 'var(--text-m)' }}>
          <a href="/">PointsMax</a><span>/</span>
          <a href="/blog">Learn</a><span>/</span>
          <span style={{ color: 'var(--text-s)' }}>CIBIL Myths</span>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded" style={{ color: 'var(--green)', background: 'rgba(45,106,79,0.08)' }}>Consumer Guide</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>July 7, 2026</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>11 min read</span>
        </div>

        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(24px, 4vw, 36px)', lineHeight: 1.15, letterSpacing: '-0.025em', color: 'var(--text)' }}>
          Credit Card & CIBIL Score Myths in India 2026: What Actually Helps (and Hurts)
        </h1>

        {/* DIRECT ANSWER BLOCK */}
        <div className="mt-8 p-5 rounded-2xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
          <p className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--text-m)' }}>Quick answer</p>
          <p className="text-[15px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
            <S>The most damaging credit score myths in India are all false: carrying a balance does NOT help your score (it just costs 30-48% interest), checking your own CIBIL does NOT lower it (that's a free soft inquiry), and closing an unused card usually HURTS your score (it raises your utilisation ratio).</S> What actually builds your CIBIL score: paying your full balance on time (~35% of your score), keeping utilisation under 30% (~30%), maintaining a long credit history, and applying for new credit sparingly. Below, the nine biggest myths busted with facts.
          </p>
        </div>

        <p className="mt-6 text-[16px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
          India has a credit-awareness gap, and it costs people real money. Myths about the CIBIL score circulate everywhere — from well-meaning relatives to random WhatsApp forwards — and some of them (like "carry a balance to build your score") actively drain your wallet. Here's what's true, what's false, and what actually moves your score.
        </p>

        <div className="mt-10 space-y-6 text-[15px] leading-[1.85]" style={{ color: 'var(--text-s)' }}>

          <H2 id="the-myths">The 9 biggest myths, busted</H2>
          <div className="space-y-3">
            {myths.map((m, i) => (
              <div key={i} className="p-4 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <div className="flex items-start gap-2 mb-2">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded shrink-0 mt-0.5" style={{ color: 'var(--red)', background: 'rgba(197,48,48,0.08)' }}>MYTH</span>
                  <p className="text-[14px] font-semibold" style={{ color: 'var(--text)' }}>"{m.myth}"</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded shrink-0 mt-0.5" style={{ color: 'var(--green)', background: 'rgba(45,106,79,0.08)' }}>FACT</span>
                  <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>{m.fact}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Tool CTA */}
          <div className="p-5 rounded-2xl" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <p className="text-[14px] font-semibold mb-1">Is your utilisation hurting your score?</p>
            <p className="text-[13px] mb-4" style={{ color: 'rgba(250,248,245,0.55)' }}>Enter your cards and see your ratio, your band, and exactly how much to pay down to reach the healthy zone.</p>
            <a href="/tools/cibil-utilisation-calculator" className="inline-block px-5 py-2.5 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Check My Utilisation →</a>
          </div>

          <H2 id="what-actually-matters">What actually moves your CIBIL score</H2>
          <p>Ignore the myths and focus on the five factors that genuinely determine your score:</p>
          <div className="space-y-2">
            {[
              { f: 'Payment history', w: '~35%', d: 'The biggest factor. Pay every bill in full and on time. Even one missed payment can hurt; repeated misses do real damage.' },
              { f: 'Credit utilisation', w: '~30%', d: 'Keep total balances under 30% of total limits (ideally under 10%). The second-biggest lever, and the fastest to improve.' },
              { f: 'Credit history length', w: '~15%', d: 'Older accounts help. Keep your oldest no-fee cards open. Average account age matters.' },
              { f: 'Credit mix', w: '~10%', d: 'A healthy mix of credit types (cards, loans) helps modestly. Don\'t take loans just for this.' },
              { f: 'New credit / inquiries', w: '~10%', d: 'Each application is a hard inquiry (5-10 point temporary dip). Space out applications; don\'t apply for several cards at once.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start p-3 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <span className="text-[13px] font-mono font-bold shrink-0 w-12" style={{ color: 'var(--gold, #B8953E)' }}>{item.w}</span>
                <div>
                  <p className="text-[13px] font-semibold" style={{ color: 'var(--text)' }}>{item.f}</p>
                  <p className="text-[12px] mt-0.5" style={{ color: 'var(--text-m)' }}>{item.d}</p>
                </div>
              </div>
            ))}
          </div>

          <H2 id="utilisation-trap">The utilisation trap most people miss</H2>
          <p>Here's a subtle one that even careful people get wrong: <S>utilisation is often measured at your statement date, not when you pay.</S> So even if you pay in full every month, if you spend heavily and the bill generates before you pay, a high balance gets reported to the bureaus.</p>
          <p>The fix: if you're a heavy spender relative to your limit, <S>make a partial payment before your statement date</S> to lower the reported balance, or ask for a credit limit increase (which lowers utilisation instantly without changing your spending). See exactly where you stand with our <a href="/tools/cibil-utilisation-calculator" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>utilisation calculator</a>.</p>

          <H2 id="closing-cards">Why "just close it" is usually wrong</H2>
          <p>When people feel overwhelmed by cards, the instinct is to close them. But <S>closing a card can quietly hurt you two ways:</S> it removes that card's limit from your total available credit (spiking your utilisation ratio), and it can lower your average account age. If the card has no annual fee, the usually-better move is to keep it open, use it occasionally for a small recurring bill, and pay it off. If it has a fee you can't justify, weigh the fee against the score impact — our <a href="/tools/breakeven" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>breakeven calculator</a> helps with that call.</p>

          <H2 id="bottom-line">The bottom line</H2>
          <p>Your CIBIL score isn't mysterious, and it doesn't reward the things the myths claim. <S>You don't need to carry debt, you don't need to fear checking your score, and you usually shouldn't close old cards.</S> The whole game is: pay in full and on time, keep utilisation low, hold cards for the long term, and apply for new credit sparingly.</p>
          <p>Do those four things and your score takes care of itself — no myths required. Check your utilisation with our <a href="/tools/cibil-utilisation-calculator" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>free calculator</a>, understand the interest that revolving debt triggers with our <a href="/tools/interest-calculator" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>interest calculator</a>, and learn how a card actually works in our <a href="/blog/how-credit-cards-work-india-2026" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>beginner's guide</a>.</p>

          <div className="p-6 rounded-2xl text-center mt-8" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <p className="text-[16px] font-semibold">Know exactly where your score stands</p>
            <p className="text-[13px] mt-1 mb-4" style={{ color: 'rgba(250,248,245,0.5)' }}>Check your utilisation ratio in 10 seconds.</p>
            <a href="/tools/cibil-utilisation-calculator" className="inline-block px-6 py-2.5 rounded-xl text-[14px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Open Utilisation Calculator →</a>
          </div>

          <p className="text-[11px] mt-8 leading-relaxed" style={{ color: 'var(--text-m)' }}>
            <strong>Disclaimer:</strong> Score-factor weightings are approximate and based on publicly available information about how Indian credit bureaus assess scores as of July 2026. Exact scoring models vary by bureau (CIBIL, Experian, CRIF, Equifax) and are proprietary. This is educational information, not financial advice. Check your actual score free via the official CIBIL website. PointsMax is not affiliated with any credit bureau or bank.
          </p>

          <FeedbackWidget pageSlug="credit-card-cibil-score-myths-india-2026" pageTitle="Credit Card & CIBIL Score Myths in India 2026" />
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
            <p className="text-[13px]" style={{ color: 'rgba(250,248,245,0.6)' }}>Check your <strong style={{ color: '#FAF8F5' }}>utilisation ratio</strong></p>
            <a href="/tools/cibil-utilisation-calculator" className="shrink-0 px-4 py-2 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Check Now →</a>
          </div>
        </div>
      )}
    </div>
  )
}
