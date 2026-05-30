'use client'

import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'

const TABS = [
  {
    id: 'home', label: 'Calculator', href: '/',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h5l3-9 4 18 3-9h5"/></svg>,
    match: p => p === '/',
  },
  {
    id: 'tools', label: 'Tools', href: '/tools/card-quiz',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="8" height="8" rx="1"/><rect x="14" y="3" width="8" height="8" rx="1"/><rect x="14" y="13" width="8" height="8" rx="1"/><rect x="2" y="13" width="8" height="8" rx="1"/></svg>,
    match: p => p.startsWith('/tools') || p === '/search',
  },
  {
    id: 'transfers', label: 'Transfers', href: '/transfers',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 1l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>,
    match: p => p === '/transfers',
  },
  {
    id: 'learn', label: 'Learn', href: '/blog',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
    match: p => p.startsWith('/blog'),
  },
  {
    id: 'ask', label: 'Ask', href: null,
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
    match: () => false,
  },
]

// All non-home pages get a Back button
function getBack(pathname) {
  if (pathname === '/') return null
  if (pathname === '/blog') return { label: 'Home', href: '/' }
  if (pathname.startsWith('/blog/')) return { label: 'Learn', href: '/blog' }
  if (pathname === '/transfers') return { label: 'Home', href: '/' }
  if (pathname === '/tools/card-quiz') return { label: 'Home', href: '/' }
  if (pathname === '/tools/breakeven') return { label: 'Tools', href: '/tools/card-quiz' }
  if (pathname === '/tools/expiry-reminder') return { label: 'Tools', href: '/tools/card-quiz' }
  if (pathname === '/search') return { label: 'Home', href: '/' }
  return { label: 'Home', href: '/' }
}

const BACK_ICON = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/>
  </svg>
)

export default function MobileNav() {
  const pathname = usePathname()
  const router = useRouter()
  const [chatOpen, setChatOpen] = useState(false)

  useEffect(() => {
    const handler = () => setChatOpen(p => !p)
    window.addEventListener('pm-toggle-chat', handler)
    return () => window.removeEventListener('pm-toggle-chat', handler)
  }, [])

  const back = getBack(pathname)
  const activeId = TABS.find(t => t.match(pathname))?.id || 'home'

  // On non-home pages: show Back + 4 tabs (skip Calculator)
  // On home: show all 5 tabs
  const visibleTabs = back
    ? TABS.filter(t => t.id !== 'home')
    : TABS

  const handleBack = () => {
    if (window.history.length > 1) router.back()
    else router.push(back?.href || '/')
    if (window.gtag) window.gtag('event', 'fab_back_click', { from: pathname })
  }

  const handleTab = (tab) => {
    if (window.gtag) window.gtag('event', 'fab_nav_click', { tab: tab.id, from: pathname })
    if (tab.id === 'ask') {
      window.dispatchEvent(new CustomEvent('pm-toggle-chat'))
    } else {
      router.push(tab.href)
    }
  }

  const btnStyle = (isActive, isBack = false) => ({
    padding: '9px 4px 8px',
    flex: isBack ? '0 0 auto' : 1,
    minWidth: isBack ? '52px' : 0,
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    justifyContent: 'center', gap: '3px',
    borderRadius: '13px',
    border: isActive ? '1px solid rgba(184,149,62,0.3)' : '1px solid transparent',
    background: isActive ? 'rgba(184,149,62,0.15)' : 'transparent',
    color: isActive ? '#B8953E' : isBack ? 'rgba(250,248,245,0.65)' : 'rgba(250,248,245,0.38)',
    transition: 'all 0.15s',
    cursor: 'pointer',
  })

  const labelStyle = {
    fontSize: '9px', fontWeight: 700,
    textTransform: 'uppercase', letterSpacing: '0.06em',
    lineHeight: 1,
  }

  return (
    <>
      <div className="sm:hidden fixed bottom-5 left-4 right-4 z-[60]"
        style={{ filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.4))' }}>
        <div style={{
          background: '#1A1614',
          border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: '18px',
          padding: '5px',
          display: 'flex',
          alignItems: 'stretch',
          gap: '2px',
        }}>
          {/* Back button */}
          {back && (
            <button onClick={handleBack} style={btnStyle(false, true)}>
              {BACK_ICON}
              <span style={labelStyle}>Back</span>
            </button>
          )}

          {/* Nav tabs */}
          {visibleTabs.map(tab => {
            const isActive = tab.id === activeId || (tab.id === 'ask' && chatOpen)
            return (
              <button key={tab.id} onClick={() => handleTab(tab)} style={btnStyle(isActive)}>
                {tab.icon}
                <span style={labelStyle}>{tab.label}</span>
              </button>
            )
          })}
        </div>
      </div>
      <div className="sm:hidden" style={{ height: '84px' }} />
    </>
  )
}
