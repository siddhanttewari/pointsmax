'use client'
import PageNav from '@/components/PageNav'

const posts = [
  { slug: 'how-to-redeem-credit-card-points-india-2026', title: 'How to Redeem Credit Card Points in India 2026: The Maximum-Value Guide', excerpt: 'The definitive guide to redeeming credit card points for maximum value. Every method ranked by ₹/point, the formula to calculate your real return, how to redeem by bank, and the mistakes that cost you 80% of your points\' value.', date: 'Jun 21, 2026', readTime: '12 min read', tag: 'Complete Guide' },
  { slug: 'best-credit-cards-lounge-access-india-2026', title: 'Best Credit Cards for Lounge Access India 2026: After the DreamFolks Collapse', excerpt: 'Lounge access broke in 2025 — DreamFolks lost its grip, networks fragmented into Priority Pass / Adani LoungeOne / HOI, and "unlimited" quietly became "₹50,000 quarterly spend." Here\'s what actually works now, ranked by budget.', date: 'Jun 19, 2026', readTime: '10 min read', tag: 'Guide' },
  { slug: 'british-airways-avios-india-guide-2026', title: 'British Airways Avios India Guide 2026: The Qatar Qsuites Sweet Spot Most Indians Miss', excerpt: 'Avios is a shared currency across 5 airlines — including Qatar Qsuites. The IndusInd Avios card is India\'s only direct earning path, and the Qatar business-class redemption from India runs ~70,000 Avios round-trip with low taxes.', date: 'Jun 17, 2026', readTime: '11 min read', tag: 'Loyalty Hub' },
  { slug: 'amex-mrcc-credit-card-review-india-2026', title: 'Amex MRCC Review 2026: The ₹1,000 Card That Outperforms ₹12,500 Premium Cards', excerpt: 'The milestone math most reviews underweight — ₹20,000/month spend triggers 2,000 bonus MR points/month, producing 6-8% effective returns. Plus the May 2026 application pause to know about.', date: 'Jun 15, 2026', readTime: '9 min read', tag: 'Card Review' },
  { slug: 'vistara-air-india-merger-miles-guide-2026', title: 'Vistara–Air India Merger: What Happened to Your CV Points and Miles in 2026', excerpt: 'Still wondering if your old Club Vistara card is valid? Here\'s the full timeline — and why your converted points are worth more than ever after April 2026\'s award chart overhaul.', date: 'Jun 12, 2026', readTime: '9 min read', tag: 'Loyalty Strategy' },
  { slug: 'air-india-flying-returns-guide-2026', title: 'Air India Flying Returns Complete Guide 2026: New Award Chart, Cheaper Redemptions, Credit Card Transfers', excerpt: 'The April 2026 award chart overhaul cut prices up to 60% — Bengaluru-Dubai now from 1,500 points, SE Asia at a flat 12,000. The rare devaluation story that\'s actually good news, plus every credit card transfer ratio.', date: 'Jun 10, 2026', readTime: '13 min read', tag: 'Loyalty Hub' },
  { slug: 'axis-atlas-credit-card-review-2026', title: 'Axis Atlas Credit Card Review 2026: Worth ₹5,000 After the April Devaluation?', excerpt: 'Unlike Magnus, Atlas survived April 2026 with its transfer ratio intact. But Accor and Marriott are gone, and HSBC TravelOne is now the stronger alternative at the same price. The honest tier-by-tier breakdown.', date: 'Jun 7, 2026', readTime: '11 min read', tag: 'Card Review' },
  { slug: 'best-credit-cards-dining-india-2026', title: 'Best Credit Cards for Dining India 2026: Restaurants, Swiggy & Zomato Ranked', excerpt: 'Ranked separately for food delivery apps and restaurant dining. The caps problem explained — why a 10% card at ₹1,000/month cap often performs worse than a 3.33% card with no cap.', date: 'Jun 5, 2026', readTime: '8 min read', tag: 'Guide' },
  { slug: 'best-krisflyer-routes-india-2026', title: 'Best KrisFlyer Routes from India 2026: Sweet Spots, Miles Required & Real ₹ Value', excerpt: 'The best — and worst — KrisFlyer redemptions from Indian cities. Singapore at 46K, Tokyo at 60K, Sydney at 72K, and the Istanbul Europe hack explained with real rupee math.', date: 'Jun 4, 2026', readTime: '11 min read', tag: 'Loyalty Strategy' },
  { slug: 'hdfc-infinia-vs-axis-magnus-2026', title: 'HDFC Infinia vs Axis Magnus 2026: The Honest Comparison After April\'s Devaluation', excerpt: 'Same ₹12,500 annual fee. Completely different value after April 2026. Full head-to-head: reward rate, transfer partners, fee waiver, lounge access, and real rupee math.', date: 'Jun 3, 2026', readTime: '10 min read', tag: 'Comparison' },
  { slug: 'best-credit-cards-rent-payment-india-2026', title: 'Best Credit Cards for Rent Payment India 2026: The Honest Guide', excerpt: 'Most banks excluded rent from rewards in 2026. Here\'s which cards still earn, platform fees compared, and the fee waiver play that often beats everything else.', date: 'May 30, 2026', readTime: '8 min read', tag: 'Guide' },
  { slug: 'best-credit-cards-flights-on-points-india-2026', title: 'Best Credit Cards for Flights on Points India 2026: Ranked by Real Returns', excerpt: 'Magnus at ~24% is outdated after April 2026. Here\'s the accurate ranking with real ₹/mile math and post-devaluation transfer ratios.', date: 'May 30, 2026', readTime: '9 min read', tag: 'Guide' },
  { slug: 'best-credit-cards-hotels-on-points-india-2026', title: 'Best Credit Cards for Hotels on Points India 2026', excerpt: 'After Axis removed Marriott and Accor in April 2026, the hotel transfer landscape changed. Here\'s what\'s left and which card now leads.', date: 'May 30, 2026', readTime: '8 min read', tag: 'Guide' },
  { slug: 'best-credit-cards-utility-bills-india-2026', title: 'Best Credit Cards for Utility Bills and Tax Payments India 2026', excerpt: 'Most premium cards earn ₹0 on utilities. But two HDFC business cards earn up to 16.6% — and one free card covers it via UPI.', date: 'May 30, 2026', readTime: '7 min read', tag: 'Guide' },
  { slug: 'best-credit-cards-international-travel-india-2026', title: 'Best Credit Cards for International Travel India 2026: Ranked by What Actually Matters', excerpt: 'Forex markup, lounge access, reward rate on international spend — ranked by real travel value, not affiliate commission. Plus the two-card stack that beats every single-card strategy.', date: 'May 28, 2026', readTime: '10 min read', tag: 'Guide' },
  { slug: 'singapore-airlines-krisflyer-india-guide-2026', title: 'Singapore Airlines KrisFlyer: The Complete India Guide 2026', excerpt: 'Which Indian cards transfer at 1:1, the post-November 2025 award chart decoded, India route sweet spots with real mile counts, and a step-by-step booking guide for Indian cardholders.', date: 'Jun 1, 2026', readTime: '14 min read', tag: 'Loyalty Guide' },
  { slug: 'credit-card-devaluation-tracker-india-2026', title: 'Indian Credit Card Devaluation Tracker 2024–2026: Every Change, Every Bank', excerpt: 'Every reward cut, transfer partner removal, and earn rate reduction across HDFC, Axis, SBI, ICICI — documented with dates and impact. Updated monthly.', date: 'May 27, 2026', readTime: '12 min read', tag: 'Tracker' },
  { slug: 'axis-magnus-credit-card-review-2026', title: 'Axis Magnus Review 2026: Still Worth ₹12,500 After the April Massacre?', excerpt: 'Marriott gone. Accor gone. Qatar gone. Transfer ratio halved overnight with zero notice. Here\'s what\'s left — and whether you should keep the card.', date: 'May 26, 2026', readTime: '11 min read', tag: 'Card Review' },
  { slug: 'hdfc-diners-club-black-credit-card-review-2026', title: 'HDFC Diners Club Black Review 2026', excerpt: 'The same rewards as Infinia at ₹10,000 fee — with complimentary Amazon Prime, Swiggy One, and Times Prime. Is it better than Infinia?', date: 'May 25, 2026', readTime: '10 min read', tag: 'Card Review' },
  { slug: 'amex-platinum-charge-card-review-india-2026', title: 'Amex Platinum Charge Card Review India 2026', excerpt: 'Is ₹66,000/year worth it? The honest breakeven math — Taj benefits, Fine Hotels & Resorts credits, 1,400+ lounges, and airline transfers.', date: 'May 23, 2026', readTime: '12 min read', tag: 'Card Review' },
  { slug: 'best-credit-cards-fuel-india-2026', title: 'Best Credit Cards for Fuel India 2026', excerpt: 'The best fuel card isn\'t a fuel card. Amazon Pay ICICI via HP Pay gives 5% at ₹0 fee — beating every dedicated fuel card in India.', date: 'May 23, 2026', readTime: '7 min read', tag: 'Guide' },
  { slug: 'best-lifetime-free-credit-cards-india-2026', title: 'Best Lifetime Free Credit Cards India 2026', excerpt: '10 genuinely free cards ranked by effective return. The ₹0-fee three-card portfolio that beats most ₹10,000/year premium cards.', date: 'May 22, 2026', readTime: '8 min read', tag: 'Guide' },
  { slug: 'hdfc-infinia-credit-card-review-2026', title: 'HDFC Infinia Credit Card Review 2026', excerpt: 'The best premium credit card in India — if you can get it. ₹1/point on SmartBuy, 22 transfer partners, and the only card with an invitation-only waitlist worth joining.', date: 'May 21, 2026', readTime: '11 min read', tag: 'Card Review' },
  { slug: 'credit-card-airline-miles-transfer-india-2026', title: 'How to Transfer Credit Card Points to Airline Miles India 2026', excerpt: 'When to transfer vs use SmartBuy. The Avios ecosystem hack, route math, post-devaluation ratios, and the transfers to avoid entirely.', date: 'May 20, 2026', readTime: '9 min read', tag: 'Guide' },
  { slug: 'hdfc-smartbuy-guide-2026', title: 'HDFC SmartBuy Complete Guide 2026', excerpt: 'The voucher hack that gives you 5X on groceries, the 10X flight earn rate, monthly caps, and 4 mistakes that destroy your SmartBuy points value.', date: 'May 20, 2026', readTime: '8 min read', tag: 'Guide' },
  { slug: 'best-credit-cards-india-2026', title: 'Best Credit Cards India 2026 by Spend Level', excerpt: 'Cards ranked by real ₹/point value for every spend level — under ₹5L, ₹5-15L, and ₹15L+. No affiliate rankings.', date: 'May 19, 2026', readTime: '9 min read', tag: 'Guide' },
  { slug: 'credit-card-points-value-india-2026', title: 'What Are Your Credit Card Points Worth in 2026?', excerpt: 'Post-devaluation reality check — every major Indian card, every redemption method, in rupees. Updated May 2026.', date: 'May 18, 2026', readTime: '7 min read', tag: 'Guide' },
]

const TAG_COLORS = {
  'Card Review': '#2563eb',
  'Guide': '#2D6A4F',
  'Loyalty Guide': '#0891b2',
  'Tracker': '#dc2626',
}

export default function Blog() {
  return (
    <div className="min-h-screen">
      <PageNav />
      <div className="max-w-2xl mx-auto px-5 py-10">
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '28px', color: 'var(--text)', letterSpacing: '-0.02em' }}>
          Learn
        </h1>
        <p className="mt-2 text-[15px]" style={{ color: 'var(--text-s)' }}>
          Guides, analysis, and no-BS takes on credit card rewards in India.
        </p>

        <div className="mt-8 space-y-4">
          {posts.map(p => (
            <a key={p.slug} href={'/blog/' + p.slug}
              className="block p-5 rounded-2xl transition-all duration-200"
              style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-m)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded"
                  style={{ color: TAG_COLORS[p.tag] || 'var(--text-m)', background: (TAG_COLORS[p.tag] || '#888') + '14' }}>
                  {p.tag}
                </span>
                <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>{p.date}</span>
                <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>· {p.readTime}</span>
              </div>
              <p className="text-[16px] font-semibold leading-snug mb-1.5" style={{ color: 'var(--text)', fontFamily: 'Playfair Display, serif' }}>
                {p.title}
              </p>
              <p className="text-[13px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
                {p.excerpt}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
