const services = [
  {
    label: 'Création de sites web',
    description: 'Sites vitrines et pages de vente rapides, modernes et pensés pour la conversion.',
    bullets: [
      'Design sur-mesure, responsive et premium',
      'Intégration SEO-friendly dès la base',
      'Connexion tracking (Pixel, GA4, etc.)'
    ]
  },
  {
    label: 'Publicités Meta & Google Ads',
    description: 'Stratégies d’acquisition orientées ROAS pour générer des ventes, pas seulement des clics.',
    bullets: [
      'Structure de campagnes intelligente',
      'Créatifs adaptés 9:16, 1:1, 16:9',
      'Optimisation continue des résultats'
    ]
  },
  {
    label: 'Design & Identité visuelle',
    description: 'Visuels, packs et univers graphiques cohérents qui donnent une vraie valeur perçue à la marque.',
    bullets: [
      'Visuels social media & ads',
      'Branding et mini chartes graphiques',
      'Mockups et présentations premium'
    ]
  }
];

const processSteps = [
  {
    step: 1,
    title: 'Audit & stratégie',
    description:
      'Compréhension de votre activité, de votre offre et de vos objectifs pour définir la bonne structure digitale.'
  },
  {
    step: 2,
    title: 'Conception & design',
    description: 'Wireframes, maquettes et univers visuel premium en mode dark, clair et lisible.'
  },
  {
    step: 3,
    title: 'Mise en ligne & campagnes',
    description: 'Déploiement du site, configuration des pixels et lancement de campagnes Meta/Google Ads.'
  },
  {
    step: 4,
    title: 'Optimisation continue',
    description: 'Analyse des données, amélioration des pages et des ads pour augmenter le ROI.'
  }
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      <section className="relative overflow-hidden section-spacing">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-10 top-10 h-64 w-64 rounded-full bg-accent-primary/20 blur-3xl" />
          <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-accent-secondary/20 blur-3xl" />
        </div>
        <div className="mx-auto max-w-screen-xl px-6">
          <div className="mb-10 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-text-secondary backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-accent-primary" />
            <span>Agence premium basée à Rabat, clients partout au Maroc</span>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="glass-card gradient-border relative col-span-7 flex flex-col gap-6 rounded-xl p-10 shadow-soft">
              <p className="text-sm uppercase tracking-tightest text-text-secondary">Winbox.ma</p>
              <h1 className="font-heading text-[clamp(40px,4vw,56px)] leading-tight tracking-tightest">
                Création de sites web, publicités digitales et design premium.
              </h1>
              <p className="text-lg text-text-secondary">
                Winbox.ma accompagne les marques et entrepreneurs marocains avec des sites rapides, des campagnes Meta & Google Ads
                optimisées et des visuels qui donnent envie de cliquer.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="rounded-full bg-primary-gradient px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.02]"
                >
                  Planifier un appel
                </a>
                <a
                  href="#portfolio"
                  className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-accent-primary hover:text-accent-primary"
                >
                  Voir nos réalisations
                </a>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3 text-sm text-text-secondary">
                <div className="rounded-lg border border-white/5 bg-white/5 px-4 py-3">Basé à Rabat – clients partout au Maroc</div>
                <div className="rounded-lg border border-white/5 bg-white/5 px-4 py-3">Spécialiste Meta & Google Ads orienté ROI</div>
                <div className="rounded-lg border border-white/5 bg-white/5 px-4 py-3">Design premium pensé pour la conversion</div>
              </div>
            </div>
            <div className="relative col-span-5 rounded-xl bg-gradient-to-br from-white/5 to-white/0 p-6 shadow-soft">
              <div className="glass-card h-full rounded-2xl p-6">
                <div className="mb-6 flex items-center justify-between text-sm text-text-secondary">
                  <span>Dashboard Ads</span>
                  <span className="rounded-full bg-accent-primary/20 px-3 py-1 text-accent-primary">ROI +184%</span>
                </div>
                <div className="space-y-4 rounded-2xl bg-surface/70 p-4 shadow-soft">
                  <div className="flex items-center justify-between rounded-lg border border-white/5 bg-white/5 p-3">
                    <div>
                      <p className="text-sm text-text-secondary">Meta Ads</p>
                      <p className="text-lg font-semibold">+68% conversions</p>
                    </div>
                    <span className="rounded-full bg-accent-primary/20 px-3 py-1 text-sm text-accent-primary">Active</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-white/5 bg-white/5 p-3">
                    <div>
                      <p className="text-sm text-text-secondary">Google Ads</p>
                      <p className="text-lg font-semibold">CPC -32%</p>
                    </div>
                    <span className="rounded-full bg-accent-secondary/20 px-3 py-1 text-sm text-accent-secondary">Optimisation</span>
                  </div>
                  <div className="rounded-lg border border-white/5 bg-white/5 p-4">
                    <p className="text-sm text-text-secondary">Mockup site web</p>
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      {['Hero', 'Services', 'Conversions'].map((item) => (
                        <div key={item} className="rounded-lg bg-background px-3 py-6 text-center text-sm text-text-secondary">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section-spacing">
        <div className="mx-auto max-w-screen-xl px-6">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm uppercase tracking-tightest text-accent-secondary">Nos services</p>
            <h2 className="mt-2 font-heading text-[clamp(28px,3vw,36px)] leading-tight">
              Ce que nous faisons pour booster votre business
            </h2>
            <p className="mt-3 text-text-secondary">
              Des prestations coordonnées pour obtenir des résultats concrets : trafic qualifié, pages qui convertissent et une image
              de marque premium.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.label} className="glass-card gradient-border rounded-xl p-6 shadow-soft">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent-primary/10 px-3 py-1 text-sm text-accent-primary">
                  <span className="h-2 w-2 rounded-full bg-accent-primary" />
                  {service.label}
                </div>
                <p className="text-lg font-semibold">{service.label}</p>
                <p className="mt-2 text-text-secondary">{service.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-text-secondary">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-accent-secondary" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="section-spacing">
        <div className="mx-auto max-w-screen-xl px-6">
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-tightest text-accent-secondary">Process</p>
              <h2 className="mt-2 font-heading text-[clamp(28px,3vw,36px)] leading-tight">
                Une méthode simple, claire et orientée résultats
              </h2>
            </div>
            <p className="max-w-2xl text-text-secondary">
              Une feuille de route maîtrisée pour passer de l’audit à l’optimisation continue, sans perdre de temps ni de budget.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {processSteps.map((step) => (
              <div key={step.step} className="glass-card gradient-border rounded-xl p-6 shadow-soft">
                <div className="mb-3 flex items-center gap-3 text-sm text-text-secondary">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-primary/10 text-accent-primary">
                    {step.step}
                  </span>
                  <p className="font-semibold text-white">{step.title}</p>
                </div>
                <p className="text-text-secondary">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="section-spacing">
        <div className="mx-auto max-w-screen-xl px-6">
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-tightest text-accent-secondary">Portfolio</p>
              <h2 className="mt-2 font-heading text-[clamp(28px,3vw,36px)] leading-tight">
                Quelques projets et univers que nous avons façonnés
              </h2>
            </div>
            <p className="max-w-xl text-text-secondary">
              Prévoir cartes projets avec visuels plein écran, hover glass + glow, et tags (Site web, Ads, Branding, etc.).
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-6 shadow-soft">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 via-transparent to-accent-secondary/20 opacity-0 transition group-hover:opacity-100" />
                <div className="relative flex h-40 items-center justify-center rounded-xl bg-surface/50 text-text-secondary">
                  Visuel projet #{item}
                </div>
                <div className="relative mt-4 flex items-center justify-between text-sm text-text-secondary">
                  <span className="rounded-full bg-accent-primary/10 px-3 py-1 text-accent-primary">Site web</span>
                  <span className="rounded-full bg-accent-secondary/10 px-3 py-1 text-accent-secondary">Ads</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section-spacing">
        <div className="mx-auto max-w-screen-xl px-6">
          <div className="glass-card rounded-2xl p-8 shadow-soft">
            <p className="text-sm uppercase tracking-tightest text-accent-secondary">À propos</p>
            <h2 className="mt-2 font-heading text-[clamp(28px,3vw,36px)] leading-tight">À propos de Winbox.ma</h2>
            <div className="mt-4 space-y-3 text-text-secondary">
              <p>
                Winbox.ma est une structure spécialisée dans la création de sites web performants, la publicité digitale (Meta & Google Ads)
                et le design premium.
              </p>
              <p>
                Nous travaillons principalement avec des entrepreneurs, e-commerçants et marques marocaines qui veulent une présence digitale
                claire, moderne et orientée résultats.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-spacing">
        <div className="mx-auto max-w-screen-xl px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-tightest text-accent-secondary">Contact</p>
              <h2 className="font-heading text-[clamp(28px,3vw,36px)] leading-tight">Parlons de votre projet</h2>
              <p className="text-text-secondary">
                Expliquez votre activité, votre offre et votre objectif principal. Nous revenons vers vous avec une proposition claire.
              </p>
              <div className="grid gap-3 text-text-secondary">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-accent-primary" />
                  Sites web, publicités digitales et design premium.
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-accent-secondary" />
                  Basé à Rabat, disponible partout au Maroc.
                </div>
              </div>
            </div>
            <form className="glass-card rounded-2xl p-6 shadow-soft">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-text-secondary" htmlFor="nom_prenom">
                    Nom & prénom
                  </label>
                  <input
                    id="nom_prenom"
                    name="nom_prenom"
                    className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-accent-primary"
                    placeholder="Votre nom complet"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-text-secondary" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-accent-primary"
                    placeholder="vous@exemple.com"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-text-secondary" htmlFor="telephone">
                    Téléphone
                  </label>
                  <input
                    id="telephone"
                    name="telephone"
                    className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-accent-primary"
                    placeholder="+212..."
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-text-secondary" htmlFor="type_projet">
                    Type de projet
                  </label>
                  <select
                    id="type_projet"
                    name="type_projet"
                    className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-accent-primary"
                  >
                    <option>Site web</option>
                    <option>Publicités Meta & Google Ads</option>
                    <option>Design & identité visuelle</option>
                    <option>Pack complet</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-text-secondary" htmlFor="budget_estime">
                    Budget estimé
                  </label>
                  <select
                    id="budget_estime"
                    name="budget_estime"
                    className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-accent-primary"
                  >
                    <option>Moins de 10 000 MAD</option>
                    <option>10 000 - 25 000 MAD</option>
                    <option>25 000 - 50 000 MAD</option>
                    <option>50 000 MAD et plus</option>
                  </select>
                </div>
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <label className="text-sm text-text-secondary" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-accent-primary"
                  placeholder="Parlez-nous de votre activité, vos objectifs, vos délais..."
                />
              </div>
              <button
                type="submit"
                className="mt-6 w-full rounded-full bg-primary-gradient px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.01]"
              >
                Envoyer ma demande
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
