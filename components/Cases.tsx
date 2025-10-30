import Section from './Section'

export default function Cases({ t }: any) {
  const items = [
    { title: 'Refonte eCommerce & +48% CA', kpis: ['+48% CA 90j', 'LCP 1.7s', 'CTR +22%'] },
    { title: 'Leadgen B2B à coût -37%', kpis: ['CPL -37%', 'Conv. x2.4'] }
  ]
  return (
    <Section id="cases">
      <h2 className="text-2xl md:text-3xl font-bold mb-2">{t.cases.title}</h2>
      <p className="text-gray-600 mb-8">{t.cases.subtitle}</p>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((c, i) => (
          <div key={i} className="card p-6">
            <h3 className="font-semibold mb-3">{c.title}</h3>
            <ul className="text-gray-600 list-disc pl-5">
              {c.kpis.map((k, j) => <li key={j}>{k}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
