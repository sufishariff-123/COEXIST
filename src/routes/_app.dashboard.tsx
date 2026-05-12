import { createFileRoute } from "@tanstack/react-router";
import { EcoMap } from "@/components/EcoMap";
import { StatCard } from "@/components/StatCard";
import { Activity, AlertTriangle, Leaf, Route as RouteIcon, Layers, Satellite } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/_app/dashboard")({
  component: DashboardPage,
  head: () => ({
    meta: [
      { title: "Dashboard — COEXIST" },
      {
        name: "description",
        content: "Ecological intelligence dashboard for sustainable urban planning.",
      },
    ],
  }),
});

function DashboardPage() {
  const [layers, setLayers] = useState({
    heatmap: true,
    corridors: true,
    protected: true,
    proposed: true,
    optimized: false,
    satellite: false,
  });
  const toggle = (k: keyof typeof layers) => setLayers((s) => ({ ...s, [k]: !s[k] }));

  return (
    <div className="space-y-6 p-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Ecological Operations</h1>
          <p className="text-sm text-muted-foreground">
            Bengaluru–Mysuru Corridor · Last sync 4 min ago
          </p>
        </div>
        <div className="flex gap-2 text-xs">
          <button className="rounded-md border border-border bg-card px-3 py-1.5 text-foreground hover:bg-muted">
            Export
          </button>
          <button className="rounded-md bg-primary px-3 py-1.5 text-primary-foreground hover:bg-primary/90">
            New project
          </button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label="Ecological Risk"
          value="68 / 100"
          delta="High — review corridors"
          tone="danger"
          icon={AlertTriangle}
        />
        <StatCard
          label="Habitat Fragmentation"
          value="32%"
          delta="+4% vs baseline"
          tone="warning"
          icon={Activity}
        />
        <StatCard
          label="Biodiversity Index"
          value="0.74"
          delta="Stable"
          tone="success"
          icon={Leaf}
        />
        <StatCard label="Mitigation Routes" value="5" delta="2 recommended" icon={RouteIcon} />
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_320px]">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2 rounded-lg border border-border bg-card p-2 text-xs">
            <span className="ml-2 flex items-center gap-1.5 font-medium text-muted-foreground">
              <Layers className="h-3.5 w-3.5" /> Layers
            </span>
            {[
              ["heatmap", "Risk heatmap"],
              ["corridors", "Wildlife corridors"],
              ["protected", "Protected zones"],
              ["proposed", "Proposed route"],
              ["optimized", "Optimized route"],
            ].map(([k, label]) => (
              <button
                key={k}
                onClick={() => toggle(k as keyof typeof layers)}
                className={`rounded-md border px-2.5 py-1 transition-colors ${
                  (layers as Record<string, boolean>)[k]
                    ? "border-primary bg-primary-soft text-primary"
                    : "border-border bg-card text-muted-foreground hover:bg-muted"
                }`}
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => toggle("satellite")}
              className={`ml-auto flex items-center gap-1.5 rounded-md border px-2.5 py-1 ${
                layers.satellite
                  ? "border-accent bg-accent/15 text-accent-foreground"
                  : "border-border text-muted-foreground hover:bg-muted"
              }`}
            >
              <Satellite className="h-3.5 w-3.5" /> Satellite
            </button>
          </div>
          <EcoMap layers={layers} className="h-[520px]" />
        </div>

        <div className="space-y-4">
          <Panel title="Active Alerts">
            {[
              { t: "Elephant crossing detected", s: "NH-275, km 42", level: "danger" },
              { t: "New fragmentation cluster", s: "Bannerghatta buffer", level: "warning" },
              { t: "Mitigation deployed", s: "Underpass at km 58", level: "success" },
            ].map((a) => (
              <div
                key={a.t}
                className="flex items-start gap-3 border-b border-border py-2.5 last:border-0"
              >
                <span
                  className={`mt-1.5 h-2 w-2 rounded-full ${
                    a.level === "danger"
                      ? "bg-destructive"
                      : a.level === "warning"
                        ? "bg-warning"
                        : "bg-success"
                  }`}
                />
                <div className="text-sm">
                  <div className="font-medium text-foreground">{a.t}</div>
                  <div className="text-xs text-muted-foreground">{a.s}</div>
                </div>
              </div>
            ))}
          </Panel>

          <Panel title="Species Pressure">
            {[
              ["Asian Elephant", 86],
              ["Leopard", 64],
              ["Sloth Bear", 41],
              ["Sambar Deer", 33],
            ].map(([s, v]) => (
              <div key={s as string} className="py-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-foreground">{s}</span>
                  <span className="text-muted-foreground">{v}</span>
                </div>
                <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-muted">
                  <div className="h-full rounded-full bg-primary" style={{ width: `${v}%` }} />
                </div>
              </div>
            ))}
          </Panel>
        </div>
      </div>
    </div>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-border bg-card p-4 shadow-[var(--shadow-card)]">
      <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {title}
      </div>
      {children}
    </div>
  );
}
