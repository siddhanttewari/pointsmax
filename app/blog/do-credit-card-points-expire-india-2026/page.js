'use client'

import { useState, useEffect } from 'react'
import FeedbackWidget from '@/components/FeedbackWidget'
import PageNav from '@/components/PageNav'

const faqJsonLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Do credit card reward points expire in India?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, most Indian credit card reward points expire, typically 2 to 3 years from when they are earned. HDFC super-premium cards (Infinia, Diners Club Black) expire points after 3 years, while other HDFC cards expire after 2 years. SBI Card points generally expire after 2 years, and Axis Bank EDGE points after 3 years. Some cards never expire points: American Express Membership Rewards (as long as the account is active) and all IDFC First Bank cards. Airline and hotel points usually expire only after 18-24 months of account inactivity, and this clock resets with any activity.' }},
    { '@type': 'Question', name: 'When do HDFC reward points expire?', acceptedAnswer: { '@type': 'Answer', text: 'HDFC reward points expire based on the card tier. Super-premium cards — Infinia, Infinia Metal, Diners Club Black, and HOG Diners Club — have points valid for 3 years from the date of accrual. All other HDFC credit cards expire points after 2 years. You can check your exact expiry in HDFC NetBanking under Cards, then Reward Points, which shows points expiring in the next 30 and 60 days.' }},
    { '@type': 'Question', name: 'Which credit card points never expire in India?', acceptedAnswer: { '@type': 'Answer', text: 'In India, American Express Membership Rewards points never expire as long as your account is active and in good standing, and all IDFC First Bank credit card reward points never expire. HSBC Premier points also do not expire. These are exceptions — most other issuers (HDFC, SBI, Axis, ICICI) expire points in 2 to 3 years. Note that even non-expiring points lose value over time through devaluation, so redeeming regularly is still smart.' }},
    { '@type': 'Question', name: 'What happens to my reward points if I close my credit card?', acceptedAnswer: { '@type': 'Answer', text: 'You lose them. Every Indian bank forfeits all unredeemed reward points when you close a credit card. If you are planning to close a card, redeem every last point first — even for a small voucher or statement credit — because they vanish the moment the card is closed. This is one of the most common ways cardholders lose value.' }},
    { '@type': 'Question', name: 'How can I stop my credit card points from expiring?', acceptedAnswer: { '@type': 'Answer', text: 'The simplest way is to redeem regularly rather than hoarding — aim to use points every few months. Check your expiry date each quarter in your bank app or statement. For airline and hotel points with activity-based expiry, earning or redeeming even a single point resets the expiry clock for your entire balance. Set a calendar reminder or use a points expiry reminder tool so you never lose points to the deadline. Do not rely on the bank to warn you.' }},
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

  const banks = [
    { bank: 'HDFC (super-premium)', cards: 'Infinia, Diners Black, HOG', expiry: '3 years', type: 'From accrual', color: 'var(--gold, #B8953E)' },
    { bank: 'HDFC (other cards)', cards: 'Millennia, Regalia, etc.', expiry: '2 years', type: 'From accrual', color: 'var(--gold, #B8953E)' },
    { bank: 'SBI Card', cards: 'Most cards', expiry: '2 years', type: 'From accrual', color: 'var(--red)' },
    { bank: 'Axis Bank', cards: 'EDGE points', expiry: '3 years', type: 'From allotment', color: 'var(--green)' },
    { bank: 'ICICI Bank', cards: 'Varies by card', expiry: '2-3 years', type: 'From accrual', color: 'var(--gold, #B8953E)' },
    { bank: 'American Express', cards: 'Membership Rewards', expiry: 'Never', type: 'While account active', color: 'var(--green)' },
    { bank: 'IDFC First', cards: 'All cards', expiry: 'Never', type: '—', color: 'var(--green)' },
    { bank: 'HSBC', cards: 'Premier: never; others 2-3y', expiry: 'Varies', type: 'By card tier', color: 'var(--gold, #B8953E)' },
    { bank: 'Airlines / hotels', cards: 'KrisFlyer, Avios, Bonvoy etc.', expiry: '18-24 months', type: 'Inactivity (resets)', color: 'var(--green)' },
  ]

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Do Credit Card Reward Points Expire? Complete India Guide by Bank (2026)', datePublished: '2026-07-08', dateModified: '2026-07-08', author: { '@type': 'Organization', name: 'PointsMax', url: 'https://www.pointsmax.in' }, publisher: { '@type': 'Organization', name: 'PointsMax', url: 'https://www.pointsmax.in' } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageNav />

      <article className="max-w-2xl mx-auto px-5 py-12">
        <div className="flex items-center gap-2 mb-8 text-[13px]" style={{ color: 'var(--text-m)' }}>
          <a href="/">PointsMax</a><span>/</span>
          <a href="/blog">Learn</a><span>/</span>
          <span style={{ color: 'var(--text-s)' }}>Do Points Expire?</span>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded" style={{ color: 'var(--green)', background: 'rgba(45,106,79,0.08)' }}>Consumer Guide</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>July 8, 2026</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>10 min read</span>
        </div>

        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(24px, 4vw, 36px)', lineHeight: 1.15, letterSpacing: '-0.025em', color: 'var(--text)' }}>
          Do Credit Card Reward Points Expire? Complete India Guide by Bank (2026)
        </h1>

        {/* DIRECT ANSWER BLOCK */}
        <div className="mt-8 p-5 rounded-2xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
          <p className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--text-m)' }}>Quick answer</p>
          <p className="text-[15px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
            <S>Yes — most Indian credit card reward points expire, usually 2 to 3 years from when you earn them.</S> HDFC super-premium cards (Infinia, Diners Black) expire points after 3 years; other HDFC cards after 2. SBI points expire after ~2 years, Axis EDGE points after 3. Two big exceptions never expire: <S>American Express Membership Rewards</S> (while your account is active) and <S>all IDFC First Bank cards</S>. Airline and hotel points expire only after 18-24 months of inactivity — and any activity resets that clock. Banks profit when points expire, so they won't remind you. The full by-bank table is below.
          </p>
        </div>

        <p className="mt-6 text-[16px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
          Every year, Indian cardholders lose reward points worth crores — simply because nobody told them the clock was ticking. Banks aren't sending countdown reminders, because expired points are pure profit for them. Here's exactly when each bank's points expire, where to check, and how to make sure you never lose another point.
        </p>

        <div className="mt-10 space-y-6 text-[15px] leading-[1.85]" style={{ color: 'var(--text-s)' }}>

          <H2 id="by-bank-table">Expiry rules by bank (2026)</H2>
          <p>This is the table to bookmark. Rules change, so always confirm in your app — but here's where each major issuer stands as of 2026:</p>
          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-[12px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead><tr>
                <th className="text-left py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Issuer</th>
                <th className="text-left py-3 px-2 font-semibold" style={{ color: 'var(--text-m)', borderBottom: '1px solid var(--border)' }}>Applies to</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Expiry</th>
                <th className="text-left py-3 px-2 font-semibold" style={{ color: 'var(--text-m)', borderBottom: '1px solid var(--border)' }}>Basis</th>
              </tr></thead>
              <tbody>
                {banks.map((b, i) => (
                  <tr key={i}>
                    <td className="py-2.5 px-2 font-medium" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{b.bank}</td>
                    <td className="py-2.5 px-2 text-[11px]" style={{ color: 'var(--text-m)', borderBottom: '1px solid var(--border)' }}>{b.cards}</td>
                    <td className="py-2.5 px-2 text-center font-mono font-bold" style={{ color: b.color, borderBottom: '1px solid var(--border)' }}>{b.expiry}</td>
                    <td className="py-2.5 px-2 text-[11px]" style={{ color: 'var(--text-m)', borderBottom: '1px solid var(--border)' }}>{b.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-[11px] mt-2" style={{ color: 'var(--text-m)' }}>As of July 2026. Rules vary by specific card and change without notice — always verify in your bank app or statement.</p>
          </div>

          {/* Tool CTA — the anchor */}
          <div className="p-5 rounded-2xl" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <p className="text-[14px] font-semibold mb-1">Never lose points to expiry again</p>
            <p className="text-[13px] mb-4" style={{ color: 'rgba(250,248,245,0.55)' }}>Enter your card and when you earned the points — we'll calculate the exact expiry date and remind you before the deadline.</p>
            <a href="/tools/expiry-reminder" className="inline-block px-5 py-2.5 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Set an Expiry Reminder →</a>
          </div>

          <H2 id="breakage">Why banks want your points to expire</H2>
          <p>Here's the part they don't advertise. When a bank gives you 10,000 points worth ₹2,500, it has to record a <S>₹2,500 liability</S> on its balance sheet. That liability only disappears when you redeem — or when the points expire. <S>Expired points are pure profit.</S></p>
          <p>The industry even has a word for it: <S>"breakage"</S> — the percentage of points issued but never redeemed. Globally, billions of dollars in loyalty points expire unredeemed every year. Banks quietly rely on breakage in their economics, which is exactly why they don't send you urgent expiry reminders. The system is designed for you to forget.</p>

          <H2 id="two-types">The two types of expiry</H2>
          <div className="grid grid-cols-1 gap-3">
            <div className="p-4 rounded-xl" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
              <p className="text-[13px] font-bold mb-1" style={{ color: 'var(--red)' }}>Hard expiry (most bank cards)</p>
              <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>Points expire a fixed 2 or 3 years from the date earned — no exceptions. Points earned in March 2024 vanish in March 2026 or 2027. Each month's points have their own clock, so your oldest points expire first.</p>
            </div>
            <div className="p-4 rounded-xl" style={{ background: '#EDF5F0', border: '1px solid #C8DDD0' }}>
              <p className="text-[13px] font-bold mb-1" style={{ color: 'var(--green)' }}>Activity-based expiry (airlines / hotels)</p>
              <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>Points expire only after 18-24 months of <em>no activity</em>. The hack: earning or redeeming even a single point <strong style={{ color: 'var(--text)' }}>resets the expiry clock for your entire balance</strong>. A tiny transaction every year keeps everything alive indefinitely.</p>
            </div>
          </div>

          <H2 id="how-to-check">Where to check your expiry in each app</H2>
          <div className="space-y-2">
            {[
              { bank: 'HDFC', path: 'NetBanking → Cards → Reward Points (shows points expiring in 30/60 days)' },
              { bank: 'SBI Card', path: 'SBI Card app → Rewards → Points Summary (shows expiry month)' },
              { bank: 'ICICI', path: 'iMobile app → Cards → Reward Points → "Expiring Soon" tab' },
              { bank: 'Axis', path: 'Axis Mobile app → Cards → Reward Points → Validity' },
              { bank: 'Amex', path: 'No expiry to check — MR points don\'t lapse while the account is active' },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start p-3 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <span className="text-[12px] font-bold shrink-0 w-16" style={{ color: 'var(--gold, #B8953E)' }}>{item.bank}</span>
                <p className="text-[12px]" style={{ color: 'var(--text-s)' }}>{item.path}</p>
              </div>
            ))}
          </div>

          <H2 id="how-to-avoid">How to never lose points again</H2>
          <div className="p-4 rounded-xl" style={{ background: '#FBF8F0', border: '1px solid #E8DFC5' }}>
            <ul className="space-y-2 text-[13px]" style={{ color: 'var(--text-s)', listStyleType: 'none', padding: 0 }}>
              {[
                'Redeem regularly — don\'t hoard for a "dream" redemption years away',
                'Check your expiry every quarter (15 minutes can save thousands of rupees)',
                'Redeem your OLDEST points first — they expire first',
                'Before closing any card, redeem every last point — they vanish on closure',
                'For airline/hotel points, make one small transaction a year to reset the clock',
                'Set a reminder so you never rely on the bank to warn you',
              ].map((tip, i) => (
                <li key={i} className="flex gap-2"><span style={{ color: 'var(--gold, #B8953E)' }}>✓</span><span>{tip}</span></li>
              ))}
            </ul>
          </div>

          <H2 id="burn-dont-hoard">Why "burn, don't hoard" beats saving up</H2>
          <p>Even for points that never technically expire, there's a second clock: <S>devaluation.</S> Reward programs quietly raise the points needed for the same reward over time — a flight that costs 20,000 points today might cost 40,000 in three years. So hoarding points for a far-off "dream holiday" means watching their real value erode even if they never lapse.</p>
          <p>The disciplined move is to <S>redeem frequently at good value</S> rather than stockpiling. Check what your points are actually worth today with our <a href="/" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>points value calculator</a>, and learn the highest-value ways to redeem in <a href="/blog/how-to-redeem-credit-card-points-india-2026" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>our redemption guide</a>.</p>

          <H2 id="bottom-line">The bottom line</H2>
          <p>Yes, your points probably expire — most in 2 to 3 years — and the bank is quietly counting on you to forget. <S>The fix is simple: know your card's rule, check your expiry each quarter, redeem your oldest points first, and never close a card without emptying it.</S></p>
          <p>Do that and you'll never donate another point back to the bank through breakage. Set an <a href="/tools/expiry-reminder" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>expiry reminder</a> so the deadline never sneaks up, see what your points are worth with the <a href="/" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>calculator</a>, and learn to redeem them for maximum value in <a href="/blog/points-maximisation-playbook-india-2026" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>The Points Maximisation Playbook</a>.</p>

          <div className="p-6 rounded-2xl text-center mt-8" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <p className="text-[16px] font-semibold">Don't let another point expire</p>
            <p className="text-[13px] mt-1 mb-4" style={{ color: 'rgba(250,248,245,0.5)' }}>Set a reminder and we'll alert you before your points lapse.</p>
            <a href="/tools/expiry-reminder" className="inline-block px-6 py-2.5 rounded-xl text-[14px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Set an Expiry Reminder →</a>
          </div>

          <p className="text-[11px] mt-8 leading-relaxed" style={{ color: 'var(--text-m)' }}>
            <strong>Disclaimer:</strong> Expiry rules are based on publicly available information as of July 2026 and vary by specific card. Banks change reward terms frequently and often without notice — always verify your card's current expiry policy in your bank app, statement, or MITC. This is educational information, not financial advice. PointsMax is not affiliated with any bank.
          </p>

          <FeedbackWidget pageSlug="do-credit-card-points-expire-india-2026" pageTitle="Do Credit Card Reward Points Expire? India Guide by Bank 2026" />
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
            <p className="text-[13px]" style={{ color: 'rgba(250,248,245,0.6)' }}>Never lose points to <strong style={{ color: '#FAF8F5' }}>expiry</strong></p>
            <a href="/tools/expiry-reminder" className="shrink-0 px-4 py-2 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Set Reminder →</a>
          </div>
        </div>
      )}
    </div>
  )
}
