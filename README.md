# WINBOX — Agence digitale premium

Site Next.js 15 (App Router) + TypeScript strict + Tailwind. Inclut Auth.js (NextAuth v5), Vercel AI SDK v3 (streaming), dashboard protégé et outils IA.

## Prérequis
- Node.js 20+
- pnpm / npm / yarn

## Installation
```bash
pnpm install
```

## Développement
```bash
pnpm dev
```

## Build
```bash
pnpm build
```

## Variables d'environnement
Créer un fichier `.env.local` :
```
NODE_ENV=development
NEXT_PUBLIC_APP_URL=http://localhost:3000
AUTH_SECRET=changeme-super-secret
OPENAI_API_KEY=sk-xxxx
AI_PROVIDER=openai
AI_MODEL=gpt-4o
```

## Authentification
- Credentials mockées :
  - admin@winbox.ma / admin123
  - client@winbox.ma / client123
- Les routes `/dashboard` sont protégées via `middleware.ts` (roles admin, client).

## Déploiement Vercel
- Configurer les variables d'environnement ci-dessus dans Vercel.
- Activer Edge Runtime si nécessaire pour les routes AI.
- Vérifier que le dossier `public/images` contient vos assets .webp réels.

## Sécurité
- Headers CSP/Referrer/X-Frame définis dans `middleware.ts` (adapter si besoin de providers tiers).

## UI & Design System
- Dark-mode first, gradients organiques, micro-animations Framer Motion.
- Composants réutilisables dans `components/ui`.
