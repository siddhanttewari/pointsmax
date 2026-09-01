'use client'
import PageNav from '@/components/PageNav'
import ResultCapture from '@/components/ResultCapture'

import { useState, useEffect } from 'react'
import { quiz as quizTrack } from '@/lib/analytics'

const QUESTIONS = [
  {
    id: 'cibil',
    question: "What's your CIBIL score?",
    helper: "Don't know it? Check free — it won't hurt your score. Most bank apps (HDFC, SBI, ICICI, Axis) show it free, updated monthly, or get one free report a year at cibil.com. Checking your own score is a \"soft inquiry\" with zero impact.",
    options: [
      { label: 'Above 750 (excellent)', value: 'excellent', icon: '🟢' },
      { label: '700–750 (good)', value: 'good', icon: '🟡' },
      { label: '650–700 (fair)', value: 'fair', icon: '🟠' },
      { label: 'Below 650 (needs work)', value: 'low', icon: '🔴' },
      { label: 'No credit history yet', value: 'ntc', icon: '⚪' },
      { label: 'Not sure', value: 'unknown', icon: '❓' },
    ],
  },
  {
    id: 'income',
    question: "What's your monthly income?",
    helper: "Premium cards have income eligibility floors. This helps rule out cards you likely can't get approved for.",
    options: [
      { label: 'Under ₹25,000', value: 'low', icon: '💼' },
      { label: '₹25,000 – ₹50,000', value: 'mid-low', icon: '💼' },
      { label: '₹50,000 – ₹1 lakh', value: 'mid', icon: '💼' },
      { label: '₹1 lakh – ₹2 lakh', value: 'high', icon: '💼' },
      { label: 'Above ₹2 lakh', value: 'ultra', icon: '💎' },
    ],
  },
  {
    id: 'spend',
    question: 'How much do you spend on your credit card annually?',
    options: [
      { label: 'Under ₹2 lakh', value: 'low', icon: '💳' },
      { label: '₹2-5 lakh', value: 'mid-low', icon: '💳' },
      { label: '₹5-15 lakh', value: 'mid', icon: '💳' },
      { label: '₹15-30 lakh', value: 'high', icon: '💳' },
      { label: 'Above ₹30 lakh', value: 'ultra', icon: '💎' },
    ],
  },
  {
    id: 'categories',
    question: 'Where does most of your spending go?',
    helper: 'Pick your top 2–3. This is the biggest factor in matching you to the right card.',
    multi: true,
    maxSelect: 3,
    options: [
      { label: 'Online shopping (Amazon, Flipkart)', value: 'online', icon: '🛒' },
      { label: 'Dining & food delivery', value: 'dining', icon: '🍽️' },
      { label: 'Groceries', value: 'groceries', icon: '🛍️' },
      { label: 'Travel — flights & hotels', value: 'travel', icon: '✈️' },
      { label: 'Fuel', value: 'fuel', icon: '⛽' },
      { label: 'Utilities & bills', value: 'utilities', icon: '💡' },
      { label: 'UPI / QR payments', value: 'upi', icon: '📱' },
      { label: 'Everyday / mixed spends', value: 'mixed', icon: '🔀' },
    ],
  },
  {
    id: 'travel',
    question: 'How often do you travel internationally?',
    options: [
      { label: 'Never / rarely', value: 'none', icon: '🏠' },
      { label: '1-2 times a year', value: 'light', icon: '✈️' },
      { label: '3-5 times a year', value: 'moderate', icon: '✈️' },
      { label: '6+ times a year', value: 'heavy', icon: '🌍' },
    ],
  },
  {
    id: 'priority',
    question: 'What matters most to you from a credit card?',
    options: [
      { label: 'Maximum cashback (simple, fixed value)', value: 'cashback', icon: '🛒' },
      { label: 'Travel rewards & airline miles', value: 'travel', icon: '🎫' },
      { label: 'Lounge access & lifestyle perks', value: 'lifestyle', icon: '🛋️' },
      { label: 'Highest reward points value', value: 'points', icon: '📈' },
      { label: "Zero fee — I won't pay annual charges", value: 'free', icon: '🆓' },
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
      { label: "I'll pay any fee if it's worth it", value: 99999, icon: '💎' },
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

const ALL_CARDS = {
  infinia: { name: 'HDFC Infinia', fee: '₹12,500 (waived ₹10L)', returns: '3.33% via SmartBuy', why: 'Best overall card in India. ₹1/point on SmartBuy, 22 transfer partners, unlimited lounges. Fee waiver at ₹10L spend.', link: '/blog/hdfc-infinia-credit-card-review-2026', tag: 'Top Rated', tagColor: 'var(--green)', minCibil: 750, minIncome: 'high', cats: ['travel','online','mixed'] },
  diners: { name: 'HDFC Diners Club Black', fee: '₹10,000 (waived ₹5L)', returns: '3.33% via SmartBuy', why: 'Same rewards as Infinia at lower fee. Slightly harder to use internationally due to Diners network, but rewards are identical.', link: '/blog/hdfc-diners-club-black-credit-card-review-2026', tag: 'Great Value', tagColor: 'var(--gold)', minCibil: 750, minIncome: 'mid', cats: ['travel','online','mixed'] },
  regaliaGold: { name: 'HDFC Regalia Gold', fee: '₹2,500 (waived ₹3L)', returns: '2% via SmartBuy', why: 'Best mid-range card. ₹0.50/point on SmartBuy, 5X on vouchers. Most underrated HDFC card right now.', link: '/blog/best-credit-cards-india-2026', tag: 'Best Mid-Range', tagColor: 'var(--green)', minCibil: 750, minIncome: 'mid-low', cats: ['online','mixed','dining'] },
  magnus: { name: 'Axis Magnus', fee: '₹12,500', returns: '2.5% via Travel EDGE', why: '₹0.50/point on Travel EDGE, some airline transfer partners still active. Best for Axis banking customers who travel.', link: '/blog/axis-magnus-credit-card-review-2026', tag: 'Consider', tagColor: '#0891b2', minCibil: 750, minIncome: 'high', cats: ['travel','mixed'] },
  atlas: { name: 'Axis Atlas', fee: '₹5,000', returns: '2% via Travel EDGE', why: 'Good mid-tier Axis card. ₹0.50/point on travel portal, airport lounges, lower fee than Magnus.', link: '/blog/best-credit-cards-india-2026', tag: 'Good Pick', tagColor: 'var(--gold)', minCibil: 730, minIncome: 'mid', cats: ['travel','dining'] },
  amexPlat: { name: 'Amex Platinum', fee: '₹66,000 (no waiver)', returns: '2% + hotel/lounge perks', why: 'Best luxury travel card if you travel 4+ times internationally and stay at Taj properties. Math only works for heavy travellers.', link: '/blog/amex-platinum-charge-card-review-india-2026', tag: 'Luxury', tagColor: '#7c3aed', minCibil: 750, minIncome: 'ultra', cats: ['travel'] },
  amazon: { name: 'Amazon Pay ICICI', fee: '₹0 forever', returns: '5% on Amazon', why: 'Best genuinely free card in India. 5% back on Amazon for Prime members. No conditions whatsoever.', link: '/blog/best-lifetime-free-credit-cards-india-2026', tag: 'Best Free', tagColor: 'var(--green)', minCibil: 700, minIncome: 'low', cats: ['online','mixed'] },
  sbiCashback: { name: 'SBI Cashback', fee: '₹0 (most variants)', returns: '5% online (₹2K cap)', why: 'Best all-online cashback card. 5% on all online merchants — Swiggy, Zomato, subscriptions, anything online.', link: '/blog/best-lifetime-free-credit-cards-india-2026', tag: 'Online Champ', tagColor: 'var(--gold)', minCibil: 720, minIncome: 'mid-low', cats: ['online','dining','utilities'] },
  hsbcLive: { name: 'HSBC Live+', fee: '₹999 (waived ₹2L)', returns: '10% on 5 categories', why: '10% cashback on dining, food delivery, groceries, shopping and utilities (capped), plus 1.5% unlimited. Excellent everyday cashback card.', link: '/blog/hsbc-live-plus-credit-card-review-2026', tag: 'Cashback King', tagColor: 'var(--green)', minCibil: 730, minIncome: 'mid', cats: ['dining','groceries','online','utilities'] },
  scapia: { name: 'Scapia Federal', fee: '₹0 forever', returns: '2% + zero forex + lounges', why: 'Only free card with zero forex markup AND lounge access. Must-have for anyone who travels internationally.', link: '/blog/best-lifetime-free-credit-cards-india-2026', tag: 'Travel Free', tagColor: '#0891b2', minCibil: 720, minIncome: 'mid-low', cats: ['travel','mixed'] },
  idfcSelect: { name: 'IDFC FIRST Select', fee: '₹999 (waived ₹1.25L)', returns: '3-4% select categories', why: 'Great semi-free card with strong category rewards. Enable your top spend category quarterly for 4X returns.', link: '/blog/best-lifetime-free-credit-cards-india-2026', tag: 'Smart Pick', tagColor: 'var(--gold)', minCibil: 700, minIncome: 'low', cats: ['groceries','fuel','utilities','mixed'] },
  fuelCard: { name: 'IndianOil / BPCL Fuel Card', fee: '₹0–₹500', returns: '4-5% on fuel', why: 'If fuel is a big chunk of your spend, a co-branded fuel card (IndianOil RBL, BPCL SBI) beats general cards on fuel surcharge waiver + fuel points.', link: '/blog/best-credit-cards-india-2026', tag: 'Fuel Pick', tagColor: '#0891b2', minCibil: 700, minIncome: 'low', cats: ['fuel'] },
  hsbcPremier: { name: 'HSBC Premier Metal', fee: '₹20,000 (waived for Premier customers)', returns: '3% flat + 0.99% forex', why: 'Premium metal card for HSBC Premier banking customers. 3% flat rewards, 0.99% forex (among India\'s lowest), unlimited lounges, points never expire, 1:1 to 20+ partners. Requires an HSBC Premier relationship (₹40-50L balance or ₹3L/mo salary with HSBC).', link: '/blog/best-hsbc-credit-cards-india-2026', tag: 'Premier Only', tagColor: '#7c3aed', minCibil: 750, minIncome: 'ultra', invite: 'HSBC Premier banking relationship', cats: ['travel','online','utilities','mixed'] },
  hsbcTravelOne: { name: 'HSBC TravelOne', fee: '₹4,999 (waivable)', returns: '4 RP/₹100 on travel', why: 'HSBC\'s travel card — accelerated points on flights/travel/international, 1:1 transfers to 20+ airline & hotel partners, strong lounge access and a welcome bundle. Good mid-premium travel pick.', link: '/blog/best-hsbc-credit-cards-india-2026', tag: 'Travel Pick', tagColor: '#2563eb', minCibil: 740, minIncome: 'mid', cats: ['travel'] },
  hsbcRupayCashback: { name: 'HSBC RuPay Cashback', fee: '₹499', returns: '10% dining/groceries (capped)', why: 'The best UPI-linked cashback card — 10% on dining, groceries and food delivery (₹400/mo cap), plus domestic lounge access. Works on UPI (RuPay), so you earn on QR payments too.', link: '/blog/best-hsbc-credit-cards-india-2026', tag: 'Best UPI Cashback', tagColor: 'var(--green)', minCibil: 720, minIncome: 'mid-low', cats: ['dining','groceries','upi'] },
  iciciEmeralde: { name: 'ICICI Emeralde Private Metal', fee: '₹12,499 (waived ₹10L)', returns: '3% flat, up to 36% on iShop', why: 'ICICI\'s flagship super-premium metal card — closest rival to Infinia. 6 RP/₹200 (₹1/pt), up to 36% on hotels / 18% on flights via iShop, unlimited lounges, Taj Epicure + EazyDiner memberships. Largely invite-only; public applications need ~₹3-5L/month income.', link: '/blog/best-credit-cards-india-2026', tag: 'Super Premium', tagColor: '#7c3aed', minCibil: 780, minIncome: 'ultra', invite: 'invite-only / ₹3-5L/mo income', cats: ['travel','online','utilities','mixed'] },
  amexMrcc: { name: 'Amex Membership Rewards (MRCC)', fee: '₹1,500 (waived ₹1.5L)', returns: '~1-2% + milestone bonuses', why: 'Best entry to the Amex Membership Rewards ecosystem. Strong milestone bonuses (bonus points at spend thresholds), MR points transfer to airline/hotel partners. Great starter points card if Amex is accepted where you shop.', link: '/blog/amex-mrcc-credit-card-review-india-2026', tag: 'Points Starter', tagColor: 'var(--gold)', minCibil: 730, minIncome: 'mid-low', cats: ['online','dining','mixed'] },
}

const INCOME_RANK = { low: 0, 'mid-low': 1, mid: 2, high: 3, ultra: 4 }
const CIBIL_VAL = { excellent: 780, good: 725, fair: 675, low: 620, ntc: 0, unknown: 740 }

const getRecommendations = (answers) => {
  const { cibil, income, spend, categories = [], travel, priority, fee, bank } = answers
  const userCibil = CIBIL_VAL[cibil] ?? 740
  const userIncomeRank = INCOME_RANK[income] ?? 2
  const cats = Array.isArray(categories) ? categories : (categories ? [categories] : [])

  const scores = {}
  const eligibility = {}
  Object.keys(ALL_CARDS).forEach(k => { scores[k] = 0; eligibility[k] = true })

  // ── ELIGIBILITY GATING (CIBIL + income) ──
  Object.entries(ALL_CARDS).forEach(([k, c]) => {
    // NTC / low CIBIL: only entry-level free cards realistic
    if (cibil === 'ntc' || cibil === 'low') {
      if (c.minCibil > 700) eligibility[k] = false
    } else if (userCibil < c.minCibil - 20) {
      eligibility[k] = false
    }
    // Income floor (soft): if user is >=2 ranks below the card's floor, gate it
    if (userIncomeRank < (INCOME_RANK[c.minIncome] ?? 0) - 1) {
      eligibility[k] = false
    }
    // Invite-only / relationship cards: only realistic for ultra-income profiles
    if (c.invite && userIncomeRank < 4) {
      eligibility[k] = false
    }
  })

  // ── CATEGORY MATCHING (biggest lever) ──
  cats.forEach(cat => {
    Object.entries(ALL_CARDS).forEach(([k, c]) => {
      if (c.cats && c.cats.includes(cat)) scores[k] += 25
    })
  })

  // Spend level
  if (spend === 'ultra' || spend === 'high') { scores.infinia += 35; scores.diners += 30; scores.magnus += 18; scores.amexPlat += 15; scores.hsbcPremier += 30; scores.iciciEmeralde += 32 }
  if (spend === 'mid') { scores.regaliaGold += 30; scores.atlas += 25; scores.diners += 18; scores.hsbcLive += 20; scores.infinia += 12; scores.hsbcTravelOne += 20; scores.amexMrcc += 15 }
  if (spend === 'mid-low') { scores.regaliaGold += 22; scores.idfcSelect += 25; scores.amazon += 22; scores.sbiCashback += 22; scores.hsbcLive += 22; scores.hsbcRupayCashback += 22; scores.amexMrcc += 20 }
  if (spend === 'low') { scores.amazon += 32; scores.sbiCashback += 28; scores.scapia += 20; scores.idfcSelect += 18; scores.hsbcLive += 15; scores.hsbcRupayCashback += 18 }

  // Travel
  if (travel === 'heavy') { scores.amexPlat += 30; scores.infinia += 18; scores.scapia += 15; scores.hsbcPremier += 25; scores.iciciEmeralde += 22; scores.hsbcTravelOne += 20 }
  if (travel === 'moderate') { scores.infinia += 15; scores.magnus += 15; scores.scapia += 18; scores.atlas += 10; scores.hsbcTravelOne += 18; scores.iciciEmeralde += 12 }
  if (travel === 'light') { scores.scapia += 22; scores.atlas += 10; scores.hsbcTravelOne += 12 }
  if (travel === 'none') { scores.amazon += 12; scores.sbiCashback += 12; scores.hsbcLive += 12; scores.hsbcRupayCashback += 12 }

  // Priority
  if (priority === 'cashback') { scores.amazon += 28; scores.sbiCashback += 28; scores.hsbcLive += 28; scores.hsbcRupayCashback += 26 }
  if (priority === 'travel') { scores.infinia += 25; scores.magnus += 20; scores.scapia += 15; scores.atlas += 15; scores.hsbcTravelOne += 24; scores.hsbcPremier += 20; scores.iciciEmeralde += 20 }
  if (priority === 'lifestyle') { scores.amexPlat += 25; scores.infinia += 15; scores.hsbcPremier += 22; scores.iciciEmeralde += 22 }
  if (priority === 'points') { scores.infinia += 28; scores.diners += 24; scores.amexMrcc += 24; scores.iciciEmeralde += 22; scores.hsbcTravelOne += 18 }
  if (priority === 'free') { scores.amazon += 35; scores.scapia += 28; scores.sbiCashback += 28 }

  // Fee tolerance
  if (fee === 0) { scores.amazon += 30; scores.scapia += 30; scores.sbiCashback += 26 }
  if (fee === 2500) { scores.regaliaGold += 28; scores.idfcSelect += 22; scores.hsbcLive += 22; scores.amazon += 15; scores.hsbcRupayCashback += 24; scores.amexMrcc += 22 }
  if (fee === 5000) { scores.atlas += 22; scores.regaliaGold += 18; scores.hsbcLive += 15; scores.hsbcTravelOne += 22 }
  if (fee === 12500) { scores.infinia += 22; scores.diners += 22; scores.magnus += 18; scores.iciciEmeralde += 22 }
  if (fee === 99999) { scores.infinia += 28; scores.amexPlat += 20; scores.diners += 22; scores.hsbcPremier += 24; scores.iciciEmeralde += 24 }

  // Bank preference
  if (bank === 'hdfc') { scores.infinia += 18; scores.diners += 18; scores.regaliaGold += 14 }
  if (bank === 'axis') { scores.magnus += 22; scores.atlas += 22 }
  if (bank === 'sbi') { scores.sbiCashback += 18; scores.regaliaGold += 5 }
  if (bank === 'icici') { scores.amazon += 15; scores.iciciEmeralde += 18 }

  // Apply eligibility: ineligible cards get heavily penalised (not fully removed,
  // so we can still surface an "aspirational" note if nothing else fits)
  Object.keys(scores).forEach(k => { if (!eligibility[k]) scores[k] -= 1000 })

  const eligibleSorted = Object.entries(scores)
    .filter(([k]) => eligibility[k])
    .sort((a, b) => b[1] - a[1])

  // Fallback: if fewer than 3 eligible, backfill with best ineligible (aspirational)
  let chosen = eligibleSorted.slice(0, 3)
  if (chosen.length < 3) {
    const ineligibleSorted = Object.entries(scores)
      .filter(([k]) => !eligibility[k])
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3 - chosen.length)
    chosen = [...chosen, ...ineligibleSorted]
  }

  const maxScore = Math.max(...chosen.map(([, s]) => Math.abs(s)), 1)
  return chosen.map(([key, score]) => {
    const card = ALL_CARDS[key]
    const eligible = eligibility[key]
    const posScore = score < 0 ? score + 1000 : score
    const match = eligible ? Math.min(98, Math.round(55 + (posScore / Math.max(maxScore, 1)) * 43)) : 0
    return { ...card, match, eligible }
  })
}

export default function CardQuiz() {
  const [step, setStep] = useState(0)
  const [started, setStarted] = useState(false)
  const [answers, setAnswers] = useState({})
  const [done, setDone] = useState(false)
  const [recs, setRecs] = useState([])
  const [multiSel, setMultiSel] = useState([])

  const q = QUESTIONS[step]

  useEffect(() => { quizTrack.start() }, [])

  const finish = (finalAnswers) => {
    const results = getRecommendations(finalAnswers)
    setRecs(results)
    setDone(true)
    quizTrack.complete(finalAnswers)
    results.forEach((rec, i) => quizTrack.viewRecommendation(rec.name, rec.match, i + 1))
  }

  const advance = (newAnswers) => {
    if (step < QUESTIONS.length - 1) { setStep(step + 1); setMultiSel([]) }
    else finish(newAnswers)
  }

  const handleAnswer = (val) => {
    const newAnswers = { ...answers, [q.id]: val }
    setAnswers(newAnswers)
    quizTrack.answerQuestion(q.id, step, val)
    advance(newAnswers)
  }

  const toggleMulti = (val) => {
    setMultiSel(prev => {
      if (prev.includes(val)) return prev.filter(v => v !== val)
      if (q.maxSelect && prev.length >= q.maxSelect) return prev
      return [...prev, val]
    })
  }

  const confirmMulti = () => {
    const newAnswers = { ...answers, [q.id]: multiSel }
    setAnswers(newAnswers)
    quizTrack.answerQuestion(q.id, step, multiSel.join(','))
    advance(newAnswers)
  }

  const reset = () => {
    quizTrack.retake()
    setStep(0); setAnswers({}); setDone(false); setRecs([]); setMultiSel([]); setStarted(false)
  }

  return (
    <div className="min-h-screen">
      <PageNav />

      <main className="max-w-lg mx-auto px-5 py-12">
        {!started && !done ? (
          <div style={{ animation: 'fadeUp 0.4s ease both' }}>
            <div className="text-center">
              <span className="text-[11px] font-bold uppercase tracking-widest px-2 py-1 rounded" style={{ color: 'var(--gold)', background: 'rgba(184,149,62,0.08)' }}>Free · 2 minutes · No signup</span>
              <h1 className="mt-4" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(26px,5vw,36px)', lineHeight: 1.15, letterSpacing: '-0.02em', color: 'var(--text)' }}>
                Which credit card is right for you?
              </h1>
              <p className="mt-3 text-[16px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
                Answer 8 quick questions about your spending, income, and preferences. We'll match you to the best Indian credit cards you're actually eligible for — with no bank affiliations, just the real numbers.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              {[
                ['🎯', 'Matched to your eligibility', 'We factor in your CIBIL score and income so you only see cards you can actually get.'],
                ['🛒', 'Based on where you spend', 'Your top spend categories drive the recommendation — not generic "best card" lists.'],
                ['🔒', 'Independent & unaffiliated', 'We earn no commission from banks. The picks are what the numbers say, not what pays us.'],
              ].map(([icon, title, desc], i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                  <span className="text-[20px] shrink-0">{icon}</span>
                  <div>
                    <p className="text-[14px] font-semibold" style={{ color: 'var(--text)' }}>{title}</p>
                    <p className="text-[12px] mt-0.5" style={{ color: 'var(--text-m)' }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button onClick={() => setStarted(true)}
              className="w-full mt-8 py-3.5 rounded-xl text-[15px] font-semibold transition-all"
              style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
              Find my card →
            </button>
            <p className="text-center text-[12px] mt-3" style={{ color: 'var(--text-m)' }}>
              Don't know your CIBIL score? We'll show you how to check it free.
            </p>
          </div>
        ) : !done ? (
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

            {q.helper && (
              <div className="mt-3 p-3 rounded-xl text-[12px] leading-relaxed" style={{ background: 'var(--bg-s)', border: '1px solid var(--border)', color: 'var(--text-m)' }}>
                💡 {q.helper}
              </div>
            )}

            <div className="mt-6 space-y-2" style={{ animation: 'fadeUp 0.3s ease both' }}>
              {q.options.map(opt => {
                const selected = q.multi && multiSel.includes(opt.value)
                return (
                  <button key={opt.value}
                    onClick={() => q.multi ? toggleMulti(opt.value) : handleAnswer(opt.value)}
                    className="w-full flex items-center gap-3.5 p-4 rounded-xl text-left transition-all duration-200"
                    style={{ background: selected ? 'var(--bg-s)' : 'var(--card)', border: selected ? '2px solid var(--gold)' : '1px solid var(--border)' }}
                    onMouseEnter={e => { if (!selected) { e.currentTarget.style.borderColor = 'var(--border-m)'; e.currentTarget.style.background = 'var(--bg-s)' } }}
                    onMouseLeave={e => { if (!selected) { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--card)' } }}>
                    <span className="text-[20px] shrink-0">{opt.icon}</span>
                    <span className="text-[15px] font-medium flex-1" style={{ color: 'var(--text)' }}>{opt.label}</span>
                    {q.multi && <span className="text-[16px]" style={{ color: selected ? 'var(--gold)' : 'var(--border)' }}>{selected ? '☑' : '☐'}</span>}
                  </button>
                )
              })}
            </div>

            {q.multi && (
              <button onClick={confirmMulti} disabled={multiSel.length === 0}
                className="w-full mt-4 py-3 rounded-xl text-[14px] font-semibold disabled:opacity-40 transition-all"
                style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
                {multiSel.length === 0 ? 'Select at least one' : `Continue (${multiSel.length} selected) →`}
              </button>
            )}

            {step > 0 && (
              <button onClick={() => { setStep(step - 1); setMultiSel([]) }} className="mt-4 text-[13px]" style={{ color: 'var(--text-m)' }}>
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
              <p className="mt-2 text-[14px]" style={{ color: 'var(--text-s)' }}>Matched to your eligibility, spending, and preferences</p>
            </div>

            <div className="space-y-4">
              {recs.map((rec, i) => (
                <div key={rec.name} className="p-5 rounded-2xl" style={{ background: 'var(--card)', border: '1px solid var(--border)', boxShadow: i === 0 && rec.eligible ? '0 2px 8px rgba(0,0,0,0.06)' : 'none', opacity: rec.eligible ? 1 : 0.85 }}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <p className="text-[16px] font-bold" style={{ color: 'var(--text)' }}>{rec.name}</p>
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded" style={{ color: rec.tagColor, background: rec.tagColor + '12' }}>{rec.tag}</span>
                      </div>
                      <p className="text-[12px]" style={{ color: 'var(--text-m)' }}>Fee: {rec.fee} · Return: {rec.returns}</p>
                    </div>
                    <div className="text-right shrink-0">
                      {rec.eligible ? (
                        <>
                          <div className="w-12 h-12 rounded-full grid place-items-center" style={{ background: rec.match >= 90 ? 'rgba(45,106,79,0.08)' : 'rgba(184,149,62,0.08)' }}>
                            <span className="text-[14px] font-mono font-bold" style={{ color: rec.match >= 90 ? 'var(--green)' : 'var(--gold)' }}>{rec.match}%</span>
                          </div>
                          <p className="text-[9px] mt-0.5" style={{ color: 'var(--text-m)' }}>match</p>
                        </>
                      ) : (
                        <div className="px-2 py-1 rounded-lg" style={{ background: 'rgba(197,48,48,0.06)' }}>
                          <p className="text-[10px] font-semibold" style={{ color: 'var(--red)' }}>Aim for later</p>
                        </div>
                      )}
                    </div>
                  </div>
                  {!rec.eligible && (
                    <p className="text-[11px] mt-2 p-2 rounded-lg" style={{ background: 'rgba(197,48,48,0.05)', color: 'var(--red)' }}>
                      Likely above your current eligibility (CIBIL/income). A goal card — improve your profile and revisit.
                    </p>
                  )}
                  {rec.eligible && rec.invite && (
                    <p className="text-[11px] mt-2 p-2 rounded-lg" style={{ background: 'rgba(124,58,237,0.06)', color: '#7c3aed' }}>
                      🔑 Needs an {rec.invite}. Best suited if you already have that relationship.
                    </p>
                  )}
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
