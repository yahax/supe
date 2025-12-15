import Link from 'next/link';

const services = [
  {
    title: 'Premium Websites',
    description: 'Next.js experiences engineered for speed, SEO, and conversion with purposeful storytelling.',
    cta: 'View builds',
    href: '/portfolio',
  },
  {
    title: 'Branding & Identity',
    description: 'Futuristic, confident brand systems with design language, tone, and launch-ready assets.',
    cta: 'See approach',
    href: '/about',
  },
  {
    title: 'Digital Marketing',
    description: 'Meta & Google ads paired with funnels and CRO to scale revenue efficiently.',
    cta: 'Scale growth',
    href: '/services',
  },
];

export default function ServicesSection() {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-neonBlue">Services</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">What we execute</h2>
        </div>
        <Link href="/services" className="text-sm text-neonBlue hover:text-white transition-colors">
          Full services →
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="blur-card glow-border flex flex-col justify-between rounded-3xl border border-white/10 p-6 transition-transform duration-200 hover:-translate-y-1"
          >
            <div className="space-y-3">
              <div className="text-sm text-gray-400">0{services.indexOf(service) + 1}</div>
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="text-gray-300 text-sm">{service.description}</p>
            </div>
            <Link href={service.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-neonBlue">
              {service.cta} <span aria-hidden>→</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
