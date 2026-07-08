'use client'

import FeedbackWidget from '@/components/FeedbackWidget'
import PageNav from '@/components/PageNav'

import { useState, useEffect } from 'react'

const blogJsonLd = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'How to Transfer Credit Card Points to Airline Miles in India 2026',
  datePublished: '2026-05-20', dateModified: '2026-05-20',
  author: { '@type': 'Organization', name: 'PointsMax' },
  publisher: { '@type': 'Organization', name: 'PointsMax', url: 'https://www.pointsmax.in' },
  mainEntityOfPage: 'https://www.pointsmax.in/blog/credit-card-airline-miles-transfer-india-2026',
}

const faqJsonLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Which Indian credit cards can transfer points to airline miles?', acceptedAnswer: { '@type': 'Answer', text: 'HDFC Infinia, HDFC Diners Club Black, HDFC Regalia Gold, Axis Magnus, Axis Atlas, Amex Platinum, and Amex Gold support transfers to airline frequent flyer programs. HDFC Infinia has the most partners at 22 programs with the best ratios.' }},
    { '@type': 'Question', name: 'What is the best airline transfer from an Indian credit card?', acceptedAnswer: { '@type': 'Answer', text: 'HDFC Infinia to Singapore Airlines KrisFlyer at 1:1 ratio is the best transfer in India. Each point converts to 1 KrisFlyer mile worth roughly 2-4 cents for business class, giving you up to ₹3 per credit card point — 3x the SmartBuy value on the right redemption.' }},
    { '@type': 'Question', name: 'Should I transfer credit card points to airline miles or use the travel portal?', acceptedAnswer: { '@type': 'Answer', text: 'For economy flights, the travel portal almost always wins. Transfer to airline miles only for business or first class award bookings where the cash price is 3-10x what you pay in miles. A Delhi-Singapore business class ticket costs ₹80,000+ in cash but only 45,000 KrisFlyer miles.' }},
  ],
}

export default function BlogPost() {
  const [showBar, setShowBar] = useState(false)
  useEffect(() => {
    const fn = () => setShowBar(window.scrollY > 600)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageNav />
      <article className="max-w-2xl mx-auto px-5 py-12">
        <div className="flex items-center gap-2 mb-8 text-[13px]" style={{ color: 'var(--text-m)' }}>
          <a href="/" className="hover:text-black/50 transition-colors">PointsMax</a><span>/</span>
          <a href="/blog" className="hover:text-black/50 transition-colors">Blog</a><span>/</span>
          <span style={{ color: 'var(--text-s)' }}>Airline Transfers</span>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded" style={{ color: '#0891b2', background: 'rgba(8,145,178,0.06)' }}>Strategy</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>May 20, 2026</span>
          <span className="text-[12px]" style={{ color: 'var(--text-m)' }}>11 min read</span>
        </div>

        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 'clamp(24px, 4vw, 36px)', lineHeight: 1.15, letterSpacing: '-0.025em', color: 'var(--text)' }}>
          How to Turn Credit Card Points Into Business Class Flights (The Indian Transfer Guide)
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
          Your HDFC or Axis points can buy you a flat-bed seat to Singapore. But only if you transfer to the right airline, at the right ratio, for the right booking. Here's the full playbook.
        </p>

        <div className="mt-10 space-y-6 text-[15px] leading-[1.85]" style={{ color: 'var(--text-s)' }}>

          <p>A Delhi-to-Singapore business class ticket on Singapore Airlines costs around ₹85,000 if you pay cash. Or you could transfer 45,000 HDFC Infinia reward points to KrisFlyer and book the same seat for essentially ₹0 in cash (plus about ₹3,500 in taxes).</p>
          <p>That's ₹85,000 of value from points that would've gotten you ₹9,000 in the product catalogue. That is not a typo. The same 45,000 points can be worth <strong style={{ color: 'var(--green)' }}>₹85,000</strong> or <strong style={{ color: 'var(--red)' }}>₹9,000</strong> depending on which button you click.</p>
          <p>This is the promise of airline mile transfers — and also the trap. Because not every transfer is a good deal, not every airline program is created equal, and after the April 2026 devaluations, the landscape has shifted dramatically.</p>

          <h2 className="pt-4" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', letterSpacing: '-0.01em' }}>
            Which Indian credit cards can transfer to airlines?
          </h2>
          <p><strong style={{ color: 'var(--text)' }}>Only 7 cards in India support airline transfers</strong> — all of them premium. Here's the complete list:</p>

          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-[13px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead><tr>
                <th className="text-left py-3 px-3 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Card</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Partners</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Best ratio</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Fee</th>
              </tr></thead>
              <tbody>
                {[
                  ['HDFC Infinia', '22', '1:1', '₹12,500'],
                  ['HDFC Diners Black', '22', '1:1', '₹10,000'],
                  ['HDFC Regalia Gold', '6', '2:1', '₹2,500'],
                  ['Axis Magnus', '8*', '1:1', '₹12,500'],
                  ['Axis Atlas', '8*', '1:1', '₹5,000'],
                  ['Amex Platinum', '10+', '1:1', '₹60,000'],
                  ['Amex Gold', '8+', '1:1', '₹9,000'],
                ].map(([c, p, r, f], i) => (
                  <tr key={i}>
                    <td className="py-2.5 px-3 font-medium" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{c}</td>
                    <td className="py-2.5 px-2 text-center font-mono" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>{p}</td>
                    <td className="py-2.5 px-2 text-center font-mono font-bold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>{r}</td>
                    <td className="py-2.5 px-2 text-center" style={{ color: 'var(--text-m)', borderBottom: '1px solid var(--border)' }}>{f}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-[11px] mt-2" style={{ color: 'var(--text-m)' }}>*Axis reduced from 14 to 8 partners after removing Marriott, Accor, and Qatar in April 2026.</p>
          </div>

          <p>Notice that SBI, ICICI (except Emeralde via InterMiles), IDFC FIRST, IndusInd, Kotak, and Federal Bank cards do <em>not</em> support airline transfers. If you're on any of these, your best bet is the bank's travel portal or vouchers.</p>

          <h2 className="pt-6" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', letterSpacing: '-0.01em' }}>
            The 5 best airline transfers from Indian credit cards
          </h2>
          <p>Not all transfers are created equal. These five consistently deliver the highest value per point:</p>

          <div className="space-y-3 mt-2">
            {[
              { rank: '1', name: 'Singapore Airlines KrisFlyer', card: 'HDFC Infinia / Diners Black', ratio: '1:1', why: 'No fuel surcharges on SQ flights. Business class DEL-SIN costs 45,000 miles (worth ₹85,000+). The gold standard of Indian credit card transfers. Miles last 3 years.', color: 'var(--green)' },
              { rank: '2', name: 'Finnair Plus (Avios)', card: 'HDFC Infinia / Diners Black', ratio: '1:1', why: 'Avios currency — use on British Airways, Qatar Airways, and Oneworld partners. Free 1:1 transfer between BA, Qatar, Finnair, Iberia accounts. Unlocks Qsuite business class.', color: 'var(--green)' },
              { rank: '3', name: 'British Airways Avios', card: 'Amex Platinum / Gold', ratio: '1:1', why: 'Same Avios currency as Finnair. Best for short-haul redemptions under 4,500 miles. DEL-BOM in business for 13,000 Avios is a steal. Also unlocks Qatar Qsuite via free Avios transfer.', color: 'var(--green)' },
              { rank: '4', name: 'Air India Flying Returns', card: 'HDFC / Axis', ratio: '1:1 to 2:1', why: 'Useful for domestic flights and some international routes. Star Alliance member. Availability is decent on AI-operated flights. Post-Tata merger, the program is improving.', color: 'var(--gold)' },
              { rank: '5', name: 'Emirates Skywards', card: 'HDFC Infinia', ratio: '1:1', why: 'Premium cabin product is outstanding. But high fuel surcharges eat into value. Best for first class redemptions where the cash price is ₹3-5 lakh.', color: 'var(--gold)' },
            ].map((t, i) => (
              <div key={i} className="p-4 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <div className="flex items-start gap-3">
                  <span className="text-[18px] font-mono font-bold shrink-0 w-8 h-8 grid place-items-center rounded-lg" style={{ color: t.color, background: t.color === 'var(--green)' ? 'rgba(45,106,79,0.08)' : 'rgba(184,149,62,0.08)' }}>
                    {t.rank}
                  </span>
                  <div>
                    <p className="text-[15px] font-semibold" style={{ color: 'var(--text)' }}>{t.name}</p>
                    <p className="text-[12px] mt-0.5" style={{ color: 'var(--text-m)' }}>{t.card} · {t.ratio} ratio</p>
                    <p className="text-[13px] mt-2 leading-relaxed" style={{ color: 'var(--text-s)' }}>{t.why}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="pt-6" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', letterSpacing: '-0.01em' }}>
            When should you transfer vs use the travel portal?
          </h2>
          <p><strong style={{ color: 'var(--text)' }}>Simple rule: transfer for premium cabins, portal for economy.</strong></p>
          <p>Here's why the math works this way:</p>

          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-[13px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead><tr>
                <th className="text-left py-3 px-3 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Route</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Cash price</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Miles needed</th>
                <th className="text-center py-3 px-2 font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>₹/mile</th>
              </tr></thead>
              <tbody>
                {[
                  ['DEL→SIN Economy', '₹18,000', '22,000 KF', '₹0.82'],
                  ['DEL→SIN Business', '₹85,000', '45,000 KF', '₹1.89'],
                  ['DEL→LHR Economy', '₹45,000', '35,000 Avios', '₹1.29'],
                  ['DEL→LHR Business (BA)', '₹2,50,000', '60,000 Avios', '₹4.17'],
                  ['DEL→DOH Business (Qatar)', '₹1,80,000', '70,000 Avios', '₹2.57'],
                  ['BOM→DEL Economy', '₹5,500', '13,000 Avios', '₹0.42'],
                  ['BOM→DEL Business (AI)', '₹15,000', '20,000 FR', '₹0.75'],
                ].map(([route, cash, miles, val], i) => (
                  <tr key={i}>
                    <td className="py-2.5 px-3 font-medium" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{route}</td>
                    <td className="py-2.5 px-2 text-center font-mono" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>{cash}</td>
                    <td className="py-2.5 px-2 text-center font-mono" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>{miles}</td>
                    <td className="py-2.5 px-2 text-center font-mono font-bold" style={{ color: parseFloat(val.replace('₹','')) >= 1.5 ? 'var(--green)' : 'var(--text-m)', borderBottom: '1px solid var(--border)' }}>{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-[11px] mt-2" style={{ color: 'var(--text-m)' }}>KF = KrisFlyer. FR = Flying Returns. Values are approximate based on May 2026 pricing. Green values indicate transfers worth more than SmartBuy's ₹1/pt.</p>
          </div>

          <p>See the pattern? Economy redemptions give you ₹0.40-1.30 per mile — often less than just using SmartBuy at ₹1/point. But business class gives you ₹1.90-4.17 per mile. That's where transfers destroy every other redemption method.</p>
          <p><strong style={{ color: 'var(--text)' }}>The rule:</strong> If the value per mile exceeds ₹1.50, transfer. Below that, book through SmartBuy or the bank's travel portal instead.</p>

          {/* Mid-article CTA */}
          <div className="p-5 rounded-xl my-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <div>
              <p className="text-[14px] font-semibold">See all transfer partners for your card</p>
              <p className="text-[12px] mt-1" style={{ color: 'rgba(250,248,245,0.5)' }}>Ratios, alliances, devaluation warnings — all in one place.</p>
            </div>
            <a href="/transfers" className="shrink-0 px-5 py-2.5 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>
              View Transfers →
            </a>
          </div>

          <h2 className="pt-4" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', letterSpacing: '-0.01em' }}>
            The Avios hack most Indians don't know about
          </h2>
          <p>British Airways, Qatar Airways, Finnair, Iberia, and Aer Lingus all use the same currency — Avios. And you can transfer Avios between these programs for free, instantly, at a 1:1 ratio. You just need a (free) account in each program registered under the same name.</p>
          <p>Why this matters:</p>
          <ul className="space-y-2 pl-1" style={{ listStyleType: 'none' }}>
            <li className="flex gap-2"><span style={{ color: 'var(--green)' }}>→</span><span><strong style={{ color: 'var(--text)' }}>HDFC Infinia → Finnair Plus (1:1) → British Airways (1:1) → Qatar Airways (1:1).</strong> You've just gotten access to Qatar's Qsuite through a Finnair transfer, which HDFC doesn't offer directly.</span></li>
            <li className="flex gap-2"><span style={{ color: 'var(--green)' }}>→</span><span>Search for the same route on multiple Avios programs. Qatar might have business class availability when BA doesn't — and the same Avios work on both.</span></li>
            <li className="flex gap-2"><span style={{ color: 'var(--green)' }}>→</span><span>Pool Avios from different credit cards. Amex → BA Avios + HDFC → Finnair Avios → combine in one BA account for a big redemption.</span></li>
          </ul>
          <p>This single hack makes Finnair Plus the most underrated transfer partner from HDFC cards. Most people transfer to KrisFlyer (which is excellent) but miss the Avios ecosystem entirely.</p>

          <h2 className="pt-6" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', letterSpacing: '-0.01em' }}>
            Transfers to avoid in 2026
          </h2>

          <div className="space-y-3">
            <div className="p-4 rounded-xl" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
              <p className="text-[13px] font-bold mb-1" style={{ color: 'var(--red)' }}>✕ Turkish Airlines Miles&amp;Smiles (HDFC)</p>
              <p className="text-[13px] leading-relaxed" style={{ color: 'var(--text-s)' }}>Ratio changed from 1:1 to 2:1 in January 2026. You now need twice the points for the same miles. Unless you have a specific Star Alliance sweet spot that only Turkish unlocks, KrisFlyer is strictly better at 1:1.</p>
            </div>
            <div className="p-4 rounded-xl" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
              <p className="text-[13px] font-bold mb-1" style={{ color: 'var(--red)' }}>✕ Avianca LifeMiles (HDFC)</p>
              <p className="text-[13px] leading-relaxed" style={{ color: 'var(--text-s)' }}>Also devalued from 1:1 to 2:1. LifeMiles had some niche sweet spots for Star Alliance redemptions, but at 2:1 the math rarely works when KrisFlyer is available at 1:1.</p>
            </div>
            <div className="p-4 rounded-xl" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
              <p className="text-[13px] font-bold mb-1" style={{ color: 'var(--red)' }}>✕ Any Axis transfer to Marriott/Accor/Qatar</p>
              <p className="text-[13px] leading-relaxed" style={{ color: 'var(--text-s)' }}>These partnerships were terminated in April 2026. They no longer exist. If you see old blog posts recommending these, they're outdated.</p>
            </div>
            <div className="p-4 rounded-xl" style={{ background: '#FDF1EF', border: '1px solid #E8C5BF' }}>
              <p className="text-[13px] font-bold mb-1" style={{ color: 'var(--red)' }}>✕ Speculative transfers ("I'll use them someday")</p>
              <p className="text-[13px] leading-relaxed" style={{ color: 'var(--text-s)' }}>Never transfer without a specific booking in mind. Transfers are irreversible. Programs devalue without warning. Your flexible credit card points are always more valuable than locked-in airline miles until you're ready to book.</p>
            </div>
          </div>

          <h2 className="pt-6" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', letterSpacing: '-0.01em' }}>
            Step-by-step: how to transfer HDFC points to KrisFlyer
          </h2>
          <p>Since this is the most popular transfer, here's exactly how it works:</p>

          <div className="space-y-3 mt-2">
            {[
              ['Create a KrisFlyer account', 'Go to singaporeair.com → join KrisFlyer (free). Note your membership number.'],
              ['Log into HDFC NetBanking or SmartBuy', 'Go to Cards → Reward Points → Redeem → Airline Transfer Partners.'],
              ['Select Singapore Airlines KrisFlyer', 'Enter your KrisFlyer membership number and the number of points to transfer.'],
              ['Confirm the transfer', 'HDFC transfers at 1:1 ratio. 10,000 reward points = 10,000 KrisFlyer miles.'],
              ['Wait 3-5 business days', 'Miles appear in your KrisFlyer account. Processing is not instant.'],
              ['Book your award flight', 'Log into KrisFlyer → Book with Miles. Search for "Saver" awards for the best rates.'],
            ].map(([step, detail], i) => (
              <div key={i} className="flex gap-3">
                <span className="text-[16px] font-mono font-bold shrink-0 w-7 h-7 grid place-items-center rounded-lg" style={{ color: 'var(--gold)', background: 'rgba(184,149,62,0.08)' }}>{i + 1}</span>
                <div>
                  <p className="text-[14px] font-semibold" style={{ color: 'var(--text)' }}>{step}</p>
                  <p className="text-[13px] mt-0.5" style={{ color: 'var(--text-s)' }}>{detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl mt-4" style={{ background: '#ECFEFF', border: '1px solid #CFFAFE' }}>
            <p className="text-[13px] leading-relaxed" style={{ color: '#155E75' }}><strong>Pro tip:</strong> KrisFlyer miles expire 3 years from the date they're credited. Each transfer batch has its own expiry. Plan your transfers close to when you'll book — don't transfer 6 months in advance and risk expiry.</p>
          </div>

          <h2 className="pt-6" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--text)', letterSpacing: '-0.01em' }}>
            The bottom line on airline transfers
          </h2>
          <p>Airline mile transfers are the most powerful tool in any Indian credit card holder's arsenal — but only in very specific situations. Use them for business class international flights where the cash price is ₹80,000+. Avoid them for economy flights, domestic routes, and speculative hoarding.</p>
          <p>The three golden transfers from India in 2026: HDFC → KrisFlyer (1:1), HDFC → Finnair/Avios (1:1 + free cross-program transfer), and Amex → British Airways (1:1). Everything else is either devalued, niche, or worse than the travel portal.</p>
          <p>To see all transfer partners available for your specific card with current ratios, check the <a href="/transfers" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>Transfer Partners directory</a> or run your points through the <a href="/" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>PointsMax calculator</a>. Transferring to airline miles is just one redemption path — see how it compares to every other option in our guide on <a href="/blog/how-to-redeem-credit-card-points-india-2026" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>how to redeem credit card points for maximum value</a>.</p>

          {/* Bottom CTA */}
          <div className="p-6 rounded-2xl text-center mt-8" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            <p className="text-[16px] font-semibold">See every transfer partner for your card</p>
            <p className="text-[13px] mt-1 mb-4" style={{ color: 'rgba(250,248,245,0.5)' }}>Ratios, alliances, and devaluation flags — updated for 2026.</p>
            <a href="/transfers" className="inline-block px-6 py-2.5 rounded-xl text-[14px] font-semibold" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>Open Transfer Directory →</a>
          </div>

          <p className="text-[11px] mt-8 leading-relaxed" style={{ color: 'var(--text-m)' }}>
            <strong>Disclaimer:</strong> Transfer ratios, award pricing, and partner availability change frequently. Cash prices are approximate based on May 2026 searches. Always verify current rates before transferring. Transfers are irreversible. PointsMax is not affiliated with any airline or bank.
          </p>
        </div>
                <FeedbackWidget pageSlug="credit-card-airline-miles-transfer-india-2026" pageTitle="credit-card-airline-miles-transfer-india-2026" />
        </article>

      <footer className="py-10 px-5" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[12px]" style={{ color: 'var(--text-m)' }}>
            <a href="/" className="hover:text-black/40 transition-colors">PointsMax</a><span className="mx-2">·</span>
            <a href="/about" className="hover:text-black/40 transition-colors">About</a><span className="mx-2">·</span>
            <a href="/blog" className="hover:text-black/40 transition-colors">Blog</a><span className="mx-2">·</span>
            <a href="/transfers" className="hover:text-black/40 transition-colors">Transfers</a><span className="mx-2">·</span>
            <a href="/contact" className="hover:text-black/40 transition-colors">Contact</a><span className="mx-2">·</span>
            <a href="/privacy" className="hover:text-black/40 transition-colors">Privacy</a><span className="mx-2">·</span>
            <a href="/terms" className="hover:text-black/40 transition-colors">Terms</a>
          </p>
        </div>
      </footer>

      {showBar && (
        <div className="fixed bottom-0 left-0 right-0 z-50" style={{ background: 'var(--dark)', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '10px 16px' }}>
          <div className="max-w-2xl mx-auto flex items-center justify-between gap-3">
            <p className="text-[13px] hidden sm:block" style={{ color: 'rgba(250,248,245,0.6)' }}>See your card's <strong style={{ color: '#FAF8F5' }}>transfer partners</strong></p>
            <p className="text-[13px] sm:hidden" style={{ color: 'rgba(250,248,245,0.6)' }}>Check transfer partners</p>
            <a href="/transfers" className="shrink-0 px-4 py-2 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>View Transfers →</a>
          </div>
        </div>
      )}
    </div>
  )
}
