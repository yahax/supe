import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function Hero() {
  const whatsappLink = buildWhatsAppLink('Voyage sur mesure');
  return (
    <section className="container-px relative mx-auto flex max-w-7xl flex-col gap-10 pb-12 pt-10 md:flex-row md:items-center md:justify-between">
      <div className="space-y-6 md:w-1/2">
        <div className="inline-flex items-center gap-3 rounded-full bg-[#F5F7FB] px-4 py-2 text-xs font-medium text-gray-700">
          <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
          Visa • Vols • Hôtels • Omra & Hajj
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl">Votre voyage, organisé avec précision.</h1>
          <p className="max-w-xl text-lg text-gray-600 sm:text-xl">FavoriVoyages orchestre vos visas, billets d’avion, hôtels et séjours spirituels avec une équipe qui répond vite sur WhatsApp.</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button href={whatsappLink} className="w-full sm:w-auto" icon>
            Devis WhatsApp en 2 min
          </Button>
          <Button href="/destinations" variant="ghost" className="w-full sm:w-auto">
            Voir Destinations
          </Button>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-700">
          {['Visa', 'Vols', 'Hôtels', 'Omra & Hajj'].map((item) => (
            <Badge key={item} className="bg-white shadow-card">{item}</Badge>
          ))}
        </div>
        <p className="text-sm font-medium text-gray-600">Réponse rapide • Accompagnement • Paiement clair</p>
      </div>
      <div className="relative md:w-5/12">
        <div className="glow-card gradient-border overflow-hidden">
          <div className="relative h-[360px] overflow-hidden rounded-3xl">
            <Image
              src="/destinations/turkey.webp"
              alt="Voyage premium FavoriVoyages"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10" aria-hidden />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/90 p-4 backdrop-blur">
              <p className="text-sm font-semibold text-ink">On s’occupe de tout.</p>
              <p className="text-sm text-gray-700">Visa, billets, hôtels, transferts — un seul contact WhatsApp.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
