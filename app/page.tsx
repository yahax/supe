import Image from 'next/image';
import Link from 'next/link';
import CTAButton from '@/components/cta-button';
import { icons } from '@/components/icons';
import { caseStudies } from '@/lib/case-studies';

const services = [
  { name: 'Websites', description: 'High-converting, modular, lightning fast.', icon: 'web' },
  { name: 'Branding', description: 'Positioning, voice, and visual systems.', icon: 'branding' },
  { name: 'SEO', description: 'Technical, content sprints, intent capture.', icon: 'seo' },
  { name: 'Paid Media', description: 'Meta/Google performance with creative ops.', icon: 'ads' },
  { name: 'Creative Studio', description: 'Premium creative pods for ads & landing.', icon: 'creative' },
  { name: 'CRO', description: 'Experimentation, heatmaps, funnel rebuilds.', icon: 'cro' },
  { name: 'Analytics/Tracking', description: 'Full-funnel attribution & dashboards.', icon: 'analytics' },
  { name: 'Automation', description: 'RevOps, workflows, reporting automation.', icon: 'automation' },
];

const process = [
  { title: 'Audit', detail: 'We interrogate data, funnels, and brand to map truth.' },
  { title: 'Strategy', detail: 'Roadmap with bets, risks, and velocity targets.' },
  { title: 'Build', detail: 'Design, copy, and engineering in parallel squads.' },
  { title: 'Launch', detail: 'QA, tracking, and rollout with comms ready.' },
  { title: 'Optimize', detail: 'Weekly sprints with clear metrics and learning loops.' },
];

const industries = ['Ecommerce', 'SaaS', 'Fintech', 'Education', 'Healthcare', 'Travel', 'Real Estate', 'B2B Services'];

const faqs = [
  { q: 'How fast can you start?', a: 'We schedule a kickoff within 5 business days once scope is aligned and access is provisioned.' },
  { q: 'Do you work globally?', a: 'Yes. We operate remotely with clients across North America, EMEA, and APAC with async-friendly comms.' },
  { q: 'Do you handle tracking?', a: 'We rebuild analytics and server-side tracking by default for every engagement.' },
  { q: 'How do you price?', a: 'We price by scope complexity, creative volume, media budgets, and timeline intensity—never hourly.' },
  { q: 'Who leads the work?', a: 'Founder-led strategy with specialist pods for design, engineering, performance, and analytics.' },
  { q: 'Can you work with in-house teams?', a: 'Yes. We integrate with internal squads, providing leadership, systems, and execution.' },
  { q: 'What stack do you use?', a: 'Next.js, modern analytics (GA4, Segment), performance media platforms, and automation across RevOps.' },
  { q: 'Do you offer retainers?', a: 'We run retainers for growth, CRO, and performance programs following an initial build or audit.' },
];

export default function HomePage() {
  return (
    <div className="space-y-24 pb-24">
      <section className="section-shell pt-16 md:pt-24 grid gap-12 lg:grid-cols-[1.1fr,0.9fr] items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.25em] text-accent">Premium Digital Growth Studio</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            Global digital outcomes with sharp strategy, premium craft, and relentless performance.
          </h1>
          <p className="text-lg text-white/70 max-w-2xl">
            WINBOX.MA builds conversion-grade websites, brand systems, and performance media engines that compound revenue across markets.
          </p>
          <div className="flex flex-wrap gap-3">
            <CTAButton href="/contact" label="Get a Quote" />
            <Link
              href="https://wa.me/212669694945"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold hover:border-white/50"
            >
              WhatsApp
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 max-w-xl text-sm text-white/70">
            <div className="card-surface p-4">
              <p className="text-2xl font-semibold text-white">+38%</p>
              <p className="mt-1">Conversion lifts after CRO & creative sprints.</p>
            </div>
            <div className="card-surface p-4">
              <p className="text-2xl font-semibold text-white">3-6x</p>
              <p className="mt-1">Typical blended ROAS range post launch.</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="card-surface overflow-hidden">
            <Image
              src="/images/winbox-hero.webp"
              alt="WINBOX hero"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="card-surface p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-4 text-sm">
            {[
              { label: 'Revenue impact', value: '$2.5M - $50M+', note: 'Typical ranges, depends on project' },
              { label: 'Engagement length', value: '6-24 weeks', note: 'Strategy, build, optimize cycles' },
              { label: 'Markets', value: 'EMEA • NA • APAC', note: 'Global delivery, local nuance' },
              { label: 'Team', value: 'Founder-led pods', note: 'Design • Growth • Data' },
            ].map((item) => (
              <div key={item.label} className="space-y-1">
                <p className="text-white/60">{item.label}</p>
                <p className="text-lg font-semibold text-white">{item.value}</p>
                <p className="text-xs text-white/50">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-accent">Services</p>
            <h2 className="text-3xl font-semibold">Bento grid to cover growth end-to-end</h2>
          </div>
          <Link href="/services" className="text-sm text-white/70 hover:text-white">View services</Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = icons[service.icon as keyof typeof icons];
            return (
              <div key={service.name} className="card-surface p-5 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-white/5 p-2 text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="font-semibold">{service.name}</p>
                </div>
                <p className="text-sm text-white/70">{service.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section-shell space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-accent">Process</p>
            <h2 className="text-3xl font-semibold">Velocity with certainty</h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-5">
          {process.map((step, idx) => (
            <div key={step.title} className="card-surface p-4 space-y-2">
              <p className="text-xs text-white/50">{String(idx + 1).padStart(2, '0')}</p>
              <p className="font-semibold">{step.title}</p>
              <p className="text-sm text-white/70">{step.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-accent">Case Studies</p>
            <h2 className="text-3xl font-semibold">Selective wins we replicate</h2>
          </div>
          <Link href="/work" className="text-sm text-white/70 hover:text-white">See all</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {caseStudies.map((item) => (
            <Link key={item.slug} href={`/work/${item.slug}`} className="card-surface p-4 hover:-translate-y-1 transition block">
              <div className="overflow-hidden rounded-xl border border-white/5">
                <Image src={item.image} alt={item.title} width={800} height={600} className="h-44 w-full object-cover" />
              </div>
              <div className="mt-3 space-y-2">
                <div className="flex items-center gap-2 text-xs text-white/60">
                  <span>{item.industry}</span>•<span>{item.location}</span>
                </div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-white/70">{item.summary}</p>
                <div className="flex flex-wrap gap-2 text-[11px] text-accent">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-accent/10 px-2 py-1">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-shell space-y-6">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-accent">Industries</p>
          <h2 className="text-3xl font-semibold">Operators in complex categories</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {industries.map((industry) => (
            <span key={industry} className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/80">
              {industry}
            </span>
          ))}
        </div>
      </section>

      <section className="section-shell space-y-6">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-accent">FAQ</p>
          <h2 className="text-3xl font-semibold">Clarity before we begin</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((item) => (
            <div key={item.q} className="card-surface p-4 space-y-2">
              <p className="font-semibold">{item.q}</p>
              <p className="text-sm text-white/70">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="card-surface p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.25em] text-accent">Ready</p>
            <h2 className="text-3xl font-semibold">Let&apos;s build your next growth chapter</h2>
            <p className="text-white/70 max-w-2xl">
              WhatsApp for immediate coordination or email for structured scope. We respond within one business day.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <CTAButton href="https://wa.me/212669694945" label="WhatsApp" />
            <Link
              href="mailto:contact@winbox.ma"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold hover:border-white/50"
            >
              Email the team
            </Link>
            <CTAButton href="/contact" label="Contact form" />
          </div>
        </div>
      </section>
    </div>
  );
}
