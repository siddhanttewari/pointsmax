'use client'
import PageNav from '@/components/PageNav'

import { useState, useMemo, useEffect } from 'react'
import { breakeven as breakevenTrack } from '@/lib/analytics'

const CARDS = [
  { name: 'HDFC Infinia', fee: 12500, feeWaiver: 1000000, rewardRate: 0.0333, pointValue: 1.00, perks: ['Unlimited lounges', 'Golf access', '22 transfer partners', 'Club Marriott'] },
  { name: 'HDFC Diners Club Black', fee: 10000, feeWaiver: 500000, rewardRate: 0.0333, pointValue: 1.00, perks: ['Unlimited lounges', 'Golf access', '22 transfer partners'] },
  { name: 'HDFC Regalia Gold', fee: 2500, feeWaiver: 300000, rewardRate: 0.02, pointValue: 0.50, perks: ['8 lounge visits/yr', 'SmartBuy vouchers (capped Jul 2026)'] },
  { name: 'Axis Magnus', fee: 12500, feeWaiver: 1500000, rewardRate: 0.025, pointValue: 0.50, perks: ['Unlimited lounges', '8 transfer partners', 'Travel EDGE portal'] },
  { name: 'Axis Atlas', fee: 5000, feeWaiver: 1500000, rewardRate: 0.02, pointValue: 0.50, perks: ['Domestic lounges', '8 transfer partners'] },
  { name: 'Amex Platinum', fee: 66000, feeWaiver: null, rewardRate: 0.02, pointValue: 0.80, perks: ['Taj 25% off', '1400+ lounges', 'FHR credits', 'EazyDiner Prime'] },
  { name: 'Amex Gold (MRCC)', fee: 9000, feeWaiver: 150000, rewardRate: 0.02, pointValue: 0.50, perks: ['Reward Multiplier 5X', 'Airline transfers'] },
  { name: 'SBI Elite', fee: 4999, feeWaiver: 1000000, rewardRate: 0.01, pointValue: 0.25, perks: ['8 lounge visits/yr', 'Club Vistara Silver'] },
  { name: 'ICICI Emeralde', fee: 12000, feeWaiver: 1500000, rewardRate: 0.015, pointValue: 0.50, perks: ['Unlimited lounges', 'Golf', 'InterMiles transfers'] },
  { name: 'IDFC FIRST Select', fee: 999, feeWaiver: 125000, rewardRate: 0.02, pointValue: 0.25, perks: ['4X select categories'] },
]

const PERK_VALUES = {
  'Unlimited lounges': 18000,
  'Domestic lounges': 8000,
  '8 lounge visits/yr': 12000,
  'Golf access': 6000,
  '22 transfer partners': 5000,
  '8 transfer partners': 2000,
  'Club Marriott': 4000,
  'SmartBuy 5X vouchers': 3000,
  'Travel EDGE portal': 2000,
  'Taj 25% off': 0, // user inputs this
  '1400+ lounges': 20000,
  'FHR credits': 0, // user inputs
  'EazyDiner Prime': 3000,
  'Reward Multiplier 5X': 3000,
  'Airline transfers': 2000,
  '8 lounge visits/yr': 12000,
  'Club Vistara Silver': 3000,
  'Golf': 4000,
  'InterMiles transfers': 2000,
  '4X select categories': 2000,
}

export default function BreakevenCalculator() {
  const [selectedCard, setSelectedCard] = useState(CARDS[0])
  const [annualSpend, setAnnualSpend] = useState(1000000)
  const [extraPerks, setExtraPerks] = useState(0)

  const card = selectedCard
  const spend = annualSpend || 0
  const rewardValue = spend * card.rewardRate * card.pointValue
  const perkValue = card.perks.reduce((sum, p) => sum + (PERK_VALUES[p] || 0), 0) + (extraPerks || 0)
  const totalValue = rewardValue + perkValue
  const netValue = totalValue - card.fee
  const feeWaived = card.feeWaiver && spend >= card.feeWaiver
  const effectiveFee = feeWaived ? 0 : card.fee
  const netAfterWaiver = totalValue - effectiveFee
  const breakevenSpend = card.feeWaiver
    ? Math.max(0, (card.fee - perkValue) / (card.rewardRate * card.pointValue))
    : null

  const isPositive = netAfterWaiver > 0
  const pct = Math.min(100, Math.max(0, (totalValue / (card.fee + 10000)) * 100))

  // Track card selection
  useEffect(() => {
    breakevenTrack.selectCard(card.name, card.fee)
  }, [card.name])

  // Track spend changes (debounced — only when user stops)
  useEffect(() => {
    const t = setTimeout(() => breakevenTrack.enterSpend(annualSpend), 800)
    return () => clearTimeout(t)
  }, [annualSpend])

  // Track result view whenever card or spend changes
  useEffect(() => {
    if (annualSpend > 0) {
      breakevenTrack.viewResult(card.name, Math.round(netAfterWaiver), isPositive, feeWaived)
    }
  }, [card.name, annualSpend, netAfterWaiver])

  return (
    <div className="min-h-screen">
      <PageNav />

      <main className="max-w-2xl mx-auto px-5 py-12">
        <div className="mb-8">
          <span className="text-[11px] font-bold uppercase tracking-widest px-2 py-1 rounded" style={{ color: 'var(--gold)', background: 'rgba(184,149,62,0.08)' }}>Free Tool</span>
          <h1 className="mt-3" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(24px,4vw,34px)', letterSpacing: '-0.02em', color: 'var(--text)' }}>
            Annual Fee Breakeven Calculator
          </h1>
          <p className="mt-2 text-[15px]" style={{ color: 'var(--text-s)' }}>Is your credit card's annual fee worth it? Enter your spend and we'll do the math.</p>
        </div>

        <div className="space-y-6">
          {/* Card selector */}
          <div>
            <label className="block text-[13px] font-semibold mb-2" style={{ color: 'var(--text-s)' }}>Select your card</label>
            <div className="grid grid-cols-1 gap-2">
              {CARDS.map(c => (
                <button key={c.name} onClick={() => setSelectedCard(c)}
                  className="flex items-center justify-between p-3.5 rounded-xl text-left transition-all"
                  style={{ background: selectedCard.name === c.name ? 'var(--card)' : 'transparent', border: '1px solid ' + (selectedCard.name === c.name ? 'var(--border-m)' : 'var(--border)'), boxShadow: selectedCard.name === c.name ? '0 1px 4px rgba(0,0,0,0.06)' : 'none' }}>
                  <div>
                    <p className="text-[14px] font-semibold" style={{ color: 'var(--text)' }}>{c.name}</p>
                    <p className="text-[12px] mt-0.5" style={{ color: 'var(--text-m)' }}>₹{c.fee.toLocaleString('en-IN')}/yr · {(c.rewardRate * c.pointValue * 100).toFixed(1)}% effective return</p>
                  </div>
                  {c.feeWaiver && <span className="text-[10px] px-1.5 py-0.5 rounded font-medium shrink-0" style={{ color: 'var(--green)', background: 'rgba(45,106,79,0.08)' }}>Fee waivable</span>}
                </button>
              ))}
            </div>
          </div>

          {/* Spend input */}
          <div>
            <label className="block text-[13px] font-semibold mb-2" style={{ color: 'var(--text-s)' }}>Annual credit card spend</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[18px] font-bold" style={{ color: 'var(--text-m)' }}>₹</span>
              <input type="number" value={annualSpend} onChange={e => setAnnualSpend(parseInt(e.target.value) || 0)}
                className="w-full pl-9 pr-4 py-3.5 rounded-xl text-[18px] font-mono font-bold outline-none"
                style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--text)' }} />
            </div>
            <div className="flex gap-2 mt-2 flex-wrap">
              {[500000, 1000000, 1500000, 2000000, 3000000].map(v => (
                <button key={v} onClick={() => setAnnualSpend(v)}
                  className="px-3 py-1 rounded-lg text-[12px] font-medium transition-all"
                  style={{ background: annualSpend === v ? 'var(--dark)' : 'var(--bg-s)', color: annualSpend === v ? '#FAF8F5' : 'var(--text-s)', border: '1px solid var(--border)' }}>
                  ₹{(v/100000).toFixed(0)}L
                </button>
              ))}
            </div>
          </div>

          {/* Extra perks */}
          <div>
            <label className="block text-[13px] font-semibold mb-2" style={{ color: 'var(--text-s)' }}>
              Extra perk value you personally extract (hotels, dining discounts, etc.)
              <span className="font-normal ml-1" style={{ color: 'var(--text-m)' }}>— be honest</span>
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[16px] font-bold" style={{ color: 'var(--text-m)' }}>₹</span>
              <input type="number" value={extraPerks} onChange={e => setExtraPerks(parseInt(e.target.value) || 0)} placeholder="0"
                className="w-full pl-9 pr-4 py-3 rounded-xl text-[16px] font-mono outline-none"
                style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--text)' }} />
            </div>
          </div>

          {/* Result */}
          <div className="rounded-2xl p-6" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <div className="flex items-center justify-between mb-1">
              <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: 'rgba(250,248,245,0.4)' }}>{card.name}</p>
              {feeWaived && <span className="text-[10px] font-bold px-2 py-0.5 rounded" style={{ color: '#6ee7b7', background: 'rgba(110,231,183,0.1)' }}>FEE WAIVED ✓</span>}
            </div>

            {/* Value breakdown */}
            <div className="space-y-2 mt-4">
              {[
                { label: 'Rewards earned', value: rewardValue, positive: true },
                { label: 'Standard perks value', value: perkValue - (extraPerks || 0), positive: true },
                { label: 'Your extra perk value', value: extraPerks || 0, positive: true },
                { label: 'Annual fee', value: effectiveFee, positive: false },
              ].map((row, i) => (
                <div key={i} className="flex items-center justify-between py-1.5" style={{ borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                  <span className="text-[13px]" style={{ color: 'rgba(250,248,245,0.55)' }}>{row.label}</span>
                  <span className="text-[14px] font-mono font-semibold" style={{ color: row.positive ? '#6ee7b7' : '#fca5a5' }}>
                    {row.positive ? '+' : '-'}₹{Math.abs(row.value).toLocaleString('en-IN')}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <div className="flex items-end justify-between">
                <p className="text-[13px]" style={{ color: 'rgba(250,248,245,0.6)' }}>Net value per year</p>
                <p className="text-[32px] font-mono font-extrabold leading-none" style={{ color: netAfterWaiver >= 0 ? '#4ade80' : '#f87171' }}>
                  {netAfterWaiver >= 0 ? '+' : ''}₹{netAfterWaiver.toLocaleString('en-IN')}
                </p>
              </div>
              <p className="mt-3 text-[13px]" style={{ color: netAfterWaiver >= 0 ? '#6ee7b7' : '#fca5a5' }}>
                {netAfterWaiver >= 0
                  ? `✓ This card pays for itself — you gain ₹${netAfterWaiver.toLocaleString('en-IN')}/year.`
                  : `✗ This card costs you a net ₹${Math.abs(netAfterWaiver).toLocaleString('en-IN')}/year.`}
              </p>
              {!feeWaived && card.feeWaiver && (
                <p className="mt-2 text-[12px]" style={{ color: 'rgba(250,248,245,0.4)' }}>
                  Fee waiver at ₹{(card.feeWaiver/100000).toFixed(0)}L spend — you're ₹{((card.feeWaiver - spend)/100000).toFixed(1)}L away
                </p>
              )}
            </div>
          </div>

          {/* Advice */}
          {netAfterWaiver < 0 && (
            <div className="p-4 rounded-xl" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
              <p className="text-[13px] font-semibold mb-1" style={{ color: 'var(--red)' }}>This card may not be worth it for you</p>
              <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>
                At your spend level, consider{' '}
                {card.fee > 5000
                  ? <a href="/blog/best-lifetime-free-credit-cards-india-2026" style={{ color: 'var(--red)', textDecoration: 'underline' }}>a free card portfolio that gives 3-5% return at ₹0/year</a>
                  : 'increasing your spend to hit the fee waiver threshold'
                }.
              </p>
            </div>
          )}
          {netAfterWaiver >= 0 && (
            <div className="p-4 rounded-xl" style={{ background: '#EDF5F0', border: '1px solid #C8DDD0' }}>
              <p className="text-[13px] font-semibold mb-1" style={{ color: 'var(--green)' }}>This card is worth it ✓</p>
              <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>
                Now check the actual ₹ value of your reward points to make sure you're redeeming optimally.{' '}
                <a href="/" style={{ color: 'var(--green)', textDecoration: 'underline' }}>Open the points calculator →</a>
              </p>
            </div>
          )}

          <div className="p-4 rounded-xl text-center mt-2" style={{ background: 'var(--bg-s)', border: '1px solid var(--border)' }}>
            <p className="text-[13px] font-semibold mb-1" style={{ color: 'var(--text)' }}>Not sure which card to get?</p>
            <a href="/tools/card-quiz" className="inline-block px-4 py-2 rounded-lg text-[13px] font-semibold mt-1" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
              Take the 2-min Card Quiz →
            </a>
          </div>
        </div>
      </main>

      <footer className="py-8 px-5" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[12px]" style={{ color: 'var(--text-m)' }}>
            <a href="/" className="hover:text-black/40 transition-colors">Calculator</a><span className="mx-2">·</span>
            <a href="/blog" className="hover:text-black/40 transition-colors">Blog</a><span className="mx-2">·</span>
            <a href="/privacy" className="hover:text-black/40 transition-colors">Privacy</a>
          </p>
          <p className="text-[11px] mt-2" style={{ color: 'var(--text-m)' }}>Values are estimates. Always verify benefits on your bank's website.</p>
        </div>
      </footer>
    </div>
  )
}
