'use client'
import PageNav from '@/components/PageNav'

export default function About() {
  return (
    <div className="min-h-screen">
      <PageNav />
      <div className="max-w-2xl mx-auto px-5 py-10">

        <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '32px', color: 'var(--text)', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
          About PointsMax
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed" style={{ color: 'var(--text-s)' }}>
          The free, independent tool that shows Indian credit card holders what their reward points are actually worth — in rupees, not marketing promises.
        </p>

        <div className="mt-10 space-y-8 text-[15px] leading-[1.85]" style={{ color: 'var(--text-s)' }}>

          <section>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '20px', color: 'var(--text)', marginBottom: '12px' }}>Why we built this</h2>
            <p>India's credit card reward points system is deliberately confusing. The same 10,000 HDFC Infinia points are worth ₹10,000 on SmartBuy or ₹2,000 in the product catalogue. That's a 5x difference — and banks don't make it easy to figure out which option is best.</p>
            <p className="mt-3">Between January and April 2026, every major Indian bank devalued their reward programs. Axis removed Marriott Bonvoy, Accor, and Qatar Airways as transfer partners overnight. HDFC cut Turkish Airlines transfer ratios. SBI capped monthly cashback. Most cardholders found out when they tried to redeem points that were worth far less than expected.</p>
            <p className="mt-3">PointsMax exists to fix this information gap. We track the current value of reward points across 25+ Indian credit cards — covering every redemption method, every airline and hotel transfer partner, and every post-devaluation change — and present it in one clear, honest tool.</p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '20px', color: 'var(--text)', marginBottom: '12px' }}>What PointsMax covers</h2>
            <div className="space-y-3">
              {[
                { title: 'Points value calculator', desc: 'Select your card, enter your points balance, and see every redemption option ranked by ₹ value — SmartBuy, vouchers, statement credit, airline transfers, hotel transfers, and product catalogue.' },
                { title: 'Transfer partner directory', desc: 'Every airline and hotel loyalty program linked to Indian credit cards, with current conversion ratios, alliance tags, and devaluation warnings. Covers HDFC Infinia, Diners Club Black, Axis Magnus, Axis Atlas, Amex Platinum, Amex Gold, and ICICI Emeralde.' },
                { title: 'Devaluation tracker', desc: 'The only documented timeline of every Indian credit card reward cut since 2023 — with dates, affected cards, and plain-English impact assessments. Updated monthly.' },
                { title: 'Card quiz', desc: 'Answer 5 questions about your spending patterns and get personalised card recommendations with match scores — without being pushed toward affiliate-linked products.' },
                { title: 'Fee breakeven calculator', desc: 'Enter your annual spend and see whether your card\'s annual fee is justified at current reward rates.' },
                { title: 'Expiry reminder', desc: 'Set an email reminder before your reward points expire — covering HDFC, Axis, SBI, ICICI, Singapore Airlines KrisFlyer, British Airways Avios, and Air India Flying Returns.' },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                  <p className="text-[14px] font-semibold mb-1" style={{ color: 'var(--text)' }}>{item.title}</p>
                  <p className="text-[13px]">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '20px', color: 'var(--text)', marginBottom: '12px' }}>Our editorial independence</h2>
            <p>PointsMax does not earn affiliate commissions from credit card applications. We do not accept payment from banks or card issuers to influence our rankings, recommendations, or data. Our card reviews, comparison guides, and recommendations are based solely on publicly available data from bank websites and reward program T&Cs.</p>
            <p className="mt-3">This matters because most credit card comparison sites in India earn a commission every time you apply for a card through their link. That creates an incentive to recommend whatever pays the highest CPA — not whatever is genuinely best for your spending pattern. PointsMax has no such incentive.</p>
            <p className="mt-3">We earn revenue through Google AdSense display advertising only. The ads are selected by Google and have no influence on our content.</p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '20px', color: 'var(--text)', marginBottom: '12px' }}>Data accuracy and updates</h2>
            <p>All reward rates, redemption values, transfer ratios, and partner availability are sourced from official bank websites, program T&Cs, and verified community reports. We update our data within 24-48 hours of any confirmed bank announcement.</p>
            <p className="mt-3">Our devaluation tracker and transfer partner directory are reviewed monthly. Card reviews are updated when material changes occur — fee changes, earn rate adjustments, partner additions or removals.</p>
            <p className="mt-3">If you notice incorrect data, <a href="/contact" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>contact us</a> and we'll verify and correct within 24 hours.</p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '20px', color: 'var(--text)', marginBottom: '12px' }}>Cards and banks we cover</h2>
            <p>PointsMax currently covers reward programs from the following banks: HDFC Bank, Axis Bank, SBI Card, ICICI Bank, American Express, IndusInd Bank, IDFC FIRST Bank, Kotak Mahindra Bank, Federal Bank, AU Small Finance Bank, Yes Bank, HSBC India, RBL Bank, and Equitas Small Finance Bank.</p>
            <p className="mt-3">Airline programs covered: Singapore Airlines KrisFlyer, British Airways Avios, Air India Flying Returns / Maharaja Club, Emirates Skywards, Japan Airlines Mileage Bank, Air Canada Aeroplan, Air France-KLM Flying Blue, Finnair Plus, Vietnam Airlines Lotusmiles.</p>
            <p className="mt-3">Hotel programs covered: Marriott Bonvoy, IHG One Rewards, Accor Live Limitless, ITC Hotels Club ITC, Hilton Honors.</p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '20px', color: 'var(--text)', marginBottom: '12px' }}>Get in touch</h2>
            <p>Found an error? Want a card added? Have feedback on the tool? We read every message.</p>
            <div className="mt-4">
              <a href="/contact" className="inline-block px-5 py-2.5 rounded-xl text-[14px] font-semibold" style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
                Contact us →
              </a>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}
