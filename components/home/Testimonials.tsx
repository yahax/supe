import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { Star } from "lucide-react";

const testimonials = [
  { name: 'Samir', text: 'Visa obtenu en quelques jours, suivi impeccable sur WhatsApp.', service: 'Visa' },
  { name: 'Lina', text: 'Ils ont géré billets + hôtel à Dubaï sans stress, budget respecté.', service: 'Voyage Dubai' },
  { name: 'Yassine', text: 'Omra organisée avec soin, hôtels proches et transferts fluides.', service: 'Omra' }
];

export function Testimonials() {
  return (
    <Section title="Ils nous font confiance" description="Des voyageurs servis avec rigueur et écoute." className="py-10">
      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.map((item) => (
          <Card key={item.name} className="space-y-3 p-5">
            <div className="flex items-center gap-1 text-accent" aria-hidden>
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-sm text-gray-700">“{item.text}”</p>
            <div className="text-sm font-semibold text-ink">{item.name}</div>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">{item.service}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
