import { cn } from "@/lib/utils";

/**
 * Corner registration marks — thin L-brackets in the four corners of a
 * relatively-positioned parent. A quiet precision/optics motif that frames
 * a section like a viewfinder. Decorative only (aria-hidden).
 */
export function Reticle({
  className,
  inset = "1.25rem",
  tone = "accent",
}: {
  className?: string;
  /** Distance of the marks from each edge. */
  inset?: string;
  /** Bracket colour. */
  tone?: "accent" | "muted";
}) {
  const color = tone === "accent" ? "border-accent/45" : "border-border";
  const common = `absolute h-3.5 w-3.5 ${color}`;
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 z-[1]", className)}
    >
      <span className={cn(common, "border-l border-t")} style={{ left: inset, top: inset }} />
      <span className={cn(common, "border-r border-t")} style={{ right: inset, top: inset }} />
      <span className={cn(common, "border-b border-l")} style={{ left: inset, bottom: inset }} />
      <span className={cn(common, "border-b border-r")} style={{ right: inset, bottom: inset }} />
    </div>
  );
}
