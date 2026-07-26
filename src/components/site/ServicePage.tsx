import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import heroImage from "@/assets/hero-night-city.jpg";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ContactBand } from "@/components/site/ContactBand";
import { SERVICES } from "@/lib/site";

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

export function ServicePage({ content }: { content: ServiceContent }) {
  const related = SERVICES.filter((s) => s.slug !== content.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main id="main">
        {/* Hero */}
        <section className="grain vignette relative min-h-[72svh] overflow-hidden">
          <Image
            src={heroImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
            aria-hidden
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(14,16,19,0.6) 0%, rgba(14,16,19,0.78) 55%, rgba(14,16,19,0.98) 100%)",
            }}
            aria-hidden
          />
          <div className="relative z-10 mx-auto flex min-h-[72svh] max-w-[1280px] flex-col justify-end px-6 pb-20 pt-40 md:pb-28">
            <nav aria-label="Breadcrumb" className="rise mb-8 text-[10px] uppercase tracking-[0.22em] text-text-mute">
              <Link href="/services" className="transition hover:text-foreground">Services</Link>
              <span className="mx-3 text-border">/</span>
              <span className="text-foreground/80">{content.eyebrow ?? "Capability"}</span>
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
          <div className="mx-auto max-w-[1280px] px-6 py-24 md:py-32">
            <div className="grid gap-16 md:grid-cols-[1fr_1.6fr]">
              <div>
                <span className="eyebrow mb-6">What it covers</span>
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
          </div>
        </section>

        {/* How we work */}
        <section className="grain border-t border-border bg-surface">
          <div className="relative z-10 mx-auto max-w-[1280px] px-6 py-24 md:py-32">
            <div className="max-w-[52ch]">
              <span className="eyebrow mb-6">How we work</span>
              <h2 className="mt-6 font-serif text-3xl leading-[1.08] text-foreground md:text-4xl">
                {content.howHeading ?? "A rehearsed, unhurried process."}
              </h2>
            </div>
            <ol className="mt-16 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
              {content.steps.map((step, i) => (
                <li key={step.title} className="bg-surface p-8 md:p-10">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-text-mute tabular-nums">
                    Step 0{i + 1}
                  </div>
                  <h3 className="mt-6 font-serif text-xl text-foreground">{step.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-text-mute">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Who it's for */}
        <section className="border-t border-border bg-background">
          <div className="mx-auto max-w-[1280px] px-6 py-24 md:py-32">
            <div className="grid gap-16 md:grid-cols-[1fr_1.6fr]">
              <div>
                <span className="eyebrow mb-6">Who it's for</span>
                <h2 className="mt-6 max-w-[20ch] font-serif text-3xl leading-[1.08] text-foreground md:text-4xl">
                  {content.whoHeading ?? "Fitted to the principal, not the brochure."}
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
          </div>
        </section>

        {/* Anonymised example */}
        <section className="border-t border-border bg-background">
          <div className="mx-auto max-w-[1280px] px-6 pb-24 md:pb-32">
            <div className="border border-border bg-surface p-10 md:p-14">
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-text-mute">
                <span className="h-2 w-2 bg-accent" aria-hidden />
                {content.exampleLabel ?? "Anonymised example"}
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
          </div>
        </section>

        {/* Related services */}
        <section className="border-t border-border bg-background">
          <div className="mx-auto max-w-[1280px] px-6 py-24 md:py-32">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <span className="eyebrow mb-6">Related capabilities</span>
                <h2 className="mt-6 max-w-[24ch] font-serif text-3xl leading-[1.08] text-foreground md:text-4xl">
                  Often engaged alongside this service.
                </h2>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm text-foreground/85 transition hover:text-foreground"
              >
                All services
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {related.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
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
                      Read more
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-text-mute transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ContactBand />
      </main>
      <Footer />
    </div>
  );
}

export function buildServiceJsonLd(content: ServiceContent) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: content.title,
    serviceType: content.title,
    provider: {
      "@type": "LocalBusiness",
      name: "Guardion",
      telephone: "+61 401 207 060",
      email: "info@guardion.com.au",
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Queensland" },
      { "@type": "AdministrativeArea", name: "New South Wales" },
      { "@type": "AdministrativeArea", name: "Australian Capital Territory" },
      { "@type": "AdministrativeArea", name: "Victoria" },
      { "@type": "AdministrativeArea", name: "South Australia" },
      { "@type": "Place", name: "International — coordinated through vetted partners" },
    ],
    description: content.promise,
    url: `/services/${content.slug}`,
  };
}
