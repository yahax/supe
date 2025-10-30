import Section from './Section'

export default function Services({ t }: any) {
  return (
    <Section id="services">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">{t.services.title}</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {t.services.items.map((s: any, i: number) => (
          <div key={i} className="card p-6">
            <div className="text-3xl mb-3">{s.icon}</div>
            <h3 className="font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
