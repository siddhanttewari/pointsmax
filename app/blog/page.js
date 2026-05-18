export const metadata = {
  title: 'Blog — Credit Card Points Guides & Updates',
  description: 'Guides, analysis, and updates on credit card reward points in India. Post-2026 devaluation data, redemption strategies, and transfer partner changes.',
}

const posts = [
  {
    slug: 'credit-card-points-value-india-2026',
    title: 'What Are Your Credit Card Points Actually Worth? The 2026 Reality Check',
    excerpt: 'Every major Indian bank slashed rewards this year. Here\'s what your points are really worth now — card by card, method by method — and the 3 mistakes that are costing you money.',
    date: 'May 18, 2026',
    readTime: '8 min read',
    tag: 'Guide',
  },
]

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#060608]">
      <div className="max-w-2xl mx-auto px-5 py-16">
        <a href="/" className="text-[13px] font-medium mb-8 inline-block" style={{ color: 'rgba(255,255,255,0.3)' }}>← Back to PointsMax</a>
        <h1 style={{ fontFamily: 'Bricolage Grotesque, sans-serif', fontWeight: 700, fontSize: '28px', color: '#e2e8f0', letterSpacing: '-0.02em' }}>Blog</h1>
        <p className="mt-2 text-[15px]" style={{ color: 'rgba(255,255,255,0.4)' }}>Guides, analysis, and no-BS takes on credit card rewards in India.</p>

        <div className="mt-10 space-y-6">
          {posts.map(p => (
            <a key={p.slug} href={'/blog/' + p.slug} className="block p-6 rounded-2xl transition-all duration-200 hover:border-white/[0.12]"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded" style={{ color: '#6ee7b7', background: 'rgba(110,231,183,0.08)' }}>{p.tag}</span>
                <span className="text-[12px]" style={{ color: 'rgba(255,255,255,0.25)' }}>{p.date}</span>
                <span className="text-[12px]" style={{ color: 'rgba(255,255,255,0.25)' }}>{p.readTime}</span>
              </div>
              <h2 className="text-[18px] font-semibold leading-snug" style={{ fontFamily: 'Bricolage Grotesque, sans-serif', color: 'rgba(255,255,255,0.85)' }}>{p.title}</h2>
              <p className="mt-2 text-[14px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>{p.excerpt}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
