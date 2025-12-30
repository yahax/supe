import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { ServiceSelector } from "@/components/home/ServiceSelector";
import { DestinationsGrid } from "@/components/home/DestinationsGrid";
import { TrustProof } from "@/components/home/TrustProof";
import { FeaturedHighlights } from "@/components/home/FeaturedHighlights";
import { OmraTeaser } from "@/components/home/OmraTeaser";
import { Testimonials } from "@/components/home/Testimonials";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Accueil",
  description: "FavoriVoyages organise vos visas, vols, hôtels et séjours Omra & Hajj. Devis rapide par WhatsApp."
};

export default function HomePage() {
  return (
    <div className="space-y-6 sm:space-y-10">
      <Hero />
      <ServiceSelector />
      <DestinationsGrid />
      <TrustProof />
      <FeaturedHighlights />
      <OmraTeaser />
      <Testimonials />
      <FinalCTA />
    </div>
  );
}
