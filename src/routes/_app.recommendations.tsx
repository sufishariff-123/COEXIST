import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

export const Route = createFileRoute("/_app/recommendations")({
  component: RecommendationsPage,
  head: () => ({ meta: [{ title: "Recommendations — COEXIST" }] }),
});

function RecommendationsPage() {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Recommendations</h1>
        <p className="text-sm text-muted-foreground">
          Review AI-powered mitigation recommendations and route improvements.
        </p>
      </div>
      <div className="rounded-lg border border-border bg-card p-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-3 text-primary">
          <Sparkles className="h-5 w-5" />
          <span className="font-medium">Recommendation workspace coming soon.</span>
        </div>
        <p className="mt-3">
          This page will centralize suggested ecological improvements, crossings, and buffer
          updates.
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
