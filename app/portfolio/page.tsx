import CTASection from '@/components/CTASection';
import PortfolioGrid from '@/components/PortfolioGrid';

export const metadata = {
  title: 'Portfolio — WINBOX',
  description: 'Selected outcomes from WINBOX: premium websites, branding, and growth wins.',
};

const filters = ['All', 'Web', 'Branding', 'Ads'];

export default function PortfolioPage() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-neonBlue">Portfolio</p>
        <h1 className="text-4xl sm:text-5xl font-semibold text-white">Flagship work with measurable results.</h1>
        <p className="text-lg text-gray-300 max-w-3xl">
          A sample of recent launches and growth plays across SaaS, fintech, retail, and venture.
        </p>
        <div className="flex flex-wrap gap-2 text-xs text-gray-200">
          {filters.map((filter) => (
            <span key={filter} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              {filter}
            </span>
          ))}
        </div>
      </section>

      <PortfolioGrid showCta={false} />

      <CTASection />
    </div>
  );
}
