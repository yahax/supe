import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export function Card({ children, className, as: Tag = "div" }: CardProps) {
  return (
    <Tag className={cn("glow-card relative overflow-hidden", className)}>
      {children}
    </Tag>
  );
}
