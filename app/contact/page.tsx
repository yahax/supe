"use client";

import { useState } from "react";
import { z } from "zod";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import Image from "next/image";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  projectType: z.string().min(2),
  budget: z.string().min(2),
  deadline: z.string().min(2),
  message: z.string().min(10),
});

type FormState = { success: boolean; error?: string };

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", projectType: "", budget: "", deadline: "", message: "" });
  const [state, setState] = useState<FormState>({ success: false });

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      setState({ success: false, error: "Merci de remplir tous les champs correctement." });
      return;
    }
    setState({ success: true });
  }

  return (
    <div className="section-shell grid gap-8 md:grid-cols-[1.1fr,0.9fr]">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.2em] text-white/50">Contact</p>
        <h1 className="text-3xl font-bold">Parlez-nous de votre prochain lancement.</h1>
        <p className="text-white/70">Nous répondons sous 24h. Partagez votre scope, vos KPIs et le timing idéal.</p>
        <Card>
          <form className="space-y-3" onSubmit={submit}>
            <Input
              placeholder="Nom / société"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              aria-label="Nom"
            />
            <Input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              aria-label="Email"
            />
            <Input
              placeholder="Type de projet (site, ads, IA...)"
              value={form.projectType}
              onChange={(e) => setForm({ ...form, projectType: e.target.value })}
              aria-label="Type de projet"
            />
            <Input
              placeholder="Budget (ex: 5-10k€)"
              value={form.budget}
              onChange={(e) => setForm({ ...form, budget: e.target.value })}
              aria-label="Budget"
            />
            <Input
              placeholder="Deadline (ex: Q4 2026)"
              value={form.deadline}
              onChange={(e) => setForm({ ...form, deadline: e.target.value })}
              aria-label="Deadline"
            />
            <textarea
              className="input-base min-h-[120px]"
              placeholder="Contexte, objectifs, assets existants"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              aria-label="Message"
            />
            <Button type="submit">Envoyer</Button>
            {state.error && <p className="text-sm text-red-300">{state.error}</p>}
            {state.success && !state.error && (
              <p className="rounded-xl bg-green-500/10 px-4 py-3 text-sm text-green-200">
                Merci ! Nous revenons vers vous en moins de 24h avec un plan de jeu.
              </p>
            )}
          </form>
        </Card>
      </div>
      <div className="soft-card overflow-hidden">
        <Image src="/images/contact/map.webp" alt="WINBOX Rabat" width={900} height={720} className="h-full w-full object-cover" />
        {/* TODO: Replace placeholder map image */}
      </div>
    </div>
  );
}
