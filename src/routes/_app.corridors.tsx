import { createFileRoute, Link } from "@tanstack/react-router";
import { Map } from "lucide-react";

export const Route = createFileRoute("/_app/corridors")({
  component: CorridorsPage,
  head: () => ({ meta: [{ title: "Wildlife Corridors — COEXIST" }] }),
});

function CorridorsPage() {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Wildlife Corridors</h1>
        <p className="text-sm text-muted-foreground">
          Explore corridor networks, habitat connectivity, and protected linkage plans.
        </p>
      </div>
      <div className="rounded-lg border border-border bg-card p-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-3 text-primary">
          <Map className="h-5 w-5" />
          <span className="font-medium">Corridor visualization coming soon.</span>
        </div>
        <p className="mt-3">
          This section will display mapped wildlife corridors, risk indices, and protected area
          overlays.
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
