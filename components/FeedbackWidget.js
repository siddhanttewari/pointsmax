'use client'

import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import { blog as blogTrack } from '@/lib/analytics'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default function FeedbackWidget({ pageSlug, pageTitle }) {
  const [step, setStep] = useState('idle') // idle | comment | done
  const [rating, setRating] = useState(null) // 'up' | 'down'
  const [comment, setComment] = useState('')
  const [sending, setSending] = useState(false)

  const handleRating = async (val) => {
    setRating(val)
    setStep('comment')
    blogTrack.feedbackRate(pageSlug, val)
  }

  const submit = async () => {
    setSending(true)
    blogTrack.feedbackComment(pageSlug, rating, !!comment.trim())
    await supabase.from('feedback').insert([{
      page_slug: pageSlug,
      page_title: pageTitle,
      rating,
      comment: comment.trim() || null,
    }])
    setSending(false)
    setStep('done')
  }

  const skip = async () => {
    blogTrack.feedbackComment(pageSlug, rating, false)
    await supabase.from('feedback').insert([{
      page_slug: pageSlug,
      page_title: pageTitle,
      rating,
      comment: null,
    }])
    setStep('done')
  }

  if (step === 'done') {
    return (
      <div className="mt-10 py-5 text-center" style={{ borderTop: '1px solid var(--border)' }}>
        <p className="text-[15px] font-semibold" style={{ color: 'var(--text)' }}>Thanks for the feedback! 🙏</p>
        <p className="text-[13px] mt-1" style={{ color: 'var(--text-m)' }}>It helps us keep the data accurate.</p>
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

      {step === 'comment' && (
        <div style={{ animation: 'fadeUp 0.3s ease both' }}>
          <p className="text-[14px] font-semibold mb-3" style={{ color: 'var(--text)' }}>
            {rating === 'up' ? '👍 Glad it helped!' : '👎 Sorry to hear that.'}
            {' '}<span style={{ color: 'var(--text-s)', fontWeight: 400 }}>
              {rating === 'up' ? 'Anything we could improve?' : 'What was missing or wrong?'}
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
