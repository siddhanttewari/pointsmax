'use client'

import { useState, useEffect, useRef } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

// Rule-based response engine
const INTENTS = [
  {
    id: 'infinia_value',
    patterns: ['infinia points', 'infinia worth', 'infinia value', 'hdfc infinia reward', 'infinia per point', 'infinia redemption'],
    response: '1 HDFC Infinia reward point = **₹1.00** on SmartBuy (flights, hotels, Apple, Tanishq).\n\n⚠️ Avoid the product catalogue — it gives only ₹0.20/point (80% value loss).\n\nBest path: SmartBuy → flights/hotels at ₹1/pt, or transfer to KrisFlyer at 1:1 for business class (₹1.74-2.17/mile).',
    link: { text: 'Check your Infinia points value', url: '/' },
  },
  {
    id: 'magnus_devaluation',
    patterns: ['magnus devaluation', 'axis magnus after', 'magnus april', 'magnus still worth', 'magnus transfer', 'axis magnus 2026', 'edge points worth'],
    response: 'Axis Magnus was significantly devalued in **April 2026**:\n\n❌ Marriott Bonvoy removed\n❌ Accor Live Limitless removed\n❌ Qatar Airways removed\n⬇️ Transfer ratio cut: 5:4 → 5:2 (halved)\n\nBest current redemption: Travel EDGE portal at ₹0.50/point (~10% return). For new applicants, HDFC Infinia or Diners Black now offer clearly better value at the same ₹12,500 fee.',
    link: { text: 'Read full Magnus review', url: '/blog/axis-magnus-credit-card-review-2026' },
  },
  {
    id: 'krisflyer',
    patterns: ['krisflyer', 'singapore airlines', 'del sin', 'delhi singapore', 'krisflyer miles', 'singapore business class', 'sq miles'],
    response: 'DEL→SIN business class on KrisFlyer Saver:\n\n✈️ **46,000 miles** one-way (post-Nov 2025 chart)\n💰 Cash equivalent: ₹85,000+\n📈 Effective value: ~₹1.85/mile\n\nBest transfer: HDFC Infinia → KrisFlyer at **1:1** (no other Indian card matches this).\n\nAxis Magnus transfers at 5:2 — much worse.',
    link: { text: 'KrisFlyer India complete guide', url: '/blog/singapore-airlines-krisflyer-india-guide-2026' },
  },
  {
    id: 'best_free_card',
    patterns: ['free credit card', 'lifetime free', 'no annual fee', 'zero fee card', 'best free card', 'ltf', 'no fee card'],
    response: 'Best ₹0-fee card stack for 2026:\n\n1️⃣ **Amazon Pay ICICI** → 5% on Amazon (Prime needed)\n2️⃣ **SBI Cashback** → 5% online (₹2K/month cap)\n3️⃣ **Scapia Federal** → 2% + zero forex + free lounges\n\nThis combo costs ₹0/year and gives 3-5% blended return — beats most ₹5,000-10,000/year premium cards.',
    link: { text: 'See all top free cards', url: '/blog/best-lifetime-free-credit-cards-india-2026' },
  },
  {
    id: 'forex',
    patterns: ['forex', 'international', 'abroad', 'foreign spend', 'overseas', 'forex markup', 'travel card', 'international card'],
    response: 'Best cards for international spending:\n\n🥇 **Scapia Federal** — zero forex markup, ₹0 fee (use for all daily spend abroad)\n🥈 **HDFC Infinia** — 1.36% net forex (after GVP cashback), unlimited lounges\n🥉 **Diners Black** — same as Infinia but check acceptance in SE Asia\n\n💡 Two-card strategy: Scapia for daily transactions + Infinia for hotel check-in.',
    link: { text: 'Full international travel guide', url: '/blog/best-credit-cards-international-travel-india-2026' },
  },
  {
    id: 'rent',
    patterns: ['rent', 'rent payment', 'cred rent', 'nobroker rent', 'pay rent credit card'],
    response: 'Most banks excluded rent from rewards in 2026 (MCC 6513). Cards that still earn:\n\n✅ **HSBC Premier** — up to ₹1L/month via NoBrokerPay\n✅ **Axis Magnus Burgundy** — ₹50K/month cap\n✅ **SC Ultimate** — 2% via gift vouchers\n\n💡 Even if your card earns ₹0 on rent — using credit card counts toward fee waiver. Paying ₹25K rent/month on Diners Black gets you closer to the ₹8L waiver threshold.',
    link: { text: 'Full rent payment guide', url: '/blog/best-credit-cards-rent-payment-india-2026' },
  },
  {
    id: 'smartbuy',
    patterns: ['smartbuy', 'smart buy', 'hdfc portal', 'voucher hack', 'smartbuy earn', 'smartbuy flights'],
    response: 'HDFC SmartBuy is the key to getting ₹1/point on Infinia/Diners Black.\n\n🎫 **Voucher hack**: Buy Amazon/BigBasket/Swiggy vouchers on SmartBuy → earn 5X points → use voucher for normal purchases. That\'s 5x on groceries instead of 1x!\n\n✈️ Flights/hotels: 10X earn rate\n🎁 Vouchers: 5X earn rate\n📦 Catalogue: ₹0.20/pt — AVOID',
    link: { text: 'Complete SmartBuy guide', url: '/blog/hdfc-smartbuy-guide-2026' },
  },
  {
    id: 'devaluation',
    patterns: ['devaluation', 'reward cut', 'points reduced', 'benefits removed', 'earn rate reduced', 'what changed', 'axis changes', 'hdfc changes'],
    response: 'Major 2026 devaluations:\n\n❌ **Axis (April 2026)**: Removed Marriott, Accor, Qatar. Transfer ratio cut 5:4→5:2.\n❌ **HDFC (Jan 2026)**: Turkish/Avianca changed 1:1→2:1. Monthly cap added.\n❌ **SBI**: Cashback capped at ₹2,000/month.\n\n✅ **Still intact**: Infinia SmartBuy ₹1/pt, KrisFlyer 1:1, Amazon Pay ICICI 5%.',
    link: { text: 'Full devaluation tracker', url: '/blog/credit-card-devaluation-tracker-india-2026' },
  },
  {
    id: 'lounge',
    patterns: ['lounge', 'airport lounge', 'priority pass', 'lounge access', 'lounge visits', 'domestic lounge'],
    response: 'Cards with unlimited international lounge access:\n\n✅ HDFC Infinia — unlimited Priority Pass\n✅ HDFC Diners Club Black — unlimited Priority Pass\n✅ Axis Magnus — unlimited Priority Pass\n✅ ICICI Emeralde — unlimited\n✅ Amex Platinum — 1,400+ lounges globally\n\n💡 **Free option**: Scapia Federal gives unlimited domestic lounges at ₹0 fee.',
    link: { text: 'Best cards for international travel', url: '/blog/best-credit-cards-international-travel-india-2026' },
  },
  {
    id: 'which_card',
    patterns: ['which card', 'best card for me', 'recommend card', 'suggest card', 'what card should', 'card recommendation'],
    response: 'The best card depends on your annual spend:\n\n💳 **Under ₹5L/year**: Free stack — Amazon Pay ICICI + SBI Cashback + Scapia\n💳 **₹5-10L/year**: HDFC Regalia Gold (₹2,500 fee, waived ₹3L)\n💳 **₹10L+/year**: HDFC Infinia (₹12,500, waived ₹10L) or Diners Black (₹10,000, waived ₹8L)\n\nWant a personalised recommendation?',
    link: { text: 'Take the 5-question Card Quiz', url: '/tools/card-quiz' },
  },
  {
    id: 'expiry',
    patterns: ['expire', 'expiry', 'points expire', 'krisflyer expire', 'hdfc expire', 'how long points valid', 'validity'],
    response: 'Points expiry summary:\n\n⏰ **HDFC reward points** — 3 years from accrual\n⏰ **Axis EDGE points** — 3 years\n⏰ **KrisFlyer miles** — 3 years from credit date\n⏰ **BA Avios** — 36 months of inactivity\n⏰ **Amex MR** — No expiry (account active)\n\nSet a reminder before they disappear!',
    link: { text: 'Set a free expiry reminder', url: '/tools/expiry-reminder' },
  },
  {
    id: 'fee_worth',
    patterns: ['annual fee worth', 'fee worth it', 'should i pay fee', 'fee waiver', 'breakeven fee', 'is infinia worth', 'is magnus worth'],
    response: 'Whether an annual fee is worth it depends on your spend and redemption habits. Quick math:\n\n📊 HDFC Infinia (₹12,500 fee, waived ₹10L spend): At ₹10L spend, you earn ~₹33,000 in rewards — fee is waived anyway. Pure profit.\n\n📊 Axis Magnus (₹12,500 fee, waived ₹15L): Post-devaluation returns are lower. Harder to justify vs Infinia.',
    link: { text: 'Use the free breakeven calculator', url: '/tools/breakeven' },
  },
]

const FALLBACK = `I can help with credit card points in India! Try asking about:\n\n• "What are my HDFC Infinia points worth?"\n• "Is Axis Magnus still worth it after April 2026?"\n• "Which card is best for international travel?"\n• "How do I get KrisFlyer miles?"\n• "Best free credit card India"\n\nOr use the search bar to find any guide on the site.`

function getResponse(message) {
  const msg = message.toLowerCase()
  for (const intent of INTENTS) {
    if (intent.patterns.some(p => msg.includes(p))) {
      return { text: intent.response, link: intent.link, intent: intent.id }
    }
  }
  return { text: FALLBACK, link: { text: 'Search PointsMax', url: '/search' }, intent: 'fallback' }
}

function trackChat(userMsg, intent) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'chatbot_message', {
      user_message: userMsg.slice(0, 100),
      matched_intent: intent,
    })
  }
}

const SESSION_ID = typeof window !== 'undefined'
  ? (sessionStorage.getItem('pm_session') || (() => { const id = Math.random().toString(36).slice(2); sessionStorage.setItem('pm_session', id); return id })())
  : 'server'

function formatText(text) {
  return text.split('\n').map((line, i) => {
    const formatted = line
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/^([✅❌⬇️💳💰📈⏰📦🎁🎫✈️💡🥇🥈🥉❌1️⃣2️⃣3️⃣])/, '<span style="margin-right:6px">$1</span>')
    return <p key={i} className={i > 0 ? 'mt-1' : ''} dangerouslySetInnerHTML={{ __html: formatted }} style={{ fontSize: '13px', lineHeight: '1.6' }} />
  })
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hi! I can help you understand credit card reward points in India.\n\nAsk me anything — "What are my Infinia points worth?", "Best card for international travel?", or anything else about points and miles.' }
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
    if (open && inputRef.current) inputRef.current.focus()
  }, [messages, open])

  const sendMessage = async () => {
    if (!input.trim()) return
    const userMsg = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', text: userMsg }])
    setTyping(true)

    // Simulate typing delay
    await new Promise(r => setTimeout(r, 600 + Math.random() * 400))

    const { text, link, intent } = getResponse(userMsg)
    setTyping(false)
    setMessages(prev => [...prev, { role: 'bot', text, link }])

    // Track
    trackChat(userMsg, intent)
    try {
      await supabase.from('chat_conversations').insert([{
        session_id: SESSION_ID,
        user_message: userMsg,
        bot_response: text.slice(0, 500),
        matched_intent: intent,
        page_url: window.location.pathname,
      }])
    } catch {}
  }

  const handleKey = (e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage() } }

  const QUICK_QUESTIONS = ['Infinia points value', 'Best free card', 'KrisFlyer miles', 'Magnus after April 2026']

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-5 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-200"
        style={{ background: open ? 'var(--text)' : 'var(--dark)', border: '1px solid rgba(255,255,255,0.15)' }}
        aria-label="Open chat">
        {open
          ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FAF8F5" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
          : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FAF8F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        }
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-20 right-5 z-50 w-[340px] sm:w-[380px] rounded-2xl shadow-2xl overflow-hidden"
          style={{ background: 'var(--bg)', border: '1px solid var(--border)', maxHeight: '520px', display: 'flex', flexDirection: 'column' }}>

          {/* Header */}
          <div className="px-4 py-3.5 flex items-center gap-3" style={{ background: 'var(--dark)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="w-8 h-8 rounded-full grid place-items-center" style={{ background: 'var(--gold)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1A1614" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h5l3-9 4 18 3-9h5"/></svg>
            </div>
            <div>
              <p className="text-[14px] font-semibold" style={{ color: '#FAF8F5' }}>PointsMax Assistant</p>
              <p className="text-[11px]" style={{ color: 'rgba(250,248,245,0.4)' }}>Ask about credit card points in India</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3" style={{ minHeight: 0 }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl ${msg.role === 'user' ? 'rounded-br-sm' : 'rounded-bl-sm'}`}
                  style={{
                    background: msg.role === 'user' ? 'var(--dark)' : 'var(--card)',
                    border: msg.role === 'user' ? 'none' : '1px solid var(--border)',
                    color: msg.role === 'user' ? '#FAF8F5' : 'var(--text-s)',
                  }}>
                  <div>{formatText(msg.text)}</div>
                  {msg.link && (
                    <a href={msg.link.url} className="inline-block mt-2 text-[11px] font-semibold px-2.5 py-1 rounded-lg"
                      style={{ background: 'var(--gold)', color: 'var(--dark)' }}>
                      {msg.link.text} →
                    </a>
                  )}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="px-3.5 py-3 rounded-2xl rounded-bl-sm" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                  <div className="flex gap-1 items-center">
                    {[0, 1, 2].map(i => (
                      <div key={i} className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ background: 'var(--text-m)', animationDelay: `${i * 150}ms` }} />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick questions */}
          {messages.length <= 1 && (
            <div className="px-4 pb-2 flex gap-1.5 flex-wrap">
              {QUICK_QUESTIONS.map(q => (
                <button key={q} onClick={() => { setInput(q); setTimeout(() => sendMessage(), 0) }}
                  className="text-[11px] px-2.5 py-1 rounded-full"
                  style={{ background: 'var(--bg-s)', border: '1px solid var(--border)', color: 'var(--text-s)' }}>
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="px-3 py-3 flex gap-2" style={{ borderTop: '1px solid var(--border)' }}>
            <input ref={inputRef} type="text" value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask about cards or points..."
              className="flex-1 px-3 py-2 rounded-xl text-[13px] outline-none"
              style={{ background: 'var(--bg-s)', border: '1px solid var(--border)', color: 'var(--text)' }} />
            <button onClick={sendMessage} disabled={!input.trim()}
              className="px-3 py-2 rounded-xl text-[13px] font-semibold disabled:opacity-40 transition-all"
              style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/></svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
