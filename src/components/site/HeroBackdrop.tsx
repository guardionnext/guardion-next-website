import Image from "next/image";
import heroImage from "@/assets/hero-night-city.webp";
import { LionWatermark } from "./LionWatermark";
import { Reticle } from "./Reticle";

/**
 * Shared cinematic backdrop for interior page heroes: the night-city image with
 * a slow ken-burns push, a legibility gradient, a faint accent wash, and the
 * brand lion emerging from shadow. The lion is rendered in two variants — a
 * large one for md+ and a smaller one tuned for phones — so the mark is present
 * on mobile as well as desktop. Purely decorative (aria-hidden throughout);
 * drop it inside a `relative overflow-hidden` hero section, above which the
 * page's own `relative z-10` content sits.
 */
export function HeroBackdrop({
  overlay = "default",
  reticle = true,
}: {
  /** "strong" darkens the wash for heroes whose text sits lower on the image. */
  overlay?: "default" | "strong";
  /** Corner registration marks (md+ only). */
  reticle?: boolean;
}) {
  const grad =
    overlay === "strong"
      ? "linear-gradient(180deg, rgba(14,16,19,0.34) 0%, rgba(14,16,19,0.54) 52%, rgba(14,16,19,0.82) 82%, rgba(14,16,19,1) 100%)"
      : "linear-gradient(180deg, rgba(14,16,19,0.18) 0%, rgba(14,16,19,0.36) 48%, rgba(14,16,19,0.74) 80%, rgba(14,16,19,0.98) 100%)";

  return (
    <>
      <Image
        src={heroImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className="kenburns object-cover object-[center_60%] brightness-[1.45] contrast-[1.06] saturate-[1.12]"
        aria-hidden
      />
      <div className="absolute inset-0" style={{ background: grad }} aria-hidden />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(46% 42% at 82% 60%, rgba(196,38,46,0.12), transparent 70%)",
        }}
        aria-hidden
      />

      {/* Brand lion — desktop */}
      <LionWatermark
        className="right-[-8%] top-[8%] z-[1] hidden h-[82%] w-[560px] md:block"
        opacity={0.12}
      />
      {/* Brand lion — mobile */}
      <LionWatermark
        className="right-[-22%] top-[9%] z-[1] block h-[46%] w-[300px] md:hidden"
        opacity={0.11}
      />

      {reticle && (
        <Reticle
          tone="muted"
          inset="clamp(1.25rem, 4vw, 3rem)"
          className="hidden md:block"
        />
      )}
    </>
  );
}
