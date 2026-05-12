import mapTexture from "@/assets/map-texture.jpg";
import { cn } from "@/lib/utils";

type Layers = {
  heatmap?: boolean;
  corridors?: boolean;
  protected?: boolean;
  proposed?: boolean;
  optimized?: boolean;
  satellite?: boolean;
};

export function EcoMap({ layers = {}, className }: { layers?: Layers; className?: string }) {
  const {
    heatmap = true,
    corridors = true,
    protected: prot = true,
    proposed = true,
    optimized = false,
    satellite = false,
  } = layers;

  return (
    <div
      className={cn("relative overflow-hidden rounded-lg border border-border bg-muted", className)}
    >
      <img
        src={mapTexture}
        alt="Topographic map"
        loading="lazy"
        width={1600}
        height={1200}
        className={cn(
          "absolute inset-0 h-full w-full object-cover transition-opacity",
          satellite ? "opacity-40" : "opacity-90",
        )}
      />
      <svg
        viewBox="0 0 800 500"
        preserveAspectRatio="xMidYMid slice"
        className="relative h-full w-full"
      >
        <defs>
          <radialGradient id="heat1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(0.58 0.18 28)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="oklch(0.58 0.18 28)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="heat2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(0.78 0.14 75)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="oklch(0.78 0.14 75)" stopOpacity="0" />
          </radialGradient>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="oklch(0.24 0.02 230 / 0.06)"
              strokeWidth="1"
            />
          </pattern>
        </defs>

        <rect width="800" height="500" fill="url(#grid)" />

        {prot && (
          <>
            <polygon
              points="80,90 220,60 280,170 180,240 90,200"
              fill="oklch(0.42 0.09 150 / 0.18)"
              stroke="oklch(0.42 0.09 150)"
              strokeWidth="1.5"
              strokeDasharray="4 3"
            />
            <text x="130" y="150" fill="oklch(0.30 0.08 150)" fontSize="10" fontWeight="600">
              Bannerghatta NP
            </text>
            <polygon
              points="520,310 660,290 700,400 600,440 510,400"
              fill="oklch(0.42 0.09 150 / 0.18)"
              stroke="oklch(0.42 0.09 150)"
              strokeWidth="1.5"
              strokeDasharray="4 3"
            />
            <text x="560" y="370" fill="oklch(0.30 0.08 150)" fontSize="10" fontWeight="600">
              Cauvery WLS
            </text>
          </>
        )}

        {heatmap && (
          <>
            <ellipse cx="350" cy="220" rx="160" ry="110" fill="url(#heat1)" />
            <ellipse cx="600" cy="150" rx="120" ry="90" fill="url(#heat2)" />
            <ellipse cx="220" cy="380" rx="140" ry="80" fill="url(#heat2)" />
          </>
        )}

        {corridors && (
          <>
            <path
              d="M 150 180 C 280 140, 400 260, 560 340"
              fill="none"
              stroke="oklch(0.55 0.13 150)"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.85"
            />
            <path
              d="M 200 130 C 340 200, 470 180, 640 260"
              fill="none"
              stroke="oklch(0.55 0.13 150)"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.7"
              strokeDasharray="2 4"
            />
          </>
        )}

        {proposed && (
          <path
            d="M 60 420 L 260 300 L 460 280 L 720 120"
            fill="none"
            stroke="oklch(0.58 0.18 28)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        )}
        {optimized && (
          <path
            d="M 60 420 L 250 360 L 470 340 L 720 120"
            fill="none"
            stroke="oklch(0.42 0.09 150)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeDasharray="6 4"
          />
        )}

        {/* hotspot markers */}
        {[
          [350, 220, "High risk"],
          [600, 150, "Crossing"],
          [220, 380, "Fragmentation"],
        ].map(([x, y, label], i) => (
          <g key={i}>
            <circle cx={x as number} cy={y as number} r="5" fill="oklch(0.58 0.18 28)" />
            <circle
              cx={x as number}
              cy={y as number}
              r="10"
              fill="none"
              stroke="oklch(0.58 0.18 28 / 0.4)"
            />
          </g>
        ))}
      </svg>

      <div className="pointer-events-none absolute bottom-3 left-3 rounded-md bg-card/90 px-3 py-2 text-[11px] text-muted-foreground shadow-sm">
        12.97° N, 77.59° E · Scale 1 : 250k
      </div>
      <div className="pointer-events-none absolute right-3 top-3 flex gap-1.5">
        {["+", "−", "⛶"].map((c) => (
          <div
            key={c}
            className="flex h-7 w-7 items-center justify-center rounded-md bg-card/90 text-sm text-foreground shadow-sm"
          >
            {c}
          </div>
        ))}
      </div>
    </div>
  );
}
