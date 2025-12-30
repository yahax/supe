import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  title?: string;
  eyebrow?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, title, eyebrow, description, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("container-px mx-auto max-w-7xl space-y-8", className)}>
      {(title || eyebrow || description) && (
        <header className="space-y-3">
          {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">{eyebrow}</p>}
          {title && <h2 className="text-3xl font-semibold leading-tight text-ink sm:text-4xl">{title}</h2>}
          {description && <p className="text-base text-gray-600 sm:text-lg">{description}</p>}
        </header>
      )}
      {children}
    </section>
  );
}
