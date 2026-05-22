export const metadata = {
  title: 'Blog — Credit Card Points Guides & Updates',
  description: 'Guides, analysis, and updates on credit card reward points in India. Post-2026 devaluation data, redemption strategies, and transfer partner changes.',
}

const posts = [
  {
    slug: 'amex-platinum-charge-card-review-india-2026',
    title: 'Amex Platinum Charge Card Review India 2026: The ₹66,000 Question',
    excerpt: 'American Express claims ₹4.5 lakh in annual value. The internet says it\'s aspirational. Here\'s the breakeven math that tells you if it\'s actually worth it for you.',
    date: 'May 23, 2026',
    readTime: '11 min read',
    tag: 'Card Review',
  },
  {
    slug: 'best-lifetime-free-credit-cards-india-2026',
    title: 'Best Lifetime Free Credit Cards in India 2026: Ranked by What You Actually Get',
    excerpt: '10 genuinely free cards ranked by effective return — not by affiliate payout. Plus the ₹0-fee three-card portfolio that quietly outperforms most premium cards.',
    date: 'May 22, 2026',
    readTime: '9 min read',
    tag: 'Listicle',
  },
  {
    slug: 'hdfc-infinia-credit-card-review-2026',
    title: 'HDFC Infinia Credit Card Review 2026: Still India\'s Most Valuable Card?',
    excerpt: 'Per-point value across SmartBuy, vouchers, transfers. The ₹18L retention requirement, monthly caps, 22 transfer partners, and the breakeven math.',
    date: 'May 21, 2026',
    readTime: '12 min read',
    tag: 'Card Review',
  },
  {
    slug: 'credit-card-airline-miles-transfer-india-2026',
    title: 'How to Turn Credit Card Points Into Business Class Flights (The Indian Transfer Guide)',
    excerpt: 'Your HDFC or Axis points can buy you a flat-bed seat to Singapore. The 5 best transfers, the Avios hack, and when to transfer vs use the travel portal.',
    date: 'May 20, 2026',
    readTime: '11 min read',
    tag: 'Strategy',
  },
  {
    slug: 'hdfc-smartbuy-guide-2026',
    title: 'HDFC SmartBuy: The Only Way to Get ₹1 Per Point (And the Tricks They Don\'t Tell You)',
    excerpt: 'SmartBuy is the single most valuable feature of any HDFC card. Earn rates by card, monthly caps, the voucher hack, and the 4 mistakes that waste your points.',
    date: 'May 20, 2026',
    readTime: '9 min read',
    tag: 'Deep Dive',
  },
  {
    slug: 'best-credit-cards-india-2026',
    title: 'Best Credit Cards in India 2026: Ranked by What Your Points Are Actually Worth',
    excerpt: 'Not another "top 10" list. We ranked every card by real rupee value per point — because a 10x earn rate means nothing if each point is worth ₹0.10.',
    date: 'May 19, 2026',
    readTime: '10 min read',
    tag: 'Guide',
  },
  {
    slug: 'credit-card-points-value-india-2026',
    title: 'What Are Your Credit Card Points Actually Worth? The 2026 Reality Check',
    excerpt: 'Every major Indian bank slashed rewards this year. Here\'s what your points are really worth now — card by card, method by method.',
    date: 'May 18, 2026',
    readTime: '8 min read',
    tag: 'Guide',
  },
]

export default function Blog() {
  return (
    <div className="min-h-screen">
      <div className="max-w-2xl mx-auto px-5 py-16">
        <a href="/" className="text-[13px] font-medium mb-8 inline-block" style={{ color: 'var(--text-m)' }}>← Back to PointsMax</a>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '28px', color: 'var(--text)', letterSpacing: '-0.02em' }}>Blog</h1>
        <p className="mt-2 text-[15px]" style={{ color: 'var(--text-s)' }}>Guides, analysis, and no-BS takes on credit card rewards in India.</p>

        <div className="mt-10 space-y-6">
          {posts.map(p => (
            <a key={p.slug} href={'/blog/' + p.slug} className="block p-6 rounded-2xl transition-all duration-200 hover:border-white/[0.12]"
              style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded" style={{ color: 'var(--green)', background: 'rgba(110,231,183,0.08)' }}>{p.tag}</span>
                <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>{p.date}</span>
                <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>{p.readTime}</span>
              </div>
              <h2 className="text-[18px] font-semibold leading-snug" style={{ fontFamily: 'Playfair Display, serif', color: 'var(--text)' }}>{p.title}</h2>
              <p className="mt-2 text-[14px] leading-relaxed" style={{ color: 'var(--text-s)' }}>{p.excerpt}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
