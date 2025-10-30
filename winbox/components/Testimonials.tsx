import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { motionContainer, motionItem } from "@/lib/ui";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export function Testimonials() {
  const t = useTranslations("testimonials");
  const items = t.raw("items") as Testimonial[];

  return (
    <section className="section" id="testimonials">
      <div className="container">
        <div className="mb-10 flex flex-col gap-2">
          <h2 className="text-3xl font-semibold text-primary lg:text-4xl">{t("title")}</h2>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={motionContainer}
          className="grid gap-6 md:grid-cols-2"
        >
          {items.map((item) => (
            <motion.blockquote
              key={item.quote}
              variants={motionItem}
              className="card border-0 bg-gradient-to-br from-white via-white to-muted"
            >
              <p className="text-lg font-medium text-primary">“{item.quote}”</p>
              <footer className="mt-6 text-sm text-slate-600">
                <span className="font-semibold text-primary">{item.author}</span> · {item.role}
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
