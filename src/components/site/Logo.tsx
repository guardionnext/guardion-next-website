import Image from "next/image";
import Link from "next/link";

export function Logo({
  className = "",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center ${className}`}
      aria-label="Guardion — Specialist Protection & Investigations"
    >
      <Image
        src="/logo.png"
        alt="Guardion"
        width={1024}
        height={314}
        priority={priority}
        className="h-9 w-auto shrink-0"
      />
    </Link>
  );
}
