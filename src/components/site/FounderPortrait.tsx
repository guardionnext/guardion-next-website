"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Framed founder portrait. Reads its photo from `src` (a file in /public).
 * Until that file exists — or if it fails to load — it shows a branded, on-lion
 * placeholder instead of a broken-image icon, so the layout always looks
 * intentional. Drop the real photo at the referenced path and it appears.
 */
export function FounderPortrait({
  src,
  alt,
  caption,
  className,
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className={cn("group max-w-[360px]", className)}>
      <div className="relative aspect-[4/5] overflow-hidden border border-border bg-surface">
        {failed ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
            <span
              className="lion-mask h-24 w-24 opacity-40"
              style={{
                background:
                  "linear-gradient(152deg, var(--accent-strong) 0%, var(--accent-c) 46%, var(--accent-deep) 100%)",
              }}
              aria-hidden
            />
            <span className="text-[10px] uppercase leading-relaxed tracking-[0.2em] text-text-mute">
              Portrait unavailable
            </span>
          </div>
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover grayscale-[0.25] transition duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
            onError={() => setFailed(true)}
          />
        )}

        {/* Registration corner + film grain to match the site's photo treatment */}
        <span
          className="pointer-events-none absolute left-0 top-0 h-9 w-9 border-l-2 border-t-2 border-accent"
          aria-hidden
        />
      </div>

      {caption && (
        <figcaption className="mt-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-text-mute">
          <span className="h-2 w-2 shrink-0 bg-accent" aria-hidden />
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
