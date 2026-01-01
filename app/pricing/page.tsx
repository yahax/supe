import { faqs, pricing } from "@/lib/data";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function PricingPage() {
  return (
    <div className="section-shell space-y-12">
      <div className="space-y-3 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-white/50">Pricing</p>
        <h1 className="text-3xl font-bold">Des packs calibrés pour le ROI.</h1>
        <p className="text-white/70">Comparez les fonctionnalités et choisissez l'énergie qui correspond à votre ambition.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {pricing.map((tier) => (
          <Card key={tier.name} className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold">{tier.name}</p>
              <span className="rounded-full bg-accent/20 px-3 py-1 text-xs text-accent">2026-ready</span>
            </div>
            <p className="text-4xl font-bold">{tier.price}€</p>
            <p className="text-sm text-white/70">{tier.description}</p>
            <div className="space-y-2 text-sm text-white/70">
              {tier.features.map((feat) => (
                <div key={feat} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  <p>{feat}</p>
                </div>
              ))}
            </div>
            <Button className="mt-auto">Choisir {tier.name}</Button>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="soft-card p-8">
          <h2 className="text-xl font-semibold">Comparatif express</h2>
          <div className="mt-4 grid gap-3 text-sm text-white/70">
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span>Livraison</span>
              <span>Starter: 2 semaines / Growth: 4 / Elite: sur mesure</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span>Squad</span>
              <span>Starter: 3 experts / Growth: 5 / Elite: squad dédiée</span>
            </div>
            <div className="flex justify-between pb-2">
              <span>Support</span>
              <span>Slack + dashboard + rituels</span>
            </div>
          </div>
        </div>
        <div className="soft-card p-8 space-y-4">
          <h2 className="text-xl font-semibold">FAQ</h2>
          {faqs.map((faq) => (
            <div key={faq.question} className="border-b border-white/10 pb-3">
              <p className="font-semibold">{faq.question}</p>
              <p className="text-sm text-white/70">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
