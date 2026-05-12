import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText } from "lucide-react";

export const Route = createFileRoute("/_app/reports")({
  component: ReportsPage,
  head: () => ({ meta: [{ title: "Reports — COEXIST" }] }),
});

function ReportsPage() {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Reports</h1>
        <p className="text-sm text-muted-foreground">
          Generate audit-ready impact reports and export project summaries.
        </p>
      </div>
      <div className="rounded-lg border border-border bg-card p-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-3 text-primary">
          <FileText className="h-5 w-5" />
          <span className="font-medium">Reports workspace coming soon.</span>
        </div>
        <p className="mt-3">
          This page will let you export ecological assessments, project summaries, and EIA-ready
          findings.
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
