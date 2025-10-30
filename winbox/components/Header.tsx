import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { WhatsAppButton } from "./WhatsAppButton";

export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="container flex items-center justify-between py-4">
        <Link href={`/${locale}`} className="flex items-center gap-2 text-lg font-semibold">
          <span className="h-3 w-3 rounded-full bg-secondary" aria-hidden />
          <span>WINBOX</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">
          <Link href={`/${locale}/services`} className="hover:text-secondary">
            {t("services")}
          </Link>
          <Link href={`/${locale}/realisations`} className="hover:text-secondary">
            {t("realisations")}
          </Link>
          <Link href={`/${locale}/a-propos`} className="hover:text-secondary">
            {t("about")}
          </Link>
          <Link href={`/${locale}/contact`} className="hover:text-secondary">
            {t("contact")}
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <WhatsAppButton variant="ghost" />
        </div>
      </div>
    </header>
  );
}
