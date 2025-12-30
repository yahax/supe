'use client';

import Image from "next/image";
import { useMemo, useState } from "react";
import { Countries } from "@/lib/data";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const imageMap: Record<string, string> = {
  "Turkey": "/destinations/turkey.webp",
  "Egypt": "/destinations/egypt.webp",
  "Dubai": "/destinations/dubai.webp",
  "Saudi Arabia": "/destinations/saudi-arabia.webp",
  "Malaysia": "/destinations/malaysia.webp",
  "Thailand": "/destinations/thailand.webp",
  "India": "/destinations/india.webp",
  "Vietnam": "/destinations/vietnam.webp",
  "China": "/destinations/china.webp",
  "Indonesia": "/destinations/indonesia.webp",
  "Jordan": "/destinations/jordan.webp"
};

export function DestinationsExplorer() {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => Countries.filter((country) => country.toLowerCase().includes(query.toLowerCase())), [query]);

  return (
    <div className="space-y-6">
      <div className="w-full">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher un pays"
          className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-ink focus:ring-2 focus:ring-accent"
          aria-label="Rechercher une destination"
        />
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {filtered.map((country) => (
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
              <Button href={buildWhatsAppLink('Voyage', country)} className="w-full">Demander un devis</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
