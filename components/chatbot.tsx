'use client';

import { useMemo, useState } from 'react';

const steps = [
  { key: 'service', label: 'Service', options: ['Websites', 'Branding', 'SEO', 'Paid Media', 'Analytics', 'Automation'] },
  { key: 'project', label: 'Project type', options: ['New build', 'Revamp', 'Growth sprint', 'Retainer', 'Ad campaign'] },
  { key: 'budget', label: 'Budget range', options: ['$5k-$10k', '$10k-$25k', '$25k-$50k', '$50k-$120k', '$120k+'] },
  { key: 'timeline', label: 'Timeline', options: ['2-4 weeks', '4-8 weeks', '8-12 weeks', 'Flexible'] },
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const allAnswered = steps.every((step) => responses[step.key]);

  const brief = useMemo(() => {
    if (!allAnswered) return '';
    return `WINBOX Brief:\nService: ${responses.service}\nProject: ${responses.project}\nBudget: ${responses.budget}\nTimeline: ${responses.timeline}\nName: ${name || 'Not provided'}\nEmail: ${email || 'Not provided'}`;
  }, [allAnswered, responses, name, email]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {open && (
        <div className="mb-3 w-80 rounded-2xl border border-white/10 bg-slate/60 backdrop-blur-lg p-4 shadow-subtle">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-accent">Concierge</p>
              <p className="font-semibold">WINBOX Intake</p>
            </div>
            <button
              className="text-white/60 hover:text-white"
              onClick={() => setOpen(false)}
              aria-label="Close chatbot"
            >
              ×
            </button>
          </div>
          <div className="mt-3 space-y-3 text-sm">
            {steps.map((step) => (
              <div key={step.key} className="space-y-1">
                <p className="text-white/70">{step.label}</p>
                <div className="flex flex-wrap gap-2">
                  {step.options.map((option) => {
                    const active = responses[step.key] === option;
                    return (
                      <button
                        key={option}
                        onClick={() =>
                          setResponses((prev) => ({ ...prev, [step.key]: option }))
                        }
                        className={`rounded-full border px-3 py-1 transition text-xs ${
                          active
                            ? 'border-accent bg-accent text-black'
                            : 'border-white/10 text-white/80 hover:border-white/40'
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
            <div className="grid grid-cols-2 gap-2">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-accent"
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-accent"
              />
            </div>
            {allAnswered && (
              <div className="rounded-lg border border-accent/40 bg-accent/10 px-3 py-2 text-xs text-accent whitespace-pre-line">
                {brief}
              </div>
            )}
            <div className="flex flex-wrap gap-2">
              <a
                className="rounded-full bg-accent px-3 py-2 text-xs font-semibold text-black hover:-translate-y-0.5 transition"
                href={`https://wa.me/212669694945?text=${encodeURIComponent(brief || 'Hello WINBOX team!')}`}
              >
                Send on WhatsApp
              </a>
              <a
                className="rounded-full border border-white/20 px-3 py-2 text-xs font-semibold text-white hover:border-white/50 transition"
                href={`mailto:contact@winbox.ma?subject=WINBOX Brief&body=${encodeURIComponent(brief || 'Hi WINBOX team, let\'s talk.')}`}
              >
                Send by Email
              </a>
            </div>
            <p className="text-[11px] text-white/50">contact@winbox.ma • +212 6 69 69 49 45</p>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-full bg-accent text-black px-4 py-2 text-sm font-semibold shadow-subtle hover:-translate-y-0.5 transition"
      >
        {open ? 'Close Intake' : 'Talk with WINBOX'}
      </button>
    </div>
  );
}
