import './globals.css'

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata = {
  verification: {
    google: 'H8Ti6YZXVrOgtuwcfa6tYLF5VWn0E7ex3-QnoRK1hnc',
  },
  title: {
    default: 'PointsMax — Credit Card Reward Points Optimizer India 2026',
    template: '%s | PointsMax',
  },
  description: 'Calculate the real INR value of your credit card reward points. Compare 25+ Indian cards with airline and hotel transfer partners. Updated post-2026 devaluations.',
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
    description: 'Calculate real INR value of your reward points. 25+ cards, transfer partners, post-2026 devaluation data.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.pointsmax.in' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'PointsMax',
  description: 'Credit card reward points optimizer for Indian consumers.',
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
    { '@type': 'Question', name: 'How much are credit card reward points worth in India?', acceptedAnswer: { '@type': 'Answer', text: 'Credit card reward points in India range from 0.10 to 1.00 per point depending on the card and redemption method. HDFC Infinia offers the highest at 1 per point via SmartBuy travel bookings.' }},
    { '@type': 'Question', name: 'What is the value of 1 HDFC Infinia reward point in rupees?', acceptedAnswer: { '@type': 'Answer', text: 'One HDFC Infinia reward point is worth 1 rupee via SmartBuy for flights, hotels, Tanishq, or Apple products. Gift vouchers give 0.50 per point. Product catalogue gives only 0.20 per point.' }},
    { '@type': 'Question', name: 'What is the best way to redeem credit card reward points in India?', acceptedAnswer: { '@type': 'Answer', text: 'The best way is through the bank travel portal for flights and hotels. For premium cards, transferring to airline programs like Singapore Airlines KrisFlyer or British Airways Avios can unlock higher value for business class bookings.' }},
    { '@type': 'Question', name: 'Which Indian credit cards let you transfer points to airline miles?', acceptedAnswer: { '@type': 'Answer', text: 'Premium cards from HDFC (Infinia, Diners Club Black, Regalia Gold), Axis (Magnus, Atlas), and American Express (Platinum, Gold) support transfers to programs including Singapore Airlines KrisFlyer, British Airways Avios, Air India Flying Returns, and others.' }},
    { '@type': 'Question', name: 'What changed in the April 2026 credit card devaluations in India?', acceptedAnswer: { '@type': 'Answer', text: 'Axis Bank removed Marriott, Accor, and Qatar Airways as transfer partners. HDFC changed Turkish and Avianca ratios from 1:1 to 2:1. SBI capped monthly cashback at 2000 rupees. PointsMax reflects all post-devaluation data.' }},
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Z6B17T2CM9" />
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-Z6B17T2CM9');` }} />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1805797993522928" crossOrigin="anonymous" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
