export type CaseStudy = {
  slug: string;
  title: string;
  industry: string;
  location: string;
  summary: string;
  problem: string;
  approach: string;
  deliverables: string[];
  results: string[];
  tags: string[];
  stack: string[];
  image: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'elevate-commerce',
    title: 'Elevate Commerce',
    industry: 'Ecommerce',
    location: 'Dubai',
    summary: 'Scaled DTC revenue with performance creative and CRO sprints.',
    problem: 'Stalled revenue and low repeat purchase due to fragmented journeys.',
    approach: 'Mapped the funnel, rebuilt PDPs, and launched creative pods with weekly testing rhythms.',
    deliverables: ['UX audit', 'Shopify rebuild', 'Meta/Google ads', 'Analytics suite', 'Email flows'],
    results: ['+38% conversion lift', 'ROAS range 3.2-4.1', 'AOV up 22%'],
    tags: ['Growth', 'Ecommerce', 'Paid Media'],
    stack: ['Next.js', 'Shopify', 'GA4', 'Meta Ads'],
    image: '/images/winbox-case-1.webp'
  },
  {
    slug: 'saas-velocity',
    title: 'Velocity SaaS',
    industry: 'B2B SaaS',
    location: 'Amsterdam',
    summary: 'Positioned and relaunched a B2B SaaS with crisp storytelling.',
    problem: 'Crowded market with unclear differentiation and weak demo pipeline.',
    approach: 'Ran positioning sprints, rewrote narrative, rebuilt site, and layered intent media.',
    deliverables: ['Brand system', 'Website rebuild', 'SEO foundations', 'ABM ads', 'Product storytelling'],
    results: ['SQLs up 2.4x', 'Time-to-ship pages cut by 60%', 'Demo win-rate +14%'],
    tags: ['Branding', 'SaaS', 'Strategy'],
    stack: ['Next.js', 'HubSpot', 'Clearbit', 'Figma'],
    image: '/images/winbox-case-2.webp'
  },
  {
    slug: 'fintech-trust',
    title: 'Fintech Trust',
    industry: 'Fintech',
    location: 'London',
    summary: 'Created trust-first acquisition engine for a fintech scale-up.',
    problem: 'Low trust and high CPA across regulated markets with legacy tracking.',
    approach: 'Rebuilt the site IA, shipped credibility assets, and rebuilt tracking pipelines.',
    deliverables: ['Modular website', 'CRO testing', 'Compliance-ready content', 'Server-side tracking', 'Analytics training'],
    results: ['CPA down 28%', 'Lead quality up 31%', 'Activation rate +18%'],
    tags: ['Analytics', 'CRO', 'Paid Media'],
    stack: ['Next.js', 'Segment', 'Looker', 'Google Ads'],
    image: '/images/winbox-case-3.webp'
  }
];

export const getCaseStudyBySlug = (slug: string) =>
  caseStudies.find((caseStudy) => caseStudy.slug === slug);
