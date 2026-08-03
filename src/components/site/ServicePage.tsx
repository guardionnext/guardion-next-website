import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ContactBand } from "@/components/site/ContactBand";
import { Reveal } from "@/components/site/Reveal";
import { HeroBackdrop } from "@/components/site/HeroBackdrop";
import { LionWatermark } from "@/components/site/LionWatermark";
import { SITE } from "@/lib/site";
import { localePath, type Locale } from "@/lib/i18n";
import { getUI, getServices } from "@/lib/content/ui";

export type ServiceStep = { title: string; body: string };

export type ServiceContent = {
  slug: string;
  title: string;
  promise: string;
  eyebrow?: string;
  coversHeading: string;
  coversBody: string[];
  coversPoints?: string[];
  howHeading?: string;
  steps: ServiceStep[];
  whoHeading?: string;
  whoBody: string;
  whoList?: string[];
  exampleLabel?: string;
  exampleTitle: string;
  exampleBody: string;
  closingNote?: string;
};

export function ServicePage({
  content,
  locale = "en",
}: {
  content: ServiceContent;
  locale?: Locale;
}) {
  const t = getUI(locale).service;
  const lp = (path: string) => localePath(locale, path);
  const related = getServices(locale)
    .filter((s) => s.slug !== content.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildServiceBreadcrumbJsonLd(content, locale)),
        }}
      />
      <Header locale={locale} />
      <main id="main">
        {/* Hero */}
        <section className="grain vignette relative min-h-[72svh] overflow-hidden">
          <HeroBackdrop />
          <div className="relative z-10 mx-auto flex min-h-[72svh] max-w-[1280px] flex-col justify-end px-6 pb-20 pt-40 md:pb-28">
            <nav aria-label="Breadcrumb" className="rise mb-8 text-[10px] uppercase tracking-[0.22em] text-text-mute">
              <Link href={lp("/services")} className="transition hover:text-foreground">{t.breadcrumbServices}</Link>
              <span className="mx-3 text-border">/</span>
              <span className="text-foreground/80">{content.eyebrow ?? content.title}</span>
            </nav>
            <h1 className="rise max-w-[22ch] font-serif text-[40px] leading-[1.03] tracking-tight text-foreground sm:text-5xl md:text-[64px]">
              {content.title}
            </h1>
            <p className="rise mt-8 max-w-[58ch] text-base leading-relaxed text-text-mute md:text-lg">
              {content.promise}
            </p>
          </div>
        </section>

        {/* What it covers */}
        <section className="border-t border-border bg-background">
          <Reveal className="mx-auto max-w-[1280px] px-6 py-24 md:py-32">
            <div className="grid gap-16 md:grid-cols-[1fr_1.6fr]">
              <div>
                <span className="eyebrow mb-6">{t.covers}</span>
                <h2 className="mt-6 max-w-[18ch] font-serif text-3xl leading-[1.08] text-foreground md:text-4xl">
                  {content.coversHeading}
                </h2>
              </div>
              <div className="max-w-[64ch] space-y-6 text-base leading-relaxed text-text-mute md:text-[17px]">
                {content.coversBody.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                {content.coversPoints && (
                  <ul className="mt-8 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
                    {content.coversPoints.map((pt) => (
                      <li key={pt} className="flex items-start gap-3 bg-surface p-5">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden />
                        <span className="text-sm text-foreground/90">{pt}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </Reveal>
        </section>

        {/* How we work */}
        <section className="grain ambient-red relative overflow-hidden border-t border-border bg-surface">
          <LionWatermark
            className="right-[-8%] top-1/2 hidden w-[520px] -translate-y-1/2 lg:block"
            opacity={0.05}
          />
          <Reveal className="relative z-10 mx-auto max-w-[1280px] px-6 py-24 md:py-32">
            <div className="max-w-[52ch]">
              <span className="eyebrow mb-6">{t.howWeWork}</span>
              <h2 className="mt-6 font-serif text-3xl leading-[1.08] text-foreground md:text-4xl">
                {content.howHeading ?? t.defaultHowHeading}
              </h2>
            </div>
            <ol className="mt-16 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
              {content.steps.map((step, i) => (
                <li key={step.title} className="bg-surface p-8 md:p-10">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-text-mute tabular-nums">
                    {t.step} 0{i + 1}
                  </div>
                  <h3 className="mt-6 font-serif text-xl text-foreground">{step.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-text-mute">{step.body}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </section>

        {/* Who it's for */}
        <section className="border-t border-border bg-background">
          <Reveal className="mx-auto max-w-[1280px] px-6 py-24 md:py-32">
            <div className="grid gap-16 md:grid-cols-[1fr_1.6fr]">
              <div>
                <span className="eyebrow mb-6">{t.whoItsFor}</span>
                <h2 className="mt-6 max-w-[20ch] font-serif text-3xl leading-[1.08] text-foreground md:text-4xl">
                  {content.whoHeading ?? t.defaultWhoHeading}
                </h2>
              </div>
              <div className="max-w-[64ch] text-base leading-relaxed text-text-mute md:text-[17px]">
                <p>{content.whoBody}</p>
                {content.whoList && (
                  <ul className="mt-8 space-y-3 border-t border-border pt-8">
                    {content.whoList.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden />
                        <span className="text-sm text-foreground/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </Reveal>
        </section>

        {/* Anonymised example */}
        <section className="border-t border-border bg-background">
          <Reveal className="mx-auto max-w-[1280px] px-6 pb-24 md:pb-32">
            <div className="border border-border bg-surface p-10 md:p-14">
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-text-mute">
                <span className="h-2 w-2 bg-accent" aria-hidden />
                {content.exampleLabel ?? t.anonymisedExample}
              </div>
              <h3 className="mt-6 max-w-[36ch] font-serif text-2xl leading-[1.15] text-foreground md:text-3xl">
                {content.exampleTitle}
              </h3>
              <p className="mt-6 max-w-[70ch] text-base leading-relaxed text-text-mute">
                {content.exampleBody}
              </p>
              {content.closingNote && (
                <p className="mt-6 max-w-[70ch] border-t border-border pt-6 text-xs uppercase tracking-[0.18em] text-text-mute">
                  {content.closingNote}
                </p>
              )}
            </div>
          </Reveal>
        </section>

        {/* Related services */}
        <section className="border-t border-border bg-background">
          <Reveal className="mx-auto max-w-[1280px] px-6 py-24 md:py-32">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <span className="eyebrow mb-6">{t.relatedCapabilities}</span>
                <h2 className="mt-6 max-w-[24ch] font-serif text-3xl leading-[1.08] text-foreground md:text-4xl">
                  {t.relatedHeading}
                </h2>
              </div>
              <Link
                href={lp("/services")}
                className="inline-flex items-center gap-2 text-sm text-foreground/85 transition hover:text-foreground"
              >
                {t.allServices}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {related.map((s) => (
                <Link
                  key={s.slug}
                  href={lp(`/services/${s.slug}`)}
                  className="group flex flex-col justify-between bg-surface p-8 transition duration-300 hover:bg-surface-2 md:p-10"
                >
                  <div>
                    <h3 className="font-serif text-2xl text-foreground">{s.title}</h3>
                    <p className="mt-4 max-w-[36ch] text-sm leading-relaxed text-text-mute">
                      {s.summary}
                    </p>
                  </div>
                  <div className="mt-10 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.18em] text-text-mute transition group-hover:text-foreground">
                      {t.readMore}
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

export function buildServiceJsonLd(content: ServiceContent, locale: Locale = "en") {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: content.title,
    serviceType: content.title,
    provider: { "@type": "LocalBusiness", "@id": `${SITE.url}/#business` },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Queensland" },
      { "@type": "AdministrativeArea", name: "New South Wales" },
      { "@type": "AdministrativeArea", name: "Australian Capital Territory" },
      { "@type": "AdministrativeArea", name: "Victoria" },
      { "@type": "AdministrativeArea", name: "South Australia" },
      { "@type": "Place", name: "International — coordinated through vetted partners" },
    ],
    description: content.promise,
    url: `${SITE.url}${localePath(locale, `/services/${content.slug}`)}`,
    inLanguage: locale === "en" ? "en-AU" : "zh-Hans",
  };
}

export function buildServiceBreadcrumbJsonLd(
  content: ServiceContent,
  locale: Locale = "en"
) {
  const t = getUI(locale).service;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t.home, item: `${SITE.url}${localePath(locale, "/")}` },
      { "@type": "ListItem", position: 2, name: t.breadcrumbServices, item: `${SITE.url}${localePath(locale, "/services")}` },
      {
        "@type": "ListItem",
        position: 3,
        name: content.title,
        item: `${SITE.url}${localePath(locale, `/services/${content.slug}`)}`,
      },
    ],
  };
}
