import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Omra & Hajj",
  description: "Omra & Hajj organisés avec sérénité : hôtels, transferts, accompagnement sur mesure."
};

const packages = [
  { title: 'Confort serein', points: ['Hôtels proches', 'Transferts coordonnés', 'Guide dédié'] },
  { title: 'Famille tranquille', points: ['Chambres adaptées', 'Assistance enfants', 'Support 24/7'] },
  { title: 'Premium luxe', points: ['Suites sélectionnées', 'Accueil prioritaire', 'Conciergerie'] }
];

const faqs = [
  { q: 'Comment se passe la demande ?', a: 'Nous collectons vos informations par WhatsApp et partageons un devis clair avant validation.' },
  { q: 'Quels hôtels ?', a: 'Des établissements proches des lieux saints, sélectionnés pour le confort et la proximité.' },
  { q: 'Gestion des vols ?', a: 'Nous optimisons les vols et assurons assistance en cas de changement.' },
  { q: 'Paiement ?', a: 'Paiement clair et sécurisé, sans frais cachés.' }
];

export default function OmraHajjPage() {
  const whatsappLink = buildWhatsAppLink('Omra & Hajj');
  return (
    <div className="space-y-8 py-10">
      <Section
        title="Omra & Hajj, organisés avec sérénité."
        description="Une équipe disponible, des hôtels proches, une logistique maîtrisée."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {packages.map((item) => (
            <Card key={item.title} className="p-6">
              <p className="text-lg font-semibold text-ink">{item.title}</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                {item.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
              <Button href={whatsappLink} className="mt-5 w-full">Sur devis WhatsApp</Button>
            </Card>
          ))}
        </div>
        <div className="mt-8 space-y-3">
          <p className="text-lg font-semibold text-ink">FAQ rapide</p>
          <div className="space-y-2">
            {faqs.map((item) => (
              <details key={item.q} className="overflow-hidden rounded-2xl border border-gray-200 bg-white p-4">
                <summary className="cursor-pointer text-sm font-semibold text-ink">{item.q}</summary>
                <p className="mt-2 text-sm text-gray-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-3 pt-6">
          <Button href={whatsappLink}>WhatsApp</Button>
          <Button href="tel:0537674233" variant="ghost">Appeler</Button>
        </div>
      </Section>
    </div>
  );
}
