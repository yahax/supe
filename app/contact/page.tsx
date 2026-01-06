'use client';

import Image from 'next/image';
import { useState } from 'react';
import CTAButton from '@/components/cta-button';

export const metadata = {
  title: 'Contact | WINBOX.MA',
  description: 'Talk with WINBOX.MA via WhatsApp, email, or the contact form. Response within one business day.'
};

type FormState = 'idle' | 'success' | 'error';

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormState('error');
      return;
    }
    setFormState('success');
  };

  return (
    <div className="section-shell py-16 space-y-10">
      <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] items-center">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.25em] text-accent">Contact</p>
          <h1 className="text-4xl font-semibold">Direct line to WINBOX</h1>
          <p className="text-lg text-white/70 max-w-3xl">
            WhatsApp is fastest. Email for structured scopes. We work primarily GMT+1 with global overlap.
          </p>
          <div className="flex flex-wrap gap-3">
            <CTAButton href="https://wa.me/212669694945" label="WhatsApp" />
            <CTAButton href="mailto:contact@winbox.ma" label="Email" />
          </div>
          <div className="card-surface p-4 text-sm text-white/80 space-y-1">
            <p>Timezone: GMT+1 • Casablanca / London overlap</p>
            <p>Typical response: within one business day</p>
            <p>Channels: WhatsApp, Email, Notion, Slack</p>
          </div>
        </div>
        <div className="card-surface overflow-hidden">
          <Image src="/images/winbox-contact.webp" alt="Contact" width={1200} height={900} className="h-full w-full object-cover" />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <form onSubmit={handleSubmit} className="card-surface p-6 space-y-4">
          <div>
            <label className="text-sm text-white/70">Name</label>
            <input
              required
              value={formData.name}
              onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
              className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-white/40 focus:border-accent"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-sm text-white/70">Email</label>
            <input
              required
              type="email"
              value={formData.email}
              onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
              className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-white/40 focus:border-accent"
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label className="text-sm text-white/70">Project details</label>
            <textarea
              required
              value={formData.message}
              onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
              className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-white/40 focus:border-accent"
              rows={4}
              placeholder="Goals, timeline, budget range"
            />
          </div>
          <button
            type="submit"
            className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-black hover:-translate-y-0.5 transition"
          >
            Submit
          </button>
          {formState === 'success' && <p className="text-sm text-accent">Thank you. We&apos;ll reply shortly.</p>}
          {formState === 'error' && <p className="text-sm text-red-400">Please fill every field.</p>}
        </form>
        <div className="card-surface p-6 space-y-3 text-sm text-white/70">
          <h2 className="text-2xl font-semibold text-white">What helps us move fast</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Current funnel metrics and tools.</li>
            <li>Target markets, languages, and compliance constraints.</li>
            <li>Preferred launch timeline and internal owners.</li>
            <li>Brand guidelines, if available.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
