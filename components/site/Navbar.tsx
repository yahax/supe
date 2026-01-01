import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/lib/data";
import { LogIn, Sparkles } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="section-shell flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/brand/logo.webp" alt="WINBOX logo" width={42} height={42} className="rounded-lg" />
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/60">WINBOX</p>
            <p className="text-sm font-semibold text-foreground">Agence IA Premium</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-white/70 hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            aria-label="Se connecter"
            className="button-ghost rounded-full px-4 py-2 text-sm font-semibold"
          >
            <span className="flex items-center gap-2">
              <LogIn className="h-4 w-4" /> Login
            </span>
          </Link>
          <Link
            href="/contact"
            aria-label="Parler avec l'équipe"
            className="button-primary rounded-full px-5 py-3 text-sm font-semibold"
          >
            <span className="flex items-center gap-2">
              <Sparkles className="h-4 w-4" /> Parler avec nous
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
