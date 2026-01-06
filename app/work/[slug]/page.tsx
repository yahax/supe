import Image from 'next/image';
import { notFound } from 'next/navigation';
import { caseStudies, getCaseStudyBySlug } from '@/lib/case-studies';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export function generateMetadata({ params }: Props) {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) return {};
  const title = `${study.title} | Work | WINBOX.MA`;
  return {
    title,
    description: study.summary,
    alternates: {
      canonical: `https://www.winbox.ma/work/${study.slug}`,
    },
    openGraph: {
      title,
      description: study.summary,
      url: `https://www.winbox.ma/work/${study.slug}`,
    },
  };
}

export default function CaseStudyPage({ params }: Props) {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) return notFound();

  return (
    <div className="section-shell py-16 space-y-8">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.25em] text-accent">Case Study</p>
        <h1 className="text-4xl font-semibold">{study.title}</h1>
        <p className="text-lg text-white/70 max-w-3xl">{study.summary}</p>
        <div className="flex gap-3 text-sm text-white/60">
          <span>{study.industry}</span>
          <span>•</span>
          <span>{study.location}</span>
        </div>
      </div>
      <div className="card-surface overflow-hidden">
        <Image src={study.image} alt={study.title} width={1400} height={780} className="w-full h-96 object-cover" />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="card-surface p-5 space-y-3">
          <h2 className="text-xl font-semibold">Problem</h2>
          <p className="text-white/70 text-sm leading-relaxed">{study.problem}</p>
          <h2 className="text-xl font-semibold">Approach</h2>
          <p className="text-white/70 text-sm leading-relaxed">{study.approach}</p>
        </div>
        <div className="card-surface p-5 space-y-3">
          <h2 className="text-xl font-semibold">Deliverables</h2>
          <div className="flex flex-wrap gap-2 text-sm text-white/80">
            {study.deliverables.map((item) => (
              <span key={item} className="rounded-full bg-white/5 px-3 py-1">
                {item}
              </span>
            ))}
          </div>
          <h2 className="text-xl font-semibold">Results (ranges)</h2>
          <ul className="space-y-1 text-sm text-white/70 list-disc list-inside">
            {study.results.map((result) => (
              <li key={result}>{result}</li>
            ))}
          </ul>
          <h2 className="text-xl font-semibold">Stack</h2>
          <div className="flex flex-wrap gap-2 text-sm text-white/80">
            {study.stack.map((item) => (
              <span key={item} className="rounded-full border border-white/15 px-3 py-1">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
