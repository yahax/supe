"use client";

import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { ButtonHTMLAttributes, ReactNode } from "react";

const buttonStyles = cva("rounded-full font-semibold transition inline-flex items-center justify-center gap-2", {
  variants: {
    variant: {
      primary: "button-primary",
      ghost: "button-ghost",
    },
    size: {
      sm: "px-3 py-2 text-xs",
      md: "px-5 py-3 text-sm",
      lg: "px-6 py-4 text-base",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
}

export function Button({ className, children, variant, size, icon, ...props }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.01, translateY: -2 }}
      whileTap={{ scale: 0.99 }}
      className={cn(buttonStyles({ variant, size }), className)}
      {...props}
    >
      {icon}
      {children}
    </motion.button>
  );
}
