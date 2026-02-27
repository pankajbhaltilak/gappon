import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wholesale',
  description: 'Become a Gaponn Trends dealer and unlock premium B2B formal wear benefits.'
};

export default function WholesalePage() {
  return (
    <div className="container-pad py-24">
      <p className="kicker">Wholesale network</p>
      <h1 className="section-title mt-4 text-[#f4f1eb]">Become a Gaponn Trends Dealer</h1>
      <p className="mt-5 max-w-2xl text-white/65">Join our B2B ecosystem with premium product quality, disciplined supply and growth support for your market.</p>
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div className="glass-panel p-8">
          <h2 className="font-serif text-3xl text-white" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Business Benefits</h2>
          <ul className="mt-5 list-disc space-y-3 pl-5 text-white/70">
            <li>Assured stock planning and on-time delivery commitments</li>
            <li>Retail-friendly margins with premium quality positioning</li>
            <li>Visual merchandising and dealer support assistance</li>
          </ul>
          <a href="https://wa.me/919999999999" className="mt-8 inline-block rounded-full bg-[#1a6b3d] px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white">Chat on WhatsApp</a>
        </div>
        <form className="glass-panel p-8">
          <h2 className="font-serif text-3xl text-white" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Retailer Enquiry</h2>
          <div className="mt-6 space-y-4">
            <input className="w-full rounded-lg border border-white/15 bg-black/20 px-4 py-3 text-white placeholder:text-white/45" placeholder="Business Name" />
            <input className="w-full rounded-lg border border-white/15 bg-black/20 px-4 py-3 text-white placeholder:text-white/45" placeholder="Contact Person" />
            <input className="w-full rounded-lg border border-white/15 bg-black/20 px-4 py-3 text-white placeholder:text-white/45" placeholder="Phone" />
            <textarea className="h-28 w-full rounded-lg border border-white/15 bg-black/20 px-4 py-3 text-white placeholder:text-white/45" placeholder="Tell us your requirement" />
          </div>
          <button className="mt-6 rounded-full border border-[#c2b7a2] bg-[#c2b7a2]/20 px-6 py-3 text-xs uppercase tracking-[0.18em] text-[#f4f1eb]">Submit Enquiry</button>
        </form>
      </div>
    </div>
  );
}
