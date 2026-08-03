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
        width={1024}
        height={314}
        priority={priority}
        className={imgClassName}
      />
    </Link>
  );
}
