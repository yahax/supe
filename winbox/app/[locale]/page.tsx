import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Cases } from "@/components/Cases";
import { Testimonials } from "@/components/Testimonials";
import { CtaBanner } from "@/components/CtaBanner";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "meta" });
  return {
    title: t("title.home"),
    description: t("description.home"),
    alternates: {
      canonical: params.locale === "fr" ? "https://winbox.ma/fr" : `https://winbox.ma/${params.locale}`,
      languages: {
        fr: "https://winbox.ma/fr",
        ar: "https://winbox.ma/ar"
      }
    }
  };
}

export default function Page() {
  return (
    <>
      <Hero />
      <Services />
      <Cases />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
