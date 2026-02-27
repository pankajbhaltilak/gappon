import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Gaponn Trends for wholesale formal wear enquiries.'
};

export default function ContactPage() {
  return (
    <div className="container-pad py-24">
      <p className="kicker">Contact Gaponn</p>
      <h1 className="section-title mt-4 text-[#f4f1eb]">Let&apos;s Discuss Your Requirement</h1>
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <form className="glass-panel p-8">
          <h2 className="font-serif text-3xl text-white">
            Send Enquiry
          </h2>
          <div className="mt-6 space-y-4">
            <input className="w-full rounded-lg border border-white/15 bg-black/20 px-4 py-3 text-white placeholder:text-white/45" placeholder="Name" />
            <input className="w-full rounded-lg border border-white/15 bg-black/20 px-4 py-3 text-white placeholder:text-white/45" placeholder="Email" type="email" />
            <textarea className="h-28 w-full rounded-lg border border-white/15 bg-black/20 px-4 py-3 text-white placeholder:text-white/45" placeholder="Message" />
          </div>
          <button type="button" className="mt-6 rounded-full border border-[#c2b7a2] bg-[#c2b7a2]/20 px-6 py-3 text-xs uppercase tracking-[0.18em] text-[#f4f1eb]">
            Submit
          </button>
        </form>
        <div className="glass-panel space-y-4 p-8 text-[#ece9e2]">
          <h2 className="font-serif text-3xl">
            Contact Details
          </h2>
          <p>Phone: +91 9186010998</p>
          <p>Email: info@gaponn.com</p>
          <p>Pune, Maharashtra</p>
        </div>
      </div>
    </div>
  );
}
