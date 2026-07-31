import { cn } from "@/lib/utils";

type LionWatermarkProps = {
  /**
   * Positioning + sizing utility classes for the (absolutely positioned) box.
   * Give it a width and the lion's aspect ratio, e.g.
   * `right-[-6%] top-[8%] w-[560px] aspect-[750/921]`.
   */
  className?: string;
  /** Mirror horizontally. The source lion faces left. */
  flip?: boolean;
  /** Render the soft red ambient glow behind the lion. */
  glow?: boolean;
  /** Overall opacity of the lion fill (0–1). */
  opacity?: number;
};

/**
 * The Guardion lion, rendered as a subtle red watermark emerging from shadow.
 *
 * Pure CSS — a red gradient clipped to the brand lion silhouette via `lion-mask`,
 * with an optional blurred red glow behind it. No JS, so it stays a server
 * component. Decorative only: `aria-hidden` and non-interactive.
 */
export function LionWatermark({
  className,
  flip = false,
  glow = true,
  opacity = 0.07,
}: LionWatermarkProps) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute select-none", className)}
    >
      {glow && (
        <div
          className="absolute inset-[-30%] blur-[90px]"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(196,38,46,0.20), transparent 60%)",
          }}
        />
      )}
      <div
        className="lion-mask absolute inset-0"
        style={{
          opacity,
          transform: flip ? "scaleX(-1)" : undefined,
          background:
            "linear-gradient(152deg, var(--accent-strong) 0%, var(--accent-c) 46%, var(--accent-deep) 100%)",
        }}
      />
    </div>
  );
}
