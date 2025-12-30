import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const highlights = [
  { country: 'Turkey', image: '/destinations/turkey.webp' },
  { country: 'Dubai', image: '/destinations/dubai.webp' },
  { country: 'Malaysia', image: '/destinations/malaysia.webp' }
];

export function FeaturedHighlights() {
  return (
    <Section
      title="Sélections premium"
      description="Des itinéraires raffinés, construits avec vous. Sur devis."
      className="py-10"
    >
      <div className="grid gap-4 md:grid-cols-3">
        {highlights.map((item) => (
          <Card key={item.country} className="overflow-hidden p-0 shadow-none ring-1 ring-gray-200">
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.country}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent" aria-hidden />
              <div className="absolute inset-x-4 bottom-4 text-white">
                <p className="text-lg font-semibold">{item.country}</p>
                <p className="text-sm text-white/80">Sur devis</p>
              </div>
            </div>
            <div className="p-4">
              <Button href={buildWhatsAppLink('Voyage', item.country)} className="w-full">
                Demander un devis
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
