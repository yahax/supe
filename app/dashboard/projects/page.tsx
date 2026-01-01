import { dashboardProjects } from "@/lib/data";
import { Card } from "@/components/ui/Card";

export default function ProjectsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Projets</h1>
      <div className="grid-soft">
        {dashboardProjects.map((project) => (
          <Card key={project.name} className="space-y-2">
            <p className="text-lg font-semibold">{project.name}</p>
            <p className="text-sm text-white/60">{project.status}</p>
            <div className="h-2 w-full rounded-full bg-white/10">
              <div className="h-2 rounded-full bg-accent" style={{ width: `${project.progress}%` }} />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
