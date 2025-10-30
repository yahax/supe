import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Section from '@/components/Section'
import { copy } from '@/lib/content'
import type { Locale } from '@/lib/i18n'

export default function ServicesPage({ params }: { params: { locale: Locale } }) {
  const t = copy[params.locale]
  return (
    <>
      <Header t={t} locale={params.locale} />
      <Section>
        <h1 className="text-3xl font-bold mb-6">{t.nav.services}</h1>
        <p className="text-gray-600">Détails des offres, livrables, SLA, etc.</p>
      </Section>
      <Footer />
    </>
  )
}
