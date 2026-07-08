'use client'
import { useState, useEffect } from 'react'
import FeedbackWidget from '@/components/FeedbackWidget'
import PageNav from '@/components/PageNav'

const faqJsonLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Which credit cards earn reward points on electricity and utility bills in India 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Most consumer credit cards now exclude utility payments (MCC 4900) from rewards. Cards that still earn on utilities include HDFC Biz Black (5X on utility and GST payments, ~16.6% return), HDFC Biz Power (5X on utility bills), HDFC Business Regalia (5% cashback on tax, electricity, telecom), and Kiwi RuPay (up to 5% via UPI payments including BBPS utility payments). Consumer premium cards like Infinia and Magnus do not earn on most utility categories.' }},
    { '@type': 'Question', name: 'Can I earn reward points on income tax payment with a credit card?', acceptedAnswer: { '@type': 'Answer', text: 'Very few cards reward income tax payments. HDFC Biz Black earns on GST and tax-related payments. Most consumer credit cards classify income tax as a government payment (MCC 9311) and award zero or reduced points. The HDFC Business Regalia gives 5% cashback specifically on tax, electricity, and telecom.' }},
  ],
}

export default function BlogPost() {
  const [showBar, setShowBar] = useState(false)
  useEffect(() => {
    const fn = () => setShowBar(window.scrollY > 600)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  const S = ({ children }) => <strong style={{ color: 'var(--text)' }}>{children}</strong>

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Best Credit Cards for Utility Bills and Tax Payments India 2026', datePublished: '2026-05-30', author: { '@type': 'Organization', name: 'PointsMax' }, publisher: { '@type': 'Organization', name: 'PointsMax', url: 'https://www.pointsmax.in' } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageNav />
      <article className="max-w-2xl mx-auto px-5 py-12">
        <div className="flex items-center gap-2 mb-8 text-[13px]" style={{ color: 'var(--text-m)' }}>
          <a href="/">PointsMax</a><span>/</span><a href="/blog">Learn</a><span>/</span>
          <span style={{ color: 'var(--text-s)' }}>Utility & Tax Bills</span>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded" style={{ color: 'var(--green)', background: 'rgba(45,106,79,0.08)' }}>Guide</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>May 30, 2026</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>7 min read</span>
        </div>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(24px,4vw,36px)', lineHeight: 1.15, letterSpacing: '-0.025em', color: 'var(--text)' }}>
          Best Credit Cards for Utility Bills and Tax Payments India 2026
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
          Most consumer credit cards earn nothing on electricity, gas, and tax payments. But two HDFC business cards earn up to 16.6% — and one free card earns 5% via UPI. Here's the full picture.
        </p>

        <div className="mt-6 p-4 rounded-xl" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
          <p className="text-[13px] font-bold mb-1" style={{ color: 'var(--red)' }}>Most premium consumer cards earn ₹0 on utilities</p>
          <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>HDFC Infinia, Axis Magnus, SBI Elite, and most consumer premium cards classify electricity, gas, telecom, and government payments as restricted categories (MCC 4900, 4899, 9311). Zero reward points. The HDFC SmartBuy portal also excludes utility categories. If you're paying your electricity bill with your Infinia assuming you earn 3.33%, you're earning 0%.</p>
        </div>

        <div className="mt-8 space-y-6 text-[15px] leading-[1.85]" style={{ color: 'var(--text-s)' }}>

          <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)' }}>Cards that actually earn on utilities in 2026</h2>

          <div className="space-y-3">
            {[
              { rank: '1', name: 'HDFC Biz Black', returns: '~16.6% on tax & utility', fee: 'Business card', note: 'The standout. 5X SmartBuy points on utility, GST, and tax payments — gives 16.6% effective return at ₹1/point. Requires a business/GST entity. Not available to individual consumers. If you have a business and pay GST, electricity, and telecom bills above ₹50,000/month, this card is transformative.', color: 'var(--green)' },
              { rank: '2', name: 'HDFC Biz Power', returns: '~16.5% on utility', fee: 'Business card', note: '5X on utility and bill payments via SmartBuy. Similar to Biz Black but focused on utility spend. Also requires a business entity.', color: 'var(--green)' },
              { rank: '3', name: 'HDFC Business Regalia', returns: '~5% on tax/electricity/telecom', fee: 'Business card', note: '5% cashback specifically on tax, electricity, and telecom payments. Broader category coverage than most business cards. Good entry-level business card for utility rewards.', color: 'var(--gold)' },
              { rank: '4', name: 'Kiwi RuPay (Yes Bank)', returns: 'Up to 5% via UPI/BBPS', fee: '₹0', note: 'Kiwi linked to UPI means you can pay electricity and gas bills via BBPS through UPI and earn up to 5% back. The only genuinely free card that covers utility payments with meaningful earn.', color: 'var(--gold)' },
              { rank: '5', name: 'SBI Cashback Card', returns: '5% if coded as online', fee: '₹0', note: 'Electricity and utility payments made through bill payment apps (Google Pay, PhonePe, etc.) sometimes code as online transactions and earn 5% cashback — but this is not guaranteed and the ₹2,000 monthly cap applies across all online spend.', color: 'var(--text-m)' },
            ].map((c, i) => (
              <div key={i} className="p-4 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <div className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full grid place-items-center text-[12px] font-bold shrink-0" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>{c.rank}</span>
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-[14px] font-semibold" style={{ color: 'var(--text)' }}>{c.name}</p>
                      <span className="text-[12px] font-mono font-bold" style={{ color: c.color }}>{c.returns}</span>
                    </div>
                    <p className="text-[11px] mb-1.5" style={{ color: 'var(--text-m)' }}>{c.fee}</p>
                    <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>{c.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)' }}>The MCC exclusion problem</h2>
          <p>Banks use Merchant Category Codes (MCC) to classify transactions. Utility payments (electricity, gas, water) are typically MCC 4900-4999. Government payments and taxes are MCC 9311. Most premium consumer cards either exclude these MCCs from rewards or cap them at a very low rate.</p>
          <p>The practical implication: <S>paying your ₹5,000 electricity bill with HDFC Infinia earns you ₹0 in rewards.</S> Use UPI/NEFT for utility bills on most cards. Only switch to credit card if you have a card that specifically rewards these categories.</p>

          <div className="p-4 rounded-xl" style={{ background: '#EDF5F0', border: '1px solid #C8DDD0' }}>
            <p className="text-[13px] font-semibold mb-2" style={{ color: 'var(--green)' }}>Check your card's actual utility earn rate</p>
            <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>Before paying any utility bill by credit card, look up your card's MITC (Most Important Terms & Conditions) document for the excluded MCC list. If 4900 or 9311 appear in the exclusion list — you earn nothing. Don't assume the general earn rate applies.</p>
          </div>

          <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)' }}>For individuals: the practical approach</h2>
          <p>If you're an individual (not a business), your utility rewards options are limited:</p>
          <ul className="space-y-2 pl-1" style={{ listStyleType: 'none' }}>
            <li className="flex gap-2"><span style={{ color: 'var(--gold)' }}>→</span><span><S>Kiwi RuPay via UPI/BBPS</S> — pay electricity, water, gas via BBPS through UPI and earn up to 5%. Free card, no annual fee.</span></li>
            <li className="flex gap-2"><span style={{ color: 'var(--gold)' }}>→</span><span><S>SBI Cashback via bill payment app</S> — sometimes works for 5%, but unreliable and eats into your ₹2K monthly cap.</span></li>
            <li className="flex gap-2"><span style={{ color: 'var(--gold)' }}>→</span><span><S>Count utility bills toward fee waiver</S> — even if you earn nothing, putting utility payments on a card with a spend-based fee waiver gets you closer to the threshold. Same logic as rent.</span></li>
          </ul>

          <FeedbackWidget pageSlug="best-credit-cards-utility-bills-india-2026" pageTitle="Best Credit Cards for Utility Bills India 2026" />
        </div>
      </article>
      <footer className="py-10 px-5" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[12px]" style={{ color: 'var(--text-m)' }}><a href="/">PointsMax</a><span className="mx-2">·</span><a href="/about">About</a><span className="mx-2">·</span><a href="/blog">Blog</a><span className="mx-2">·</span><a href="/transfers">Transfers</a><span className="mx-2">·</span><a href="/contact">Contact</a><span className="mx-2">·</span><a href="/privacy">Privacy</a><span className="mx-2">·</span><a href="/terms">Terms</a></p>
        </div>
      </footer>
      {showBar && (
        <div className="fixed bottom-0 left-0 right-0 z-50" style={{ background: 'var(--dark)', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '10px 16px' }}>
          <div className="max-w-2xl mx-auto flex items-center justify-between gap-3">
            <p className="text-[13px]" style={{ color: 'rgba(250,248,245,0.6)' }}>Check utility bill earn rates</p>
            <a href="/" className="shrink-0 px-4 py-2 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>Open Calculator →</a>
          </div>
        </div>
      )}
    </div>
  )
}
