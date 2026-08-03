import Image from "next/image";
import Link from "next/link";
import { localePath, type Locale } from "@/lib/i18n";

export function Logo({
  className = "",
  priority = false,
  variant = "default",
  imgClassName = "h-9 w-auto shrink-0",
  locale = "en",
}: {
  className?: string;
  priority?: boolean;
  variant?: "default" | "white";
  imgClassName?: string;
  locale?: Locale;
}) {
  const src = variant === "white" ? "/logo_white.webp" : "/logo.webp";
  return (
    <Link
      href={localePath(locale, "/")}
      className={`group inline-flex items-center ${className}`}
      aria-label="Guardion — Specialist Protection & Investigations"
    >
      <Image
        src={src}
        alt="Guardion"
        // Intrinsic size = the largest the logo ever renders (header h-12 ≈ 157×48).
        // The source webp is 1024×314; declaring that made next/image emit a
        // w=2048 srcset entry that the browser fetched (~20 KB) for a 157px slot.
        // Sizing it honestly caps the srcset at w=256/384 with no visible change.
        width={157}
        height={48}
        priority={priority}
        // In Next 15.5 `priority` no longer implies fetchPriority, so the LCP
        // logo's preload link shipped without fetchpriority="high" (Lighthouse
        // "LCP request discovery" flagged this). Set it explicitly when priority.
        fetchPriority={priority ? "high" : undefined}
        className={imgClassName}
      />
    </Link>
  );
}
