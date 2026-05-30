'use client'

import FeedbackWidget from '@/components/FeedbackWidget'
import PageNav from '@/components/PageNav'

import { useState, useEffect } from 'react'

const blogJsonLd = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Best Lifetime Free Credit Cards in India 2026: Ranked by What You Actually Get',
  datePublished: '2026-05-22', dateModified: '2026-05-22',
  author: { '@type': 'Organization', name: 'PointsMax' },
  publisher: { '@type': 'Organization', name: 'PointsMax', url: 'https://www.pointsmax.in' },
  mainEntityOfPage: 'https://www.pointsmax.in/blog/best-lifetime-free-credit-cards-india-2026',
}

const faqJsonLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is the best lifetime free credit card in India in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Amazon Pay ICICI is the best lifetime free credit card in India for online shoppers with 5% cashback on Amazon for Prime members. For travel, Scapia Federal offers zero forex markup and unlimited lounge access at zero fee. For all-round use, IDFC FIRST Select offers 4X rewards on select categories with fee waiver on ₹1.25 lakh spend.' }},
    { '@type': 'Question', name: 'Is a lifetime free credit card really free?', acceptedAnswer: { '@type': 'Answer', text: 'Genuinely lifetime free cards like Amazon Pay ICICI, Scapia, and Kiwi RuPay charge zero joining and zero annual fees permanently with no spending conditions. However, some cards marketed as lifetime free are actually conditional — they waive fees only if you meet a minimum annual spend threshold. Always check if the card requires spending to stay free.' }},
    { '@type': 'Question', name: 'Can lifetime free credit cards beat premium paid cards?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, for spend under ₹5 lakh per year. A portfolio of Amazon Pay ICICI (5% Amazon) + SBI Cashback (5% online) + Scapia (2% travel + lounges) costs ₹0 in fees and delivers 3-5% blended return. Most ₹5,000-10,000 annual fee cards cannot beat this after accounting for the fee drag.' }},
  ],
}

export default function BlogPost() {
  const [showBar, setShowBar] = useState(false)
  useEffect(() => {
    const fn = () => setShowBar(window.scrollY > 600)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const H2 = ({ children }) => <h2 className="pt-6" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', letterSpacing: '-0.01em' }}>{children}</h2>
  const S = ({ children }) => <strong style={{ color: 'var(--text)' }}>{children}</strong>

  const Card = ({ rank, name, returns, best, gotcha, verdict, color = 'var(--green)' }) => (
    <div className="p-5 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
      <div className="flex items-start gap-3">
        <span className="text-[18px] font-mono font-bold shrink-0 w-8 h-8 grid place-items-center rounded-lg" style={{ color, background: color === 'var(--green)' ? 'rgba(45,106,79,0.08)' : 'rgba(184,149,62,0.08)' }}>{rank}</span>
        <div className="flex-1">
          <p className="text-[16px] font-semibold" style={{ color: 'var(--text)' }}>{name}</p>
          <div className="flex items-center gap-3 mt-1 flex-wrap">
            <span className="text-[12px] font-mono font-bold px-2 py-0.5 rounded" style={{ color: 'var(--green)', background: 'rgba(45,106,79,0.08)' }}>{returns}</span>
            <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>Best for: {best}</span>
          </div>
          {gotcha && <p className="text-[13px] mt-2 leading-relaxed" style={{ color: 'var(--text-s)' }}><span style={{ color: 'var(--red)' }}>⚠ Gotcha:</span> {gotcha}</p>}
          <p className="text-[13px] mt-2 leading-relaxed" style={{ color: 'var(--text-s)' }}><span style={{ color: 'var(--green)' }}>Verdict:</span> {verdict}</p>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageNav />
      <article className="max-w-2xl mx-auto px-5 py-12">
        <div className="flex items-center gap-2 mb-8 text-[13px]" style={{ color: 'var(--text-m)' }}>
          <a href="/" className="hover:text-black/50 transition-colors">PointsMax</a><span>/</span>
          <a href="/blog" className="hover:text-black/50 transition-colors">Blog</a><span>/</span>
          <span style={{ color: 'var(--text-s)' }}>Best LTF Cards</span>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded" style={{ color: 'var(--green)', background: 'rgba(45,106,79,0.08)' }}>Listicle</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>May 22, 2026</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>9 min read</span>
        </div>

        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(24px, 4vw, 36px)', lineHeight: 1.15, letterSpacing: '-0.025em', color: 'var(--text)' }}>
          Best Lifetime Free Credit Cards in India 2026: Ranked by What You Actually Get
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
          10 genuinely free cards ranked by effective return — not by affiliate payout. Plus the ₹0-fee portfolio that quietly outperforms most ₹10,000/year premium cards.
        </p>

        <div className="mt-10 space-y-6 text-[15px] leading-[1.85]" style={{ color: 'var(--text-s)' }}>

          <p>Most "best lifetime free credit card" lists in India are affiliate content wearing a ranking hat. The card at #1 is whichever issuer pays the highest commission per application — not whichever card is actually best for you.</p>
          <p>We don't earn affiliate commissions. No one paid to be on this list. These rankings are based on one thing: <S>how many rupees you get back per ₹100 spent, at zero annual cost.</S></p>
          <p>Also — a quick note on what "lifetime free" actually means, because banks play games with this term.</p>

          <H2>Is your "lifetime free" card actually free?</H2>
          <p><S>Genuinely lifetime free (LTF) means ₹0 joining fee and ₹0 annual fee forever, with no spending condition.</S> Amazon Pay ICICI, Scapia, and Kiwi RuPay are genuinely LTF — you could leave them in a drawer for five years and never pay a rupee.</p>
          <p>Then there are <S>conditional LTF cards</S> — banks market these as "free" but they waive fees only if you hit a minimum annual spend (typically ₹1-2 lakh). Miss the threshold and you're charged ₹500-2,000. IDFC FIRST Select, Flipkart Axis, and HSBC Live+ fall into this category. They're still good cards, but calling them "lifetime free" is... creative marketing.</p>

          <div className="p-4 rounded-xl" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
            <p className="text-[13px] font-bold mb-1" style={{ color: 'var(--red)' }}>Red flag to watch for</p>
            <p className="text-[13px] leading-relaxed" style={{ color: 'var(--text-s)' }}>If a card says "lifetime free on ₹X annual spend" — it's not lifetime free. It's a fee-waiver card. Nothing wrong with that, but know the difference before you sock-drawer a card that's quietly charging you ₹999 every year.</p>
          </div>

          <H2>The quick summary: top 10 at a glance</H2>

          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-[13px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead><tr>
                <th className="text-left py-3 px-3 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>#</th>
                <th className="text-left py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Card</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Best return</th>
                <th className="text-left py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Best for</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>True LTF?</th>
              </tr></thead>
              <tbody>
                {[
                  ['1', 'Amazon Pay ICICI', '5%', 'Amazon shopping', '✅'],
                  ['2', 'Scapia (Federal)', '2% + lounges', 'Travel + forex', '✅'],
                  ['3', 'SBI Cashback', '5% online', 'Online spenders', '✅*'],
                  ['4', 'IDFC FIRST Select', '3-4%', 'Select categories', '⚠ ₹1.25L'],
                  ['5', 'Kiwi RuPay (Yes Bank)', 'Up to 5% UPI', 'UPI payments', '✅'],
                  ['6', 'Flipkart Axis', '4% Flipkart', 'Flipkart + Myntra', '⚠ ₹500'],
                  ['7', 'HSBC Live+', '10% dining', 'Food lovers', '⚠ ₹750'],
                  ['8', 'AU LIT', 'Configurable', 'Customizers', '✅'],
                  ['9', 'BoB Eterna', '3.75%', 'Mid-tier all-rounder', '⚠ ₹2.5L'],
                  ['10', 'ICICI Platinum Chip', '2 RP/₹100', 'Beginners', '✅'],
                ].map(([rank, card, ret, best, ltf], i) => (
                  <tr key={i}>
                    <td className="py-2.5 px-3 font-mono font-bold" style={{ color: 'var(--gold)', borderBottom: '1px solid var(--border)' }}>{rank}</td>
                    <td className="py-2.5 px-2 font-medium" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{card}</td>
                    <td className="py-2.5 px-2 text-center font-mono font-bold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>{ret}</td>
                    <td className="py-2.5 px-2" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>{best}</td>
                    <td className="py-2.5 px-2 text-center" style={{ borderBottom: '1px solid var(--border)' }}>{ltf}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-[11px] mt-2" style={{ color: 'var(--text-m)' }}>✅ = genuinely lifetime free, no conditions. ⚠ = fee waived on minimum spend. *SBI Cashback is LTF on some variants; check your offer letter.</p>
          </div>

          <H2>The detailed breakdown: each card reviewed</H2>

          <div className="space-y-4 mt-4">
            <Card rank="1" name="Amazon Pay ICICI" returns="5% on Amazon (Prime) / 3% (non-Prime)" best="Amazon & online shoppers" gotcha="You need Amazon Prime (₹1,499/year) for the full 5%. Non-Prime gets 3%. Also, returns are auto-credited as Amazon Pay balance, not bank cashback — you can only spend it on Amazon or partner merchants." verdict="If you shop on Amazon even once a month, this is a no-brainer. 5% with zero annual fee is the highest category-specific return on any Indian credit card, period." />

            <Card rank="2" name="Scapia (Federal Bank)" returns="2% unlimited cashback + zero forex + lounge access" best="Travellers & international spenders" gotcha="The 2% is credited as Scapia coins (1 coin = ₹1) redeemable for travel bookings on the Scapia app. Not direct bank cashback. Also, lounge access policy has changed — check the latest terms for visit limits." verdict="The only genuinely free card in India with zero forex markup AND lounge access. If you travel even once a year internationally, this saves you the 3.5% forex fee most cards charge." />

            <Card rank="3" name="SBI Cashback" returns="5% online / 1% offline" best="Online spenders (₹40K/month or less)" gotcha="Online cashback is now capped at ₹2,000 per month (effective April 2026). That means the 5% benefit maxes out at ₹40,000 monthly online spend. Above that, each extra rupee earns only 1%. Also, gaming, toll, and government payments don't earn cashback." verdict="Still the best flat online cashback card in India — but the ₹2K monthly cap hurts heavy spenders. Great as the second card in a portfolio alongside Amazon Pay ICICI." />

            <Card rank="4" name="IDFC FIRST Select" returns="3-4% on select categories / 0.5% base" best="Category spenders who hit ₹1.25L" gotcha="Not genuinely LTF — annual fee of ₹999 is waived only on ₹1.25 lakh annual spend. Fall below and you pay the fee. The 4X reward points on select categories require you to manually enable categories in the app each quarter." verdict="Best semi-free card for people who naturally spend ₹10K/month. The reward rate on enabled categories is genuinely good. Just remember to activate categories every quarter or you earn the base rate." />

            <Card rank="5" name="Kiwi RuPay (Yes Bank)" returns="Up to 5% on UPI payments" best="UPI-heavy spenders" gotcha="Cashback rates are tiered and depend on the merchant category. Not every UPI payment earns 5%. Also, the card is RuPay — great for UPI, but international acceptance is limited to specific networks." verdict="If 80% of your spending is via UPI/QR (which is increasingly true in urban India), this is the best card for you. The RuPay-to-UPI linking is seamless." />

            <Card rank="6" name="Flipkart Axis" returns="4% Flipkart / 2% Myntra / 1.5% others" best="Flipkart ecosystem shoppers" gotcha="₹500 joining fee (some users get it waived). Renewal is typically free. The 4% is credited as Flipkart SuperCoins which have a convoluted conversion to actual value — effective rate may be closer to 3% when you account for coin expiry and redemption limitations." verdict="Good if you're a Flipkart loyalist, but Amazon Pay ICICI at 5% genuine cashback on Amazon is a stronger proposition for most online shoppers." />

            <Card rank="7" name="HSBC Live+" returns="10% dining / 5% grocery / 2.5% others*" best="Foodies and grocery spenders" gotcha="The 10% and 5% rates are limited to SmartSave partners (specific restaurants and stores). Outside the partner network, you earn the base rate. Also, fee of ₹750 waived on ₹1.5L annual spend — not genuinely LTF." verdict="Incredible on partner dining — 10% cashback at Zomato, Swiggy, and select restaurants is the highest dining return in India. But only worth it if your eating/grocery habits align with their partner list." />

            <Card rank="8" name="AU LIT" returns="Configurable (2-5% on chosen category)" best="People who want to pick their own reward category" gotcha="You choose one category to earn accelerated rewards on, and it locks for 3 months. Choose wrong and you're stuck with a mediocre card for a quarter. Also, AU Bank's app and customer service get mixed reviews." verdict="Genuinely unique concept — pick your top spending category and earn outsized returns. Works best for people with predictable, concentrated spending patterns." />

            <Card rank="9" name="BoB Eterna" returns="3.75% on partner spends / 1.25% others" best="BoB banking customers" gotcha="Fee of ₹2,499 waived on ₹2.5 lakh annual spend — that's a high threshold for a mid-tier card. Not genuinely LTF." verdict="Solid effective return for a mid-range card. Makes sense only if you're already a BoB customer and naturally spend ₹2.5L/year." />

            <Card rank="10" name="ICICI Platinum Chip" returns="2 RP per ₹100 (~0.5%)" best="First-time credit card users" gotcha="The reward rate is low. This is a starter card, not a keeper. You're here to build credit history, not to earn rewards." verdict="Your first credit card to build a CIBIL score. Use it for 12 months, pay on time, then upgrade to something better. That's its only job." />
          </div>

          {/* Mid-article CTA */}
          <div className="p-5 rounded-xl my-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <div>
              <p className="text-[14px] font-semibold">Already have one of these cards?</p>
              <p className="text-[12px] mt-1" style={{ color: 'rgba(250,248,245,0.5)' }}>Check what your reward points are actually worth in rupees.</p>
            </div>
            <a href="/" className="shrink-0 px-5 py-2.5 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>Check My Points →</a>
          </div>

          <H2>The ₹0-fee portfolio that beats premium cards</H2>
          <p>This is the part nobody in the affiliate-driven card review industry wants you to hear: for annual spend under ₹5 lakh, a combination of free cards outperforms most ₹5,000-12,500 annual fee premium cards after accounting for the fee drag.</p>

          <div className="p-5 rounded-xl" style={{ background: '#EDF5F0', border: '1px solid #C8DDD0' }}>
            <p className="text-[14px] font-bold mb-3" style={{ color: 'var(--green)' }}>The ₹0 Three-Card Stack</p>
            <div className="space-y-3 text-[14px]">
              <div className="flex gap-3">
                <span className="w-6 h-6 rounded-full grid place-items-center text-[11px] font-bold shrink-0" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>1</span>
                <div><p style={{ color: 'var(--text)' }}><S>Amazon Pay ICICI</S> — all Amazon spend (5%)</p><p className="text-[13px]" style={{ color: 'var(--text-m)' }}>Why: Highest single-platform return in India. ₹0 fee.</p></div>
              </div>
              <div className="flex gap-3">
                <span className="w-6 h-6 rounded-full grid place-items-center text-[11px] font-bold shrink-0" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>2</span>
                <div><p style={{ color: 'var(--text)' }}><S>SBI Cashback</S> — all other online spend (5%, ₹2K cap)</p><p className="text-[13px]" style={{ color: 'var(--text-m)' }}>Why: Covers Swiggy, Zomato, subscriptions, bills. ₹0 fee.</p></div>
              </div>
              <div className="flex gap-3">
                <span className="w-6 h-6 rounded-full grid place-items-center text-[11px] font-bold shrink-0" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>3</span>
                <div><p style={{ color: 'var(--text)' }}><S>Scapia Federal</S> — travel, international, offline (2% + lounges)</p><p className="text-[13px]" style={{ color: 'var(--text-m)' }}>Why: Zero forex markup saves 3.5% on every intl transaction. Free lounge access.</p></div>
              </div>
            </div>
            <p className="text-[13px] mt-4 font-semibold" style={{ color: 'var(--green)' }}>Total annual cost: ₹0 | Blended return: 3-5% depending on spend mix</p>
          </div>

          <p>Compare that to a single HDFC Regalia at ₹2,500/year that gives you 1.5-2% return. Or an Axis Privilege at ₹3,000/year for roughly the same. The free stack wins on both cost and return.</p>
          <p>We broke this down further by spend level in our <a href="/blog/best-credit-cards-india-2026" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>Best Credit Cards India 2026</a> guide.</p>

          <H2>When should you pay for a premium card instead?</H2>
          <p>Free cards have a ceiling. Here's when you outgrow them:</p>
          <ul className="space-y-2 pl-1" style={{ listStyleType: 'none' }}>
            <li className="flex gap-2"><span style={{ color: 'var(--gold)' }}>→</span><span><S>Annual spend above ₹10 lakh:</S> At this level, HDFC Infinia's 3.3% SmartBuy return with fee waiver beats any free card portfolio. <a href="/blog/hdfc-infinia-credit-card-review-2026" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>Full Infinia review here</a>.</span></li>
            <li className="flex gap-2"><span style={{ color: 'var(--gold)' }}>→</span><span><S>You want airline mile transfers:</S> No free card offers transfer partners. You need HDFC Diners Black (₹10K), Axis Atlas (₹5K), or Amex Gold (₹9K). <a href="/blog/credit-card-airline-miles-transfer-india-2026" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>Transfer guide here</a>.</span></li>
            <li className="flex gap-2"><span style={{ color: 'var(--gold)' }}>→</span><span><S>International travel 3+ times a year:</S> Premium travel benefits (insurance, concierge, upgraded lounges) justify the fee if you use them consistently.</span></li>
          </ul>

          <H2>Cards we left off this list (and why)</H2>
          <div className="space-y-2">
            <div className="p-4 rounded-xl" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
              <p className="text-[13px] font-bold mb-1" style={{ color: 'var(--red)' }}>✕ HDFC Millennia</p>
              <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>Often marketed as LTF but most users get it with a ₹1,000 fee. The 5% cashback on Amazon/Flipkart is capped at ₹1,000/month. Amazon Pay ICICI gives uncapped 5% on Amazon at genuine ₹0 fee.</p>
            </div>
            <div className="p-4 rounded-xl" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
              <p className="text-[13px] font-bold mb-1" style={{ color: 'var(--red)' }}>✕ Any card with "LTF on ₹3L+ spend"</p>
              <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>If the spend threshold is above ₹2 lakh, you're not getting a free card — you're getting a card that charges you if your spending drops. That's a conditional fee, not lifetime free.</p>
            </div>
          </div>

          <H2>The bottom line</H2>
          <p>In 2026, a smart combination of genuinely lifetime free cards gives you 3-5% returns on most spending categories with zero annual cost. That's better than what most Indians get from their ₹2,000-10,000/year premium cards — especially after the devaluation wave made many paid card rewards less generous.</p>
          <p>Start with Amazon Pay ICICI + SBI Cashback + Scapia. That's your base. Add specialty cards (Kiwi for UPI, HSBC Live+ for dining) as your spending patterns demand.</p>
          <p>And whatever you do, always <a href="/" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>check what your existing points are worth</a> before letting them gather dust. Whether it's a free card or a premium card, the wrong redemption method wastes 40-80% of your rewards.</p>

          <div className="p-6 rounded-2xl text-center mt-8" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <p className="text-[16px] font-semibold">Got reward points on any of these cards?</p>
            <p className="text-[13px] mt-1 mb-4" style={{ color: 'rgba(250,248,245,0.5)' }}>See every redemption option ranked by real rupee value.</p>
            <a href="/" className="inline-block px-6 py-2.5 rounded-xl text-[14px] font-semibold" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>Open PointsMax Calculator →</a>
          </div>

          <p className="text-[11px] mt-8 leading-relaxed" style={{ color: 'var(--text-m)' }}>
            <strong>Disclaimer:</strong> Card features, fees, reward rates, and terms change frequently. Always verify current details on the issuer's website before applying. PointsMax does not earn affiliate commissions from card applications. This is not financial advice. Cashback/reward caps and spending conditions apply — read the MITC (Most Important Terms & Conditions) before applying.
          </p>
        </div>
                <FeedbackWidget pageSlug="best-lifetime-free-credit-cards-india-2026" pageTitle="best-lifetime-free-credit-cards-india-2026" />
        </article>

      <footer className="py-10 px-5" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[12px]" style={{ color: 'var(--text-m)' }}>
            <a href="/" className="hover:text-black/40 transition-colors">PointsMax</a><span className="mx-2">·</span>
            <a href="/transfers" className="hover:text-black/40 transition-colors">Transfers</a><span className="mx-2">·</span>
            <a href="/blog" className="hover:text-black/40 transition-colors">Blog</a><span className="mx-2">·</span>
            <a href="/privacy" className="hover:text-black/40 transition-colors">Privacy</a>
          </p>
        </div>
      </footer>

      {showBar && (
        <div className="fixed bottom-0 left-0 right-0 z-50" style={{ background: 'var(--dark)', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '10px 16px' }}>
          <div className="max-w-2xl mx-auto flex items-center justify-between gap-3">
            <p className="text-[13px] hidden sm:block" style={{ color: 'rgba(250,248,245,0.6)' }}>Check your <S style={{ color: '#FAF8F5' }}>card's</S> reward value</p>
            <p className="text-[13px] sm:hidden" style={{ color: 'rgba(250,248,245,0.6)' }}>Check points value</p>
            <a href="/" className="shrink-0 px-4 py-2 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>Open Calculator →</a>
          </div>
        </div>
      )}
    </div>
  )
}
