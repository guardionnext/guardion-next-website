import Image from "next/image";
import { ShieldCheck, Scale, Eye, ArrowUpRight, HeartHandshake, BadgeCheck } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ContactBand } from "@/components/site/ContactBand";
import { Reveal } from "@/components/site/Reveal";
import { HeroBackdrop } from "@/components/site/HeroBackdrop";
import { LionWatermark } from "@/components/site/LionWatermark";
import { FounderPortrait } from "@/components/site/FounderPortrait";
import { SITE } from "@/lib/site";
import { type Locale } from "@/lib/i18n";
import { getAboutContent } from "@/lib/content/about";

const FOUNDER_NAME = "James McKelliff";
const VALUE_ICONS = [Eye, ShieldCheck, Scale];
const AFFILIATION_META = [
  { icon: HeartHandshake, name: "Soldier On", logo: "/soldieron.webp", logoAlt: "Soldier On", certificate: "/certificates/soldier-on.pdf" },
  { icon: BadgeCheck, name: "ASIAL", logo: "/asial.webp", logoAlt: "Australian Security Industry Association Limited (ASIAL)", certificate: "/certificates/asial.pdf" },
];

// Structured data about a real person — kept in English regardless of locale.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: FOUNDER_NAME,
  jobTitle: "Founder & Principal",
  worksFor: {
    "@type": "Organization",
    "@id": `${SITE.url}/#business`,
    name: "Guardion",
  },
  description:
    "Founder and principal of Guardion. Ronin South Africa–certified close protection operator and Australian Defence Force (Royal Australian Artillery) veteran with more than eighteen years in the security industry.",
  knowsAbout: [
    "Close protection",
    "Executive protection",
    "Residential security",
    "Security driving",
    "Private investigations",
  ],
  url: `${SITE.url}/about`,
};

export function AboutPage({ locale = "en" }: { locale?: Locale }) {
  const c = getAboutContent(locale);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header locale={locale} />
      <main id="main">
        <section className="grain vignette relative min-h-[64svh] overflow-hidden">
          <HeroBackdrop />
          <div className="relative z-10 mx-auto flex min-h-[64svh] max-w-[1280px] flex-col justify-end px-6 pb-20 pt-40 md:pb-28">
            <span className="eyebrow mb-6">{c.hero.eyebrow}</span>
            <h1 className="max-w-[22ch] font-serif text-[40px] leading-[1.03] tracking-tight text-foreground sm:text-5xl md:text-[64px]">
              {c.hero.h1}
            </h1>
            <p className="mt-8 max-w-[60ch] text-base leading-relaxed text-text-mute md:text-lg">
              {c.hero.body}
            </p>
          </div>
        </section>

        {/* Founder */}
        <section className="border-t border-border bg-background">
          <Reveal className="mx-auto max-w-[1280px] px-6 py-24 md:py-32">
            <div className="grid gap-16 md:grid-cols-[1fr_1.6fr]">
              <div className="md:sticky md:top-28 md:self-start">
                <span className="eyebrow mb-6">{c.founder.eyebrow}</span>
                <h2 className="mt-6 max-w-[16ch] font-serif text-3xl leading-[1.08] text-foreground md:text-4xl">
                  {FOUNDER_NAME}.
                </h2>
                <p className="mt-4 text-sm uppercase tracking-[0.18em] text-text-mute">
                  {c.founder.role}
                </p>
                <FounderPortrait
                  src="/founder.webp"
                  alt={c.founder.portraitAlt}
                  caption={c.founder.portraitCaption}
                  className="mt-10"
                />
              </div>
              <div className="max-w-[64ch] space-y-6 text-base leading-relaxed text-text-mute md:text-[17px]">
                {c.founder.bio.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            {/* Training & qualifications */}
            <div className="mt-16 border-t border-border pt-12 md:mt-20 md:pt-16">
              <span className="eyebrow mb-6">{c.founder.qualsHeading}</span>
              <ul className="mt-8 grid gap-x-10 gap-y-4 sm:grid-cols-2">
                {c.founder.quals.map((q) => (
                  <li
                    key={q}
                    className="border-l border-border pl-4 text-sm leading-relaxed text-text-mute"
                  >
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>

        {/* Values */}
        <section className="grain ambient-red relative overflow-hidden border-t border-border bg-surface">
          <LionWatermark
            flip
            className="left-[-9%] top-1/2 hidden w-[520px] -translate-y-1/2 lg:block"
            opacity={0.05}
          />
          <Reveal className="relative z-10 mx-auto max-w-[1280px] px-6 py-24 md:py-32">
            <div className="max-w-[52ch]">
              <span className="eyebrow mb-6">{c.values.eyebrow}</span>
              <h2 className="mt-6 font-serif text-3xl leading-[1.08] text-foreground md:text-4xl">
                {c.values.heading}
              </h2>
            </div>
            <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
              {c.values.items.map((item, i) => {
                const Icon = VALUE_ICONS[i];
                return (
                  <div key={item.title} className="bg-surface p-8 md:p-10">
                    <span className="inline-flex h-10 w-10 items-center justify-center border border-border text-accent">
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <h3 className="mt-6 font-serif text-xl text-foreground">{item.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-text-mute">{item.body}</p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </section>

        {/* Firm */}
        <section className="border-t border-border bg-background">
          <Reveal className="mx-auto max-w-[1280px] px-6 py-24 md:py-32">
            <div className="grid gap-16 md:grid-cols-[1fr_1.6fr]">
              <div>
                <span className="eyebrow mb-6">{c.firm.eyebrow}</span>
                <h2 className="mt-6 max-w-[20ch] font-serif text-3xl leading-[1.08] text-foreground md:text-4xl">
                  {c.firm.heading}
                </h2>
              </div>
              <div className="max-w-[64ch] space-y-6 text-base leading-relaxed text-text-mute md:text-[17px]">
                {c.firm.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* Credentials */}
        <section className="border-t border-border bg-background">
          <Reveal className="mx-auto max-w-[1280px] px-6 pb-24 md:pb-32">
            <div className="border border-border bg-surface p-10 md:p-14">
              <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-start">
                <div>
                  <span className="eyebrow mb-6">{c.credentials.eyebrow}</span>
                  <h2 className="mt-6 max-w-[20ch] font-serif text-3xl leading-[1.1] text-foreground md:text-[34px]">
                    {c.credentials.heading}
                  </h2>
                </div>
                <div>
                  <p className="max-w-[58ch] text-base leading-relaxed text-text-mute">
                    {c.credentials.body}
                  </p>
                  <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-5">
                    {SITE.licences.map((l) => (
                      <div key={l.state} className="border-l border-border pl-3">
                        <div className="text-[10px] uppercase tracking-[0.22em] text-text-mute">
                          {l.state}
                        </div>
                        <div className="mt-1 font-mono text-xs text-foreground/80">
                          {l.number}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Compliance & affiliations */}
        <section className="border-t border-border bg-background">
          <Reveal className="mx-auto max-w-[1280px] px-6 pb-24 md:pb-32">
            <div className="max-w-[60ch]">
              <span className="eyebrow mb-6">{c.affiliations.eyebrow}</span>
              <h2 className="mt-6 font-serif text-3xl leading-[1.08] text-foreground md:text-4xl">
                {c.affiliations.heading}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-text-mute md:text-[17px]">
                {c.affiliations.intro}
              </p>
            </div>
            <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
              {c.affiliations.items.map((item, i) => {
                const meta = AFFILIATION_META[i];
                const Icon = meta.icon;
                return (
                  <article key={meta.name} className="flex flex-col bg-surface p-8 md:p-10">
                    <span className="relative flex h-16 w-40 items-center justify-center rounded-md bg-white p-3">
                      <Image
                        src={meta.logo}
                        alt={meta.logoAlt}
                        fill
                        sizes="160px"
                        className="object-contain p-1.5"
                      />
                    </span>
                    <div className="mt-7 flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-text-mute">
                      <Icon className="h-4 w-4 text-accent" aria-hidden />
                      {item.label}
                    </div>
                    <h3 className="mt-4 font-serif text-2xl text-foreground">{meta.name}</h3>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-text-mute">
                      {item.body}
                    </p>
                    {meta.certificate ? (
                      <a
                        href={meta.certificate}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-foreground/85 transition hover:text-foreground"
                      >
                        {c.affiliations.viewCertificate}
                        <ArrowUpRight className="h-4 w-4 text-accent" aria-hidden />
                      </a>
                    ) : null}
                  </article>
                );
              })}
            </div>
          </Reveal>
        </section>

        <ContactBand locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  );
}
