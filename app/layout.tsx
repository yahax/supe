import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { MobileActionBar } from "@/components/site/MobileActionBar";
import { organizationSchema, localBusinessSchema, websiteSchema } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "FavoriVoyages | Agence voyages, visas, Omra & Hajj",
    template: "%s | FavoriVoyages"
  },
  description: "Agence premium pour visas, vols, hôtels et Omra & Hajj. Réponse rapide sur WhatsApp et devis clair.",
  metadataBase: new URL("https://favorivoyages.com"),
  openGraph: {
    title: "FavoriVoyages | Agence voyages, visas, Omra & Hajj",
    description: "Agence premium pour visas, vols, hôtels et Omra & Hajj. Réponse rapide sur WhatsApp et devis clair.",
    url: "https://favorivoyages.com",
    siteName: "FavoriVoyages",
    locale: "fr_FR",
    type: "website"
  },
  alternates: {
    canonical: "https://favorivoyages.com"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar />
        <main className="pb-20 md:pb-0">{children}</main>
        <Footer />
        <MobileActionBar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, localBusinessSchema, websiteSchema])
          }}
        />
      </body>
    </html>
  );
}
