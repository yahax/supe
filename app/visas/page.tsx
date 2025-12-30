import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { VisaTabs } from "@/components/site/VisaTabs";

export const metadata: Metadata = {
  title: "Visas / Vols / Hôtels",
  description: "Demandes de visas, billets d’avion et hôtels. Réponse rapide sur WhatsApp."
};

export default function VisasPage() {
  return (
    <div className="space-y-8 py-10">
      <Section title="Visas / Vols / Hôtels" description="Sélectionnez votre besoin, on vous répond sur WhatsApp.">
        <VisaTabs />
      </Section>
    </div>
  );
}
