export const metadata = {
  title: 'Contact',
  description: 'Get in touch with the PointsMax team.',
}

export default function Contact() {
  return (
    <div className="min-h-screen">
      <div className="max-w-2xl mx-auto px-5 py-16">
        <a href="/" className="text-[13px] font-medium mb-8 inline-block" style={{ color: 'var(--text-m)' }}>← Back to PointsMax</a>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '28px', color: 'var(--text)', letterSpacing: '-0.02em' }}>Contact Us</h1>

        <div className="mt-8 space-y-5 text-[14px] leading-[1.8]" style={{ color: 'var(--text-s)' }}>
          <p>Have questions, feedback, or found incorrect data? We'd love to hear from you.</p>

          <div className="p-6 rounded-2xl mt-6" style={{ background: 'var(--bg-s)', border: '1px solid var(--border)' }}>
            <h2 className="text-[16px] font-semibold mb-4" style={{ color: 'var(--text)' }}>Get in Touch</h2>

            <div className="space-y-4">
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--text-m)' }}>Email</p>
                <a href="mailto:hello@pointsmax.in" className="text-[15px] font-medium" style={{ color: 'var(--gold)' }}>hello@pointsmax.in</a>
              </div>

              <div>
                <p className="text-[12px] font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--text-m)' }}>Response Time</p>
                <p>We typically respond within 24-48 hours.</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl" style={{ background: 'var(--bg-s)', border: '1px solid var(--border)' }}>
            <h2 className="text-[16px] font-semibold mb-3" style={{ color: 'var(--text)' }}>Report Incorrect Data</h2>
            <p>If you notice outdated or wrong information about a credit card's reward points, redemption value, or transfer partner, please email us with the card name and what needs correcting. We'll update it within 24 hours.</p>
          </div>

          <div className="p-6 rounded-2xl" style={{ background: 'var(--bg-s)', border: '1px solid var(--border)' }}>
            <h2 className="text-[16px] font-semibold mb-3" style={{ color: 'var(--text)' }}>Request a Card</h2>
            <p>Want us to add a credit card that's not currently listed? Let us know the card name, issuing bank, and we'll research and add it to our database.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
