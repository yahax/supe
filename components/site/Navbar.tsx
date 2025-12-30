'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, Mail, MapPin, X } from "lucide-react";
import { useState } from "react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/destinations", label: "Destinations" },
  { href: "/visas", label: "Visas/Vols/Hôtels" },
  { href: "/omra-hajj", label: "Omra & Hajj" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => pathname === href;
  const whatsappLink = buildWhatsAppLink('Accompagnement');

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="hidden border-b border-gray-100 bg-[#F7F8FB] text-sm text-gray-700 md:block">
        <div className="container-px mx-auto flex max-w-7xl items-center justify-between py-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-gray-700"><Phone className="h-4 w-4" /> <a href="tel:0537674233" className="hover:text-ink">05376-74233</a></div>
            <div className="flex items-center gap-2 text-gray-700"><Mail className="h-4 w-4" /> <a href="mailto:contact@favorivoyages.com" className="hover:text-ink">contact@favorivoyages.com</a></div>
          </div>
          <a className="flex items-center gap-2 text-gray-700 hover:text-ink" href="https://share.google/dkFc02TBAVKUBA5Bs" target="_blank" rel="noreferrer">
            <MapPin className="h-4 w-4" /> Adresse
          </a>
        </div>
      </div>
      <div className="container-px mx-auto flex max-w-7xl items-center justify-between py-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-semibold tracking-tight text-ink">FavoriVoyages</Link>
          <nav className="hidden items-center gap-6 text-sm font-medium text-gray-700 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative pb-2 transition hover:text-ink",
                  isActive(link.href) && "text-ink"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute left-0 -bottom-1 h-0.5 w-full scale-x-0 bg-accent transition", 
                    isActive(link.href) && "scale-x-100"
                  )}
                  aria-hidden
                />
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href={whatsappLink}
            className="hidden rounded-2xl bg-accent px-4 py-2 text-sm font-semibold text-ink shadow-soft transition hover:-translate-y-0.5 hover:shadow-card md:inline-flex"
          >
            WhatsApp
          </Link>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-gray-200 text-ink md:hidden"
            onClick={() => setOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-gray-100 bg-white md:hidden">
          <nav className="container-px mx-auto flex flex-col gap-2 py-4 text-base font-semibold text-ink">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl px-3 py-2 hover:bg-gray-50"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={whatsappLink}
              className="mt-2 inline-flex items-center justify-center rounded-2xl bg-accent px-4 py-3 text-sm font-semibold text-ink shadow-soft"
              onClick={() => setOpen(false)}
            >
              WhatsApp
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
