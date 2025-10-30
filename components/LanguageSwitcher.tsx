'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function LanguageSwitcher({ locale }: { locale: 'fr' | 'ar' }) {
  const pathname = usePathname()
  const other = locale === 'fr' ? 'ar' : 'fr'
  const swapped = `/${other}${pathname?.replace(/^\/(fr|ar)/, '') ?? ''}`
  return (
    <Link className="btn btn-ghost" href={swapped}>{other.toUpperCase()}</Link>
  )
}
