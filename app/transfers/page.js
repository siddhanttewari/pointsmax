'use client'

import { useState, useEffect, useMemo } from 'react'
import { createClient } from '@supabase/supabase-js'
import PageNav from '@/components/PageNav'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

const ALLIANCE_STYLE = {
  'Star Alliance': { color: '#92782A', bg: '#FBF8F0' },
  'Oneworld': { color: 'var(--red)', bg: '#FDF1EF' },
  'SkyTeam': { color: '#2563eb', bg: '#EFF6FF' },
  'Multi': { color: '#7c3aed', bg: '#F5F3FF' },
  'LCC': { color: '#64748b', bg: '#F1F5F9' },
}

export default function TransfersPage() {
  const [transfers, setTransfers] = useState([])
  const [cards, setCards] = useState([])
  const [loading, setLoading] = useState(true)
  const [cardFilter, setCardFilter] = useState('All')
  const [typeFilter, setTypeFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    Promise.all([
      supabase.from('transfer_partners').select('*, cards(name, bank, slug)').order('partner_name'),
      supabase.from('cards').select('name, slug, bank').eq('has_transfers', true).order('name'),
    ]).then(([{ data: t }, { data: c }]) => {
      setTransfers(t || [])
      setCards(c || [])
      setLoading(false)
    })
  }, [])

  const filtered = useMemo(() => {
    return transfers.filter(t => {
      const matchCard = cardFilter === 'All' || t.cards?.slug === cardFilter
      const matchType = typeFilter === 'all' || t.partner_type === typeFilter
      const matchSearch = !searchQuery || t.partner_name.toLowerCase().includes(searchQuery.toLowerCase()) || (t.alliance && t.alliance.toLowerCase().includes(searchQuery.toLowerCase()))
      return matchCard && matchType && matchSearch
    })
  }, [transfers, cardFilter, typeFilter, searchQuery])

  const airlines = filtered.filter(t => t.partner_type === 'airline')
  const hotels = filtered.filter(t => t.partner_type === 'hotel')
  const totalAirlines = transfers.filter(t => t.partner_type === 'airline')
  const totalHotels = transfers.filter(t => t.partner_type === 'hotel')
  const devalued = transfers.filter(t => t.is_devalued).length

  return (
    <div className="min-h-screen">
      <PageNav />

      {/* Hero */}
      <header className="pt-10 pb-6 px-5">
        <div className="max-w-4xl mx-auto">
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(24px, 4vw, 38px)', lineHeight: 1.15, letterSpacing: '-0.02em', color: 'var(--text)' }}>
            Airline &amp; Hotel Transfer Partners
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed max-w-2xl" style={{ color: 'var(--text-s)' }}>
            Every loyalty program you can transfer credit card points to in India. Conversion ratios, alliance tags, and post-April 2026 devaluation warnings — all in one place.
          </p>

          {/* Stats */}
          <div className="flex gap-4 mt-5 flex-wrap">
            {[
              { n: totalAirlines.length, label: 'Airline programs' },
              { n: totalHotels.length, label: 'Hotel programs' },
              { n: cards.length, label: 'Cards with transfers' },
              { n: devalued, label: 'Devalued in 2026', warn: true },
            ].map((s, i) => (
              <div key={i} className="px-4 py-2.5 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <p className="text-[20px] font-mono font-bold" style={{ color: s.warn ? 'var(--red)' : 'var(--text)' }}>{s.n}</p>
                <p className="text-[11px] font-medium" style={{ color: 'var(--text-m)' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-5 pb-24">

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <select value={cardFilter} onChange={e => setCardFilter(e.target.value)}
            className="px-3 py-2.5 rounded-xl text-[13px] font-medium outline-none"
            style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--text)' }}>
            <option value="All">All cards</option>
            {cards.map(c => <option key={c.slug} value={c.slug}>{c.name}</option>)}
          </select>

          <div className="flex gap-1.5">
            {[{ key: 'all', label: 'All' }, { key: 'airline', label: '✈️ Airlines' }, { key: 'hotel', label: '🏨 Hotels' }].map(t => (
              <button key={t.key} onClick={() => setTypeFilter(t.key)}
                className="px-3 py-2 rounded-lg text-[12px] font-medium transition-all"
                style={{ background: typeFilter === t.key ? 'var(--dark)' : 'var(--card)', color: typeFilter === t.key ? '#FAF8F5' : 'var(--text-s)', border: '1px solid ' + (typeFilter === t.key ? 'var(--dark)' : 'var(--border)') }}>
                {t.label}
              </button>
            ))}
          </div>

          <div className="relative flex-1">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: 'var(--text-m)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
            <input type="text" placeholder="Search partner or alliance..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl text-[13px] outline-none"
              style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--text)' }} />
          </div>
        </div>

        {loading ? (
          <div className="space-y-2">{[1,2,3,4,5,6].map(i => <div key={i} className="h-14 rounded-xl animate-pulse" style={{ background: 'var(--bg-s)' }} />)}</div>
        ) : (
          <>
            {/* Airlines */}
            {airlines.length > 0 && (typeFilter === 'all' || typeFilter === 'airline') && (
              <div className="mb-8">
                <p className="text-[12px] font-bold uppercase tracking-[0.15em] mb-3" style={{ color: '#0891b2' }}>
                  ✈️ Airlines ({airlines.length})
                </p>
                <div className="overflow-x-auto -mx-5 px-5">
                  <table className="w-full text-[13px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
                    <thead>
                      <tr>
                        <th className="text-left py-2.5 px-3 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Partner</th>
                        <th className="text-left py-2.5 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Card</th>
                        <th className="text-center py-2.5 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Ratio</th>
                        <th className="text-center py-2.5 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Alliance</th>
                        <th className="text-left py-2.5 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Note</th>
                      </tr>
                    </thead>
                    <tbody>
                      {airlines.map((t, i) => (
                        <tr key={t.id}>
                          <td className="py-2.5 px-3" style={{ borderBottom: '1px solid var(--border)' }}>
                            <div className="flex items-center gap-2">
                              <span>{t.country_icon}</span>
                              <span className="font-medium" style={{ color: t.is_best ? 'var(--green)' : 'var(--text)' }}>{t.partner_name}</span>
                              {t.is_best && <span className="text-[9px] font-bold px-1.5 py-0.5 rounded" style={{ color: 'var(--green)', background: 'rgba(45,106,79,0.08)' }}>BEST</span>}
                              {t.is_devalued && <span className="text-[9px] font-bold px-1.5 py-0.5 rounded" style={{ color: '#92782A', background: '#FBF8F0' }}>DEVALUED</span>}
                            </div>
                          </td>
                          <td className="py-2.5 px-2 text-[12px]" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>
                            <a href={'/?card=' + t.cards?.slug} style={{ color: 'var(--gold)', textDecoration: 'underline' }}>{t.cards?.name}</a>
                          </td>
                          <td className="py-2.5 px-2 text-center" style={{ borderBottom: '1px solid var(--border)' }}>
                            <span className="font-mono font-semibold text-[12px] px-2 py-0.5 rounded" style={{ background: t.is_devalued ? '#FBF8F0' : 'var(--bg-s)', color: t.is_devalued ? '#92782A' : 'var(--text-s)' }}>{t.transfer_ratio}</span>
                          </td>
                          <td className="py-2.5 px-2 text-center" style={{ borderBottom: '1px solid var(--border)' }}>
                            {t.alliance && (() => { const a = ALLIANCE_STYLE[t.alliance]; return a ? <span className="text-[10px] font-bold px-1.5 py-0.5 rounded" style={{ color: a.color, background: a.bg }}>{t.alliance}</span> : <span className="text-[10px]" style={{ color: 'var(--text-m)' }}>{t.alliance}</span> })()}
                          </td>
                          <td className="py-2.5 px-2 text-[11px] max-w-[200px] truncate" style={{ color: 'var(--text-m)', borderBottom: '1px solid var(--border)' }}>{t.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Hotels */}
            {hotels.length > 0 && (typeFilter === 'all' || typeFilter === 'hotel') && (
              <div className="mb-8">
                <p className="text-[12px] font-bold uppercase tracking-[0.15em] mb-3" style={{ color: 'var(--gold)' }}>
                  🏨 Hotels ({hotels.length})
                </p>
                <div className="overflow-x-auto -mx-5 px-5">
                  <table className="w-full text-[13px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
                    <thead>
                      <tr>
                        <th className="text-left py-2.5 px-3 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Partner</th>
                        <th className="text-left py-2.5 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Card</th>
                        <th className="text-center py-2.5 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Ratio</th>
                        <th className="text-left py-2.5 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Note</th>
                      </tr>
                    </thead>
                    <tbody>
                      {hotels.map((t, i) => (
                        <tr key={t.id}>
                          <td className="py-2.5 px-3" style={{ borderBottom: '1px solid var(--border)' }}>
                            <div className="flex items-center gap-2">
                              <span>{t.country_icon}</span>
                              <span className="font-medium" style={{ color: t.is_best ? 'var(--green)' : 'var(--text)' }}>{t.partner_name}</span>
                              {t.is_best && <span className="text-[9px] font-bold px-1.5 py-0.5 rounded" style={{ color: 'var(--green)', background: 'rgba(45,106,79,0.08)' }}>BEST</span>}
                              {t.is_devalued && <span className="text-[9px] font-bold px-1.5 py-0.5 rounded" style={{ color: '#92782A', background: '#FBF8F0' }}>DEVALUED</span>}
                            </div>
                          </td>
                          <td className="py-2.5 px-2 text-[12px]" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>
                            <a href={'/?card=' + t.cards?.slug} style={{ color: 'var(--gold)', textDecoration: 'underline' }}>{t.cards?.name}</a>
                          </td>
                          <td className="py-2.5 px-2 text-center" style={{ borderBottom: '1px solid var(--border)' }}>
                            <span className="font-mono font-semibold text-[12px] px-2 py-0.5 rounded" style={{ background: t.is_devalued ? '#FBF8F0' : 'var(--bg-s)', color: t.is_devalued ? '#92782A' : 'var(--text-s)' }}>{t.transfer_ratio}</span>
                          </td>
                          <td className="py-2.5 px-2 text-[11px] max-w-[200px] truncate" style={{ color: 'var(--text-m)', borderBottom: '1px solid var(--border)' }}>{t.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {filtered.length === 0 && (
              <p className="text-center py-12 text-[14px]" style={{ color: 'var(--text-m)' }}>No transfer partners match your filters</p>
            )}
          </>
        )}

        {/* SEO content */}
        <section className="mt-16 pt-10" style={{ borderTop: '1px solid var(--border)' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)' }}>
            Which Indian Credit Cards Let You Transfer Points to Airlines and Hotels?
          </h2>
          <div className="mt-4 text-[15px] leading-[1.8]" style={{ color: 'var(--text-s)' }}>
            <p>In India, only premium credit cards from HDFC Bank, Axis Bank, and American Express support point transfers to airline frequent flyer and hotel loyalty programs. HDFC Infinia and Diners Club Black offer the widest network with 22 transfer partners including Singapore Airlines KrisFlyer (1:1 ratio), British Airways Avios, Finnair Plus, Emirates Skywards, and Marriott Bonvoy.</p>
            <p className="mt-3">Axis Magnus and Atlas support transfers to programs like InterMiles and select airline partners, though Axis removed Marriott Bonvoy, Accor Live Limitless, and Qatar Airways Privilege Club in April 2026. American Express Platinum and Gold cards transfer to British Airways, Singapore Airlines, Cathay Pacific, and others at competitive ratios.</p>
            <p className="mt-3">Transfer partners are most valuable for premium cabin award bookings — business class or first class flights where the cash price is 3-10x what you effectively pay in points. For economy flights and standard hotel stays, redeeming through the bank's travel portal usually gives better value than transferring.</p>
          </div>

          <h2 className="mt-8" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '20px', color: 'var(--text)' }}>
            What Changed After the April 2026 Devaluations?
          </h2>
          <div className="mt-4 text-[15px] leading-[1.8]" style={{ color: 'var(--text-s)' }}>
            <p>The biggest change was Axis Bank removing Marriott Bonvoy, Accor Live Limitless, and Qatar Airways Privilege Club as transfer partners overnight in April 2026. HDFC Bank also devalued Turkish Airlines Miles&amp;Smiles and Avianca LifeMiles from 1:1 to 2:1 ratios. Partners flagged as "DEVALUED" in the table above reflect these changes.</p>
            <p className="mt-3">Use the filters above to see which partners are still available for your specific card, or go to the <a href="/" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>PointsMax calculator</a> to see the exact rupee value of transferring your points to each partner.</p>
          </div>
        </section>

        {/* CTA */}
        <div className="p-6 rounded-2xl text-center mt-10" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
          <p className="text-[16px] font-semibold">Want to see the rupee value of your transfers?</p>
          <p className="text-[13px] mt-1 mb-4" style={{ color: 'rgba(250,248,245,0.5)' }}>Select your card and points balance to see every option ranked by value.</p>
          <a href="/" className="inline-block px-6 py-2.5 rounded-xl text-[14px] font-semibold" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>Open Calculator →</a>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-10 px-5" style={{ background: 'var(--dark)', color: 'rgba(250,248,245,0.5)' }}>
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <p className="text-[12px]">
            <a href="/" className="hover:text-white/60 transition-colors">Calculator</a>
            <span className="mx-2">·</span>
            <a href="/blog" className="hover:text-white/60 transition-colors">Blog</a>
            <span className="mx-2">·</span>
            <a href="/privacy" className="hover:text-white/60 transition-colors">Privacy</a>
            <span className="mx-2">·</span>
            <a href="/about" className="hover:text-white/60 transition-colors">About</a>
          </p>
          <p className="text-[11px]" style={{ color: 'rgba(250,248,245,0.25)' }}>© 2026 PointsMax. Not affiliated with any bank.</p>
        </div>
      </footer>
    </div>
  )
}
