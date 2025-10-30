import Section from './Section'

export default function CtaBanner({ t }: any) {
  return (
    <Section>
      <div className="card p-8 text-center">
        <p className="text-lg mb-4">{t.cta.text}</p>
        <a href="https://wa.me/212676877273" className="btn btn-primary">WhatsApp</a>
      </div>
    </Section>
  )
}
