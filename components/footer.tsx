import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-ebony py-12 text-pearl">
      <div className="container-pad grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold tracking-[0.16em]">GAPONN TRENDS</h3>
          <p className="mt-3 text-sm text-white/70">Premium mens formal wear manufacturer and wholesale partner for modern retail businesses.</p>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-stone">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/collection">Collection</Link></li>
            <li><Link href="/wholesale">Become Dealer</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-stone">Contact</h4>
          <p className="mt-3 text-sm text-white/80">+91 99999 99999</p>
          <p className="text-sm text-white/80">hello@gaponntrends.com</p>
        </div>
      </div>
    </footer>
  );
}
