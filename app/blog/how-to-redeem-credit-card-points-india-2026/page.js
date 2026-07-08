'use client'

import { useState, useEffect } from 'react'
import FeedbackWidget from '@/components/FeedbackWidget'
import PageNav from '@/components/PageNav'

// HowTo schema — strong AIO/AEO signal for "how to" queries
const howToJsonLd = {
  '@context': 'https://schema.org', '@type': 'HowTo',
  name: 'How to Redeem Credit Card Points in India for Maximum Value',
  description: 'A step-by-step method to redeem Indian credit card reward points for the highest rupee value in 2026.',
  totalTime: 'PT15M',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Check your points balance and expiry', text: 'Log into your bank app or net banking and note your exact points balance and the expiry date. Most Indian credit card points expire after 24-36 months of inactivity.' },
    { '@type': 'HowToStep', position: 2, name: 'Calculate the rupee value per point', text: 'Find your card\'s redemption rate. Indian credit card points are worth between ₹0.20 and ₹1.00 each depending on the card and redemption method — a five-fold difference on the same balance.' },
    { '@type': 'HowToStep', position: 3, name: 'Compare all redemption methods by rupee value', text: 'Compare cashback, gift vouchers, the bank travel portal (like HDFC SmartBuy), and airline or hotel transfers. The same points can be worth very different amounts across these methods.' },
    { '@type': 'HowToStep', position: 4, name: 'Choose the highest-value method you will actually use', text: 'For most people, SmartBuy or cashback gives reliable value. For premium cards, transferring to airline miles for business class can yield ₹1.50-2.50 per point. Avoid low-value catalogue merchandise.' },
    { '@type': 'HowToStep', position: 5, name: 'Redeem before expiry and during bonus windows', text: 'Redeem when you cross a value threshold rather than hoarding. Time transfers around airline transfer bonus promotions for extra value.' },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is the best way to redeem credit card points in India?', acceptedAnswer: { '@type': 'Answer', text: 'The best way to redeem credit card points in India depends on your card. For premium cards like HDFC Infinia or Diners Club Black, booking travel through the SmartBuy portal gives ₹1 per point, and transferring to airline partners like Singapore Airlines KrisFlyer for business class can yield ₹1.50-2.50 per point. For most other cards, direct cashback or statement credit gives the most reliable value, typically ₹0.25-0.50 per point. The worst option is almost always the bank\'s merchandise catalogue, which often values points at ₹0.20-0.30 each. Always calculate the rupee value of each option before redeeming.' }},
    { '@type': 'Question', name: 'How much is 1 credit card reward point worth in India?', acceptedAnswer: { '@type': 'Answer', text: 'One credit card reward point in India is worth between ₹0.20 and ₹1.00, depending on the card and how you redeem it. For example, HDFC Infinia points are worth ₹1.00 when redeemed via SmartBuy but only about ₹0.30 for catalogue products. Axis EDGE points and SBI Reward Points typically range from ₹0.25 to ₹0.50. The redemption method matters more than the points balance — the same points can be worth five times more through one method than another.' }},
    { '@type': 'Question', name: 'Do credit card reward points expire in India?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, most Indian credit card reward points expire, typically after 24 to 36 months. HDFC points generally expire after 24-36 months, SBI points after 24 months, and Axis EDGE points after 36 months. Some co-branded and airline points have different rules. Account inactivity can also trigger expiry. Check your specific card\'s terms and redeem points before they lapse, as expired points cannot be recovered.' }},
    { '@type': 'Question', name: 'Is it better to redeem credit card points for cashback or vouchers?', acceptedAnswer: { '@type': 'Answer', text: 'It depends on the conversion rate your card offers for each. Cashback or statement credit gives predictable, transparent value and is best when the per-point rate matches or beats vouchers. Gift vouchers sometimes offer slightly higher value for specific brands but lock you into spending at that retailer. As a rule, choose cashback unless a voucher offers a clearly higher rupee value per point for a brand you would have spent at anyway. Avoid redeeming for something you do not need just because the headline value looks high.' }},
    { '@type': 'Question', name: 'How do I calculate the value of my credit card points?', acceptedAnswer: { '@type': 'Answer', text: 'To calculate the value of your credit card points, multiply your points balance by the rupee value per point for your chosen redemption method. For effective return rate, use the formula: (points earned × value per point) ÷ total spend × 100. For example, a card earning 2 points per ₹100 with each point worth ₹0.50 gives an effective return of 1%. A free calculator like the one at pointsmax.in can compute this across all redemption methods automatically.' }},
  ],
}

export default function BlogPost() {
  const [showBar, setShowBar] = useState(false)

  useEffect(() => {
    const fn = () => setShowBar(window.scrollY > 600)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const H2 = ({ children, id }) => (
    <h2 id={id} className="pt-8 scroll-mt-20" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', letterSpacing: '-0.01em' }}>{children}</h2>
  )
  const S = ({ children }) => <strong style={{ color: 'var(--text)' }}>{children}</strong>

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'How to Redeem Credit Card Points in India 2026: The Maximum-Value Guide', datePublished: '2026-06-21', dateModified: '2026-06-21', author: { '@type': 'Organization', name: 'PointsMax', url: 'https://www.pointsmax.in' }, publisher: { '@type': 'Organization', name: 'PointsMax', url: 'https://www.pointsmax.in' } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageNav />

      <article className="max-w-2xl mx-auto px-5 py-12">
        <div className="flex items-center gap-2 mb-8 text-[13px]" style={{ color: 'var(--text-m)' }}>
          <a href="/">PointsMax</a><span>/</span>
          <a href="/blog">Learn</a><span>/</span>
          <span style={{ color: 'var(--text-s)' }}>How to Redeem Points</span>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded" style={{ color: 'var(--green)', background: 'rgba(45,106,79,0.08)' }}>Complete Guide</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>June 21, 2026</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>12 min read</span>
        </div>

        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(24px, 4vw, 36px)', lineHeight: 1.15, letterSpacing: '-0.025em', color: 'var(--text)' }}>
          How to Redeem Credit Card Points in India 2026: The Maximum-Value Guide
        </h1>

        {/* DIRECT ANSWER BLOCK — primary AIO/AEO extraction target */}
        <div className="mt-8 p-5 rounded-2xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
          <p className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--text-m)' }}>Quick answer</p>
          <p className="text-[15px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
            <S>To redeem credit card points in India for maximum value, compare every redemption method by its rupee-per-point value before redeeming.</S> In 2026, the same points can be worth ₹0.20 to ₹1.00+ each depending on the method. For premium cards (HDFC Infinia, Diners Club Black), book travel via SmartBuy at ₹1/point or transfer to airline miles for ₹1.50-2.50/point on business class. For most other cards, direct cashback gives the most reliable value. The bank merchandise catalogue is almost always the worst option. Always calculate <span style={{ fontFamily: 'monospace' }}>(points × value per point)</span> across methods first.
          </p>
        </div>

        <p className="mt-6 text-[16px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
          Indians collectively lose thousands of crores in credit card reward points every year — points that expire unused or get redeemed at a fraction of their real value. This guide explains exactly how to redeem your points for the most rupees, which methods to avoid, and how to calculate what your points are actually worth.
        </p>

        <div className="mt-10 space-y-6 text-[15px] leading-[1.85]" style={{ color: 'var(--text-s)' }}>

          <H2 id="how-points-work">How do credit card reward points work in India?</H2>
          <p><S>Most Indian credit cards earn 1 to 2 reward points for every ₹100 to ₹150 spent on eligible transactions.</S> Accelerated categories — like online shopping, dining, or travel — can earn 5X, 10X, or more. Each point has a rupee value set by the bank, typically between ₹0.20 and ₹1.00, and that value depends heavily on how you redeem.</p>
          <p>The single most important concept: <S>the redemption method determines your points' value far more than the points balance does.</S> The same 10,000 points might be worth ₹2,000 as catalogue merchandise or ₹10,000 transferred to an airline. Understanding this five-fold spread is the entire game.</p>

          <H2 id="redemption-methods">Every redemption method, ranked by value</H2>
          <p>Here are the main ways to redeem credit card points in India in 2026, ranked from highest to lowest typical rupee value:</p>

          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-[13px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead><tr>
                <th className="text-left py-3 px-3 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Redemption method</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Typical ₹/point</th>
                <th className="text-left py-3 px-2 font-semibold" style={{ color: 'var(--text-m)', borderBottom: '1px solid var(--border)' }}>Best for</th>
              </tr></thead>
              <tbody>
                {[
                  ['Airline transfer (business class)', '₹1.50 - 2.50', 'Premium cards, long-haul J class', 'var(--green)'],
                  ['Bank travel portal (SmartBuy etc.)', '₹0.50 - 1.00', 'HDFC premium cards, flexible travel', 'var(--green)'],
                  ['Airline transfer (economy)', '₹0.50 - 1.20', 'Sweet-spot short-haul routes', 'var(--gold, #B8953E)'],
                  ['Cashback / statement credit', '₹0.25 - 0.50', 'Simplicity, any card', 'var(--gold, #B8953E)'],
                  ['Gift vouchers (Amazon, etc.)', '₹0.25 - 0.50', 'Brands you already spend at', 'var(--gold, #B8953E)'],
                  ['Bill payment / fee waiver', '₹0.20 - 0.40', 'Convenience', 'var(--text-m)'],
                  ['Merchandise catalogue', '₹0.20 - 0.30', 'Almost never worth it', 'var(--red)'],
                ].map(([method, value, best, color], i) => (
                  <tr key={i}>
                    <td className="py-2.5 px-3 font-medium" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{method}</td>
                    <td className="py-2.5 px-2 text-center font-mono font-bold" style={{ color, borderBottom: '1px solid var(--border)' }}>{value}</td>
                    <td className="py-2.5 px-2 text-[12px]" style={{ color: 'var(--text-m)', borderBottom: '1px solid var(--border)' }}>{best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-[11px] mt-2" style={{ color: 'var(--text-m)' }}>Values are typical ranges as of June 2026 and vary by specific card. Verify your card's exact rates before redeeming.</p>
          </div>

          {/* Mid CTA */}
          <div className="p-5 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <div>
              <p className="text-[14px] font-semibold">See your exact points value in seconds</p>
              <p className="text-[12px] mt-1" style={{ color: 'rgba(250,248,245,0.5)' }}>Pick your card, enter your balance — every method ranked by ₹.</p>
            </div>
            <a href="/" className="shrink-0 px-5 py-2.5 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Open Calculator →</a>
          </div>

          <H2 id="step-by-step">How to redeem your points step by step</H2>
          <p>Follow this method to ensure you never redeem at a loss:</p>
          <div className="space-y-3">
            {[
              { t: 'Check your balance and expiry', d: 'Log into your bank app or net banking. Note your exact points balance and expiry date — most Indian points expire after 24-36 months.' },
              { t: 'Find your card\'s per-point value', d: 'Identify what each point is worth across redemption methods. This is rarely advertised clearly — the bank wants you to use lower-value options.' },
              { t: 'Compare all methods by rupee value', d: 'Calculate (points × value per point) for cashback, vouchers, travel portal, and airline transfer. The spread is often 3-5x.' },
              { t: 'Pick the highest-value method you\'ll actually use', d: 'Don\'t chase a high theoretical value you won\'t realise. The best redemption is the highest-value one that fits your actual plans.' },
              { t: 'Redeem before expiry and during bonus windows', d: 'Redeem when you cross a value threshold. Time airline transfers around bonus promotions (often 20-30% extra miles).' },
            ].map((s, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="w-7 h-7 rounded-full grid place-items-center text-[12px] font-bold shrink-0 mt-0.5" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>{i+1}</span>
                <div>
                  <p className="text-[14px] font-semibold" style={{ color: 'var(--text)' }}>{s.t}</p>
                  <p className="text-[13px] mt-0.5" style={{ color: 'var(--text-s)' }}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>

          <H2 id="by-bank">How to redeem points by bank</H2>
          <p>Each major Indian issuer has its own redemption portal and rules. Here's where to go and what to expect:</p>
          <div className="space-y-3">
            {[
              { bank: 'HDFC Bank', portal: 'SmartBuy + MyRewards', detail: 'Premium cards (Infinia, Diners Black) get ₹1/point on SmartBuy travel and vouchers. Minimum 500 points to redeem. No fee for cashback conversion on most cards. SmartBuy is the highest-value path for HDFC premium cardholders.' },
              { bank: 'SBI Card', portal: 'Rewardz portal', detail: 'Redeem for vouchers, statement credit, or catalogue. Points typically worth ₹0.25-0.50. SBI points generally expire after 24 months. Statement credit is usually the cleanest option.' },
              { bank: 'Axis Bank', portal: 'EDGE Rewards / Travel EDGE', detail: 'EDGE points redeem via the Travel EDGE portal or for vouchers. Transfer to airline/hotel partners available on premium cards (Atlas, Magnus) — though ratios were cut in April 2026. EDGE points expire after 36 months.' },
              { bank: 'American Express', portal: 'Membership Rewards catalogue', detail: 'MR points worth ₹0.38-0.58 depending on redemption. Best value via airline/hotel transfer or Taj vouchers. Points from multiple Amex cards pool together.' },
              { bank: 'ICICI / Others', portal: 'iMobile / net banking', detail: 'Redeem for statement credit, vouchers, or catalogue. Value varies widely by card. Always compare against cashback before choosing merchandise.' },
            ].map((b, i) => (
              <div key={i} className="p-4 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <div className="flex items-center justify-between mb-1">
                  <p className="text-[14px] font-bold" style={{ color: 'var(--text)' }}>{b.bank}</p>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded" style={{ background: 'var(--bg-s)', color: 'var(--text-m)' }}>{b.portal}</span>
                </div>
                <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>{b.detail}</p>
              </div>
            ))}
          </div>

          <H2 id="formula">How to calculate your points' real value</H2>
          <p>Two simple formulas tell you everything:</p>
          <div className="p-5 rounded-2xl space-y-4" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: 'rgba(250,248,245,0.4)' }}>Value of your balance</p>
              <p className="text-[15px] font-mono" style={{ color: '#6ee7b7' }}>Points × value per point = ₹ value</p>
              <p className="text-[12px] mt-1" style={{ color: 'rgba(250,248,245,0.5)' }}>e.g. 20,000 points × ₹1.00 (SmartBuy) = ₹20,000</p>
            </div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '16px' }}>
              <p className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: 'rgba(250,248,245,0.4)' }}>Effective return rate</p>
              <p className="text-[15px] font-mono" style={{ color: '#6ee7b7' }}>(Points earned × value) ÷ spend × 100</p>
              <p className="text-[12px] mt-1" style={{ color: 'rgba(250,248,245,0.5)' }}>e.g. 2 pts/₹100 at ₹0.50/pt = 1% effective return</p>
            </div>
          </div>
          <p>This is exactly what the <a href="/" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>PointsMax calculator</a> does automatically — pick your card, enter your balance, and it ranks every redemption method by rupee value so you don't have to hunt for per-point rates.</p>

          <H2 id="avoid">Redemption mistakes that cost you the most</H2>
          <div className="space-y-3">
            {[
              { mistake: 'Redeeming for merchandise', cost: 'The catalogue almost always values points at ₹0.20-0.30 — the worst rate available. That ₹0.30 toaster cost you points worth ₹1.00 elsewhere.' },
              { mistake: 'Hoarding points for years', cost: 'Points are perishable, not investments. They get devalued (Axis cut transfer ratios in April 2026) or expire. Redeem at a steady threshold instead of hoarding.' },
              { mistake: 'Ignoring the transfer option on premium cards', cost: 'If you hold Infinia or an Amex MR card and only ever redeem for cashback, you may be leaving 50-150% extra value on the table versus airline transfers.' },
              { mistake: 'Redeeming for something you don\'t need', cost: 'A "high value" voucher for a store you never shop at is not a reward — it\'s clutter. Value only counts if you\'d have spent that money anyway.' },
            ].map((m, i) => (
              <div key={i} className="p-4 rounded-xl" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
                <p className="text-[13px] font-bold mb-1" style={{ color: 'var(--red)' }}>✕ {m.mistake}</p>
                <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>{m.cost}</p>
              </div>
            ))}
          </div>

          <H2 id="faq">Frequently asked questions</H2>
          <div className="space-y-3">
            {[
              { q: 'What is the best way to redeem credit card points in India?', a: 'It depends on your card. Premium cards (HDFC Infinia, Diners Club Black) get ₹1/point on SmartBuy and ₹1.50-2.50/point transferring to airline miles for business class. Most other cards give the most reliable value through direct cashback (₹0.25-0.50/point). The merchandise catalogue is almost always the worst option. Always calculate the rupee value of each method first.' },
              { q: 'How much is 1 credit card reward point worth in India?', a: 'Between ₹0.20 and ₹1.00, depending on the card and redemption method. HDFC Infinia points are worth ₹1.00 via SmartBuy but ~₹0.30 for catalogue products. The method matters more than the balance — the same points can be worth 5x more through one method than another.' },
              { q: 'Do credit card reward points expire in India?', a: 'Yes, most expire after 24-36 months. HDFC points generally last 24-36 months, SBI points 24 months, Axis EDGE points 36 months. Inactivity can also trigger expiry. Redeem before they lapse — expired points cannot be recovered.' },
              { q: 'Is it better to redeem points for cashback or vouchers?', a: 'Choose cashback unless a voucher offers a clearly higher rupee value per point for a brand you would have spent at anyway. Cashback is transparent and predictable; vouchers lock you into one retailer. Never redeem for something you do not need just because the headline value looks high.' },
              { q: 'How do I calculate the value of my credit card points?', a: 'Multiply your points balance by the rupee value per point for your chosen method. For effective return: (points earned × value per point) ÷ total spend × 100. A free tool like pointsmax.in computes this across all methods automatically.' },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <p className="text-[14px] font-semibold mb-1.5" style={{ color: 'var(--text)' }}>{item.q}</p>
                <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>{item.a}</p>
              </div>
            ))}
          </div>

          <H2 id="bottom-line">The bottom line</H2>
          <p><S>The difference between a smart and a wasteful redemption in India is often 3-5x in rupee value — on the exact same points balance.</S> The rule that captures almost everything: never redeem without first comparing every method by rupee-per-point value, and never touch the merchandise catalogue.</p>
          <p>For premium cardholders, the travel portal and airline transfers unlock the most value. For everyone else, transparent cashback beats clever-looking voucher schemes. And for all cardholders, redeeming steadily beats hoarding points that quietly devalue or expire.</p>
          <p>The fastest way to see what your points are actually worth — across every method, for your specific card — is the <a href="/" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>free PointsMax calculator</a>. To go deeper, read <a href="/blog/credit-card-points-value-india-2026" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>what your points are worth in 2026</a>, the <a href="/blog/hdfc-smartbuy-guide-2026" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>HDFC SmartBuy guide</a>, and <a href="/blog/credit-card-airline-miles-transfer-india-2026" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>how to transfer points to airline miles</a>. Redemption is just one stage of the bigger picture — for the full earn-hold-redeem system, see <a href="/blog/points-maximisation-playbook-india-2026" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>The Points Maximisation Playbook</a>.</p>

          <div className="p-6 rounded-2xl text-center mt-8" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <p className="text-[16px] font-semibold">What are your points actually worth?</p>
            <p className="text-[13px] mt-1 mb-4" style={{ color: 'rgba(250,248,245,0.5)' }}>Every redemption method, every major card, ranked by ₹ value. Free, no signup.</p>
            <a href="/" className="inline-block px-6 py-2.5 rounded-xl text-[14px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Open PointsMax Calculator →</a>
          </div>

          <p className="text-[11px] mt-8 leading-relaxed" style={{ color: 'var(--text-m)' }}>
            <strong>Disclaimer:</strong> Point values, redemption rates, and expiry rules vary by card and change without notice. Figures are typical ranges as of June 2026 based on publicly available information. Always verify your specific card's current terms before redeeming. PointsMax is not affiliated with any bank and earns no affiliate commissions. Not financial advice.
          </p>

          <FeedbackWidget pageSlug="how-to-redeem-credit-card-points-india-2026" pageTitle="How to Redeem Credit Card Points in India 2026" />
        </div>
      </article>

      <footer className="py-10 px-5" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[12px]" style={{ color: 'var(--text-m)' }}>
            <a href="/">PointsMax</a><span className="mx-2">·</span>
            <a href="/about">About</a><span className="mx-2">·</span>
            <a href="/blog">Blog</a><span className="mx-2">·</span>
            <a href="/transfers">Transfers</a><span className="mx-2">·</span>
            <a href="/contact">Contact</a><span className="mx-2">·</span>
            <a href="/privacy">Privacy</a><span className="mx-2">·</span>
            <a href="/terms">Terms</a>
          </p>
        </div>
      </footer>

      {showBar && (
        <div className="hidden sm:block fixed bottom-0 left-0 right-0 z-50" style={{ background: 'var(--dark)', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '10px 16px' }}>
          <div className="max-w-2xl mx-auto flex items-center justify-between gap-3">
            <p className="text-[13px]" style={{ color: 'rgba(250,248,245,0.6)' }}>What are your <strong style={{ color: '#FAF8F5' }}>points</strong> worth? Find out free</p>
            <a href="/" className="shrink-0 px-4 py-2 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Open Calculator →</a>
          </div>
        </div>
      )}
    </div>
  )
}
