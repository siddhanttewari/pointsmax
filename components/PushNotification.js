'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { push as pushTrack } from '@/lib/analytics'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default function PushNotificationBanner() {
  const [status, setStatus] = useState('idle') // idle | asking | granted | denied | unsupported
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!('Notification' in window) || !('serviceWorker' in navigator)) {
      setStatus('unsupported')
      return
    }
    if (Notification.permission === 'granted') setStatus('granted')
    if (Notification.permission === 'denied') setStatus('denied')

    // Register service worker
    navigator.serviceWorker.register('/sw.js').catch(() => {})

    // Don't show if dismissed before
    if (localStorage.getItem('pm_push_dismissed')) setDismissed(true)
    else pushTrack.shown()
  }, [])

  const requestPermission = async () => {
    setStatus('asking')
    const permission = await Notification.requestPermission()
    if (permission === 'granted') {
      setStatus('granted')
      pushTrack.accepted()
      // Save subscription to Supabase for future server-side pushes
      try {
        const reg = await navigator.serviceWorker.ready
        const sub = await reg.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
        })
        await supabase.from('push_subscriptions').insert([{
          subscription: JSON.stringify(sub),
          created_at: new Date().toISOString(),
        }])
      } catch (e) {
        // VAPID key not set up yet — permission granted but no server push
        console.log('Push subscription saved locally only')
      }
    } else {
      setStatus('denied')
      pushTrack.declined()
    }
  }

  const dismiss = () => {
    pushTrack.dismissed()
    setDismissed(true)
    localStorage.setItem('pm_push_dismissed', '1')
  }

  // Don't show if already granted, denied, unsupported, or dismissed
  if (dismissed || status === 'granted' || status === 'denied' || status === 'unsupported') return null

  return (
    <div className="fixed bottom-20 left-4 right-4 sm:left-auto sm:right-5 sm:w-80 z-50 rounded-2xl shadow-lg p-4"
      style={{ background: 'var(--dark)', border: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-xl grid place-items-center shrink-0" style={{ background: 'rgba(184,149,62,0.15)' }}>
          🔔
        </div>
        <div className="flex-1">
          <p className="text-[13px] font-semibold" style={{ color: '#FAF8F5' }}>
            Get devaluation alerts
          </p>
          <p className="text-[12px] mt-0.5" style={{ color: 'rgba(250,248,245,0.5)' }}>
            Be the first to know when banks change reward rates.
          </p>
          <div className="flex gap-2 mt-3">
            <button onClick={requestPermission} disabled={status === 'asking'}
              className="flex-1 py-1.5 rounded-lg text-[12px] font-semibold"
              style={{ background: 'var(--gold)', color: 'var(--dark)' }}>
              {status === 'asking' ? 'Enabling...' : 'Enable alerts'}
            </button>
            <button onClick={dismiss} className="px-3 py-1.5 rounded-lg text-[12px]"
              style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(250,248,245,0.5)' }}>
              No thanks
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
