'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

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
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-[100] border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <nav className="container-pad flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="max-w-[70%] truncate font-serif text-xl text-[#f4f1eb] sm:text-2xl" onClick={() => setIsOpen(false)}>
          Gaponn Trends
        </Link>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-white lg:hidden"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          )}
        </button>

        <div className="hidden gap-5 xl:gap-6 lg:flex">
          {links.map(([href, label]) => (
            <Link key={href} href={href} className="nav-link">
              {label}
            </Link>
          ))}
        </div>
      </nav>

      {isOpen ? (
        <div className="border-t border-white/10 bg-black/95 lg:hidden">
          <div className="container-pad flex max-h-[calc(100vh-4rem)] flex-col overflow-y-auto py-4 md:max-h-[calc(100vh-5rem)]">
            {links.map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="rounded-md px-2 py-3 text-sm uppercase tracking-[0.16em] text-white/90 transition hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
