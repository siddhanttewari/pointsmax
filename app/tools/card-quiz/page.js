'use client'
import PageNav from '@/components/PageNav'
import ResultCapture from '@/components/ResultCapture'

import { useState, useEffect } from 'react'
import { quiz as quizTrack } from '@/lib/analytics'

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

  const ALL_CARDS = {
    infinia: { name: 'HDFC Infinia', fee: '₹12,500 (waived ₹10L)', returns: '3.33% via SmartBuy', why: 'Best overall card in India. ₹1/point on SmartBuy, 22 transfer partners, unlimited lounges. Fee waiver at ₹10L spend.', link: '/blog/hdfc-infinia-credit-card-review-2026', tag: 'Top Rated', tagColor: 'var(--green)' },
    diners: { name: 'HDFC Diners Club Black', fee: '₹10,000 (waived ₹5L)', returns: '3.33% via SmartBuy', why: 'Same rewards as Infinia at lower fee. Slightly harder to use internationally due to Diners network, but rewards are identical.', link: '/blog/hdfc-infinia-credit-card-review-2026', tag: 'Great Value', tagColor: 'var(--gold)' },
    regaliaGold: { name: 'HDFC Regalia Gold', fee: '₹2,500 (waived ₹3L)', returns: '2% via SmartBuy', why: 'Best mid-range card. ₹0.50/point on SmartBuy, 5X on vouchers. Most underrated HDFC card right now.', link: '/blog/best-credit-cards-india-2026', tag: 'Best Mid-Range', tagColor: 'var(--green)' },
    magnus: { name: 'Axis Magnus', fee: '₹12,500', returns: '2.5% via Travel EDGE', why: '₹0.50/point on Travel EDGE, some airline transfer partners still active. Best for Axis banking customers who travel.', link: '/blog/best-credit-cards-india-2026', tag: 'Consider', tagColor: '#0891b2' },
    atlas: { name: 'Axis Atlas', fee: '₹5,000', returns: '2% via Travel EDGE', why: 'Good mid-tier Axis card. ₹0.50/point on travel portal, airport lounges, lower fee than Magnus.', link: '/blog/best-credit-cards-india-2026', tag: 'Good Pick', tagColor: 'var(--gold)' },
    amexPlat: { name: 'Amex Platinum', fee: '₹66,000 (no waiver)', returns: '2% + hotel/lounge perks', why: 'Best luxury travel card if you travel 4+ times internationally and stay at Taj properties. Math only works for heavy travellers.', link: '/blog/amex-platinum-charge-card-review-india-2026', tag: 'Luxury', tagColor: '#7c3aed' },
    amazon: { name: 'Amazon Pay ICICI', fee: '₹0 forever', returns: '5% on Amazon', why: 'Best genuinely free card in India. 5% back on Amazon for Prime members. No conditions whatsoever.', link: '/blog/best-lifetime-free-credit-cards-india-2026', tag: 'Best Free', tagColor: 'var(--green)' },
    sbiCashback: { name: 'SBI Cashback', fee: '₹0 (most variants)', returns: '5% online (₹2K cap)', why: 'Best all-online cashback card. 5% on all online merchants — Swiggy, Zomato, subscriptions, anything online.', link: '/blog/best-lifetime-free-credit-cards-india-2026', tag: 'Online Champ', tagColor: 'var(--gold)' },
    scapia: { name: 'Scapia Federal', fee: '₹0 forever', returns: '2% + zero forex + lounges', why: 'Only free card with zero forex markup AND lounge access. Must-have for anyone who travels internationally.', link: '/blog/best-lifetime-free-credit-cards-india-2026', tag: 'Travel Free', tagColor: '#0891b2' },
    idfcSelect: { name: 'IDFC FIRST Select', fee: '₹999 (waived ₹1.25L)', returns: '3-4% select categories', why: 'Great semi-free card with strong category rewards. Enable your top spend category quarterly for 4X returns.', link: '/blog/best-lifetime-free-credit-cards-india-2026', tag: 'Smart Pick', tagColor: 'var(--gold)' },
  }

  // Scoring: assign score to each card based on answers
  const scores = {
    infinia: 0, diners: 0, regaliaGold: 0, magnus: 0, atlas: 0,
    amexPlat: 0, amazon: 0, sbiCashback: 0, scapia: 0, idfcSelect: 0,
  }

  // Spend level scoring
  if (spend === 'ultra' || spend === 'high') { scores.infinia += 40; scores.diners += 35; scores.magnus += 20; scores.amexPlat += 15 }
  if (spend === 'mid') { scores.regaliaGold += 35; scores.atlas += 30; scores.diners += 20; scores.infinia += 15 }
  if (spend === 'mid-low') { scores.regaliaGold += 30; scores.idfcSelect += 30; scores.amazon += 25; scores.sbiCashback += 25 }
  if (spend === 'low') { scores.amazon += 40; scores.sbiCashback += 35; scores.scapia += 25; scores.idfcSelect += 20 }

  // Travel scoring
  if (travel === 'heavy') { scores.amexPlat += 35; scores.infinia += 20; scores.scapia += 15 }
  if (travel === 'moderate') { scores.infinia += 15; scores.magnus += 15; scores.scapia += 20 }
  if (travel === 'light') { scores.scapia += 25; scores.atlas += 10 }
  if (travel === 'none') { scores.amazon += 15; scores.sbiCashback += 15 }

  // Priority scoring
  if (priority === 'cashback') { scores.amazon += 30; scores.sbiCashback += 30 }
  if (priority === 'travel') { scores.infinia += 25; scores.magnus += 20; scores.scapia += 15 }
  if (priority === 'lifestyle') { scores.amexPlat += 25; scores.infinia += 15 }
  if (priority === 'points') { scores.infinia += 30; scores.diners += 25 }
  if (priority === 'free') { scores.amazon += 40; scores.scapia += 30; scores.sbiCashback += 30 }

  // Fee tolerance scoring
  if (fee === 0) { scores.amazon += 35; scores.scapia += 35; scores.sbiCashback += 30 }
  if (fee === 2500) { scores.regaliaGold += 30; scores.idfcSelect += 25; scores.amazon += 20 }
  if (fee === 5000) { scores.atlas += 25; scores.regaliaGold += 20; scores.idfcSelect += 15 }
  if (fee === 12500) { scores.infinia += 25; scores.diners += 25; scores.magnus += 20 }
  if (fee === 99999) { scores.infinia += 30; scores.amexPlat += 20; scores.diners += 25 }

  // Bank preference scoring
  if (bank === 'hdfc') { scores.infinia += 20; scores.diners += 20; scores.regaliaGold += 15 }
  if (bank === 'axis') { scores.magnus += 25; scores.atlas += 25 }
  if (bank === 'sbi') { scores.sbiCashback += 20; scores.regaliaGold += 5 }
  if (bank === 'icici') { scores.amazon += 15 }

  // Sort by score and take top 3, always return 3
  const sorted = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([key, score]) => {
      const card = ALL_CARDS[key]
      const maxScore = Object.values(scores).reduce((a, b) => Math.max(a, b), 0)
      const match = Math.min(98, Math.round(50 + (score / Math.max(maxScore, 1)) * 48))
      return { ...card, match }
    })

  return sorted
}

export default function CardQuiz() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [done, setDone] = useState(false)
  const [recs, setRecs] = useState([])

  const q = QUESTIONS[step]

  // Track quiz start on mount
  useEffect(() => { quizTrack.start() }, [])

  const handleAnswer = (val) => {
    const newAnswers = { ...answers, [q.id]: val }
    setAnswers(newAnswers)
    quizTrack.answerQuestion(q.id, step, val)
    if (step < QUESTIONS.length - 1) {
      setStep(step + 1)
    } else {
      const results = getRecommendations(newAnswers)
      setRecs(results)
      setDone(true)
      quizTrack.complete(newAnswers)
      results.forEach((rec, i) => quizTrack.viewRecommendation(rec.name, rec.match, i + 1))
    }
  }

  const reset = () => {
    quizTrack.retake()
    setStep(0); setAnswers({}); setDone(false); setRecs([])
  }

  return (
    <div className="min-h-screen">
      <PageNav />

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
                    <a href={rec.link} onClick={() => quizTrack.clickRecommendation(rec.name, rec.link)}
                      className="flex-1 py-2 rounded-lg text-[13px] font-semibold text-center transition-all"
                      style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
                      Read full review →
                    </a>
                    <a href="/" onClick={() => quizTrack.clickRecommendation(rec.name, 'calculator')}
                      className="px-4 py-2 rounded-lg text-[13px] font-semibold text-center transition-all"
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

            <div className="mt-4">
              <ResultCapture
                source="card-quiz"
                title="Save your card matches + get the free Cheat Sheet"
                summary={recs.slice(0, 3).map((rec, i) => ({ label: `#${i + 1} match`, value: rec.name }))}
              />
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
