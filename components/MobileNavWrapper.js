'use client'
import dynamic from 'next/dynamic'
const MobileNav = dynamic(() => import('./MobileNav'), { ssr: false })
export default function MobileNavWrapper() {
  return <MobileNav />
}
