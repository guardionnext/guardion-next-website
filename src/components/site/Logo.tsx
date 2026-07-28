import Image from "next/image";
import Link from "next/link";

export function Logo({
  className = "",
  priority = false,
  variant = "default",
  imgClassName = "h-9 w-auto shrink-0",
}: {
  className?: string;
  priority?: boolean;
  variant?: "default" | "white";
  imgClassName?: string;
}) {
  const src = variant === "white" ? "/logo_white.png" : "/logo.png";
  return (
    <Link
      href="/"
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
