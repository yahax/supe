import { dashboardTickets } from "@/lib/data";
import { Card } from "@/components/ui/Card";

export default function TicketsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Tickets</h1>
      <div className="grid-soft">
        {dashboardTickets.map((ticket) => (
          <Card key={ticket.title} className="space-y-2">
            <p className="text-lg font-semibold">{ticket.title}</p>
            <p className="text-sm text-white/60">{ticket.severity} • {ticket.status}</p>
            <p className="text-sm text-white/60">SLA 24/7 via Slack + dashboard.</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
