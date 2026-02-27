import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#08080a] py-16 text-[#ece9e2]">
      <div className="container-pad grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="font-serif text-2xl tracking-[0.2em]" style={{ fontFamily: 'var(--font-cormorant), serif' }}>
            GAPONN TEXTILE INDUSTRY
          </h3>
          <p className="mt-3 text-sm text-white/70">Gaponn Trends LLP</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">You Can Never Go Wrong With Our Quality.</p>
        </div>
        <div>
          <h4 className="kicker">Quick Links</h4>
          <ul className="mt-4 grid grid-cols-2 gap-y-3 text-sm text-white/80">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/product">Product</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/services">Services</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="kicker">Contact Info</h4>
          <p className="mt-4 text-sm text-white/80">Phone: +91 9186010998</p>
          <p className="mt-1 text-sm text-white/80">Email: info@gaponn.com</p>
          <p className="mt-1 text-sm text-white/80">Website: www.gaponn.com</p>
          <p className="mt-2 text-sm text-white/70">Pune, Maharashtra – 411046</p>
          <div className="mt-4 flex gap-4 text-xs uppercase tracking-[0.18em] text-[#c2b7a2]">
            <a href="#" aria-label="Facebook">Facebook</a>
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
