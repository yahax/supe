import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/lib/data";

const contact = {
  name: "WINBOX — Agence digitale premium",
  location: "Rabat, Maroc",
  email: "contact@winbox.ma",
  phone: "+212 6 69 69 49 45",
  site: "https://winbox.ma",
};

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="section-shell grid gap-10 md:grid-cols-[1.4fr,1fr]">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Image src="/images/brand/logo.webp" alt="WINBOX" width={54} height={54} className="rounded-xl" />
            <div>
              <p className="text-sm font-semibold">{contact.name}</p>
              <p className="text-xs text-white/60">{contact.location}</p>
            </div>
          </div>
          <p className="text-white/60">
            Nous orchestrons des expériences digitales, des campagnes média et des assistants IA qui livrent du ROI mesurable.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-white/70">
            <a href={`mailto:${contact.email}`} className="button-ghost">{contact.email}</a>
            <a href={`tel:${contact.phone}`} className="button-ghost">{contact.phone}</a>
            <a href={contact.site} className="button-ghost">winbox.ma</a>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold text-white/70">Navigation</p>
            <div className="flex flex-col gap-2 text-sm text-white/60">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-foreground">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold text-white/70">Contact</p>
            <p className="text-sm text-white/60">Email : {contact.email}</p>
            <p className="text-sm text-white/60">Tel : {contact.phone}</p>
            <p className="text-sm text-white/60">Adresse : {contact.location}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © 2026 WINBOX. Crafted with IA & Motion.
      </div>
    </footer>
  );
}
