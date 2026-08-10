'use client'

import { crossPromo } from '@/lib/analytics'

/**
 * Cross-promotion to OverlapIQ (the sibling "Decoder" money tool).
 * Placed on PointsMax to measure real audience overlap before any domain merge.
 *
 * Props:
 *  - placement: where this instance sits (e.g. 'homepage', 'blog', 'tool') — for analytics
 *  - variant: 'card' (default, full) | 'compact' (slim inline strip)
 */
export default function CrossPromo({ placement = 'unknown', variant = 'card' }) {
  const href = 'https://www.overlapiq.in/?utm_source=pointsmax&utm_medium=crosspromo&utm_campaign=' + placement
  const onClick = () => crossPromo.click('overlapiq', placement)

  if (variant === 'compact') {
    return (
      <a href={href} target="_blank" rel="noopener" onClick={onClick}
        className="flex items-center justify-between gap-3 p-3 rounded-xl transition-all duration-200"
        style={{ background: 'var(--bg-s)', border: '1px solid var(--border)' }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)' }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)' }}>
        <div className="flex items-center gap-2.5">
          <span className="text-[18px]">📊</span>
          <div>
            <p className="text-[13px] font-semibold" style={{ color: 'var(--text)' }}>Also invest in mutual funds? Check your overlap free</p>
            <p className="text-[11px]" style={{ color: 'var(--text-m)' }}>OverlapIQ — spot duplicate holdings across your funds</p>
          </div>
        </div>
        <span className="text-[12px] font-semibold shrink-0" style={{ color: 'var(--gold)' }}>Open →</span>
      </a>
    )
  }

  return (
    <div className="rounded-2xl p-5" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[10px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded" style={{ color: 'var(--gold)', background: 'rgba(184,149,62,0.08)' }}>More from Decoder</span>
      </div>
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <p className="text-[16px] font-semibold" style={{ color: 'var(--text)', fontFamily: 'Playfair Display, serif' }}>
            Also invest in mutual funds? See how they overlap.
          </p>
          <p className="text-[13px] mt-1.5" style={{ color: 'var(--text-s)', lineHeight: 1.5 }}>
            <span style={{ fontWeight: 600, color: 'var(--text)' }}>OverlapIQ</span> is our free tool that compares holdings across 130+ Indian mutual funds — so you can spot duplicate stocks, find concentrated bets, and stop paying two expense ratios for the same exposure.
          </p>
          <a href={href} target="_blank" rel="noopener" onClick={onClick}
            className="inline-flex items-center gap-1.5 mt-4 px-5 py-2.5 rounded-xl text-[13px] font-semibold"
            style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            📊 Check your fund overlap free →
          </a>
        </div>
      </div>
      <p className="text-[11px] mt-3" style={{ color: 'var(--text-m)' }}>Same team behind PointsMax. Free, no signup — just the real numbers.</p>
    </div>
  )
}
