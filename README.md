# WINBOX.MA - Premium Digital Growth Studio

This repository contains a production-ready Next.js 16.1.1 + TypeScript + Tailwind CSS build for **WINBOX.MA**.

## Getting Started
1. Install dependencies
   ```bash
   npm install
   ```
2. Run the development server
   ```bash
   npm run dev
   ```
3. Build for production
   ```bash
   npm run build && npm start
   ```

## Assets
All images are local `.webp` placeholders. Replace them with real assets while keeping the filenames:
- `public/images/winbox-hero.webp`
- `public/images/winbox-services.webp`
- `public/images/winbox-proof.webp`
- `public/images/winbox-case-1.webp`
- `public/images/winbox-case-2.webp`
- `public/images/winbox-case-3.webp`
- `public/images/winbox-about.webp`
- `public/images/winbox-contact.webp`

Custom SVG icons live in `public/icons/` and are re-exported as React components from `components/icons.tsx`.

## Notes
- Path alias `@/*` is configured in `tsconfig.json`.
- Metadata, sitemap, robots, and JSON-LD are configured for SEO.
- The chatbot is fully local and requires no external APIs.
