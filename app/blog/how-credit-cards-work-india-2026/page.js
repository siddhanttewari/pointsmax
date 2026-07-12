'use client'

import { useState, useEffect } from 'react'
import FeedbackWidget from '@/components/FeedbackWidget'
import PageNav from '@/components/PageNav'

const howToJsonLd = {
  '@context': 'https://schema.org', '@type': 'HowTo',
  name: 'How to Use a Credit Card Without Paying Interest in India',
  description: 'The steps to use a credit card so you earn rewards and never pay interest.',
  totalTime: 'PT5M',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Spend within the billing cycle', text: 'Make purchases during your roughly 30-day billing cycle. The bank pays the merchant; you owe the bank.' },
    { '@type': 'HowToStep', position: 2, name: 'Wait for the statement', text: 'At the end of the cycle, the bank generates a statement listing your total amount due and the due date, typically about 15-20 days later.' },
    { '@type': 'HowToStep', position: 3, name: 'Pay the total amount due in full', text: 'Pay the entire statement balance by the due date — not the minimum due. This keeps the grace period and means zero interest.' },
    { '@type': 'HowToStep', position: 4, name: 'Never pay only the minimum', text: 'Paying only the minimum due triggers interest of 30-48% a year on your full balance and starts a debt spiral. Always pay in full if you can.' },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How does a credit card work in simple terms?', acceptedAnswer: { '@type': 'Answer', text: 'A credit card lets you borrow money from a bank up to a set limit to make purchases. When you pay a merchant, the card network (Visa, Mastercard, RuPay) routes the transaction and the bank pays the merchant on your behalf. You then owe the bank. At the end of your monthly billing cycle, the bank sends a statement with your total due and a due date. If you pay the full amount by the due date, you pay no interest — the borrowing was free. If you do not, interest of roughly 30-48% a year applies. Used well, a credit card is short-term interest-free credit that also earns rewards.' }},
    { '@type': 'Question', name: 'What is a credit card billing cycle and grace period?', acceptedAnswer: { '@type': 'Answer', text: 'A billing cycle is the roughly 30-day period during which your purchases are recorded. At its end, the bank generates a statement. The grace period is the gap between the statement date and the payment due date — typically 15 to 20 days — during which you can pay your balance without any interest. Together, a purchase made early in the cycle can enjoy up to about 45 interest-free days. The grace period only applies if you paid your previous bill in full; carrying a balance removes it.' }},
    { '@type': 'Question', name: 'What happens if I only pay the minimum due on my credit card?', acceptedAnswer: { '@type': 'Answer', text: 'Paying only the minimum due (usually about 5% of the balance) keeps your account current but is very expensive. Interest of 30-48% a year begins applying to your full balance from the transaction date, and most of your minimum payment goes toward interest rather than principal. A balance paid only at the minimum can take years to clear and cost more in interest than the original purchase. Always pay the total amount due if you can.' }},
    { '@type': 'Question', name: 'Do you pay interest if you pay your credit card in full?', acceptedAnswer: { '@type': 'Answer', text: 'No. If you pay your total statement balance in full by the due date every month, you pay zero interest on purchases — the bank effectively gives you an interest-free loan for up to 45 days, and any rewards you earn are pure profit. Interest only starts when you fail to pay the full amount, pay only the minimum, or take a cash advance (which has no grace period and accrues interest from day one).' }},
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'How a Credit Card Actually Works in India 2026', datePublished: '2026-07-06', dateModified: '2026-07-06', author: { '@type': 'Organization', name: 'PointsMax', url: 'https://www.pointsmax.in' }, publisher: { '@type': 'Organization', name: 'PointsMax', url: 'https://www.pointsmax.in' } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageNav />

      <article className="max-w-2xl mx-auto px-5 py-12">
        <div className="flex items-center gap-2 mb-8 text-[13px]" style={{ color: 'var(--text-m)' }}>
          <a href="/">PointsMax</a><span>/</span>
          <a href="/blog">Learn</a><span>/</span>
          <span style={{ color: 'var(--text-s)' }}>How Credit Cards Work</span>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded" style={{ color: 'var(--green)', background: 'rgba(45,106,79,0.08)' }}>Beginner Guide</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>July 6, 2026</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>10 min read</span>
        </div>

        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(24px, 4vw, 36px)', lineHeight: 1.15, letterSpacing: '-0.025em', color: 'var(--text)' }}>
          How a Credit Card Actually Works in India 2026 (Explained with Diagrams)
        </h1>

        {/* DIRECT ANSWER BLOCK */}
        <div className="mt-8 p-5 rounded-2xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
          <p className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--text-m)' }}>Quick answer</p>
          <p className="text-[15px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
            <S>A credit card lets you borrow from a bank to pay a merchant, then repay the bank later.</S> When you swipe or scan, the card network (Visa/Mastercard/RuPay) routes the payment and the bank pays the merchant — so you owe the bank, not the shop. At the end of your ~30-day billing cycle, the bank sends a statement with your total due and a due date ~15-20 days later. <S>Pay in full by the due date and you pay zero interest</S> (a free ~45-day loan, plus rewards). Pay only the minimum, and interest of 30-48% a year kicks in. That single choice — pay in full vs. minimum — is the difference between a credit card being free and being a debt trap.
          </p>
        </div>

        <div className="mt-10 space-y-6 text-[15px] leading-[1.85]" style={{ color: 'var(--text-s)' }}>

          <H2 id="money-flow">Who's who: the money flow when you pay</H2>
          <p>When you pay with a credit card, four parties are involved — and understanding them explains everything else. Here's what happens in the ~2 seconds after you tap:</p>

          {/* DIAGRAM 1: Payment flow */}
          <figure className="my-6">
            <div className="p-5 rounded-2xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
              <svg viewBox="0 0 360 300" className="w-full" style={{ maxWidth: '360px', margin: '0 auto', display: 'block' }} role="img" aria-label="Diagram showing money flow between cardholder, merchant, card network, and bank">
                {/* Boxes */}
                {/* You */}
                <g>
                  <rect x="20" y="20" width="130" height="52" rx="12" fill="#B8953E"/>
                  <text x="85" y="42" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1A1614">You</text>
                  <text x="85" y="58" textAnchor="middle" fontSize="9" fill="#1A1614" opacity="0.7">(Cardholder)</text>
                </g>
                {/* Merchant */}
                <g>
                  <rect x="210" y="20" width="130" height="52" rx="12" fill="#2d6a4f"/>
                  <text x="275" y="42" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff">Merchant</text>
                  <text x="275" y="58" textAnchor="middle" fontSize="9" fill="#fff" opacity="0.8">(The shop)</text>
                </g>
                {/* Network */}
                <g>
                  <rect x="115" y="130" width="130" height="52" rx="12" fill="#2563eb"/>
                  <text x="180" y="152" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff">Card Network</text>
                  <text x="180" y="168" textAnchor="middle" fontSize="9" fill="#fff" opacity="0.8">Visa / MC / RuPay</text>
                </g>
                {/* Bank */}
                <g>
                  <rect x="115" y="240" width="130" height="52" rx="12" fill="#1A1614"/>
                  <text x="180" y="262" textAnchor="middle" fontSize="13" fontWeight="700" fill="#FAF8F5">Your Bank</text>
                  <text x="180" y="278" textAnchor="middle" fontSize="9" fill="#FAF8F5" opacity="0.7">(Card issuer)</text>
                </g>
                {/* Arrows */}
                {/* You -> Merchant (tap) */}
                <line x1="150" y1="38" x2="205" y2="38" stroke="var(--text-m)" strokeWidth="2" markerEnd="url(#arrowg)"/>
                <text x="177" y="30" textAnchor="middle" fontSize="8" fill="var(--text-m)">tap/scan</text>
                {/* Merchant -> Network */}
                <line x1="270" y1="72" x2="215" y2="128" stroke="var(--text-m)" strokeWidth="2" markerEnd="url(#arrowg)"/>
                {/* Network -> Bank (authorise) */}
                <line x1="180" y1="182" x2="180" y2="236" stroke="var(--text-m)" strokeWidth="2" markerEnd="url(#arrowg)"/>
                <text x="215" y="215" textAnchor="middle" fontSize="8" fill="var(--text-m)">approve?</text>
                {/* Bank -> Merchant (pays) */}
                <path d="M 245 258 Q 320 230 300 74" fill="none" stroke="#2d6a4f" strokeWidth="2.5" markerEnd="url(#arrowgr)" strokeDasharray="0"/>
                <text x="325" y="160" textAnchor="middle" fontSize="8" fontWeight="700" fill="#2d6a4f" transform="rotate(90 325 160)">bank pays merchant</text>
                {/* Bank -> You (you owe) */}
                <path d="M 115 258 Q 30 200 85 74" fill="none" stroke="#c53030" strokeWidth="2.5" markerEnd="url(#arrowr)"/>
                <text x="38" y="165" textAnchor="middle" fontSize="8" fontWeight="700" fill="#c53030" transform="rotate(-90 38 165)">you owe bank later</text>
                {/* markers */}
                <defs>
                  <marker id="arrowg" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="var(--text-m)"/></marker>
                  <marker id="arrowgr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#2d6a4f"/></marker>
                  <marker id="arrowr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#c53030"/></marker>
                </defs>
              </svg>
            </div>
            <figcaption className="text-[12px] mt-2 text-center" style={{ color: 'var(--text-m)' }}>You pay the merchant → the network routes it → your bank approves and <strong style={{ color: '#2d6a4f' }}>pays the merchant</strong> → <strong style={{ color: '#c53030' }}>you owe the bank</strong> later. The shop gets paid immediately; your debt is with the bank.</figcaption>
          </figure>

          <p>The crucial takeaway: <S>the merchant is paid right away by your bank. You don't owe the shop — you owe your bank.</S> That debt is what you settle when your statement arrives. This is why a credit card is fundamentally a short-term loan, not "your money."</p>

          <H2 id="billing-cycle">The billing cycle & grace period (the most important thing to understand)</H2>
          <p>This is where most people get confused — and where the free money lives. Your credit card runs on a repeating monthly cycle:</p>

          {/* DIAGRAM 2: Billing cycle timeline */}
          <figure className="my-6">
            <div className="p-5 rounded-2xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
              <svg viewBox="0 0 360 200" className="w-full" style={{ maxWidth: '360px', margin: '0 auto', display: 'block' }} role="img" aria-label="Timeline of a credit card billing cycle showing the billing period, statement date, grace period, and due date">
                {/* Main timeline */}
                <line x1="20" y1="90" x2="340" y2="90" stroke="var(--border)" strokeWidth="2"/>
                {/* Billing period bar */}
                <rect x="20" y="80" width="200" height="20" rx="4" fill="#2563eb" opacity="0.85"/>
                <text x="120" y="94" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff">Billing period (~30 days)</text>
                {/* Grace period bar */}
                <rect x="220" y="80" width="100" height="20" rx="4" fill="#2d6a4f" opacity="0.85"/>
                <text x="270" y="94" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff">Grace ~15-20d</text>
                {/* Markers */}
                {/* Cycle start */}
                <circle cx="20" cy="90" r="5" fill="#1A1614"/>
                <text x="20" y="70" textAnchor="middle" fontSize="9" fill="var(--text-s)">Cycle</text>
                <text x="20" y="60" textAnchor="middle" fontSize="9" fill="var(--text-s)">starts</text>
                {/* Statement date */}
                <circle cx="220" cy="90" r="5" fill="#B8953E"/>
                <line x1="220" y1="90" x2="220" y2="120" stroke="var(--text-m)" strokeWidth="1" strokeDasharray="2 2"/>
                <text x="220" y="138" textAnchor="middle" fontSize="9" fontWeight="700" fill="var(--text)">Statement</text>
                <text x="220" y="150" textAnchor="middle" fontSize="9" fill="var(--text-m)">generated</text>
                {/* Due date */}
                <circle cx="320" cy="90" r="5" fill="#c53030"/>
                <line x1="320" y1="90" x2="320" y2="120" stroke="var(--text-m)" strokeWidth="1" strokeDasharray="2 2"/>
                <text x="320" y="138" textAnchor="middle" fontSize="9" fontWeight="700" fill="#c53030">Due date</text>
                <text x="320" y="150" textAnchor="middle" fontSize="9" fill="var(--text-m)">pay by now</text>
                {/* Free period bracket */}
                <path d="M 20 40 L 20 32 L 320 32 L 320 40" fill="none" stroke="#2d6a4f" strokeWidth="1.5"/>
                <text x="170" y="24" textAnchor="middle" fontSize="10" fontWeight="700" fill="#2d6a4f">Up to ~45 interest-free days</text>
                {/* purchase example */}
                <circle cx="45" cy="90" r="3.5" fill="#c53030"/>
                <text x="45" y="178" textAnchor="middle" fontSize="8" fill="var(--text-m)">buy early =</text>
                <text x="45" y="188" textAnchor="middle" fontSize="8" fill="var(--text-m)">max free days</text>
              </svg>
            </div>
            <figcaption className="text-[12px] mt-2 text-center" style={{ color: 'var(--text-m)' }}>A purchase made early in the billing period enjoys the full billing cycle <em>plus</em> the grace period — up to ~45 interest-free days before payment is due.</figcaption>
          </figure>

          <div className="space-y-2">
            {[
              { t: 'Billing period (~30 days)', d: 'Every purchase you make is recorded during this window. Nothing is due yet.' },
              { t: 'Statement date', d: 'The bank "closes" the cycle and generates your statement — a summary of everything you spent, your total amount due, the minimum due, and the due date.' },
              { t: 'Grace period (~15-20 days)', d: 'The gap between the statement and the due date. You can pay any time in here with zero interest.' },
              { t: 'Due date', d: 'Pay your total amount due by this date. Do that, and the entire borrowing was free.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start p-3 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <span className="w-6 h-6 rounded-full grid place-items-center text-[11px] font-bold shrink-0 mt-0.5" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>{i+1}</span>
                <div>
                  <p className="text-[13px] font-semibold" style={{ color: 'var(--text)' }}>{item.t}</p>
                  <p className="text-[12px] mt-0.5" style={{ color: 'var(--text-m)' }}>{item.d}</p>
                </div>
              </div>
            ))}
          </div>
          <p><S>The grace period is the free money.</S> Buy something early in your cycle, and you get the rest of the cycle plus the grace period — up to ~45 days — before you owe a rupee, interest-free. But there's a catch, and it's the most important rule of all.</p>

          <H2 id="the-fork">The fork in the road: pay in full or pay the minimum</H2>
          <p>When your statement arrives, you see two numbers: the <S>total amount due</S> and the <S>minimum amount due</S> (usually ~5%). What you do next decides whether your credit card is free or expensive.</p>
          <div className="grid grid-cols-1 gap-3">
            <div className="p-4 rounded-xl" style={{ background: '#EDF5F0', border: '1px solid #C8DDD0' }}>
              <p className="text-[13px] font-bold mb-1" style={{ color: 'var(--green)' }}>✓ Pay the TOTAL amount due</p>
              <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>Zero interest. The grace period stays intact. Your rewards are pure profit. This is the only correct way to use a credit card — and if you always do this, you never pay a rupee of interest in your life.</p>
            </div>
            <div className="p-4 rounded-xl" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
              <p className="text-[13px] font-bold mb-1" style={{ color: 'var(--red)' }}>✕ Pay only the MINIMUM due</p>
              <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>Interest of 30-48% a year kicks in on your <strong style={{ color: 'var(--text)' }}>full balance from the transaction date</strong>, you lose the grace period on new purchases, and most of your payment goes to interest — not principal. This is how a small balance becomes years of debt.</p>
            </div>
          </div>

          {/* Tool CTA */}
          <div className="p-5 rounded-2xl" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <p className="text-[14px] font-semibold mb-1">See what "minimum due" really costs</p>
            <p className="text-[13px] mb-4" style={{ color: 'rgba(250,248,245,0.55)' }}>Our calculator shows how a ₹50,000 balance paid at the minimum takes 15+ years and costs ₹99,000 in interest.</p>
            <a href="/tools/interest-calculator" className="inline-block px-5 py-2.5 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Open Interest Calculator →</a>
          </div>

          <H2 id="key-terms">Key terms on your statement, decoded</H2>
          <div className="space-y-2">
            {[
              { t: 'Credit limit', d: 'The maximum you can borrow. Try to keep usage under 30% of it — high utilisation hurts your CIBIL score.' },
              { t: 'Total amount due', d: 'Everything you owe this cycle. Pay this in full to avoid all interest.' },
              { t: 'Minimum amount due', d: 'The smallest payment to keep your account current (~5%). Paying only this is a trap — see above.' },
              { t: 'Statement / billing date', d: 'The day your cycle closes and the bill is generated.' },
              { t: 'Payment due date', d: 'The deadline to pay. Miss it and you get a late fee plus interest.' },
              { t: 'Finance charge', d: 'The interest you\'re charged if you don\'t pay in full — 2.5-4% per month (30-48% a year).' },
              { t: 'Available credit', d: 'Your credit limit minus what you\'ve already spent this cycle.' },
            ].map((item, i) => (
              <div key={i} className="p-3 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <p className="text-[13px] font-semibold" style={{ color: 'var(--text)' }}>{item.t}</p>
                <p className="text-[12px] mt-0.5" style={{ color: 'var(--text-m)' }}>{item.d}</p>
              </div>
            ))}
          </div>

          <H2 id="rewards">Where rewards come from</H2>
          <p>Banks earn a small fee from the merchant on every transaction (the "interchange" fee, which is why the merchant is involved in that money-flow diagram). They share a slice of that back with you as <S>reward points or cashback</S> to encourage spending. That's why rewards exist — and why, if you pay in full, they're genuinely free value. To understand how much your points are actually worth and how to maximise them, see our <a href="/blog/points-maximisation-playbook-india-2026" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>Points Maximisation Playbook</a>.</p>

          <H2 id="golden-rules">The golden rules for beginners</H2>
          <div className="p-4 rounded-xl" style={{ background: '#FBF8F0', border: '1px solid #E8DFC5' }}>
            <ul className="space-y-2 text-[13px]" style={{ color: 'var(--text-s)', listStyleType: 'none', padding: 0 }}>
              {[
                'Always pay the TOTAL amount due, never just the minimum',
                'Set up auto-pay for the full amount so you never miss a due date',
                'Keep spending under 30% of your credit limit (helps your CIBIL score)',
                'Never withdraw cash on a credit card — interest starts day one, no grace period',
                'Treat the credit limit as a tool, not extra income',
                'Only spend what you could pay from your bank account today',
              ].map((rule, i) => (
                <li key={i} className="flex gap-2"><span style={{ color: 'var(--gold, #B8953E)' }}>✓</span><span>{rule}</span></li>
              ))}
            </ul>
          </div>

          <H2 id="bottom-line">The bottom line</H2>
          <p>A credit card is beautifully simple once you see it clearly: <S>the bank pays the merchant, you repay the bank, and if you repay in full and on time, the whole thing is free — plus you earn rewards.</S> The billing cycle and grace period give you up to 45 interest-free days; the only way to lose is to pay less than the full amount and let 30-48% interest take over.</p>
          <p>Master that one habit — pay in full, every time — and a credit card becomes one of the best financial tools you have. Next, see what a balance costs with our <a href="/tools/interest-calculator" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>interest calculator</a>, learn which charges to watch for in our <a href="/blog/hidden-credit-card-charges-india-2026" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>hidden charges guide</a>, and find your first card with the <a href="/tools/card-quiz" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>card quiz</a>.</p>

          <div className="p-6 rounded-2xl text-center mt-8" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <p className="text-[16px] font-semibold">Now you know how it works — use it well</p>
            <p className="text-[13px] mt-1 mb-4" style={{ color: 'rgba(250,248,245,0.5)' }}>Find a card that fits how you actually spend.</p>
            <a href="/tools/card-quiz" className="inline-block px-6 py-2.5 rounded-xl text-[14px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Take the Card Quiz →</a>
          </div>

          <p className="text-[11px] mt-8 leading-relaxed" style={{ color: 'var(--text-m)' }}>
            <strong>Disclaimer:</strong> This is an educational explainer based on how credit cards typically work in India as of July 2026. Exact billing cycles, grace periods, interest rates, and terms vary by issuer and card — always check your card's MITC and statement. Not financial advice. PointsMax is not affiliated with any bank.
          </p>

          <FeedbackWidget pageSlug="how-credit-cards-work-india-2026" pageTitle="How a Credit Card Actually Works in India 2026" />
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
