'use client'

import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import { leadMagnet } from '@/lib/analytics'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * Result capture for tools. The tool's result stays fully visible above this.
 * This offers a richer, keepable takeaway (result summary + cheat sheet PDF)
 * in exchange for an email — value is delivered, never gated.
 *
 * Props:
 *  - source: unique tag per tool (e.g. 'interest-calculator')
 *  - title:  headline for the offer
 *  - summary: array of { label, value } — the personalized result to package
 */
export default function ResultCapture({
  source,
  title = 'Save your result + get the free Cheat Sheet',
  summary = [],
  fileUrl = '/points-cheat-sheet.pdf',
}) {
  const [email, setEmail] = useState('')
  const [state, setState] = useState('idle') // idle | sending | done
  const [err, setErr] = useState(null)

  const submit = async () => {
    const clean = email.trim().toLowerCase()
    if (!EMAIL_RE.test(clean)) { setErr('Please enter a valid email.'); return }
    setState('sending'); setErr(null)
    try {
      const { error } = await supabase.from('leads').insert([{ email: clean, source }])
      if (error && !String(error.message).toLowerCase().includes('duplicate')) {
        console.error('lead insert error', error.message)
      }
    } catch (e) { /* don't block the reward */ }
    leadMagnet.submit(source)
    setState('done')
  }

  if (state === 'done') {
    return (
      <div className="rounded-2xl p-5" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[18px]">✅</span>
          <p className="text-[15px] font-semibold">You're all set — here's your takeaway</p>
        </div>
        {summary.length > 0 && (
          <div className="rounded-xl p-4 mb-4" style={{ background: 'rgba(255,255,255,0.06)' }}>
            <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: 'rgba(250,248,245,0.4)' }}>Your result</p>
            {summary.map((s, i) => (
              <div key={i} className="flex items-center justify-between py-1" style={{ borderBottom: i < summary.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
                <span className="text-[12px]" style={{ color: 'rgba(250,248,245,0.6)' }}>{s.label}</span>
                <span className="text-[13px] font-mono font-bold" style={{ color: '#FAF8F5' }}>{s.value}</span>
              </div>
            ))}
            <p className="text-[10px] mt-2" style={{ color: 'rgba(250,248,245,0.35)' }}>Screenshot this to keep it, or download the full guide below.</p>
          </div>
        )}
        <a href={fileUrl} download="PointsMax-Cheat-Sheet.pdf" onClick={() => leadMagnet.download(source)}
          className="inline-block px-5 py-2.5 rounded-lg text-[13px] font-semibold"
          style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>
          Download the Cheat Sheet →
        </a>
        <p className="text-[11px] mt-3" style={{ color: 'rgba(250,248,245,0.4)' }}>We'll only email you when something big changes in the card world. No spam.</p>
      </div>
    )
  }

  return (
    <div className="rounded-2xl p-5" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
      <div className="flex items-start gap-3">
        <span className="text-[20px] mt-0.5">📥</span>
        <div className="flex-1">
          <p className="text-[14px] font-semibold" style={{ color: 'var(--text)' }}>{title}</p>
          <p className="text-[12px] mt-1 mb-3" style={{ color: 'var(--text-m)' }}>Enter your email to save this result and get our 2-page Points Maximisation Cheat Sheet — the essential rules on one printable guide.</p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email" inputMode="email" value={email}
              onChange={e => setEmail(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && submit()}
              placeholder="you@email.com"
              className="flex-1 px-4 py-2.5 rounded-xl text-[14px] outline-none"
              style={{ background: 'var(--bg-s)', border: '1px solid var(--border)', color: 'var(--text)' }}
            />
            <button onClick={submit} disabled={state === 'sending'}
              className="px-5 py-2.5 rounded-xl text-[14px] font-semibold disabled:opacity-50 whitespace-nowrap"
              style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
              {state === 'sending' ? 'Sending…' : 'Email me this'}
            </button>
          </div>
          {err && <p className="text-[12px] mt-2" style={{ color: 'var(--red)' }}>{err}</p>}
          <p className="text-[11px] mt-2" style={{ color: 'var(--text-m)' }}>No spam. Unsubscribe anytime.</p>
        </div>
      </div>
    </div>
  )
}
