import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Phone, MapPin, ShieldCheck, Clock3 } from "lucide-react";

const proof = [
  { title: 'Agence physique', desc: 'Une équipe disponible, pas de plateforme anonyme.', icon: MapPin },
  { title: 'Réponse rapide sur WhatsApp', desc: 'Vos questions trouvent une réponse en quelques minutes.', icon: Clock3 },
  { title: 'Accompagnement de A à Z', desc: 'Du visa aux transferts, un seul interlocuteur.', icon: ShieldCheck },
  { title: 'Offres claires, sans surprise', desc: 'Des devis transparents, paiements sécurisés.', icon: Phone }
];

export function TrustProof() {
  return (
    <Section
      title="Une agence qui rassure"
      description="FavoriVoyages c’est un contact humain, une réactivité premium et des engagements écrits."
      className="py-10"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {proof.map((item) => (
          <Card key={item.title} className="flex items-start gap-3 p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5F7FB] text-ink">
              <item.icon className="h-5 w-5" />
            </div>
            <div className="space-y-2">
              <p className="text-lg font-semibold text-ink">{item.title}</p>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          </Card>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-3 pt-4">
        <Button href="tel:0537674233" variant="ghost">
          <Phone className="mr-2 h-4 w-4" /> 05376-74233
        </Button>
        <Button href="https://share.google/dkFc02TBAVKUBA5Bs" variant="ghost">
          <MapPin className="mr-2 h-4 w-4" /> Adresse agence
        </Button>
      </div>
    </Section>
  );
}
