export const metadata = {
  title: 'About',
  description: 'About PointsMax — the credit card reward points optimizer for India.',
}

export default function About() {
  return (
    <div className="min-h-screen bg-[#060608]">
      <div className="max-w-2xl mx-auto px-5 py-16">
        <a href="/" className="text-[13px] font-medium mb-8 inline-block" style={{ color: 'rgba(255,255,255,0.3)' }}>← Back to PointsMax</a>
        <h1 style={{ fontFamily: 'Bricolage Grotesque, sans-serif', fontWeight: 700, fontSize: '28px', color: '#e2e8f0', letterSpacing: '-0.02em' }}>About PointsMax</h1>

        <div className="mt-8 space-y-5 text-[14px] leading-[1.8]" style={{ color: 'rgba(255,255,255,0.5)' }}>
          <p>
            PointsMax is a free tool that helps Indian credit card holders find the best way to redeem their reward points. We track over 25 credit cards across HDFC, Axis, SBI, ICICI, Amex, IndusInd, IDFC FIRST, Kotak, and Federal Bank — covering every redemption method, airline transfer partner, and hotel loyalty program.
          </p>
          <p>
            The idea came from a simple frustration: credit card reward points in India are confusing. The same 10,000 points could be worth ₹10,000 or ₹2,000 depending on how you use them. Banks don't make this easy to figure out. We built PointsMax to give you instant clarity on the real rupee value of your points.
          </p>

          <h2 className="text-[16px] font-semibold pt-4" style={{ color: 'rgba(255,255,255,0.8)' }}>What Makes Us Different</h2>
          <p>
            Unlike generic "credit card comparison" sites, PointsMax focuses exclusively on maximizing the value of points you already have. We track post-2026 devaluation data — the wave of changes from January–April 2026 where Axis removed Marriott, HDFC changed Turkish Airlines ratios, and SBI capped cashback. Our data is current.
          </p>
          <p>
            We also show airline and hotel transfer partners with exact conversion ratios, alliance tags, and devaluation warnings — something no other Indian tool does.
          </p>

          <h2 className="text-[16px] font-semibold pt-4" style={{ color: 'rgba(255,255,255,0.8)' }}>Independence</h2>
          <p>
            PointsMax is not affiliated with, endorsed by, or sponsored by any bank, credit card issuer, or financial institution. Our recommendations are based purely on publicly available data. We generate revenue through Google AdSense advertisements, not affiliate commissions from banks.
          </p>

          <h2 className="text-[16px] font-semibold pt-4" style={{ color: 'rgba(255,255,255,0.8)' }}>Disclaimer</h2>
          <p>
            PointsMax is an informational tool, not a financial advisory service. Redemption values, transfer ratios, and partner availability change frequently. Always verify current rates on your bank's official portal before making redemption decisions. We do our best to keep data accurate but cannot guarantee it at all times.
          </p>
        </div>
      </div>
    </div>
  )
}
