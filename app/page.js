'use client'

import { useState, useEffect, useMemo } from 'react'
import { getCards, getRedemptions, getTransferPartners } from '@/lib/supabase'
import { AuthGate, UserMenu, useAuth } from '@/components/AuthGate'
import AdUnit, { HeaderAd, InFeedAd } from '@/components/AdUnit'

const BANK_COLORS = {
  HDFC: { bg: '#1a237e', accent: '#5c6bc0' },
  Axis: { bg: '#880e4f', accent: '#ec407a' },
  SBI: { bg: '#004d40', accent: '#26a69a' },
  ICICI: { bg: '#b71c1c', accent: '#ef5350' },
  'IDFC FIRST': { bg: '#1b5e20', accent: '#66bb6a' },
  Amex: { bg: '#0d47a1', accent: '#42a5f5' },
  IndusInd: { bg: '#4a148c', accent: '#ab47bc' },
  Kotak: { bg: '#e65100', accent: '#ffa726' },
  Federal: { bg: '#263238', accent: '#78909c' },
}

const RANK_LABELS = {
  1: { label: 'BEST', color: 'text-green-400', bg: 'bg-green-400/10' },
  2: { label: 'GOOD', color: 'text-amber-400', bg: 'bg-amber-400/10' },
  3: { label: 'OKAY', color: 'text-orange-400', bg: 'bg-orange-400/10' },
  4: { label: 'AVOID', color: 'text-red-400', bg: 'bg-red-400/10' },
}

const ALLIANCE_COLORS = {
  'Star Alliance': 'text-amber-400 bg-amber-400/10',
  'Oneworld': 'text-red-400 bg-red-400/10',
  'SkyTeam': 'text-blue-400 bg-blue-400/10',
  'Multi': 'text-purple-400 bg-purple-400/10',
  'LCC': 'text-zinc-400 bg-zinc-400/10',
  'None': 'text-zinc-500 bg-zinc-500/10',
  '': 'text-zinc-500 bg-zinc-500/10',
}

export default function Home() {
  const [cards, setCards] = useState([])
  const [selectedSlug, setSelectedSlug] = useState('')
  const [points, setPoints] = useState('')
  const [redemptions, setRedemptions] = useState([])
  const [transfers, setTransfers] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [bankFilter, setBankFilter] = useState('All')
  const [showTransfers, setShowTransfers] = useState(false)
  const [loading, setLoading] = useState(true)

  const { user } = useAuth()

  // Fetch cards on mount
  useEffect(() => {
    getCards().then(data => {
      setCards(data || [])
      setLoading(false)
    }).catch(() => setLoading(false))
  }, [])

  // Fetch redemptions + transfers when card changes
  useEffect(() => {
    if (!selectedSlug) return
    setRedemptions([])
    setTransfers([])
    setShowTransfers(false)

    Promise.all([
      getRedemptions(selectedSlug),
      getTransferPartners(selectedSlug),
    ]).then(([r, t]) => {
      setRedemptions(r || [])
      setTransfers(t || [])
    })
  }, [selectedSlug])

  const banks = useMemo(() => ['All', ...new Set(cards.map(c => c.bank))], [cards])
  const selectedCard = cards.find(c => c.slug === selectedSlug)
  const pts = parseInt(points) || 0
  const bc = selectedCard ? BANK_COLORS[selectedCard.bank] || { bg: '#333', accent: '#888' } : null

  const filteredCards = useMemo(() => {
    return cards.filter(c => {
      const matchBank = bankFilter === 'All' || c.bank === bankFilter
      const matchSearch = !searchQuery || c.name.toLowerCase().includes(searchQuery.toLowerCase())
      return matchBank && matchSearch
    })
  }, [cards, bankFilter, searchQuery])

  const airlineTransfers = transfers.filter(t => t.partner_type === 'airline')
  const hotelTransfers = transfers.filter(t => t.partner_type === 'hotel')

  // FREE tier: show top 2 redemptions + lock the rest
  const freeRedemptions = redemptions.slice(0, 2)
  const lockedRedemptions = redemptions.slice(2)

  return (
    <div className="min-h-screen">
      {/* NAV */}
      <nav className="sticky top-0 z-40 bg-surface-0/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-2xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="text-lg">💳</span>
            <span className="font-display font-bold text-base tracking-tight">PointsMax</span>
          </div>
          <UserMenu />
        </div>
      </nav>

      {/* HERO */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 via-transparent to-transparent" />
        <div className="relative max-w-2xl mx-auto px-4 pt-12 pb-8 text-center">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-zinc-500 mb-3">
            India · 25+ Cards · Updated May 2026
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-zinc-100 via-indigo-200 to-fuchsia-200 bg-clip-text text-transparent">
              Credit Card Points Optimizer
            </span>
          </h1>
          <p className="text-sm text-zinc-500 mt-3 max-w-md mx-auto leading-relaxed">
            Select your card, enter your points — instantly see the best way to redeem them, including airline & hotel transfer partners
          </p>
        </div>
      </header>

      {/* AD: Header */}
      <div className="max-w-2xl mx-auto px-4">
        <HeaderAd />
      </div>

      <main className="max-w-2xl mx-auto px-4 pb-24">

        {/* STEP 1: CARD SELECTION */}
        <section className="mt-6">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 grid place-items-center text-[11px] font-bold shrink-0">1</span>
            <span className="text-sm font-semibold">Select your credit card</span>
          </div>

          {/* Bank pills */}
          <div className="flex gap-1.5 flex-wrap mb-3">
            {banks.map(b => (
              <button
                key={b}
                onClick={() => setBankFilter(b)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                  bankFilter === b
                    ? 'bg-white/10 text-white border-white/20'
                    : 'text-zinc-500 border-white/5 hover:bg-white/5'
                }`}
              >
                {b}
              </button>
            ))}
          </div>

          <input
            type="text"
            placeholder="Search cards…"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full bg-white/5 border border-white/8 rounded-xl px-3.5 py-2.5 text-sm text-zinc-200 placeholder:text-zinc-600 outline-none focus:border-white/20 transition-colors mb-3"
          />

          {loading ? (
            <div className="space-y-2">
              {[1,2,3,4,5].map(i => (
                <div key={i} className="h-14 bg-white/5 rounded-xl animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="max-h-80 overflow-y-auto space-y-1">
              {filteredCards.map(c => {
                const b = BANK_COLORS[c.bank] || { bg: '#333', accent: '#888' }
                const sel = selectedSlug === c.slug
                return (
                  <button
                    key={c.slug}
                    onClick={() => setSelectedSlug(c.slug)}
                    className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all ${
                      sel
                        ? 'bg-white/6 border border-white/15'
                        : 'border border-transparent hover:bg-white/4'
                    }`}
                  >
                    <div
                      className="w-8 h-8 rounded-lg grid place-items-center text-[10px] font-bold text-white shrink-0"
                      style={{ background: `linear-gradient(135deg, ${b.bg}, ${b.accent}55)` }}
                    >
                      {c.bank.slice(0, 3).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[13px] font-semibold truncate">{c.name}</div>
                      <div className="text-[11px] text-zinc-500 truncate">{c.earn_rate}</div>
                    </div>
                    <span className="text-[10px] font-mono font-semibold text-zinc-500 bg-white/5 px-2 py-0.5 rounded shrink-0">
                      {c.tier}
                    </span>
                    {c.has_transfers && (
                      <span className="text-[10px] text-indigo-400/60 shrink-0">✈</span>
                    )}
                  </button>
                )
              })}
              {filteredCards.length === 0 && (
                <p className="text-center text-zinc-600 text-sm py-8">No cards found</p>
              )}
            </div>
          )}
        </section>

        {/* STEP 2: ENTER POINTS */}
        {selectedCard && (
          <section className="mt-8 animate-fade-up">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 grid place-items-center text-[11px] font-bold shrink-0">2</span>
              <span className="text-sm font-semibold">Enter your {selectedCard.point_name}</span>
            </div>
            <input
              type="number"
              placeholder="e.g. 10000"
              value={points}
              onChange={e => setPoints(e.target.value)}
              className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3.5 text-xl font-mono font-semibold text-center text-zinc-200 placeholder:text-zinc-600 outline-none focus:border-white/20 transition-colors"
            />
            {pts > 0 && (
              <p className="text-center text-xs text-zinc-500 mt-2">
                {pts.toLocaleString('en-IN')} {selectedCard.point_name}
              </p>
            )}
          </section>
        )}

        {/* RESULTS */}
        {selectedCard && pts > 0 && redemptions.length > 0 && (
          <section className="mt-8 animate-fade-up">

            {/* Summary card */}
            <div
              className="rounded-2xl p-5 border mb-5"
              style={{
                background: `linear-gradient(135deg, ${bc.bg}33, rgba(255,255,255,0.02))`,
                borderColor: `${bc.accent}33`,
              }}
            >
              <div className="flex justify-between flex-wrap gap-3">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-500">{selectedCard.name}</p>
                  <p className="text-xs text-zinc-400 mt-0.5">{pts.toLocaleString('en-IN')} {selectedCard.point_name}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-widest text-zinc-500">Best value</p>
                  <p className="text-2xl font-mono font-bold text-green-400">
                    ₹{(pts * redemptions[0].value_per_point).toLocaleString('en-IN')}
                  </p>
                </div>
              </div>
              <div className="mt-4 p-3 rounded-lg bg-green-400/5 border border-green-400/10 text-xs text-zinc-400 leading-relaxed">
                💡 <strong className="text-green-400">Best:</strong> {redemptions[0].method} at ₹{redemptions[0].value_per_point}/pt — {redemptions[0].tip}
              </div>
              {redemptions.length > 1 && (
                <div className="mt-2 p-3 rounded-lg bg-red-400/5 border border-red-400/10 text-xs text-zinc-500 leading-relaxed">
                  ⚠️ <strong className="text-red-400">Worst:</strong> {redemptions[redemptions.length - 1].method} = ₹{(pts * redemptions[redemptions.length - 1].value_per_point).toLocaleString('en-IN')} — you'd lose ₹{((pts * redemptions[0].value_per_point) - (pts * redemptions[redemptions.length - 1].value_per_point)).toLocaleString('en-IN')}
                </div>
              )}
            </div>

            {/* Tabs */}
            {transfers.length > 0 && (
              <div className="flex gap-2 mb-4">
                <button
                  onClick={() => setShowTransfers(false)}
                  className={`flex-1 text-center py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                    !showTransfers ? 'bg-white/8 text-white border-white/15' : 'text-zinc-500 border-white/5 hover:bg-white/4'
                  }`}
                >
                  💳 Redemptions
                </button>
                <button
                  onClick={() => setShowTransfers(true)}
                  className={`flex-1 text-center py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                    showTransfers ? 'bg-white/8 text-white border-white/15' : 'text-zinc-500 border-white/5 hover:bg-white/4'
                  }`}
                >
                  ✈️ Transfer Partners ({transfers.length})
                </button>
              </div>
            )}

            {/* REDEMPTION OPTIONS */}
            {!showTransfers && (
              <div className="stagger space-y-2">
                {/* Free tier: top 2 always visible */}
                {freeRedemptions.map((r, i) => (
                  <RedemptionRow key={r.id} r={r} pts={pts} maxVal={redemptions[0].value_per_point} i={i} />
                ))}

                {/* AD: In-feed between free and locked */}
                {lockedRedemptions.length > 0 && <InFeedAd />}

                {/* Locked: rest require sign-in */}
                {lockedRedemptions.length > 0 && (
                  <AuthGate lockedMessage="Sign in free to see all redemption options, transfer partners, and personalised tips">
                    {lockedRedemptions.map((r, i) => (
                      <RedemptionRow key={r.id} r={r} pts={pts} maxVal={redemptions[0].value_per_point} i={i + 2} />
                    ))}
                  </AuthGate>
                )}
              </div>
            )}

            {/* TRANSFER PARTNERS */}
            {showTransfers && transfers.length > 0 && (
              <AuthGate lockedMessage="Sign in free to see all airline & hotel transfer partners with conversion ratios">
                <div className="animate-fade-in">
                  <p className="text-[11px] text-zinc-500 mb-3 leading-relaxed">
                    Transfer your {selectedCard.point_name} to airline frequent flyer or hotel loyalty programs. Value varies — best for premium cabin bookings.
                  </p>

                  {/* Airlines */}
                  {airlineTransfers.length > 0 && (
                    <div className="mb-4">
                      <p className="text-[11px] font-semibold text-indigo-400/70 uppercase tracking-widest mb-2">✈️ Airlines</p>
                      <div className="space-y-1">
                        {airlineTransfers.map(t => (
                          <TransferRow key={t.id} t={t} pts={pts} />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Hotels */}
                  {hotelTransfers.length > 0 && (
                    <div>
                      <p className="text-[11px] font-semibold text-amber-400/70 uppercase tracking-widest mb-2">🏨 Hotels</p>
                      <div className="space-y-1">
                        {hotelTransfers.map(t => (
                          <TransferRow key={t.id} t={t} pts={pts} />
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-3 p-3 rounded-lg bg-indigo-400/5 border border-indigo-400/10 text-[11px] text-zinc-500 leading-relaxed">
                    💡 <strong>Pro tip:</strong> Transfer only with a specific booking in mind. Transfers are irreversible. For economy flights, direct portal redemption often beats transfers.
                  </div>
                </div>
              </AuthGate>
            )}

            {/* No transfers */}
            {transfers.length === 0 && (
              <p className="mt-4 p-3 rounded-lg bg-white/2 border border-white/5 text-xs text-zinc-500">
                ℹ️ This card does not support airline/hotel loyalty program transfers. Use the redemption options above.
              </p>
            )}

            {/* Disclaimer */}
            <p className="mt-6 text-[10px] text-zinc-600 leading-relaxed">
              <strong>Disclaimer:</strong> Values are approximate, based on publicly available data as of May 2026 (post April 2026 devaluations). Transfer ratios, partner availability, and caps change frequently. Always verify on your bank's portal. This is not financial advice.
            </p>
          </section>
        )}

        {/* SEO CONTENT SECTION (below the tool) */}
        <section className="mt-16 border-t border-white/5 pt-12">
          <h2 className="font-display text-xl font-bold mb-4">How to Get Maximum Value From Credit Card Reward Points in India</h2>

          <div className="prose prose-sm prose-invert max-w-none text-zinc-400 leading-relaxed space-y-4">
            <p>
              Indian credit cards offer reward points, cashback, or miles on every purchase — but the real value depends entirely on how you redeem them. A single HDFC Infinia reward point can be worth ₹1 when redeemed via SmartBuy for flights, or just ₹0.20 through the product catalogue. That's a 5x difference in value from the same points.
            </p>

            <h3 className="text-zinc-200 font-semibold text-base mt-6">The Golden Rule: Travel Redemptions Beat Everything Else</h3>
            <p>
              Across almost every Indian credit card — HDFC, Axis, SBI, ICICI, Amex — redeeming points for flight or hotel bookings through the bank's travel portal gives you the highest per-point value. Statement credit and product catalogues consistently offer 40-80% less value for the same points.
            </p>

            <h3 className="text-zinc-200 font-semibold text-base mt-6">Airline & Hotel Transfers: The Power Move</h3>
            <p>
              Premium cards like HDFC Infinia, Diners Club Black, Axis Magnus, and Amex Platinum let you transfer points to airline frequent flyer programs (Singapore Airlines KrisFlyer, British Airways Avios, Air India) and hotel loyalty programs (Marriott Bonvoy, IHG, Accor). This unlocks business class flights and luxury hotel stays at a fraction of the cash price — but only if you plan strategically.
            </p>

            <h3 className="text-zinc-200 font-semibold text-base mt-6">The 2026 Devaluation Wave</h3>
            <p>
              Between January and April 2026, every major Indian bank devalued rewards. Axis removed Marriott, Accor, and Qatar Airways overnight. HDFC changed ratios on Turkish and Avianca from 1:1 to 2:1. SBI capped cashback at ₹2,000 per month. This tool reflects all these changes so you're working with current data.
            </p>

            <h3 className="text-zinc-200 font-semibold text-base mt-6">Credit Card Points Value Per Bank (2026)</h3>
            <p>
              Here's a quick reference for per-point values across banks: HDFC Infinia/Diners Black get ₹1/pt on SmartBuy travel and ₹0.50 on vouchers. Axis EDGE points are worth ₹0.20-0.50 depending on the card and redemption method. SBI reward points are ₹0.25/pt. ICICI points are ₹0.25/pt (₹0.50 for Emeralde via InterMiles). Amex Membership Rewards range from ₹0.30 to ₹1.00 depending on the channel.
            </p>
          </div>
        </section>

        {/* AD: Bottom */}
        <div className="mt-12">
          <AdUnit slot="BOTTOM_AD_SLOT" />
        </div>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-8 px-4">
        <div className="max-w-2xl mx-auto text-center text-xs text-zinc-600 space-y-2">
          <p>PointsMax — Credit Card Reward Points Optimizer for India</p>
          <p>
            <a href="/privacy" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
            {' · '}
            <a href="/about" className="hover:text-zinc-400 transition-colors">About</a>
            {' · '}
            <a href="/contact" className="hover:text-zinc-400 transition-colors">Contact</a>
          </p>
          <p>© 2026 PointsMax. Not affiliated with any bank. Data for informational purposes only.</p>
        </div>
      </footer>
    </div>
  )
}

// ---- SUB-COMPONENTS ----

function RedemptionRow({ r, pts, maxVal, i }) {
  const val = pts * r.value_per_point
  const pct = maxVal > 0 ? (r.value_per_point / maxVal) * 100 : 0
  const rl = RANK_LABELS[r.rank] || RANK_LABELS[2]

  return (
    <div className="animate-fade-up p-4 rounded-xl border border-white/5 bg-white/2 hover:bg-white/4 transition-all">
      <div className="flex justify-between gap-2">
        <div className="flex gap-2.5 flex-1 min-w-0">
          <span className="text-lg">{r.icon}</span>
          <div className="min-w-0">
            <p className="text-[13px] font-semibold truncate">{r.method}</p>
            <p className="text-[11px] text-zinc-500 mt-0.5 leading-relaxed">{r.tip}</p>
          </div>
        </div>
        <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded self-start shrink-0 ${rl.bg} ${rl.color}`}>
          {rl.label}
        </span>
      </div>
      <div className="mt-3 flex items-center gap-3">
        <div className="value-bar flex-1">
          <div
            className="value-bar-fill"
            style={{
              width: `${pct}%`,
              background: r.rank === 1 ? 'linear-gradient(90deg,#4ade80,#22d3ee)'
                : r.rank === 2 ? 'linear-gradient(90deg,#fbbf24,#f59e0b)'
                : r.rank === 3 ? '#fb923c' : '#ef4444',
            }}
          />
        </div>
        <span className={`font-mono text-sm font-bold min-w-[72px] text-right ${
          r.rank === 1 ? 'text-green-400' : r.rank === 2 ? 'text-amber-400' : 'text-zinc-500'
        }`}>
          ₹{val.toLocaleString('en-IN')}
        </span>
      </div>
      <p className="text-[10px] font-mono text-zinc-600 mt-1">
        ₹{r.value_per_point}/pt × {pts.toLocaleString('en-IN')}
      </p>
    </div>
  )
}

function TransferRow({ t, pts }) {
  const val = pts * t.effective_value
  const isWarn = t.is_devalued
  const allianceClass = ALLIANCE_COLORS[t.alliance] || ALLIANCE_COLORS['']

  return (
    <div className={`flex items-start gap-3 p-3 rounded-xl border transition-all ${
      t.is_best ? 'border-green-400/20 bg-green-400/3' : 'border-white/4 bg-white/1.5 hover:bg-white/3'
    }`}>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-sm">{t.country_icon}</span>
          <span className="text-[13px] font-medium">{t.partner_name}</span>
          {t.alliance && (
            <span className={`text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded ${allianceClass}`}>
              {t.alliance}
            </span>
          )}
        </div>
        <p className={`text-[11px] mt-1 leading-relaxed ${isWarn ? 'text-amber-400/60' : 'text-zinc-500'}`}>
          {t.note}
        </p>
      </div>
      <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded shrink-0 ${
        isWarn ? 'bg-amber-400/10 text-amber-400' : 'bg-white/5 text-zinc-400'
      }`}>
        {t.transfer_ratio}
      </span>
      <span className={`font-mono text-[13px] font-bold min-w-[64px] text-right shrink-0 ${
        t.is_best ? 'text-green-400' : isWarn ? 'text-amber-400/60' : 'text-zinc-400'
      }`}>
        ₹{val.toLocaleString('en-IN')}
      </span>
    </div>
  )
}
