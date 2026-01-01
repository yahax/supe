import { CheckCircle2, Palette, Rocket, Shield, Sparkles, Target, Workflow } from "lucide-react";

export const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/ai", label: "AI" },
  { href: "/about", label: "Agence" },
  { href: "/contact", label: "Contact" },
];

export const proofPoints = [
  { label: "ROI moyen", value: "+326%", image: "/images/home/proof-1.webp" },
  { label: "Temps de lancement", value: "14 jours", image: "/images/home/proof-2.webp" },
  { label: "Taux de rétention", value: "92%", image: "/images/home/proof-3.webp" },
];

export const services = [
  {
    title: "Website Creation",
    description: "Sites premium, optimisés pour la conversion et animés au pixel près.",
    icon: Sparkles,
    image: "/images/services/web.webp",
  },
  {
    title: "Meta Ads",
    description: "Acquisition multi-segments avec des créas générées par l'IA.",
    icon: Target,
    image: "/images/services/metaads.webp",
  },
  {
    title: "Google Ads",
    description: "Intent marketing précis avec mesure temps réel et SKAG 2.0.",
    icon: Rocket,
    image: "/images/services/googleads.webp",
  },
  {
    title: "Premium Design",
    description: "Identités organiques, UI anti-grid et motion narratives immersives.",
    icon: Palette,
    image: "/images/services/design.webp",
  },
];

export const portfolioItems = [
  { title: "Helios Mobility", tag: "Web & Growth", image: "/images/portfolio/p1.webp" },
  { title: "Atlas Finance", tag: "Brand & Product", image: "/images/portfolio/p2.webp" },
  { title: "Mare Nostrum", tag: "Campaign", image: "/images/portfolio/p3.webp" },
];

export const pricing = [
  {
    name: "Starter",
    price: "1.9K",
    description: "Pour valider un lancement rapide avec une équipe senior.",
    features: ["Landing one-page", "Prototype motion", "Stack Next.js + Tailwind", "Support Slack"]
  },
  {
    name: "Growth",
    price: "4.9K",
    description: "Accélération CAC/LTV avec pilotage data et IA créative.",
    features: ["Site multi-pages", "Stratégie média", "Reporting AI", "Run hebdo"]
  },
  {
    name: "Elite",
    price: "9.9K",
    description: "Escalade internationale avec war room dédiée et sécurité avancée.",
    features: ["Design system", "Orchestration multi-pays", "Squad dédiée", "SLA 24/7"]
  }
];

export const faqs = [
  { question: "Comment se déroule un onboarding ?", answer: "En 72h, nous cadrons objectifs, persona et parcours. Kick-off live avec accès dashboard." },
  { question: "Pouvez-vous gérer nos assets existants ?", answer: "Oui, nous auditons, consolidons et animons vos assets dans l'espace client sécurisé." },
  { question: "Comment fonctionne l'IA dans vos process ?", answer: "Chaque livrable est co-piloté par des prompts propriétaires, supervisés par nos leads." },
];

export const dashboardProjects = [
  { name: "Nova Retail", status: "En production", progress: 78 },
  { name: "FinFlow", status: "Discovery", progress: 32 },
];

export const dashboardTickets = [
  { title: "Nouvelle campagne Meta Q4", severity: "High", status: "Ouvert" },
  { title: "Mise à jour charter UI", severity: "Medium", status: "En cours" },
];

export const dashboardAssets = [
  { name: "Brand kit v3", type: "Design", size: "24MB" },
  { name: "Media pack", type: "Ads", size: "58MB" },
];

export const benefits = [
  { title: "Squad senior", icon: Shield, description: "Lead tech + lead media + lead design pour chaque mission." },
  { title: "Zero-drift process", icon: Workflow, description: "Cercles hebdo, QA AI, et checklists SOC2-friendly." },
  { title: "Performance native", icon: CheckCircle2, description: "Sites notés 95+ et campagnes calibrées sur le ROAS." },
];
