import { Link, Outlet, useLocation } from "@tanstack/react-router";
import { LayoutDashboard, Map, Sparkles, Bell, FileText, Beaker, Leaf, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/simulation", label: "Simulation", icon: Beaker },
  { to: "/corridors", label: "Wildlife Corridors", icon: Map },
  { to: "/recommendations", label: "Recommendations", icon: Sparkles },
  { to: "/alerts", label: "Monitoring & Alerts", icon: Bell },
  { to: "/reports", label: "Reports", icon: FileText },
];

export function AppLayout() {
  const { pathname } = useLocation();
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <aside className="hidden w-64 shrink-0 flex-col bg-sidebar text-sidebar-foreground md:flex">
        <Link to="/" className="flex items-center gap-2 border-b border-sidebar-border px-6 py-5">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">
            <Leaf className="h-4 w-4" />
          </div>
          <div>
            <div className="text-sm font-semibold tracking-wide">COEXIST</div>
            <div className="text-[10px] uppercase tracking-widest text-sidebar-foreground/60">
              Ecological OS
            </div>
          </div>
        </Link>
        <nav className="flex-1 space-y-1 px-3 py-4">
          {nav.map((item) => {
            const active = pathname.startsWith(item.to);
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                  active
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground/70 hover:bg-sidebar-accent/60 hover:text-sidebar-foreground",
                )}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="border-t border-sidebar-border p-4 text-xs text-sidebar-foreground/60">
          <div className="font-medium text-sidebar-foreground/90">Region: Western Ghats</div>
          <div>Project: Bengaluru–Mysuru Corridor</div>
        </div>
      </aside>
      <div className="flex flex-1 flex-col">
        <header className="flex h-14 items-center justify-between border-b border-border bg-card/80 px-6 backdrop-blur">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Search className="h-4 w-4" />
            <span>Search projects, layers, species…</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="hidden sm:inline">Dr. A. Rao · Environmental Analyst</span>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold">
              AR
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
