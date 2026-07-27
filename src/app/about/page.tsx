import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, Scale, Eye } from "lucide-react";
import heroImage from "@/assets/hero-night-city.jpg";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ContactBand } from "@/components/site/ContactBand";
import { SITE } from "@/lib/site";

const VALUES = [
  {
    icon: Eye,
    title: "Discretion",
    body: "Client identities, movements and engagements are never disclosed — before, during or after the work. Silence is part of the service.",
  },
  {
    icon: ShieldCheck,
    title: "Precision",
    body: "Plans are written, rehearsed and reviewed. Nothing is improvised where preparation was possible.",
  },
  {
    icon: Scale,
    title: "Professionalism",
    body: "Lawful, licensed, understated. Our operators represent the client in every room they enter and every street they cross.",
  },
];

export const metadata: Metadata = {
  title: "About — James McKelliff & the Guardion Standard | Guardion",
  description:
    "Guardion is led by James McKelliff. Learn about the firm's founder, its operating philosophy and the standards that govern every engagement.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Guardion",
    description:
      "The firm, its founder, and the values behind every Guardion engagement — discretion, precision, professionalism.",
    url: "/about",
    siteName: "Guardion",
    type: "profile",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "James McKelliff",
  jobTitle: "Founder & Principal",
  worksFor: {
    "@type": "Organization",
    name: "Guardion",
  },
  description:
    "Founder of Guardion. Background in law enforcement and military service.",
  url: "/about",
};

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="main">
        <section className="grain vignette relative min-h-[64svh] overflow-hidden">
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
                "linear-gradient(180deg, rgba(14,16,19,0.6) 0%, rgba(14,16,19,0.82) 55%, rgba(14,16,19,0.98) 100%)",
            }}
            aria-hidden
          />
          <div className="relative z-10 mx-auto flex min-h-[64svh] max-w-[1280px] flex-col justify-end px-6 pb-20 pt-40 md:pb-28">
            <span className="eyebrow mb-6">About Guardion</span>
            <h1 className="max-w-[22ch] font-serif text-[40px] leading-[1.03] tracking-tight text-foreground sm:text-5xl md:text-[64px]">
              A small firm, held to a single standard.
            </h1>
            <p className="mt-8 max-w-[60ch] text-base leading-relaxed text-text-mute md:text-lg">
              Guardion was founded to bring protection and investigations
              together under one professional standard — quiet, precise, and
              accountable to the people who trust us.
            </p>
          </div>
        </section>

        {/* Founder */}
        <section className="border-t border-border bg-background">
          <div className="mx-auto max-w-[1280px] px-6 py-24 md:py-32">
            <div className="grid gap-16 md:grid-cols-[1fr_1.6fr]">
              <div>
                <span className="eyebrow mb-6">Founder</span>
                <h2 className="mt-6 max-w-[16ch] font-serif text-3xl leading-[1.08] text-foreground md:text-4xl">
                  James McKelliff.
                </h2>
                <p className="mt-4 text-sm uppercase tracking-[0.18em] text-text-mute">
                  Founder &amp; Principal
                </p>
              </div>
              <div className="max-w-[64ch] space-y-6 text-base leading-relaxed text-text-mute md:text-[17px]">
                <p>
                  Guardion is led by James McKelliff. His career has been
                  spent in law enforcement and military service before
                  founding the firm — disciplines that shape both how the
                  work is planned and how it is conducted in the field.
                </p>
                <p className="border-l border-border pl-6 italic text-foreground/80">
                  [James&apos;s background — full biographical detail to be
                  confirmed. This section will carry his specific service
                  history, appointments and qualifications once approved for
                  publication.]
                </p>
                <p>
                  His philosophy is straightforward. Good protection is
                  boring on the outside and thoroughly rehearsed on the
                  inside. Good investigations are patient, lawful, and worth
                  standing behind in a courtroom. Neither is theatre. Both
                  are, above all, a duty to the client.
                </p>
                <p>
                  Every Guardion engagement is signed off by a principal of
                  the firm. Clients speak to someone accountable — not a
                  duty desk, not a rotating account manager.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="grain border-t border-border bg-surface">
          <div className="relative z-10 mx-auto max-w-[1280px] px-6 py-24 md:py-32">
            <div className="max-w-[52ch]">
              <span className="eyebrow mb-6">Values</span>
              <h2 className="mt-6 font-serif text-3xl leading-[1.08] text-foreground md:text-4xl">
                Three words we hold ourselves to.
              </h2>
            </div>
            <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
              {VALUES.map(({ icon: Icon, title, body }) => (
                <div key={title} className="bg-surface p-8 md:p-10">
                  <span className="inline-flex h-10 w-10 items-center justify-center border border-border text-accent">
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  <h3 className="mt-6 font-serif text-xl text-foreground">{title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-text-mute">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Firm */}
        <section className="border-t border-border bg-background">
          <div className="mx-auto max-w-[1280px] px-6 py-24 md:py-32">
            <div className="grid gap-16 md:grid-cols-[1fr_1.6fr]">
              <div>
                <span className="eyebrow mb-6">The firm</span>
                <h2 className="mt-6 max-w-[20ch] font-serif text-3xl leading-[1.08] text-foreground md:text-4xl">
                  Deliberately small. Deliberately narrow.
                </h2>
              </div>
              <div className="max-w-[64ch] space-y-6 text-base leading-relaxed text-text-mute md:text-[17px]">
                <p>
                  Guardion accepts a limited number of engagements. That is a
                  choice, not a marketing line. Close protection and lawful
                  investigations are exacting disciplines, and both suffer
                  when a firm grows past what it can personally supervise.
                </p>
                <p>
                  Our operators are chosen for temperament as much as
                  training. The people we place beside a principal are calm,
                  literate, presentable, and comfortable in the rooms our
                  clients move through — as well as capable of the harder
                  end of the work if the picture changes.
                </p>
                <p>
                  We are an Australian firm. Our licensed operating base is
                  Australia, and our international work is coordinated
                  through vetted local partners inside their own
                  jurisdictions. Everything we do is done within the law of
                  the country it is done in.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section className="border-t border-border bg-background">
          <div className="mx-auto max-w-[1280px] px-6 pb-24 md:pb-32">
            <div className="border border-border bg-surface p-10 md:p-14">
              <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-start">
                <div>
                  <span className="eyebrow mb-6">Credentials &amp; licensing</span>
                  <h2 className="mt-6 max-w-[20ch] font-serif text-3xl leading-[1.1] text-foreground md:text-[34px]">
                    Registered and licensed under Australian law.
                  </h2>
                </div>
                <div>
                  <p className="max-w-[58ch] text-base leading-relaxed text-text-mute">
                    Guardion is registered as an Australian company and
                    holds security licensing across five states and
                    territories. Licence
                    numbers are published below and updated when they are
                    renewed. Copies are available on request.
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
          </div>
        </section>

        <ContactBand />
      </main>
      <Footer />
    </div>
  );
}
