'use client'
import PageNav from '@/components/PageNav'

export default function Disclaimer() {
  const sections = [
    {
      title: 'Not financial advice',
      content: [
        { subtitle: 'General information only', text: 'All content on PointsMax — including articles, guides, reviews, calculators, and tools — is provided for general informational and educational purposes only. It does not constitute financial, investment, tax, credit, or legal advice, and must not be treated as a substitute for advice from a qualified professional who understands your individual circumstances.' },
        { subtitle: 'Your decisions are your own', text: 'Any decision you make about applying for a credit card, transferring reward points, redeeming rewards, or managing your finances is your own responsibility. You should evaluate your personal financial situation and, where appropriate, consult a licensed financial advisor before acting on any information found on this site.' },
      ],
    },
    {
      title: 'No affiliation with banks or programs',
      content: [
        { subtitle: 'Independent resource', text: 'PointsMax is an independent, unaffiliated resource. We are not a bank, a card issuer, a financial institution, or an agent of any of them. We are not affiliated with, endorsed by, or sponsored by any bank, airline, hotel chain, or loyalty program discussed on the site.' },
        { subtitle: 'Trademarks', text: 'All product names, logos, brands, and trademarks mentioned on PointsMax are the property of their respective owners. Their use is for identification and descriptive purposes only and does not imply endorsement or partnership.' },
      ],
    },
    {
      title: 'No affiliate commissions',
      content: [
        { subtitle: 'Editorial independence', text: 'PointsMax does not use affiliate links for credit card applications and does not earn commissions when you apply for a card mentioned on the site. Our reviews, rankings, and recommendations are based on our own analysis and are never influenced by any bank or advertiser. Where the site displays third-party advertising (such as Google AdSense), those ads are clearly separate from our editorial content and do not affect our assessments.' },
      ],
    },
    {
      title: 'Accuracy and timeliness',
      content: [
        { subtitle: 'Information changes', text: 'Credit card reward rates, fees, transfer ratios, redemption values, eligibility criteria, promotional offers, and program terms change frequently and often without notice. Although we make reasonable efforts to keep our content accurate and up to date, we cannot guarantee that any piece of information is current, complete, or free from error at the moment you read it.' },
        { subtitle: 'Verify before you act', text: 'Always confirm the latest terms directly with the relevant bank, card issuer, airline, or loyalty program before making any financial decision. Screenshots, figures, and examples on this site reflect a point in time and may since have changed.' },
      ],
    },
    {
      title: 'Calculators and tools',
      content: [
        { subtitle: 'Estimates only', text: 'The calculators and interactive tools on PointsMax produce estimates based on typical values and the inputs you provide. They are intended to illustrate concepts and support your own research, not to provide precise or guaranteed figures. Your actual results will depend on your specific card terms, spending patterns, and redemption choices.' },
      ],
    },
    {
      title: 'External links',
      content: [
        { subtitle: 'Third-party sites', text: 'PointsMax may link to third-party websites for reference. We do not control and are not responsible for the content, accuracy, or practices of any external site. A link does not imply endorsement.' },
      ],
    },
    {
      title: 'Limitation of liability',
      content: [
        { subtitle: 'Use at your own risk', text: 'Your use of PointsMax and reliance on any information or tool provided is entirely at your own risk. To the fullest extent permitted by law, PointsMax and its operators disclaim all liability for any loss or damage — direct or indirect — arising from your use of the site or reliance on its content.' },
      ],
    },
    {
      title: 'Contact',
      content: [
        { subtitle: 'Questions or corrections', text: 'Spotted an error or have a question about this disclaimer? Please reach out via our Contact page or email hello@pointsmax.in. We take accuracy seriously and welcome corrections.' },
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      <PageNav />
      <div className="max-w-2xl mx-auto px-5 py-10">
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '28px', color: 'var(--text)', letterSpacing: '-0.02em' }}>Disclaimer</h1>
        <p className="mt-2 text-[14px]" style={{ color: 'var(--text-m)' }}>Last updated: July 4, 2026</p>
        <p className="mt-4 text-[15px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
          PointsMax is an independent, informational resource about credit card rewards in India. We are not financial advisors and not affiliated with any bank. Please read this disclaimer carefully before relying on any content or tool on the site.
        </p>

        <div className="mt-8 space-y-8">
          {sections.map((s, i) => (
            <div key={i}>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '19px', color: 'var(--text)' }}>{s.title}</h2>
              <div className="mt-3 space-y-4">
                {s.content.map((c, j) => (
                  <div key={j}>
                    <p className="text-[14px] font-semibold" style={{ color: 'var(--text)' }}>{c.subtitle}</p>
                    <p className="text-[14px] leading-relaxed mt-1" style={{ color: 'var(--text-s)' }}>{c.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 text-center" style={{ borderTop: '1px solid var(--border)' }}>
          <p className="text-[12px]" style={{ color: 'var(--text-m)' }}>
            <a href="/">PointsMax</a><span className="mx-2">·</span>
            <a href="/about">About</a><span className="mx-2">·</span>
            <a href="/contact">Contact</a><span className="mx-2">·</span>
            <a href="/privacy">Privacy</a><span className="mx-2">·</span>
            <a href="/terms">Terms</a>
          </p>
        </div>
      </div>
    </div>
  )
}
