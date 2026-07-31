import { cn } from "@/lib/utils";

/**
 * A wireframe graticule globe: meridians + parallels clipped to a sphere,
 * with Australia lit in accent red and thin arcs reaching out to vetted
 * international partner nodes. Pure SVG — no JS, so it stays a server
 * component. Conveys "an Australian base, a worldwide operating model".
 */
export function GlobeGraticule({ className }: { className?: string }) {
  // Node coordinates within the r=176 sphere centred at (200,200).
  const AU = { x: 286, y: 262 };
  const partners = [
    { x: 150, y: 118 }, // Europe
    { x: 108, y: 214 }, // Americas
    { x: 244, y: 128 }, // Asia
    { x: 176, y: 300 }, // Southern
  ];
  // Quadratic arcs from Australia to each partner, bulged toward centre.
  const arc = (p: { x: number; y: number }) => {
    const cx = (AU.x + p.x) / 2 + (200 - (AU.x + p.x) / 2) * 0.55;
    const cy = (AU.y + p.y) / 2 + (200 - (AU.y + p.y) / 2) * 0.55;
    return `M${AU.x},${AU.y} Q${cx.toFixed(1)},${cy.toFixed(1)} ${p.x},${p.y}`;
  };

  return (
    <svg
      viewBox="0 0 400 400"
      className={cn("h-auto w-full", className)}
      fill="none"
      role="img"
      aria-label="A network of coordination arcs reaching from Australia to vetted partners worldwide."
    >
      <defs>
        <clipPath id="globe-clip">
          <circle cx="200" cy="200" r="176" />
        </clipPath>
        <radialGradient id="globe-core" cx="46%" cy="42%" r="62%">
          <stop offset="0%" stopColor="rgba(196,38,46,0.14)" />
          <stop offset="55%" stopColor="rgba(196,38,46,0.03)" />
          <stop offset="100%" stopColor="rgba(196,38,46,0)" />
        </radialGradient>
      </defs>

      {/* Soft inner glow */}
      <circle cx="200" cy="200" r="176" fill="url(#globe-core)" />

      {/* Graticule */}
      <g clipPath="url(#globe-clip)" stroke="currentColor" className="text-border">
        <g strokeWidth="1">
          {/* meridians */}
          {[176, 130, 80, 28].map((rx) => (
            <ellipse key={rx} cx="200" cy="200" rx={rx} ry="176" />
          ))}
          <line x1="200" y1="24" x2="200" y2="376" />
          {/* parallels */}
          {[-118, -60, 0, 60, 118].map((dy) => (
            <line key={dy} x1="24" y1={200 + dy} x2="376" y2={200 + dy} />
          ))}
        </g>
      </g>

      {/* Sphere edge */}
      <circle cx="200" cy="200" r="176" stroke="currentColor" className="text-border" strokeWidth="1.25" />

      {/* Coordination arcs */}
      <g stroke="var(--accent-c)" strokeWidth="1.1" opacity="0.5" strokeLinecap="round">
        {partners.map((p, i) => (
          <path key={i} d={arc(p)} />
        ))}
      </g>

      {/* Partner nodes */}
      <g>
        {partners.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="2.6" fill="var(--accent-c)" opacity="0.75" />
        ))}
      </g>

      {/* Australia — lit and breathing */}
      <circle className="pulse-node" cx={AU.x} cy={AU.y} r="7" fill="none" stroke="var(--accent-strong)" strokeWidth="1.25" />
      <circle cx={AU.x} cy={AU.y} r="4" fill="var(--accent-strong)" />
      <circle cx={AU.x} cy={AU.y} r="9" fill="none" stroke="var(--accent-c)" strokeWidth="1" opacity="0.4" />
    </svg>
  );
}
