import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#08080a] py-16 text-[#ece9e2]">
      <div className="container-pad grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="font-serif text-2xl tracking-[0.2em]" style={{ fontFamily: 'var(--font-cormorant), serif' }}>
            GAPONN TRENDS
          </h3>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
            Premium mens formal wear manufacturing partner for retailers and distributors who value precision, consistency and brand elevation.
          </p>
        </div>
        <div>
          <h4 className="kicker">Navigate</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li><Link href="/about">About Brand</Link></li>
            <li><Link href="/collection">Collection</Link></li>
            <li><Link href="/wholesale">Become Dealer</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="kicker">Contact</h4>
          <p className="mt-4 text-sm text-white/80">+91 99999 99999</p>
          <p className="mt-1 text-sm text-white/80">hello@gaponntrends.com</p>
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/50">Mumbai · India</p>
        </div>
      </div>
    </footer>
  );
}
