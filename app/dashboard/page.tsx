import { dashboardProjects, dashboardTickets } from "@/lib/data";
import { Card } from "@/components/ui/Card";

export default function DashboardPage() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="space-y-3">
        <h2 className="text-xl font-semibold">Projets actifs</h2>
        {dashboardProjects.map((project) => (
          <div key={project.name} className="rounded-2xl bg-white/5 p-3">
            <div className="flex items-center justify-between">
              <p className="font-semibold">{project.name}</p>
              <span className="text-xs text-white/60">{project.status}</span>
            </div>
            <div className="mt-2 h-2 w-full rounded-full bg-white/10">
              <div className="h-2 rounded-full bg-accent" style={{ width: `${project.progress}%` }} />
            </div>
          </div>
        ))}
      </Card>
      <Card className="space-y-3">
        <h2 className="text-xl font-semibold">Tickets récents</h2>
        {dashboardTickets.map((ticket) => (
          <div key={ticket.title} className="rounded-2xl bg-white/5 p-3">
            <p className="font-semibold">{ticket.title}</p>
            <div className="text-xs text-white/60">{ticket.severity} • {ticket.status}</div>
          </div>
        ))}
      </Card>
    </div>
  );
}
