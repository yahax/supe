import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Section from '@/components/Section'
import type { Locale } from '@/lib/i18n'
import { copy } from '@/lib/content'

export default function RealisationsPage({ params }: { params: { locale: Locale } }) {
  const t = copy[params.locale]
  return (
    <>
      <Header t={t} locale={params.locale} />
      <Section>
        <h1 className="text-3xl font-bold mb-6">{t.nav.cases}</h1>
        <p className="text-gray-600">Grille filtrable des études de cas (à implémenter).</p>
      </Section>
      <Footer />
    </>
  )
}
