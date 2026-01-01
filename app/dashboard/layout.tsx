import Link from "next/link";
import type { ReactNode } from "react";

const menu = [
  { href: "/dashboard", label: "Vue d'ensemble" },
  { href: "/dashboard/projects", label: "Projets" },
  { href: "/dashboard/tickets", label: "Tickets" },
  { href: "/dashboard/assets", label: "Assets" },
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className="border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="section-shell flex flex-wrap items-center gap-4 py-4">
          {menu.map((item) => (
            <Link key={item.href} href={item.href} className="button-ghost">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="section-shell">{children}</div>
    </div>
  );
}
