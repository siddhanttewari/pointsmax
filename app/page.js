'use client'

import { useState, useEffect, useMemo, useRef } from 'react'
import { getCards, getRedemptions, getTransferPartners } from '@/lib/supabase'
import { HeaderAd, InFeedAd } from '@/components/AdUnit'

const BANK_DOT = {
  HDFC: '#2563eb', Axis: '#be185d', SBI: '#0d9488', ICICI: '#ea580c',
  'IDFC FIRST': '#65a30d', Amex: '#0891b2', IndusInd: '#7c3aed',
  Kotak: '#ca8a04', Federal: '#64748b',
}

const RANK = {
  1: { label: 'BEST VALUE', color: '#2D6A4F', bg: '#EDF5F0', border: '#C8DDD0' },
  2: { label: 'GOOD', color: '#92782A', bg: '#FBF8F0', border: '#E8DFC5' },
  3: { label: 'OKAY', color: '#8B6914', bg: '#FDF8ED', border: '#E8D9B0' },
  4: { label: 'AVOID', color: '#B44233', bg: '#FDF1EF', border: '#E8C5BF' },
}

const ALLIANCE = {
  'Star Alliance': { color: '#92782A', bg: '#FBF8F0' },
  'Oneworld': { color: '#B44233', bg: '#FDF1EF' },
  'SkyTeam': { color: '#2563eb', bg: '#EFF6FF' },
  'Multi': { color: '#7c3aed', bg: '#F5F3FF' },
  'LCC': { color: '#64748b', bg: '#F1F5F9' },
}

function track(name, params = {}) {
  if (typeof window !== 'undefined' && window.gtag) window.gtag('event', name, params)
}

export default function Home() {
  const [cards, setCards] = useState([])
  const [slug, setSlug] = useState('')
  const [points, setPoints] = useState('')
  const [redemptions, setRedemptions] = useState([])
  const [transfers, setTransfers] = useState([])
  const [search, setSearch] = useState('')
  const [bank, setBank] = useState('All')
  const [tab, setTab] = useState('redeem')
  const [loading, setLoading] = useState(true)
  const ref = useRef(null)

  useEffect(() => { getCards().then(d => { setCards(d || []); setLoading(false) }).catch(() => setLoading(false)) }, [])

  useEffect(() => {
    if (!slug) return
    setTab('redeem')
    Promise.all([getRedemptions(slug), getTransferPartners(slug)]).then(([r, t]) => { setRedemptions(r || []); setTransfers(t || []) })
    track('select_card', { card: slug })
  }, [slug])

  useEffect(() => {
    if (redemptions.length > 0 && parseInt(points) > 0 && ref.current) ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [redemptions, points])

  const banks = useMemo(() => ['All', ...new Set(cards.map(c => c.bank))], [cards])
  const card = cards.find(c => c.slug === slug)
  const pts = parseInt(points) || 0
  const dot = card ? BANK_DOT[card.bank] || '#64748b' : null

  const filtered = useMemo(() => {
    return cards.filter(c => (bank === 'All' || c.bank === bank) && (!search || c.name.toLowerCase().includes(search.toLowerCase())))
  }, [cards, bank, search])

  const airlines = transfers.filter(t => t.partner_type === 'airline')
  const hotels = transfers.filter(t => t.partner_type === 'hotel')
  const best = redemptions[0]?.value_per_point || 0
  const worst = redemptions[redemptions.length - 1]?.value_per_point || 0

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>

      {/* ── NAV ── */}
      <nav className="sticky top-0 z-50" style={{ background: 'var(--dark)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-3xl mx-auto flex items-center justify-between px-5 py-3.5">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg grid place-items-center" style={{ background: 'var(--gold)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1A1614" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h5l3-9 4 18 3-9h5" /></svg>
            </div>
            <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '18px', color: '#FAF8F5', letterSpacing: '-0.01em' }}>PointsMax</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="/transfers" className="text-[13px] font-medium" style={{ color: 'rgba(250,248,245,0.5)' }}>Transfers</a>
            <a href="/blog" className="text-[13px] font-medium" style={{ color: 'rgba(250,248,245,0.5)' }}>Blog</a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <header className="pt-10 pb-6 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase mb-5"
            style={{ background: 'rgba(45,106,79,0.08)', color: 'var(--green)', border: '1px solid rgba(45,106,79,0.12)' }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--green)' }} />
            Updated May 2026
          </span>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(28px, 5vw, 46px)', lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--dark)' }}>
            Stop Wasting Your<br className="sm:hidden" /> Credit Card Points
          </h1>
          <p className="mt-4 text-[16px] leading-relaxed max-w-lg mx-auto" style={{ color: 'var(--text-s)' }}>
            Find the <strong style={{ color: 'var(--text)' }}>highest-value redemption</strong> for your points.
            Compare 25+ Indian cards with airline &amp; hotel transfer partners.
          </p>
          <div className="flex items-center justify-center gap-6 mt-5">
            {['25+ Cards', 'Live Data', 'Free Forever'].map(t => (
              <span key={t} className="text-[12px] font-medium" style={{ color: 'var(--text-m)' }}>{t}</span>
            ))}
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-5"><HeaderAd /></div>

      <main className="max-w-3xl mx-auto px-5 pb-32">

        {/* ── CARD SELECTOR ── */}
        <section className="mt-2">
          <label className="block text-[13px] font-semibold mb-3" style={{ color: 'var(--text-m)' }}>Select your card</label>

          <div className="flex gap-1.5 flex-wrap mb-3">
            {banks.map(b => {
              const a = bank === b
              const d = BANK_DOT[b]
              return (
                <button key={b} onClick={() => setBank(b)} className="px-3 py-1.5 rounded-lg text-[12px] font-medium transition-all duration-200"
                  style={{ background: a ? 'var(--dark)' : 'var(--card)', color: a ? '#FAF8F5' : 'var(--text-s)', border: '1px solid ' + (a ? 'var(--dark)' : 'var(--border)') }}>
                  {d && b !== 'All' && <span className="inline-block w-2 h-2 rounded-full mr-1.5" style={{ background: d }} />}
                  {b}
                </button>
              )
            })}
          </div>

          <div className="relative mb-3">
            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: 'var(--text-m)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
            <input type="text" placeholder="Search by card name..." value={search} onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl text-[14px] outline-none transition-all duration-200"
              style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--text)' }} />
          </div>

          {loading ? (
            <div className="space-y-2">{[1,2,3,4,5].map(i => <div key={i} className="h-16 rounded-xl animate-pulse" style={{ background: 'var(--bg-s)' }} />)}</div>
          ) : (
            <div className="max-h-[380px] overflow-y-auto space-y-1.5">
              {filtered.map(c => {
                const d = BANK_DOT[c.bank] || '#64748b'
                const s = slug === c.slug
                return (
                  <button key={c.slug} onClick={() => setSlug(c.slug)}
                    className="w-full flex items-center gap-3.5 p-3.5 rounded-xl text-left transition-all duration-200"
                    style={{ background: s ? 'var(--card)' : 'transparent', border: '1px solid ' + (s ? 'var(--border-m)' : 'transparent'), boxShadow: s ? '0 1px 3px rgba(26,22,20,0.04)' : 'none' }}>
                    <div className="w-10 h-10 rounded-xl grid place-items-center shrink-0" style={{ background: d + '12', border: '1px solid ' + d + '20' }}>
                      <span className="text-[11px] font-bold" style={{ color: d }}>{c.bank.slice(0, 3)}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[14px] font-semibold truncate" style={{ color: 'var(--text)' }}>{c.name}</p>
                      <p className="text-[12px] truncate mt-0.5" style={{ color: 'var(--text-m)' }}>{c.earn_rate}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      {c.has_transfers && <span className="text-[10px] px-1.5 py-0.5 rounded font-medium" style={{ color: '#0891b2', background: '#ECFEFF' }}>✈ Transfers</span>}
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded" style={{ color: 'var(--text-m)', background: 'var(--bg-s)' }}>{c.tier}</span>
                    </div>
                  </button>
                )
              })}
              {filtered.length === 0 && <p className="text-center py-12 text-[14px]" style={{ color: 'var(--text-m)' }}>No cards match your search</p>}
            </div>
          )}
        </section>

        {/* ── POINTS INPUT ── */}
        {card && (
          <section className="mt-8" style={{ animation: 'fadeUp 0.35s ease both' }}>
            <label className="block text-[13px] font-semibold mb-3" style={{ color: 'var(--text-m)' }}>How many {card.point_name} do you have?</label>
            <div className="relative">
              <input type="number" placeholder="e.g. 10000" value={points}
                onChange={e => { setPoints(e.target.value); track('enter_points', { card: slug, points: e.target.value }) }}
                className="w-full py-4 px-5 rounded-2xl text-center text-[22px] sm:text-[28px] font-mono font-bold outline-none transition-all duration-200"
                style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--text)' }} />
              {pts > 0 && <p className="absolute -bottom-5 left-0 right-0 text-center text-[12px]" style={{ color: 'var(--text-m)' }}>{pts.toLocaleString('en-IN')} {card.point_name}</p>}
            </div>
          </section>
        )}

        {/* ── RESULTS ── */}
        {card && pts > 0 && redemptions.length > 0 && (
          <section ref={ref} className="mt-12" style={{ animation: 'fadeUp 0.4s ease both' }}>

            {/* Hero result */}
            <div className="rounded-2xl p-6 relative overflow-hidden" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[80px] opacity-15" style={{ background: 'var(--gold)' }} />
              <div className="relative flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: 'rgba(250,248,245,0.4)' }}>{card.name}</p>
                  <p className="text-[13px] mt-1" style={{ color: 'rgba(250,248,245,0.5)' }}>{pts.toLocaleString('en-IN')} {card.point_name}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-widest mb-1" style={{ color: 'var(--gold-l)' }}>Maximum value</p>
                  <p className="text-[28px] sm:text-[36px] font-mono font-extrabold leading-none" style={{ color: 'var(--gold-l)' }}>
                    ₹{(pts * best).toLocaleString('en-IN')}
                  </p>
                </div>
              </div>
              <div className="mt-5 p-3.5 rounded-xl" style={{ background: 'rgba(45,106,79,0.15)', border: '1px solid rgba(45,106,79,0.2)' }}>
                <p className="text-[13px]" style={{ color: 'rgba(250,248,245,0.8)' }}>
                  <span style={{ color: '#6EE7B7' }}>↑ Best:</span> {redemptions[0].method} at <strong style={{ color: '#fff' }}>₹{redemptions[0].value_per_point}/pt</strong>
                </p>
                <p className="text-[12px] mt-1" style={{ color: 'rgba(250,248,245,0.45)' }}>{redemptions[0].tip}</p>
              </div>
              {redemptions.length > 1 && (
                <div className="mt-2 p-3.5 rounded-xl" style={{ background: 'rgba(180,66,51,0.1)', border: '1px solid rgba(180,66,51,0.15)' }}>
                  <p className="text-[12px]" style={{ color: 'rgba(250,248,245,0.5)' }}>
                    <span style={{ color: '#FCA5A5' }}>↓ Worst:</span> {redemptions[redemptions.length - 1].method} = ₹{(pts * worst).toLocaleString('en-IN')}
                    <span style={{ color: '#FCA5A5' }}> — you lose ₹{((pts * best) - (pts * worst)).toLocaleString('en-IN')}</span>
                  </p>
                </div>
              )}
            </div>

            {/* Tabs */}
            {transfers.length > 0 && (
              <div className="flex mt-6 p-1 rounded-xl" style={{ background: 'var(--bg-s)', border: '1px solid var(--border)' }}>
                {[{ key: 'redeem', label: 'Redemptions', icon: '💳', count: redemptions.length }, { key: 'transfer', label: 'Transfers', icon: '✈️', count: transfers.length }].map(t => (
                  <button key={t.key} onClick={() => { setTab(t.key); track('switch_tab', { tab: t.key }) }}
                    className="flex-1 py-2.5 rounded-lg text-[13px] font-semibold transition-all duration-200 flex items-center justify-center gap-2"
                    style={{ background: tab === t.key ? 'var(--card)' : 'transparent', color: tab === t.key ? 'var(--text)' : 'var(--text-m)', boxShadow: tab === t.key ? '0 1px 2px rgba(0,0,0,0.04)' : 'none' }}>
                    <span>{t.icon}</span>{t.label}
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md" style={{ background: tab === t.key ? 'var(--bg-s)' : 'transparent', color: 'var(--text-m)' }}>{t.count}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Redemptions */}
            {tab === 'redeem' && (
              <div className="mt-4 space-y-2">
                {redemptions.map((r, i) => <RCard key={r.id} r={r} pts={pts} maxVal={best} delay={i * 50} />)}
                {redemptions.length > 2 && <InFeedAd />}
              </div>
            )}

            {/* Transfers */}
            {tab === 'transfer' && transfers.length > 0 && (
              <div className="mt-4" style={{ animation: 'fadeUp 0.3s ease both' }}>
                <p className="text-[12px] mb-4 leading-relaxed" style={{ color: 'var(--text-m)' }}>Transfer points to airline/hotel loyalty programs. Best for premium cabin bookings.</p>
                {airlines.length > 0 && (
                  <div className="mb-5">
                    <p className="text-[11px] font-bold uppercase tracking-[0.15em] mb-2.5" style={{ color: '#0891b2' }}>✈️ Airlines ({airlines.length})</p>
                    <div className="space-y-1.5">{airlines.map((t, i) => <TCard key={t.id} t={t} pts={pts} delay={i * 35} />)}</div>
                  </div>
                )}
                {hotels.length > 0 && (
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.15em] mb-2.5" style={{ color: 'var(--gold)' }}>🏨 Hotels ({hotels.length})</p>
                    <div className="space-y-1.5">{hotels.map((t, i) => <TCard key={t.id} t={t} pts={pts} delay={i * 35} />)}</div>
                  </div>
                )}
                <div className="mt-4 p-3.5 rounded-xl" style={{ background: '#ECFEFF', border: '1px solid #CFFAFE' }}>
                  <p className="text-[12px] leading-relaxed" style={{ color: '#155E75' }}><strong>Pro tip:</strong> Transfer only with a specific booking in mind. Transfers are irreversible.</p>
                </div>
              </div>
            )}

            {transfers.length === 0 && tab === 'transfer' && (
              <p className="mt-4 p-4 rounded-xl text-[13px]" style={{ background: 'var(--bg-s)', border: '1px solid var(--border)', color: 'var(--text-m)' }}>This card does not support transfers. Use the redemption options above.</p>
            )}

            <p className="mt-8 text-[10px] leading-relaxed" style={{ color: 'var(--text-m)' }}>
              <strong>Disclaimer:</strong> Values are approximate, based on publicly available data as of May 2026. Always verify on your bank portal. Not financial advice.
            </p>
          </section>
        )}

        {/* ── SEO CONTENT ── */}
        <section className="mt-20 pt-12" style={{ borderTop: '1px solid var(--border)' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '24px', color: 'var(--text)', letterSpacing: '-0.01em' }}>
            How Much Are My Credit Card Reward Points Worth in India?
          </h2>
          <div className="mt-4 text-[15px] leading-[1.8]" style={{ color: 'var(--text-s)' }}>
            <p>The value of credit card reward points in India ranges from ₹0.10 to ₹1.00 per point, depending on the card and redemption method. HDFC Infinia offers the highest at ₹1/point via SmartBuy travel bookings, while catalogue redemptions typically yield only ₹0.15-0.25/point.</p>
            <p className="mt-3">The same 10,000 points can be worth ₹10,000 or just ₹2,000 — a 5x difference from choosing the right redemption channel.</p>
          </div>

          <h2 className="mt-10" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '20px', color: 'var(--text)' }}>What Is the Best Way to Redeem Credit Card Points in India in 2026?</h2>
          <div className="mt-4 text-[15px] leading-[1.8]" style={{ color: 'var(--text-s)' }}>
            <p>The best way to redeem credit card points in India is through the bank's travel portal for flight and hotel bookings. This consistently delivers the highest per-point value across HDFC, Axis, SBI, ICICI, and Amex cards.</p>
            <p className="mt-3">For premium cards, transferring points to airline frequent flyer programs like Singapore Airlines KrisFlyer or British Airways Avios can unlock even higher value — especially for business class award bookings.</p>
          </div>

          <h2 className="mt-10" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '20px', color: 'var(--text)' }}>Credit Card Reward Points Value Per Bank (May 2026)</h2>
          <div className="mt-4 text-[15px] leading-[1.8]" style={{ color: 'var(--text-s)' }}>
            <p><strong style={{ color: 'var(--text)' }}>HDFC Bank:</strong> Infinia and Diners Club Black points are worth ₹1.00/point via SmartBuy for flights, hotels, Tanishq, or Apple. Gift vouchers yield ₹0.50/point. Product catalogue drops to ₹0.20/point.</p>
            <p className="mt-3"><strong style={{ color: 'var(--text)' }}>Axis Bank:</strong> EDGE points are worth ₹0.20 to ₹0.50/point. Magnus and Atlas get ₹0.50/point via Travel EDGE portal.</p>
            <p className="mt-3"><strong style={{ color: 'var(--text)' }}>SBI Card:</strong> Reward points are worth ₹0.25/point. Cashback now capped at ₹2,000 per month as of April 2026.</p>
            <p className="mt-3"><strong style={{ color: 'var(--text)' }}>ICICI Bank:</strong> Reward points are worth ₹0.25/point. Emeralde gets ₹0.50/point via InterMiles.</p>
            <p className="mt-3"><strong style={{ color: 'var(--text)' }}>American Express:</strong> Membership Rewards range from ₹0.30 to ₹1.00/point. Best value from airline transfers at 1:1 ratio.</p>
          </div>

          <h2 className="mt-10" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '20px', color: 'var(--text)' }}>What Changed in the April 2026 Credit Card Devaluations?</h2>
          <div className="mt-4 text-[15px] leading-[1.8]" style={{ color: 'var(--text-s)' }}>
            <p>Between January and April 2026, every major Indian bank devalued credit card reward programs. Axis removed Marriott, Accor, and Qatar Airways as transfer partners. HDFC changed Turkish Airlines and Avianca ratios from 1:1 to 2:1. SBI capped monthly cashback at ₹2,000. This tool reflects all post-devaluation data.</p>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="py-10 px-5" style={{ background: 'var(--dark)', color: 'rgba(250,248,245,0.5)' }}>
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-5 h-5 rounded-md grid place-items-center" style={{ background: 'var(--gold)' }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#1A1614" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h5l3-9 4 18 3-9h5" /></svg>
            </div>
            <span className="text-[13px] font-bold" style={{ color: 'rgba(250,248,245,0.6)', fontFamily: 'Playfair Display, serif' }}>PointsMax</span>
          </div>
          <p className="text-[12px]">
            <a href="/blog" className="hover:text-white/60 transition-colors">Blog</a>
            <span className="mx-2">·</span>
            <a href="/transfers" className="hover:text-white/60 transition-colors">Transfers</a>
            <span className="mx-2">·</span>
            <a href="/privacy" className="hover:text-white/60 transition-colors">Privacy</a>
            <span className="mx-2">·</span>
            <a href="/about" className="hover:text-white/60 transition-colors">About</a>
            <span className="mx-2">·</span>
            <a href="/contact" className="hover:text-white/60 transition-colors">Contact</a>
          </p>
          <p className="text-[11px]" style={{ color: 'rgba(250,248,245,0.25)' }}>© 2026 PointsMax. Not affiliated with any bank.</p>
        </div>
      </footer>
    </div>
  )
}

function RCard({ r, pts, maxVal, delay = 0 }) {
  const val = pts * r.value_per_point
  const pct = maxVal > 0 ? (r.value_per_point / maxVal) * 100 : 0
  const rc = RANK[r.rank] || RANK[2]
  return (
    <div className="p-4 rounded-xl transition-all duration-200" style={{ background: rc.bg, border: '1px solid ' + rc.border, animation: 'fadeUp 0.35s ease both', animationDelay: delay + 'ms' }}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex gap-3 flex-1 min-w-0">
          <span className="text-xl mt-0.5">{r.icon}</span>
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <p className="text-[14px] font-semibold" style={{ color: 'var(--text)' }}>{r.method}</p>
              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md" style={{ color: rc.color, background: rc.color + '12' }}>{rc.label}</span>
            </div>
            <p className="text-[12px] mt-1 leading-relaxed" style={{ color: 'var(--text-m)' }}>{r.tip}</p>
          </div>
        </div>
        <div className="text-right shrink-0">
          <p className="text-[18px] font-mono font-bold" style={{ color: rc.color }}>₹{val.toLocaleString('en-IN')}</p>
          <p className="text-[10px] font-mono mt-0.5" style={{ color: 'var(--text-m)' }}>₹{r.value_per_point}/pt</p>
        </div>
      </div>
      <div className="mt-3 h-1.5 rounded-full overflow-hidden" style={{ background: rc.color + '15' }}>
        <div className="h-full rounded-full transition-all duration-700 ease-out" style={{ width: pct + '%', background: rc.color }} />
      </div>
    </div>
  )
}

function TCard({ t, pts, delay = 0 }) {
  const val = pts * t.effective_value
  const w = t.is_devalued
  const b = t.is_best
  const a = t.alliance ? ALLIANCE[t.alliance] : null
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 p-3.5 rounded-xl transition-all duration-200" style={{
      background: b ? '#EDF5F0' : 'var(--card)',
      border: '1px solid ' + (b ? '#C8DDD0' : 'var(--border)'),
      animation: 'fadeUp 0.3s ease both', animationDelay: delay + 'ms',
    }}>
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <span className="text-lg shrink-0">{t.country_icon}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[13px] font-semibold" style={{ color: b ? 'var(--green)' : 'var(--text)' }}>{t.partner_name}</span>
            {b && <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md" style={{ color: 'var(--green)', background: 'rgba(45,106,79,0.1)' }}>BEST</span>}
            {a && <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md" style={{ color: a.color, background: a.bg }}>{t.alliance}</span>}
            {w && <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md" style={{ color: '#92782A', background: '#FBF8F0' }}>DEVALUED</span>}
          </div>
          <p className="text-[11px] mt-0.5 truncate" style={{ color: w ? '#92782A' : 'var(--text-m)' }}>{t.note}</p>
        </div>
      </div>
      <div className="flex items-center gap-3 shrink-0 pl-9 sm:pl-0">
        <span className="text-[11px] font-mono font-semibold px-2 py-1 rounded-lg" style={{ background: w ? '#FBF8F0' : 'var(--bg-s)', color: w ? '#92782A' : 'var(--text-m)' }}>{t.transfer_ratio}</span>
        <span className="text-[14px] font-mono font-bold" style={{ color: b ? 'var(--green)' : w ? '#92782A' : 'var(--text-s)' }}>₹{val.toLocaleString('en-IN')}</span>
      </div>
    </div>
  )
}
