'use client';

import Link from 'next/link';
import { useState } from 'react';

const menu = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Product', href: '/product' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' }
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/65 backdrop-blur-2xl">
      <div className="container-pad flex h-20 items-center justify-between">
        <Link href="/" className="font-serif text-xl tracking-[0.3em] text-[#ece9e2]" style={{ fontFamily: 'var(--font-cormorant), serif' }}>
          GAPONN
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {menu.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
          <div className="relative" onMouseEnter={() => setMegaOpen(true)} onMouseLeave={() => setMegaOpen(false)}>
            <button className="nav-link">Collections</button>
            {megaOpen && (
              <div className="absolute right-0 top-full mt-4 grid w-[460px] grid-cols-2 gap-6 rounded-2xl border border-white/10 bg-[#111113] p-7 text-[#ece9e2] shadow-2xl">
                <div>
                  <h4 className="font-serif text-xl" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Shirt Collection</h4>
                  <p className="mt-2 text-sm text-white/65">Imported premium fabrics and precision cuts for formal business wardrobes.</p>
                </div>
                <div>
                  <h4 className="font-serif text-xl" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Trouser Collection</h4>
                  <p className="mt-2 text-sm text-white/65">Structured tailoring built for comfort, confidence and retail demand.</p>
                </div>
              </div>
            )}
          </div>
        </nav>
        <button className="text-2xl text-[#ece9e2] lg:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          ☰
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-[#101012] px-5 py-5 lg:hidden">
          <div className="flex flex-col gap-4">
            {menu.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
