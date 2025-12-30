import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  icon?: boolean;
}

export function Button({ href, children, variant = "primary", className, icon, ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold transition duration-200 focus-ring";
  const variants = {
    primary: "bg-accent text-ink shadow-soft hover:-translate-y-0.5 hover:shadow-card",
    secondary: "bg-ink text-white hover:-translate-y-0.5 hover:shadow-soft",
    ghost: "bg-white text-ink border border-gray-200 hover:border-accent hover:shadow-card"
  } as const;

  if (href) {
    return (
      <Link href={href} className={cn(baseStyles, variants[variant], className)}>
        {children}
        {icon && <ArrowUpRight className="h-4 w-4" aria-hidden />}
      </Link>
    );
  }

  return (
    <button className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
      {icon && <ArrowUpRight className="h-4 w-4" aria-hidden />}
    </button>
  );
}
