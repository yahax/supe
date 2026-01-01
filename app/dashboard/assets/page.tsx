import { dashboardAssets } from "@/lib/data";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function AssetsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Assets</h1>
      <div className="soft-card flex flex-col gap-3 p-6">
        <p className="text-sm text-white/70">Uploader vos fichiers (maquettes, vidéos, kits). Stockage mocké pour la demo.</p>
        <div className="flex flex-wrap gap-2 text-xs text-white/60">
          <span className="rounded-full bg-white/5 px-3 py-1">Figma</span>
          <span className="rounded-full bg-white/5 px-3 py-1">ZIP</span>
          <span className="rounded-full bg-white/5 px-3 py-1">Video</span>
        </div>
        <Button>Simuler un upload</Button>
      </div>
      <div className="grid-soft">
        {dashboardAssets.map((asset) => (
          <Card key={asset.name} className="space-y-2">
            <p className="text-lg font-semibold">{asset.name}</p>
            <p className="text-sm text-white/60">{asset.type}</p>
            <p className="text-sm text-white/60">{asset.size}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
