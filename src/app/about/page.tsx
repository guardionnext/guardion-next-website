import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, Scale, Eye, ArrowUpRight, HeartHandshake, BadgeCheck } from "lucide-react";
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

const FOUNDER_QUALS = [
  "Ronin South Africa — Close Protection (FREC3 Medical, Firearms & Advanced Driving)",
  "Australian Defence Force — Royal Australian Artillery (2013–2021)",
  "Licensed Private Investigator",
  "NGV1 Security Clearance",
  "Diploma of Security Risk Management",
  "Certificate IV in Security Management",
  "SA Firearms Licence for Security (H6)",
  "Heavy Combination & advanced protective driving licences",
];

const AFFILIATIONS = [
  {
    icon: HeartHandshake,
    label: "Veteran support",
    name: "Soldier On",
    logo: "/soldieron.png",
    logoAlt: "Soldier On",
    certificate: "/certificates/soldier-on.pdf",
    body: "Guardion is a veteran-owned business, and we give back to the military community that shaped us. We are proud supporters of Soldier On — a not-for-profit delivering holistic support to current and former Australian Defence Force personnel and their families. Soldier On has featured our partnership in an article, reflecting the values we share with those who have served.",
  },
  {
    icon: BadgeCheck,
    label: "Industry membership",
    name: "ASIAL",
    logo: "/asial.jpg",
    logoAlt: "Australian Security Industry Association Limited (ASIAL)",
    certificate: "/certificates/asial.pdf",
    body: "Guardion is a member of the Australian Security Industry Association Limited (ASIAL), the peak body for Australia's security profession. Membership holds us to ASIAL's standards of professionalism, integrity and compliance, and keeps us engaged with industry best practice through training, accreditation and regulatory engagement.",
  },
];

export const metadata: Metadata = {
  title: "About — James McKelliff & the Guardion Standard | Guardion",
  description:
    "Guardion is led by James McKelliff — a Ronin South Africa–certified close protection operator and Australian Defence Force veteran with more than eighteen years in protection and investigations.",
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
    "Founder and principal of Guardion. Ronin South Africa–certified close protection operator and Australian Defence Force (Royal Australian Artillery) veteran with more than eighteen years in the security industry.",
  knowsAbout: [
    "Close protection",
    "Executive protection",
    "Residential security",
    "Security driving",
    "Private investigations",
  ],
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
                  Guardion is led by James McKelliff, who has spent more than
                  eighteen years in protection and public-safety roles across
                  military and civilian settings. He is a Ronin South
                  Africa–certified close protection operator, trained to the
                  FREC3 pre-hospital care standard and in firearms and advanced
                  protective driving.
                </p>
                <p>
                  From 2013 to 2021 he served with the Australian Defence Force
                  in the Royal Australian Artillery, on an air-defence missile
                  and radar team charged with protecting land forces. He
                  qualified as a military driving instructor and combat-fitness
                  leader, mentored incoming soldiers, and deployed on Operation
                  Bushfire Assist. That grounding — readiness, planning and
                  disciplined execution under pressure — still shapes how every
                  Guardion task is prepared.
                </p>
                <p>
                  His civilian career spans the full breadth of the industry:
                  cash-in-transit and armoured work, crowd control and venue
                  security, residential protection teams, and licensed private
                  investigations conducted under instruction from law firms. He
                  has led night-time security operations, run convoy movements
                  with encrypted team communications, and built and supervised
                  trusted protection details for private clients.
                </p>
                <p>
                  In recent years his work has taken him into high-profile
                  environments — international sport and touring teams,
                  motorsport and televised production — providing close
                  protection for chairmen, chief executives and their families
                  in Australia and overseas. In keeping with the firm&apos;s
                  first principle, the people he protects are not named.
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

            {/* Training & qualifications */}
            <div className="mt-16 border-t border-border pt-12 md:mt-20 md:pt-16">
              <span className="eyebrow mb-6">Training &amp; qualifications</span>
              <ul className="mt-8 grid gap-x-10 gap-y-4 sm:grid-cols-2">
                {FOUNDER_QUALS.map((q) => (
                  <li
                    key={q}
                    className="border-l border-border pl-4 text-sm leading-relaxed text-text-mute"
                  >
                    {q}
                  </li>
                ))}
              </ul>
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

        {/* Compliance & affiliations */}
        <section className="border-t border-border bg-background">
          <div className="mx-auto max-w-[1280px] px-6 pb-24 md:pb-32">
            <div className="max-w-[60ch]">
              <span className="eyebrow mb-6">Compliance &amp; affiliations</span>
              <h2 className="mt-6 font-serif text-3xl leading-[1.08] text-foreground md:text-4xl">
                Accountable to more than our clients.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-text-mute md:text-[17px]">
                Guardion operates as an ethical member of the security and
                risk-management industry — compliant with the rules,
                regulations and legislation that govern it. We value our people
                and our clients, and respect the countries in which we work.
              </p>
            </div>
            <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
              {AFFILIATIONS.map(({ icon: Icon, label, name, body, certificate, logo, logoAlt }) => (
                <article key={name} className="flex flex-col bg-surface p-8 md:p-10">
                  <span className="relative flex h-16 w-40 items-center justify-center rounded-md bg-white p-3">
                    <Image
                      src={logo}
                      alt={logoAlt}
                      fill
                      sizes="160px"
                      className="object-contain p-1.5"
                    />
                  </span>
                  <div className="mt-7 flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-text-mute">
                    <Icon className="h-4 w-4 text-accent" aria-hidden />
                    {label}
                  </div>
                  <h3 className="mt-4 font-serif text-2xl text-foreground">{name}</h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-text-mute">
                    {body}
                  </p>
                  {certificate ? (
                    <a
                      href={certificate}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-foreground/85 transition hover:text-foreground"
                    >
                      View certificate
                      <ArrowUpRight className="h-4 w-4 text-accent" aria-hidden />
                    </a>
                  ) : null}
                </article>
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
