import './globals.css'

export const metadata = {
  title: {
    default: 'PointsMax — Credit Card Reward Points Optimizer India 2026',
    template: '%s | PointsMax',
  },
  description: 'Calculate the real ₹ value of your credit card reward points. Compare 25+ Indian cards — HDFC, Axis, SBI, ICICI, Amex — with airline and hotel transfer partners. Updated post-2026 devaluations.',
  keywords: ['credit card reward points India', 'HDFC Infinia points value', 'Axis Magnus points value', 'best way to redeem credit card points India', 'reward points calculator India', 'credit card points optimizer', 'airline miles transfer India', 'SmartBuy points value 2026'],
  openGraph: {
    title: 'PointsMax — Credit Card Reward Points Optimizer India',
    description: 'Find the best way to use your credit card reward points. 25+ Indian cards, airline/hotel transfers, updated for 2026.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'PointsMax',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PointsMax — Credit Card Points Optimizer India',
    description: 'Calculate real ₹ value of your reward points. 25+ cards, transfer partners, post-2026 devaluation data.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.pointsmax.in' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'PointsMax',
  description: 'Credit card reward points optimizer for Indian consumers. Compare redemption values across 25+ cards.',
  url: 'https://www.pointsmax.in',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
  author: { '@type': 'Organization', name: 'PointsMax' },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much are credit card reward points worth in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Credit card reward points in India are worth ₹0.10 to ₹1.00 per point depending on the card and redemption method. HDFC Infinia offers the highest value at ₹1/point via SmartBuy travel bookings. Catalogue redemptions typically yield only ₹0.15-0.25/point. The same 10,000 points can be worth ₹10,000 or ₹2,000 depending on how you redeem them.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the value of 1 HDFC Infinia reward point in rupees?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'One HDFC Infinia reward point is worth ₹1 when redeemed via SmartBuy for flights, hotels, Tanishq vouchers, or Apple products. For gift vouchers and statement credit, the value drops to ₹0.50 per point. For product catalogue, it is only ₹0.20 per point.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best way to redeem credit card reward points in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best way to redeem credit card points in India is through the bank travel portal for flights and hotels. This gives the highest per-point value across HDFC, Axis, SBI, ICICI, and Amex. For premium cards, transferring to airline programs like Singapore Airlines KrisFlyer or British Airways Avios can unlock even higher value for business class bookings.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which Indian credit cards let you transfer points to airline miles?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Premium credit cards from HDFC (Infinia, Diners Club Black, Regalia Gold), Axis (Magnus, Atlas), and American Express (Platinum, Gold) support transfers to airline loyalty programs including Singapore Airlines KrisFlyer, British Airways Avios, Air India Flying Returns, Finnair Plus, Turkish Airlines Miles&Smiles, Etihad Guest, and Emirates Skywards. HDFC Infinia has the most partners at 22 programs with best ratios.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which Indian credit card gives the best reward points value?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As of May 2026, HDFC Infinia offers the highest per-point value at ₹1/point on SmartBuy travel. Axis Magnus offers ₹0.50/point on Travel EDGE. SBI rewards are ₹0.25/point, ICICI is ₹0.25/point (₹0.50 for Emeralde via InterMiles), and Amex ranges from ₹0.30 to ₹1.00. For lifetime-free cards, Amazon Pay ICICI gives 5% auto-cashback on Amazon.',
      },
    },
    {
      '@type': 'Question',
      name: 'What changed in the April 2026 credit card devaluations in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Between January and April 2026, major Indian banks devalued reward programs. Axis Bank removed Marriott Bonvoy, Accor, and Qatar Airways as transfer partners. HDFC changed Turkish Airlines and Avianca transfer ratios from 1:1 to 2:1. SBI Card capped monthly cashback at ₹2,000. PointsMax reflects all post-devaluation data.',
      },
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,700;12..96,800&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet" />

        {/* GA4 — Replace G-Z6B17T2CM9 with your Measurement ID */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Z6B17T2CM9" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Z6B17T2CM9');
            `,
          }}
        />

        {/* AdSense — Replace ca-pub-XXXXXXXXXXXXXXXX with your publisher ID */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
        />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </head>
      <body className="bg-[#060608] text-zinc-200 font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
