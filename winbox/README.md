# WINBOX — Site Next.js 14

Site marketing premium pour l'agence WINBOX, construit avec Next.js 14 App Router, TypeScript et Tailwind CSS.

## Setup

```bash
npm install
npm run dev
```

### Variables d'environnement

Créer un fichier `.env.local` (voir `.env.example` ci-dessous) :

```
NEXT_PUBLIC_GA4=G-XXXXXXXX
NEXT_PUBLIC_META_PIXEL=1234567890
RESEND_API_KEY= # optionnel pour l'emailing
```

## Scripts

- `npm run dev` : démarrage local en mode développement
- `npm run build` : build production
- `npm run start` : lancement du serveur
- `npm run lint` : linting TypeScript/ESLint

## Déploiement

Déployer sur [Vercel](https://vercel.com) :

1. Créer un projet en important ce repository.
2. Configurer les variables d'environnement.
3. Activer les previews par branche.

## Checklist Qualité

- [ ] Lighthouse ≥ 95 (Performance, SEO, Accessibilité, Best Practices)
- [ ] i18n FR/AR complet + hreflang OK + RTL sans bug
- [ ] Core Web Vitals : LCP < 2s, CLS < 0.05, TTI < 2.5s
- [ ] Formulaire /api/contact opérationnel + message succès i18n
- [ ] CTA WhatsApp sticky mobile (wa.me/212676877273)
- [ ] Sitemap + robots + Open Graph valides (Meta Inspector)
- [ ] Études de cas visibles au 1er écran avec KPIs
- [ ] No-console/no-any en CI (ESLint) ; build sans warning

### Lighthouse CI (local)

```bash
npx @lhci/cli autorun
```

## TODO

- [ ] Intégrer Resend pour envoyer les leads par email (`app/api/contact/route.ts`).
- [ ] Implémenter le Consent Mode une fois la CMP prête.
- [ ] Ajouter de vraies images/avatars dans `public/logos`.
