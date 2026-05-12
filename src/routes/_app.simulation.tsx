import { createFileRoute } from "@tanstack/react-router";
import { EcoMap } from "@/components/EcoMap";
import { useState } from "react";
import { Upload, Pencil, Play } from "lucide-react";

export const Route = createFileRoute("/_app/simulation")({
  component: SimulationPage,
  head: () => ({ meta: [{ title: "Simulation — COEXIST" }] }),
});

function SimulationPage() {
  const [type, setType] = useState("Highway");
  const [length, setLength] = useState(48);
  const [buffer, setBuffer] = useState(120);
  const [running, setRunning] = useState(false);
  const [result, setResult] = useState<null | {
    risk: number;
    frag: number;
    species: number;
    cost: string;
  }>(null);

  function run() {
    setRunning(true);
    setTimeout(() => {
      const risk = Math.min(100, Math.round(35 + length * 0.6 - buffer * 0.05));
      setResult({
        risk,
        frag: Math.round(risk * 0.5),
        species: 12 + (length % 9),
        cost: "₹ 12.4 Cr",
      });
      setRunning(false);
    }, 900);
  }

  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Infrastructure Simulation</h1>
        <p className="text-sm text-muted-foreground">
          Model environmental impact of proposed projects before approval.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
        <div className="space-y-4 rounded-lg border border-border bg-card p-5 shadow-[var(--shadow-card)]">
          <div className="flex gap-2">
            <button className="flex flex-1 items-center justify-center gap-2 rounded-md border border-dashed border-border bg-muted/40 p-3 text-xs text-muted-foreground hover:bg-muted">
              <Upload className="h-4 w-4" /> Upload GeoJSON / KML
            </button>
            <button className="flex flex-1 items-center justify-center gap-2 rounded-md border border-border bg-card p-3 text-xs text-foreground hover:bg-muted">
              <Pencil className="h-4 w-4" /> Draw on map
            </button>
          </div>

          <Field label="Project type">
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              {["Highway", "Railway", "Industrial Zone", "Urban Layout", "Power Line"].map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </Field>
          <Field label={`Length (km) — ${length}`}>
            <input
              type="range"
              min={5}
              max={120}
              value={length}
              onChange={(e) => setLength(+e.target.value)}
              className="w-full accent-primary"
            />
          </Field>
          <Field label={`Buffer zone (m) — ${buffer}`}>
            <input
              type="range"
              min={0}
              max={500}
              value={buffer}
              onChange={(e) => setBuffer(+e.target.value)}
              className="w-full accent-primary"
            />
          </Field>

          <button
            onClick={run}
            disabled={running}
            className="flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 disabled:opacity-60"
          >
            <Play className="h-4 w-4" /> {running ? "Simulating…" : "Run simulation"}
          </button>

          {result && (
            <div className="grid grid-cols-2 gap-3 rounded-md border border-border bg-muted/40 p-3 text-sm">
              <Metric k="Risk score" v={`${result.risk}/100`} />
              <Metric k="Fragmentation" v={`${result.frag}%`} />
              <Metric k="Species impacted" v={`${result.species}`} />
              <Metric k="Mitigation cost" v={result.cost} />
            </div>
          )}
        </div>

        <EcoMap
          layers={{
            heatmap: true,
            corridors: true,
            protected: true,
            proposed: true,
            optimized: !!result,
          }}
          className="h-[600px]"
        />
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
function Metric({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="text-xs text-muted-foreground">{k}</div>
      <div className="text-base font-semibold text-foreground">{v}</div>
    </div>
  );
}
