'use client'

import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'

const TABS = [
  {
    id: 'home',
    label: 'Calculator',
    href: '/',
    match: (p) => p === '/',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12h5l3-9 4 18 3-9h5"/>
      </svg>
    ),
  },
  {
    id: 'tools',
    label: 'Tools',
    href: '/tools/card-quiz',
    match: (p) => p.startsWith('/tools') || p === '/search',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="8" height="8" rx="1"/>
        <rect x="14" y="3" width="8" height="8" rx="1"/>
        <rect x="14" y="13" width="8" height="8" rx="1"/>
        <rect x="2" y="13" width="8" height="8" rx="1"/>
      </svg>
    ),
  },
  {
    id: 'transfers',
    label: 'Transfers',
    href: '/transfers',
    match: (p) => p === '/transfers',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 1l4 4-4 4"/>
        <path d="M3 11V9a4 4 0 0 1 4-4h14"/>
        <path d="M7 23l-4-4 4-4"/>
        <path d="M21 13v2a4 4 0 0 1-4 4H3"/>
      </svg>
    ),
  },
  {
    id: 'learn',
    label: 'Learn',
    href: '/blog',
    match: (p) => p.startsWith('/blog'),
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
  },
  {
    id: 'ask',
    label: 'Ask',
    href: null,
    match: () => false,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
]

// Pages that are "deep" — show a back button instead of logo
function getPageMeta(pathname) {
  if (pathname.startsWith('/blog/')) {
    return { isDeep: true, backLabel: 'All Guides', backHref: '/blog' }
  }
  if (pathname === '/tools/card-quiz') {
    return { isDeep: true, backLabel: 'Tools', backHref: '/tools/card-quiz' }
  }
  if (pathname === '/tools/breakeven') {
    return { isDeep: true, backLabel: 'Tools', backHref: '/tools/card-quiz' }
  }
  if (pathname === '/tools/expiry-reminder') {
    return { isDeep: true, backLabel: 'Tools', backHref: '/tools/card-quiz' }
  }
  if (pathname === '/search') {
    return { isDeep: false, backLabel: null, backHref: null }
  }
  return { isDeep: false, backLabel: null, backHref: null }
}

export default function MobileNav() {
  const pathname = usePathname()
  const router = useRouter()
  const [chatOpen, setChatOpen] = useState(false)
  const [canGoBack, setCanGoBack] = useState(false)

  const activeTab = TABS.find(t => t.match(pathname))?.id || 'home'
  const { isDeep, backLabel, backHref } = getPageMeta(pathname)

  useEffect(() => {
    // Check if there's real history to go back to
    setCanGoBack(window.history.length > 1)
  }, [pathname])

  // Sync chat state with chatbot component
  useEffect(() => {
    const handler = () => setChatOpen(prev => !prev)
    window.addEventListener('pm-chat-state', handler)
    return () => window.removeEventListener('pm-chat-state', handler)
  }, [])

  const handleBack = () => {
    if (canGoBack) {
      router.back()
    } else {
      router.push(backHref || '/')
    }
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'fab_back_click', { from: pathname })
    }
  }

  const handleTab = (tab) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'fab_nav_click', { tab: tab.id, destination: tab.href || 'chat', from: pathname })
    }
    if (tab.id === 'ask') {
      window.dispatchEvent(new CustomEvent('pm-toggle-chat'))
      setChatOpen(prev => !prev)
    } else {
      router.push(tab.href)
    }
  }

  return (
    <>
      {/* ── FLOATING ACTION BAR ── */}
      <div className="sm:hidden fixed bottom-5 left-4 right-4 z-50"
        style={{ filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.35))' }}>
        <div className="flex items-center rounded-[18px]"
          style={{
            background: '#1A1614',
            border: '1px solid rgba(255,255,255,0.1)',
            padding: '5px',
            gap: '2px',
          }}>

          {/* Back button — shown on deep pages instead of Calculator tab */}
          {isDeep ? (
            <button
              onClick={handleBack}
              className="flex flex-col items-center justify-center gap-1 rounded-[13px] transition-all duration-200"
              style={{
                padding: '9px 4px 8px',
                minWidth: '56px',
                color: 'rgba(250,248,245,0.7)',
                border: '1px solid transparent',
              }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/>
              </svg>
              <span style={{ fontSize: '9px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', lineHeight: 1 }}>
                Back
              </span>
            </button>
          ) : null}

          {/* Regular tabs — skip Calculator on deep pages (replaced by Back) */}
          {TABS.filter(t => isDeep ? t.id !== 'home' : true).map(tab => {
            const isActive = tab.id === activeTab || (tab.id === 'ask' && chatOpen)
            return (
              <button
                key={tab.id}
                onClick={() => handleTab(tab)}
                className="flex-1 flex flex-col items-center justify-center gap-1 rounded-[13px] transition-all duration-200"
                style={{
                  padding: '9px 4px 8px',
                  background: isActive ? 'rgba(184,149,62,0.18)' : 'transparent',
                  color: isActive ? '#B8953E' : 'rgba(250,248,245,0.38)',
                  border: isActive ? '1px solid rgba(184,149,62,0.25)' : '1px solid transparent',
                }}>
                {tab.icon}
                <span style={{ fontSize: '9px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', lineHeight: 1 }}>
                  {tab.label}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Spacer — prevents content hiding behind FAB */}
      <div className="sm:hidden h-24" />
    </>
  )
}
