import Link from 'next/link';

const footerLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-lg font-semibold text-white">WINBOX</div>
          <p className="text-sm text-gray-400 mt-2">Premium digital experiences engineered for growth.</p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm text-gray-300">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
        <p className="text-xs text-gray-500">© {new Date().getFullYear()} WINBOX. Crafted in Casablanca.</p>
      </div>
    </footer>
  );
}
