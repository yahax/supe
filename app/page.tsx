import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { benefits, portfolioItems, proofPoints, services } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function HomePage() {
  return (
    <div className="space-y-24">
      <section className="section-shell grid gap-10 md:grid-cols-[1.2fr,0.8fr] items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
            <Sparkles className="h-4 w-4" /> Agence IA + Motion basée à Rabat
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Construisons les expériences digitales qui gagnent les marchés 2026.
          </h1>
          <p className="text-lg text-white/70 max-w-2xl">
            WINBOX assemble produit, média et IA générative pour lancer des marques, amplifier leur ROI et sécuriser l'exécution.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button>
              <Link href="/contact" className="flex items-center gap-2" aria-label="Commencer">
                Lancer un projet <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost">
              <Link href="/ai" aria-label="Voir les outils AI" className="flex items-center gap-2">
                Explorer l'IA <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid-soft">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="space-y-3">
                <div className="flex items-center gap-2 text-accent">
                  <benefit.icon className="h-5 w-5" />
                  <p className="text-sm font-semibold uppercase tracking-[0.08em] text-white/60">{benefit.title}</p>
                </div>
                <p className="text-sm text-white/70">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="soft-card overflow-hidden">
            <Image
              src="/images/home/hero.webp"
              alt="Hero"
              width={1200}
              height={900}
              className="h-full w-full rounded-3xl object-cover"
            />
            {/* TODO: Replace placeholder hero image */}
          </div>
          <div className="absolute -bottom-6 -left-6 flex gap-3 rounded-2xl bg-white/10 px-4 py-3 text-xs text-white/70 backdrop-blur">
            <span>Zero-UI</span>
            <span>Motion System</span>
            <span>AI Studio</span>
          </div>
        </div>
      </section>

      <section className="section-shell space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Preuves</h2>
          <Link href="/portfolio" className="text-sm text-accent">Voir tout</Link>
        </div>
        <div className="grid-soft">
          {proofPoints.map((item) => (
            <Card key={item.label} className="space-y-4">
              <Image src={item.image} alt={item.label} width={400} height={280} className="rounded-2xl object-cover" />
              {/* TODO: Replace placeholder proof image */}
              <div className="flex items-center justify-between">
                <p className="text-white/60">{item.label}</p>
                <p className="text-xl font-semibold">{item.value}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-shell space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Services</h2>
          <Link href="/services" className="text-sm text-accent">Voir la suite</Link>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="space-y-4">
              <Image src={service.image} alt={service.title} width={320} height={220} className="w-full rounded-2xl object-cover" />
              {/* TODO: Replace placeholder service image */}
              <div className="flex items-center gap-2 text-accent">
                <service.icon className="h-5 w-5" />
                <p className="text-sm font-semibold">{service.title}</p>
              </div>
              <p className="text-sm text-white/70">{service.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-shell space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Portfolio</h2>
          <Link href="/portfolio" className="text-sm text-accent">Découvrir</Link>
        </div>
        <div className="grid-soft">
          {portfolioItems.map((item) => (
            <Card key={item.title} className="space-y-3">
              <div className="overflow-hidden rounded-2xl">
                <Image src={item.image} alt={item.title} width={420} height={280} className="w-full rounded-2xl object-cover transition hover:scale-105" />
                {/* TODO: Replace placeholder portfolio image */}
              </div>
              <div className="flex items-center justify-between">
                <p className="font-semibold">{item.title}</p>
                <span className="text-xs text-white/60">{item.tag}</span>
              </div>
            </Card>
          ))}
        </div>
        <div className="flex justify-center">
          <Button>
            <Link href="/contact" className="flex items-center gap-2" aria-label="Lancer un brief">
              Bookez un créneau <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
