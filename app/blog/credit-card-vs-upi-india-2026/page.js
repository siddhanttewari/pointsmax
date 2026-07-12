'use client'

import { useState, useEffect } from 'react'
import FeedbackWidget from '@/components/FeedbackWidget'
import PageNav from '@/components/PageNav'

const faqJsonLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Should I use a credit card or UPI in India?', acceptedAnswer: { '@type': 'Answer', text: 'Use a credit card for anything where rewards, purchase protection, EMI, or cash flow matter — online shopping, big-ticket buys, travel bookings, and international spends. Use UPI (from your bank account) for peer-to-peer transfers, rent, and small local payments where cards earn nothing or aren\'t accepted. The best of both worlds is a RuPay credit card linked to UPI, which lets you pay by QR at merchants while still earning credit card rewards and keeping the interest-free period — but only on merchant (P2M) payments, not person-to-person transfers.' }},
    { '@type': 'Question', name: 'Can I use a credit card on UPI in India?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, but only RuPay credit cards can be linked to UPI apps like Google Pay, PhonePe, Paytm, and CRED. Visa, Mastercard, and Amex credit cards cannot be used for UPI QR payments. Once linked, a RuPay credit card lets you scan and pay at merchants using your credit limit instead of your bank balance. However, UPI credit card payments work only for merchant (P2M) transactions — you cannot send money to friends or family (P2P) using a credit card on UPI.' }},
    { '@type': 'Question', name: 'Do you earn rewards on UPI credit card payments?', acceptedAnswer: { '@type': 'Answer', text: 'You can, but it depends heavily on the card and the app. Rewards apply only to eligible merchant (P2M) payments — not P2P transfers, wallet loads, rent, or certain restricted categories. Reward rates also vary by app: for example, Axis SuperMoney gives around 3% through the super.money app but drops to 1% on Google Pay. Many cards cap UPI rewards at a low monthly ceiling. Always check your card\'s UPI reward terms, caps, and eligible categories before assuming every scan earns rewards.' }},
    { '@type': 'Question', name: 'Is UPI or credit card safer for payments?', acceptedAnswer: { '@type': 'Answer', text: 'Credit cards offer stronger consumer protection for purchases: they come with chargeback and dispute rights, so if a merchant fails to deliver or a transaction is fraudulent, you can dispute it and are not immediately out of pocket since it is the bank\'s money. UPI from your bank account debits your money instantly, making disputes harder and recovery slower. For high-value or online purchases from unfamiliar merchants, a credit card is generally safer. For small trusted local payments, UPI is convenient and secure enough.' }},
  ],
}

export default function BlogPost() {
  const [showBar, setShowBar] = useState(false)
  const [scenario, setScenario] = useState('shopping')

  useEffect(() => {
    const fn = () => setShowBar(window.scrollY > 600)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const H2 = ({ children, id }) => (
    <h2 id={id} className="pt-8 scroll-mt-20" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', letterSpacing: '-0.01em' }}>{children}</h2>
  )
  const S = ({ children }) => <strong style={{ color: 'var(--text)' }}>{children}</strong>

  const SCENARIOS = {
    shopping: { label: 'Online shopping', winner: 'Credit card', why: 'Rewards + purchase protection + chargeback rights if the item never arrives. Big online sales stack card offers on top.', color: '#2563eb' },
    p2p: { label: 'Paying a friend', winner: 'UPI', why: 'Credit cards can\'t do P2P transfers on UPI. Use UPI from your bank account — instant and free.', color: '#7c3aed' },
    rent: { label: 'Rent', winner: 'UPI (usually)', why: 'Most cards exclude rent from rewards or charge a fee via rent apps. Pay by UPI unless you\'re chasing a specific milestone.', color: '#7c3aed' },
    bigticket: { label: 'Big purchase (phone/appliance)', winner: 'Credit card', why: 'No-cost EMI, warranty protection, and the biggest reward haul. Never use UPI/debit for large buys you could EMI.', color: '#2563eb' },
    local: { label: 'Local shop / QR', winner: 'Either (RuPay CC on UPI wins)', why: 'A RuPay credit card on UPI earns rewards on the same QR scan a debit UPI earns nothing on. Best of both.', color: '#2d6a4f' },
    travel: { label: 'Flights / hotels', winner: 'Credit card', why: 'Massive reward accelerators, transfer partners, travel insurance, and lounge access. UPI earns nothing here.', color: '#2563eb' },
    intl: { label: 'International', winner: 'Credit card', why: 'UPI is largely domestic. A zero/low-forex credit card is the way to pay abroad, with better fraud protection.', color: '#2563eb' },
  }
  const sc = SCENARIOS[scenario]

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Credit Card vs UPI in India 2026: Which to Use for What', datePublished: '2026-07-06', dateModified: '2026-07-06', author: { '@type': 'Organization', name: 'PointsMax', url: 'https://www.pointsmax.in' }, publisher: { '@type': 'Organization', name: 'PointsMax', url: 'https://www.pointsmax.in' } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageNav />

      <article className="max-w-2xl mx-auto px-5 py-12">
        <div className="flex items-center gap-2 mb-8 text-[13px]" style={{ color: 'var(--text-m)' }}>
          <a href="/">PointsMax</a><span>/</span>
          <a href="/blog">Learn</a><span>/</span>
          <span style={{ color: 'var(--text-s)' }}>Credit Card vs UPI</span>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded" style={{ color: 'var(--green)', background: 'rgba(45,106,79,0.08)' }}>Consumer Guide</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>July 6, 2026</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>11 min read</span>
        </div>

        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(24px, 4vw, 36px)', lineHeight: 1.15, letterSpacing: '-0.025em', color: 'var(--text)' }}>
          Credit Card vs UPI in India 2026: Which to Use for What
        </h1>

        {/* DIRECT ANSWER BLOCK */}
        <div className="mt-8 p-5 rounded-2xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
          <p className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--text-m)' }}>Quick answer</p>
          <p className="text-[15px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
            <S>It's not either/or — the smart move is using each where it wins.</S> Use a <S>credit card</S> for online shopping, big-ticket buys, travel, and international spends (rewards, purchase protection, EMI, and cash flow). Use <S>UPI</S> from your bank account for peer-to-peer transfers, rent, and small local payments where cards earn nothing. The best of both: a <S>RuPay credit card linked to UPI</S>, which earns card rewards on merchant QR payments while keeping your interest-free period — but only on merchant (P2M) payments, never person-to-person.
          </p>
        </div>

        <p className="mt-6 text-[16px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
          India is the only major market where this question is genuinely interesting. UPI handles billions of payments a month, and now RuPay credit cards can ride on UPI rails too — blurring a line that's crisp everywhere else in the world. Here's exactly when each wins, how the RuPay-on-UPI hybrid works, and the decision rule for every kind of payment.
        </p>

        <div className="mt-10 space-y-6 text-[15px] leading-[1.85]" style={{ color: 'var(--text-s)' }}>

          <H2 id="decision-tool">Which should you use? Pick a scenario</H2>
          <p>Tap a payment type to see which wins and why:</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {Object.entries(SCENARIOS).map(([key, info]) => (
              <button key={key} onClick={() => setScenario(key)}
                className="px-3 py-2 rounded-xl text-[12px] font-semibold transition-all"
                style={{ background: scenario === key ? 'var(--dark)' : 'var(--bg-s)', color: scenario === key ? '#FAF8F5' : 'var(--text-s)', border: '1px solid var(--border)' }}>
                {info.label}
              </button>
            ))}
          </div>
          <div className="p-5 rounded-2xl" style={{ background: 'var(--card)', border: `2px solid ${sc.color}` }}>
            <p className="text-[11px] font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--text-m)' }}>{sc.label}</p>
            <p className="text-[20px] font-bold mb-2" style={{ color: sc.color }}>Winner: {sc.winner}</p>
            <p className="text-[14px]" style={{ color: 'var(--text-s)' }}>{sc.why}</p>
          </div>

          <H2 id="core-difference">The core difference</H2>
          <p>Strip away the noise and it comes down to what each is built for:</p>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 rounded-2xl" style={{ background: '#EDF2FB', border: '1px solid #C5D4E8' }}>
              <p className="text-[13px] font-bold mb-2" style={{ color: '#2563eb' }}>Credit card = range</p>
              <div className="space-y-1.5 text-[12px]" style={{ color: 'var(--text-s)' }}>
                <p>✓ Rewards & cashback</p>
                <p>✓ 45-day interest-free float</p>
                <p>✓ EMI on big purchases</p>
                <p>✓ Purchase & fraud protection</p>
                <p>✓ Works internationally</p>
              </div>
            </div>
            <div className="p-4 rounded-2xl" style={{ background: '#F5F0FB', border: '1px solid #DDD0EE' }}>
              <p className="text-[13px] font-bold mb-2" style={{ color: '#7c3aed' }}>UPI = reach</p>
              <div className="space-y-1.5 text-[12px]" style={{ color: 'var(--text-s)' }}>
                <p>✓ Instant, free P2P transfers</p>
                <p>✓ Accepted by tiny merchants</p>
                <p>✓ No card number to share</p>
                <p>✓ Pay anyone with a phone number</p>
                <p>✓ Zero setup for the receiver</p>
              </div>
            </div>
          </div>
          <p className="text-[13px]" style={{ color: 'var(--text-m)' }}>As the saying goes: UPI aims for reach, credit cards aim for range. The winner depends entirely on the payment.</p>

          <H2 id="rupay-hybrid">The RuPay-on-UPI hybrid (this changes everything)</H2>
          <p>Here's the twist unique to India: <S>you can link a RuPay credit card to your UPI app and earn card rewards on QR payments.</S> A few crucial rules most people get wrong:</p>
          <div className="space-y-2">
            {[
              { t: 'Only RuPay credit cards work on UPI', d: 'Visa, Mastercard, and Amex credit cards cannot be linked to UPI. If you want to earn card rewards on QR payments, you need a RuPay variant.' },
              { t: 'Merchant payments only (P2M), never P2P', d: 'You can pay a shop\'s QR code with a credit card on UPI. You cannot send money to a friend or family member — P2P transfers with a credit card are blocked to protect the credit system.' },
              { t: 'Rewards depend on the app you use', d: 'The same card can earn different rates in different apps. Axis SuperMoney, for example, gives ~3% via the super.money app but drops to ~1% on Google Pay. Always check which app maximises your card.' },
              { t: 'Caps and exclusions apply', d: 'Most UPI rewards are capped at a low monthly ceiling and exclude rent, wallet loads, fuel, and cash-like transactions. Read the fine print before routing big spends.' },
            ].map((item, i) => (
              <div key={i} className="p-3 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <p className="text-[13px] font-semibold" style={{ color: 'var(--text)' }}>{item.t}</p>
                <p className="text-[12px] mt-0.5" style={{ color: 'var(--text-m)' }}>{item.d}</p>
              </div>
            ))}
          </div>
          <div className="p-4 rounded-xl" style={{ background: '#EDF5F0', border: '1px solid #C8DDD0' }}>
            <p className="text-[13px] font-bold mb-1" style={{ color: 'var(--green)' }}>The key insight</p>
            <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>If you pay a local shop's QR with a <S>debit</S> UPI, you earn nothing. Pay the exact same QR with a <S>RuPay credit card on UPI</S>, and you earn rewards plus get up to 45 interest-free days. On spends you were making anyway, that's free money — as long as you pay the bill in full.</p>
          </div>

          {/* Mid CTA */}
          <div className="p-5 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <div>
              <p className="text-[14px] font-semibold">Not sure which card fits your UPI spending?</p>
              <p className="text-[12px] mt-1" style={{ color: 'rgba(250,248,245,0.5)' }}>Take the 60-second quiz to find your best match.</p>
            </div>
            <a href="/tools/card-quiz" className="shrink-0 px-5 py-2.5 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Take the Quiz →</a>
          </div>

          <H2 id="protection">Protection: where credit cards quietly win</H2>
          <p>This is the most overlooked difference. <S>When you pay by credit card, you're spending the bank's money, not yours</S> — so if a purchase goes wrong, you have leverage:</p>
          <p>Credit cards come with <S>chargeback and dispute rights</S>. If a merchant doesn't deliver, double-charges you, or a transaction is fraudulent, you can dispute it and the bank claws the money back. With UPI, the money leaves your account instantly — disputes are harder and recovery is slower. For any high-value or unfamiliar online purchase, the credit card's protection alone justifies using it.</p>

          <H2 id="cashflow">Cash flow: the 45-day float</H2>
          <p>A credit card gives you up to <S>45 interest-free days</S> between a purchase and its due date. UPI from your bank account debits instantly. For disciplined users who pay in full, that float is free working capital — your money stays in your account (earning interest, or just available) while the bank fronts the purchase. Just remember: the float is only free if you <S>pay the total amount due</S>, never the minimum. Carrying a balance triggers 30-48% annual interest that wipes out any reward.</p>

          <H2 id="credit-line-upi">What about "Credit Line on UPI"?</H2>
          <p>There's a third option you'll see: <S>Credit Line on UPI</S> (RBI's CLUPI framework), where banks offer a pre-approved credit line inside your UPI app — no card at all. It's useful for quick, small-ticket credit and reaches people who may not qualify for a credit card. But it generally lacks the rewards, EMI flexibility, purchase protection, and international acceptance of a proper credit card. Think of it as convenient short-term credit, not a rewards or strategy tool.</p>

          <H2 id="decision-rule">The simple decision rule</H2>
          <div className="p-4 rounded-xl" style={{ background: '#FBF8F0', border: '1px solid #E8DFC5' }}>
            <p className="text-[13px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
              <S>Default to a credit card for anything that earns rewards, needs protection, or is big enough to EMI</S> — shopping, travel, big-ticket, international, and (via RuPay-on-UPI) even local QR payments. <S>Use UPI from your bank for P2P transfers, rent, and situations where cards earn nothing or aren't accepted.</S> If you have a RuPay credit card on UPI, you can collapse most of this into one habit: scan with the card, earn rewards, pay the bill in full.
            </p>
          </div>

          <H2 id="bottom-line">The bottom line</H2>
          <p>UPI and credit cards aren't rivals — they're tools for different jobs, and India is unique in letting them overlap. <S>The disciplined player uses a credit card wherever it earns rewards or offers protection, UPI where it doesn't, and a RuPay-on-UPI card to earn on everyday QR payments that would otherwise give nothing.</S></p>
          <p>The one rule that ties it all together: rewards only count if you pay your bill in full. Carry a balance and interest erases everything. See exactly what a carried balance costs with our <a href="/tools/interest-calculator" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>interest calculator</a>, find your best-fit card with the <a href="/tools/card-quiz" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>card quiz</a>, and learn the full earning strategy in <a href="/blog/points-maximisation-playbook-india-2026" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>The Points Maximisation Playbook</a>.</p>

          <div className="p-6 rounded-2xl text-center mt-8" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <p className="text-[16px] font-semibold">Earn rewards on payments you're already making</p>
            <p className="text-[13px] mt-1 mb-4" style={{ color: 'rgba(250,248,245,0.5)' }}>Find the RuPay card that turns your UPI spends into rewards.</p>
            <a href="/tools/card-quiz" className="inline-block px-6 py-2.5 rounded-xl text-[14px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Take the Card Quiz →</a>
          </div>

          <p className="text-[11px] mt-8 leading-relaxed" style={{ color: 'var(--text-m)' }}>
            <strong>Disclaimer:</strong> Reward rates, caps, eligible categories, and UPI rules change frequently and vary by card and app, based on publicly available information as of July 2026. Always verify current terms with your card issuer and UPI app before routing spends. PointsMax is not affiliated with any bank or payment app. Not financial advice.
          </p>

          <FeedbackWidget pageSlug="credit-card-vs-upi-india-2026" pageTitle="Credit Card vs UPI in India 2026" />
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
            <p className="text-[13px]" style={{ color: 'rgba(250,248,245,0.6)' }}>Find your best <strong style={{ color: '#FAF8F5' }}>UPI rewards card</strong></p>
            <a href="/tools/card-quiz" className="shrink-0 px-4 py-2 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Take the Quiz →</a>
          </div>
        </div>
      )}
    </div>
  )
}
