"use client";

import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { motion } from "framer-motion";
import { motionContainer, motionItem } from "@/lib/ui";

const phoneRegex = /^(\+212|0)([ \-]?\d){9}$/;

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional().refine((value) => !value || phoneRegex.test(value), {
    message: "Invalid phone"
  }),
  type_projet: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10)
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus(null);
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      const result = await response.json();
      setStatus(result.errors ? Object.values(result.errors).flat().join(" ") : "Error");
      return;
    }

    setStatus(t("success"));
    reset();
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="card space-y-5"
      initial="hidden"
      animate="visible"
      variants={motionContainer}
    >
      <motion.div variants={motionItem} className="space-y-2">
        <label htmlFor="name">{t("fields.name")}</label>
        <input id="name" {...register("name")} required />
        {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
      </motion.div>
      <motion.div variants={motionItem} className="space-y-2">
        <label htmlFor="email">{t("fields.email")}</label>
        <input id="email" type="email" {...register("email")} required />
        {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
      </motion.div>
      <motion.div variants={motionItem} className="space-y-2">
        <label htmlFor="phone">{t("fields.phone")}</label>
        <input id="phone" type="tel" {...register("phone")} placeholder="+212..." />
        {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
      </motion.div>
      <motion.div variants={motionItem} className="space-y-2">
        <label htmlFor="type">{t("fields.projectType")}</label>
        <input id="type" {...register("type_projet")} />
      </motion.div>
      <motion.div variants={motionItem} className="space-y-2">
        <label htmlFor="budget">{t("fields.budget")}</label>
        <input id="budget" {...register("budget")} />
      </motion.div>
      <motion.div variants={motionItem} className="space-y-2">
        <label htmlFor="message">{t("fields.message")}</label>
        <textarea id="message" rows={4} {...register("message")} required />
        {errors.message && <p className="text-sm text-red-500">{errors.message.message}</p>}
      </motion.div>
      <motion.button type="submit" disabled={isSubmitting} variants={motionItem} className="btn-primary w-full">
        {isSubmitting ? "..." : t("submit")}
      </motion.button>
      {status && <p className="text-sm text-secondary">{status}</p>}
    </motion.form>
  );
}
