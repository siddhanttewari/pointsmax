'use client'

import { useState, useEffect } from 'react'
import FeedbackWidget from '@/components/FeedbackWidget'
import PageNav from '@/components/PageNav'

const faqJsonLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is changing with the Amex Platinum Travel Card in September 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Effective September 10, 2026, American Express is revising the Platinum Travel Credit Card milestone benefits. The ₹1.9 lakh milestone will no longer include the additional 7,500 bonus Membership Rewards points. The ₹4 lakh milestone remains unchanged at 10,000 bonus points. The ₹7 lakh milestone loses its 22,500 bonus points, which are replaced by a ₹20,000 Taj Experiences e-Gift Card. This is the second milestone cut to this card in 2026, after an earlier change on March 9, 2026.' }},
    { '@type': 'Question', name: 'How much value is lost in the Amex Platinum Travel September 2026 devaluation?', acceptedAnswer: { '@type': 'Answer', text: 'For a cardholder spending ₹7 lakh in a membership year, the milestone rewards change from 40,000 Membership Rewards points plus a ₹10,000 Taj voucher to 10,000 points plus a ₹20,000 Taj voucher. That is a reduction of 30,000 milestone Membership Rewards points, partially offset by an extra ₹10,000 of Taj gift card value. Whether this is a net loss depends on how you value MR points versus a Taj hotel voucher — for people who valued flexible, transferable MR points, it is a significant downgrade.' }},
    { '@type': 'Question', name: 'What should I do before the Amex milestone change on September 10, 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Eligibility is determined by transaction posting date. Eligible spends posted on or before September 9, 2026 qualify under the current (better) milestone benefits, while spends posted on or after September 10 fall under the revised structure. If you are close to a milestone under the old rules, completing that spend before the cutoff — allowing time for transactions to post — locks in the better reward. After that, reassess whether the card still fits your spending, and consider whether downgrading or switching cards makes sense.' }},
    { '@type': 'Question', name: 'Is the Amex Platinum Travel Card still worth it in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'It depends on your spending and how you value the rewards. After two milestone cuts in 2026, the card delivers far fewer flexible Membership Rewards points and leans more on the Taj Experiences voucher. If you regularly stay at Taj/IHCL hotels, the doubled ₹20,000 voucher has real value. If you valued transferable MR points for flights, the card has weakened significantly, and other cards may now offer better returns for the ₹5,000 fee. The core MR earn rate and point value are unchanged — only milestones were cut.' }},
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

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'NewsArticle', headline: 'Amex Platinum Travel Milestone Devaluation (Sept 10, 2026): What Changed & What To Do', datePublished: '2026-08-10', dateModified: '2026-08-10', author: { '@type': 'Organization', name: 'PointsMax', url: 'https://www.pointsmax.in' }, publisher: { '@type': 'Organization', name: 'PointsMax', url: 'https://www.pointsmax.in' } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageNav />

      <article className="max-w-2xl mx-auto px-5 py-12">
        <div className="flex items-center gap-2 mb-8 text-[13px]" style={{ color: 'var(--text-m)' }}>
          <a href="/">PointsMax</a><span>/</span>
          <a href="/blog">Learn</a><span>/</span>
          <span style={{ color: 'var(--text-s)' }}>Amex Milestone Change</span>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded" style={{ color: 'var(--red)', background: 'rgba(197,48,48,0.08)' }}>News · Devaluation</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>August 10, 2026</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>7 min read</span>
        </div>

        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(24px, 4vw, 36px)', lineHeight: 1.15, letterSpacing: '-0.025em', color: 'var(--text)' }}>
          Amex Platinum Travel Milestone Devaluation (Sept 10, 2026): What Changed & What To Do
        </h1>

        {/* DIRECT ANSWER BLOCK */}
        <div className="mt-8 p-5 rounded-2xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
          <p className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--text-m)' }}>Quick answer</p>
          <p className="text-[15px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
            <S>Effective September 10, 2026, American Express is cutting Platinum Travel Card milestone rewards — the second such cut in 2026.</S> The <S>₹1.9 lakh milestone loses its 7,500 bonus points</S> entirely. The <S>₹4 lakh milestone is unchanged</S> (10,000 points). The <S>₹7 lakh milestone loses its 22,500 points</S>, replaced by a <S>₹20,000 Taj Experiences e-Gift Card</S>. Net for a ₹7L spender: 10,000 MR + ₹20,000 Taj, versus 40,000 MR + ₹10,000 Taj before — the Taj value doubled, but 30,000 flexible MR points are gone. Your core earn rate and point value are unchanged; only milestones were cut.
          </p>
        </div>

        <p className="mt-6 text-[16px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
          American Express has sent cardholders notice of another milestone revision on the Platinum Travel Credit Card — coming barely six months after the last one. Here's exactly what's changing, how much value it costs, what to do before the September 10 cutoff, and whether the card still earns its place in your wallet.
        </p>

        <div className="mt-10 space-y-6 text-[15px] leading-[1.85]" style={{ color: 'var(--text-s)' }}>

          <H2 id="what-changed">What's changing on September 10</H2>
          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-[12px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead><tr>
                <th className="text-left py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Milestone</th>
                <th className="text-left py-3 px-2 font-semibold" style={{ color: 'var(--text-m)', borderBottom: '1px solid var(--border)' }}>Before</th>
                <th className="text-left py-3 px-2 font-semibold" style={{ color: 'var(--red)', borderBottom: '1px solid var(--border)' }}>From Sep 10</th>
              </tr></thead>
              <tbody>
                {[
                  ['₹1.9 lakh', '7,500 bonus MR points', 'Nothing — removed'],
                  ['₹4 lakh', '10,000 bonus MR points', '10,000 (unchanged)'],
                  ['₹7 lakh', '22,500 bonus MR points', '₹20,000 Taj e-Gift Card'],
                ].map(([m, before, after], i) => (
                  <tr key={i}>
                    <td className="py-2.5 px-2 font-medium" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{m}</td>
                    <td className="py-2.5 px-2 text-[11px]" style={{ color: 'var(--text-m)', borderBottom: '1px solid var(--border)' }}>{before}</td>
                    <td className="py-2.5 px-2 text-[11px] font-semibold" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-[11px] mt-2" style={{ color: 'var(--text-m)' }}>Core MR earn rate and point value are unchanged. As of the Amex notice, August 2026.</p>
          </div>

          <H2 id="the-math">The real math</H2>
          <p>The headline number: a cardholder spending <S>₹7 lakh</S> in a membership year previously earned <S>40,000 MR points plus a ₹10,000 Taj voucher</S> (combining the milestone tiers). From September 10, the same spend yields <S>10,000 MR points plus a ₹20,000 Taj voucher</S>.</p>
          <p>So the Taj gift card <S>doubled</S> from ₹10,000 to ₹20,000 — but you lose <S>30,000 Membership Rewards points</S>. Whether that's a net gain or loss comes down to one question: <S>do you value flexible, transferable MR points more than a fixed Taj hotel voucher?</S> For most points enthusiasts — who prize MR points precisely because they transfer to airlines — this is a meaningful downgrade dressed up with a bigger voucher.</p>

          <div className="p-4 rounded-xl" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
            <p className="text-[13px] font-bold mb-1" style={{ color: 'var(--red)' }}>Context: this is the second cut in 2026</p>
            <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>Back in March 2026, Amex already reworked these milestones — pushing the sweet spot from ₹4 lakh to ₹7 lakh and halving the ₹1.9L reward. This September change goes further, removing the ₹1.9L reward entirely and swapping the ₹7L points for the Taj voucher. Two cuts in six months is why the reaction has been strong.</p>
          </div>

          {/* Tracker CTA */}
          <div className="p-5 rounded-2xl" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <p className="text-[14px] font-semibold mb-1">Track every India card devaluation</p>
            <p className="text-[13px] mb-4" style={{ color: 'rgba(250,248,245,0.55)' }}>We log every reward cut across HDFC, Axis, SBI, ICICI, and Amex — with dates and exactly what changed.</p>
            <a href="/blog/credit-card-devaluation-tracker-india-2026" className="inline-block px-5 py-2.5 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Open the Devaluation Tracker →</a>
          </div>

          <H2 id="what-to-do">What to do before September 10</H2>
          <p><S>Eligibility is set by transaction posting date</S>, not spend date — an important distinction. Eligible spends <S>posted on or before September 9, 2026</S> qualify under the current, better benefits; spends posted <S>on or after September 10</S> fall under the revised structure.</p>
          <div className="space-y-2">
            {[
              { t: 'If you\'re close to a milestone under the old rules', d: 'Complete the spend with enough buffer for the transaction to POST by September 9 — not just be made. Card transactions can take a few days to post.' },
              { t: 'If you were chasing the ₹7L milestone for MR points', d: 'Reassess. Post-cutoff, ₹7L gives you a Taj voucher, not 22,500 points. If MR points were the goal, the math has changed.' },
              { t: 'If you value Taj/IHCL stays', d: 'The doubled ₹20,000 voucher may actually suit you — this cut isn\'t bad news for everyone.' },
              { t: 'If the card no longer fits', d: 'Consider whether to downgrade or switch. You may be eligible for a pro-rata fee refund on cancellation — worth asking.' },
            ].map((item, i) => (
              <div key={i} className="p-3 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <p className="text-[13px] font-semibold" style={{ color: 'var(--text)' }}>{item.t}</p>
                <p className="text-[12px] mt-0.5" style={{ color: 'var(--text-m)' }}>{item.d}</p>
              </div>
            ))}
          </div>

          <H2 id="still-worth-it">Is it still worth holding?</H2>
          <p>The honest answer is <S>it depends on how you spend and what you value.</S> If you regularly stay at Taj/IHCL properties, a ₹20,000 voucher for ₹7L of spend plus a ₹5,000 fee is defensible. If you held this card for flexible MR points to transfer to airline partners, it has clearly weakened — twice in one year — and you should compare it against alternatives for the ₹5,000 fee.</p>
          <p>Two things to keep in perspective: your <S>core MR earn rate and redemption value are untouched</S> (only milestones changed), and rewards are now <S>auto-credited</S> (no more calling customer care to trigger milestone points). But the trajectory — two cuts in 2026 — is the real signal. See how it stacks up against other cards with our <a href="/tools/card-quiz" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>card quiz</a>, and check whether the fee still pays for itself with the <a href="/tools/breakeven" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>breakeven calculator</a>.</p>

          <H2 id="bottom-line">The bottom line</H2>
          <p><S>Amex is cutting Platinum Travel milestones again, effective September 10, 2026 — the ₹1.9L reward is gone, and ₹7L now earns a ₹20,000 Taj voucher instead of 22,500 points.</S> If you're mid-way to a milestone under the old rules, finish it before the September 9 posting cutoff. After that, reassess honestly: this card now rewards Taj loyalists more than points collectors.</p>

          <div className="p-6 rounded-2xl text-center mt-8" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <p className="text-[16px] font-semibold">Never get blindsided by a devaluation again</p>
            <p className="text-[13px] mt-1 mb-4" style={{ color: 'rgba(250,248,245,0.5)' }}>Our tracker logs every India card reward cut, with dates and details.</p>
            <a href="/blog/credit-card-devaluation-tracker-india-2026" className="inline-block px-6 py-2.5 rounded-xl text-[14px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Open the Devaluation Tracker →</a>
          </div>

          <p className="text-[11px] mt-8 leading-relaxed" style={{ color: 'var(--text-m)' }}>
            <strong>Disclaimer:</strong> Based on American Express cardholder communications and public reporting as of August 2026; the changes take effect September 10, 2026. Milestone structures and eligibility rules can change — always verify current terms in your Amex cardholder communication or app. This is informational, not financial advice. PointsMax is not affiliated with American Express and earns no commission.
          </p>

          <FeedbackWidget pageSlug="amex-platinum-travel-milestone-devaluation-september-2026" pageTitle="Amex Platinum Travel Milestone Devaluation September 2026" />
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
            <p className="text-[13px]" style={{ color: 'rgba(250,248,245,0.6)' }}>Track every India card <strong style={{ color: '#FAF8F5' }}>devaluation</strong></p>
            <a href="/blog/credit-card-devaluation-tracker-india-2026" className="shrink-0 px-4 py-2 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Open Tracker →</a>
          </div>
        </div>
      )}
    </div>
  )
}
