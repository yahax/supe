import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function Footer() {
  const whatsappLink = buildWhatsAppLink('Assistance');
  return (
    <footer className="mt-16 border-t border-gray-100 bg-[#F9FAFB] py-10">
      <div className="container-px mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="space-y-4">
          <p className="text-xl font-semibold text-ink">FavoriVoyages</p>
          <p className="max-w-md text-sm text-gray-600">Agence premium pour vos visas, billets d’avion, hôtels, et séjours spirituels Omra & Hajj. Réponse rapide et devis clair.</p>
          <Link href={whatsappLink} className="inline-flex items-center gap-2 text-ink hover:text-accent">
            WhatsApp direct <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-6 text-sm text-gray-700 md:grid-cols-3">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">Navigation</p>
            <div className="flex flex-col gap-2">
              <Link className="hover:text-accent" href="/">Accueil</Link>
              <Link className="hover:text-accent" href="/destinations">Destinations</Link>
              <Link className="hover:text-accent" href="/visas">Visas / Vols / Hôtels</Link>
              <Link className="hover:text-accent" href="/omra-hajj">Omra & Hajj</Link>
              <Link className="hover:text-accent" href="/contact">Contact</Link>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">Contact</p>
            <div className="flex flex-col gap-2">
              <a className="flex items-center gap-2 hover:text-accent" href="tel:0537674233"><Phone className="h-4 w-4" /> 05376-74233</a>
              <a className="flex items-center gap-2 hover:text-accent" href="mailto:contact@favorivoyages.com"><Mail className="h-4 w-4" /> contact@favorivoyages.com</a>
              <a className="flex items-center gap-2 hover:text-accent" href="https://share.google/dkFc02TBAVKUBA5Bs" target="_blank" rel="noreferrer">
                <MapPin className="h-4 w-4" /> Adresse agence
              </a>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">Suivi</p>
            <p className="text-gray-600">Réponse rapide • Conseil gratuit • Devis personnalisé.</p>
            <Link href={whatsappLink} className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-ink shadow-soft transition hover:-translate-y-0.5 hover:shadow-card">
              Devis WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
