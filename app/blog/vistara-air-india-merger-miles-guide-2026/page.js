'use client'

import { useState, useEffect } from 'react'
import FeedbackWidget from '@/components/FeedbackWidget'
import PageNav from '@/components/PageNav'

const faqJsonLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What happened to my Club Vistara points after the Air India merger?', acceptedAnswer: { '@type': 'Answer', text: 'All Club Vistara (CV) Points were converted to Air India Flying Returns points at a 1:1 ratio on November 12, 2024, when Vistara ceased operations. The converted points received extended validity of at least one year from the migration date. If you held a Club Vistara account, a linked Flying Returns account was either updated or created automatically using your existing details — no action was required at the time.' }},
    { '@type': 'Question', name: 'Can I still use my old SBI or HDFC Vistara credit card?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — existing Vistara co-branded credit cards (SBI Vistara, HDFC Vistara) continue to work, but they now earn Air India Flying Returns / Maharaja Club miles instead of CV Points, at the same earning rates as before. SBI Vistara cards were rebranded as SBI Air India Maharaja Club cards. New applications for Vistara-branded cards stopped after September 30, 2024, and renewals under the old branding ceased after March 31, 2026 — but existing cardholders retain their card and benefits under the new branding.' }},
    { '@type': 'Question', name: 'Is my old Club Vistara Gold or Silver tier status still valid in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Club Vistara tier status was honoured for one year post-merger (until approximately November 2025) with equivalent Flying Returns tier status. By mid-2026, all former Club Vistara members should now be operating under the standard Flying Returns/Maharaja Club tier system (Classic, Silver, Gold, Platinum) based on their accumulated tier points under the new program — the temporary CV-equivalent status period has ended. Note that some benefits changed: for example, Gold tier lounge access became limited rather than unlimited in the new system.' }},
  ],
}

export default function BlogPost() {
  const [showBar, setShowBar] = useState(false)

  useEffect(() => {
    const fn = () => setShowBar(window.scrollY > 600)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const H2 = ({ children }) => (
    <h2 className="pt-8" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', letterSpacing: '-0.01em' }}>{children}</h2>
  )
  const S = ({ children }) => <strong style={{ color: 'var(--text)' }}>{children}</strong>

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Vistara–Air India Merger: What Happened to Your CV Points and Miles in 2026', datePublished: '2026-06-12', dateModified: '2026-06-12', author: { '@type': 'Organization', name: 'PointsMax' }, publisher: { '@type': 'Organization', name: 'PointsMax', url: 'https://www.pointsmax.in' } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageNav />

      <article className="max-w-2xl mx-auto px-5 py-12">
        <div className="flex items-center gap-2 mb-8 text-[13px]" style={{ color: 'var(--text-m)' }}>
          <a href="/">PointsMax</a><span>/</span>
          <a href="/blog">Learn</a><span>/</span>
          <span style={{ color: 'var(--text-s)' }}>Vistara–Air India Merger</span>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded" style={{ color: '#0891b2', background: 'rgba(8,145,178,0.08)' }}>Loyalty Strategy</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>June 12, 2026</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>9 min read</span>
        </div>

        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(24px, 4vw, 36px)', lineHeight: 1.15, letterSpacing: '-0.025em', color: 'var(--text)' }}>
          Vistara–Air India Merger: What Happened to Your CV Points and Miles in 2026
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
          If you're still searching "is my Club Vistara card valid" or wondering where your CV points went, you're not alone. Here's the complete picture in 2026 — and why those converted points are now worth more than when they migrated.
        </p>

        <div className="mt-10 space-y-6 text-[15px] leading-[1.85]" style={{ color: 'var(--text-s)' }}>

          <p>Vistara operated its last flight on November 11, 2024. The next day, its operations, loyalty program, and co-branded credit cards were absorbed into Air India. For long-time Club Vistara members, this raised a lot of questions — many of which are still being searched in 2026, often by people who held a Vistara card years ago, stopped paying attention, and are now wondering whether their points still exist.</p>
          <p>The short answer: <S>your points are almost certainly still there, converted to Air India Flying Returns (now branded Maharaja Club), and — thanks to the April 2026 award chart overhaul — potentially worth more than they were when they migrated.</S> Here's the full picture.</p>

          <H2>What happened, in order</H2>
          <div className="space-y-3">
            {[
              { date: 'Sep 30, 2024', event: 'New Vistara-branded credit card applications stopped. No new SBI Vistara or HDFC Vistara cards issued after this date.' },
              { date: 'Nov 11, 2024', event: 'Vistara operated its final flight. This was also the last day to earn or redeem CV Points on Vistara flights directly.' },
              { date: 'Nov 12, 2024', event: 'Full merger into Air India. All Club Vistara (CV) Points, Tier Points, and Vouchers converted to Flying Returns at a 1:1 ratio. Linked Flying Returns accounts were created automatically using existing Club Vistara details — no manual action required.' },
              { date: 'Nov 2024 – Nov 2025', event: 'Club Vistara tier status (Silver/Gold/Platinum) was honoured as equivalent Flying Returns tier status for approximately one year, giving members a transition runway.' },
              { date: 'Mar 31, 2026', event: 'Final cutoff for legacy Vistara co-branded card benefits and renewals under old branding. SBI Vistara cards fully rebranded as SBI Air India Maharaja Club cards.' },
              { date: 'Apr 13, 2026', event: 'Air India\'s major award chart overhaul cut prices up to 60% on most international economy routes — directly benefiting anyone holding converted CV points/miles.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-[12px] font-mono font-bold shrink-0 w-24 pt-0.5" style={{ color: 'var(--gold, #B8953E)' }}>{item.date}</span>
                <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>{item.event}</p>
              </div>
            ))}
          </div>

          <H2>Where are my CV Points now?</H2>
          <p>If you had a Club Vistara account with a points balance as of November 11, 2024, those points were converted <S>1:1 into Air India Flying Returns miles</S> and credited to a Flying Returns account linked to your existing details. If you didn't have a Flying Returns account, one was created automatically.</p>
          <div className="p-4 rounded-xl" style={{ background: '#EDF5F0', border: '1px solid #C8DDD0' }}>
            <p className="text-[13px] font-bold mb-1" style={{ color: 'var(--green)' }}>To check your balance today</p>
            <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>Log in at airindia.com using the email/phone associated with your old Club Vistara account. Your converted miles will show as Flying Returns Award Miles. If you can't log in, use the "Forgot Flying Returns Number" option — the account exists even if you've never actively used it.</p>
          </div>

          {/* Mid CTA */}
          <div className="p-5 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <div>
              <p className="text-[14px] font-semibold">What are your converted miles worth post-April 2026?</p>
              <p className="text-[12px] mt-1" style={{ color: 'rgba(250,248,245,0.5)' }}>The new award chart changed the math significantly.</p>
            </div>
            <a href="/blog/air-india-flying-returns-guide-2026" className="shrink-0 px-5 py-2.5 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Read the FR Guide →</a>
          </div>

          <H2>What about my old Vistara credit card?</H2>
          <p>If you're holding a card that was issued as "SBI Vistara" or "HDFC Vistara" before September 30, 2024, here's the current status:</p>

          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-[13px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead><tr>
                <th className="text-left py-3 px-3 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Card</th>
                <th className="text-left py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Current status (2026)</th>
                <th className="text-left py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>What changed</th>
              </tr></thead>
              <tbody>
                {[
                  ['SBI Vistara Card', 'Rebranded as SBI Air India Maharaja Club Card', 'Same earning rates. Now earns Flying Returns miles instead of CV Points. Annual fee unchanged.'],
                  ['HDFC Vistara Cards', 'Active, earning Maharaja Club miles', 'Functions normally but no co-branded Vistara identity. Complimentary tier status benefit was discontinued on HDFC variants.'],
                  ['Any Vistara card applied for after Sep 30, 2024', 'Does not exist', 'No new cards were issued under Vistara branding after this date — applications were redirected to Air India co-branded products.'],
                ].map(([card, status, change], i) => (
                  <tr key={i}>
                    <td className="py-2.5 px-3 font-medium" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{card}</td>
                    <td className="py-2.5 px-2 text-[12px]" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>{status}</td>
                    <td className="py-2.5 px-2 text-[12px]" style={{ color: 'var(--text-m)', borderBottom: '1px solid var(--border)' }}>{change}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p><S>Your card still works.</S> You don't need to apply for anything new, and there's no action required to "migrate" your card — it happened automatically. The only practical change is the branding and the loyalty currency you earn (Flying Returns miles instead of CV Points), at the same rate as before.</p>

          <H2>What happened to tier status?</H2>
          <p>If you held Club Vistara Silver, Gold, or Platinum status, that status was honoured as equivalent Flying Returns tier status for roughly one year post-merger — through approximately November 2025. By mid-2026, <S>that transition period has ended</S>, and your status now depends entirely on tier points accumulated under the standard Flying Returns/Maharaja Club system (Classic → Silver → Gold → Platinum, covered in our <a href="/blog/air-india-flying-returns-guide-2026" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>Flying Returns guide</a>).</p>
          <div className="p-4 rounded-xl" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
            <p className="text-[13px] font-bold mb-1" style={{ color: 'var(--red)' }}>One thing that changed for the worse</p>
            <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>Former Club Vistara Gold members had unlimited domestic lounge access. Under the new Flying Returns Gold tier, lounge access is more limited. If lounge access was your primary reason for maintaining status, check the current Gold tier benefits before assuming parity with your old Club Vistara experience.</p>
          </div>

          <H2>The silver lining: April 2026 made your old points worth more</H2>
          <p>Here's the part that most people miss. The <S>April 13, 2026 Flying Returns award chart overhaul cut prices by up to 60%</S> on most international economy routes — and this applies retroactively to <S>any miles in your account, regardless of whether they originated from Club Vistara or Air India directly.</S></p>
          <div className="p-4 rounded-xl" style={{ background: '#EDF5F0', border: '1px solid #C8DDD0' }}>
            <p className="text-[13px] font-bold mb-2" style={{ color: 'var(--green)' }}>What this means practically</p>
            <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>If you converted, say, 40,000 CV Points to Flying Returns miles in November 2024, those 40,000 miles previously got you a Delhi-Singapore economy redemption at the old 20,000-point pricing (with miles left over) or close to a round-trip. Under the new April 2026 chart at 12,000 points per leg for the SE Asia tier, those same 40,000 miles now stretch to a full round-trip Delhi-Singapore with miles to spare — or two one-way redemptions to different SE Asia/Middle East destinations.</p>
          </div>
          <p className="mt-2">If you forgot about a Club Vistara balance and assumed it was small or stale, it's worth logging in and checking — the same number of miles buys meaningfully more under the new chart than it did 18 months ago.</p>

          <H2>Checklist: what to do if you held Club Vistara</H2>
          <div className="space-y-2">
            {[
              'Log in at airindia.com with your old Club Vistara credentials — your Flying Returns account exists even if dormant',
              'Check your Award Miles balance and tier status under the current Flying Returns system',
              'If you have an old SBI or HDFC Vistara card, confirm it\'s still active and check whether it has been formally rebranded',
              'Review the new April 2026 award chart for routes you care about — your existing balance may now stretch further',
              'If your account shows no activity, make a small redemption to ensure your miles don\'t hit the 36-month expiry window',
            ].map((step, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="w-6 h-6 rounded-full grid place-items-center text-[11px] font-bold shrink-0 mt-0.5" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>{i+1}</span>
                <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>{step}</p>
              </div>
            ))}
          </div>

          <H2>The bottom line</H2>
          <p>Club Vistara no longer exists as a separate program — but nothing was lost in the transition. <S>Your points converted 1:1, your card kept working, and your tier status was honoured for a year.</S> The only real change is cosmetic (no more Vistara branding) plus the lounge access reduction at Gold tier.</p>
          <p>And thanks to the April 2026 award chart changes, any dormant balance from your Club Vistara days is now worth checking — those miles likely go further today than they did when they migrated. For the full picture on current award pricing and credit card transfer ratios into Flying Returns, read our <a href="/blog/air-india-flying-returns-guide-2026" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>Air India Flying Returns Complete Guide 2026</a>.</p>

          <div className="p-6 rounded-2xl text-center mt-8" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <p className="text-[16px] font-semibold">Check what your converted miles are worth now</p>
            <p className="text-[13px] mt-1 mb-4" style={{ color: 'rgba(250,248,245,0.5)' }}>Post-April 2026 award chart, every route, every redemption.</p>
            <a href="/blog/air-india-flying-returns-guide-2026" className="inline-block px-6 py-2.5 rounded-xl text-[14px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Read the Flying Returns Guide →</a>
          </div>

          <p className="text-[11px] mt-8 leading-relaxed" style={{ color: 'var(--text-m)' }}>
            <strong>Disclaimer:</strong> Merger details based on publicly available Air India and Club Vistara communications from 2024-2026. Individual account situations may vary — contact Air India's Customer Support Portal for account-specific queries. Award chart pricing changes without notice. PointsMax is not affiliated with Air India or Vistara. Not financial advice.
          </p>

          <FeedbackWidget pageSlug="vistara-air-india-merger-miles-guide-2026" pageTitle="Vistara-Air India Merger: Your Miles Guide 2026" />
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
            <p className="text-[13px]" style={{ color: 'rgba(250,248,245,0.6)' }}>Check your <strong style={{ color: '#FAF8F5' }}>Flying Returns</strong> balance value</p>
            <a href="/blog/air-india-flying-returns-guide-2026" className="shrink-0 px-4 py-2 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Read Guide →</a>
          </div>
        </div>
      )}
    </div>
  )
}
