import Link from 'next/link';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy', href: '/legal/privacy' },
  { label: 'Terms', href: '/legal/terms' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate/40">
      <div className="section-shell py-12 grid gap-8 md:grid-cols-3 text-sm text-white/70">
        <div>
          <p className="font-semibold text-white">WINBOX.MA</p>
          <p className="mt-3 text-sm leading-relaxed text-white/60">
            Premium Digital Growth Studio building sharp experiences and performance systems for world-leading teams.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white transition">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="space-y-2">
          <p className="text-white">contact@winbox.ma</p>
          <p className="text-white/80">WhatsApp: +212 6 69 69 49 45</p>
          <p className="text-white/60">Global • GMT+1</p>
        </div>
      </div>
    </footer>
  );
}
