'use client'

import { useState, useEffect } from 'react'
import FeedbackWidget from '@/components/FeedbackWidget'
import PageNav from '@/components/PageNav'

const faqJsonLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How do I earn Accor, Hilton, or IHG points in India?', acceptedAnswer: { '@type': 'Answer', text: 'In India, the main paths are credit card point transfers. For Accor ALL, HSBC TravelOne transfers at 2:3 (and SBI Card MILES also converts to Accor). For Hilton Honors, American Express Membership Rewards transfers at roughly 1:0.9, with periodic 50% bonus promotions. For IHG One Rewards, Axis EDGE Rewards transfer at ratios that vary by card (around 5:2 on Magnus, 1:1 on some variants), and HDFC points can also route to IHG. Note that Axis removed Accor and Marriott as transfer partners in April 2026, so HSBC TravelOne is now the primary Accor path in India.' }},
    { '@type': 'Question', name: 'Which hotel loyalty program is best for Indian travellers?', acceptedAnswer: { '@type': 'Answer', text: 'Marriott Bonvoy remains the best single program for most Indian travellers due to its largest India and global footprint. Beyond Marriott, the choice depends on travel pattern: Accor ALL is best for Europe and Southeast Asia travel (Sofitel, Pullman, Novotel) and has the highest fixed point value; Hilton Honors suits US travel with generous earn rates and Amex transfer bonuses; IHG One Rewards fits Asia business travel and offers the standout 4th-night-free benefit on award stays. Occasional travellers should focus on opportunistic points accumulation via credit card transfers rather than chasing status.' }},
    { '@type': 'Question', name: 'What are Accor, Hilton, and IHG points worth?', acceptedAnswer: { '@type': 'Answer', text: 'Accor ALL points have a fixed value of approximately 2 euro cents each (around ₹1.80), the highest and most predictable among hotel currencies — 2,000 ALL points equal €40 off any eligible stay. Hilton Honors points are worth roughly 0.5 US cents each but earn rates are high, so the effective value holds up. IHG One Rewards points are worth about 0.5 to 0.7 US cents each, with value boosted significantly by the 4th-night-free benefit on award stays of four or more nights.' }},
  ],
}

export default function BlogPost() {
  const [showBar, setShowBar] = useState(false)
  const [prog, setProg] = useState('accor')

  useEffect(() => {
    const fn = () => setShowBar(window.scrollY > 600)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const H2 = ({ children, id }) => (
    <h2 id={id} className="pt-8 scroll-mt-20" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', letterSpacing: '-0.01em' }}>{children}</h2>
  )
  const S = ({ children }) => <strong style={{ color: 'var(--text)' }}>{children}</strong>

  const PROGRAMS = {
    accor: {
      name: 'Accor ALL',
      tagline: 'The fixed-value champion',
      color: '#0891b2',
      value: '~2¢ / ₹1.80 per point (fixed)',
      brands: 'Sofitel, Pullman, Novotel, Mercure, Raffles, Fairmont, ibis',
      footprint: 'Strongest in Europe & Southeast Asia; growing India presence',
      earn: 'HSBC TravelOne transfers at 2:3 (primary India path). SBI Card MILES also converts to Accor ALL.',
      sweet: 'Fixed value means no award-chart guesswork — 2,000 points = €40 off any eligible stay. Sofitel/Pullman in Indian metros yield ₹0.80-1.00+ per source point via TravelOne.',
      note: 'Axis removed Accor as a transfer partner in April 2026 — HSBC TravelOne is now the main path. Amex MR added Accor as a partner internationally in May 2026; check India availability.',
    },
    hilton: {
      name: 'Hilton Honors',
      tagline: 'High earn, transfer bonuses',
      color: 'var(--gold, #B8953E)',
      value: '~0.5¢ per point (high earn offsets)',
      brands: 'Conrad, Waldorf Astoria, DoubleTree, Hampton, Canopy, Curio',
      footprint: 'Widest in US; solid Asia & India luxury (Conrad Bengaluru, etc.)',
      earn: 'Amex Membership Rewards transfers at ~1:0.9, with periodic 50% bonus promotions (a 50% bonus ran in May 2026).',
      sweet: 'Time transfers around the recurring Amex MR → Hilton 50% bonus windows — that turns 1 MR into ~1.35 Hilton points. Amex Platinum also grants Hilton Gold status (free breakfast, upgrades).',
      note: 'Hilton points are low-value individually, but high earn rates and the Amex transfer bonus make the effective return competitive. Gold status is reachable at 20 stays / 40 nights.',
    },
    ihg: {
      name: 'IHG One Rewards',
      tagline: 'The 4th-night-free king',
      color: '#7c3aed',
      value: '~0.5-0.7¢ per point',
      brands: 'InterContinental, Crowne Plaza, Holiday Inn, Kimpton, Six Senses, Regent',
      footprint: 'Narrower India footprint; strong in Asia business hubs',
      earn: 'Axis EDGE Rewards transfer to IHG (ratio varies by card — ~5:2 on Magnus, better on some variants). HDFC points can also route to IHG.',
      sweet: 'The killer perk: 4th-night-free on award stays of 4+ nights — effectively a 25% discount on longer redemptions. Award nights start at just 10,000 points. Six Senses Fort Barwara (Rajasthan) is a standout India redemption.',
      note: 'IHG uses dynamic award pricing (5,000-250,000 pts/night). Club member points expire after 12 months of inactivity — keep the account active.',
    },
  }

  const p = PROGRAMS[prog]

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Accor, Hilton & IHG in India 2026: Hotel Points Beyond Marriott', datePublished: '2026-07-01', dateModified: '2026-07-01', author: { '@type': 'Organization', name: 'PointsMax', url: 'https://www.pointsmax.in' }, publisher: { '@type': 'Organization', name: 'PointsMax', url: 'https://www.pointsmax.in' } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageNav />

      <article className="max-w-2xl mx-auto px-5 py-12">
        <div className="flex items-center gap-2 mb-8 text-[13px]" style={{ color: 'var(--text-m)' }}>
          <a href="/">PointsMax</a><span>/</span>
          <a href="/blog">Learn</a><span>/</span>
          <span style={{ color: 'var(--text-s)' }}>Accor, Hilton & IHG India</span>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded" style={{ color: '#0891b2', background: 'rgba(8,145,178,0.08)' }}>Loyalty Hub</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>July 1, 2026</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>11 min read</span>
        </div>

        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(24px, 4vw, 36px)', lineHeight: 1.15, letterSpacing: '-0.025em', color: 'var(--text)' }}>
          Accor, Hilton & IHG in India 2026: Hotel Points Beyond Marriott
        </h1>

        {/* DIRECT ANSWER BLOCK */}
        <div className="mt-8 p-5 rounded-2xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
          <p className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--text-m)' }}>Quick answer</p>
          <p className="text-[15px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
            <S>Beyond Marriott, three hotel programs are worth knowing in India: Accor ALL, Hilton Honors, and IHG One Rewards.</S> Accor has the highest, fixed point value (~2¢ each) and is earned via HSBC TravelOne (2:3). Hilton has high earn rates and recurring Amex Membership Rewards transfer bonuses (up to 50%). IHG's standout is the 4th-night-free benefit on award stays, earned via Axis EDGE transfers. Pick by travel pattern: Accor for Europe/SE Asia, Hilton for US travel, IHG for Asia business trips and long award stays. Note: Axis removed Accor and Marriott as transfer partners in April 2026.
          </p>
        </div>

        <p className="mt-6 text-[16px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
          Marriott Bonvoy is the default hotel program for most Indian travellers — we covered it in our <a href="/blog/marriott-bonvoy-india-strategy-guide-2026" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>Marriott Bonvoy India guide</a>. But it isn't always the best fit. If your travel skews toward Europe, the US, or long stays, one of these three programs can deliver more value. Here's how each works from India in 2026.
        </p>

        <div className="mt-10 space-y-6 text-[15px] leading-[1.85]" style={{ color: 'var(--text-s)' }}>

          <H2 id="quick-compare">The three programs at a glance</H2>
          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-[12px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead><tr>
                <th className="text-left py-3 px-3 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Program</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Point value</th>
                <th className="text-left py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Best for</th>
                <th className="text-left py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>India earn path</th>
              </tr></thead>
              <tbody>
                {[
                  ['Accor ALL', '~2¢ (fixed)', 'Europe / SE Asia', 'HSBC TravelOne 2:3'],
                  ['Hilton Honors', '~0.5¢', 'US travel', 'Amex MR ~1:0.9 (+bonuses)'],
                  ['IHG One Rewards', '~0.5-0.7¢', 'Asia / long stays', 'Axis EDGE transfer'],
                  ['Marriott Bonvoy*', '~0.7-0.8¢', 'India / global default', 'HDFC Marriott card, Amex'],
                ].map(([prog, val, best, earn], i) => (
                  <tr key={i}>
                    <td className="py-2.5 px-3 font-medium" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{prog}</td>
                    <td className="py-2.5 px-2 text-center font-mono font-bold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>{val}</td>
                    <td className="py-2.5 px-2 text-[11px]" style={{ color: 'var(--text-m)', borderBottom: '1px solid var(--border)' }}>{best}</td>
                    <td className="py-2.5 px-2 text-[11px]" style={{ color: 'var(--text-m)', borderBottom: '1px solid var(--border)' }}>{earn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-[11px] mt-2" style={{ color: 'var(--text-m)' }}>*Marriott covered in our dedicated guide. Values are typical as of July 2026; Accor's is a fixed redemption value, others are dynamic averages.</p>
          </div>

          <H2 id="explore">Explore each program</H2>
          <div className="flex gap-1.5 mb-4">
            {Object.entries(PROGRAMS).map(([key, info]) => (
              <button key={key} onClick={() => setProg(key)}
                className="flex-1 py-2 px-2 rounded-xl text-[12px] font-semibold transition-all"
                style={{ background: prog === key ? 'var(--dark)' : 'var(--bg-s)', color: prog === key ? '#FAF8F5' : 'var(--text-s)', border: '1px solid var(--border)' }}>
                {info.name.split(' ')[0]}
              </button>
            ))}
          </div>

          <div className="p-5 rounded-2xl" style={{ background: 'var(--card)', border: `2px solid ${p.color}` }}>
            <div className="flex items-center justify-between mb-3">
              <p className="text-[16px] font-bold" style={{ color: p.color }}>{p.name}</p>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded" style={{ color: p.color, background: p.color + '15' }}>{p.tagline}</span>
            </div>
            <div className="space-y-2.5 text-[13px]">
              <div><span className="font-semibold" style={{ color: 'var(--text)' }}>Point value: </span><span style={{ color: 'var(--text-s)' }}>{p.value}</span></div>
              <div><span className="font-semibold" style={{ color: 'var(--text)' }}>Brands: </span><span style={{ color: 'var(--text-s)' }}>{p.brands}</span></div>
              <div><span className="font-semibold" style={{ color: 'var(--text)' }}>Footprint: </span><span style={{ color: 'var(--text-s)' }}>{p.footprint}</span></div>
              <div><span className="font-semibold" style={{ color: 'var(--text)' }}>How to earn in India: </span><span style={{ color: 'var(--text-s)' }}>{p.earn}</span></div>
              <div className="p-3 rounded-lg mt-2" style={{ background: '#EDF5F0', border: '1px solid #C8DDD0' }}>
                <span className="font-semibold" style={{ color: 'var(--green)' }}>Sweet spot: </span><span style={{ color: 'var(--text-s)' }}>{p.sweet}</span>
              </div>
              <div className="p-3 rounded-lg" style={{ background: '#FBF8F0', border: '1px solid #E8DFC5' }}>
                <span className="font-semibold" style={{ color: 'var(--gold, #B8953E)' }}>Note: </span><span style={{ color: 'var(--text-s)' }}>{p.note}</span>
              </div>
            </div>
          </div>

          {/* Mid CTA */}
          <div className="p-5 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <div>
              <p className="text-[14px] font-semibold">Which card earns the most for your hotel program?</p>
              <p className="text-[12px] mt-1" style={{ color: 'rgba(250,248,245,0.5)' }}>Compare transfer values across every Indian card.</p>
            </div>
            <a href="/transfers" className="shrink-0 px-5 py-2.5 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Transfer Directory →</a>
          </div>

          <H2 id="accor-deep">Accor ALL: the fixed-value advantage</H2>
          <p>Accor is structurally different from every other hotel program: <S>its points have a fixed value of about 2 euro cents (~₹1.80) each.</S> There's no award chart, no dynamic pricing, no peak/off-peak guesswork. 2,000 ALL points always equal €40 off an eligible stay. This predictability is rare and valuable.</p>
          <p>For Indians, the main earn path is <S>HSBC TravelOne, which transfers to Accor ALL at 2:3</S> — meaning travel spend (3 TravelOne points per ₹100) yields an effective 4.5 ALL points per ₹100, among the better hotel earn rates on any Indian card. SBI Card MILES also converts to Accor. The best redemptions are high-cash-rate properties — Sofitel and Pullman in Indian metros often yield ₹0.80-1.00+ per source TravelOne point, outperforming most economy airline transfers.</p>
          <div className="p-4 rounded-xl" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
            <p className="text-[13px] font-bold mb-1" style={{ color: 'var(--red)' }}>Important April 2026 change</p>
            <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>Axis Bank <S>removed Accor (and Marriott) as transfer partners in April 2026</S>. If you were relying on Axis EDGE → Accor, that path is gone. HSBC TravelOne is now the primary dedicated Accor card in the Indian market. Amex added Accor as a partner internationally in May 2026 — verify India availability before planning.</p>
          </div>

          <H2 id="hilton-deep">Hilton Honors: ride the transfer bonuses</H2>
          <p>Hilton points are individually low-value (~0.5¢), but the program compensates with <S>high earn rates and frequent Amex Membership Rewards transfer bonuses.</S> The base ratio is roughly 1 MR = 0.9 Hilton points, but Amex India periodically runs 50% bonus promotions — a 50% bonus ran in May 2026 — turning 1 MR into about 1.35 Hilton points.</p>
          <p>The strategy is simple: <S>accumulate Amex MR points, then transfer to Hilton only during a bonus window.</S> Combined with the Hilton Gold status that comes with the Amex Platinum Card (free breakfast, room upgrades), this makes Hilton genuinely rewarding for Amex-heavy Indian cardholders. India luxury properties like Conrad Bengaluru are strong redemption targets.</p>

          <H2 id="ihg-deep">IHG One Rewards: the 4th-night-free king</H2>
          <p>IHG's India footprint is narrower, but it has the <S>single best structural perk in hotel loyalty: the 4th-night-free benefit on award stays.</S> Book a 4-night award stay and you pay points for only 3 nights — an effective 25% discount on every long redemption. There's no cap on how often you use it.</p>
          <p>Award nights start at just 10,000 points, and IHG uses dynamic pricing (5,000-250,000 pts/night). For Indians, <S>Axis EDGE Rewards transfer to IHG</S> (ratio varies by card — around 5:2 on Magnus, better on some variants), and HDFC points can route there too. The standout India redemption is Six Senses Fort Barwara in Rajasthan, a genuine luxury property bookable on points.</p>
          <div className="p-4 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
            <p className="text-[13px]" style={{ color: 'var(--text-s)' }}><strong style={{ color: 'var(--text)' }}>Expiry watch: </strong>IHG Club member points expire after <S>12 months of inactivity</S> — shorter than most programs. Any earning or redeeming activity resets it. Keep the account active if you're accumulating toward a big redemption.</p>
          </div>

          <H2 id="which">Which program should you choose?</H2>
          <p>The honest answer for most Indians: <S>Marriott Bonvoy first, then add one of these based on your travel pattern.</S></p>
          <div className="space-y-3">
            {[
              { prog: 'Add Accor ALL if', when: 'You travel to Europe or Southeast Asia and like Sofitel/Pullman/Novotel — plus you want fixed, predictable point value with no award-chart games. Earn via HSBC TravelOne.', color: '#0891b2' },
              { prog: 'Add Hilton Honors if', when: 'You travel to the US (widest Hilton footprint) or hold Amex cards — the MR transfer bonuses and Amex Platinum Gold status make it pay off. Watch for 50% bonus windows.', color: 'var(--gold, #B8953E)' },
              { prog: 'Add IHG One Rewards if', when: 'You do Asia business travel or take long stays (4+ nights) where the 4th-night-free benefit shines. Earn via Axis EDGE transfers.', color: '#7c3aed' },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl" style={{ background: 'var(--bg-s)', border: `1px solid ${item.color}30` }}>
                <p className="text-[13px] font-bold mb-1" style={{ color: item.color }}>{item.prog}:</p>
                <p className="text-[13px]" style={{ color: 'var(--text-s)' }}>{item.when}</p>
              </div>
            ))}
          </div>
          <p>For occasional travellers (3-5 hotel stays a year), don't chase status in any program — just accumulate points opportunistically via credit card transfers and redeem when the value is good. Status chasing only pays off above roughly 20-40 nights a year in one chain.</p>

          <H2 id="bottom-line">The bottom line</H2>
          <p>Marriott Bonvoy is the right default for most Indian travellers, but it isn't the only game. <S>Accor ALL offers the highest, most predictable point value (~2¢ fixed) via HSBC TravelOne; Hilton Honors rewards Amex holders who time the transfer bonuses; and IHG One Rewards delivers a structural 25% discount through its 4th-night-free benefit.</S></p>
          <p>The key 2026 shift to remember: Axis removed Accor and Marriott as transfer partners in April, reshaping the hotel-transfer landscape and making HSBC TravelOne the go-to Accor card. Match the program to your travel geography, earn through the right card, and you'll stretch your points far beyond what a single-program strategy allows.</p>
          <p>See the full hotel strategy in our <a href="/blog/marriott-bonvoy-india-strategy-guide-2026" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>Marriott Bonvoy India guide</a>, check current transfer ratios at the <a href="/transfers" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>Transfer Partners directory</a>, and for the complete framework read <a href="/blog/how-to-redeem-credit-card-points-india-2026" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>how to redeem credit card points for maximum value</a> and <a href="/blog/points-maximisation-playbook-india-2026" style={{ color: 'var(--gold, #B8953E)', textDecoration: 'underline' }}>The Points Maximisation Playbook</a>.</p>

          <div className="p-6 rounded-2xl text-center mt-8" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <p className="text-[16px] font-semibold">Which hotel program wins for your points?</p>
            <p className="text-[13px] mt-1 mb-4" style={{ color: 'rgba(250,248,245,0.5)' }}>Compare transfer values across every Indian card and program, free.</p>
            <a href="/" className="inline-block px-6 py-2.5 rounded-xl text-[14px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Open PointsMax Calculator →</a>
          </div>

          <p className="text-[11px] mt-8 leading-relaxed" style={{ color: 'var(--text-m)' }}>
            <strong>Disclaimer:</strong> Program terms, point values, transfer ratios, and bonus promotions change frequently and without notice. Figures are typical ranges as of July 2026 based on publicly available information; Accor's value is a fixed redemption rate while others are dynamic averages. Axis transfer partner changes (April 2026) are reflected here but verify current partners before transferring. Always confirm terms on each program's official site. PointsMax is not affiliated with Accor, Hilton, IHG, or any bank. Not financial advice.
          </p>

          <FeedbackWidget pageSlug="accor-hilton-ihg-india-hotel-points-guide-2026" pageTitle="Accor, Hilton & IHG India Hotel Points Guide 2026" />
        </div>
      </article>

      <footer className="py-10 px-5" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[12px]" style={{ color: 'var(--text-m)' }}>
            <a href="/">PointsMax</a><span className="mx-2">·</span>
            <a href="/transfers">Transfers</a><span className="mx-2">·</span>
            <a href="/blog">Learn</a><span className="mx-2">·</span>
            <a href="/privacy">Privacy</a>
          </p>
        </div>
      </footer>

      {showBar && (
        <div className="hidden sm:block fixed bottom-0 left-0 right-0 z-50" style={{ background: 'var(--dark)', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '10px 16px' }}>
          <div className="max-w-2xl mx-auto flex items-center justify-between gap-3">
            <p className="text-[13px]" style={{ color: 'rgba(250,248,245,0.6)' }}>Compare <strong style={{ color: '#FAF8F5' }}>hotel program</strong> transfers</p>
            <a href="/transfers" className="shrink-0 px-4 py-2 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold, #B8953E)', color: 'var(--dark)' }}>Transfer Directory →</a>
          </div>
        </div>
      )}
    </div>
  )
}
