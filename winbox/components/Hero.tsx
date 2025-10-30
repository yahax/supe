import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { motionContainer, motionItem } from "@/lib/ui";
import { WhatsAppButton } from "./WhatsAppButton";

export function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();

  return (
    <section className="section pb-10 pt-20">
      <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={motionContainer}
          className="flex flex-col gap-6"
        >
          <motion.span variants={motionItem} className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">
            WINBOX STUDIO
          </motion.span>
          <motion.h1
            variants={motionItem}
            className="text-4xl font-semibold leading-tight text-primary lg:text-5xl"
          >
            {t("h1")}
          </motion.h1>
          <motion.p variants={motionItem} className="text-lg text-slate-600 lg:text-xl">
            {t("sub")}
          </motion.p>
          <motion.div variants={motionItem} className="flex flex-col gap-4 sm:flex-row">
            <WhatsAppButton className="btn-primary" />
            <Link href={`/${locale}/realisations`} className="btn-ghost">
              {t("ctaSecondary")}
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative flex h-80 items-center justify-center rounded-[32px] border border-slate-200 bg-gradient-to-br from-white to-muted shadow-card"
        >
          <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-secondary/30 via-white to-transparent" />
          <Image
            src="/og-image.svg"
            alt="WINBOX Preview"
            width={520}
            height={320}
            className="relative z-10 rounded-2xl shadow-2xl"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
