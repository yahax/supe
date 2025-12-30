'use client';

import Image from "next/image";
import { useState } from "react";
import { VisaCountries } from "@/lib/data";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const imageMap: Record<string, string> = {
  "Saudi Arabia": "/visas/saudi-arabia.webp",
  "United Arab Emirates": "/visas/united-arab-emirates.webp",
  "Egypt": "/visas/egypt.webp",
  "Qatar": "/visas/qatar.webp",
  "Oman": "/visas/oman.webp",
  "Jordan": "/visas/jordan.webp",
  "China": "/visas/china.webp"
};

const flightCards = [
  { title: 'Billets d’avion', desc: 'Aller-retour, multi-destinations, options flexibles.' },
  { title: 'Changements & suivi', desc: 'Rebooking et assistance active pendant le voyage.' },
  { title: 'Assistance bagages', desc: 'Conseil et support en cas d’imprévu.' }
];

const hotelCards = [
  { title: 'Hôtels premium', desc: 'Sélection raffinée selon votre style de séjour.' },
  { title: 'Resorts & farniente', desc: 'Pour des vacances reposantes en bord de mer.' },
  { title: 'City breaks', desc: 'Adresses centrales pour visiter facilement.' }
];

export function VisaTabs() {
  const [tab, setTab] = useState<'visas' | 'vols' | 'hotels'>('visas');

  return (
    <div className="space-y-6">
      <div className="inline-flex rounded-2xl border border-gray-200 bg-white p-1 shadow-card">
        {[
          { key: 'visas', label: 'Visas' },
          { key: 'vols', label: 'Vols' },
          { key: 'hotels', label: 'Hôtels' }
        ].map((item) => (
          <button
            key={item.key}
            onClick={() => setTab(item.key as typeof tab)}
            className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${tab === item.key ? 'bg-accent text-ink shadow-soft' : 'text-gray-700'}`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {tab === 'visas' && (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {VisaCountries.map((country) => (
            <Card key={country} className="overflow-hidden p-0 shadow-none ring-1 ring-gray-200 transition hover:-translate-y-1 hover:ring-accent">
              <div className="relative h-40 w-full">
                <Image
                  src={imageMap[country]}
                  alt={country}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent" aria-hidden />
                <p className="absolute bottom-3 left-3 text-base font-semibold text-white">{country}</p>
              </div>
              <div className="p-4">
                <Button href={buildWhatsAppLink('Visa', country)} className="w-full">Demander un visa</Button>
              </div>
            </Card>
          ))}
        </div>
      )}

      {tab === 'vols' && (
        <div className="grid gap-4 md:grid-cols-3">
          {flightCards.map((item) => (
            <Card key={item.title} className="p-5">
              <p className="text-lg font-semibold text-ink">{item.title}</p>
              <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
              <Button href={buildWhatsAppLink('Vols')} className="mt-4 w-full">WhatsApp billets</Button>
            </Card>
          ))}
        </div>
      )}

      {tab === 'hotels' && (
        <div className="grid gap-4 md:grid-cols-3">
          {hotelCards.map((item) => (
            <Card key={item.title} className="p-5">
              <p className="text-lg font-semibold text-ink">{item.title}</p>
              <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
              <Button href={buildWhatsAppLink('Hôtels')} className="mt-4 w-full">WhatsApp hôtels</Button>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
