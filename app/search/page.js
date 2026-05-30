'use client'

import { useState, useEffect, useCallback } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

const CONTENT_INDEX = [
  // Card Reviews
  { title: 'HDFC Infinia Credit Card Review 2026', url: '/blog/hdfc-infinia-credit-card-review-2026', type: 'Card Review', tags: ['hdfc', 'infinia', 'smartbuy', 'premium', 'reward points', 'transfer partners', 'krisflyer', 'annual fee', '12500', 'lounge'], excerpt: 'Complete review — ₹1/point on SmartBuy, 22 transfer partners, ₹18L retention requirement, breakeven math.' },
  { title: 'HDFC Diners Club Black Review 2026', url: '/blog/hdfc-diners-club-black-credit-card-review-2026', type: 'Card Review', tags: ['hdfc', 'diners', 'diners black', 'diners club', 'premium', 'reward points', 'smartbuy', 'lounge', 'annual fee', '10000'], excerpt: 'Same rewards as Infinia at ₹10,000 fee — with complimentary Amazon Prime, Swiggy One, and Times Prime.' },
  { title: 'Axis Magnus Credit Card Review 2026', url: '/blog/axis-magnus-credit-card-review-2026', type: 'Card Review', tags: ['axis', 'magnus', 'devaluation', 'edge points', 'transfer', 'april 2026', 'marriott removed', 'travel edge'], excerpt: 'Post-April 2026 devaluation review — transfer ratio halved, Marriott/Accor/Qatar removed overnight.' },
  { title: 'Amex Platinum Charge Card Review 2026', url: '/blog/amex-platinum-charge-card-review-india-2026', type: 'Card Review', tags: ['amex', 'american express', 'platinum', 'charge card', 'taj', 'lounge', '66000', 'membership rewards', 'fhr', 'forex'], excerpt: 'Is ₹66,000/year worth it? The honest breakeven math — Taj benefits, FHR credits, airline transfers.' },
  // Listicles
  { title: 'Best Credit Cards India 2026 by Spend Level', url: '/blog/best-credit-cards-india-2026', type: 'Guide', tags: ['best credit card', 'india', '2026', 'spend level', 'beginners', 'premium', 'mid tier', 'comparison'], excerpt: 'Cards ranked by real ₹/point value for every spend level — under ₹5L, ₹5-15L, and ₹15L+.' },
  { title: 'Best Lifetime Free Credit Cards India 2026', url: '/blog/best-lifetime-free-credit-cards-india-2026', type: 'Guide', tags: ['free credit card', 'lifetime free', 'ltf', 'no annual fee', 'amazon pay icici', 'sbi cashback', 'scapia', 'zero fee'], excerpt: '10 genuinely free cards ranked by effective return. Plus the ₹0-fee three-card portfolio.' },
  { title: 'Best Cards for International Travel India 2026', url: '/blog/best-credit-cards-international-travel-india-2026', type: 'Guide', tags: ['international travel', 'forex', 'lounge', 'foreign spend', 'zero markup', 'scapia', 'infinia', 'overseas', 'abroad'], excerpt: 'Ranked by forex markup, lounge access, reward rate. Scapia at zero markup vs Infinia at 1.36% net.' },
  { title: 'Best Cards for Fuel India 2026', url: '/blog/best-credit-cards-fuel-india-2026', type: 'Guide', tags: ['fuel', 'petrol', 'diesel', 'bpcl', 'hpcl', 'iocl', 'surcharge waiver', 'amazon pay', 'fuel card'], excerpt: 'The best fuel card isn\'t a fuel card. Amazon Pay ICICI via HP Pay gives 5% at ₹0 fee.' },
  { title: 'Best Cards for Rent Payments India 2026', url: '/blog/best-credit-cards-rent-payment-india-2026', type: 'Guide', tags: ['rent', 'rent payment', 'cred', 'nobroker', 'hsbc premier', 'mcc 6513', 'platform fee', 'rent rewards'], excerpt: 'Most banks excluded rent from rewards in 2026. Here\'s what still works and the fee waiver play.' },
  { title: 'Best Cards for Flights on Points India 2026', url: '/blog/best-credit-cards-flights-on-points-india-2026', type: 'Guide', tags: ['flights', 'airline miles', 'points', 'krisflyer', 'business class', 'economy', 'transfer', 'flying blue'], excerpt: 'Real ₹/mile returns post-devaluation. HDFC Infinia at ~33%, Magnus now only ~10%.' },
  { title: 'Best Cards for Hotels on Points India 2026', url: '/blog/best-credit-cards-hotels-on-points-india-2026', type: 'Guide', tags: ['hotels', 'marriott', 'accor', 'ihg', 'itc', 'bonvoy', 'hotel transfer', 'hotel points'], excerpt: 'After Axis removed Marriott and Accor in April 2026 — what\'s left and what it\'s worth.' },
  { title: 'Best Cards for Utility Bills India 2026', url: '/blog/best-credit-cards-utility-bills-india-2026', type: 'Guide', tags: ['utility', 'electricity', 'gas', 'tax', 'bbps', 'biz black', 'business card', 'mcc exclusion', '16.6%'], excerpt: 'Most consumer cards earn ₹0 on utilities. HDFC Biz Black earns 16.6% — but requires a business entity.' },
  // Loyalty Guides
  { title: 'Singapore Airlines KrisFlyer India Guide 2026', url: '/blog/singapore-airlines-krisflyer-india-guide-2026', type: 'Loyalty Guide', tags: ['krisflyer', 'singapore airlines', 'miles', 'saver', 'advantage', 'business class', 'del sin', 'transfer', 'stopover'], excerpt: 'Transfer cards, India route sweet spots, post-Nov 2025 award chart, step-by-step booking guide.' },
  { title: 'Airline Miles Transfer Guide India 2026', url: '/blog/credit-card-airline-miles-transfer-india-2026', type: 'Guide', tags: ['airline transfer', 'miles', 'avios', 'ba', 'british airways', 'finnair', 'emirates', 'air india', 'transfer partners'], excerpt: 'When to transfer vs use SmartBuy. The Avios hack, route math, and transfers to avoid.' },
  // Trackers
  { title: 'Credit Card Devaluation Tracker 2024-2026', url: '/blog/credit-card-devaluation-tracker-india-2026', type: 'Tracker', tags: ['devaluation', 'axis', 'hdfc', 'sbi', 'changes', 'reward cut', 'april 2026', 'marriott removed', 'points reduced'], excerpt: 'Every reward cut documented with dates. HDFC, Axis, SBI, ICICI — updated monthly.' },
  { title: 'HDFC SmartBuy Complete Guide 2026', url: '/blog/hdfc-smartbuy-guide-2026', type: 'Guide', tags: ['smartbuy', 'hdfc', 'voucher hack', 'flights', 'hotels', '10x', '5x', 'gyftr', '70/30 rule', 'earn rate'], excerpt: 'The voucher hack, earn rates by card, monthly caps, and 4 mistakes that waste your points.' },
  { title: 'What Are Your Points Worth in 2026', url: '/blog/credit-card-points-value-india-2026', type: 'Guide', tags: ['points value', 'reward points', 'rupee value', 'per point', '2026', 'how much worth', 'catalogue'], excerpt: 'Post-devaluation reality check — card by card, method by method.' },
  // Tools
  { title: 'Points Value Calculator', url: '/', type: 'Tool', tags: ['calculator', 'check points', 'how much worth', 'reward points', 'hdfc', 'axis', 'sbi', 'icici', 'amex', 'value'], excerpt: 'Select your card, enter your balance, see every redemption option ranked by ₹ value.' },
  { title: 'Which Card Suits Me? Quiz', url: '/tools/card-quiz', type: 'Tool', tags: ['card quiz', 'which card', 'best card for me', 'recommendation', 'quiz', 'find card', 'card suggestion'], excerpt: '5 questions about your spending → personalised card recommendation with match score.' },
  { title: 'Fee Breakeven Calculator', url: '/tools/breakeven', type: 'Tool', tags: ['annual fee', 'fee waiver', 'worth it', 'breakeven', 'calculator', 'annual fee calculation', 'value'], excerpt: 'Enter your annual spend → see if your card\'s annual fee is justified.' },
  { title: 'Points Expiry Reminder', url: '/tools/expiry-reminder', type: 'Tool', tags: ['expiry', 'expire', 'reminder', 'krisflyer expire', 'points expire', 'hdfc expire', '3 years', 'email reminder'], excerpt: 'Set an email reminder before your reward points or airline miles expire.' },
  { title: 'Transfer Partners Directory', url: '/transfers', type: 'Tool', tags: ['transfer partners', 'airlines', 'hotels', 'krisflyer', 'marriott', 'accor', 'ihg', 'ratio', 'transfer ratio'], excerpt: 'Every airline and hotel partner with post-2026 devaluation ratios. Filterable by card.' },
]

const TYPE_COLORS = {
  'Card Review': '#2563eb',
  'Guide': 'var(--green)',
  'Loyalty Guide': '#0891b2',
  'Tracker': 'var(--red)',
  'Tool': 'var(--gold)',
}

import PageNav from '@/components/PageNav'

function search(query) {
  if (!query || query.trim().length < 2) return []
  const q = query.toLowerCase().trim()
  const words = q.split(/\s+/)
  return CONTENT_INDEX
    .map(item => {
      const titleScore = item.title.toLowerCase().includes(q) ? 10 : 0
      const tagScore = words.reduce((sum, word) => sum + item.tags.filter(t => t.includes(word)).length * 3, 0)
      const excerptScore = item.excerpt.toLowerCase().includes(q) ? 2 : 0
      const wordInTitle = words.reduce((sum, word) => sum + (item.title.toLowerCase().includes(word) ? 4 : 0), 0)
      return { ...item, score: titleScore + tagScore + excerptScore + wordInTitle }
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8)
}

function trackSearch(query, resultsCount) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'site_search', { search_term: query, results_count: resultsCount })
  }
}

async function logSearch(query, resultsCount) {
  try {
    await supabase.from('search_queries').insert([{ query, results_count: resultsCount }])
  } catch {}
}

export default function SearchPage() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [searched, setSearched] = useState(false)
  const [recentSearches, setRecentSearches] = useState([])

  useEffect(() => {
    const saved = localStorage.getItem('pm_recent_searches')
    if (saved) setRecentSearches(JSON.parse(saved).slice(0, 5))
    // Check URL params
    const params = new URLSearchParams(window.location.search)
    const q = params.get('q')
    if (q) { setQuery(q); doSearch(q) }
  }, [])

  const doSearch = useCallback((q) => {
    if (!q.trim()) return
    const res = search(q)
    setResults(res)
    setSearched(true)
    trackSearch(q, res.length)
    logSearch(q, res.length)
    // Save to recent
    setRecentSearches(prev => {
      const updated = [q, ...prev.filter(s => s !== q)].slice(0, 5)
      localStorage.setItem('pm_recent_searches', JSON.stringify(updated))
      return updated
    })
    window.history.replaceState({}, '', `/search?q=${encodeURIComponent(q)}`)
  }, [])

  const handleSubmit = (e) => { e.preventDefault(); doSearch(query) }

  const SUGGESTIONS = ['HDFC Infinia points value', 'Axis Magnus after devaluation', 'KrisFlyer business class India', 'best free credit card', 'rent payment rewards', 'forex markup comparison']

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <PageNav />
      <main className="max-w-2xl mx-auto px-5 py-10">
        <h1 className="mb-6" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '26px', color: 'var(--text)', letterSpacing: '-0.02em' }}>
          Search PointsMax
        </h1>

        {/* Search box */}
        <form onSubmit={handleSubmit} className="relative mb-8">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: 'var(--text-m)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <input type="text" value={query} onChange={e => setQuery(e.target.value)}
            placeholder="Search cards, guides, tools..."
            autoFocus
            className="w-full pl-12 pr-14 py-4 rounded-2xl text-[16px] outline-none"
            style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--text)' }} />
          {query && (
            <button type="button" onClick={() => { setQuery(''); setResults([]); setSearched(false) }}
              className="absolute right-12 top-1/2 -translate-y-1/2 p-1 rounded-full"
              style={{ color: 'var(--text-m)' }}>✕</button>
          )}
          <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg text-[13px] font-semibold"
            style={{ background: 'var(--dark)', color: '#FAF8F5' }}>Go</button>
        </form>

        {/* Pre-search state */}
        {!searched && (
          <div>
            {recentSearches.length > 0 && (
              <div className="mb-6">
                <p className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--text-m)' }}>Recent searches</p>
                <div className="flex flex-wrap gap-2">
                  {recentSearches.map(s => (
                    <button key={s} onClick={() => { setQuery(s); doSearch(s) }}
                      className="px-3 py-1.5 rounded-full text-[13px]"
                      style={{ background: 'var(--bg-s)', border: '1px solid var(--border)', color: 'var(--text-s)' }}>
                      ↩ {s}
                    </button>
                  ))}
                </div>
              </div>
            )}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--text-m)' }}>Popular searches</p>
              <div className="flex flex-wrap gap-2">
                {SUGGESTIONS.map(s => (
                  <button key={s} onClick={() => { setQuery(s); doSearch(s) }}
                    className="px-3 py-1.5 rounded-full text-[13px]"
                    style={{ background: 'var(--bg-s)', border: '1px solid var(--border)', color: 'var(--text-s)' }}>
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Results */}
        {searched && (
          <div>
            <p className="text-[13px] mb-4" style={{ color: 'var(--text-m)' }}>
              {results.length > 0 ? `${results.length} results for "${query}"` : `No results for "${query}"`}
            </p>

            {results.length > 0 ? (
              <div className="space-y-3">
                {results.map((item, i) => (
                  <a key={i} href={item.url} className="block p-4 rounded-xl transition-all duration-200"
                    style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-m)'; e.currentTarget.style.background = 'var(--bg-s)' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--card)' }}>
                    <div className="flex items-start gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded"
                            style={{ color: TYPE_COLORS[item.type] || 'var(--text-m)', background: (TYPE_COLORS[item.type] || 'var(--text-m)') + '12' }}>
                            {item.type}
                          </span>
                        </div>
                        <p className="text-[15px] font-semibold" style={{ color: 'var(--text)' }}>{item.title}</p>
                        <p className="text-[13px] mt-1" style={{ color: 'var(--text-s)' }}>{item.excerpt}</p>
                        <p className="text-[11px] mt-1.5" style={{ color: 'var(--text-m)' }}>pointsmax.in{item.url}</p>
                      </div>
                      <svg className="w-4 h-4 shrink-0 mt-1" style={{ color: 'var(--text-m)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <div className="py-12 text-center">
                <p className="text-[15px] mb-2" style={{ color: 'var(--text-s)' }}>Nothing found for "{query}"</p>
                <p className="text-[13px]" style={{ color: 'var(--text-m)' }}>Try searching for a card name, bank, or topic like "Infinia" or "KrisFlyer"</p>
                <div className="flex flex-wrap gap-2 justify-center mt-4">
                  {SUGGESTIONS.slice(0, 3).map(s => (
                    <button key={s} onClick={() => { setQuery(s); doSearch(s) }}
                      className="px-3 py-1.5 rounded-full text-[13px]"
                      style={{ background: 'var(--bg-s)', border: '1px solid var(--border)', color: 'var(--text-s)' }}>{s}</button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  )
}
