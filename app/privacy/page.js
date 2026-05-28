export const metadata = {
  title: 'Privacy Policy — PointsMax',
  description: 'Privacy Policy for PointsMax.in — how we collect, use, and protect your data.',
}

export default function Privacy() {
  const sections = [
    {
      title: 'Information we collect',
      content: [
        { subtitle: 'Information you provide', text: 'When you use the Points Expiry Reminder, Contact Form, or Feedback Widget, you voluntarily provide your email address and the information you submit. We use this only to fulfil the specific purpose you submitted it for — sending your expiry reminder or responding to your message.' },
        { subtitle: 'Automatically collected information', text: 'We use Google Analytics 4 (GA4) to understand how visitors use PointsMax. GA4 collects anonymous usage data including pages visited, time on site, device type, and approximate location (country/city level). This data is aggregated and cannot identify you personally.' },
        { subtitle: 'Cookies', text: 'PointsMax uses cookies set by Google Analytics and Google AdSense. Analytics cookies help us understand site usage patterns. AdSense cookies are used by Google to serve relevant advertisements. You can opt out of Google Analytics tracking via the Google Analytics Opt-out Browser Add-on.' },
      ],
    },
    {
      title: 'How we use your information',
      content: [
        { subtitle: 'Email addresses', text: 'Email addresses submitted via the Expiry Reminder tool are used only to send the requested reminder email before your points expire. We do not send marketing emails, newsletters, or promotional content unless you explicitly opt in. Email addresses submitted via the Contact Form are used only to reply to your enquiry.' },
        { subtitle: 'Analytics data', text: 'Anonymous analytics data helps us understand which content and tools are most useful, identify technical issues, and improve the site. We do not sell or share analytics data with third parties other than Google Analytics, which processes data in accordance with Google\'s Privacy Policy.' },
        { subtitle: 'Feedback', text: 'Feedback submitted via the Feedback Widget (thumbs up/down and optional comment) is stored in our database and used to improve content quality. Feedback is not linked to your identity unless you choose to include personal information in your comment.' },
      ],
    },
    {
      title: 'Data storage and security',
      content: [
        { subtitle: 'Database', text: 'User-submitted data (expiry reminders, contact form submissions, feedback) is stored in a Supabase database hosted in the Mumbai (India) region. Supabase uses industry-standard encryption at rest and in transit.' },
        { subtitle: 'Retention', text: 'Expiry reminder records are automatically deleted 90 days after the reminder is sent. Contact form submissions are retained for 12 months. Feedback records are retained indefinitely in anonymised form.' },
        { subtitle: 'No sale of data', text: 'We do not sell, rent, or trade your personal data to any third party. We do not share your data with advertisers, data brokers, or marketing companies.' },
      ],
    },
    {
      title: 'Advertising',
      content: [
        { subtitle: 'Google AdSense', text: 'PointsMax displays advertisements served by Google AdSense. Google uses cookies to serve ads based on your prior visits to this website and other websites. Google\'s use of advertising cookies enables it and its partners to serve ads based on your visit to PointsMax and other sites on the internet.' },
        { subtitle: 'Ad personalisation', text: 'You may opt out of personalised advertising by visiting Google\'s Ads Settings at adssettings.google.com. Alternatively, you can opt out of third-party vendor use of cookies by visiting the Network Advertising Initiative opt-out page at networkadvertising.org.' },
        { subtitle: 'No sponsored rankings', text: 'No advertiser has paid PointsMax to be included in, or ranked higher in, any card recommendation, comparison, or review. All rankings are based purely on objective reward value calculations.' },
      ],
    },
    {
      title: 'Third-party services',
      content: [
        { subtitle: 'Google Analytics', text: 'We use Google Analytics 4 to analyse site traffic. Data collected by GA4 is subject to Google\'s Privacy Policy (policies.google.com/privacy). We have enabled IP anonymisation in our GA4 configuration.' },
        { subtitle: 'Google AdSense', text: 'Advertising is served by Google AdSense. AdSense data practices are governed by Google\'s Privacy Policy.' },
        { subtitle: 'Supabase', text: 'Form submissions are stored using Supabase (supabase.com). Data is hosted in the Mumbai region. Supabase\'s privacy practices are available at supabase.com/privacy.' },
        { subtitle: 'Vercel', text: 'PointsMax is hosted on Vercel (vercel.com). Vercel may collect server logs including IP addresses for security and abuse prevention. Vercel\'s privacy practices are available at vercel.com/legal/privacy-policy.' },
      ],
    },
    {
      title: 'Your rights',
      content: [
        { subtitle: 'Access and deletion', text: 'You have the right to request access to, or deletion of, any personal data we hold about you. To make a request, contact us at hello@pointsmax.in with the subject line "Privacy Request." We will respond within 30 days.' },
        { subtitle: 'Correction', text: 'If you believe any data we hold about you is inaccurate, please contact us and we will correct it promptly.' },
        { subtitle: 'Withdrawal of consent', text: 'If you have subscribed to expiry reminders, you can unsubscribe at any time by contacting us. We will delete your email address from our database within 48 hours of your request.' },
      ],
    },
    {
      title: 'Children\'s privacy',
      content: [
        { subtitle: '', text: 'PointsMax is not directed at children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected information from a child under 13, please contact us immediately and we will delete it.' },
      ],
    },
    {
      title: 'Changes to this policy',
      content: [
        { subtitle: '', text: 'We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. We will update the "Last updated" date at the top of this page. Material changes will be announced on the site. Continued use of PointsMax after any changes constitutes acceptance of the updated policy.' },
      ],
    },
    {
      title: 'Contact',
      content: [
        { subtitle: '', text: 'For any privacy-related questions, requests, or concerns, contact us at: hello@pointsmax.in or via the Contact form at pointsmax.in/contact. We aim to respond to all privacy requests within 30 days.' },
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      <div className="max-w-2xl mx-auto px-5 py-16">
        <a href="/" className="text-[13px] font-medium mb-8 inline-block" style={{ color: 'var(--text-m)' }}>← Back to PointsMax</a>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '28px', color: 'var(--text)', letterSpacing: '-0.02em' }}>Privacy Policy</h1>
        <p className="mt-3 text-[13px]" style={{ color: 'var(--text-m)' }}>Last updated: May 27, 2026</p>
        <p className="mt-4 text-[15px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
          This Privacy Policy explains how PointsMax (pointsmax.in) collects, uses, and protects information when you use our website and tools. We are committed to being transparent about our data practices.
        </p>

        <div className="mt-10 space-y-8">
          {sections.map((section, i) => (
            <section key={i}>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '18px', color: 'var(--text)', marginBottom: '12px' }}>
                {i + 1}. {section.title}
              </h2>
              <div className="space-y-4">
                {section.content.map((item, j) => (
                  <div key={j}>
                    {item.subtitle && (
                      <p className="text-[14px] font-semibold mb-1" style={{ color: 'var(--text)' }}>{item.subtitle}</p>
                    )}
                    <p className="text-[14px] leading-[1.8]" style={{ color: 'var(--text-s)' }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
