import CTASection from '@/components/CTASection';
import Link from 'next/link';

export const metadata = {
  title: 'About — WINBOX',
  description: 'The story, values, and differentiators behind WINBOX.',
};

const values = [
  {
    title: 'Outcome obsessed',
    description: 'We tie every deliverable to a metric: conversion, LTV, speed, or brand equity.',
  },
  {
    title: 'Premium craft',
    description: 'Design language, typography, and motion are treated as performance levers.',
  },
  {
    title: 'Clear communication',
    description: 'Weekly rhythms, transparent roadmaps, and Figma/Notion visibility.',
  },
];

const differentiators = [
  'Senior-only team that ships fast.',
  'Next.js 14, TypeScript, and performance as defaults.',
  'Brand + growth under one roof.',
  'Direct WhatsApp access to leads.',
];

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-neonBlue">About</p>
        <h1 className="text-4xl sm:text-5xl font-semibold text-white">Built to deliver premium digital outcomes.</h1>
        <p className="text-lg text-gray-300 max-w-3xl">
          WINBOX exists for founders and marketing leaders who need flagship experiences without the agency drag. We combine a design studio mindset with performance rigor.
        </p>
        <Link
          href="https://wa.me/212676877273"
          className="inline-flex w-max rounded-2xl bg-gradient-to-r from-neonBlue to-electricPurple px-6 py-3 text-sm font-semibold text-black shadow-glow-blue"
        >
          WhatsApp the founders
        </Link>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-semibold text-white">Values we operate by</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="blur-card rounded-3xl border border-white/10 p-5">
              <h3 className="text-lg font-semibold text-white">{value.title}</h3>
              <p className="mt-2 text-sm text-gray-300">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-semibold text-white">What makes us different</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {differentiators.map((item) => (
            <div key={item} className="blur-card rounded-3xl border border-white/10 p-5 text-sm text-gray-200">
              {item}
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
