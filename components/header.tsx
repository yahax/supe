'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CTAButton from './cta-button';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-charcoal/70 backdrop-blur border-b border-white/5">
      <div className="section-shell flex items-center justify-between py-4">
        <Link href="/" className="font-semibold tracking-tight text-lg">WINBOX.MA</Link>
        <nav className="hidden md:flex items-center gap-6 text-sm uppercase tracking-wide text-white/70">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`pb-1 border-b border-transparent hover:text-white transition ${pathname === item.href ? 'text-white border-white/60' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <CTAButton href="/contact" label="Get a Quote" />
        </div>
      </div>
    </header>
  );
}
