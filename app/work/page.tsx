import Image from 'next/image';
import Link from 'next/link';
import { caseStudies } from '@/lib/case-studies';

export const metadata = {
  title: 'Work | WINBOX.MA',
  description: 'Select case studies from WINBOX.MA across ecommerce, SaaS, fintech, and global brands.'
};

export default function WorkPage() {
  return (
    <div className="section-shell py-16 space-y-6">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.25em] text-accent">Work</p>
        <h1 className="text-4xl font-semibold">Proof across industries</h1>
        <p className="text-lg text-white/70 max-w-3xl">
          We focus on metrics, compounding growth, and durable brand presence. These snapshots show typical scopes and results ranges.
        </p>
      </div>
      <div className="card-surface overflow-hidden">
        <Image src="/images/winbox-proof.webp" alt="Proof" width={1400} height={720} className="w-full h-80 object-cover" />
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {caseStudies.map((item) => (
          <Link key={item.slug} href={`/work/${item.slug}`} className="card-surface p-4 hover:-translate-y-1 transition block">
            <div className="overflow-hidden rounded-xl border border-white/5">
              <Image src={item.image} alt={item.title} width={800} height={600} className="h-40 w-full object-cover" />
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
    </div>
  );
}
