import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "WINBOX | Agence digitale IA à Rabat",
  description: "WINBOX conçoit des expériences digitales, campagnes média et copilots IA pour 2026.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className="bg-background text-foreground">
      <body className="min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
