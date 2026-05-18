'use client'

import { useState, useEffect, useMemo, useRef } from 'react'
import { getCards, getRedemptions, getTransferPartners } from '@/lib/supabase'
// import { AuthGate, UserMenu, useAuth } from '@/components/AuthGate'
import { HeaderAd, InFeedAd } from '@/components/AdUnit'

const BANK_META = {
  HDFC: { dot: '#6366f1' },
  Axis: { dot: '#ec4899' },
  SBI: { dot: '#10b981' },
  ICICI: { dot: '#f97316' },
  'IDFC FIRST': { dot: '#84cc16' },
  Amex: { dot: '#06b6d4' },
  IndusInd: { dot: '#a855f7' },
  Kotak: { dot: '#eab308' },
  Federal: { dot: '#94a3b8' },
}

const RANK_CONFIG = {
  1: { label: 'BEST VALUE', color: '#4ade80', bg: 'rgba(74,222,128,0.08)', border: 'rgba(74,222,128,0.15)' },
  2: { label: 'GOOD', color: '#fbbf24', bg: 'rgba(251,191,36,0.06)', border: 'rgba(251,191,36,0.1)' },
  3: { label: 'OKAY', color: '#fb923c', bg: 'rgba(251,146,60,0.06)', border: 'rgba(251,146,60,0.1)' },
  4: { label: 'AVOID', color: '#f87171', bg: 'rgba(248,113,113,0.06)', border: 'rgba(248,113,113,0.1)' },
}

const ALLIANCE_STYLE = {
  'Star Alliance': { color: '#fbbf24', bg: 'rgba(251,191,36,0.1)' },
  'Oneworld': { color: '#f87171', bg: 'rgba(248,113,113,0.1)' },
  'SkyTeam': { color: '#60a5fa', bg: 'rgba(96,165,250,0.1)' },
  'Multi': { color: '#c084fc', bg: 'rgba(192,132,252,0.1)' },
  'LCC': { color: '#94a3b8', bg: 'rgba(148,163,184,0.08)' },
}

function trackEvent(name, params = {}) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', name, params)
  }
}

export default function Home() {
  const [cards, setCards] = useState([])
  const [selectedSlug, setSelectedSlug] = useState('')
  const [points, setPoints] = useState('')
  const [redemptions, setRedemptions] = useState([])
  const [transfers, setTransfers] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [bankFilter, setBankFilter] = useState('All')
  const [activeTab, setActiveTab] = useState('redeem')
  const [loading, setLoading] = useState(true)
  const resultsRef = useRef(null)

  // const { user } = useAuth() // Auth disabled for now

  useEffect(() => {
    getCards().then(data => {
      setCards(data || [])
      setLoading(false)
    }).catch(() => setLoading(false))
  }, [])

  useEffect(() => {
    if (!selectedSlug) return
    setActiveTab('redeem')
    Promise.all([
      getRedemptions(selectedSlug),
      getTransferPartners(selectedSlug),
    ]).then(([r, t]) => {
      setRedemptions(r || [])
      setTransfers(t || [])
    })
    trackEvent('select_card', { card: selectedSlug })
  }, [selectedSlug])

  useEffect(() => {
    if (redemptions.length > 0 && parseInt(points) > 0 && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [redemptions, points])

  const banks = useMemo(() => ['All', ...new Set(cards.map(c => c.bank))], [cards])
  const selectedCard = cards.find(c => c.slug === selectedSlug)
  const pts = parseInt(points) || 0
  const bm = selectedCard ? BANK_META[selectedCard.bank] || BANK_META['Federal'] : null

  const filteredCards = useMemo(() => {
    return cards.filter(c => {
      const matchBank = bankFilter === 'All' || c.bank === bankFilter
      const matchSearch = !searchQuery || c.name.toLowerCase().includes(searchQuery.toLowerCase())
      return matchBank && matchSearch
    })
  }, [cards, bankFilter, searchQuery])

  const airlineTransfers = transfers.filter(t => t.partner_type === 'airline')
  const hotelTransfers = transfers.filter(t => t.partner_type === 'hotel')
  // Auth gating removed — all content shown freely
  const bestVal = redemptions[0]?.value_per_point || 0
  const worstVal = redemptions[redemptions.length - 1]?.value_per_point || 0

  return (
    <div className="min-h-screen bg-[#060608]">
      {/* Noise */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }} />

      {/* Nav */}
      <nav className="sticky top-0 z-50" style={{
        background: 'rgba(6,6,8,0.7)',
        backdropFilter: 'blur(20px) saturate(180%)',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
      }}>
        <div className="max-w-3xl mx-auto flex items-center justify-between px-5 py-3.5">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-400 grid place-items-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h5l3-9 4 18 3-9h5" /></svg>
            </div>
            <span style={{ fontFamily: 'Bricolage Grotesque, sans-serif', fontWeight: 700, fontSize: '17px', letterSpacing: '-0.02em' }}>PointsMax</span>
          </div>
          {/* <UserMenu /> */}
        </div>
      </nav>

      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-20 blur-[100px]"
          style={{ background: 'radial-gradient(circle, rgba(52,211,153,0.3), rgba(6,182,212,0.15), transparent 70%)' }} />
        <div className="relative max-w-3xl mx-auto px-5 pt-16 pb-10">
          <div className="flex items-center justify-center gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase"
              style={{ background: 'rgba(52,211,153,0.08)', color: '#6ee7b7', border: '1px solid rgba(52,211,153,0.12)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Updated May 2026
            </span>
          </div>
          <h1 className="text-center" style={{
            fontFamily: 'Bricolage Grotesque, sans-serif', fontWeight: 800,
            fontSize: 'clamp(28px, 5vw, 44px)', lineHeight: 1.1, letterSpacing: '-0.03em',
          }}>
            <span style={{ background: 'linear-gradient(135deg, #e2e8f0 0%, #6ee7b7 40%, #67e8f9 60%, #a5b4fc 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Stop Wasting Your{' '}
            </span>
            <br className="sm:hidden" />
            <span style={{ background: 'linear-gradient(135deg, #67e8f9 0%, #c4b5fd 50%, #fbbf24 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Credit Card Points
            </span>
          </h1>
          <p className="text-center mt-4 text-[15px] leading-relaxed max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Find the <strong style={{ color: 'rgba(255,255,255,0.65)' }}>highest-value redemption</strong> for your points.
            Compare 25+ Indian cards with airline &amp; hotel transfer partners.
          </p>
          <div className="flex items-center justify-center gap-6 mt-6">
            {['25+ Cards', 'Live Data', 'Free Forever'].map(t => (
              <span key={t} className="text-[11px] font-medium" style={{ color: 'rgba(255,255,255,0.25)' }}>{t}</span>
            ))}
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-5"><HeaderAd /></div>

      <main className="max-w-3xl mx-auto px-5 pb-32 relative z-10">
        {/* Card Selector */}
        <section className="mt-8">
          <label className="block text-[13px] font-semibold mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>Select your card</label>
          <div className="flex gap-1.5 flex-wrap mb-3">
            {banks.map(b => {
              const active = bankFilter === b
              const meta = BANK_META[b]
              return (
                <button key={b} onClick={() => setBankFilter(b)}
                  className="px-3 py-1.5 rounded-lg text-[12px] font-medium transition-all duration-200"
                  style={{ background: active ? 'rgba(255,255,255,0.08)' : 'transparent', color: active ? '#fff' : 'rgba(255,255,255,0.3)', border: '1px solid ' + (active ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.04)') }}>
                  {meta && b !== 'All' && <span className="inline-block w-2 h-2 rounded-full mr-1.5" style={{ background: meta.dot, opacity: active ? 1 : 0.4 }} />}
                  {b}
                </button>
              )
            })}
          </div>
          <div className="relative mb-3">
            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: 'rgba(255,255,255,0.2)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
            <input type="text" placeholder="Search by card name…" value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl text-[14px] outline-none transition-all duration-200"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', color: '#e2e8f0' }}
              onFocus={e => e.target.style.borderColor = 'rgba(255,255,255,0.15)'}
              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.06)'} />
          </div>

          {loading ? (
            <div className="space-y-2">{[1,2,3,4,5].map(i => <div key={i} className="h-16 rounded-xl animate-pulse" style={{ background: 'rgba(255,255,255,0.03)' }} />)}</div>
          ) : (
            <div className="max-h-[360px] overflow-y-auto space-y-1.5 pr-1">
              {filteredCards.map(c => {
                const meta = BANK_META[c.bank] || BANK_META['Federal']
                const sel = selectedSlug === c.slug
                return (
                  <button key={c.slug} onClick={() => setSelectedSlug(c.slug)}
                    className="w-full flex items-center gap-3.5 p-3.5 rounded-xl text-left transition-all duration-200"
                    style={{ background: sel ? 'rgba(255,255,255,0.06)' : 'transparent', border: '1px solid ' + (sel ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.02)') }}
                    onMouseEnter={e => { if (!sel) e.currentTarget.style.background = 'rgba(255,255,255,0.03)' }}
                    onMouseLeave={e => { if (!sel) e.currentTarget.style.background = sel ? 'rgba(255,255,255,0.06)' : 'transparent' }}>
                    <div className="w-10 h-10 rounded-xl grid place-items-center shrink-0" style={{ background: 'linear-gradient(135deg, ' + meta.dot + '22, ' + meta.dot + '08)', border: '1px solid ' + meta.dot + '20' }}>
                      <span className="text-[11px] font-bold" style={{ color: meta.dot }}>{c.bank.slice(0, 3)}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[14px] font-semibold truncate" style={{ color: sel ? '#fff' : 'rgba(255,255,255,0.75)' }}>{c.name}</p>
                      <p className="text-[12px] truncate mt-0.5" style={{ color: 'rgba(255,255,255,0.3)' }}>{c.earn_rate}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      {c.has_transfers && <span className="text-[10px] px-1.5 py-0.5 rounded" style={{ color: '#67e8f9', background: 'rgba(103,232,249,0.08)' }}>✈ Transfers</span>}
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded" style={{ color: 'rgba(255,255,255,0.25)', background: 'rgba(255,255,255,0.03)' }}>{c.tier}</span>
                    </div>
                  </button>
                )
              })}
              {filteredCards.length === 0 && <p className="text-center py-12 text-[14px]" style={{ color: 'rgba(255,255,255,0.2)' }}>No cards match your search</p>}
            </div>
          )}
        </section>

        {/* Points Input */}
        {selectedCard && (
          <section className="mt-8" style={{ animation: 'fadeUp 0.35s ease both' }}>
            <label className="block text-[13px] font-semibold mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>
              How many {selectedCard.point_name} do you have?
            </label>
            <div className="relative">
              <input type="number" placeholder="e.g. 10000" value={points}
                onChange={e => { setPoints(e.target.value); trackEvent('enter_points', { card: selectedSlug, points: e.target.value }) }}
                className="w-full py-4 px-5 rounded-2xl text-center text-[28px] font-mono font-bold outline-none transition-all duration-200"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', color: '#fff', letterSpacing: '0.02em' }}
                onFocus={e => e.target.style.borderColor = 'rgba(52,211,153,0.3)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.06)'} />
              {pts > 0 && <p className="absolute -bottom-5 left-0 right-0 text-center text-[12px]" style={{ color: 'rgba(255,255,255,0.25)' }}>{pts.toLocaleString('en-IN')} {selectedCard.point_name}</p>}
            </div>
          </section>
        )}

        {/* Results */}
        {selectedCard && pts > 0 && redemptions.length > 0 && (
          <section ref={resultsRef} className="mt-12" style={{ animation: 'fadeUp 0.4s ease both' }}>
            {/* Hero result card */}
            <div className="rounded-2xl p-6 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, ' + bm.dot + '10, rgba(255,255,255,0.02))', border: '1px solid ' + bm.dot + '18' }}>
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-[60px] opacity-20" style={{ background: bm.dot }} />
              <div className="relative flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.3)' }}>{selectedCard.name}</p>
                  <p className="text-[13px] mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>{pts.toLocaleString('en-IN')} {selectedCard.point_name}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-widest mb-1" style={{ color: '#4ade80' }}>Maximum value</p>
                  <p className="text-[36px] font-mono font-extrabold leading-none" style={{ background: 'linear-gradient(135deg, #4ade80, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    ₹{(pts * bestVal).toLocaleString('en-IN')}
                  </p>
                </div>
              </div>
              <div className="mt-5 p-3.5 rounded-xl" style={{ background: 'rgba(74,222,128,0.06)', border: '1px solid rgba(74,222,128,0.1)' }}>
                <p className="text-[13px]" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  <span style={{ color: '#4ade80' }}>↑ Best:</span> {redemptions[0].method} at <strong style={{ color: '#fff' }}>₹{redemptions[0].value_per_point}/pt</strong>
                </p>
                <p className="text-[12px] mt-1" style={{ color: 'rgba(255,255,255,0.35)' }}>{redemptions[0].tip}</p>
              </div>
              {redemptions.length > 1 && (
                <div className="mt-2 p-3.5 rounded-xl" style={{ background: 'rgba(248,113,113,0.04)', border: '1px solid rgba(248,113,113,0.08)' }}>
                  <p className="text-[12px]" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    <span style={{ color: '#f87171' }}>↓ Worst:</span> {redemptions[redemptions.length - 1].method} = ₹{(pts * worstVal).toLocaleString('en-IN')}
                    <span style={{ color: '#f87171' }}> — you lose ₹{((pts * bestVal) - (pts * worstVal)).toLocaleString('en-IN')}</span>
                  </p>
                </div>
              )}
            </div>

            {/* Tabs */}
            {transfers.length > 0 && (
              <div className="flex mt-6 p-1 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.04)' }}>
                {[{ key: 'redeem', label: 'Redemptions', icon: '💳', count: redemptions.length }, { key: 'transfer', label: 'Transfers', icon: '✈️', count: transfers.length }].map(tab => (
                  <button key={tab.key} onClick={() => { setActiveTab(tab.key); trackEvent('switch_tab', { tab: tab.key }) }}
                    className="flex-1 py-2.5 rounded-lg text-[13px] font-semibold transition-all duration-200 flex items-center justify-center gap-2"
                    style={{ background: activeTab === tab.key ? 'rgba(255,255,255,0.06)' : 'transparent', color: activeTab === tab.key ? '#fff' : 'rgba(255,255,255,0.3)' }}>
                    <span>{tab.icon}</span>{tab.label}
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md" style={{ background: activeTab === tab.key ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.03)', color: activeTab === tab.key ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.2)' }}>{tab.count}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Redemptions Tab */}
            {activeTab === 'redeem' && (
              <div className="mt-4 space-y-2">
                {redemptions.map((r, i) => <RedemptionCard key={r.id} r={r} pts={pts} maxVal={bestVal} delay={i * 60} />)}
                {redemptions.length > 2 && <InFeedAd />}
              </div>
            )}

            {/* Transfer Tab */}
            {activeTab === 'transfer' && transfers.length > 0 && (
                <div className="mt-4" style={{ animation: 'fadeUp 0.3s ease both' }}>
                  <p className="text-[12px] mb-4 leading-relaxed" style={{ color: 'rgba(255,255,255,0.3)' }}>Transfer points to airline/hotel loyalty programs. Best for premium cabin bookings.</p>
                  {airlineTransfers.length > 0 && (
                    <div className="mb-5">
                      <p className="text-[11px] font-bold uppercase tracking-[0.15em] mb-2.5" style={{ color: 'rgba(103,232,249,0.6)' }}>✈️ Airlines ({airlineTransfers.length})</p>
                      <div className="space-y-1.5">{airlineTransfers.map((t, i) => <TransferCard key={t.id} t={t} pts={pts} delay={i * 40} />)}</div>
                    </div>
                  )}
                  {hotelTransfers.length > 0 && (
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.15em] mb-2.5" style={{ color: 'rgba(251,191,36,0.6)' }}>🏨 Hotels ({hotelTransfers.length})</p>
                      <div className="space-y-1.5">{hotelTransfers.map((t, i) => <TransferCard key={t.id} t={t} pts={pts} delay={i * 40} />)}</div>
                    </div>
                  )}
                  <div className="mt-4 p-3.5 rounded-xl" style={{ background: 'rgba(103,232,249,0.04)', border: '1px solid rgba(103,232,249,0.08)' }}>
                    <p className="text-[12px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}><strong style={{ color: '#67e8f9' }}>Pro tip:</strong> Transfer only with a specific booking in mind. Transfers are irreversible.</p>
                  </div>
                </div>
            )}

            {transfers.length === 0 && activeTab === 'transfer' && (
              <p className="mt-4 p-4 rounded-xl text-[13px]" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.3)' }}>This card does not support transfers. Use the redemption options above.</p>
            )}

            <p className="mt-8 text-[10px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.15)' }}>
              <strong>Disclaimer:</strong> Values are approximate, based on publicly available data as of May 2026 (post April 2026 devaluations). Always verify on your bank portal. Not financial advice.
            </p>
          </section>
        )}

        {/* SEO + AEO/GEO Content — answer-first structure, question-based H2s, independently extractable sections */}
        <section className="mt-20 pt-12" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <h2 style={{ fontFamily: 'Bricolage Grotesque, sans-serif', fontWeight: 700, fontSize: '22px', color: 'rgba(255,255,255,0.85)', letterSpacing: '-0.02em' }}>
            How Much Are My Credit Card Reward Points Worth in India?
          </h2>
          <div className="mt-4 text-[14px] leading-[1.75]" style={{ color: 'rgba(255,255,255,0.4)' }}>
            <p>The value of credit card reward points in India ranges from ₹0.10 to ₹1.00 per point, depending on the card and redemption method. HDFC Infinia offers the highest at ₹1/point via SmartBuy travel bookings, while catalogue redemptions typically yield only ₹0.15-0.25/point.</p>
            <p className="mt-3">The same 10,000 points can be worth ₹10,000 or just ₹2,000 — a 5x difference from choosing the right redemption channel. PointsMax calculates the exact rupee value across every method for 25+ Indian cards so you never leave money on the table.</p>
          </div>

          <h2 className="mt-10" style={{ fontFamily: 'Bricolage Grotesque, sans-serif', fontWeight: 700, fontSize: '20px', color: 'rgba(255,255,255,0.8)', letterSpacing: '-0.01em' }}>
            What Is the Best Way to Redeem Credit Card Points in India in 2026?
          </h2>
          <div className="mt-4 text-[14px] leading-[1.75]" style={{ color: 'rgba(255,255,255,0.4)' }}>
            <p>The best way to redeem credit card points in India is through the bank's travel portal for flight and hotel bookings. This consistently delivers the highest per-point value across HDFC, Axis, SBI, ICICI, and Amex cards. Statement credit and product catalogue redemptions offer 40-80% less value.</p>
            <p className="mt-3">For premium cards, transferring points to airline frequent flyer programs like Singapore Airlines KrisFlyer or British Airways Avios can unlock even higher value — especially for business class award bookings where the cash price would be 3-5x what you effectively pay in points.</p>
          </div>

          <h2 className="mt-10" style={{ fontFamily: 'Bricolage Grotesque, sans-serif', fontWeight: 700, fontSize: '20px', color: 'rgba(255,255,255,0.8)', letterSpacing: '-0.01em' }}>
            Credit Card Reward Points Value Per Bank in India (May 2026)
          </h2>
          <div className="mt-4 text-[14px] leading-[1.75]" style={{ color: 'rgba(255,255,255,0.4)' }}>
            <p><strong style={{ color: 'rgba(255,255,255,0.65)' }}>HDFC Bank:</strong> Infinia and Diners Club Black reward points are worth ₹1.00/point when redeemed via SmartBuy for flights, hotels, Tanishq vouchers, or Apple products. Gift vouchers and statement credit yield ₹0.50/point. Product catalogue drops to ₹0.20/point. Regalia and Regalia Gold points are worth ₹0.50/point on SmartBuy.</p>
            <p className="mt-3"><strong style={{ color: 'rgba(255,255,255,0.65)' }}>Axis Bank:</strong> EDGE Reward Points are worth ₹0.20 to ₹0.50/point depending on the card tier. Magnus and Atlas cardholders get the best value at ₹0.50/point via the Travel EDGE portal. Standard Axis cards like Flipkart and ACE get ₹0.20-0.25/point.</p>
            <p className="mt-3"><strong style={{ color: 'rgba(255,255,255,0.65)' }}>SBI Card:</strong> Reward points are worth approximately ₹0.25/point. SBI Elite and SimplyCLICK offer the best redemption via vouchers and travel. Cashback is now capped at ₹2,000 per month as of April 2026.</p>
            <p className="mt-3"><strong style={{ color: 'rgba(255,255,255,0.65)' }}>ICICI Bank:</strong> Reward points are worth ₹0.25/point for most cards. Emeralde cardholders can get ₹0.50/point by converting to InterMiles for premium flight bookings.</p>
            <p className="mt-3"><strong style={{ color: 'rgba(255,255,255,0.65)' }}>American Express:</strong> Membership Rewards points range from ₹0.30 to ₹1.00/point. The highest value comes from transferring to airline partners like British Airways Avios or Singapore Airlines KrisFlyer at 1:1 ratio for premium cabin bookings.</p>
          </div>

          <h2 className="mt-10" style={{ fontFamily: 'Bricolage Grotesque, sans-serif', fontWeight: 700, fontSize: '20px', color: 'rgba(255,255,255,0.8)', letterSpacing: '-0.01em' }}>
            Which Indian Credit Cards Let You Transfer Points to Airlines?
          </h2>
          <div className="mt-4 text-[14px] leading-[1.75]" style={{ color: 'rgba(255,255,255,0.4)' }}>
            <p>In India, airline transfer partners are available on premium credit cards from HDFC Bank (Infinia, Diners Club Black, Regalia Gold), Axis Bank (Magnus, Atlas), and American Express (Platinum, Gold). These cards let you convert reward points to frequent flyer miles in programs like Singapore Airlines KrisFlyer, British Airways Avios, Air India Flying Returns, Finnair Plus, Turkish Airlines Miles&amp;Smiles, Etihad Guest, Japan Airlines Mileage Bank, and Emirates Skywards.</p>
            <p className="mt-3">HDFC Infinia offers the most transfer partners (22 programs) with the best ratios — 1:1 to Singapore Airlines KrisFlyer and Finnair Plus, which represent the highest-value transfer options for business class redemptions on Star Alliance and Oneworld partners respectively.</p>
          </div>

          <h2 className="mt-10" style={{ fontFamily: 'Bricolage Grotesque, sans-serif', fontWeight: 700, fontSize: '20px', color: 'rgba(255,255,255,0.8)', letterSpacing: '-0.01em' }}>
            What Changed in the April 2026 Credit Card Devaluations?
          </h2>
          <div className="mt-4 text-[14px] leading-[1.75]" style={{ color: 'rgba(255,255,255,0.4)' }}>
            <p>Between January and April 2026, every major Indian bank devalued credit card reward programs. The most significant changes were: Axis Bank removed Marriott Bonvoy, Accor Live Limitless, and Qatar Airways Privilege Club as transfer partners entirely. HDFC Bank changed Turkish Airlines Miles&amp;Smiles and Avianca LifeMiles transfer ratios from 1:1 to 2:1 (effectively halving the value). SBI Card capped monthly cashback at ₹2,000.</p>
            <p className="mt-3">PointsMax reflects all post-devaluation data as of May 2026. Cards with devalued transfer partners are flagged with a "DEVALUED" tag so you can avoid outdated redemption strategies.</p>
          </div>

          <h2 className="mt-10" style={{ fontFamily: 'Bricolage Grotesque, sans-serif', fontWeight: 700, fontSize: '20px', color: 'rgba(255,255,255,0.8)', letterSpacing: '-0.01em' }}>
            How Does the PointsMax Credit Card Points Calculator Work?
          </h2>
          <div className="mt-4 text-[14px] leading-[1.75]" style={{ color: 'rgba(255,255,255,0.4)' }}>
            <p>PointsMax is a free online tool that calculates the real rupee value of your credit card reward points across every available redemption method. Select your card from 25+ supported Indian credit cards, enter your points balance, and see all options ranked by value — from best to worst. The tool also shows airline and hotel transfer partners with exact conversion ratios, alliance affiliations, and devaluation warnings.</p>
            <p className="mt-3">Data is sourced from official bank reward catalogues, SmartBuy and Travel EDGE portals, and transfer partner program pages. The database is updated whenever banks change redemption values or transfer ratios.</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-10 px-5" style={{ borderTop: '1px solid rgba(255,255,255,0.03)' }}>
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-5 h-5 rounded-md bg-gradient-to-br from-emerald-400 to-cyan-400 grid place-items-center">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h5l3-9 4 18 3-9h5" /></svg>
            </div>
            <span className="text-[13px] font-bold" style={{ color: 'rgba(255,255,255,0.4)' }}>PointsMax</span>
          </div>
          <p className="text-[12px]" style={{ color: 'rgba(255,255,255,0.2)' }}>
            <a href="/blog" className="hover:text-white/40 transition-colors">Blog</a>
            <span className="mx-2">·</span>
            <a href="/privacy" className="hover:text-white/40 transition-colors">Privacy</a>
            <span className="mx-2">·</span>
            <a href="/about" className="hover:text-white/40 transition-colors">About</a>
            <span className="mx-2">·</span>
            <a href="/contact" className="hover:text-white/40 transition-colors">Contact</a>
          </p>
          <p className="text-[11px]" style={{ color: 'rgba(255,255,255,0.12)' }}>© 2026 PointsMax. Not affiliated with any bank.</p>
        </div>
      </footer>
    </div>
  )
}

function RedemptionCard({ r, pts, maxVal, delay = 0 }) {
  const val = pts * r.value_per_point
  const pct = maxVal > 0 ? (r.value_per_point / maxVal) * 100 : 0
  const rc = RANK_CONFIG[r.rank] || RANK_CONFIG[2]
  return (
    <div className="p-4 rounded-xl transition-all duration-200" style={{ background: rc.bg, border: '1px solid ' + rc.border, animation: 'fadeUp 0.35s ease both', animationDelay: delay + 'ms' }}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex gap-3 flex-1 min-w-0">
          <span className="text-xl mt-0.5">{r.icon}</span>
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <p className="text-[14px] font-semibold" style={{ color: 'rgba(255,255,255,0.85)' }}>{r.method}</p>
              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md" style={{ color: rc.color, background: rc.color + '15' }}>{rc.label}</span>
            </div>
            <p className="text-[12px] mt-1 leading-relaxed" style={{ color: 'rgba(255,255,255,0.35)' }}>{r.tip}</p>
          </div>
        </div>
        <div className="text-right shrink-0">
          <p className="text-[18px] font-mono font-bold" style={{ color: rc.color }}>₹{val.toLocaleString('en-IN')}</p>
          <p className="text-[10px] font-mono mt-0.5" style={{ color: 'rgba(255,255,255,0.2)' }}>₹{r.value_per_point}/pt</p>
        </div>
      </div>
      <div className="mt-3 h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.04)' }}>
        <div className="h-full rounded-full transition-all duration-700 ease-out" style={{ width: pct + '%', background: 'linear-gradient(90deg, ' + rc.color + 'cc, ' + rc.color + '66)' }} />
      </div>
    </div>
  )
}

function TransferCard({ t, pts, delay = 0 }) {
  const val = pts * t.effective_value
  const isWarn = t.is_devalued
  const isBest = t.is_best
  const as = t.alliance ? ALLIANCE_STYLE[t.alliance] : null
  return (
    <div className="flex items-center gap-3 p-3.5 rounded-xl transition-all duration-200" style={{
      background: isBest ? 'rgba(74,222,128,0.04)' : 'rgba(255,255,255,0.015)',
      border: '1px solid ' + (isBest ? 'rgba(74,222,128,0.12)' : 'rgba(255,255,255,0.04)'),
      animation: 'fadeUp 0.3s ease both', animationDelay: delay + 'ms',
    }}>
      <span className="text-lg shrink-0">{t.country_icon}</span>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-[13px] font-semibold" style={{ color: isBest ? '#4ade80' : 'rgba(255,255,255,0.75)' }}>{t.partner_name}</span>
          {isBest && <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md" style={{ color: '#4ade80', background: 'rgba(74,222,128,0.1)' }}>⭐ BEST</span>}
          {as && <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md" style={{ color: as.color, background: as.bg }}>{t.alliance}</span>}
          {isWarn && <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md" style={{ color: '#fbbf24', background: 'rgba(251,191,36,0.1)' }}>DEVALUED</span>}
        </div>
        <p className="text-[11px] mt-0.5 truncate" style={{ color: isWarn ? 'rgba(251,191,36,0.5)' : 'rgba(255,255,255,0.3)' }}>{t.note}</p>
      </div>
      <div className="flex items-center gap-3 shrink-0">
        <span className="text-[11px] font-mono font-semibold px-2 py-1 rounded-lg" style={{ background: isWarn ? 'rgba(251,191,36,0.08)' : 'rgba(255,255,255,0.04)', color: isWarn ? '#fbbf24' : 'rgba(255,255,255,0.35)' }}>{t.transfer_ratio}</span>
        <span className="text-[14px] font-mono font-bold min-w-[60px] text-right" style={{ color: isBest ? '#4ade80' : isWarn ? 'rgba(251,191,36,0.6)' : 'rgba(255,255,255,0.5)' }}>₹{val.toLocaleString('en-IN')}</span>
      </div>
    </div>
  )
}
