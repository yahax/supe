'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Section from '@/components/Section'
import type { Locale } from '@/lib/i18n'
import { copy } from '@/lib/content'
import { useState } from 'react'

export default function ContactPage({ params }: { params: { locale: Locale } }) {
  const t = copy[params.locale]
  const [status, setStatus] = useState<string>('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    const res = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
    setStatus(res.ok ? t.contact.success : 'Erreur, réessayez.')
    if (res.ok) form.reset()
  }

  return (
    <>
      <Header t={t} locale={params.locale} />
      <Section>
        <h1 className="text-3xl font-bold mb-6">{t.contact.title}</h1>
        <form onSubmit={onSubmit} className="grid gap-4 max-w-xl">
          <input name="nom" placeholder="Nom" className="border rounded-lg p-3" required />
          <input name="email" type="email" placeholder="Email" className="border rounded-lg p-3" required />
          <input name="telephone" placeholder="Téléphone" className="border rounded-lg p-3" />
          <select name="type_projet" className="border rounded-lg p-3">
            <option>Site Web</option>
            <option>Branding</option>
            <option>Growth</option>
          </select>
          <select name="budget" className="border rounded-lg p-3">
            <option>Moins de 10 000 MAD</option>
            <option>10 000 – 30 000 MAD</option>
            <option>30 000 – 80 000 MAD</option>
            <option>80 000+ MAD</option>
          </select>
          <textarea name="message" placeholder="Votre message" className="border rounded-lg p-3" rows={5} />
          <button className="btn btn-primary" type="submit">Envoyer</button>
          {status && <p className="text-green-600">{status}</p>}
        </form>
      </Section>
      <Footer />
    </>
  )
}
