'use client'
import PageNav from '@/components/PageNav'

import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import { expiry as expiryTrack } from '@/lib/analytics'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

const CARDS_WITH_EXPIRY = [
  { name: 'HDFC Infinia', expiry: 36, note: '3 years from accrual (super-premium)' },
  { name: 'HDFC Diners Club Black', expiry: 36, note: '3 years from accrual (super-premium)' },
  { name: 'HDFC Regalia Gold', expiry: 24, note: '2 years from accrual' },
  { name: 'HDFC Millennia', expiry: 24, note: '2 years from accrual' },
  { name: 'HDFC (other cards)', expiry: 24, note: '2 years from accrual' },
  { name: 'SBI Card', expiry: 24, note: '2 years from accrual' },
  { name: 'Axis (EDGE points)', expiry: 36, note: '3 years from allotment' },
  { name: 'ICICI Bank', expiry: 36, note: '2-3 years by card (using 3)' },
  { name: 'Amex Membership Rewards', expiry: 0, note: 'No expiry while account is active' },
  { name: 'IDFC First', expiry: 0, note: 'Points never expire' },
  { name: 'Singapore Airlines KrisFlyer', expiry: 36, note: '3 years from last activity (resets on activity)' },
  { name: 'British Airways Avios', expiry: 36, note: '36 months of account inactivity (resets)' },
  { name: 'Air India Flying Returns', expiry: 36, note: '3 years of account inactivity (resets)' },
]

export default function ExpiryReminder() {
  const [form, setForm] = useState({ email: '', card: CARDS_WITH_EXPIRY[0].name, points: '', accrualDate: '', customNote: '' })
  const [status, setStatus] = useState('idle')

  const update = (k, v) => setForm(f => ({ ...f, [k]: v }))
  const selectedCard = CARDS_WITH_EXPIRY.find(c => c.name === form.card)

  const getExpiryDate = () => {
    if (!form.accrualDate || !selectedCard?.expiry) return null
    const d = new Date(form.accrualDate)
    d.setMonth(d.getMonth() + selectedCard.expiry)
    return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
  }

  const daysUntilExpiry = () => {
    if (!form.accrualDate || !selectedCard?.expiry) return null
    const d = new Date(form.accrualDate)
    d.setMonth(d.getMonth() + selectedCard.expiry)
    const days = Math.floor((d - new Date()) / (1000 * 60 * 60 * 24))
    return days
  }

  const submit = async () => {
    if (!form.email || !form.card || !form.accrualDate) return
    setStatus('sending')
    const days = daysUntilExpiry()
    expiryTrack.formSubmit(form.card, !!form.customNote)
    if (days !== null) expiryTrack.enterDate(form.card, days)
    const { error } = await supabase.from('expiry_reminders').insert([{
      email: form.email,
      card_name: form.card,
      points_balance: parseInt(form.points) || 0,
      accrual_date: form.accrualDate,
      expiry_months: selectedCard?.expiry || 36,
      note: form.customNote,
    }])
    if (error) { expiryTrack.submitError('supabase_error') }
    setStatus(error ? 'error' : 'sent')
  }

  const days = daysUntilExpiry()
  const expiryDate = getExpiryDate()

  return (
    <div className="min-h-screen">
      <PageNav />

      <main className="max-w-lg mx-auto px-5 py-12">
        <div className="mb-8">
          <span className="text-[11px] font-bold uppercase tracking-widest px-2 py-1 rounded" style={{ color: 'var(--gold)', background: 'rgba(184,149,62,0.08)' }}>Free Tool</span>
          <h1 className="mt-3" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(24px,4vw,32px)', letterSpacing: '-0.02em', color: 'var(--text)' }}>
            Points Expiry Reminder
          </h1>
          <p className="mt-2 text-[15px]" style={{ color: 'var(--text-s)' }}>Never lose your reward points. Enter your accrual date and we'll remind you before they expire.</p>
        </div>

        {status === 'sent' ? (
          <div className="p-8 rounded-2xl text-center" style={{ background: '#EDF5F0', border: '1px solid #C8DDD0' }}>
            <p className="text-[28px] mb-3">✓</p>
            <p className="text-[16px] font-semibold" style={{ color: 'var(--green)' }}>Reminder set!</p>
            <p className="text-[14px] mt-2" style={{ color: 'var(--text-s)' }}>
              We'll email you at <strong>{form.email}</strong> 60 days before your points expire.
            </p>
            {expiryDate && <p className="text-[13px] mt-2" style={{ color: 'var(--text-m)' }}>Expiry date: {expiryDate}</p>}
            <div className="flex flex-col sm:flex-row gap-2 justify-center mt-4">
              <a href="/" className="inline-block px-5 py-2.5 rounded-xl text-[14px] font-semibold" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
                Check Points Value →
              </a>
              <a href="/points-cheat-sheet.pdf" download="PointsMax-Cheat-Sheet.pdf" className="inline-block px-5 py-2.5 rounded-xl text-[14px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>
                Get the free Cheat Sheet →
              </a>
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            <div>
              <label className="block text-[13px] font-semibold mb-2" style={{ color: 'var(--text-s)' }}>Card or loyalty program</label>
              <select value={form.card} onChange={e => { update('card', e.target.value); expiryTrack.selectCard(e.target.value, CARDS_WITH_EXPIRY.find(c => c.name === e.target.value)?.expiry || 36) }}
                className="w-full px-4 py-3 rounded-xl text-[14px] outline-none"
                style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--text)' }}>
                {CARDS_WITH_EXPIRY.map(c => (
                  <option key={c.name} value={c.name}>{c.name} — {c.expiry === 0 ? 'No expiry' : `${c.expiry} months`}</option>
                ))}
              </select>
              {selectedCard && (
                <p className="text-[12px] mt-1" style={{ color: 'var(--text-m)' }}>ℹ {selectedCard.note}</p>
              )}
            </div>

            <div>
              <label className="block text-[13px] font-semibold mb-2" style={{ color: 'var(--text-s)' }}>When were your points last accrued? (approximate)</label>
              <input type="date" value={form.accrualDate} onChange={e => update('accrualDate', e.target.value)}
                className="w-full px-4 py-3 rounded-xl text-[14px] outline-none"
                style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--text)' }} />
            </div>

            {/* Live expiry preview */}
            {days !== null && (
              <div className="p-4 rounded-xl" style={{
                background: days < 90 ? '#FDF1EF' : days < 180 ? '#FBF8F0' : '#EDF5F0',
                border: `1px solid ${days < 90 ? '#E8C5BF' : days < 180 ? '#E8DFC5' : '#C8DDD0'}`
              }}>
                <p className="text-[13px] font-semibold" style={{ color: days < 90 ? 'var(--red)' : days < 180 ? 'var(--gold)' : 'var(--green)' }}>
                  {days < 0 ? '⚠️ Your points may have already expired!' : days < 90 ? `⚠️ Only ${days} days until expiry` : days < 180 ? `⚡ ${days} days remaining` : `✓ ${days} days remaining`}
                </p>
                {expiryDate && <p className="text-[12px] mt-1" style={{ color: 'var(--text-s)' }}>Estimated expiry: <strong>{expiryDate}</strong></p>}
              </div>
            )}

            <div>
              <label className="block text-[13px] font-semibold mb-2" style={{ color: 'var(--text-s)' }}>Points balance <span className="font-normal" style={{ color: 'var(--text-m)' }}>(optional)</span></label>
              <input type="number" value={form.points} onChange={e => update('points', e.target.value)} placeholder="e.g. 25000"
                className="w-full px-4 py-3 rounded-xl text-[14px] outline-none font-mono"
                style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--text)' }} />
            </div>

            <div>
              <label className="block text-[13px] font-semibold mb-2" style={{ color: 'var(--text-s)' }}>Your email</label>
              <input type="email" value={form.email} onChange={e => update('email', e.target.value)} placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl text-[14px] outline-none"
                style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--text)' }} />
              <p className="text-[11px] mt-1" style={{ color: 'var(--text-m)' }}>We'll send you one reminder email 60 days before expiry. No spam, no newsletters unless you opt in.</p>
            </div>

            {status === 'error' && (
              <p className="text-[13px] p-3 rounded-lg" style={{ background: '#FDF1EF', color: 'var(--red)' }}>Something went wrong. Please try again.</p>
            )}

            <button onClick={submit} disabled={status === 'sending' || !form.email || !form.card || !form.accrualDate}
              className="w-full py-3.5 rounded-xl text-[15px] font-semibold transition-all disabled:opacity-40"
              style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
              {status === 'sending' ? 'Setting reminder...' : 'Set Expiry Reminder →'}
            </button>

            <div className="p-4 rounded-xl" style={{ background: 'var(--bg-s)', border: '1px solid var(--border)' }}>
              <p className="text-[13px] font-semibold mb-1" style={{ color: 'var(--text)' }}>Don't let them expire — redeem now</p>
              <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>Check what your points are worth before they disappear. <a href="/" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>Open calculator →</a></p>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
