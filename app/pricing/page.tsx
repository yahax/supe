import CTAButton from '@/components/cta-button';

export const metadata = {
  title: 'Pricing | WINBOX.MA',
  description: 'Transparent ranges for WINBOX.MA packages: Launch, Scale, and Dominate.'
};

const packages = [
  {
    name: 'Launch',
    range: '$12k - $35k',
    focus: 'New brands, product launches, and foundational sites.',
    inclusions: ['Strategy sprint', 'Website or landing system', 'Core tracking', 'Creative starter set'],
    bestFor: 'Startups validating offers and time-sensitive launches.',
  },
  {
    name: 'Scale',
    range: '$35k - $90k',
    focus: 'Growth stage teams needing durable systems.',
    inclusions: ['Full website rebuild', 'Brand refinement', 'SEO setup', 'CRO testing', 'Analytics upgrade'],
    bestFor: 'Teams with traction who need conversion lifts and speed.',
  },
  {
    name: 'Dominate',
    range: '$90k - $200k+',
    focus: 'Global programs combining product, performance, and ops.',
    inclusions: ['Multi-market experience', 'Creative pods', 'Performance media', 'Automation', 'Analytics leadership'],
    bestFor: 'Brands scaling across regions needing an embedded team.',
  },
];

const drivers = [
  'Scope depth: number of templates, journeys, and languages.',
  'Creative volume: asset counts, motion, and iterations per week.',
  'Tracking complexity: compliance, server-side, and data warehousing.',
  'Timeline intensity: aggressive launch timelines increase parallelization.',
  'Team composition: specialty pods and leadership requirements.',
];

export default function PricingPage() {
  return (
    <div className="section-shell py-16 space-y-10">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.25em] text-accent">Pricing</p>
        <h1 className="text-4xl font-semibold">Ranges built around your ambition</h1>
        <p className="text-lg text-white/70 max-w-3xl">
          We scope based on outcomes, not hours. Expect clarity, transparent ranges, and options for intensity.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {packages.map((pkg) => (
          <div key={pkg.name} className="card-surface p-6 space-y-3">
            <div className="flex items-baseline justify-between">
              <h2 className="text-2xl font-semibold">{pkg.name}</h2>
              <span className="text-sm text-accent">{pkg.range}</span>
            </div>
            <p className="text-sm text-white/70">{pkg.focus}</p>
            <div className="space-y-1 text-sm text-white/80">
              {pkg.inclusions.map((item) => (
                <p key={item}>• {item}</p>
              ))}
            </div>
            <p className="text-sm text-white/60">Best for: {pkg.bestFor}</p>
            <CTAButton href="/contact" label="Scope this" />
          </div>
        ))}
      </div>
      <div className="card-surface p-6 space-y-2">
        <h2 className="text-xl font-semibold">Pricing drivers</h2>
        <div className="grid gap-2 md:grid-cols-2 text-sm text-white/70">
          {drivers.map((item) => (
            <p key={item}>• {item}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
