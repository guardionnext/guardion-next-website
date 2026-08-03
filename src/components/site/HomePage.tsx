import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
  Search,
  ChevronDown,
  Award,
  Globe2,
  Lock,
  Scale,
  MapPin,
  Clock,
  MessagesSquare,
  Radar,
  ClipboardList,
} from "lucide-react";
import heroImage from "@/assets/hero-night-city.webp";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ContactBand } from "@/components/site/ContactBand";
import { Accreditations } from "@/components/site/Accreditations";
import { LionWatermark } from "@/components/site/LionWatermark";
import { Reveal } from "@/components/site/Reveal";
import { Reticle } from "@/components/site/Reticle";
import { GlobeGraticule } from "@/components/site/GlobeGraticule";
import { CapabilitiesMarquee } from "@/components/site/CapabilitiesMarquee";
import { localePath, type Locale } from "@/lib/i18n";
import { getServices } from "@/lib/content/ui";
import { getHomeContent } from "@/lib/content/home";

const BADGE_ICONS = [MapPin, Globe2, Clock];
const CRED_ICONS = [Award, Lock, Scale, Globe2];
const TESTIMONIAL_NAMES = ["Jessica Carter", "Amie Coldwell", "Connor Murray"];
const ENGAGEMENT_META = [
  { icon: MessagesSquare, k: "01" },
  { icon: Radar, k: "02" },
  { icon: ClipboardList, k: "03" },
  { icon: ShieldCheck, k: "04" },
];
const STATE_CODES = ["QLD", "NSW", "ACT", "VIC", "SA"];

export function HomePage({ locale = "en" }: { locale?: Locale }) {
  const c = getHomeContent(locale);
  const services = getServices(locale);
  const lp = (path: string) => localePath(locale, path);
  const regions = [...STATE_CODES, c.globalReach.internationalLabel];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header locale={locale} />
      <main id="main">
        {/* Hero */}
        <section className="grain vignette relative min-h-[100svh] overflow-hidden">
          <Image
            src={heroImage}
            alt=""
            fill
            priority
            placeholder="blur"
            sizes="100vw"
            className="kenburns object-cover object-[center_60%] brightness-[1.45] contrast-[1.06] saturate-[1.12]"
            aria-hidden
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(14,16,19,0.14) 0%, rgba(14,16,19,0.3) 44%, rgba(14,16,19,0.7) 76%, rgba(14,16,19,0.97) 100%)",
            }}
            aria-hidden
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(48% 45% at 82% 62%, rgba(196,38,46,0.14), transparent 70%)",
            }}
            aria-hidden
          />
          <LionWatermark
            className="right-[-8%] top-[6%] z-[1] hidden h-[86%] w-[620px] md:block"
            opacity={0.14}
          />
          <LionWatermark
            className="right-[-20%] top-[8%] z-[1] block h-[44%] w-[300px] md:hidden"
            opacity={0.12}
          />
          <Reticle tone="muted" inset="clamp(1.25rem, 4vw, 3rem)" className="hidden md:block" />
          <span
            className="absolute right-6 top-1/2 z-[2] hidden -translate-y-1/2 text-[10px] uppercase tracking-[0.4em] text-text-mute/80 [writing-mode:vertical-rl] lg:block"
            aria-hidden
          >
            {c.hero.verticalLabel}
          </span>
          <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1280px] flex-col justify-end px-6 pb-24 pt-40 md:pb-32">
            <span className="eyebrow rise">{c.hero.eyebrow}</span>
            <h1 className="rise mt-8 max-w-[18ch] font-serif text-[44px] leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-[72px]">
              {c.hero.h1}
            </h1>
            <p className="rise mt-8 max-w-[62ch] text-base leading-relaxed text-text-mute md:text-lg">
              {c.hero.body}
            </p>
            <div className="rise mt-10 flex flex-wrap items-center gap-4">
              <Link
                href={lp("/contact")}
                className="group inline-flex h-12 items-center gap-2 border border-accent bg-accent px-6 text-sm font-medium text-white shadow-[0_18px_40px_-18px_rgba(196,38,46,0.9)] transition hover:bg-[#a91f26]"
              >
                {c.hero.ctaConsult}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href={lp("/services")}
                className="inline-flex h-12 items-center gap-2 border border-border/70 bg-background/20 px-6 text-sm text-foreground backdrop-blur-sm transition hover:border-foreground/40"
              >
                {c.hero.ctaServices}
              </Link>
            </div>
            <div className="rise mt-14 flex flex-col gap-5 border-t border-border/60 pt-8 sm:flex-row sm:items-center sm:gap-10">
              {c.hero.badges.map((label, i) => {
                const Icon = BADGE_ICONS[i];
                return (
                  <div
                    key={label}
                    className="flex items-center gap-2.5 text-xs uppercase tracking-[0.18em] text-text-mute"
                  >
                    <Icon className="h-4 w-4 text-accent" aria-hidden />
                    {label}
                  </div>
                );
              })}
              <span
                className="hidden items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-text-mute/70 sm:ml-auto lg:inline-flex"
                aria-hidden
              >
                <ChevronDown className="h-4 w-4 animate-bounce" />
                {c.hero.scroll}
              </span>
            </div>
          </div>
        </section>

        {/* Positioning strip */}
        <section className="border-y border-border bg-background">
          <Reveal className="mx-auto max-w-[1280px] px-6">
            <ul className="grid grid-cols-1 md:grid-cols-3">
              {c.stats.map((s, i) => (
                <li
                  key={s.label}
                  className={`group flex items-stretch gap-4 py-9 ${
                    i > 0 ? "md:border-l md:border-border md:pl-12" : ""
                  } ${i < c.stats.length - 1 ? "border-b border-border md:border-b-0" : ""}`}
                >
                  <span
                    className="w-[3px] shrink-0 bg-accent transition-all duration-500 group-hover:bg-accent-strong"
                    aria-hidden
                  />
                  <div className="min-w-0">
                    <div className="text-[10px] uppercase tracking-[0.22em] text-text-mute">
                      {s.label}
                    </div>
                    <div className="mt-1.5 font-serif text-[26px] leading-tight text-foreground">
                      {s.value}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        <CapabilitiesMarquee />

        {/* Difference */}
        <section className="relative overflow-hidden bg-background">
          <LionWatermark
            flip
            className="left-[-8%] top-[18%] hidden w-[520px] lg:block"
            opacity={0.05}
          />
          <Reveal className="relative z-10 mx-auto max-w-[1280px] px-6 py-28 md:py-36">
            <div className="grid gap-16 md:grid-cols-[1fr_1.4fr] md:items-end">
              <div>
                <span className="eyebrow mb-6">{c.difference.eyebrow}</span>
                <h2 className="mt-6 font-serif text-4xl leading-[1.05] text-foreground md:text-[44px]">
                  {c.difference.heading}
                </h2>
              </div>
              <p className="max-w-[56ch] text-base leading-relaxed text-text-mute md:text-lg">
                {c.difference.body}
              </p>
            </div>

            <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
              <article className="hair-accent group relative overflow-hidden bg-surface p-10 transition-colors duration-300 hover:bg-surface-2 md:p-14">
                <ShieldCheck
                  className="pointer-events-none absolute -right-6 -top-6 h-40 w-40 text-white/[0.02] transition-transform duration-500 group-hover:scale-105"
                  aria-hidden
                />
                <div className="relative flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-accent" aria-hidden />
                  <span className="text-[10px] uppercase tracking-[0.22em] text-text-mute">
                    {c.difference.protectionLabel}
                  </span>
                </div>
                <h3 className="relative mt-6 font-serif text-3xl text-foreground">
                  {c.difference.protectionTitle}
                </h3>
                <p className="relative mt-5 max-w-[46ch] text-sm leading-relaxed text-text-mute">
                  {c.difference.protectionBody}
                </p>
              </article>
              <article className="hair-accent group relative overflow-hidden bg-surface p-10 transition-colors duration-300 hover:bg-surface-2 md:p-14">
                <Search
                  className="pointer-events-none absolute -right-6 -top-6 h-40 w-40 text-white/[0.02] transition-transform duration-500 group-hover:scale-105"
                  aria-hidden
                />
                <div className="relative flex items-center gap-3">
                  <Search className="h-5 w-5 text-accent" aria-hidden />
                  <span className="text-[10px] uppercase tracking-[0.22em] text-text-mute">
                    {c.difference.intelligenceLabel}
                  </span>
                </div>
                <h3 className="relative mt-6 font-serif text-3xl text-foreground">
                  {c.difference.intelligenceTitle}
                </h3>
                <p className="relative mt-5 max-w-[46ch] text-sm leading-relaxed text-text-mute">
                  {c.difference.intelligenceBody}
                </p>
              </article>
            </div>
          </Reveal>
        </section>

        {/* Ethos statement */}
        <section className="grain ambient-red relative overflow-hidden border-y border-border bg-surface">
          <LionWatermark
            className="left-1/2 top-1/2 hidden w-[760px] -translate-x-1/2 -translate-y-1/2 md:block"
            opacity={0.06}
          />
          <Reveal className="relative z-10 mx-auto max-w-[1000px] px-6 py-32 text-center md:py-44">
            <div className="mb-8 flex justify-center">
              <span className="eyebrow">{c.ethos.eyebrow}</span>
            </div>
            <p className="mx-auto max-w-[24ch] font-serif text-3xl leading-[1.16] text-foreground sm:text-4xl md:max-w-[20ch] md:text-[52px] md:leading-[1.12]">
              {c.ethos.statement}
            </p>
            <div className="mt-12 flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.28em] text-text-mute">
              <span className="h-px w-12 bg-accent" aria-hidden />
              Guardion
              <span className="h-px w-12 bg-accent" aria-hidden />
            </div>
          </Reveal>
        </section>

        {/* Services grid */}
        <section className="border-t border-border bg-background">
          <Reveal className="mx-auto max-w-[1280px] px-6 py-28 md:py-36">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <span className="eyebrow mb-6">{c.services.eyebrow}</span>
                <h2 className="mt-6 max-w-[24ch] font-serif text-4xl leading-[1.05] text-foreground md:text-[44px]">
                  {c.services.heading}
                </h2>
              </div>
              <Link
                href={lp("/services")}
                className="group inline-flex items-center gap-2 text-sm text-foreground/85 transition hover:text-foreground"
              >
                {c.services.allServices}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s, i) => (
                <Link
                  key={s.slug}
                  href={lp(`/services/${s.slug}`)}
                  className="hair-accent group relative flex flex-col justify-between overflow-hidden bg-surface p-8 transition duration-300 hover:bg-surface-2 md:p-10"
                >
                  <span
                    className="pointer-events-none absolute right-5 top-3 font-serif text-[64px] leading-none text-white/[0.03] transition-colors duration-300 group-hover:text-accent/10"
                    aria-hidden
                  >
                    0{i + 1}
                  </span>
                  <div className="relative">
                    <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-text-mute">
                      <span className="tabular-nums">0{i + 1}</span>
                      <span className="h-px w-8 bg-border" />
                    </div>
                    <h3 className="mt-6 font-serif text-2xl text-foreground">{s.title}</h3>
                    <p className="mt-4 max-w-[36ch] text-sm leading-relaxed text-text-mute">
                      {s.summary}
                    </p>
                  </div>
                  <div className="relative mt-10 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.18em] text-text-mute transition group-hover:text-foreground">
                      {c.services.readMore}
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-text-mute transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Engagement process */}
        <section className="relative overflow-hidden border-t border-border bg-surface">
          <div className="dot-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden />
          <Reveal className="relative z-10 mx-auto max-w-[1280px] px-6 py-28 md:py-36">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <span className="eyebrow mb-6">{c.engagement.eyebrow}</span>
                <h2 className="mt-6 max-w-[24ch] font-serif text-4xl leading-[1.05] text-foreground md:text-[44px]">
                  {c.engagement.heading}
                </h2>
              </div>
              <p className="max-w-[40ch] text-sm leading-relaxed text-text-mute">
                {c.engagement.intro}
              </p>
            </div>

            <ol className="mt-16 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {c.engagement.steps.map((step, i) => {
                const Icon = ENGAGEMENT_META[i].icon;
                return (
                  <li
                    key={ENGAGEMENT_META[i].k}
                    className="hair-accent group relative bg-surface p-8 transition-colors duration-300 hover:bg-surface-2 md:p-9"
                  >
                    <span
                      className="pointer-events-none absolute right-5 top-4 font-serif text-[54px] leading-none text-white/[0.03] transition-colors duration-300 group-hover:text-accent/10"
                      aria-hidden
                    >
                      {ENGAGEMENT_META[i].k}
                    </span>
                    <span className="relative inline-flex h-11 w-11 items-center justify-center border border-border bg-background/40 transition-colors duration-300 group-hover:border-accent/50">
                      <Icon className="h-5 w-5 text-accent" aria-hidden />
                    </span>
                    <h3 className="relative mt-6 font-serif text-xl text-foreground">
                      {step.title}
                    </h3>
                    <p className="relative mt-3 text-sm leading-relaxed text-text-mute">
                      {step.body}
                    </p>
                  </li>
                );
              })}
            </ol>
          </Reveal>
        </section>

        {/* Credibility */}
        <section className="grain ambient-red relative overflow-hidden border-t border-border bg-surface">
          <LionWatermark
            className="right-[-6%] top-1/2 hidden w-[560px] -translate-y-1/2 lg:block"
            opacity={0.055}
          />
          <Reveal className="relative z-10 mx-auto max-w-[1280px] px-6 py-24 md:py-32">
            <div className="max-w-[52ch]">
              <span className="eyebrow mb-6">{c.credibility.eyebrow}</span>
              <h2 className="mt-6 font-serif text-4xl leading-[1.05] text-foreground md:text-[44px]">
                {c.credibility.heading}
              </h2>
            </div>
            <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {c.credibility.items.map((item, i) => {
                const Icon = CRED_ICONS[i];
                return (
                  <div
                    key={item.title}
                    className="hair-accent group bg-surface p-8 transition-colors duration-300 hover:bg-surface-2"
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center border border-border bg-background/40 transition-colors duration-300 group-hover:border-accent/50">
                      <Icon className="h-5 w-5 text-accent" aria-hidden />
                    </span>
                    <h3 className="mt-6 font-serif text-lg text-foreground">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-text-mute">{item.body}</p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </section>

        <Accreditations />

        {/* Global reach teaser */}
        <section className="relative overflow-hidden border-t border-border bg-background">
          <LionWatermark
            flip
            className="left-[-10%] top-1/2 hidden w-[440px] -translate-y-1/2 lg:block"
            opacity={0.045}
          />
          <Reveal className="relative z-10 mx-auto max-w-[1280px] px-6 py-28 md:py-36">
            <div className="grid gap-16 md:grid-cols-[1.05fr_1fr] md:items-center">
              <div>
                <span className="eyebrow mb-6">{c.globalReach.eyebrow}</span>
                <h2 className="mt-6 max-w-[22ch] font-serif text-4xl leading-[1.05] text-foreground md:text-[44px]">
                  {c.globalReach.heading}
                </h2>
                <p className="mt-6 max-w-[56ch] text-base leading-relaxed text-text-mute">
                  {c.globalReach.body}
                </p>

                <ul className="mt-9 flex flex-wrap gap-2.5">
                  {regions.map((r) => (
                    <li
                      key={r}
                      className="group inline-flex items-center gap-2 border border-border bg-surface px-3.5 py-2 text-xs tracking-wide text-foreground/90 transition-colors duration-300 hover:border-accent/50"
                    >
                      <span
                        className="h-1.5 w-1.5 shrink-0 bg-accent transition-transform duration-300 group-hover:scale-150"
                        aria-hidden
                      />
                      {r}
                      {r === c.globalReach.internationalLabel && (
                        <span className="ml-1 text-[9px] uppercase tracking-[0.2em] text-text-mute">
                          {c.globalReach.vettedTag}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>

                <Link
                  href={lp("/global-reach")}
                  className="group mt-9 inline-flex items-center gap-2 text-sm text-foreground/90 transition hover:text-foreground"
                >
                  {c.globalReach.link}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>

              <div className="relative mx-auto w-full max-w-[420px]">
                <div className="scope-rings pointer-events-none absolute inset-[-8%] z-0 opacity-70" aria-hidden />
                <GlobeGraticule className="relative z-10 text-border" />
                <div className="relative z-10 mt-6 flex items-center justify-center gap-6 text-[10px] uppercase tracking-[0.2em] text-text-mute">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 bg-accent" aria-hidden />
                    {c.globalReach.legendBase}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 border border-accent/60" aria-hidden />
                    {c.globalReach.legendPartners}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Testimonials */}
        <section className="relative overflow-hidden border-t border-border bg-background">
          <span
            className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 font-serif text-[320px] leading-none text-white/[0.02] select-none md:text-[440px]"
            aria-hidden
          >
            &ldquo;
          </span>
          <LionWatermark
            className="right-[-9%] bottom-[-6%] hidden w-[480px] lg:block"
            opacity={0.04}
          />
          <Reveal className="relative z-10 mx-auto max-w-[1280px] px-6 py-28 md:py-36">
            <span className="eyebrow mb-6">{c.testimonials.eyebrow}</span>
            <h2 className="mt-6 max-w-[24ch] font-serif text-4xl leading-[1.05] text-foreground md:text-[44px]">
              {c.testimonials.heading}
            </h2>
            <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
              {c.testimonials.items.map((t, i) => {
                const name = TESTIMONIAL_NAMES[i];
                return (
                  <figure
                    key={name}
                    className="hair-accent group flex h-full flex-col justify-between bg-surface p-8 transition-colors duration-300 hover:bg-surface-2 md:p-10"
                  >
                    <blockquote className="font-serif text-lg leading-[1.5] text-foreground/95">
                      <span className="mr-1 text-accent">&ldquo;</span>
                      {t.quote}
                      <span className="ml-1 text-accent">&rdquo;</span>
                    </blockquote>
                    <figcaption className="mt-10 flex items-center gap-4 border-t border-border pt-5">
                      <span
                        className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-border bg-background/40 font-serif text-sm tracking-wide text-foreground/90 transition-colors duration-300 group-hover:border-accent/50"
                        aria-hidden
                      >
                        {name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm text-foreground">{name}</span>
                        <span className="block text-[11px] uppercase tracking-[0.18em] text-text-mute">
                          {t.role}
                        </span>
                      </span>
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          </Reveal>
        </section>

        {/* FAQ */}
        <section className="border-t border-border bg-background">
          <Reveal className="mx-auto max-w-[1280px] px-6 py-28 md:py-36">
            <div className="grid gap-16 md:grid-cols-[1fr_1.6fr]">
              <div>
                <span className="eyebrow mb-6">{c.faq.eyebrow}</span>
                <h2 className="mt-6 max-w-[16ch] font-serif text-4xl leading-[1.05] text-foreground md:text-[44px]">
                  {c.faq.heading}
                </h2>
                <p className="mt-6 max-w-[42ch] text-sm leading-relaxed text-text-mute">
                  {c.faq.intro}
                </p>
              </div>
              <div className="border-t border-border">
                {c.faq.items.map((f, i) => (
                  <details key={i} className="group border-b border-border">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 text-left font-serif text-lg text-foreground [&::-webkit-details-marker]:hidden">
                      {f.q}
                      <ChevronDown
                        className="h-5 w-5 shrink-0 text-text-mute transition-transform duration-300 group-open:rotate-180"
                        aria-hidden
                      />
                    </summary>
                    <p className="pb-6 text-sm leading-relaxed text-text-mute">{f.a}</p>
                  </details>
                ))}
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
