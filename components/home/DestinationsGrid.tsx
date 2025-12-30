import Image from "next/image";
import { Countries } from "@/lib/data";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { Section } from "@/components/ui/Section";

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

export function DestinationsGrid() {
  return (
    <Section
      title="Destinations phares"
      description="Choisissez un pays, nous préparons le devis voyage complet."
      className="py-10"
    >
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {Countries.map((country) => (
          <Card key={country} className="group overflow-hidden border-none p-0 shadow-none ring-1 ring-gray-200 transition hover:-translate-y-1 hover:ring-accent">
            <div className="relative h-44 w-full overflow-hidden">
              <Image
                src={imageMap[country]}
                alt={country}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent" aria-hidden />
              <div className="absolute inset-x-3 bottom-3 flex items-center justify-between text-white">
                <p className="text-base font-semibold text-white">{country}</p>
              </div>
            </div>
            <div className="p-4">
              <Button href={buildWhatsAppLink('Voyage', country)} className="w-full">
                Demander un devis
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
