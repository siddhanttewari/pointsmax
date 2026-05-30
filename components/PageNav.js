'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function PageNav({ showSearch = true }) {
  const router = useRouter()
  const [searchOpen, setSearchOpen] = useState(false)
  const [q, setQ] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    if (q.trim()) {
      router.push(`/search?q=${encodeURIComponent(q.trim())}`)
      setSearchOpen(false)
      setQ('')
    }
  }

  return (
    <nav className="sticky top-0 z-50" style={{ background: 'var(--dark)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-2xl mx-auto flex items-center justify-between px-5 py-3.5 gap-3">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="w-7 h-7 rounded-lg grid place-items-center" style={{ background: 'var(--gold)' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1A1614" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12h5l3-9 4 18 3-9h5"/>
            </svg>
          </div>
          <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '17px', color: '#FAF8F5', letterSpacing: '-0.01em' }}>
            PointsMax
          </span>
        </a>

        {/* Right side */}
        <div className="flex items-center gap-2">

          {/* Inline search — expands on click (mobile + desktop) */}
          {showSearch && (
            <>
              {searchOpen ? (
                <form onSubmit={handleSearch} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={q}
                    onChange={e => setQ(e.target.value)}
                    autoFocus
                    placeholder="Search PointsMax..."
                    className="rounded-lg px-3 py-1.5 text-[13px] outline-none w-[180px] sm:w-[240px]"
                    style={{ background: 'rgba(255,255,255,0.1)', color: '#FAF8F5', border: '1px solid rgba(255,255,255,0.15)' }}
                    onBlur={() => { if (!q.trim()) setSearchOpen(false) }}
                  />
                  <button type="submit" className="p-1.5 rounded-lg" style={{ background: 'var(--gold)' }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1A1614" strokeWidth="2.5" strokeLinecap="round">
                      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
                    </svg>
                  </button>
                </form>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  className="w-8 h-8 grid place-items-center rounded-lg transition-colors"
                  style={{ background: 'rgba(255,255,255,0.08)' }}
                  aria-label="Search">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(250,248,245,0.7)" strokeWidth="2" strokeLinecap="round">
                    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
                  </svg>
                </button>
              )}
            </>
          )}

          {/* Desktop nav links — hidden on mobile (FAB handles it) */}
          <div className="hidden sm:flex items-center gap-1 ml-2">
            <a href="/tools/card-quiz" className="px-3 py-1.5 rounded-lg text-[12px] font-medium transition-colors"
              style={{ color: 'rgba(250,248,245,0.55)' }}
              onMouseEnter={e => e.currentTarget.style.color = '#FAF8F5'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(250,248,245,0.55)'}>
              Tools
            </a>
            <a href="/transfers" className="px-3 py-1.5 rounded-lg text-[12px] font-medium transition-colors"
              style={{ color: 'rgba(250,248,245,0.55)' }}
              onMouseEnter={e => e.currentTarget.style.color = '#FAF8F5'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(250,248,245,0.55)'}>
              Transfers
            </a>
            <a href="/blog" className="px-3 py-1.5 rounded-lg text-[12px] font-medium transition-colors"
              style={{ color: 'rgba(250,248,245,0.55)' }}
              onMouseEnter={e => e.currentTarget.style.color = '#FAF8F5'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(250,248,245,0.55)'}>
              Learn
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
