import { ShieldAlert } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ContactBand } from "@/components/site/ContactBand";
import { Reveal } from "@/components/site/Reveal";
import { HeroBackdrop } from "@/components/site/HeroBackdrop";
import { CaseStudyCard } from "@/components/site/CaseStudyCard";
import { type Locale } from "@/lib/i18n";
import { getOurWorkContent } from "@/lib/content/our-work";

export function OurWorkPage({ locale = "en" }: { locale?: Locale }) {
  const c = getOurWorkContent(locale);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header locale={locale} />
      <main id="main">
        <section className="grain vignette relative min-h-[60svh] overflow-hidden">
          <HeroBackdrop />
          <div className="relative z-10 mx-auto flex min-h-[60svh] max-w-[1280px] flex-col justify-end px-6 pb-20 pt-40 md:pb-28">
            <span className="eyebrow mb-6">{c.hero.eyebrow}</span>
            <h1 className="max-w-[22ch] font-serif text-[40px] leading-[1.03] tracking-tight text-foreground sm:text-5xl md:text-[64px]">
              {c.hero.h1}
            </h1>
            <p className="mt-8 max-w-[62ch] text-base leading-relaxed text-text-mute md:text-lg">
              {c.hero.body}
            </p>
          </div>
        </section>

        {/* Confidentiality note */}
        <section className="border-t border-border bg-background">
          <Reveal className="mx-auto max-w-[1280px] px-6 pb-4 pt-16">
            <div className="flex items-start gap-4 border border-border bg-surface p-6 md:p-8">
              <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center border border-border text-accent">
                <ShieldAlert className="h-4 w-4" aria-hidden />
              </span>
              <p className="max-w-[80ch] text-sm leading-relaxed text-text-mute">
                {c.confidentialityNote}
              </p>
            </div>
          </Reveal>
        </section>

        {/* Case studies */}
        <section className="bg-background">
          <div className="mx-auto max-w-[1280px] space-y-10 px-6 py-16 md:space-y-14 md:py-24">
            {c.studies.map((study, i) => (
              <Reveal key={study.reference}>
                <CaseStudyCard study={study} index={i} labels={c.caseLabels} />
              </Reveal>
            ))}
          </div>
        </section>

        <ContactBand locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  );
}
