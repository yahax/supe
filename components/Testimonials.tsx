import Section from './Section'

export default function Testimonials({ t }: any) {
  const items = [
    { author: 'A. El Amrani', role: 'CEO, Retail', quote: 'Equipe ultra-pro, site rapide et net. Reporting actionnable.' },
    { author: 'S. Rahali', role: 'Founder, Beauty', quote: 'Branding premium + ads rentables en 30 jours. On recommande.' }
  ]
  return (
    <Section>
      <h2 className="text-2xl md:text-3xl font-bold mb-8">{t.testimonials.title}</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((i, idx) => (
          <blockquote key={idx} className="card p-6">
            <p className="mb-3">“{i.quote}”</p>
            <cite className="text-sm text-gray-500">{i.author} — {i.role}</cite>
          </blockquote>
        ))}
      </div>
    </Section>
  )
}
