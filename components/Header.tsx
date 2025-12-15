import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();

  const isActive = useMemo(
    () => (href: string) => (href === '/' ? pathname === '/' : pathname?.startsWith(href)),
    [pathname]
  );

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="/" className="text-lg font-semibold tracking-tight text-white">
          WINBOX<span className="text-neonBlue">.</span>
        </Link>
        <nav className="hidden md:flex items-center gap-4 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-3 py-2 rounded-2xl transition-colors duration-200 hover:text-white hover:bg-white/5 ${
                isActive(item.href) ? 'text-white bg-white/10' : 'text-gray-300'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="https://wa.me/212676877273"
          className="text-sm font-semibold px-4 py-2 rounded-2xl bg-gradient-to-r from-neonBlue to-electricPurple text-black shadow-glow-blue shadow-lg transition-transform duration-200 hover:-translate-y-0.5"
        >
          WhatsApp
        </Link>
      </div>
    </header>
  );
}
"use client";
