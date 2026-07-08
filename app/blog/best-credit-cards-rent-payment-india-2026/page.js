'use client'
import { useState, useEffect } from 'react'
import FeedbackWidget from '@/components/FeedbackWidget'
import PageNav from '@/components/PageNav'

const faqJsonLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Which credit cards earn reward points on rent payment in India in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Very few cards still earn full rewards on rent in 2026. Cards that still work include HSBC Premier (up to ₹1 lakh/month via NobrokerPay), Axis Magnus Burgundy (EDGE points on rent up to ₹50,000/month), Standard Chartered Ultimate (2% via gift vouchers), and HDFC Marriott Bonvoy (Bonvoy points on rent). Most SBI, ICICI, and Axis base cards have excluded rent transactions coded as MCC 6513.' }},
    { '@type': 'Question', name: 'Which platform is cheapest to pay rent with a credit card in India?', acceptedAnswer: { '@type': 'Answer', text: 'NoBroker Pay offers the lowest fees at 0.39-0.99% plus GST in 2026. CRED Rent Pay charges 1.0-1.5% plus GST. BharatNXT charges around 1.5-2%. Always add 18% GST to the platform fee to get the true cost. At 0.5% fee plus GST (effective 0.59%), and a card earning 1.5%+ on rent, you profit. Below 1% net reward after fee, it is a cash flow tool only.' }},
    { '@type': 'Question', name: 'Does paying rent by credit card count toward annual fee waiver?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — most banks count rent payments toward your annual spend for fee waiver purposes, even if no rewards are earned. If your card has a fee waiver at ₹8 lakh annual spend, your ₹30,000/month rent (₹3.6 lakh/year) counts toward that threshold. This alone can justify using a credit card for rent if it helps you avoid a ₹10,000-12,500 annual fee.' }},
  ],
}

export default function BlogPost() {
  const [showBar, setShowBar] = useState(false)
  const [rent, setRent] = useState(25000)
  const [fee, setFee] = useState(0.99)
  useEffect(() => {
    const fn = () => setShowBar(window.scrollY > 600)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const H2 = ({ c, ch }) => <h2 className="pt-6" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', letterSpacing: '-0.01em' }}>{ch || c}</h2>
  const S = ({ children }) => <strong style={{ color: 'var(--text)' }}>{children}</strong>

  const annualRent = rent * 12
  const platformCost = annualRent * (fee / 100) * 1.18
  const cards = [
    { name: 'HSBC Premier', earn: 1.5, cap: 100000, note: 'Via NoBrokerPay, up to ₹1L/month' },
    { name: 'Axis Magnus Burgundy', earn: 1.2, cap: 50000, note: 'EDGE points on rent, ₹50K/month cap' },
    { name: 'SC Ultimate', earn: 2.0, cap: null, note: 'Via gift voucher redemption, no cap' },
    { name: 'HDFC Marriott Bonvoy', earn: 1.0, cap: null, note: 'Bonvoy points, counts toward free night' },
    { name: 'Most SBI/ICICI/Axis cards', earn: 0, cap: null, note: 'Rent excluded (MCC 6513)' },
  ]

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Best Credit Cards for Rent Payment India 2026', datePublished: '2026-05-30', author: { '@type': 'Organization', name: 'PointsMax' }, publisher: { '@type': 'Organization', name: 'PointsMax', url: 'https://www.pointsmax.in' } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageNav />
      <article className="max-w-2xl mx-auto px-5 py-12">
        <div className="flex items-center gap-2 mb-8 text-[13px]" style={{ color: 'var(--text-m)' }}>
          <a href="/">PointsMax</a><span>/</span><a href="/blog">Learn</a><span>/</span>
          <span style={{ color: 'var(--text-s)' }}>Rent Payment Cards</span>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded" style={{ color: 'var(--green)', background: 'rgba(45,106,79,0.08)' }}>Guide</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>May 30, 2026</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>8 min read</span>
        </div>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(24px,4vw,36px)', lineHeight: 1.15, letterSpacing: '-0.025em', color: 'var(--text)' }}>
          Best Credit Cards for Rent Payment India 2026: The Honest Guide
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
          The popular Reels tell you HSBC Premier and Magnus earn on rent. They don't tell you that most banks have excluded rent from rewards — or how to calculate if it's actually worth the platform fee.
        </p>

        <div className="mt-10 space-y-6 text-[15px] leading-[1.85]" style={{ color: 'var(--text-s)' }}>
          <p>Two years ago, paying rent via credit card was a genuine arbitrage. Pay ₹30,000 rent through CRED, earn 1-3% rewards, profit ₹300-900 every month. Banks caught on fast.</p>
          <p><S>As of April 2026, most major Indian banks have excluded rent transactions from reward accrual.</S> ICICI, SBI, and most Axis cards now classify rent payments as MCC 6513 — a merchant category code that triggers a zero-reward override, regardless of your card's base earn rate. You pay the platform fee, earn nothing, and just get the float.</p>
          <p>That doesn't mean credit card rent payment is useless. It means the strategy has changed. Here's the honest picture.</p>

          <h2 className="pt-4" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)' }}>Platform fees: the real first number to check</h2>
          <p>Before thinking about which card earns what, check the platform fee. <S>The fee eats your rewards before the card gets a chance.</S></p>

          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-[13px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead><tr>
                <th className="text-left py-3 px-3 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Platform</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Fee</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>True cost (incl. 18% GST)</th>
                <th className="text-left py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Notes</th>
              </tr></thead>
              <tbody>
                {[
                  ['NoBroker Pay', '0.39-0.99%', '0.46-1.17%', 'Cheapest. Landlord receives NEFT directly.', 'var(--green)'],
                  ['CRED Rent Pay', '1.0-1.5%', '1.18-1.77%', 'Widely used. Good UX. Pricier.', 'var(--gold)'],
                  ['BharatNXT', '~1.5-2%', '~1.77-2.36%', 'Business-focused. Higher fees.', 'var(--red)'],
                  ['PayZapp (HDFC)', '~1%', '~1.18%', 'Only works with HDFC cards.', 'var(--text-m)'],
                ].map(([p, f, t, n, c], i) => (
                  <tr key={i}>
                    <td className="py-2.5 px-3 font-medium" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{p}</td>
                    <td className="py-2.5 px-2 text-center font-mono font-bold" style={{ color: c, borderBottom: '1px solid var(--border)' }}>{f}</td>
                    <td className="py-2.5 px-2 text-center font-mono" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>{t}</td>
                    <td className="py-2.5 px-2 text-[12px]" style={{ color: 'var(--text-m)', borderBottom: '1px solid var(--border)' }}>{n}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>Always use NoBroker Pay if your card and landlord allow it. The difference between NoBroker (0.46% effective) and CRED (1.77% effective) on ₹30,000/month rent is <S>₹3,960/year</S>.</p>

          {/* Interactive calculator */}
          <div className="p-5 rounded-2xl" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <p className="text-[12px] font-bold uppercase tracking-widest mb-3" style={{ color: 'rgba(250,248,245,0.4)' }}>Is it worth it for your rent?</p>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-[12px] mb-2" style={{ color: 'rgba(250,248,245,0.5)' }}>Monthly rent</p>
                <div className="flex gap-1.5 flex-wrap">
                  {[15000, 25000, 40000, 60000].map(v => (
                    <button key={v} onClick={() => setRent(v)} className="px-2.5 py-1 rounded-lg text-[11px] font-mono"
                      style={{ background: rent === v ? 'var(--gold)' : 'rgba(255,255,255,0.08)', color: rent === v ? 'var(--dark)' : 'rgba(250,248,245,0.6)' }}>
                      ₹{(v/1000).toFixed(0)}K
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[12px] mb-2" style={{ color: 'rgba(250,248,245,0.5)' }}>Platform fee</p>
                <div className="flex gap-1.5 flex-wrap">
                  {[0.59, 1.18, 1.77].map(v => (
                    <button key={v} onClick={() => setFee(v / 1.18)} className="px-2.5 py-1 rounded-lg text-[11px] font-mono"
                      style={{ background: Math.abs(fee - v/1.18) < 0.01 ? 'var(--gold)' : 'rgba(255,255,255,0.08)', color: Math.abs(fee - v/1.18) < 0.01 ? 'var(--dark)' : 'rgba(250,248,245,0.6)' }}>
                      {v}%
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-2 text-[13px]">
              {[
                { label: 'Annual platform cost', value: `₹${Math.round(platformCost).toLocaleString('en-IN')}`, warn: false },
                { label: 'Needed card earn to break even', value: `${((fee * 1.18)).toFixed(2)}% on rent`, warn: false },
                { label: 'HSBC Premier earns ~1.5% → annual gain', value: `+₹${Math.max(0, Math.round(annualRent * 0.015 - platformCost)).toLocaleString('en-IN')}`, warn: annualRent * 0.015 < platformCost },
                { label: 'SC Ultimate earns ~2% → annual gain', value: `+₹${Math.max(0, Math.round(annualRent * 0.02 - platformCost)).toLocaleString('en-IN')}`, warn: annualRent * 0.02 < platformCost },
              ].map((r, i) => (
                <div key={i} className="flex justify-between py-1.5" style={{ borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                  <span style={{ color: 'rgba(250,248,245,0.55)' }}>{r.label}</span>
                  <span className="font-mono font-semibold" style={{ color: r.warn ? '#fca5a5' : '#6ee7b7' }}>{r.value}</span>
                </div>
              ))}
            </div>
          </div>

          <h2 className="pt-4" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)' }}>Cards that still earn on rent in 2026</h2>

          <div className="space-y-3">
            {[
              { rank: '1', name: 'HSBC Premier', details: 'Up to ₹1 lakh/month via NoBrokerPay', earn: '~1.5% effective', note: 'Requires HSBC Premier banking relationship (₹40L assets or salary ₹3L+/mo). The rent earn is one of the last remaining unrestricted rent reward features on a mainstream card.', color: 'var(--green)' },
              { rank: '2', name: 'Axis Magnus Burgundy', details: 'Up to ₹50,000/month earn on rent', earn: '~1.2%', note: 'Post-April 2026 devaluation reduced EDGE point value but rent still earns on Burgundy-tier Magnus. Cap is ₹50,000/month — covers most urban rents. Requires Axis Burgundy banking.', color: 'var(--green)' },
              { rank: '3', name: 'Standard Chartered Ultimate', details: 'No cap, 2% via gift voucher redemption', earn: '~2%', note: 'The highest earn rate on rent — but redemption is via gift vouchers (₹1/point), not cash. Rent must be paid through platforms that code as general merchant, not MCC 6513.', color: 'var(--gold)' },
              { rank: '4', name: 'HDFC Marriott Bonvoy', details: 'Earns Bonvoy points on rent', earn: 'Variable', note: 'An underrated option. Bonvoy points earned on rent count toward Marriott status and free night awards. At ₹25K/month rent, you could earn a free night award category in under 6 months.', color: 'var(--gold)' },
            ].map((c, i) => (
              <div key={i} className="p-4 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <div className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full grid place-items-center text-[12px] font-bold shrink-0" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>{c.rank}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-[15px] font-semibold" style={{ color: 'var(--text)' }}>{c.name}</p>
                      <span className="text-[12px] font-mono font-bold" style={{ color: c.color }}>{c.earn}</span>
                    </div>
                    <p className="text-[12px] mt-0.5" style={{ color: 'var(--text-m)' }}>{c.details}</p>
                    <p className="text-[13px] mt-2" style={{ color: 'var(--text-s)' }}>{c.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mid CTA */}
          <div className="p-5 rounded-xl my-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <div>
              <p className="text-[14px] font-semibold">Check what your card earns on rent vs other categories</p>
              <p className="text-[12px] mt-1" style={{ color: 'rgba(250,248,245,0.5)' }}>Compare rent earn rates against SmartBuy, vouchers, and transfers.</p>
            </div>
            <a href="/" className="shrink-0 px-5 py-2.5 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>Check My Points →</a>
          </div>

          <h2 className="pt-4" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)' }}>The fee waiver play: the real reason most people should pay rent by card</h2>
          <p><S>Even if your card earns zero rewards on rent, it counts toward your annual spend for fee waiver purposes.</S> This is underappreciated.</p>
          <div className="p-4 rounded-xl" style={{ background: '#EDF5F0', border: '1px solid #C8DDD0' }}>
            <p className="text-[13px] font-semibold mb-2" style={{ color: 'var(--green)' }}>Real example</p>
            <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>You have HDFC Diners Club Black (fee ₹10,000, waived at ₹8L spend). Your monthly card spend is ₹45,000 — falling just short of the ₹67,000/month needed. Add ₹25,000/month rent via NoBrokerPay at 0.59% fee (₹148/month, ₹1,776/year). Now your monthly spend hits ₹70,000 → fee waived. You save ₹10,000 annual fee for ₹1,776 in platform costs. Net saving: ₹8,224/year.</p>
          </div>
          <p className="mt-3">The math for the fee waiver play is almost always positive. Calculate how far you are from your card's spend threshold, and whether rent payments bridge the gap.</p>

          <h2 className="pt-4" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)' }}>When NOT to pay rent by credit card</h2>
          <div className="space-y-2">
            {[
              ['Your card earns 0% on rent and you have no fee waiver benefit', 'You\'re paying the platform fee with zero upside. Switch to UPI/NEFT.'],
              ['The platform fee exceeds your earn rate', 'If CRED charges 1.77% effective and your card earns 1.5%, you\'re losing ₹0.27 per ₹100 of rent.'],
              ['Your landlord charges you extra for card payments', 'Some landlords dislike the NEFT delay or pass the fee to you. Just use UPI.'],
            ].map(([title, desc], i) => (
              <div key={i} className="p-4 rounded-xl" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
                <p className="text-[13px] font-bold mb-1" style={{ color: 'var(--red)' }}>✕ {title}</p>
                <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>{desc}</p>
              </div>
            ))}
          </div>

          <h2 className="pt-4" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)' }}>The bottom line</h2>
          <p>Paying rent by credit card in 2026 is a <S>cash flow and fee waiver tool</S>, not the reward hack it used to be. If your card still earns on rent (HSBC Premier, SC Ultimate) and you use NoBroker Pay, the numbers can work. For everyone else — use rent payments purely to hit spend thresholds for annual fee waivers.</p>
          <p>Use the calculator above to check if the math works for your specific rent, card, and platform combination. If the net is negative, switch to UPI and deploy your credit card spend in categories where it actually earns.</p>

          <div className="p-6 rounded-2xl text-center mt-6" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <p className="text-[16px] font-semibold">See what your card earns on every category</p>
            <p className="text-[13px] mt-1 mb-4" style={{ color: 'rgba(250,248,245,0.5)' }}>Including rent, travel, vouchers, and transfers — ranked by ₹ value.</p>
            <a href="/" className="inline-block px-6 py-2.5 rounded-xl text-[14px] font-semibold" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>Open PointsMax Calculator →</a>
          </div>

          <p className="text-[11px] mt-8 leading-relaxed" style={{ color: 'var(--text-m)' }}>
            <strong>Disclaimer:</strong> Platform fees, card reward rules, and MCC classifications change frequently. Verify current terms on the platform and your card issuer's website before transacting. PointsMax is not affiliated with any bank or platform. Not financial advice.
          </p>
          <FeedbackWidget pageSlug="best-credit-cards-rent-payment-india-2026" pageTitle="Best Credit Cards for Rent Payment India 2026" />
        </div>
      </article>
      <footer className="py-10 px-5" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[12px]" style={{ color: 'var(--text-m)' }}>
            <a href="/">PointsMax</a><span className="mx-2">·</span><a href="/about">About</a><span className="mx-2">·</span><a href="/blog">Blog</a><span className="mx-2">·</span><a href="/transfers">Transfers</a><span className="mx-2">·</span><a href="/contact">Contact</a><span className="mx-2">·</span><a href="/privacy">Privacy</a><span className="mx-2">·</span><a href="/terms">Terms</a>
          </p>
        </div>
      </footer>
      {showBar && (
        <div className="fixed bottom-0 left-0 right-0 z-50" style={{ background: 'var(--dark)', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '10px 16px' }}>
          <div className="max-w-2xl mx-auto flex items-center justify-between gap-3">
            <p className="text-[13px]" style={{ color: 'rgba(250,248,245,0.6)' }}>Check your card's rent earn value</p>
            <a href="/" className="shrink-0 px-4 py-2 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>Open Calculator →</a>
          </div>
        </div>
      )}
    </div>
  )
}
