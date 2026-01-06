import Image from 'next/image';

export const metadata = {
  title: 'About | WINBOX.MA',
  description: 'Founder-led global digital growth studio with principles built on clarity, craft, and velocity.'
};

const principles = [
  'Strategy before deliverables: we define what to win and why.',
  'Design for decisions: every component, headline, and pixel is accountable to metrics.',
  'Shipping rhythm: weekly increments with visibility and narrative.',
  'Data-forward: instrumentation is foundational, not an add-on.',
  'Premium craft: typography, spacing, and motion that signal trust.',
];

const operatingSystem = [
  'Kickoff with outcomes, constraints, and decision-makers.',
  'Sprint planning with clear owners across design, build, and performance.',
  'Reviews anchored in data, user evidence, and market signals.',
  'Enablement: playbooks, training, and documentation shipped with the product.',
];

export default function AboutPage() {
  return (
    <div className="section-shell py-16 space-y-10">
      <div className="grid gap-10 lg:grid-cols-2 items-center">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.25em] text-accent">About</p>
          <h1 className="text-4xl font-semibold">Founder-led, global, outcomes-obsessed</h1>
          <p className="text-lg text-white/70">
            WINBOX.MA was built to close the gap between bold ideas and the execution muscle required to win globally. We operate with founder-level ownership, senior talent, and obsessive care for details that compound conversion.
          </p>
          <div className="card-surface p-4 text-sm text-white/80 space-y-1">
            <p>• Headquartered remote-first with presence in Casablanca, London, and Dubai.</p>
            <p>• Trusted by CMOs, founders, and product leaders who demand velocity.</p>
            <p>• Transparent collaboration: Figma, Notion, Slack, and weekly narrative reports.</p>
          </div>
        </div>
        <div className="card-surface overflow-hidden">
          <Image src="/images/winbox-about.webp" alt="About WINBOX" width={1200} height={900} className="h-full w-full object-cover" />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="card-surface p-6 space-y-3">
          <h2 className="text-2xl font-semibold">Principles</h2>
          <ul className="space-y-2 text-sm text-white/70 list-disc list-inside">
            {principles.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="card-surface p-6 space-y-3">
          <h2 className="text-2xl font-semibold">Operating system</h2>
          <ul className="space-y-2 text-sm text-white/70 list-disc list-inside">
            {operatingSystem.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
