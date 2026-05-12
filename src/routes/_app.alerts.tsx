import { createFileRoute, Link } from "@tanstack/react-router";
import { Bell } from "lucide-react";

export const Route = createFileRoute("/_app/alerts")({
  component: AlertsPage,
  head: () => ({ meta: [{ title: "Monitoring & Alerts — COEXIST" }] }),
});

function AlertsPage() {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Monitoring & Alerts</h1>
        <p className="text-sm text-muted-foreground">
          One place for live alerts, sensor events, and corridor incidents.
        </p>
      </div>
      <div className="rounded-lg border border-border bg-card p-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-3 text-primary">
          <Bell className="h-5 w-5" />
          <span className="font-medium">Alerts dashboard coming soon.</span>
        </div>
        <p className="mt-3">
          This section will surface real-time notifications and monitoring summaries.
        </p>
      </div>
      <Link
        to="/dashboard"
        className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
      >
        Go to dashboard
      </Link>
    </div>
  );
}
