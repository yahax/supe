import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez FavoriVoyages : WhatsApp, téléphone, email ou adresse de l’agence."
};

const contacts = [
  { title: 'WhatsApp', icon: MessageSquare, href: buildWhatsAppLink('Contact'), desc: 'Réponse rapide pour vos demandes.' },
  { title: 'Téléphone', icon: Phone, href: 'tel:0537674233', desc: '05376-74233' },
  { title: 'Email', icon: Mail, href: 'mailto:contact@favorivoyages.com', desc: 'contact@favorivoyages.com' },
  { title: 'Adresse', icon: MapPin, href: 'https://share.google/dkFc02TBAVKUBA5Bs', desc: 'Voir sur Google Maps' }
];

export default function ContactPage() {
  const whatsappLink = buildWhatsAppLink('Contact');
  return (
    <div className="space-y-8 py-10">
      <Section title="Contact FavoriVoyages" description="Parlez-nous de votre projet, nous répondons vite.">
        <div className="grid gap-4 md:grid-cols-2">
          {contacts.map((item) => (
            <Card key={item.title} className="flex items-center gap-4 p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5F7FB] text-ink">
                <item.icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="text-lg font-semibold text-ink">{item.title}</p>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
              <Button href={item.href} variant="ghost" className="whitespace-nowrap">Ouvrir</Button>
            </Card>
          ))}
        </div>
        <div className="rounded-3xl bg-[#F7F8FB] p-6">
          <p className="text-lg font-semibold text-ink">Horaires</p>
          <p className="mt-2 text-sm text-gray-600">Lundi - Samedi : 9h - 19h • Dimanche sur rendez-vous.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href={whatsappLink}>WhatsApp</Button>
          <Button href="tel:0537674233" variant="ghost">Appeler</Button>
        </div>
      </Section>
    </div>
  );
}
