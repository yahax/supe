import { ContactForm } from "@/components/ContactForm";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "meta" });
  return {
    title: t("title.contact"),
    description: t("description.contact"),
    alternates: {
      canonical: `https://winbox.ma/${params.locale}/contact`,
      languages: {
        fr: "https://winbox.ma/fr/contact",
        ar: "https://winbox.ma/ar/contact"
      }
    }
  };
}

function ContactIntro() {
  const t = useTranslations("contact");

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-semibold text-primary lg:text-5xl">{t("title")}</h1>
      <p className="text-lg text-slate-600">{t("description")}</p>
      <WhatsAppButton />
    </div>
  );
}

export default function Page() {
  return (
    <section className="section">
      <div className="container grid gap-12 lg:grid-cols-2">
        <ContactIntro />
        <ContactForm />
      </div>
    </section>
  );
}
