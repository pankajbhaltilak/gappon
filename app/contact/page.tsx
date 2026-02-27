import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Gaponn Textile Industry for formalwear manufacturing, material consultation and dealership enquiries.'
};

export default function ContactPage() {
  return (
    <div className="container-pad py-24">
      <p className="kicker">Contact Gaponn</p>
      <h1 className="section-title mt-4 text-[#f4f1eb]">Let’s Discuss Your Requirement</h1>
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <form className="glass-panel p-8">
          <h2 className="font-serif text-3xl text-white" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Send Enquiry</h2>
          <div className="mt-6 space-y-4">
            <input className="w-full rounded-lg border border-white/15 bg-black/20 px-4 py-3 text-white placeholder:text-white/45" placeholder="Name" />
            <input className="w-full rounded-lg border border-white/15 bg-black/20 px-4 py-3 text-white placeholder:text-white/45" placeholder="Email" type="email" />
            <input className="w-full rounded-lg border border-white/15 bg-black/20 px-4 py-3 text-white placeholder:text-white/45" placeholder="Phone" />
            <textarea className="h-28 w-full rounded-lg border border-white/15 bg-black/20 px-4 py-3 text-white placeholder:text-white/45" placeholder="Message" />
          </div>
          <button className="mt-6 rounded-full border border-[#c2b7a2] bg-[#c2b7a2]/20 px-6 py-3 text-xs uppercase tracking-[0.18em] text-[#f4f1eb]">Submit</button>
        </form>
        <div className="glass-panel space-y-5 p-8 text-[#ece9e2]">
          <h2 className="font-serif text-3xl" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Contact Details</h2>
          <p>Phone: +91 9186010998</p>
          <p>Email: Info@gaponn.com</p>
          <p>Location: Pune, Maharashtra – 411046</p>
          <p className="text-white/75">Shop No.10, Gat No.1131, Jubilation Heights, 1st Floor, Awhalwadi Road, Wagholi (Awhalwadi), Pune 412207</p>
          <a href="https://wa.me/919186010998" className="inline-block rounded-full bg-[#1a6b3d] px-6 py-3 text-xs uppercase tracking-[0.18em] text-white">WhatsApp</a>
          <iframe
            title="Gaponn Textile Industry Location"
            src="https://www.google.com/maps?q=Wagholi%20Pune&output=embed"
            width="100%"
            height="260"
            loading="lazy"
            className="rounded-xl border-0"
          />
        </div>
      </div>
    </div>
  );
}
