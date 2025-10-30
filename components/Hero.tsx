import Section from './Section'

export default function Hero({ t, locale }: any) {
  return (
    <Section>
      <div className="grid md:grid-cols-2 items-center gap-10">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{t.hero.h1}</h1>
          <p className="text-lg text-gray-600 mb-6">{t.hero.sub}</p>
          <div className="flex gap-3">
            <a href={`https://wa.me/212676877273`} className="btn btn-primary">{t.hero.ctaPrimary}</a>
            <a href="#cases" className="btn btn-ghost">{t.hero.ctaSecondary}</a>
          </div>
        </div>
        <div className="card p-6 min-h-[260px] flex items-center justify-center">
          <span className="text-8xl">✨</span>
        </div>
      </div>
    </Section>
  )
}
