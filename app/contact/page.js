'use client'

import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import PageNav from '@/components/PageNav'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: 'General feedback', message: '' })
  const [status, setStatus] = useState('idle')

  const update = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const submit = async () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return
    setStatus('sending')
    const { error } = await supabase.from('contact_submissions').insert([form])
    setStatus(error ? 'error' : 'sent')
    if (!error) setForm({ name: '', email: '', subject: 'General feedback', message: '' })
  }

  return (
    <div className="min-h-screen">
      <PageNav />
      <div className="max-w-2xl mx-auto px-5 py-10">
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '28px', color: 'var(--text)', letterSpacing: '-0.02em' }}>Contact Us</h1>
        <p className="mt-2 text-[15px]" style={{ color: 'var(--text-s)' }}>Found incorrect data? Want a card added? Have feedback? We'd love to hear from you.</p>

        {status === 'sent' ? (
          <div className="mt-8 p-8 rounded-2xl text-center" style={{ background: '#EDF5F0', border: '1px solid #C8DDD0' }}>
            <p className="text-[28px] mb-3">✓</p>
            <p className="text-[16px] font-semibold" style={{ color: 'var(--green)' }}>Message sent!</p>
            <p className="text-[14px] mt-2" style={{ color: 'var(--text-s)' }}>We'll get back to you within 24-48 hours.</p>
            <button onClick={() => setStatus('idle')} className="mt-4 px-4 py-2 rounded-lg text-[13px] font-medium" style={{ background: 'var(--bg-s)', color: 'var(--text-s)' }}>Send another message</button>
          </div>
        ) : (
          <div className="mt-8 space-y-4">
            <div>
              <label className="block text-[13px] font-semibold mb-1.5" style={{ color: 'var(--text-s)' }}>Name</label>
              <input type="text" value={form.name} onChange={e => update('name', e.target.value)} placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl text-[14px] outline-none" style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--text)' }} />
            </div>

            <div>
              <label className="block text-[13px] font-semibold mb-1.5" style={{ color: 'var(--text-s)' }}>Email</label>
              <input type="email" value={form.email} onChange={e => update('email', e.target.value)} placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl text-[14px] outline-none" style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--text)' }} />
            </div>

            <div>
              <label className="block text-[13px] font-semibold mb-1.5" style={{ color: 'var(--text-s)' }}>Subject</label>
              <select value={form.subject} onChange={e => update('subject', e.target.value)}
                className="w-full px-4 py-3 rounded-xl text-[14px] outline-none" style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--text)' }}>
                <option>General feedback</option>
                <option>Report incorrect data</option>
                <option>Request a card</option>
                <option>Bug report</option>
                <option>Partnership / Business</option>
              </select>
            </div>

            <div>
              <label className="block text-[13px] font-semibold mb-1.5" style={{ color: 'var(--text-s)' }}>Message</label>
              <textarea value={form.message} onChange={e => update('message', e.target.value)} placeholder="Tell us what's on your mind..."
                rows={5} className="w-full px-4 py-3 rounded-xl text-[14px] outline-none resize-none" style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--text)' }} />
            </div>

            {status === 'error' && (
              <p className="text-[13px] p-3 rounded-lg" style={{ background: '#FDF1EF', color: 'var(--red)' }}>Something went wrong. Please try again or email us at hello@pointsmax.in</p>
            )}

            <button onClick={submit} disabled={status === 'sending' || !form.name || !form.email || !form.message}
              className="w-full py-3 rounded-xl text-[14px] font-semibold transition-all duration-200 disabled:opacity-40"
              style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            <p className="text-[12px] text-center" style={{ color: 'var(--text-m)' }}>
              Or email us directly at <a href="mailto:hello@pointsmax.in" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>hello@pointsmax.in</a>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
