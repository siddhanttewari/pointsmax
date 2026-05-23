'use client'

import { useState } from 'react'

const QUESTIONS = [
  {
    id: 'spend',
    question: 'How much do you spend on your credit card annually?',
    options: [
      { label: 'Under ₹2 lakh', value: 'low', icon: '💳' },
      { label: '₹2-5 lakh', value: 'mid-low', icon: '💳' },
      { label: '₹5-15 lakh', value: 'mid', icon: '💳💳' },
      { label: '₹15-30 lakh', value: 'high', icon: '💳💳💳' },
      { label: 'Above ₹30 lakh', value: 'ultra', icon: '💎' },
    ],
  },
  {
    id: 'travel',
    question: 'How often do you travel internationally?',
    options: [
      { label: 'Never / rarely', value: 'none', icon: '🏠' },
      { label: '1-2 times a year', value: 'light', icon: '✈️' },
      { label: '3-5 times a year', value: 'moderate', icon: '✈️✈️' },
      { label: '6+ times a year', value: 'heavy', icon: '🌍' },
    ],
  },
  {
    id: 'priority',
    question: 'What matters most to you from a credit card?',
    options: [
      { label: 'Maximum cashback on online shopping', value: 'cashback', icon: '🛒' },
      { label: 'Travel rewards & airline miles', value: 'travel', icon: '🎫' },
      { label: 'Lounge access & lifestyle perks', value: 'lifestyle', icon: '🛋️' },
      { label: 'Highest reward points value', value: 'points', icon: '📈' },
      { label: 'Zero fee — I won\'t pay annual charges', value: 'free', icon: '🆓' },
    ],
  },
  {
    id: 'fee',
    question: 'What annual fee are you comfortable with?',
    options: [
      { label: '₹0 — completely free only', value: 0, icon: '🆓' },
      { label: 'Up to ₹2,500', value: 2500, icon: '👌' },
      { label: 'Up to ₹5,000', value: 5000, icon: '👍' },
      { label: 'Up to ₹12,500', value: 12500, icon: '💰' },
      { label: 'I\'ll pay any fee if it\'s worth it', value: 99999, icon: '💎' },
    ],
  },
  {
    id: 'bank',
    question: 'Do you bank primarily with any of these?',
    options: [
      { label: 'HDFC Bank', value: 'hdfc', icon: '🔵' },
      { label: 'Axis Bank', value: 'axis', icon: '🔴' },
      { label: 'SBI', value: 'sbi', icon: '🟢' },
      { label: 'ICICI Bank', value: 'icici', icon: '🟠' },
      { label: 'No preference', value: 'none', icon: '⚖️' },
    ],
  },
]

const getRecommendations = (answers) => {
  const { spend, travel, priority, fee, bank } = answers

  const cards = []

  // Premium tier
  if (['high', 'ultra'].includes(spend) && fee >= 12500) {
    if (bank === 'hdfc' || bank === 'none') {
      cards.push({
        name: 'HDFC Infinia',
        match: spend === 'ultra' ? 99 : 95,
        fee: '₹12,500 (waived ₹10L)',
        returns: '3.33% via SmartBuy',
        why: 'Best overall card in India. ₹1/point on SmartBuy, 22 transfer partners, unlimited lounges. Fee waiver at ₹10L spend.',
        link: '/blog/hdfc-infinia-credit-card-review-2026',
        tag: 'Best Match',
        tagColor: 'var(--green)',
      })
    }
    if (bank === 'hdfc' || bank === 'none') {
      cards.push({
        name: 'HDFC Diners Club Black',
        match: 90,
        fee: '₹10,000 (waived ₹5L)',
        returns: '3.33% via SmartBuy',
        why: 'Same rewards as Infinia, lower fee, easier to get. Visa acceptance is limited abroad — pick Infinia for international heavy use.',
        link: '/blog/hdfc-infinia-credit-card-review-2026',
        tag: 'Great Value',
        tagColor: 'var(--gold)',
      })
    }
    if ((bank === 'none' || bank === 'axis') && travel !== 'none') {
      cards.push({
        name: 'Axis Magnus',
        match: 82,
        fee: '₹12,500',
        returns: '2.5% via Travel EDGE',
        why: 'Good for Axis customers. ₹0.50/point on Travel EDGE, some transfer partners still active post-April 2026.',
        link: '/blog/best-credit-cards-india-2026',
        tag: 'Consider',
        tagColor: '#0891b2',
      })
    }
  }

  // Travel-focused
  if (travel === 'heavy' && fee >= 60000) {
    cards.push({
      name: 'Amex Platinum',
      match: 88,
      fee: '₹66,000 (no waiver)',
      returns: '2% + hotel/dining perks',
      why: 'Best luxury travel card. Taj 25% off, FHR credits, 1400+ lounges. Only worth it at 4+ intl trips/year with Taj stays.',
      link: '/blog/amex-platinum-charge-card-review-india-2026',
      tag: 'Luxury Pick',
      tagColor: '#7c3aed',
    })
  }

  // Mid tier
  if (['mid', 'mid-low'].includes(spend) && fee >= 2500 && fee < 12500) {
    if (bank === 'hdfc' || bank === 'none') {
      cards.push({
        name: 'HDFC Regalia Gold',
        match: 88,
        fee: '₹2,500 (waived ₹3L)',
        returns: '2% via SmartBuy',
        why: 'Best mid-range card in India. ₹0.50/point on SmartBuy, 5X on vouchers. Drastically underrated.',
        link: '/blog/best-credit-cards-india-2026',
        tag: 'Top Pick',
        tagColor: 'var(--green)',
      })
    }
    if (bank === 'axis' || bank === 'none') {
      cards.push({
        name: 'Axis Atlas',
        match: 82,
        fee: '₹5,000',
        returns: '2% via Travel EDGE',
        why: 'Good choice for Axis customers who travel. ₹0.50/point, airport lounges.',
        link: '/blog/best-credit-cards-india-2026',
        tag: 'Good Pick',
        tagColor: 'var(--gold)',
      })
    }
  }

  // Free / cashback seekers
  if (priority === 'free' || priority === 'cashback' || fee === 0 || ['low', 'mid-low'].includes(spend)) {
    cards.push({
      name: 'Amazon Pay ICICI',
      match: 95,
      fee: '₹0 forever',
      returns: '5% on Amazon',
      why: 'Best genuinely free card. 5% back on Amazon for Prime members. No conditions, no fee, no drama.',
      link: '/blog/best-lifetime-free-credit-cards-india-2026',
      tag: 'Best Free',
      tagColor: 'var(--green)',
    })
    cards.push({
      name: 'SBI Cashback',
      match: 88,
      fee: '₹0 (most variants)',
      returns: '5% online (₹2K cap)',
      why: 'Best all-online cashback card. 5% on all online merchants — Swiggy, Zomato, subscriptions, anything online.',
      link: '/blog/best-lifetime-free-credit-cards-india-2026',
      tag: 'Stack With Above',
      tagColor: 'var(--gold)',
    })
    if (travel !== 'none') {
      cards.push({
        name: 'Scapia Federal',
        match: 82,
        fee: '₹0 forever',
        returns: '2% + zero forex + lounges',
        why: 'Only free card with zero forex markup AND lounge access. Essential for anyone who travels internationally.',
        link: '/blog/best-lifetime-free-credit-cards-india-2026',
        tag: 'Travel Add-on',
        tagColor: '#0891b2',
      })
    }
  }

  // Deduplicate and sort
  const seen = new Set()
  return cards.filter(c => {
    if (seen.has(c.name)) return false
    seen.add(c.name)
    return true
  }).sort((a, b) => b.match - a.match).slice(0, 3)
}

export default function CardQuiz() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [done, setDone] = useState(false)
  const [recs, setRecs] = useState([])

  const q = QUESTIONS[step]

  const handleAnswer = (val) => {
    const newAnswers = { ...answers, [q.id]: val }
    setAnswers(newAnswers)
    if (step < QUESTIONS.length - 1) {
      setStep(step + 1)
    } else {
      setRecs(getRecommendations(newAnswers))
      setDone(true)
    }
  }

  const reset = () => { setStep(0); setAnswers({}); setDone(false); setRecs([]) }

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <nav className="sticky top-0 z-50" style={{ background: 'var(--dark)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-2xl mx-auto flex items-center justify-between px-5 py-3.5">
          <a href="/" className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg grid place-items-center" style={{ background: 'var(--gold)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1A1614" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h5l3-9 4 18 3-9h5" /></svg>
            </div>
            <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '17px', color: '#FAF8F5' }}>PointsMax</span>
          </a>
          <a href="/tools/breakeven" className="text-[13px]" style={{ color: 'rgba(250,248,245,0.5)' }}>Breakeven Calculator</a>
        </div>
      </nav>

      <main className="max-w-lg mx-auto px-5 py-12">
        {!done ? (
          <>
            {/* Progress */}
            <div className="flex gap-1.5 mb-8">
              {QUESTIONS.map((_, i) => (
                <div key={i} className="h-1 flex-1 rounded-full transition-all duration-300"
                  style={{ background: i <= step ? 'var(--gold)' : 'var(--border)' }} />
              ))}
            </div>

            <p className="text-[12px] font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--text-m)' }}>
              Question {step + 1} of {QUESTIONS.length}
            </p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: 'clamp(20px,4vw,26px)', color: 'var(--text)', lineHeight: 1.2 }}>
              {q.question}
            </h2>

            <div className="mt-6 space-y-2" style={{ animation: 'fadeUp 0.3s ease both' }}>
              {q.options.map(opt => (
                <button key={opt.value} onClick={() => handleAnswer(opt.value)}
                  className="w-full flex items-center gap-3.5 p-4 rounded-xl text-left transition-all duration-200"
                  style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-m)'; e.currentTarget.style.background = 'var(--bg-s)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--card)' }}>
                  <span className="text-[20px] shrink-0">{opt.icon}</span>
                  <span className="text-[15px] font-medium" style={{ color: 'var(--text)' }}>{opt.label}</span>
                </button>
              ))}
            </div>

            {step > 0 && (
              <button onClick={() => setStep(step - 1)} className="mt-4 text-[13px]" style={{ color: 'var(--text-m)' }}>
                ← Back
              </button>
            )}
          </>
        ) : (
          <div style={{ animation: 'fadeUp 0.4s ease both' }}>
            <div className="text-center mb-8">
              <p className="text-[32px] mb-2">✨</p>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '26px', color: 'var(--text)' }}>
                Your Recommendations
              </h2>
              <p className="mt-2 text-[14px]" style={{ color: 'var(--text-s)' }}>Based on your spend pattern and preferences</p>
            </div>

            <div className="space-y-4">
              {recs.map((rec, i) => (
                <div key={rec.name} className="p-5 rounded-2xl" style={{ background: 'var(--card)', border: '1px solid var(--border)', boxShadow: i === 0 ? '0 2px 8px rgba(0,0,0,0.06)' : 'none' }}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <p className="text-[16px] font-bold" style={{ color: 'var(--text)' }}>{rec.name}</p>
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded" style={{ color: rec.tagColor, background: rec.tagColor + '12' }}>{rec.tag}</span>
                      </div>
                      <p className="text-[12px]" style={{ color: 'var(--text-m)' }}>Fee: {rec.fee} · Return: {rec.returns}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="w-12 h-12 rounded-full grid place-items-center" style={{ background: rec.match >= 90 ? 'rgba(45,106,79,0.08)' : 'rgba(184,149,62,0.08)' }}>
                        <span className="text-[14px] font-mono font-bold" style={{ color: rec.match >= 90 ? 'var(--green)' : 'var(--gold)' }}>{rec.match}%</span>
                      </div>
                      <p className="text-[9px] mt-0.5" style={{ color: 'var(--text-m)' }}>match</p>
                    </div>
                  </div>
                  <p className="text-[13px] mt-3 leading-relaxed" style={{ color: 'var(--text-s)' }}>{rec.why}</p>
                  <div className="flex gap-2 mt-4">
                    <a href={rec.link} className="flex-1 py-2 rounded-lg text-[13px] font-semibold text-center transition-all"
                      style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
                      Read full review →
                    </a>
                    <a href="/" className="px-4 py-2 rounded-lg text-[13px] font-semibold text-center transition-all"
                      style={{ background: 'var(--bg-s)', color: 'var(--text-s)', border: '1px solid var(--border)' }}>
                      Check points
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl text-center" style={{ background: 'var(--bg-s)', border: '1px solid var(--border)' }}>
              <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>Already have one of these? Check what your points are worth.</p>
              <a href="/" className="inline-block mt-2 px-5 py-2 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>Open Calculator →</a>
            </div>

            <button onClick={reset} className="w-full mt-4 py-2.5 rounded-xl text-[13px] font-medium" style={{ background: 'transparent', border: '1px solid var(--border)', color: 'var(--text-s)' }}>
              Retake Quiz
            </button>
          </div>
        )}
      </main>
    </div>
  )
}
