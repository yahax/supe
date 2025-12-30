import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function OmraTeaser() {
  return (
    <Section
      title="Omra & Hajj, organisés avec sérénité"
      description="Hébergement proche des lieux saints, guides attentifs, logistique cadrée."
      className="py-10"
    >
      <div className="glow-card flex flex-col overflow-hidden border-none p-0 shadow-soft md:flex-row">
        <div className="relative h-64 w-full md:h-auto md:w-1/2">
          <Image
            src="/destinations/saudi-arabia.webp"
            alt="Omra & Hajj"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent" aria-hidden />
          <div className="absolute bottom-4 left-4 text-white">
            <p className="text-lg font-semibold">Logistique maîtrisée</p>
            <p className="text-sm text-white/80">Hôtels, transferts, accompagnement.</p>
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">Spécial Omra & Hajj</p>
            <p className="text-lg text-gray-600">Des départs sécurisés, des guides disponibles, un budget cadré. Faites votre devis WhatsApp.</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/omra-hajj">Découvrir Omra & Hajj</Button>
            <Button href={buildWhatsAppLink('Omra & Hajj')} variant="ghost">WhatsApp direct</Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
