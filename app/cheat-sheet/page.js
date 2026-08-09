'use client'
import PageNav from '@/components/PageNav'
import LeadMagnet from '@/components/LeadMagnet'

export default function CheatSheetPage() {
  const inside = [
    ['The 5 Golden Rules', 'The non-negotiables that keep a card free instead of a debt trap.'],
    ['Redemption Value Ladder', 'What a point is really worth — from ₹1 on travel down to the ₹0.20 catalogue trap.'],
    ['Best Card by Spend', 'Which type of card wins for shopping, dining, travel, fuel, and more.'],
    ['Points Expiry Table', 'When each bank\'s points expire — HDFC, SBI, Axis, ICICI, Amex, IDFC First.'],
    ['Costly Traps', 'The mistakes that quietly drain your rewards and hurt your CIBIL.'],
    ['Monthly 5-Min Checklist', 'A quick routine that keeps you winning without the effort.'],
  ]
  return (
    <div className="min-h-screen">
      <PageNav />
      <main className="max-w-2xl mx-auto px-5 py-12">
        <div className="text-center mb-8">
          <span className="text-[11px] font-bold uppercase tracking-widest px-2 py-1 rounded" style={{ color: 'var(--gold)', background: 'rgba(184,149,62,0.08)' }}>Free Download</span>
          <h1 className="mt-3" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(26px,5vw,38px)', letterSpacing: '-0.02em', color: 'var(--text)', lineHeight: 1.1 }}>
            The Points Maximisation Cheat Sheet
          </h1>
          <p className="mt-3 text-[16px]" style={{ color: 'var(--text-s)' }}>
            Everything that separates people who quietly win at credit card rewards from those who leave money on the table — distilled onto two printable pages.
          </p>
        </div>

        {/* Preview + capture */}
        <div className="mb-8">
          <div className="rounded-2xl overflow-hidden mb-6" style={{ border: '1px solid var(--border)' }}>
            <div className="p-8 text-center" style={{ background: 'var(--dark)' }}>
              <div className="inline-block px-4 py-8 rounded-xl" style={{ background: '#FFFDFB', boxShadow: '0 8px 30px rgba(0,0,0,0.2)' }}>
                <div className="text-[13px] font-bold" style={{ color: 'var(--gold)' }}>PointsMax</div>
                <div className="text-[18px] font-bold mt-1" style={{ color: 'var(--dark)', fontFamily: 'Playfair Display, serif' }}>The Cheat Sheet</div>
                <div className="text-[10px] mt-1" style={{ color: 'var(--text-m)' }}>Points Maximisation · India 2026</div>
                <div className="mt-3 flex gap-1 justify-center">
                  {[...Array(6)].map((_, i) => <div key={i} className="h-1 rounded-full" style={{ width: 18, background: i % 2 ? 'var(--gold)' : 'var(--border)' }} />)}
                </div>
                <div className="text-[9px] mt-3" style={{ color: 'var(--text-m)' }}>2 pages · PDF</div>
              </div>
            </div>
          </div>
          <LeadMagnet source="cheat-sheet" />
        </div>

        {/* What's inside */}
        <h2 className="text-[18px] font-bold mb-4" style={{ color: 'var(--text)', fontFamily: 'Playfair Display, serif' }}>What's inside</h2>
        <div className="grid sm:grid-cols-2 gap-3 mb-8">
          {inside.map(([t, d], i) => (
            <div key={i} className="p-4 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
              <p className="text-[14px] font-semibold" style={{ color: 'var(--text)' }}>{t}</p>
              <p className="text-[12px] mt-1" style={{ color: 'var(--text-m)' }}>{d}</p>
            </div>
          ))}
        </div>

        {/* Trust line */}
        <div className="p-4 rounded-xl mb-8 text-center" style={{ background: 'var(--bg-s)', border: '1px solid var(--border)' }}>
          <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>Free, independent, and unaffiliated. We don't earn commissions from banks — we just show you the real numbers. No spam, unsubscribe anytime.</p>
        </div>

        {/* Tools cross-link */}
        <div className="text-center">
          <p className="text-[13px] mb-3" style={{ color: 'var(--text-m)' }}>Prefer the interactive versions? Try our free tools:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {[['/', 'Points Value'], ['/tools/card-quiz', 'Card Quiz'], ['/tools/breakeven', 'Fee Breakeven'], ['/tools/interest-calculator', 'Interest Calculator'], ['/tools/cibil-utilisation-calculator', 'Utilisation Checker']].map(([href, label]) => (
              <a key={href} href={href} className="px-3 py-1.5 rounded-lg text-[12px] font-semibold" style={{ background: 'var(--card)', color: 'var(--text-s)', border: '1px solid var(--border)' }}>{label}</a>
            ))}
          </div>
        </div>
      </main>

      <footer className="py-10 px-5" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[12px]" style={{ color: 'var(--text-m)' }}>
            <a href="/">PointsMax</a><span className="mx-2">·</span>
            <a href="/about">About</a><span className="mx-2">·</span>
            <a href="/blog">Blog</a><span className="mx-2">·</span>
            <a href="/contact">Contact</a><span className="mx-2">·</span>
            <a href="/privacy">Privacy</a>
          </p>
        </div>
      </footer>
    </div>
  )
}
