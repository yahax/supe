import CTASection from '@/components/CTASection';
import Hero from '@/components/Hero';
import PortfolioGrid from '@/components/PortfolioGrid';
import ProcessSection from '@/components/ProcessSection';
import ServicesSection from '@/components/ServicesSection';
import Link from 'next/link';

const trustPoints = ['Premium delivery', 'Performance obsessed', 'SEO ready', 'Mobile perfect', 'Conversion-led'];

export default function HomePage() {
  return (
    <div className="space-y-16">
      <Hero />

      <section className="section-shell p-6 sm:p-8">
        <div className="grid gap-4 sm:grid-cols-5 text-sm text-gray-200">
          {trustPoints.map((point) => (
            <div
              key={point}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center font-semibold tracking-tight"
            >
              {point}
            </div>
          ))}
        </div>
      </section>

      <ServicesSection />

      <PortfolioGrid />

      <ProcessSection />

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-neonBlue">Insights</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">Fresh from the lab</h2>
          </div>
          <Link href="/blog" className="text-sm text-neonBlue hover:text-white transition-colors">
            Read blog →
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3 text-sm text-gray-300">
          {["Launching faster with CMS-less stacks", "Brand systems that scale performance", "Designing for ROAS and LTV"].map(
            (item, idx) => (
              <div key={item} className="blur-card rounded-3xl border border-white/10 p-5">
                <div className="text-xs text-neonBlue">Insight 0{idx + 1}</div>
                <div className="mt-2 text-white text-lg font-semibold">{item}</div>
                <p className="mt-2 text-sm text-gray-300">Micro-guide from the WINBOX team.</p>
              </div>
            )
          )}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
