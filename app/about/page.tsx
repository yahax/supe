import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="section-shell space-y-12">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.2em] text-white/50">À propos</p>
        <h1 className="text-4xl font-bold">Une agence née dans le futur.</h1>
        <p className="max-w-3xl text-lg text-white/70">
          WINBOX est construite comme un cockpit : IA générative, design organique et squads seniors alignés sur la performance. Nous travaillons depuis Rabat avec des marques ambitieuses sur 3 continents.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-[1.2fr,0.8fr]">
        <div className="soft-card p-8 space-y-4">
          <h2 className="text-xl font-semibold">Story</h2>
          <p className="text-sm text-white/70">
            Nous avons passé 10 ans à shipper des produits et campagnes pour la fintech, le retail et l'éducation. En 2026, nous industrialisons nos méthodes en y injectant des modèles IA propriétaires et des narratives motion-first.
          </p>
          <p className="text-sm text-white/70">
            L'agence est structurée en cercles : Strategy, Design, Media, Engineering, AI Ops. Chaque mission traverse ces cercles avec un responsable unique et un dashboard temps réel.
          </p>
        </div>
        <div className="soft-card overflow-hidden">
          <Image src="/images/about/team.webp" alt="Equipe WINBOX" width={900} height={720} className="h-full w-full object-cover" />
          {/* TODO: Replace placeholder team image */}
        </div>
      </div>
    </div>
  );
}
