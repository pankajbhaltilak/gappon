import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wholesale',
  description: 'Become a Gaponn Trends dealer and unlock premium B2B formal wear benefits.'
};

export default function WholesalePage() {
  return (
    <div className="container-pad py-20">
      <h1 className="section-title">Become a Dealer</h1>
      <p className="mt-4 max-w-2xl text-black/70">Join our wholesale network with reliable supply, premium quality, and growth-focused business support.</p>
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl bg-ebony p-8 text-pearl">
          <h2 className="text-2xl font-semibold">Business Benefits</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-white/80">
            <li>Assured stock planning and timely delivery</li>
            <li>Retail-friendly price structure</li>
            <li>Marketing and merchandising support</li>
          </ul>
          <a href="https://wa.me/919999999999" className="mt-8 inline-block rounded-full bg-green-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em]">Chat on WhatsApp</a>
        </div>
        <form className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">Retailer Enquiry</h2>
          <div className="mt-5 space-y-4">
            <input className="w-full rounded-lg border border-black/15 px-4 py-3" placeholder="Business Name" />
            <input className="w-full rounded-lg border border-black/15 px-4 py-3" placeholder="Contact Person" />
            <input className="w-full rounded-lg border border-black/15 px-4 py-3" placeholder="Phone" />
            <textarea className="h-28 w-full rounded-lg border border-black/15 px-4 py-3" placeholder="Tell us your requirement" />
          </div>
          <button className="mt-6 rounded-full bg-ebony px-6 py-3 text-sm uppercase tracking-[0.15em] text-pearl">Submit Enquiry</button>
        </form>
      </div>
    </div>
  );
}
