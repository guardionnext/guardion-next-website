import { Globe2, PlaneTakeoff, Users, MapPin } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ContactBand } from "@/components/site/ContactBand";
import { Reveal } from "@/components/site/Reveal";
import { HeroBackdrop } from "@/components/site/HeroBackdrop";
import { LionWatermark } from "@/components/site/LionWatermark";
import { GlobeGraticule } from "@/components/site/GlobeGraticule";
import { type Locale } from "@/lib/i18n";
import { getGlobalReachContent } from "@/lib/content/global-reach";

const USE_CASE_ICONS = [PlaneTakeoff, Users, Globe2, MapPin];
const STATE_CODES = ["QLD", "NSW", "ACT", "VIC", "SA"];

export function GlobalReachPage({ locale = "en" }: { locale?: Locale }) {
  const c = getGlobalReachContent(locale);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header locale={locale} />
      <main id="main">
        <section className="grain vignette relative min-h-[68svh] overflow-hidden">
          <HeroBackdrop />
          <div className="relative z-10 mx-auto flex min-h-[68svh] max-w-[1280px] flex-col justify-end px-6 pb-20 pt-40 md:pb-28">
            <span className="eyebrow mb-6">{c.hero.eyebrow}</span>
            <h1 className="max-w-[24ch] font-serif text-[40px] leading-[1.03] tracking-tight text-foreground sm:text-5xl md:text-[64px]">
              {c.hero.h1}
            </h1>
            <p className="mt-8 max-w-[62ch] text-base leading-relaxed text-text-mute md:text-lg">
              {c.hero.body}
            </p>
          </div>
        </section>

        {/* Operating model */}
        <section className="border-t border-border bg-background">
          <Reveal className="mx-auto max-w-[1280px] px-6 py-24 md:py-32">
            <div className="grid gap-16 md:grid-cols-[1fr_1.6fr]">
              <div>
                <span className="eyebrow mb-6">{c.model.eyebrow}</span>
                <h2 className="mt-6 max-w-[18ch] font-serif text-3xl leading-[1.08] text-foreground md:text-4xl">
                  {c.model.heading}
                </h2>
              </div>
              <div className="max-w-[64ch] space-y-6 text-base leading-relaxed text-text-mute md:text-[17px]">
                {c.model.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* Lead use case */}
        <section className="grain ambient-red relative overflow-hidden border-t border-border bg-surface">
          <LionWatermark
            className="right-[-8%] top-1/2 hidden w-[520px] -translate-y-1/2 lg:block"
            opacity={0.05}
          />
          <Reveal className="relative z-10 mx-auto max-w-[1280px] px-6 py-24 md:py-32">
            <div className="grid gap-16 md:grid-cols-[1.1fr_1fr] md:items-start">
              <div>
                <span className="eyebrow mb-6">{c.useCase.eyebrow}</span>
                <h2 className="mt-6 max-w-[22ch] font-serif text-3xl leading-[1.08] text-foreground md:text-4xl">
                  {c.useCase.heading}
                </h2>
                {c.useCase.body.map((p, i) => (
                  <p
                    key={i}
                    className={`${i === 0 ? "mt-8" : "mt-6"} max-w-[60ch] text-base leading-relaxed text-text-mute md:text-[17px]`}
                  >
                    {p}
                  </p>
                ))}
              </div>
              <ul className="grid gap-px overflow-hidden border border-border bg-border">
                {c.useCase.points.map((label, i) => {
                  const Icon = USE_CASE_ICONS[i];
                  return (
                    <li key={label} className="flex items-start gap-4 bg-surface p-6">
                      <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center border border-border text-accent">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      <span className="text-sm leading-relaxed text-foreground/90">{label}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </section>

        {/* Regional focus — Asia & South-East Asia */}
        <section className="border-t border-border bg-background">
          <Reveal className="mx-auto max-w-[1280px] px-6 py-24 md:py-32">
            <div className="grid gap-16 md:grid-cols-[1fr_1.6fr]">
              <div>
                <span className="eyebrow mb-6">{c.regional.eyebrow}</span>
                <h2 className="mt-6 max-w-[18ch] font-serif text-3xl leading-[1.08] text-foreground md:text-4xl">
                  {c.regional.heading}
                </h2>
              </div>
              <div className="max-w-[64ch] space-y-6 text-base leading-relaxed text-text-mute md:text-[17px]">
                {c.regional.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                <ul className="grid grid-cols-2 gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
                  {c.regional.cities.map((city) => (
                    <li key={city} className="bg-surface p-5 text-sm text-foreground/90">
                      {city}
                    </li>
                  ))}
                </ul>
                <p className="text-xs uppercase tracking-[0.18em] text-text-mute">
                  {c.regional.note}
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* How an international engagement works */}
        <section className="border-t border-border bg-background">
          <Reveal className="mx-auto max-w-[1280px] px-6 py-24 md:py-32">
            <div className="max-w-[52ch]">
              <span className="eyebrow mb-6">{c.engagement.eyebrow}</span>
              <h2 className="mt-6 font-serif text-3xl leading-[1.08] text-foreground md:text-4xl">
                {c.engagement.heading}
              </h2>
            </div>
            <ol className="mt-16 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
              {c.engagement.steps.map((step, i) => (
                <li key={step.title} className="bg-surface p-8 md:p-10">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-text-mute tabular-nums">
                    {c.engagement.stepLabel} 0{i + 1}
                  </div>
                  <h3 className="mt-6 font-serif text-xl text-foreground">{step.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-text-mute">{step.body}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </section>

        {/* Australian footprint */}
        <section className="border-t border-border bg-background">
          <Reveal className="mx-auto max-w-[1280px] px-6 pb-24 md:pb-32">
            <div className="border border-border bg-surface p-10 md:p-14">
              <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-start">
                <div>
                  <span className="eyebrow mb-6">{c.footprint.eyebrow}</span>
                  <h2 className="mt-6 max-w-[20ch] font-serif text-3xl leading-[1.1] text-foreground md:text-[34px]">
                    {c.footprint.heading}
                  </h2>
                  <div className="relative mx-auto mt-12 hidden w-full max-w-[300px] md:block">
                    <div className="scope-rings pointer-events-none absolute inset-[-12%] z-0 opacity-60" aria-hidden />
                    <GlobeGraticule className="relative z-10 text-border" />
                  </div>
                </div>
                <div>
                  <p className="max-w-[58ch] text-base leading-relaxed text-text-mute">
                    {c.footprint.body}
                  </p>
                  <ul className="mt-8 grid grid-cols-2 gap-px overflow-hidden border border-border bg-border sm:grid-cols-5">
                    {STATE_CODES.map((code, i) => (
                      <li key={code} className="bg-surface p-5">
                        <div className="text-[10px] uppercase tracking-[0.22em] text-text-mute">
                          {code}
                        </div>
                        <div className="mt-2 text-sm text-foreground/90">
                          {c.footprint.stateNames[i]}
                        </div>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-8 text-xs uppercase tracking-[0.18em] text-text-mute">
                    {c.footprint.note}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <ContactBand locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  );
}
