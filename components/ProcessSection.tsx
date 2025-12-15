const steps = [
  {
    title: 'Discovery',
    description: 'Rapid clarity on objectives, audience, and the KPIs that matter. Workshops + analytics review.',
  },
  {
    title: 'Design',
    description: 'Futuristic interface + identity language with prototypes to validate narrative and flow.',
  },
  {
    title: 'Build',
    description: 'Next.js 14, edge-ready architecture, CMS-less speed, SEO-first and analytics wired.',
  },
  {
    title: 'Growth',
    description: 'Meta/Google ads, CRO, and retention loops to scale with measurable ROI.',
  },
];

export default function ProcessSection() {
  return (
    <section className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-neonBlue">Process</p>
        <h2 className="text-3xl sm:text-4xl font-semibold text-white">How we move</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-4">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="blur-card rounded-3xl border border-white/10 p-5 transition duration-200 hover:-translate-y-1 hover:border-neonBlue/50"
          >
            <div className="text-sm text-neonBlue mb-2">0{index + 1}</div>
            <h3 className="text-lg font-semibold text-white">{step.title}</h3>
            <p className="mt-2 text-sm text-gray-300">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
