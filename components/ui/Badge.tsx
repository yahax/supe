import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "solid" | "soft";
  className?: string;
}

export function Badge({ children, variant = "soft", className }: BadgeProps) {
  const styles = variant === "solid"
    ? "bg-accent text-ink font-semibold"
    : "bg-[#F5F7FB] text-ink";

  return (
    <span className={cn("inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium", styles, className)}>
      {children}
    </span>
  );
}
