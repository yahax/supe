import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white/90">
      <div className="container flex flex-col gap-6 py-10 text-sm text-muted-foreground lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-base font-semibold text-foreground">WINBOX</span>
          <span>
            © {year} · {t("rights")}
          </span>
        </div>
        <div className="flex items-center gap-6">
          <Link href={`/${locale}/mentions-legales`} className="hover:text-secondary">
            {t("privacy")}
          </Link>
          <Link href={`/${locale}/cookies`} className="hover:text-secondary">
            {t("cookies")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
