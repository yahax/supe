/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { typedRoutes: true },
  i18n: {
    locales: ['fr', 'ar'],
    defaultLocale: 'fr'
  }
}

export default nextConfig
