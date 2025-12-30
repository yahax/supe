import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function FinalCTA() {
  const whatsappLink = buildWhatsAppLink('Devis clair');
  return (
    <Section className="py-14">
      <div className="glow-card flex flex-col items-start gap-6 bg-base px-6 py-8 text-white md:flex-row md:items-center md:justify-between md:px-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold">Prêt pour un devis clair ?</h2>
          <p className="text-sm text-white/80">Réponse rapide • Conseil gratuit • Devis clair</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href={whatsappLink} variant="primary" className="bg-accent text-ink">
            WhatsApp
          </Button>
          <Button href="tel:0537674233" variant="ghost" className="bg-white text-ink">
            Appeler
          </Button>
        </div>
      </div>
    </Section>
  );
}
