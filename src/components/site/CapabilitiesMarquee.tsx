import { SERVICES } from "@/lib/site";

/**
 * A slow, seamless ticker of capabilities. Decorative reinforcement of the
 * service set (which is presented accessibly elsewhere), so the whole strip
 * is aria-hidden. The track holds two identical runs and translates -50%,
 * which loops without a seam; motion is disabled under reduced-motion.
 */
export function CapabilitiesMarquee() {
  const items = [
    ...SERVICES.map((s) => s.title),
    "Protection & Intelligence",
    "Licensed in Australia",
    "Coordinated Worldwide",
  ];
  const run = [...items, ...items];

  return (
    <section
      aria-hidden
      className="relative overflow-hidden border-y border-border bg-surface"
    >
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface to-transparent" />

      <div className="marquee-track flex w-max items-center py-4">
        {run.map((label, i) => (
          <span key={i} className="flex items-center whitespace-nowrap">
            <span className="mx-7 text-sm uppercase tracking-[0.28em] text-text-mute">
              {label}
            </span>
            <span className="h-1.5 w-1.5 rotate-45 bg-accent/70" aria-hidden />
          </span>
        ))}
      </div>
    </section>
  );
}
