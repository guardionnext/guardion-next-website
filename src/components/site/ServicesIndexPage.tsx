import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ContactBand } from "@/components/site/ContactBand";
import { Reveal } from "@/components/site/Reveal";
import { LionWatermark } from "@/components/site/LionWatermark";
import { localePath, type Locale } from "@/lib/i18n";
import { getServices } from "@/lib/content/ui";
import { getServicesIndexContent } from "@/lib/content/services";

export function ServicesIndexPage({ locale = "en" }: { locale?: Locale }) {
  const c = getServicesIndexContent(locale);
  const services = getServices(locale);
  const lp = (path: string) => localePath(locale, path);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header locale={locale} />
      <main id="main">
        <section className="grain relative overflow-hidden border-b border-border bg-background">
          <div className="dot-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden />
          {/* Brand lion — desktop */}
          <LionWatermark
            className="right-[-6%] top-[-10%] z-[1] hidden h-[130%] w-[560px] md:block"
            opacity={0.06}
          />
          {/* Brand lion — mobile */}
          <LionWatermark
            className="right-[-24%] top-[6%] z-[1] block h-[70%] w-[300px] md:hidden"
            opacity={0.07}
          />
          <div className="relative z-10 mx-auto max-w-[1280px] px-6 pb-20 pt-40 md:pb-28 md:pt-48">
            <span className="eyebrow mb-6">{c.eyebrow}</span>
            <h1 className="mt-6 max-w-[22ch] font-serif text-[40px] leading-[1.03] tracking-tight text-foreground sm:text-5xl md:text-[64px]">
              {c.heading}
            </h1>
            {c.intro.map((p, i) => (
              <p
                key={i}
                className={`${i === 0 ? "mt-8" : "mt-6"} max-w-[64ch] text-base leading-relaxed text-text-mute md:text-lg`}
              >
                {p}
              </p>
            ))}
          </div>
        </section>

        <section className="bg-background">
          <Reveal className="mx-auto max-w-[1280px] px-6 py-24 md:py-32">
            <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s, i) => (
                <Link
                  key={s.slug}
                  href={lp(`/services/${s.slug}`)}
                  className="group flex flex-col justify-between bg-surface p-8 transition duration-300 hover:bg-surface-2 md:p-10"
                >
                  <div>
                    <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-text-mute">
                      <span className="tabular-nums">0{i + 1}</span>
                      <span className="h-px w-8 bg-border" />
                    </div>
                    <h2 className="mt-6 font-serif text-2xl text-foreground">{s.title}</h2>
                    <p className="mt-4 max-w-[36ch] text-sm leading-relaxed text-text-mute">
                      {s.summary}
                    </p>
                  </div>
                  <div className="mt-10 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.18em] text-text-mute transition group-hover:text-foreground">
                      {c.readMore}
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-text-mute transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        </section>

        <ContactBand locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  );
}
