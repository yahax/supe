import { Chat } from "@/components/ai/Chat";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function AIPage() {
  return (
    <div className="section-shell space-y-10">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.2em] text-white/50">AI Studio</p>
        <h1 className="text-3xl font-bold">Copilots pensés pour les équipes marketing & produit.</h1>
        <p className="max-w-2xl text-white/70">
          Streaming, zero-UI et templates propriétaires pour accélérer les campagnes, les briefs créa et l'analyse SEO.
        </p>
        <div className="flex gap-3">
          <Link href="/ai/tools" className="button-primary flex items-center gap-2">
            Explorer les outils <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/contact" className="button-ghost flex items-center gap-2">
            Demo live <Sparkles className="h-4 w-4" />
          </Link>
        </div>
      </div>
      <Chat />
    </div>
  );
}
