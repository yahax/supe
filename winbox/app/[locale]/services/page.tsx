import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import { motionContainer, motionItem } from "@/lib/ui";
import { getTranslations } from "next-intl/server";
import { useLocale, useTranslations } from "next-intl";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "meta" });
  return {
    title: t("title.services"),
    description: t("description.services"),
    alternates: {
      canonical: `https://winbox.ma/${params.locale}/services`,
      languages: {
        fr: "https://winbox.ma/fr/services",
        ar: "https://winbox.ma/ar/services"
      }
    }
  };
}

function ServicesContent() {
  const t = useTranslations("services");
  const locale = useLocale();
  const items = t.raw("items") as Array<{ title: string; description: string }>;

  const packs = locale === "ar"
    ? [
        {
          title: "Launch Sprint",
          description: t("items.0.description"),
          deliverables: [
            "نظام تصميم متكامل",
            "موقع من 5 صفحات محسّن لـ SEO",
            "تسليم وتدريب للفريق"
          ]
        },
        {
          title: "Scale Performance",
          description: t("items.2.description"),
          deliverables: [
            "استراتيجية اكتساب متعددة القنوات",
            "إعداد تتبع GA4 + Meta Pixel",
            "تحسين التحويل شهرياً"
          ]
        }
      ]
    : [
        {
          title: "Launch Sprint",
          description: t("items.0.description"),
          deliverables: [
            "Design system complet",
            "Site 5 pages optimisé SEO",
            "Formation handoff"
          ]
        },
        {
          title: "Scale Performance",
          description: t("items.2.description"),
          deliverables: [
            "Stratégie acquisition multicanale",
            "Tracking GA4 + Meta Pixel",
            "Optimisation conversion mensuelle"
          ]
        }
      ];

  return (
    <>
      <Section className="pb-8">
        <div className="max-w-3xl space-y-4">
          <h1 className="text-4xl font-semibold text-primary lg:text-5xl">{t("title")}</h1>
          <p className="text-lg text-slate-600">{t("description")}</p>
        </div>
      </Section>
      <Section className="pt-0">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={motionContainer}
          className="grid gap-6 md:grid-cols-2"
        >
          {packs.map((pack) => (
            <motion.div key={pack.title} variants={motionItem} className="card">
              <h2 className="text-2xl font-semibold text-primary">{pack.title}</h2>
              <p className="mt-3 text-sm text-slate-600">{pack.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-foreground">
                {pack.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-secondary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </Section>
      <Section>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={motionContainer}
          className="grid gap-6 md:grid-cols-3"
        >
          {items.map((item) => (
            <motion.div key={item.title} variants={motionItem} className="card">
              <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
              <p className="mt-4 text-sm text-slate-600">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </>
  );
}

export default function Page() {
  return <ServicesContent />;
}
