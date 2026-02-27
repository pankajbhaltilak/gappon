'use client';

import Link from 'next/link';
import { useState } from 'react';

const menu = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Collection', href: '/collection' },
  { label: 'Wholesale', href: '/wholesale' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' }
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ebony/95 backdrop-blur">
      <div className="container-pad flex h-20 items-center justify-between">
        <Link href="/" className="text-xl font-semibold tracking-[0.2em] text-pearl">
          GAPONN TRENDS
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {menu.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
          <div className="relative" onMouseEnter={() => setMegaOpen(true)} onMouseLeave={() => setMegaOpen(false)}>
            <button className="nav-link">Categories</button>
            {megaOpen && (
              <div className="absolute right-0 top-full mt-4 grid w-[420px] grid-cols-2 gap-6 rounded-xl bg-pearl p-6 text-ebony shadow-luxe">
                <div>
                  <h4 className="font-semibold">Shirts</h4>
                  <p className="mt-2 text-sm text-black/70">Executive, solids, stripes and premium cotton edits.</p>
                </div>
                <div>
                  <h4 className="font-semibold">Trousers</h4>
                  <p className="mt-2 text-sm text-black/70">Tailored fits for retail-ready formal collections.</p>
                </div>
              </div>
            )}
          </div>
        </nav>
        <button className="text-pearl lg:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          ☰
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-ebony px-4 py-4 lg:hidden">
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
