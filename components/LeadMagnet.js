'use client'

import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import { leadMagnet } from '@/lib/analytics'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function LeadMagnet({
  source = 'cheat-sheet',
  fileUrl = '/points-cheat-sheet.pdf',
  fileName = 'PointsMax-Cheat-Sheet.pdf',
  heading = 'Get the free Points Maximisation Cheat Sheet',
  sub = 'Every rule that separates people who win at credit card rewards from those who leave money on the table — on two printable pages.',
  compact = false,
}) {
  const [email, setEmail] = useState('')
  const [state, setState] = useState('idle') // idle | sending | done | error
  const [err, setErr] = useState(null)

  const submit = async () => {
    const clean = email.trim().toLowerCase()
    if (!EMAIL_RE.test(clean)) { setErr('Please enter a valid email.'); return }
    setState('sending'); setErr(null)
    try {
      // Upsert-style: ignore duplicate (email, source) errors gracefully
      const { error } = await supabase.from('leads').insert([{ email: clean, source }])
      if (error && !String(error.message).toLowerCase().includes('duplicate')) {
        // Non-duplicate error: still let them download, but note it
        console.error('lead insert error', error.message)
      }
      leadMagnet.submit(source)
      setState('done')
    } catch (e) {
      // Even if saving fails, don't block the download — the magnet is the promise
      leadMagnet.submit(source)
      setState('done')
    }
  }

  const onDownload = () => leadMagnet.download(source)

  if (state === 'done') {
    return (
      <div className={`rounded-2xl ${compact ? 'p-5' : 'p-6'}`} style={{ background: 'var(--dark)', color: '#FAF8F5', textAlign: 'center' }}>
        <div className="text-2xl mb-2">✅</div>
        <p className="text-[15px] font-semibold mb-1">Your cheat sheet is ready</p>
        <p className="text-[13px] mb-4" style={{ color: 'rgba(250,248,245,0.55)' }}>Tap below to download. We'll only email you when something big changes in the card world — no spam.</p>
        <a href={fileUrl} download={fileName} onClick={onDownload}
          className="inline-block px-6 py-2.5 rounded-xl text-[14px] font-semibold"
          style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>
          Download the PDF →
        </a>
      </div>
    )
  }

  return (
    <div className={`rounded-2xl ${compact ? 'p-5' : 'p-6'}`} style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
      {!compact && <div className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--gold, #B8953E)' }}>Free Download</div>}
      <p className={`font-semibold ${compact ? 'text-[15px]' : 'text-[17px]'}`} style={{ color: 'var(--text)', fontFamily: compact ? 'inherit' : 'Playfair Display, serif' }}>{heading}</p>
      <p className="text-[13px] mt-1 mb-4" style={{ color: 'var(--text-s)' }}>{sub}</p>
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
          {state === 'sending' ? 'Sending…' : 'Get the cheat sheet'}
        </button>
      </div>
      {err && <p className="text-[12px] mt-2" style={{ color: 'var(--red)' }}>{err}</p>}
      <p className="text-[11px] mt-3" style={{ color: 'var(--text-m)' }}>No spam. Unsubscribe anytime. We never sell your data.</p>
    </div>
  )
}
