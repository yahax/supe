"use client";

import { cn } from "@/lib/ui";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

interface WhatsAppButtonProps {
  variant?: "primary" | "ghost";
  className?: string;
}

export function WhatsAppButton({ variant = "primary", className }: WhatsAppButtonProps) {
  return (
    <Link
      href="https://wa.me/212676877273"
      className={cn(
        variant === "primary" ? "btn-primary" : "btn-ghost",
        "shadow-lg shadow-secondary/40",
        className
      )}
      rel="noopener noreferrer"
      target="_blank"
    >
      <MessageCircle className="h-4 w-4" aria-hidden />
      WhatsApp
    </Link>
  );
}

export function WhatsAppFloatingButton() {
  return (
    <WhatsAppButton
      className="fixed bottom-6 right-4 z-40 w-fit rounded-full px-5 py-3 text-sm font-semibold shadow-card lg:hidden"
    />
  );
}
