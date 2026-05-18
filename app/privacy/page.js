export const metadata = {
  title: 'Privacy Policy',
  description: 'PointsMax privacy policy — how we handle your data.',
}

export default function Privacy() {
  return (
    <div className="min-h-screen">
      <div className="max-w-2xl mx-auto px-5 py-16">
        <a href="/" className="text-[13px] font-medium mb-8 inline-block" style={{ color: 'var(--text-m)' }}>← Back to PointsMax</a>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '28px', color: 'var(--text)', letterSpacing: '-0.02em' }}>Privacy Policy</h1>
        <p className="text-[13px] mt-2 mb-8" style={{ color: 'var(--text-m)' }}>Last updated: May 2026</p>

        <div className="space-y-6 text-[14px] leading-[1.8]" style={{ color: 'var(--text-s)' }}>
          <section>
            <h2 className="text-[16px] font-semibold mb-2" style={{ color: 'var(--text)' }}>What We Collect</h2>
            <p>When you sign in with Google, we receive your name, email address, and profile picture from Google. We use this solely to personalize your experience on PointsMax. We do not access your contacts, calendar, or any other Google data.</p>
          </section>

          <section>
            <h2 className="text-[16px] font-semibold mb-2" style={{ color: 'var(--text)' }}>How We Use Your Data</h2>
            <p>Your email and profile data are stored securely in our database (hosted on Supabase, with servers in Mumbai, India). We use this data to: (a) authenticate your account, (b) unlock premium features like transfer partner data, and (c) send you product updates if you opt in. We never sell, rent, or share your personal data with third parties.</p>
          </section>

          <section>
            <h2 className="text-[16px] font-semibold mb-2" style={{ color: 'var(--text)' }}>Analytics &amp; Cookies</h2>
            <p>We use Google Analytics 4 (GA4) to understand how visitors use PointsMax. GA4 collects anonymized usage data including pages visited, time on site, and device type. We also use Google AdSense to display advertisements. Both services may use cookies. You can opt out of Google Analytics tracking by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: 'var(--gold)' }}>Google Analytics opt-out browser add-on</a>.</p>
          </section>

          <section>
            <h2 className="text-[16px] font-semibold mb-2" style={{ color: 'var(--text)' }}>Data Security</h2>
            <p>We use industry-standard security practices including HTTPS encryption, secure authentication via Supabase Auth, and Row Level Security (RLS) policies on our database to ensure your data is protected.</p>
          </section>

          <section>
            <h2 className="text-[16px] font-semibold mb-2" style={{ color: 'var(--text)' }}>Your Rights</h2>
            <p>You can request deletion of your account and all associated data at any time by contacting us. Upon receiving your request, we will delete your data within 30 days.</p>
          </section>

          <section>
            <h2 className="text-[16px] font-semibold mb-2" style={{ color: 'var(--text)' }}>Contact</h2>
            <p>For questions about this privacy policy, please email <a href="mailto:hello@pointsmax.in" className="underline" style={{ color: 'var(--gold)' }}>hello@pointsmax.in</a>.</p>
          </section>
        </div>
      </div>
    </div>
  )
}
