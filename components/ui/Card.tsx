import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  className?: string;
  children: ReactNode;
}

export function Card({ className, children }: CardProps) {
  return <div className={cn("card-shell", className)}>{children}</div>;
}
