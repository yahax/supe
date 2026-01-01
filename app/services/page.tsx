import Image from "next/image";
import { services } from "@/lib/data";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="section-shell space-y-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.2em] text-white/50">Services</p>
          <h1 className="text-3xl font-bold">Un stack complet pour lancer et scaler.</h1>
          <p className="max-w-2xl text-white/70">
            Chaque offre est pilotée par un lead, des modèles IA propriétaires et un workflow motion-first pour garder du rythme.
          </p>
        </div>
        <Button>
          <Link href="/contact" className="flex items-center gap-2" aria-label="Planifier un workshop">
            Planifier un workshop
          </Link>
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <Card key={service.title} className="flex flex-col gap-4 md:flex-row">
            <Image src={service.image} alt={service.title} width={360} height={240} className="h-40 w-full rounded-2xl object-cover md:w-48" />
            {/* TODO: Replace placeholder service image */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-accent">
                <service.icon className="h-5 w-5" />
                <p className="text-sm font-semibold">{service.title}</p>
              </div>
              <p className="text-sm text-white/70">{service.description}</p>
              <div className="flex gap-2 text-xs text-white/60">
                <span className="rounded-full bg-white/5 px-3 py-1">Audit</span>
                <span className="rounded-full bg-white/5 px-3 py-1">Design</span>
                <span className="rounded-full bg-white/5 px-3 py-1">Run</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
