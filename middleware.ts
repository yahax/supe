import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  if (
    pathname.startsWith('/_next') ||
    pathname.includes('/api/') ||
    PUBLIC_FILE.test(pathname)
  ) return

  const locales = ['fr', 'ar']
  const hasLocale = locales.some((l) => pathname.startsWith(`/${l}`))
  if (!hasLocale) {
    const url = req.nextUrl.clone()
    url.pathname = `/fr${pathname}`
    return NextResponse.redirect(url)
  }
}
