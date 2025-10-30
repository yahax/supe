import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import { motionContainer, motionItem } from "@/lib/ui";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "meta" });
  return {
    title: t("title.about"),
    description: t("description.about"),
    alternates: {
      canonical: `https://winbox.ma/${params.locale}/a-propos`,
      languages: {
        fr: "https://winbox.ma/fr/a-propos",
        ar: "https://winbox.ma/ar/a-propos"
      }
    }
  };
}

const team = [
  {
    name: "Nadia El Idrissi",
    role: "Brand Design Lead",
    bio: "15 ans d’expérience en design de marque pour des scale-ups et groupes internationaux.",
    avatar: "/logos/nadia.png"
  },
  {
    name: "Omar Benali",
    role: "Head of Engineering",
    bio: "Expert Next.js et performance, responsable de plus de 40 déploiements Vercel.",
    avatar: "/logos/omar.png"
  }
];

export default function Page() {
  return (
    <>
      <Section className="pb-8">
        <div className="max-w-3xl space-y-6">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">A PROPOS</span>
          <h1 className="text-4xl font-semibold text-primary lg:text-5xl">
            Nous orchestrons des expériences digitales qui convertissent.
          </h1>
          <p className="text-lg text-slate-600">
            WINBOX réunit des designers, développeurs et marketers seniors. Notre approche hybride mêle branding,
            technologie et performance pour propulser les marques ambitieuses du Maroc et au-delà.
          </p>
        </div>
      </Section>
      <Section className="pt-0">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4 text-slate-600">
            <h2 className="text-2xl font-semibold text-primary">Mission</h2>
            <p>
              Créer des écosystèmes digitaux rapides et désirables qui transforment chaque interaction en opportunité
              business. Nous combinons design premium, data et automatisation pour des résultats mesurables.
            </p>
            <h2 className="text-2xl font-semibold text-primary">Vision</h2>
            <p>
              Faire de WINBOX la référence pan-africaine des marques qui veulent accélérer sans compromis sur l’expérience
              utilisateur.
            </p>
          </div>
          <div className="space-y-4 rounded-3xl bg-muted p-8 shadow-card">
            <h2 className="text-2xl font-semibold text-primary">Manifesto</h2>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>• Priorité à la vitesse et à la clarté.</li>
              <li>• Chaque pixel a une intention business.</li>
              <li>• Mesurer, apprendre, optimiser.</li>
              <li>• Collaboration transparente avec nos clients.</li>
            </ul>
          </div>
        </div>
      </Section>
      <Section>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={motionContainer}
          className="grid gap-6 md:grid-cols-2"
        >
          {team.map((member) => (
            <motion.article key={member.name} variants={motionItem} className="card">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/20 text-lg font-semibold text-secondary">
                  {member.name
                    .split(" ")
                    .map((chunk) => chunk[0])
                    .join("")}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary">{member.name}</h3>
                  <p className="text-sm text-slate-500">{member.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-600">{member.bio}</p>
            </motion.article>
          ))}
        </motion.div>
      </Section>
    </>
  );
}
