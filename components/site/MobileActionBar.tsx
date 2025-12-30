'use client';

import { buildWhatsAppLink } from "@/lib/whatsapp";
import { Phone } from "lucide-react";
import Link from "next/link";

export function MobileActionBar() {
  const whatsappLink = buildWhatsAppLink('Devis rapide');
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white/95 backdrop-blur md:hidden">
      <div className="container-px mx-auto flex max-w-7xl items-center gap-3 py-3">
        <Link
          href={whatsappLink}
          className="flex-1 rounded-2xl bg-accent px-4 py-3 text-center text-sm font-semibold text-ink shadow-soft"
        >
          Devis WhatsApp
        </Link>
        <a
          href="tel:0537674233"
          className="flex items-center justify-center rounded-2xl border border-gray-200 px-4 py-3 text-sm font-semibold text-ink"
        >
          <Phone className="mr-2 h-4 w-4" /> Appeler
        </a>
      </div>
    </div>
  );
}
