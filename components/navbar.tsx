import Link from 'next/link';

const links = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/collection', 'Collection'],
  ['/product', 'Products'],
  ['/services', 'Services'],
  ['/gallery', 'Gallery'],
  ['/wholesale', 'Wholesale'],
  ['/contact', 'Contact']
] as const;

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <nav className="container-pad flex h-20 items-center justify-between">
        <Link href="/" className="font-serif text-2xl text-[#f4f1eb]">
          Gaponn Trends
        </Link>
        <div className="hidden gap-6 lg:flex">
          {links.map(([href, label]) => (
            <Link key={href} href={href} className="nav-link">
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
