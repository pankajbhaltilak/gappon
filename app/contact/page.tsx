import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Gaponn Trends for wholesale formal wear enquiries.'
};

export default function ContactPage() {
  return (
    <div className="container-pad py-20">
      <h1 className="section-title">Contact Us</h1>
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <form className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">Enquiry Form</h2>
          <div className="mt-5 space-y-4">
            <input className="w-full rounded-lg border border-black/15 px-4 py-3" placeholder="Name" />
            <input className="w-full rounded-lg border border-black/15 px-4 py-3" placeholder="Email" type="email" />
            <input className="w-full rounded-lg border border-black/15 px-4 py-3" placeholder="Phone" />
            <textarea className="h-28 w-full rounded-lg border border-black/15 px-4 py-3" placeholder="Message" />
          </div>
          <button className="mt-6 rounded-full bg-ebony px-6 py-3 text-sm uppercase tracking-[0.15em] text-pearl">Send Message</button>
        </form>
        <div className="space-y-5 rounded-2xl bg-ebony p-8 text-pearl">
          <h2 className="text-2xl font-semibold">Reach Us</h2>
          <p>Phone: +91 99999 99999</p>
          <p>Email: hello@gaponntrends.com</p>
          <a href="https://wa.me/919999999999" className="inline-block rounded-full bg-green-500 px-6 py-3 text-sm uppercase tracking-[0.15em]">WhatsApp</a>
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
