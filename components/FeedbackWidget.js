'use client'

import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import { blog as blogTrack } from '@/lib/analytics'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default function FeedbackWidget({ pageSlug, pageTitle }) {
  const [step, setStep] = useState('idle') // idle | recommend | comment | done
  const [rating, setRating] = useState(null) // 'up' | 'down'
  const [recommend, setRecommend] = useState(null) // 'no' | 'maybe' | 'yes'
  const [comment, setComment] = useState('')
  const [sending, setSending] = useState(false)

  // Step 1: thumbs rating — advances to the recommend question
  const handleRating = (val) => {
    setRating(val)
    setStep('recommend')
    blogTrack.feedbackRate(pageSlug, val)
  }

  // Step 2: would-you-recommend — one tap, then advances to comment
  const handleRecommend = (val) => {
    setRecommend(val)
    setStep('comment')
    blogTrack.feedbackRecommend(pageSlug, val)
  }

  const persist = async (withComment) => {
    return supabase.from('feedback').insert([{
      page_slug: pageSlug,
      page_title: pageTitle,
      rating,
      recommend,
      comment: withComment ? (comment.trim() || null) : null,
    }])
  }

  const submit = async () => {
    setSending(true)
    blogTrack.feedbackComment(pageSlug, rating, !!comment.trim())
    await persist(true)
    setSending(false)
    setStep('done')
  }

  const skip = async () => {
    blogTrack.feedbackComment(pageSlug, rating, false)
    await persist(false)
    setStep('done')
  }

  if (step === 'done') {
    return (
      <div className="mt-10 py-5 text-center" style={{ borderTop: '1px solid var(--border)' }}>
        <p className="text-[15px] font-semibold" style={{ color: 'var(--text)' }}>Thanks for the feedback! 🙏</p>
        <p className="text-[13px] mt-1" style={{ color: 'var(--text-m)' }}>It helps us keep the data accurate and useful.</p>
      </div>
    )
  }

  return (
    <div className="mt-10 pt-8" style={{ borderTop: '1px solid var(--border)' }}>
      {step === 'idle' && (
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-[14px] font-semibold" style={{ color: 'var(--text)' }}>Was this article helpful?</p>
            <p className="text-[12px] mt-0.5" style={{ color: 'var(--text-m)' }}>Your feedback helps us improve.</p>
          </div>
          <div className="flex gap-2">
            <button onClick={() => handleRating('up')}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-[13px] font-semibold transition-all duration-200"
              style={{ background: '#EDF5F0', color: 'var(--green)', border: '1px solid #C8DDD0' }}
              onMouseEnter={e => e.currentTarget.style.background = '#D8EDE3'}
              onMouseLeave={e => e.currentTarget.style.background = '#EDF5F0'}>
              👍 Yes
            </button>
            <button onClick={() => handleRating('down')}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-[13px] font-semibold transition-all duration-200"
              style={{ background: '#FDF1EF', color: 'var(--red)', border: '1px solid #E8C5BF' }}
              onMouseEnter={e => e.currentTarget.style.background = '#F5E0DC'}
              onMouseLeave={e => e.currentTarget.style.background = '#FDF1EF'}>
              👎 No
            </button>
          </div>
        </div>
      )}

      {step === 'recommend' && (
        <div style={{ animation: 'fadeUp 0.3s ease both' }}>
          <p className="text-[14px] font-semibold mb-1" style={{ color: 'var(--text)' }}>
            {rating === 'up' ? '👍 Glad it helped!' : '👍 Thanks for the honesty.'}
          </p>
          <p className="text-[14px] mb-3" style={{ color: 'var(--text-s)' }}>Would you recommend PointsMax to a friend?</p>
          <div className="flex flex-wrap gap-2">
            {[
              { key: 'no', label: '👎 Not really', bg: '#FDF1EF', bd: '#E8C5BF', fg: 'var(--red)' },
              { key: 'maybe', label: '🤷 Maybe', bg: 'var(--bg-s)', bd: 'var(--border)', fg: 'var(--text-s)' },
              { key: 'yes', label: '🙌 Definitely', bg: '#EDF5F0', bd: '#C8DDD0', fg: 'var(--green)' },
            ].map(o => (
              <button key={o.key} onClick={() => handleRecommend(o.key)}
                className="px-4 py-2 rounded-xl text-[13px] font-semibold transition-all duration-200"
                style={{ background: o.bg, color: o.fg, border: `1px solid ${o.bd}` }}>
                {o.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 'comment' && (
        <div style={{ animation: 'fadeUp 0.3s ease both' }}>
          <p className="text-[14px] font-semibold mb-3" style={{ color: 'var(--text)' }}>
            {rating === 'up' ? 'One last thing —' : 'One last thing —'}
            {' '}<span style={{ color: 'var(--text-s)', fontWeight: 400 }}>
              {rating === 'up' ? 'anything we could improve? (optional)' : 'what was missing or wrong? (optional)'}
            </span>
          </p>
          <textarea value={comment} onChange={e => setComment(e.target.value)}
            placeholder={rating === 'up' ? 'Any suggestions? (optional)' : 'Tell us what was wrong or missing...'}
            rows={3} className="w-full px-4 py-3 rounded-xl text-[14px] outline-none resize-none"
            style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--text)' }} />
          <div className="flex gap-2 mt-3">
            <button onClick={submit} disabled={sending}
              className="px-5 py-2 rounded-xl text-[13px] font-semibold disabled:opacity-40"
              style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
              {sending ? 'Sending...' : 'Send feedback'}
            </button>
            <button onClick={skip}
              className="px-5 py-2 rounded-xl text-[13px]"
              style={{ background: 'var(--bg-s)', color: 'var(--text-m)', border: '1px solid var(--border)' }}>
              Skip
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
