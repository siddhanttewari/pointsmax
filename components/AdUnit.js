'use client'

import { useEffect, useRef } from 'react'

// AdSense ad unit component
// Replace data-ad-slot with your actual ad slot IDs from AdSense dashboard
export default function AdUnit({ slot = '1234567890', format = 'auto', className = '' }) {
  const adRef = useRef(null)
  const isLoaded = useRef(false)

  useEffect(() => {
    if (isLoaded.current) return
    try {
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        window.adsbygoogle.push({})
        isLoaded.current = true
      }
    } catch (e) {
      // AdSense not loaded yet — that's fine in dev
    }
  }, [])

  return (
    <div className={`ad-slot my-4 ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-1805797993522928"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
        ref={adRef}
      />
      {/* Fallback text shown until AdSense loads */}
      <noscript>
        <span className="text-xs text-zinc-600">Advertisement</span>
      </noscript>
    </div>
  )
}

// Specific ad placements
export function HeaderAd() {
  return <AdUnit slot="HEADER_AD_SLOT" format="horizontal" className="max-w-2xl mx-auto" />
}

export function InFeedAd() {
  return <AdUnit slot="INFEED_AD_SLOT" format="fluid" />
}

export function StickyFooterAd() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-surface-0/90 backdrop-blur-sm border-t border-white/5 p-2">
      <AdUnit slot="FOOTER_AD_SLOT" format="horizontal" className="max-w-2xl mx-auto !my-0" />
    </div>
  )
}
