"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import { motionContainer, motionItem, cn } from "@/lib/ui";

interface CaseItem {
  title: string;
  sector: string;
  kpis: string[];
  stack: string;
}

export function Cases() {
  const t = useTranslations("cases");
  const items = t.raw("items") as CaseItem[];
  const [filter, setFilter] = useState<string>("all");

  const filteredItems = useMemo(() => {
    if (filter === "all") return items;
    return items.filter((item) => item.sector === filter);
  }, [filter, items]);

  const filters = [
    { value: "all", label: t("filters.all") },
    { value: "tech", label: t("filters.tech") },
    { value: "retail", label: t("filters.retail") },
    { value: "finance", label: t("filters.finance") }
  ];

  const sectorLabels = filters.reduce<Record<string, string>>((acc, item) => {
    acc[item.value] = item.label;
    return acc;
  }, {});

  return (
    <section className="section bg-muted/40" id="realisations">
      <div className="container">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-primary lg:text-4xl">{t("title")}</h2>
            <p className="mt-2 text-slate-600">{t("description")}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {filters.map((item) => (
              <button
                key={item.value}
                type="button"
                onClick={() => setFilter(item.value)}
                className={cn(
                  "rounded-full border border-slate-200 px-4 py-2 text-sm font-medium transition",
                  filter === item.value
                    ? "bg-primary text-white shadow"
                    : "bg-white hover:border-secondary hover:text-secondary"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={motionContainer}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {filteredItems.map((item) => (
            <motion.article key={item.title} variants={motionItem} className="card flex flex-col gap-4">
              <div>
                <h3 className="text-2xl font-semibold text-primary">{item.title}</h3>
                <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-secondary">
                  {sectorLabels[item.sector] ?? item.sector}
                </p>
              </div>
              <ul className="flex flex-wrap gap-2 text-sm font-medium text-primary">
                {item.kpis.map((kpi) => (
                  <li key={kpi} className="rounded-full bg-secondary/10 px-3 py-1">
                    {kpi}
                  </li>
                ))}
              </ul>
              <span className="text-sm text-slate-500">{item.stack}</span>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
