'use client'

import { useState, useEffect } from 'react'
import FeedbackWidget from '@/components/FeedbackWidget'
import PageNav from '@/components/PageNav'

const howToJsonLd = {
  '@context': 'https://schema.org', '@type': 'HowTo',
  name: 'How to Dispute an Incorrect Credit Card Charge in India',
  description: 'Steps to identify and dispute credit card charges that are not permitted under RBI rules.',
  totalTime: 'PT30M',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Find the charge on your statement', text: 'Identify the exact charge, amount, and date on your monthly statement or the issuer app.' },
    { '@type': 'HowToStep', position: 2, name: 'Check your card\'s MITC', text: 'Log into the issuer app or website, open Documents, and find the Most Important Terms and Conditions (MITC). Search for the disputed charge.' },
    { '@type': 'HowToStep', position: 3, name: 'Confirm whether it is permitted', text: 'If the charge is absent from the MITC or the amount differs from what was disclosed, you have grounds to dispute it. Charges not in the MITC are not permitted under RBI Master Direction 2022.' },
    { '@type': 'HowToStep', position: 4, name: 'Raise a complaint with the issuer', text: 'File the dispute through the app\'s complaint section or write to the issuer\'s Principal Nodal Officer, whose email every issuer must publish per RBI rules.' },
    { '@type': 'HowToStep', position: 5, name: 'Escalate to the RBI Ombudsman', text: 'If the issuer does not resolve it within 30 days, escalate to the RBI Banking Ombudsman via the RBI CMS portal.' },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What are the hidden charges on a credit card in India?', acceptedAnswer: { '@type': 'Answer', text: 'The main hidden or overlooked credit card charges in India in 2026 are: finance charges (interest) of 2.5% to 4% per month (30-48% a year) when you do not pay the full balance; late payment fees of ₹100 to ₹1,300 by slab; foreign transaction markup of 1.5% to 3.5%; cash advance fees of 2.5% to 3% plus interest from day one; over-limit fees of ₹500 to ₹1,000; reward redemption fees of ₹99 to ₹250 on some cards; and 18% GST on all these fees. The largest and least understood is the finance charge, which applies to your full statement balance when you carry any balance.' }},
    { '@type': 'Question', name: 'How much interest do credit cards charge in India?', acceptedAnswer: { '@type': 'Answer', text: 'Indian credit cards charge finance charges of roughly 2.5% to 4% per month, which works out to about 30% to 48% per year — higher than almost any personal loan. Interest is triggered when you do not pay the full statement balance by the due date, or when you pay only the minimum due. Critically, interest is usually applied to the full statement balance from the original transaction date, not just the unpaid portion, so paying 99% of your bill can still leave you charged interest on 100%.' }},
    { '@type': 'Question', name: 'Which credit card charges can I dispute in India?', acceptedAnswer: { '@type': 'Answer', text: 'You can dispute any charge that is not listed in your card\'s MITC (Most Important Terms and Conditions), as charges not disclosed there are not permitted under RBI Master Direction 2022. Card closure must be free and processed within 7 business days. Cards reported lost or stolen before misuse are covered free under the RBI Customer Liability Framework 2017. If your statement still shows old "service tax" (replaced by GST in 2017), dispute it. Raise disputes with the issuer first, then escalate to the RBI Ombudsman if unresolved in 30 days.' }},
    { '@type': 'Question', name: 'Is paying the minimum due on a credit card safe?', acceptedAnswer: { '@type': 'Answer', text: 'No. Paying only the minimum due (typically 5% of the balance) is one of the most expensive habits in personal finance. It keeps you paying interest of 30-48% a year for years, because most of the minimum payment goes toward interest rather than principal. Paying the minimum also means interest continues to apply to your full balance. Always pay the total amount due if you can, or as much above the minimum as possible.' }},
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Hidden Credit Card Charges in India 2026: Every Fee Explained', datePublished: '2026-07-05', dateModified: '2026-07-05', author: { '@type': 'Organization', name: 'PointsMax', url: 'https://www.pointsmax.in' }, publisher: { '@type': 'Organization', name: 'PointsMax', url: 'https://www.pointsmax.in' } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageNav />

      <article className="max-w-2xl mx-auto px-5 py-12">
        <div className="flex items-center gap-2 mb-8 text-[13px]" style={{ color: 'var(--text-m)' }}>
          <a href="/">PointsMax</a><span>/</span>
          <a href="/blog">Learn</a><span>/</span>
          <span style={{ color: 'var(--text-s)' }}>Hidden Charges</span>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded" style={{ color: 'var(--green)', background: 'rgba(45,106,79,0.08)' }}>Consumer Guide</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>July 5, 2026</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>12 min read</span>
        </div>

        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(24px, 4vw, 36px)', lineHeight: 1.15, letterSpacing: '-0.025em', color: 'var(--text)' }}>
          Hidden Credit Card Charges in India 2026: Every Fee Explained (& Which You Can Dispute)
        </h1>

        {/* DIRECT ANSWER BLOCK */}
        <div className="mt-8 p-5 rounded-2xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
          <p className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--text-m)' }}>Quick answer</p>
          <p className="text-[15px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
            <S>Indian credit cards carry many charges beyond the annual fee — and the biggest is interest, at 2.5-4% per month (30-48% a year).</S> The most common hidden or overlooked charges are: finance charges (interest) when you don't pay in full, late payment fees (₹100-₹1,300), foreign transaction markup (1.5-3.5%), cash advance fees (2.5-3% plus day-one interest), over-limit fees (₹500-₹1,000), reward redemption fees (₹99-₹250 on some cards), and 18% GST on all of these. Many are avoidable, and any charge not listed in your card's MITC can be disputed under RBI rules.
          </p>
        </div>

        <p className="mt-6 text-[16px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
          Indian banks earn a large share of their credit card revenue from fees, and most cardholders never read the full schedule of charges. The result: people pay far more than they need to, often without realising it. This guide explains every charge, what RBI permits, which ones you can dispute, and — most importantly — how to avoid each one.
        </p>

        <div className="mt-10 space-y-6 text-[15px] leading-[1.85]" style={{ color: 'var(--text-s)' }}>

          <H2 id="interest">1. Finance charges (interest) — the big one</H2>
          <p>This is the largest and least-understood charge. <S>Indian cards charge 2.5% to 4% per month — that's roughly 30% to 48% per year</S>, higher than almost any personal loan. It's triggered when you don't pay your full statement balance by the due date, or when you pay only the minimum due.</p>
          <div className="p-4 rounded-xl" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
            <p className="text-[13px] font-bold mb-1" style={{ color: 'var(--red)' }}>The trap most people don't know</p>
            <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>Interest usually applies to your <S>full statement balance from the original transaction date</S> — not just the unpaid portion. So if your bill is ₹1,00,000 and you pay ₹95,000 (just ₹5,000 short), most issuers charge interest on the entire ₹1,00,000 for the whole cycle — often ₹3,500+ in a single month. Paying 99% of your bill can still cost you interest on 100%.</p>
          </div>
          <p><S>How to avoid it:</S> Always pay the <S>total amount due</S>, never the minimum. If you can't pay in full, pay as much as possible — and understand that you lose the interest-free grace period until you clear the balance entirely.</p>

          {/* Tool CTA — the anchor */}
          <div className="p-5 rounded-2xl" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <p className="text-[14px] font-semibold mb-1">See the true cost of carrying a balance</p>
            <p className="text-[13px] mb-4" style={{ color: 'rgba(250,248,245,0.55)' }}>Our free calculator shows exactly how much interest you'll pay — and how long a minimum-due balance takes to clear. Most people are shocked.</p>
            <a href="/tools/interest-calculator" className="inline-block px-5 py-2.5 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Open Interest Calculator →</a>
          </div>

          <H2 id="every-charge">2. Every other charge, explained</H2>
          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-[12px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead><tr>
                <th className="text-left py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Charge</th>
                <th className="text-left py-3 px-2 font-semibold" style={{ color: 'var(--red)', borderBottom: '1px solid var(--border)' }}>Typical amount</th>
                <th className="text-left py-3 px-2 font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>How to avoid</th>
              </tr></thead>
              <tbody>
                {[
                  ['Late payment fee', '₹100–₹1,300 (by slab)', 'Set auto-pay for at least the minimum'],
                  ['Forex markup', '1.5%–3.5% + GST', 'Use a zero/low-forex card abroad'],
                  ['Cash advance fee', '2.5%–3% + interest from day 1', 'Never withdraw cash on a credit card'],
                  ['Over-limit fee', '2.5%–3% (min ₹500)', 'Disable the over-limit feature via care'],
                  ['Reward redemption fee', '₹99–₹250 per redemption', 'Redeem larger batches; some cards charge none'],
                  ['Fuel surcharge', '1% (waived to a cap)', 'Stay within the monthly waiver cap'],
                  ['EMI processing fee', '₹99–₹250 + interest', 'Only convert planned big purchases'],
                  ['Payment bounce / ECS', '₹500–₹600 + GST', 'Keep the auto-debit account funded'],
                  ['Physical statement fee', '₹50–₹100', 'Switch to e-statements (free)'],
                  ['GST on all fees', '18% on every charge above', 'Cannot be waived — reduce the base fees'],
                ].map(([charge, amount, avoid], i) => (
                  <tr key={i}>
                    <td className="py-2.5 px-2 font-medium" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{charge}</td>
                    <td className="py-2.5 px-2 font-mono text-[11px]" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>{amount}</td>
                    <td className="py-2.5 px-2 text-[11px]" style={{ color: 'var(--text-m)', borderBottom: '1px solid var(--border)' }}>{avoid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <H2 id="cash-advance">3. Cash advance — the one to never touch</H2>
          <p>Withdrawing cash from an ATM using a credit card is the single most expensive thing you can do. <S>There's a 2.5-3% withdrawal fee, and interest starts from day one</S> — there's no interest-free grace period on cash advances, unlike purchases. Combined, this can cost 40%+ annualised. Treat the cash advance limit as if it doesn't exist.</p>

          <H2 id="disputable">4. Charges you can dispute</H2>
          <p>Not every charge is legitimate. Under <S>RBI Master Direction 2022, any charge not listed in your card's MITC</S> (Most Important Terms and Conditions) is not permitted. Here's what you can push back on:</p>
          <div className="space-y-2">
            {[
              { c: 'Charges not in your MITC', d: 'If a fee appears on your statement but isn\'t in the MITC — or the amount differs — you have grounds to dispute it.' },
              { c: 'Card closure fees', d: 'Closing a card on your request must be free, and the issuer must process it within 7 business days.' },
              { c: 'Lost/stolen card misuse (reported in time)', d: 'If you reported the card lost or stolen before any misuse, you\'re covered free under the RBI Customer Liability Framework 2017.' },
              { c: 'Old "service tax"', d: 'Service tax was replaced by GST in 2017. If your statement still shows it, dispute it.' },
              { c: 'Reissue fee on a recent card', d: 'A damaged card issued less than 6 months ago, where damage isn\'t your fault, should be reissued free.' },
            ].map((item, i) => (
              <div key={i} className="p-3 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <p className="text-[13px] font-semibold" style={{ color: 'var(--text)' }}>{item.c}</p>
                <p className="text-[12px] mt-0.5" style={{ color: 'var(--text-m)' }}>{item.d}</p>
              </div>
            ))}
          </div>

          <H2 id="how-to-dispute">5. How to dispute a charge (step by step)</H2>
          <div className="space-y-3">
            {[
              { t: 'Find the charge', d: 'Note the exact charge, amount, and date on your statement or app.' },
              { t: 'Check your MITC', d: 'Log into the issuer app/website → Documents → MITC. Search for the disputed charge.' },
              { t: 'Confirm it\'s not permitted', d: 'If the charge is absent from the MITC or the amount differs, you have a case.' },
              { t: 'Raise it with the issuer', d: 'File via the app\'s complaint section, or write to the Principal Nodal Officer (every issuer must publish this email per RBI rules).' },
              { t: 'Escalate to the RBI Ombudsman', d: 'If unresolved within 30 days, escalate via the RBI Complaint Management System (CMS) portal.' },
            ].map((s, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="w-7 h-7 rounded-full grid place-items-center text-[12px] font-bold shrink-0 mt-0.5" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>{i+1}</span>
                <div>
                  <p className="text-[14px] font-semibold" style={{ color: 'var(--text)' }}>{s.t}</p>
                  <p className="text-[13px] mt-0.5" style={{ color: 'var(--text-s)' }}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>

          <H2 id="annual-fee">6. The annual fee — and getting it waived</H2>
          <p>Annual fees range from free to ₹85,000+ on ultra-premium cards. Most mid-market cards <S>waive the fee if you spend a threshold</S> (typically ₹1.5-3 lakh a year). Two things to know:</p>
          <p>First, waiver thresholds have been rising — SBI doubled the BPCL card's waiver bar to ₹1 lakh in May 2026, and issuers increasingly <S>exclude rent, government, and education payments</S> from the qualifying spend. Second, you can often <S>negotiate a waiver</S> — call customer care and ask; many issuers waive on first request if you're near the threshold. To check whether your card's fee is justified by its rewards, use our <a href="/tools/breakeven" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>fee breakeven calculator</a>.</p>

          <H2 id="bottom-line">The bottom line</H2>
          <p>Credit cards are only "free" if you use them correctly. <S>The single rule that avoids almost every serious charge: pay your total amount due, in full, every month.</S> Do that, and interest, late fees, and the minimum-due trap never touch you — and your rewards become pure profit.</p>
          <p>For everything else: never withdraw cash on a credit card, use a low-forex card abroad, set up auto-pay, switch to e-statements, and check your MITC if a charge looks wrong. Being informed is the only real protection — and it can save you thousands of rupees a year.</p>
          <p>See the true cost of any balance with our <a href="/tools/interest-calculator" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>interest calculator</a>, check if your annual fee is worth it with the <a href="/tools/breakeven" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>breakeven tool</a>, and learn to extract maximum value from rewards in <a href="/blog/points-maximisation-playbook-india-2026" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>The Points Maximisation Playbook</a>.</p>

          <div className="p-6 rounded-2xl text-center mt-8" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <p className="text-[16px] font-semibold">How much is that balance really costing you?</p>
            <p className="text-[13px] mt-1 mb-4" style={{ color: 'rgba(250,248,245,0.5)' }}>Our free calculator does the math banks would rather you didn't see.</p>
            <a href="/tools/interest-calculator" className="inline-block px-6 py-2.5 rounded-xl text-[14px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Open Interest Calculator →</a>
          </div>

          <p className="text-[11px] mt-8 leading-relaxed" style={{ color: 'var(--text-m)' }}>
            <strong>Disclaimer:</strong> Charge ranges and RBI rules are based on publicly available information as of July 2026 and can change. Exact fees vary by issuer and card — always check your card's MITC and current schedule of charges. This guide is informational and not legal or financial advice. For disputes, follow your issuer's process and the RBI Ombudsman scheme. PointsMax is not affiliated with any bank.
          </p>

          <FeedbackWidget pageSlug="hidden-credit-card-charges-india-2026" pageTitle="Hidden Credit Card Charges in India 2026" />
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
            <p className="text-[13px]" style={{ color: 'rgba(250,248,245,0.6)' }}>See what a balance really <strong style={{ color: '#FAF8F5' }}>costs</strong></p>
            <a href="/tools/interest-calculator" className="shrink-0 px-4 py-2 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Interest Calculator →</a>
          </div>
        </div>
      )}
    </div>
  )
}
