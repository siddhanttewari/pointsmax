'use client'
import PageNav from '@/components/PageNav'
import { useState, useMemo, useEffect } from 'react'
import { debtTrap } from '@/lib/analytics'

export default function InterestCalculator() {
  const [balance, setBalance] = useState(50000)
  const [monthlyRate, setMonthlyRate] = useState(3.5) // % per month — typical Indian CC
  const [payMode, setPayMode] = useState('minimum') // 'minimum' | 'fixed' | 'full'
  const [fixedPay, setFixedPay] = useState(5000)
  const [minPercent] = useState(5) // typical 5% minimum due

  // Core simulation: how long to pay off, total interest paid
  const result = useMemo(() => {
    const r = monthlyRate / 100
    let bal = balance
    let months = 0
    let totalInterest = 0
    const schedule = []
    const MAX_MONTHS = 600 // 50-year cap to avoid infinite loops

    if (payMode === 'full') {
      // Pay in full — but the trap: if you carried ANY balance last cycle,
      // interest applies to the full statement from transaction date.
      // Modelled as one month of interest on full balance.
      const interest = bal * r
      return { months: 1, totalInterest: Math.round(interest), totalPaid: Math.round(bal + interest), schedule: [], neverEnds: false, effectiveApr: monthlyRate * 12 }
    }

    while (bal > 0 && months < MAX_MONTHS) {
      const interest = bal * r
      totalInterest += interest
      bal += interest

      let payment
      if (payMode === 'minimum') {
        payment = Math.max(bal * (minPercent / 100), 200) // 5% or ₹200 floor
      } else {
        payment = fixedPay
      }

      // If payment can't cover interest, it's a true trap
      if (payment <= interest && payMode === 'fixed') {
        return { months: Infinity, totalInterest: Infinity, totalPaid: Infinity, schedule: [], neverEnds: true, effectiveApr: monthlyRate * 12 }
      }

      payment = Math.min(payment, bal)
      bal -= payment
      months++

      if (months <= 12 || months % 12 === 0) {
        schedule.push({ month: months, balance: Math.max(0, Math.round(bal)), interestPaid: Math.round(totalInterest) })
      }
      if (bal < 1) break
    }

    return {
      months: months >= MAX_MONTHS ? Infinity : months,
      totalInterest: Math.round(totalInterest),
      totalPaid: Math.round(balance + totalInterest),
      schedule,
      neverEnds: months >= MAX_MONTHS,
      effectiveApr: monthlyRate * 12,
    }
  }, [balance, monthlyRate, payMode, fixedPay, minPercent])

  useEffect(() => {
    const t = setTimeout(() => debtTrap.calculate(balance, monthlyRate, result.months, payMode), 800)
    return () => clearTimeout(t)
  }, [balance, monthlyRate, payMode, result.months])

  useEffect(() => {
    if (isFinite(result.totalInterest)) debtTrap.viewResult(result.totalInterest, result.effectiveApr)
  }, [result.totalInterest])

  const fmt = (n) => isFinite(n) ? '₹' + Math.round(n).toLocaleString('en-IN') : '∞'
  const yearsMonths = (m) => {
    if (!isFinite(m)) return 'Never'
    const y = Math.floor(m / 12), mm = m % 12
    return y > 0 ? `${y}y ${mm}m` : `${mm} months`
  }

  return (
    <div className="min-h-screen">
      <PageNav />
      <main className="max-w-2xl mx-auto px-5 py-12">
        <div className="mb-8">
          <span className="text-[11px] font-bold uppercase tracking-widest px-2 py-1 rounded" style={{ color: 'var(--gold)', background: 'rgba(184,149,62,0.08)' }}>Free Tool</span>
          <h1 className="mt-3" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(24px,4vw,34px)', letterSpacing: '-0.02em', color: 'var(--text)' }}>
            Credit Card Interest Calculator
          </h1>
          <p className="mt-2 text-[15px]" style={{ color: 'var(--text-s)' }}>See the true cost of carrying a balance — or paying only the minimum due. Most people are shocked by the answer.</p>
        </div>

        <div className="space-y-6">
          {/* Balance input */}
          <div>
            <label className="block text-[13px] font-semibold mb-2" style={{ color: 'var(--text-s)' }}>Outstanding balance</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[18px] font-bold" style={{ color: 'var(--text-m)' }}>₹</span>
              <input type="number" value={balance} onChange={e => setBalance(parseInt(e.target.value) || 0)}
                className="w-full pl-9 pr-4 py-3.5 rounded-xl text-[18px] font-mono font-bold outline-none" style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--text)' }} />
            </div>
            <div className="flex gap-1.5 mt-2 flex-wrap">
              {[10000, 25000, 50000, 100000, 200000].map(v => (
                <button key={v} onClick={() => setBalance(v)} className="px-3 py-1 rounded-lg text-[12px] font-mono" style={{ background: balance === v ? 'var(--dark)' : 'var(--bg-s)', color: balance === v ? '#FAF8F5' : 'var(--text-s)', border: '1px solid var(--border)' }}>
                  ₹{v >= 100000 ? (v/100000)+'L' : (v/1000)+'k'}
                </button>
              ))}
            </div>
          </div>

          {/* Interest rate */}
          <div>
            <label className="block text-[13px] font-semibold mb-2" style={{ color: 'var(--text-s)' }}>
              Monthly interest rate <span style={{ color: 'var(--text-m)' }}>({(monthlyRate * 12).toFixed(1)}% per year)</span>
            </label>
            <div className="flex items-center gap-3">
              <input type="range" min="2" max="4" step="0.05" value={monthlyRate} onChange={e => setMonthlyRate(parseFloat(e.target.value))}
                className="flex-1" style={{ accentColor: 'var(--gold)' }} />
              <span className="text-[15px] font-mono font-bold w-16 text-right" style={{ color: 'var(--text)' }}>{monthlyRate.toFixed(2)}%</span>
            </div>
            <p className="text-[11px] mt-1" style={{ color: 'var(--text-m)' }}>Most Indian cards charge 3.4–3.75%/month (≈41–45% a year). Check your statement's "finance charge" rate.</p>
          </div>

          {/* Payment mode */}
          <div>
            <label className="block text-[13px] font-semibold mb-2" style={{ color: 'var(--text-s)' }}>How much will you pay each month?</label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { key: 'minimum', label: 'Minimum due', sub: '~5% of balance' },
                { key: 'fixed', label: 'Fixed amount', sub: 'You choose' },
                { key: 'full', label: 'Pay in full', sub: 'The safe way' },
              ].map(m => (
                <button key={m.key} onClick={() => setPayMode(m.key)} className="p-3 rounded-xl text-center transition-all"
                  style={{ background: payMode === m.key ? 'var(--dark)' : 'var(--bg-s)', color: payMode === m.key ? '#FAF8F5' : 'var(--text-s)', border: '1px solid var(--border)' }}>
                  <p className="text-[13px] font-semibold">{m.label}</p>
                  <p className="text-[10px] mt-0.5" style={{ opacity: 0.7 }}>{m.sub}</p>
                </button>
              ))}
            </div>
            {payMode === 'fixed' && (
              <div className="relative mt-3">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[16px] font-bold" style={{ color: 'var(--text-m)' }}>₹</span>
                <input type="number" value={fixedPay} onChange={e => setFixedPay(parseInt(e.target.value) || 0)}
                  className="w-full pl-9 pr-4 py-3 rounded-xl text-[16px] font-mono font-bold outline-none" style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--text)' }} placeholder="Monthly payment" />
              </div>
            )}
          </div>

          {/* RESULT */}
          <div className="p-6 rounded-2xl" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            {payMode === 'full' ? (
              <>
                <p className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: 'rgba(250,248,245,0.4)' }}>If you pay in full every month</p>
                <p className="text-[28px] font-mono font-bold" style={{ color: '#6ee7b7' }}>₹0 interest</p>
                <p className="text-[13px] mt-2" style={{ color: 'rgba(250,248,245,0.65)' }}>This is the only way to use a credit card for free. Pay the <strong style={{ color: '#FAF8F5' }}>total amount due</strong> (not the minimum) by the due date every month, and you never pay a rupee of interest. Your rewards become pure profit.</p>
                <div className="mt-3 p-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.06)' }}>
                  <p className="text-[12px]" style={{ color: 'rgba(250,248,245,0.7)' }}>⚠ The catch: if you carried a balance last cycle, you lose the interest-free grace period — interest applies to your <strong style={{ color: '#FAF8F5' }}>full statement balance from each transaction date</strong> until you clear it entirely and start fresh.</p>
                </div>
              </>
            ) : result.neverEnds ? (
              <>
                <p className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: 'rgba(252,165,165,0.7)' }}>This is a debt trap</p>
                <p className="text-[24px] font-mono font-bold" style={{ color: '#fca5a5' }}>You'll never pay it off</p>
                <p className="text-[13px] mt-2" style={{ color: 'rgba(250,248,245,0.65)' }}>Your fixed payment of {fmt(fixedPay)} doesn't even cover the monthly interest of {fmt(balance * monthlyRate / 100)}. The balance grows every month. You must pay more than the monthly interest to make any progress.</p>
              </>
            ) : (
              <>
                <p className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: 'rgba(250,248,245,0.4)' }}>
                  Paying {payMode === 'minimum' ? 'only the minimum due' : fmt(fixedPay) + '/month'}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-[11px]" style={{ color: 'rgba(250,248,245,0.5)' }}>Time to clear</p>
                    <p className="text-[24px] font-mono font-bold" style={{ color: result.months > 36 ? '#fca5a5' : '#fcd34d' }}>{yearsMonths(result.months)}</p>
                  </div>
                  <div>
                    <p className="text-[11px]" style={{ color: 'rgba(250,248,245,0.5)' }}>Total interest paid</p>
                    <p className="text-[24px] font-mono font-bold" style={{ color: '#fca5a5' }}>{fmt(result.totalInterest)}</p>
                  </div>
                </div>
                <div className="p-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.06)' }}>
                  <p className="text-[13px]" style={{ color: 'rgba(250,248,245,0.75)' }}>
                    On a {fmt(balance)} balance, you'll end up paying <strong style={{ color: '#FAF8F5' }}>{fmt(result.totalPaid)}</strong> in total — that's <strong style={{ color: '#fca5a5' }}>{fmt(result.totalInterest)} in interest alone</strong> ({balance > 0 ? Math.round(result.totalInterest / balance * 100) : 0}% of what you borrowed).
                    {payMode === 'minimum' && ' Paying only the minimum is how banks keep you in debt for years.'}
                  </p>
                </div>
                <p className="text-[12px] mt-3" style={{ color: 'rgba(250,248,245,0.5)' }}>Effective annual rate: <strong style={{ color: '#fca5a5' }}>{result.effectiveApr.toFixed(1)}%</strong> — higher than almost any personal loan.</p>
              </>
            )}
          </div>

          {/* The minimum-due trap explainer */}
          {payMode !== 'full' && !result.neverEnds && (
            <div className="p-4 rounded-xl" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
              <p className="text-[13px] font-bold mb-1" style={{ color: 'var(--red)' }}>Why paying the minimum is a trap</p>
              <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>The "minimum due" (usually 5%) is designed to keep you paying interest as long as possible. Most of your minimum payment goes to interest, barely touching the principal. Whenever you can, pay the <strong style={{ color: 'var(--text)' }}>total amount due</strong> — or as much above the minimum as possible.</p>
            </div>
          )}

          {/* CTA to related content */}
          <div className="p-5 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
            <div>
              <p className="text-[14px] font-semibold" style={{ color: 'var(--text)' }}>Know every charge before it hits you</p>
              <p className="text-[12px] mt-1" style={{ color: 'var(--text-m)' }}>Read our guide to hidden credit card charges and which ones you can dispute.</p>
            </div>
            <a href="/blog/hidden-credit-card-charges-india-2026" onClick={() => debtTrap.clickCTA('hidden-charges')} className="shrink-0 px-5 py-2.5 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>Read the guide →</a>
          </div>

          <p className="text-[11px] leading-relaxed" style={{ color: 'var(--text-m)' }}>
            <strong>Note:</strong> This calculator provides estimates using a simplified model of Indian credit card interest. Actual charges depend on your card's exact finance-charge rate, billing cycle, transaction dates, GST on interest (18%), and minimum-due formula, which vary by issuer. It's a guide to understand the scale of interest costs, not an exact figure. Always check your card's MITC (Most Important Terms & Conditions) and statement. Not financial advice.
          </p>
        </div>
      </main>

      <footer className="py-10 px-5" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[12px]" style={{ color: 'var(--text-m)' }}>
            <a href="/">PointsMax</a><span className="mx-2">·</span>
            <a href="/about">About</a><span className="mx-2">·</span>
            <a href="/blog">Blog</a><span className="mx-2">·</span>
            <a href="/tools/breakeven">Fee Calculator</a><span className="mx-2">·</span>
            <a href="/contact">Contact</a><span className="mx-2">·</span>
            <a href="/privacy">Privacy</a>
          </p>
        </div>
      </footer>
    </div>
  )
}
