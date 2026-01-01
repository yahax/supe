import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Palette, PenLine, Rocket, Search, Sparkles } from "lucide-react";

const tools = [
  { name: "Ads Generator", icon: Rocket, description: "Angles, hooks et scripts vidéo en quelques prompts." },
  { name: "SEO Analyzer", icon: Search, description: "Score sémantique, clusters et optimisations instantanées." },
  { name: "Creative Brief Generator", icon: Palette, description: "Briefs motion/design guidés par la data et votre brandbook." },
  { name: "Content Writer", icon: PenLine, description: "Narratives multilingues optimisées pour chaque canal." },
];

export default function AIToolsPage() {
  return (
    <div className="section-shell space-y-10">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.2em] text-white/50">AI Tools</p>
        <h1 className="text-3xl font-bold">Zero-UI : dévoilez les options uniquement quand c'est utile.</h1>
        <p className="max-w-3xl text-white/70">
          Les outils s'empilent : prompts pré-chargés, sliders minimalistes et affichage progressif. Chaque action peut être automatisée via API.
        </p>
      </div>
      <div className="grid-soft">
        {tools.map((tool) => (
          <Card key={tool.name} className="space-y-3">
            <div className="flex items-center gap-2 text-accent">
              <tool.icon className="h-5 w-5" />
              <p className="text-sm font-semibold">{tool.name}</p>
            </div>
            <p className="text-sm text-white/70">{tool.description}</p>
            <div className="flex justify-between text-xs text-white/60">
              <span>Streaming</span>
              <span>Templates</span>
              <span>Human-in-the-loop</span>
            </div>
            <Button variant="ghost" className="w-full">
              Préparer un prompt <ArrowRight className="h-4 w-4" />
            </Button>
          </Card>
        ))}
      </div>
      <div className="soft-card flex items-center justify-between gap-4 p-6">
        <div>
          <p className="text-sm uppercase tracking-[0.12em] text-white/50">Interop</p>
          <h2 className="text-xl font-semibold">Connecté à vos outils (Notion, Figma, Slack).</h2>
          <p className="text-sm text-white/70">API route /api/ai/tools prête pour orchestrer vos flux.</p>
        </div>
        <Button>
          Brancher mon stack <Sparkles className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
