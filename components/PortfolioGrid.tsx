import Link from 'next/link';

const projects = [
  { title: 'Astra Fintech', category: 'Web', result: '30% uplift in demo requests', tags: ['Next.js', 'CRO'] },
  { title: 'Pulse Identity', category: 'Branding', result: 'New identity & design system', tags: ['Identity', 'Design'] },
  { title: 'Volt Mobility', category: 'Web', result: '0.8s LCP at launch', tags: ['Performance', 'SEO'] },
  { title: 'Nova SaaS', category: 'Ads', result: 'ROAS 5.1 on paid social', tags: ['Meta Ads', 'Funnels'] },
  { title: 'Lumen AI', category: 'Web', result: '+42% activation rate', tags: ['Product', 'UX'] },
  { title: 'Arcade Retail', category: 'Branding', result: 'Retail-to-digital pivot', tags: ['Brand', 'Campaign'] },
];

export default function PortfolioGrid({ showCta = true }: { showCta?: boolean }) {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-neonBlue">Portfolio</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Results we ship</h2>
        </div>
        {showCta && (
          <Link href="/portfolio" className="text-sm text-neonBlue hover:text-white transition-colors">
            View portfolio →
          </Link>
        )}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="blur-card glow-border rounded-3xl border border-white/10 p-6 transition duration-200 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between text-sm text-gray-400">
              <span>{project.category}</span>
              <span className="text-xs rounded-full bg-white/5 px-3 py-1 text-neonBlue">{project.tags[0]}</span>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-2 text-sm text-gray-300">{project.result}</p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-400">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      {showCta && (
        <div className="text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:border-neonBlue hover:text-neonBlue"
          >
            Open portfolio →
          </Link>
        </div>
      )}
    </section>
  );
}
