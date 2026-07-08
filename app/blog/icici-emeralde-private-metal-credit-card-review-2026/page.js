'use client'

import { useState, useEffect } from 'react'
import FeedbackWidget from '@/components/FeedbackWidget'
import PageNav from '@/components/PageNav'

const blogJsonLd = {
  '@context': 'https://schema.org', '@type': 'Product',
  name: 'ICICI Bank Emeralde Private Metal Credit Card',
  brand: { '@type': 'Brand', name: 'ICICI Bank' },
  category: 'Credit Card',
  description: 'ICICI Emeralde Private Metal is ICICI Bank\'s invite-only super-premium metal credit card, offering a 3% base reward rate including utilities and insurance, 6X/12X accelerated rewards via iShop, unlimited lounge access for primary and add-on cardholders, and Taj Epicure membership. It is the closest India-market competitor to HDFC Infinia.',
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.4', bestRating: '5', worstRating: '1', reviewCount: '1' },
  review: {
    '@type': 'Review',
    reviewRating: { '@type': 'Rating', ratingValue: '4.4', bestRating: '5', worstRating: '1' },
    author: { '@type': 'Organization', name: 'PointsMax' },
    datePublished: '2026-06-26',
    reviewBody: 'ICICI Emeralde Private Metal is the strongest super-premium alternative to HDFC Infinia in India in 2026. Its 3% flat base rate including utilities, insurance, and education, plus 6X/12X iShop accelerators, deliver guaranteed deterministic value. The welcome basket (12,500 reward points, Taj Epicure, EazyDiner Prime) effectively offsets the ₹12,499 fee. Unlimited lounge access extends to add-on cardholders, a rare benefit. It is invite-only and relationship-driven, and the EaseMyTrip-only milestone partner is its main weakness.',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is ICICI Emeralde Private Metal better than HDFC Infinia?', acceptedAnswer: { '@type': 'Answer', text: 'ICICI Emeralde Private Metal and HDFC Infinia are closely matched super-premium cards in 2026. Emeralde Private Metal wins on deterministic value: a 3% flat base rate including utilities, insurance, and education (categories Infinia caps or excludes), unlimited lounge access extended to add-on cardholders, trip cancellation cover, and a guaranteed welcome basket. HDFC Infinia wins for heavy SmartBuy users, where its 10X accelerated earning and ₹1/point redemption can exceed Emeralde\'s returns. For ICICI banking customers who use the iShop portal, Emeralde Private Metal often delivers better guaranteed value; for SmartBuy optimisers, Infinia edges ahead.' }},
    { '@type': 'Question', name: 'What is the reward rate on ICICI Emeralde Private Metal?', acceptedAnswer: { '@type': 'Answer', text: 'ICICI Emeralde Private Metal earns 6 reward points per ₹200 spent, which equals a 3% base value back when points are redeemed at ₹1 each for flights, hotels, or select brand vouchers. Through the iShop portal, it earns 6X on flights and vouchers and 12X on hotel bookings, pushing the effective rate higher. Notably, it earns rewards on utilities, insurance, education, and groceries (with caps), which most premium cards exclude. Fuel, rent, tax, and wallet loads are excluded.' }},
    { '@type': 'Question', name: 'What is the eligibility for ICICI Emeralde Private Metal?', acceptedAnswer: { '@type': 'Answer', text: 'ICICI Emeralde Private Metal is invite-only and relationship-driven. Eligibility generally requires being an ICICI Bank Private Banking or wealth customer with high assets under management, or a salary of around ₹3 lakh per month or more. Existing ICICI cardholders typically need a credit limit of ₹10 lakh or higher to be considered for an upgrade. Final approval depends on the relationship manager and the bank\'s assessment. There is no guaranteed path to the card without a strong ICICI relationship.' }},
    { '@type': 'Question', name: 'Is the ICICI Emeralde Private Metal fee worth it?', acceptedAnswer: { '@type': 'Answer', text: 'The ₹12,499 annual fee is effectively offset by the welcome basket alone: 12,500 reward points worth ₹12,500 at 1:1 redemption, plus Taj Epicure membership and EazyDiner Prime membership, both repeated on renewal from year two. Combined with unlimited lounge access, 2% forex markup, trip cancellation cover, and the 3% base rate, the card delivers well above its fee for high-spending frequent travellers. It is not worth it for low spenders who cannot use the lounge, golf, and lifestyle benefits, as the value is concentrated in usage rather than cashback.' }},
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageNav />

      <article className="max-w-2xl mx-auto px-5 py-12">
        <div className="flex items-center gap-2 mb-8 text-[13px]" style={{ color: 'var(--text-m)' }}>
          <a href="/">PointsMax</a><span>/</span>
          <a href="/blog">Learn</a><span>/</span>
          <span style={{ color: 'var(--text-s)' }}>ICICI Emeralde Private Metal</span>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded" style={{ color: '#2563eb', background: 'rgba(37,99,235,0.06)' }}>Card Review</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>June 26, 2026</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>12 min read</span>
        </div>

        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(24px, 4vw, 36px)', lineHeight: 1.15, letterSpacing: '-0.025em', color: 'var(--text)' }}>
          ICICI Emeralde Private Metal Review 2026: The Real Infinia Alternative?
        </h1>

        {/* DIRECT ANSWER BLOCK */}
        <div className="mt-8 p-5 rounded-2xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
          <p className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--text-m)' }}>Quick answer</p>
          <p className="text-[15px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
            <S>ICICI Emeralde Private Metal is ICICI's invite-only super-premium card and the closest thing to HDFC Infinia in India.</S> It earns a flat 3% base rate (6 RP/₹200) including utilities, insurance, and education — categories most premium cards exclude — plus 6X/12X accelerated rewards via iShop. The ₹12,499 fee is offset by a welcome basket (12,500 points + Taj Epicure + EazyDiner Prime). Unlimited lounge access uniquely extends to add-on cardholders. For ICICI banking customers who use iShop, it can beat Infinia on guaranteed value; for heavy SmartBuy users, Infinia still edges ahead.
          </p>
        </div>

        {/* Quick verdict */}
        <div className="mt-6 p-5 rounded-2xl" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
          <div className="flex items-center justify-between mb-3">
            <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: 'rgba(250,248,245,0.4)' }}>Quick verdict</p>
            <div className="flex items-center gap-1">
              {[1,2,3,4].map(i => <span key={i} style={{ color: 'var(--gold, #B8953E)' }}>★</span>)}
              <span style={{ color: 'rgba(250,248,245,0.35)' }}>★</span>
              <span className="text-[13px] font-mono font-bold ml-1" style={{ color: 'var(--gold, #B8953E)' }}>4.4/5</span>
            </div>
          </div>
          <p className="text-[14px] leading-relaxed" style={{ color: 'rgba(250,248,245,0.75)' }}>
            ICICI finally built a true flagship. The Emeralde Private Metal corrects every weakness of the old PVC Emeralde — a strong 3% flat base, utilities and insurance included, and a welcome basket that recovers the fee in year one. <S>Its standout edge over Infinia: unlimited lounge access for add-on cardholders</S> and trip cancellation cover. Its weakness: the milestone partner is EaseMyTrip-only, and it's strictly invite-only with a high relationship bar. For HNI ICICI customers who use iShop, it's arguably the best super-premium card in India right now.
          </p>
        </div>

        <div className="mt-10 space-y-6 text-[15px] leading-[1.85]" style={{ color: 'var(--text-s)' }}>

          <p>For years, HDFC Infinia and Diners Club Black had the Indian super-premium segment largely to themselves. The ICICI Emeralde Private Metal — invite-only, metal-bodied, launched to fix the shortcomings of the older Emeralde — is the first card that genuinely challenges them. This review covers what it earns, how it compares to Infinia, who can get it, and whether it's worth chasing.</p>

          <H2 id="rewards">Rewards: a flat 3% that includes what others exclude</H2>
          <p>The Emeralde Private Metal earns <S>6 reward points per ₹200 spent — a flat 3% value back</S> when points are redeemed at ₹1 each for travel or select vouchers. The base rate alone is solid, but two things make it genuinely strong:</p>
          <div className="space-y-3">
            <div className="p-4 rounded-xl" style={{ background: '#EDF5F0', border: '1px solid #C8DDD0' }}>
              <p className="text-[13px] font-bold mb-1" style={{ color: 'var(--green)' }}>✓ It rewards utilities, insurance & education</p>
              <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>Most premium cards exclude these high-value categories. Emeralde earns the full 3% on them (with caps: 5,000 RP/cycle on insurance, 1,000 RP/cycle each across grocery/utilities/insurance). For anyone paying large insurance premiums on a card, this is a meaningful, rare advantage.</p>
            </div>
            <div className="p-4 rounded-xl" style={{ background: '#FBF8F0', border: '1px solid #E8DFC5' }}>
              <p className="text-[13px] font-bold mb-1" style={{ color: 'var(--gold, #B8953E)' }}>★ iShop accelerators: 6X flights/vouchers, 12X hotels</p>
              <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>ICICI's iShop portal is the equivalent of HDFC SmartBuy. Booking flights and brand vouchers earns 6X, and hotel bookings earn 12X — pushing the effective rate well above 3% on strategic spends. Apart from SmartBuy, iShop is the only Indian platform offering accelerated earning at this level.</p>
            </div>
          </div>
          <p>Excluded categories (no rewards): fuel, rent, tax payments, government services, and e-wallet loads — standard exclusions across premium cards in 2026.</p>

          <H2 id="redemption">Redemption value — always use iShop</H2>
          <p>The 1 RP = ₹1 value only holds for the right redemption. The spread is large:</p>
          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-[13px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead><tr>
                <th className="text-left py-3 px-3 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Redemption method</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Value/point</th>
                <th className="text-left py-3 px-2 font-semibold" style={{ color: 'var(--text-m)', borderBottom: '1px solid var(--border)' }}>Verdict</th>
              </tr></thead>
              <tbody>
                {[
                  ['iShop flights & hotels', '₹1.00', 'Best — always use', 'var(--green)'],
                  ['Select brand vouchers (Apple, Tanishq, Tumi)', '₹1.00', 'Excellent', 'var(--green)'],
                  ['Rewards catalogue', '₹0.60', 'Mediocre', 'var(--gold, #B8953E)'],
                  ['Statement credit (cashback)', '₹0.40', 'Worst — avoid', 'var(--red)'],
                  ['Air India transfer', '~₹0.50', 'Poor ratio', 'var(--red)'],
                ].map(([method, value, verdict, color], i) => (
                  <tr key={i}>
                    <td className="py-2.5 px-3 font-medium" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{method}</td>
                    <td className="py-2.5 px-2 text-center font-mono font-bold" style={{ color, borderBottom: '1px solid var(--border)' }}>{value}</td>
                    <td className="py-2.5 px-2 text-[12px]" style={{ color: 'var(--text-m)', borderBottom: '1px solid var(--border)' }}>{verdict}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>The rule is simple: <S>always redeem via iShop for flights, hotels, or premium brand vouchers at ₹1/point.</S> Statement credit drops you to ₹0.40 — a 60% haircut. The Air India transfer option exists but the ratio is poor; keep points for iShop.</p>

          {/* Mid CTA */}
          <div className="p-5 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <div>
              <p className="text-[14px] font-semibold">See your Emeralde points' real value</p>
              <p className="text-[12px] mt-1" style={{ color: 'rgba(250,248,245,0.5)' }}>iShop vs catalogue vs statement credit — ranked by ₹.</p>
            </div>
            <a href="/" className="shrink-0 px-5 py-2.5 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Open Calculator →</a>
          </div>

          <H2 id="welcome">The welcome basket that pays for the card</H2>
          <p>The ₹12,499 fee looks steep until you account for the welcome benefits — credited on joining and repeated on renewal from year two:</p>
          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-[13px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead><tr>
                <th className="text-left py-3 px-3 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Benefit</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Value</th>
              </tr></thead>
              <tbody>
                {[
                  ['12,500 reward points (joining + each renewal)', '₹12,500 at 1:1'],
                  ['Taj Epicure membership (1 year)', '₹5,000+ in stays/dining perks'],
                  ['EazyDiner Prime membership', '25-50% dining discounts'],
                  ['EaseMyTrip milestone vouchers (₹8L spend)', '₹6,000'],
                  ['Annual fee', '−₹12,499 + GST'],
                ].map(([benefit, value], i) => (
                  <tr key={i}>
                    <td className="py-2.5 px-3 font-medium" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{benefit}</td>
                    <td className="py-2.5 px-2 text-center font-mono" style={{ color: i === 4 ? 'var(--red)' : 'var(--green)', fontWeight: 600, borderBottom: '1px solid var(--border)' }}>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>The 12,500 reward points alone (₹12,500 at iShop value) essentially <S>match the annual fee</S> — before counting Taj Epicure, EazyDiner Prime, or the milestone vouchers. The fee is also waived on ₹10 lakh annual spend. For the target customer, this card is effectively free or better from year one.</p>

          <H2 id="lounge-lifestyle">Lounge & lifestyle benefits</H2>
          <div className="space-y-2">
            {[
              ['Unlimited lounge (domestic + international)', 'For BOTH primary AND add-on cardholders — a rare, standout benefit. International via Priority Pass.'],
              ['Unlimited golf', 'Complimentary unlimited golf rounds and lessons globally (card must be used once in prior 60 days).'],
              ['BookMyShow BOGO', 'Buy one, get up to ₹750 off the second ticket, twice monthly (up to ₹3,000/month value).'],
              ['Trip cancellation cover', 'Up to ₹12,000 annually on flight/hotel cancellations — uncommon in India, genuinely useful.'],
              ['2% forex markup', 'Low for a premium card — good for international spend.'],
              ['Insurance', 'Air accident ₹3 crore, overseas hospitalisation ₹50 lakh, credit shield ₹1 crore.'],
            ].map(([benefit, detail], i) => (
              <div key={i} className="flex gap-3 p-3 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <span className="text-[13px]" style={{ color: 'var(--green)' }}>✓</span>
                <div>
                  <p className="text-[13px] font-semibold" style={{ color: 'var(--text)' }}>{benefit}</p>
                  <p className="text-[12px] mt-0.5" style={{ color: 'var(--text-m)' }}>{detail}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[12px]" style={{ color: 'var(--text-m)' }}>Note: As of late 2025, add-on cards are no longer free — ₹3,500 + GST each — but each add-on still gets unlimited lounge access, which can justify the cost for couples/families.</p>

          <H2 id="vs-infinia">Emeralde Private Metal vs HDFC Infinia</H2>
          <p>This is the comparison that matters. Both are ₹12,500-ish super-premium cards. Here's the honest head-to-head:</p>
          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-[13px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead><tr>
                <th className="text-left py-3 px-3 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}></th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: '#2563eb', borderBottom: '1px solid var(--border)' }}>Emeralde Private</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>HDFC Infinia</th>
              </tr></thead>
              <tbody>
                {[
                  ['Annual fee', '₹12,499', '₹12,500'],
                  ['Base rate', '3% flat', '3.3% (SmartBuy)'],
                  ['Accelerated portal', 'iShop 6X/12X', 'SmartBuy up to 10X'],
                  ['Utilities/insurance rewards', '✅ Yes (capped)', '❌ Mostly excluded'],
                  ['Fee waiver', '₹10L spend', '₹10L spend'],
                  ['Lounge for add-ons', '✅ Unlimited', '✅ Unlimited'],
                  ['Trip cancellation cover', '✅ ₹12,000/yr', '❌ No'],
                  ['Welcome basket', '✅ ₹12.5K pts + Taj + EazyDiner', 'Lower'],
                  ['Forex markup', '2%', '2% (net ~1.36% w/ GVP)'],
                  ['Milestone partner', 'EaseMyTrip only ✕', 'Flexible'],
                  ['Best for', 'iShop users, utility spenders', 'SmartBuy optimisers'],
                  ['Access', 'Invite / ICICI wealth', 'Invite / HDFC relationship'],
                ].map(([label, epm, infinia], i) => (
                  <tr key={i}>
                    <td className="py-2.5 px-3 font-medium" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{label}</td>
                    <td className="py-2.5 px-2 text-center text-[12px]" style={{ color: epm.includes('✅') ? 'var(--green)' : epm.includes('✕') || epm.includes('❌') ? 'var(--red)' : 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>{epm}</td>
                    <td className="py-2.5 px-2 text-center text-[12px]" style={{ color: infinia.includes('✅') ? 'var(--green)' : infinia.includes('❌') ? 'var(--red)' : 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>{infinia}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>The verdict: <S>Emeralde Private Metal wins on deterministic value</S> — utilities/insurance rewards, trip cancellation cover, and a richer welcome basket make it the safer "guaranteed value" choice. <S>Infinia wins for SmartBuy power users</S> who can exploit 10X earning and have mastered the voucher loop. If you bank with ICICI and use iShop, Emeralde is likely the better card; if you're deep in the HDFC SmartBuy ecosystem, Infinia edges ahead.</p>

          <H2 id="eligibility">Eligibility — the hard part</H2>
          <p>The Emeralde Private Metal is <S>invite-only and relationship-driven.</S> There's no reliable way to simply apply and be approved. Typical paths:</p>
          <ul className="space-y-2 pl-1" style={{ listStyleType: 'none' }}>
            <li className="flex gap-2"><span style={{ color: 'var(--gold, #B8953E)' }}>→</span><span>Be an <S>ICICI Private Banking / wealth customer</S> with high assets under management</span></li>
            <li className="flex gap-2"><span style={{ color: 'var(--gold, #B8953E)' }}>→</span><span>Salary of approximately <S>₹3 lakh/month or more</S></span></li>
            <li className="flex gap-2"><span style={{ color: 'var(--gold, #B8953E)' }}>→</span><span>Existing ICICI cardholders typically need a <S>₹10 lakh+ credit limit</S> for upgrade consideration</span></li>
            <li className="flex gap-2"><span style={{ color: 'var(--gold, #B8953E)' }}>→</span><span>Final approval rests with the relationship manager and the bank's profitability assessment</span></li>
          </ul>
          <p>Community reports (TechnoFino, CardExpert) consistently note that even long-standing ICICI customers with ₹1 lakh+ monthly card spend are often asked to open wealth accounts or maintain deposits before being offered the card. It's exclusive by design.</p>

          <H2 id="who-should">Who should get it</H2>
          <div className="space-y-3">
            <div className="p-4 rounded-xl" style={{ background: '#EDF5F0', border: '1px solid #C8DDD0' }}>
              <p className="text-[13px] font-bold mb-2" style={{ color: 'var(--green)' }}>Get it if:</p>
              <ul className="space-y-1.5 text-[13px]" style={{ color: 'var(--text-s)', listStyleType: 'none', padding: 0 }}>
                <li className="flex gap-2"><span style={{ color: 'var(--green)' }}>→</span><span>You're an ICICI banking/wealth customer who can clear the eligibility bar</span></li>
                <li className="flex gap-2"><span style={{ color: 'var(--green)' }}>→</span><span>You spend ₹10L+ annually (fee waived) and use iShop for travel/voucher bookings</span></li>
                <li className="flex gap-2"><span style={{ color: 'var(--green)' }}>→</span><span>You pay large insurance/utility bills on card — the 3% on these is rare and valuable</span></li>
                <li className="flex gap-2"><span style={{ color: 'var(--green)' }}>→</span><span>You travel with family — unlimited lounge for add-ons is a genuine differentiator</span></li>
              </ul>
            </div>
            <div className="p-4 rounded-xl" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
              <p className="text-[13px] font-bold mb-2" style={{ color: 'var(--red)' }}>Skip it if:</p>
              <ul className="space-y-1.5 text-[13px]" style={{ color: 'var(--text-s)', listStyleType: 'none', padding: 0 }}>
                <li className="flex gap-2"><span style={{ color: 'var(--red)' }}>→</span><span>You can't clear the invite/relationship bar — chasing it isn't worth opening ULIPs you don't want</span></li>
                <li className="flex gap-2"><span style={{ color: 'var(--red)' }}>→</span><span>Your annual spend is below ₹6-7L — a free cashback card gives better net returns</span></li>
                <li className="flex gap-2"><span style={{ color: 'var(--red)' }}>→</span><span>You're already deep in the HDFC SmartBuy ecosystem with Infinia — the switch may not be worth it</span></li>
                <li className="flex gap-2"><span style={{ color: 'var(--red)' }}>→</span><span>You won't use lounge, golf, dining, or travel perks — the value is in usage, not cashback</span></li>
              </ul>
            </div>
          </div>

          <H2 id="bottom-line">The bottom line</H2>
          <p>The ICICI Emeralde Private Metal is the <S>first genuine challenger to HDFC Infinia's dominance in the Indian super-premium segment.</S> Its 3% flat rate including utilities and insurance, iShop accelerators, unlimited lounge for add-ons, trip cancellation cover, and a fee-offsetting welcome basket make it one of the strongest overall propositions in the market — for those who can get it and will use it.</p>
          <p>Its real constraints aren't the card itself but access (strictly invite-only, high relationship bar) and the EaseMyTrip-only milestone partner. If you're an ICICI wealth customer who books travel through iShop, this is arguably the best super-premium card in India in 2026. If you're outside the ICICI ecosystem, Infinia or Diners Club Black remain the more attainable flagships.</p>
          <p>Compare what your points are worth across both cards with the <a href="/" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>PointsMax calculator</a>, read our <a href="/blog/hdfc-infinia-credit-card-review-2026" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>HDFC Infinia review</a> for the other side of this comparison, and see the full redemption framework in our guide on <a href="/blog/how-to-redeem-credit-card-points-india-2026" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>how to redeem credit card points for maximum value</a>.</p>

          <div className="p-6 rounded-2xl text-center mt-8" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <p className="text-[16px] font-semibold">Emeralde or Infinia — which wins for your spend?</p>
            <p className="text-[13px] mt-1 mb-4" style={{ color: 'rgba(250,248,245,0.5)' }}>Run both through the calculator and compare real net value.</p>
            <a href="/" className="inline-block px-6 py-2.5 rounded-xl text-[14px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Open PointsMax Calculator →</a>
          </div>

          <p className="text-[11px] mt-8 leading-relaxed" style={{ color: 'var(--text-m)' }}>
            <strong>Disclaimer:</strong> Card terms, reward rates, benefits, and eligibility are based on publicly available ICICI Bank communications and community reviews as of June 2026 and change without notice. Some milestone tiers may have been revised — confirm current terms with your relationship manager. Always verify at icicibank.com before applying. PointsMax is not affiliated with ICICI Bank. Not financial advice.
          </p>

          <FeedbackWidget pageSlug="icici-emeralde-private-metal-credit-card-review-2026" pageTitle="ICICI Emeralde Private Metal Review 2026" />
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
            <p className="text-[13px]" style={{ color: 'rgba(250,248,245,0.6)' }}>Compare <strong style={{ color: '#FAF8F5' }}>Emeralde vs Infinia</strong> value</p>
            <a href="/" className="shrink-0 px-4 py-2 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Open Calculator →</a>
          </div>
        </div>
      )}
    </div>
  )
}
