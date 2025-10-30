import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import { motionContainer, motionItem } from "@/lib/ui";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "meta" });
  return {
    title: t("title.realisations"),
    description: t("description.realisations"),
    alternates: {
      canonical: `https://winbox.ma/${params.locale}/realisations`,
      languages: {
        fr: "https://winbox.ma/fr/realisations",
        ar: "https://winbox.ma/ar/realisations"
      }
    }
  };
}

function RealisationsContent() {
  const t = useTranslations("cases");
  const items = t.raw("items") as Array<{ title: string; kpis: string[]; stack: string; sector: string }>;

  return (
    <>
      <Section className="pb-10">
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
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {items.map((item) => (
            <motion.article key={item.title} variants={motionItem} className="card flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-secondary">{item.sector}</span>
              <h2 className="text-2xl font-semibold text-primary">{item.title}</h2>
              <ul className="mt-2 space-y-2 text-sm font-medium text-primary">
                {item.kpis.map((kpi) => (
                  <li key={kpi} className="rounded-full bg-secondary/10 px-3 py-2">
                    {kpi}
                  </li>
                ))}
              </ul>
              <span className="text-sm text-slate-500">{item.stack}</span>
            </motion.article>
          ))}
        </motion.div>
      </Section>
    </>
  );
}

export default function Page() {
  return <RealisationsContent />;
}
