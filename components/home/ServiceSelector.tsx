import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { Plane, ShieldCheck, Hotel, Sparkles } from "lucide-react";
import { Section } from "@/components/ui/Section";

const services = [
  {
    title: 'Visa',
    description: 'Dossiers préparés, suivi et validation sans stress.',
    icon: ShieldCheck,
    service: 'Visa rapide'
  },
  {
    title: 'Vols',
    description: 'Billets optimisés, changements et assistance.',
    icon: Plane,
    service: 'Vols'
  },
  {
    title: 'Hôtels',
    description: 'Sélection premium, city breaks ou resorts.',
    icon: Hotel,
    service: 'Hôtels'
  },
  {
    title: 'Omra & Hajj',
    description: 'Accompagnement serein pour vos séjours spirituels.',
    icon: Sparkles,
    service: 'Omra & Hajj'
  }
];

export function ServiceSelector() {
  return (
    <Section
      title="Choisissez votre service"
      description="Chaque demande passe par WhatsApp pour un devis rapide et précis."
      className="py-8"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {services.map((item) => (
          <Card key={item.title} className="group flex h-full flex-col justify-between p-5 transition hover:-translate-y-1 hover:shadow-soft">
            <div className="space-y-3">
              <div className="inline-flex items-center rounded-full bg-[#F5F7FB] px-3 py-2 text-sm font-semibold text-ink">
                <item.icon className="mr-2 h-4 w-4" /> {item.title}
              </div>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
            <Button href={buildWhatsAppLink(item.service)} className="mt-6 w-full">
              Demander sur WhatsApp
            </Button>
          </Card>
        ))}
      </div>
    </Section>
  );
}
