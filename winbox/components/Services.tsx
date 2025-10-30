import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { motionContainer, motionItem } from "@/lib/ui";

export function Services() {
  const t = useTranslations("services");
  const items = t.raw("items") as Array<{ title: string; description: string }>;

  return (
    <section className="section" id="services">
      <div className="container">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-semibold text-primary lg:text-4xl">{t("title")}</h2>
          <p className="mt-4 text-lg text-slate-600">{t("description")}</p>
        </div>
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
      </div>
    </section>
  );
}
