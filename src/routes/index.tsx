import { createFileRoute, Link } from "@tanstack/react-router";
import { Leaf, Map, Sparkles, Bell, FileText, Beaker, ArrowRight, ShieldCheck } from "lucide-react";
import hero from "@/assets/hero-landscape.jpg";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "COEXIST — Ecological Intelligence for Urban Planning" },
      {
        name: "description",
        content:
          "AI-assisted platform helping governments and planners build infrastructure that coexists with wildlife.",
      },
      { property: "og:title", content: "COEXIST — Ecological Intelligence for Urban Planning" },
      {
        property: "og:description",
        content:
          "Plan cities and infrastructure while protecting wildlife corridors and biodiversity.",
      },
    ],
  }),
});

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Leaf className="h-4 w-4" />
            </div>
            <div className="text-sm font-semibold tracking-wide">COEXIST</div>
          </div>
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <a href="#platform" className="hover:text-foreground">
              Platform
            </a>
            <a href="#workflow" className="hover:text-foreground">
              Workflow
            </a>
            <a href="#who" className="hover:text-foreground">
              Who it's for
            </a>
          </nav>
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Open platform <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={hero}
            alt=""
            width={1600}
            height={1024}
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/85 to-background" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1 text-xs text-muted-foreground">
            <ShieldCheck className="h-3.5 w-3.5 text-primary" /> Used by planning agencies &
            infrastructure firms
          </div>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            Build cities that <span className="text-primary">coexist</span> with wildlife.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            COEXIST is an ecological intelligence operating system for governments, planners, and
            infrastructure companies — turning satellite, biodiversity, and movement data into
            safer, more sustainable projects.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] hover:bg-primary/90"
            >
              Launch dashboard <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/simulation"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-medium text-foreground hover:bg-muted"
            >
              Try a simulation
            </Link>
          </div>

          <div className="mt-16 grid max-w-3xl grid-cols-3 gap-8 border-t border-border pt-8 text-sm">
            <Stat n="2.3M" l="hectares analyzed" />
            <Stat n="180+" l="wildlife corridors mapped" />
            <Stat n="42%" l="avg. risk reduction" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="platform" className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <div className="text-xs font-medium uppercase tracking-widest text-primary">Platform</div>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
            A complete ecological planning toolkit.
          </h2>
          <p className="mt-3 text-muted-foreground">
            From the first satellite layer to the final impact report — every step of sustainable
            infrastructure planning, in one place.
          </p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              i: Map,
              t: "GIS dashboard",
              d: "Interactive map with heatmaps, satellite overlays, and protected zone layers.",
            },
            {
              i: Beaker,
              t: "Project simulation",
              d: "Upload roads, railways, or industrial layouts and model their ecological impact.",
            },
            {
              i: Leaf,
              t: "Corridor intelligence",
              d: "Visualize wildlife movement, integrity scores, and habitat fragmentation.",
            },
            {
              i: Sparkles,
              t: "AI recommendations",
              d: "Safer routes, underpasses, buffer zones, and timing windows.",
            },
            {
              i: Bell,
              t: "Live monitoring",
              d: "Real-time alerts from sensors, camera traps, and satellite change detection.",
            },
            {
              i: FileText,
              t: "Impact reports",
              d: "Generate audit-ready EIA and biodiversity reports in one click.",
            },
          ].map((f) => (
            <div
              key={f.t}
              className="group rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition hover:border-primary/40 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary-soft text-primary">
                <f.i className="h-5 w-5" />
              </div>
              <div className="mt-4 text-base font-semibold">{f.t}</div>
              <p className="mt-1.5 text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow */}
      <section id="workflow" className="border-y border-border bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <div className="text-xs font-medium uppercase tracking-widest text-primary">
              Workflow
            </div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
              From proposal to mitigation — in minutes.
            </h2>
          </div>
          <ol className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              [
                "01",
                "Upload or draw",
                "Roads, railways, industrial zones, or urban layouts as GeoJSON/KML.",
              ],
              [
                "02",
                "AI analysis",
                "Wildlife movement, biodiversity, fragmentation, ecological sensitivity.",
              ],
              [
                "03",
                "Risk scoring",
                "Quantified ecological risk and coexistence feasibility per segment.",
              ],
              [
                "04",
                "Mitigate & report",
                "Optimized routes, crossings, buffers, and downloadable reports.",
              ],
            ].map(([n, t, d]) => (
              <li key={n} className="rounded-lg border border-border bg-card p-5">
                <div className="text-xs font-semibold tracking-widest text-primary">{n}</div>
                <div className="mt-2 text-base font-semibold">{t}</div>
                <p className="mt-1.5 text-sm text-muted-foreground">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Who */}
      <section id="who" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="text-xs font-medium uppercase tracking-widest text-primary">
              Who it's for
            </div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
              Built for the people shaping our cities.
            </h2>
            <p className="mt-3 text-muted-foreground">
              Role-based access keeps every stakeholder focused — from environmental analysts
              running simulations to government planners signing off on infrastructure.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Government planners — review, approve, and audit projects",
                "Environmental analysts — simulate, score, and recommend mitigation",
                "Infrastructure companies — design routes that pass approval",
                "Admins — manage regions, datasets, and team permissions",
              ].map((x) => (
                <li key={x} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" /> {x}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border shadow-[var(--shadow-elegant)]">
            <img
              src={hero}
              alt="Aerial forest landscape"
              loading="lazy"
              width={1600}
              height={1024}
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 rounded-md bg-card/90 px-3 py-2 text-xs text-foreground backdrop-blur">
              Western Ghats biosphere · 1,600 km² monitored
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl rounded-2xl border border-border bg-[var(--gradient-hero)] p-10 text-primary-foreground shadow-[var(--shadow-elegant)]">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Ready to plan with the planet in mind?
              </h3>
              <p className="mt-2 text-primary-foreground/80">
                Open the dashboard and explore a real-world coexistence scenario.
              </p>
            </div>
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 rounded-md bg-background px-5 py-3 text-sm font-medium text-foreground hover:bg-background/90"
            >
              Launch dashboard <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        © 2026 COEXIST · Urban development and wildlife coexistence through intelligent ecological
        planning.
      </footer>
    </div>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="text-2xl font-semibold text-foreground md:text-3xl">{n}</div>
      <div className="mt-1 text-muted-foreground">{l}</div>
    </div>
  );
}
