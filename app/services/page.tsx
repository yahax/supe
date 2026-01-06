'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import CTAButton from '@/components/cta-button';
import { icons } from '@/components/icons';

const serviceCards = [
  {
    name: 'Website Systems',
    category: 'Design',
    icon: 'web',
    outcomes: 'Conversion-first experiences, modular design, speed.',
    audience: 'Scale-ups, premium DTC, SaaS.',
    deliverables: ['UX audit', 'Copy system', 'Design system', 'Next.js build', 'SEO-ready architecture'],
    timeline: '6-10 weeks',
  },
  {
    name: 'Brand Strategy',
    category: 'Design',
    icon: 'branding',
    outcomes: 'Positioning clarity and a distinctive visual identity.',
    audience: 'Founders, CMOs, product leaders needing signal.',
    deliverables: ['Research sprints', 'Narrative decks', 'Identity kit', 'Messaging matrix'],
    timeline: '4-6 weeks',
  },
  {
    name: 'SEO Growth',
    category: 'Growth',
    icon: 'seo',
    outcomes: 'Intent capture with technical SEO + content sprints.',
    audience: 'Teams with strong product-market fit needing organic scale.',
    deliverables: ['Technical fixes', 'Content roadmap', 'Schema', 'Internal linking'],
    timeline: '12-16 weeks',
  },
  {
    name: 'Performance Media',
    category: 'Performance',
    icon: 'ads',
    outcomes: 'Meta/Google programs with creative iteration.',
    audience: 'Brands needing predictable CAC and global reach.',
    deliverables: ['Campaign architecture', 'Creative pods', 'Landing pages', 'Measurement'],
    timeline: 'Ongoing (monthly)',
  },
  {
    name: 'Creative Studio',
    category: 'Performance',
    icon: 'creative',
    outcomes: 'Ad creative, landing assets, motion, and UGC direction.',
    audience: 'Marketing teams needing constant variations.',
    deliverables: ['Concept sprints', 'Asset production', 'Hooks and scripts', 'QA and versioning'],
    timeline: '2-6 weeks cycles',
  },
  {
    name: 'CRO Programs',
    category: 'Growth',
    icon: 'cro',
    outcomes: 'Structured experimentation to unlock conversion.',
    audience: 'Ecommerce and SaaS funnels with traffic seeking lift.',
    deliverables: ['Research', 'Hypotheses backlog', 'Experiments', 'Analytics'],
    timeline: '8-12 weeks initial',
  },
  {
    name: 'Analytics & Tracking',
    category: 'Ops',
    icon: 'analytics',
    outcomes: 'Clean data, compliant tracking, and clarity dashboards.',
    audience: 'Global teams with fragmented tracking.',
    deliverables: ['Server-side tagging', 'Dashboards', 'Attribution design', 'QA playbooks'],
    timeline: '3-6 weeks',
  },
  {
    name: 'Automation & RevOps',
    category: 'Ops',
    icon: 'automation',
    outcomes: 'Operational efficiency with workflows and reporting.',
    audience: 'Growth teams needing speed without headcount.',
    deliverables: ['CRM automation', 'Lead routing', 'Alerts', 'Playbooks'],
    timeline: '4-8 weeks',
  },
];

const categories = ['All', 'Growth', 'Design', 'Performance', 'Ops'];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredServices = useMemo(() => {
    if (activeCategory === 'All') return serviceCards;
    return serviceCards.filter((service) => service.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="section-shell py-16 space-y-10">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.25em] text-accent">Services</p>
        <h1 className="text-4xl font-semibold">Growth, brand, and performance under one roof</h1>
        <p className="text-lg text-white/70 max-w-3xl">
          Select the shape of engagement that fits your roadmap. We blend strategy, design, engineering, media, and data to ship outcomes with speed.
        </p>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                activeCategory === category
                  ? 'border-accent bg-accent text-black'
                  : 'border-white/15 text-white/80 hover:border-white/40'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="card-surface overflow-hidden">
        <Image src="/images/winbox-services.webp" alt="Services" width={1400} height={700} className="w-full h-80 object-cover" />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filteredServices.map((service) => {
          const Icon = icons[service.icon as keyof typeof icons];
          return (
            <div key={service.name} className="card-surface p-6 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-white/5 p-2 text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold">{service.name}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/50">{service.category}</p>
                  </div>
                </div>
                <CTAButton href="/contact" label="Book" />
              </div>
              <p className="text-white/70 text-sm">{service.outcomes}</p>
              <p className="text-xs text-white/60">Who it’s for: {service.audience}</p>
              <div className="flex flex-wrap gap-2 text-xs text-white/80">
                {service.deliverables.map((item) => (
                  <span key={item} className="rounded-full bg-white/5 px-3 py-1">
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-sm text-white/60">Timeline: {service.timeline}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
