"use client";

import { useChat } from "ai/react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/ai/chat",
    streamProtocol: "data",
  });

  return (
    <div className="soft-card space-y-6">
      <div className="flex items-center gap-3">
        <Image src="/images/brand/logo.webp" alt="WINBOX" width={32} height={32} className="rounded-lg" />
        <div>
          <p className="text-sm font-semibold">WINBOX Copilot</p>
          <p className="text-xs text-white/60">Brief, idées et scripts générés en streaming.</p>
        </div>
      </div>
      <div className="flex flex-col gap-3 max-h-[420px] overflow-y-auto pr-2">
        {messages.length === 0 && (
          <p className="text-sm text-white/60">Posez votre question : ads, UX, contenu, roadmap produit.</p>
        )}
        {messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className={`rounded-2xl p-3 text-sm ${message.role === "user" ? "bg-white/5" : "bg-accent/10"}`}
          >
            <p className="text-xs uppercase tracking-[0.08em] text-white/50 mb-1">
              {message.role === "user" ? "Vous" : "WINBOX"}
            </p>
            <p className="leading-relaxed text-white/90 whitespace-pre-wrap">{message.content}</p>
          </motion.div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex items-center gap-3">
        <Input
          value={input}
          onChange={handleInputChange}
          placeholder="Décrivez votre besoin..."
          aria-label="Prompt IA"
        />
        <Button type="submit" disabled={isLoading} className="!px-4">
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
}
