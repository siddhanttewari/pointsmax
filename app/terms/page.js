'use client'
import PageNav from '@/components/PageNav'

export default function Terms() {
  const sections = [
    {
      title: 'Acceptance of terms',
      content: [
        { subtitle: 'Agreement', text: 'By accessing or using PointsMax (pointsmax.in), you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, please do not use the site. We may update these terms from time to time, and continued use of the site constitutes acceptance of the revised terms.' },
        { subtitle: 'Eligibility', text: 'PointsMax is intended for users in India who are of legal age to hold a credit card. The information provided is oriented toward the Indian credit card and rewards market.' },
      ],
    },
    {
      title: 'Nature of our content',
      content: [
        { subtitle: 'Informational only', text: 'PointsMax provides information, tools, and editorial content about credit card reward points, redemption strategies, and loyalty programs. All content is for general informational and educational purposes only. It does not constitute financial, investment, tax, or legal advice, and should not be relied upon as such.' },
        { subtitle: 'Not a recommendation to apply', text: 'Nothing on PointsMax is an offer, solicitation, or recommendation to apply for any specific credit card or financial product. Decisions about credit cards should be made based on your own circumstances and, where appropriate, professional advice.' },
        { subtitle: 'Independence', text: 'PointsMax is an independent, unaffiliated resource. We are not affiliated with, endorsed by, or sponsored by any bank, card issuer, airline, hotel chain, or loyalty program mentioned on the site. Brand names and trademarks belong to their respective owners and are used for identification and descriptive purposes only.' },
      ],
    },
    {
      title: 'Accuracy and third-party information',
      content: [
        { subtitle: 'Rates change frequently', text: 'Reward rates, transfer ratios, fees, redemption values, eligibility criteria, and card benefits change frequently and often without notice. While we strive for accuracy and update content regularly, we cannot guarantee that all information is current or error-free at the time you view it.' },
        { subtitle: 'Always verify', text: 'Before applying for a card, transferring points, or making any redemption decision, always verify the current terms directly with the relevant bank, card issuer, or loyalty program. PointsMax is not responsible for decisions made based on outdated or inaccurate information.' },
        { subtitle: 'Calculator estimates', text: 'Our calculators and tools provide estimates based on typical values and the inputs you provide. Actual value realised depends on your specific card terms, redemption choices, and current program rates. Estimates are illustrative, not guaranteed.' },
      ],
    },
    {
      title: 'Acceptable use',
      content: [
        { subtitle: 'Permitted use', text: 'You may use PointsMax for your own personal, non-commercial purposes. You may link to our pages and reference our content with appropriate attribution.' },
        { subtitle: 'Prohibited use', text: 'You may not scrape, republish, or reproduce substantial portions of our content without permission; attempt to disrupt or compromise the site or its infrastructure; use the site for any unlawful purpose; or misrepresent our content as your own.' },
      ],
    },
    {
      title: 'Limitation of liability',
      content: [
        { subtitle: 'No warranties', text: 'PointsMax is provided on an "as is" and "as available" basis without warranties of any kind, express or implied. We do not warrant that the site will be uninterrupted, error-free, or free of harmful components.' },
        { subtitle: 'Limitation', text: 'To the fullest extent permitted by law, PointsMax and its operators shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from your use of, or inability to use, the site or its content — including any loss arising from reliance on information, calculators, or tools provided.' },
      ],
    },
    {
      title: 'Advertising',
      content: [
        { subtitle: 'Third-party ads', text: 'PointsMax may display advertisements served by third-party networks such as Google AdSense. These advertisements are clearly distinguishable from editorial content. We do not control and are not responsible for the content of third-party advertisements or the products and services they promote. Our editorial content and rankings are never influenced by advertisers.' },
      ],
    },
    {
      title: 'Governing law',
      content: [
        { subtitle: 'Jurisdiction', text: 'These Terms of Use are governed by the laws of India. Any disputes arising in connection with the site or these terms shall be subject to the exclusive jurisdiction of the courts of India.' },
      ],
    },
    {
      title: 'Contact',
      content: [
        { subtitle: 'Questions', text: 'If you have any questions about these Terms of Use, please reach out via our Contact page or email hello@pointsmax.in.' },
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      <PageNav />
      <div className="max-w-2xl mx-auto px-5 py-10">
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '28px', color: 'var(--text)', letterSpacing: '-0.02em' }}>Terms of Use</h1>
        <p className="mt-2 text-[14px]" style={{ color: 'var(--text-m)' }}>Last updated: July 4, 2026</p>
        <p className="mt-4 text-[15px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
          These Terms of Use govern your access to and use of PointsMax. Please read them carefully. PointsMax is an independent, informational resource about credit card rewards in India — not a financial advisor and not affiliated with any bank.
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
            <a href="/disclaimer">Disclaimer</a>
          </p>
        </div>
      </div>
    </div>
  )
}
