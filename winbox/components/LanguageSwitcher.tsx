"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

const locales = [
  { code: "fr", label: "FR" },
  { code: "ar", label: "AR" }
];

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleChange = (code: string) => {
    if (code === locale) return;

    const segments = pathname.split("/").filter(Boolean);
    segments[0] = code;
    router.push(`/${segments.join("/")}`);
  };

  return (
    <div className="flex items-center gap-2 rounded-full bg-muted px-2 py-1 text-xs font-semibold">
      {locales.map((item) => (
        <button
          key={item.code}
          type="button"
          onClick={() => handleChange(item.code)}
          className={`rounded-full px-3 py-1 transition ${
            item.code === locale
              ? "bg-primary text-white"
              : "text-foreground hover:bg-white"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
