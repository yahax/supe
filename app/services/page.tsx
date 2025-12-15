import CTASection from '@/components/CTASection';
import Link from 'next/link';

export const metadata = {
  title: 'Services — WINBOX',
  description: 'Premium Next.js websites, branding, and growth marketing engineered for conversion.',
};

const services = [
  {
    title: 'Premium Websites (Next.js)',
    what: 'Flagship marketing and product experiences built on Next.js 14 with TypeScript, edge performance, and SEO baked in.',
    outcomes: ['Conversion-first UX', 'Fast Core Web Vitals', 'SEO-ready architecture', 'Analytics + experimentation'],
    ideal: 'Teams that need a premium launch or a rebuild that actually converts.',
  },
  {
    title: 'Branding & Identity',
    what: 'Futuristic design language, messaging, and visual systems that translate to product and marketing.',
    outcomes: ['Distinctive identity', 'Robust design kit', 'Story and tone system', 'Launch assets'],
    ideal: 'Founders and marketing leaders who want a confident, cohesive presence.',
  },
  {
    title: 'Digital Marketing & Growth',
    what: 'Meta and Google ads paired with CRO, funnel builds, and creative iterations to drive profitable growth.',
    outcomes: ['ROAS-first ad strategy', 'Landing page sprints', 'Lead nurturing flows', 'Conversion rate lifts'],
    ideal: 'Brands that want to scale while protecting CAC and LTV.',
  },
];

const faqs = [
  {
    q: 'How fast can you launch?',
    a: 'Most flagship pages launch in 4–6 weeks including design, build, and QA. We also offer two-week sprints for focused outcomes.',
  },
  {
    q: 'Do you only work with SaaS?',
    a: 'SaaS is a sweet spot, but we also partner with fintech, mobility, retail, and venture funds that value premium digital.',
  },
  {
    q: 'What makes the builds fast?',
    a: 'We use Next.js 14 App Router, no heavy CMS, optimized images, edge caching, and obsessive QA for Core Web Vitals.',
  },
  {
    q: 'Can you handle ongoing growth?',
    a: 'Yes. We manage paid media, iterate on landing pages, and run CRO experiments with transparent reporting.',
  },
  {
    q: 'How do we start?',
    a: 'Send a WhatsApp note with your goals. We respond within 24h with a quick fit check and a crisp plan.',
  },
];

export default function ServicesPage() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-neonBlue">Services</p>
        <h1 className="text-4xl sm:text-5xl font-semibold text-white">Precision services engineered for ROI.</h1>
        <p className="text-lg text-gray-300 max-w-3xl">
          WINBOX blends design, engineering, and growth marketing. Each engagement is outcomes-driven and shipped by a senior crew.
        </p>
        <div className="flex gap-3 flex-wrap">
          <Link
            href="https://wa.me/212676877273"
            className="rounded-2xl bg-gradient-to-r from-neonBlue to-electricPurple px-6 py-3 text-sm font-semibold text-black shadow-glow-blue"
          >
            WhatsApp the team
          </Link>
          <Link
            href="/portfolio"
            className="rounded-2xl border border-white/10 px-6 py-3 text-sm font-semibold text-white hover:border-neonBlue hover:text-neonBlue"
          >
            View proof
          </Link>
        </div>
      </section>

      <div className="grid gap-8">
        {services.map((service) => (
          <div key={service.title} className="blur-card rounded-3xl border border-white/10 p-6">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold text-white">{service.title}</h2>
                <p className="text-gray-300 text-sm max-w-2xl">{service.what}</p>
                <div className="flex flex-wrap gap-2 text-xs text-gray-200">
                  {service.outcomes.map((outcome) => (
                    <span key={outcome} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                      {outcome}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-400">Ideal for: {service.ideal}</p>
              </div>
              <Link
                href="https://wa.me/212676877273"
                className="inline-flex items-center gap-2 text-sm font-semibold text-neonBlue"
              >
                Discuss this →
              </Link>
            </div>
          </div>
        ))}
      </div>

      <section className="space-y-4">
        <h2 className="text-3xl font-semibold text-white">FAQs</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((item) => (
            <div key={item.q} className="blur-card rounded-3xl border border-white/10 p-5">
              <h3 className="text-lg font-semibold text-white">{item.q}</h3>
              <p className="mt-2 text-sm text-gray-300">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
