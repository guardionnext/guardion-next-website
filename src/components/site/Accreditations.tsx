import Image from "next/image";
import { Reveal } from "./Reveal";

const BADGES = [
  {
    src: "/asial-mono.webp",
    alt: "Member, Australian Security Industry Association Limited (ASIAL)",
    width: 1228,
    height: 904,
    className: "h-14 w-auto md:h-16",
  },
  {
    src: "/veteran-mono.webp",
    alt: "Australian Veteran Owned Business",
    width: 1450,
    height: 1536,
    className: "h-16 w-auto md:h-[76px]",
  },
  {
    src: "/soldieron-mono.webp",
    alt: "Supporter of Soldier On",
    width: 1250,
    height: 1250,
    className: "h-16 w-auto md:h-[72px]",
  },
] as const;

export function Accreditations() {
  return (
    <section className="border-t border-border bg-background">
      <Reveal className="mx-auto max-w-[1280px] px-6 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[minmax(0,0.85fr)_1.4fr] md:items-center md:gap-16">
          <div>
            <span className="eyebrow mb-4">Accredited &amp; endorsed</span>
            <p className="mt-5 max-w-[36ch] text-sm leading-relaxed text-text-mute">
              A member of the Australian Security Industry Association, a proud
              veteran-owned business, and a supporter of Soldier On.
            </p>
          </div>

          <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:justify-end md:gap-x-16">
            {BADGES.map((b) => (
              <li key={b.src} className="shrink-0">
                <Image
                  src={b.src}
                  alt={b.alt}
                  width={b.width}
                  height={b.height}
                  className={`${b.className} opacity-70 grayscale transition duration-500 hover:opacity-100`}
                />
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
