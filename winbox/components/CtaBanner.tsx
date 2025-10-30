import { useTranslations } from "next-intl";
import { WhatsAppButton } from "./WhatsAppButton";

export function CtaBanner() {
  const t = useTranslations("cta");
  return (
    <section className="section pt-0">
      <div className="container">
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-primary px-8 py-12 text-center text-white shadow-card lg:flex-row lg:justify-between lg:text-left">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl font-semibold lg:text-4xl">{t("title")}</h2>
          </div>
          <WhatsAppButton />
        </div>
      </div>
    </section>
  );
}
