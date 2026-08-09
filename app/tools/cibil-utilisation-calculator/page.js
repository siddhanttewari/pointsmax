'use client'
import PageNav from '@/components/PageNav'
import ResultCapture from '@/components/ResultCapture'
import { useState, useMemo, useEffect } from 'react'
import { cibil } from '@/lib/analytics'

export default function UtilisationCalculator() {
  const [cards, setCards] = useState([
    { limit: 100000, balance: 40000 },
    { limit: 50000, balance: 5000 },
  ])

  const addCard = () => setCards([...cards, { limit: 50000, balance: 0 }])
  const removeCard = (i) => setCards(cards.filter((_, idx) => idx !== i))
  const update = (i, field, val) => {
    const next = [...cards]
    next[i] = { ...next[i], [field]: parseInt(val) || 0 }
    setCards(next)
  }

  const result = useMemo(() => {
    const totalLimit = cards.reduce((s, c) => s + (c.limit || 0), 0)
    const totalBalance = cards.reduce((s, c) => s + (c.balance || 0), 0)
    const ratio = totalLimit > 0 ? (totalBalance / totalLimit) * 100 : 0
    let band, color, verdict
    if (ratio === 0) { band = 'Excellent'; color = 'var(--green)'; verdict = 'Zero utilisation is fine, though a tiny bit of usage (1-10%) that you pay off can actually look slightly better to bureaus than total dormancy.' }
    else if (ratio <= 10) { band = 'Excellent'; color = 'var(--green)'; verdict = 'This is the sweet spot. Utilisation this low signals you use credit responsibly without leaning on it.' }
    else if (ratio <= 30) { band = 'Healthy'; color = 'var(--green)'; verdict = 'You are inside the healthy zone. Staying under 30% keeps this factor working in your favour.' }
    else if (ratio <= 50) { band = 'Elevated'; color = 'var(--gold, #B8953E)'; verdict = 'You are above the recommended 30%. This can start to weigh on your score. Consider paying down or spreading spend.' }
    else if (ratio <= 75) { band = 'High'; color = '#e07b39'; verdict = 'High utilisation is likely dragging your score down. Bureaus read this as heavy reliance on credit.' }
    else { band = 'Very high'; color = 'var(--red)'; verdict = 'This is in the danger zone and very likely hurting your CIBIL score significantly. Paying this down is one of the fastest ways to improve your score.' }

    // How much to pay down to hit 30%
    const targetBalance = totalLimit * 0.30
    const payToHealthy = totalBalance > targetBalance ? Math.ceil(totalBalance - targetBalance) : 0
    // How much to hit 10% (ideal)
    const idealBalance = totalLimit * 0.10
    const payToIdeal = totalBalance > idealBalance ? Math.ceil(totalBalance - idealBalance) : 0

    return { totalLimit, totalBalance, ratio, band, color, verdict, payToHealthy, payToIdeal }
  }, [cards])

  useEffect(() => {
    const t = setTimeout(() => {
      cibil.calculate(result.totalLimit, result.totalBalance, Math.round(result.ratio))
      cibil.viewResult(Math.round(result.ratio), result.band)
    }, 800)
    return () => clearTimeout(t)
  }, [result.ratio])

  const fmt = (n) => '₹' + Math.round(n).toLocaleString('en-IN')

  return (
    <div className="min-h-screen">
      <PageNav />
      <main className="max-w-2xl mx-auto px-5 py-12">
        <div className="mb-8">
          <span className="text-[11px] font-bold uppercase tracking-widest px-2 py-1 rounded" style={{ color: 'var(--gold)', background: 'rgba(184,149,62,0.08)' }}>Free Tool</span>
          <h1 className="mt-3" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(24px,4vw,34px)', letterSpacing: '-0.02em', color: 'var(--text)' }}>
            Credit Utilisation Ratio Calculator
          </h1>
          <p className="mt-2 text-[15px]" style={{ color: 'var(--text-s)' }}>Your utilisation ratio is ~30% of your CIBIL score — second only to payment history. Enter your cards to see where you stand and how much to pay down.</p>
        </div>

        {/* Card inputs */}
        <div className="space-y-3 mb-4">
          {cards.map((c, i) => (
            <div key={i} className="p-3 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
              <div className="flex items-center justify-between mb-2">
                <p className="text-[12px] font-semibold" style={{ color: 'var(--text-s)' }}>Card {i + 1}</p>
                {cards.length > 1 && <button onClick={() => removeCard(i)} className="text-[11px]" style={{ color: 'var(--red)' }}>Remove</button>}
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[10px] uppercase tracking-wide mb-1" style={{ color: 'var(--text-m)' }}>Credit limit</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[13px]" style={{ color: 'var(--text-m)' }}>₹</span>
                    <input type="number" value={c.limit} onChange={e => update(i, 'limit', e.target.value)}
                      className="w-full pl-7 pr-3 py-2 rounded-lg text-[14px] font-mono outline-none" style={{ background: 'var(--bg-s)', border: '1px solid var(--border)', color: 'var(--text)' }} />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-wide mb-1" style={{ color: 'var(--text-m)' }}>Current balance</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[13px]" style={{ color: 'var(--text-m)' }}>₹</span>
                    <input type="number" value={c.balance} onChange={e => update(i, 'balance', e.target.value)}
                      className="w-full pl-7 pr-3 py-2 rounded-lg text-[14px] font-mono outline-none" style={{ background: 'var(--bg-s)', border: '1px solid var(--border)', color: 'var(--text)' }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button onClick={addCard} className="w-full py-2.5 rounded-xl text-[13px] font-semibold" style={{ background: 'var(--bg-s)', color: 'var(--text-s)', border: '1px dashed var(--border)' }}>+ Add another card</button>
        </div>

        {/* RESULT */}
        <div className="p-6 rounded-2xl mb-4" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
          <div className="flex items-end justify-between mb-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest mb-1" style={{ color: 'rgba(250,248,245,0.4)' }}>Your utilisation</p>
              <p className="text-[40px] font-mono font-bold leading-none" style={{ color: result.color }}>{result.ratio.toFixed(1)}%</p>
            </div>
            <div className="text-right">
              <span className="text-[13px] font-bold px-3 py-1 rounded-full" style={{ background: result.color, color: '#1A1614' }}>{result.band}</span>
            </div>
          </div>

          {/* Bar with 30% marker */}
          <div className="relative h-3 rounded-full mb-1" style={{ background: 'rgba(255,255,255,0.1)' }}>
            <div className="absolute top-0 left-0 h-3 rounded-full transition-all" style={{ width: `${Math.min(result.ratio, 100)}%`, background: result.color }} />
            {/* 30% marker */}
            <div className="absolute top-[-3px] h-[18px] w-[2px]" style={{ left: '30%', background: 'rgba(255,255,255,0.5)' }} />
          </div>
          <div className="flex justify-between text-[10px] mb-4" style={{ color: 'rgba(250,248,245,0.4)' }}>
            <span>0%</span>
            <span style={{ marginLeft: '18%' }}>30% (healthy line)</span>
            <span>100%</span>
          </div>

          <p className="text-[13px]" style={{ color: 'rgba(250,248,245,0.75)' }}>{result.verdict}</p>

          {result.payToHealthy > 0 && (
            <div className="mt-4 p-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.06)' }}>
              <p className="text-[13px]" style={{ color: 'rgba(250,248,245,0.85)' }}>
                Pay down <strong style={{ color: '#6ee7b7' }}>{fmt(result.payToHealthy)}</strong> to drop under 30% (the healthy line).
                {result.payToIdeal > result.payToHealthy && <> Pay <strong style={{ color: '#6ee7b7' }}>{fmt(result.payToIdeal)}</strong> to reach the ideal ~10%.</>}
              </p>
            </div>
          )}
        </div>

        {/* Totals summary */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="p-3 rounded-xl text-center" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
            <p className="text-[11px]" style={{ color: 'var(--text-m)' }}>Total limit</p>
            <p className="text-[16px] font-mono font-bold" style={{ color: 'var(--text)' }}>{fmt(result.totalLimit)}</p>
          </div>
          <div className="p-3 rounded-xl text-center" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
            <p className="text-[11px]" style={{ color: 'var(--text-m)' }}>Total balance</p>
            <p className="text-[16px] font-mono font-bold" style={{ color: 'var(--text)' }}>{fmt(result.totalBalance)}</p>
          </div>
        </div>

        {/* Key insight */}
        <div className="p-4 rounded-xl mb-6" style={{ background: '#EDF5F0', border: '1px solid #C8DDD0' }}>
          <p className="text-[13px] font-bold mb-1" style={{ color: 'var(--green)' }}>Why closing a card can backfire</p>
          <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>Closing a card removes its limit from your total — which <strong style={{ color: 'var(--text)' }}>raises</strong> your utilisation ratio even if your spending doesn't change. Try it: remove a card above and watch the ratio jump. This is why keeping old no-fee cards open usually helps your score.</p>
        </div>

        {/* CTA */}
        <div className="p-5 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
          <div>
            <p className="text-[14px] font-semibold" style={{ color: 'var(--text)' }}>Confused by CIBIL myths?</p>
            <p className="text-[12px] mt-1" style={{ color: 'var(--text-m)' }}>We bust the 9 biggest credit score myths that cost Indians money.</p>
          </div>
          <a href="/blog/credit-card-cibil-score-myths-india-2026" onClick={() => cibil.clickCTA('cibil-myths')} className="shrink-0 px-5 py-2.5 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>Read the guide →</a>
        </div>

        <div className="mt-6">
          <ResultCapture
            source="cibil-utilisation-calculator"
            title="Save your utilisation report + get the free Cheat Sheet"
            summary={[
              { label: 'Utilisation', value: result.ratio.toFixed(1) + '%' },
              { label: 'Band', value: result.band },
              { label: 'Total limit', value: fmt(result.totalLimit) },
              { label: 'Pay down to reach 30%', value: result.payToHealthy > 0 ? fmt(result.payToHealthy) : 'Already there' },
            ]}
          />
        </div>

        <p className="text-[11px] leading-relaxed mt-6" style={{ color: 'var(--text-m)' }}>
          <strong>Note:</strong> Utilisation is one major factor (~30%) in your CIBIL score, but not the only one — payment history (~35%), credit age, mix, and inquiries also matter. This tool estimates your overall utilisation ratio; bureaus may also look at per-card utilisation. It's a guide to a healthy range, not a score prediction. Check your actual score free via the official CIBIL site. Not financial advice.
        </p>
      </main>

      <footer className="py-10 px-5" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[12px]" style={{ color: 'var(--text-m)' }}>
            <a href="/">PointsMax</a><span className="mx-2">·</span>
            <a href="/about">About</a><span className="mx-2">·</span>
            <a href="/blog">Blog</a><span className="mx-2">·</span>
            <a href="/tools/interest-calculator">Interest Calculator</a><span className="mx-2">·</span>
            <a href="/contact">Contact</a><span className="mx-2">·</span>
            <a href="/privacy">Privacy</a>
          </p>
        </div>
      </footer>
    </div>
  )
}
