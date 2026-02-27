import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Gaponn Trends for wholesale formal wear enquiries.'
};

export default function ContactPage() {
  return (
    <div className="container-pad py-24">
      <p className="kicker">Connect with us</p>
      <h1 className="section-title mt-4 text-[#f4f1eb]">Start Your Wholesale Conversation</h1>
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <form className="glass-panel p-8">
          <h2 className="font-serif text-3xl text-white" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Enquiry Form</h2>
          <div className="mt-6 space-y-4">
            <input className="w-full rounded-lg border border-white/15 bg-black/20 px-4 py-3 text-white placeholder:text-white/45" placeholder="Name" />
            <input className="w-full rounded-lg border border-white/15 bg-black/20 px-4 py-3 text-white placeholder:text-white/45" placeholder="Email" type="email" />
            <input className="w-full rounded-lg border border-white/15 bg-black/20 px-4 py-3 text-white placeholder:text-white/45" placeholder="Phone" />
            <textarea className="h-28 w-full rounded-lg border border-white/15 bg-black/20 px-4 py-3 text-white placeholder:text-white/45" placeholder="Message" />
          </div>
          <button className="mt-6 rounded-full border border-[#c2b7a2] bg-[#c2b7a2]/20 px-6 py-3 text-xs uppercase tracking-[0.18em] text-[#f4f1eb]">Send Message</button>
        </form>
        <div className="glass-panel space-y-5 p-8 text-[#ece9e2]">
          <h2 className="font-serif text-3xl" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Reach Us</h2>
          <p>Phone: +91 99999 99999</p>
          <p>Email: hello@gaponntrends.com</p>
          <a href="https://wa.me/919999999999" className="inline-block rounded-full bg-[#1a6b3d] px-6 py-3 text-xs uppercase tracking-[0.18em] text-white">WhatsApp</a>
          <iframe
            title="Gaponn Trends Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609873877!2d72.74109898660874!3d19.082197838687373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63a6dbd8f49%3A0xa9f4ebfcb5f43d52!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1713526873000!5m2!1sen!2sin"
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
