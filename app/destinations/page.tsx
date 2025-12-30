import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { DestinationsExplorer } from "@/components/site/DestinationsExplorer";

export const metadata: Metadata = {
  title: "Destinations",
  description: "Choisissez votre destination et recevez un devis voyage clair sur WhatsApp."
};

export default function DestinationsPage() {
  return (
    <div className="space-y-8 py-10">
      <Section title="Choisissez votre destination" description="Filtrez et demandez votre devis sur WhatsApp.">
        <DestinationsExplorer />
      </Section>
    </div>
  );
}
