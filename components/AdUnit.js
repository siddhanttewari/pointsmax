'use client'

import { useEffect, useRef, useState } from 'react'

export default function AdUnit({ slot = '1234567890', format = 'auto', className = '' }) {
  const adRef = useRef(null)
  const isLoaded = useRef(false)
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (isLoaded.current) return
    try {
      if (typeof window !== 'undefined' && window.adsbygoogle && window.adsbygoogle.loaded) {
        window.adsbygoogle.push({})
        isLoaded.current = true
        setShow(true)
      }
    } catch (e) {}
  }, [])

  if (!show) return null

  return (
    <div className={`ad-slot my-3 ${className}`}>
      <ins className="adsbygoogle" style={{ display: 'block' }}
        data-ad-client="ca-pub-1805797993522928" data-ad-slot={slot}
        data-ad-format={format} data-full-width-responsive="true" ref={adRef} />
    </div>
  )
}

export function HeaderAd() {
  return <AdUnit slot="HEADER_AD_SLOT" format="horizontal" className="max-w-2xl mx-auto" />
}

export function InFeedAd() {
  return <AdUnit slot="INFEED_AD_SLOT" format="fluid" />
}
