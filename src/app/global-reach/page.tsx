import type { Metadata } from "next";
import { Globe2, PlaneTakeoff, Users, MapPin } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ContactBand } from "@/components/site/ContactBand";
import { Reveal } from "@/components/site/Reveal";
import { HeroBackdrop } from "@/components/site/HeroBackdrop";
import { LionWatermark } from "@/components/site/LionWatermark";
import { GlobeGraticule } from "@/components/site/GlobeGraticule";

const STATES = [
  { code: "QLD", name: "Queensland" },
  { code: "NSW", name: "New South Wales" },
  { code: "ACT", name: "Australian Capital Territory" },
  { code: "VIC", name: "Victoria" },
  { code: "SA", name: "South Australia" },
];

const STEPS = [
  {
    title: "Advance planning",
    body: "Route studies, venue reconnaissance, medical routing and contingency plans are drafted before the principal departs Australia. Nothing is improvised on arrival.",
  },
  {
    title: "Local liaison",
    body: "We engage vetted operators, drivers and, where appropriate, law enforcement or hotel security in-country. Every partner is briefed to Guardion's operating standard.",
  },
  {
    title: "Cultural awareness",
    body: "Protocol, dress, communication and threat picture are calibrated to the destination. Discretion looks different in Tokyo, Riyadh, Milan and Los Angeles — we adjust accordingly.",
  },
  {
    title: "Coordinated logistics",
    body: "Aviation, ground movement, accommodation and personal staff are sequenced into a single plan, held by one point of contact in Australia and one on the ground.",
  },
];

export const metadata: Metadata = {
  title: "Global Reach — Worldwide Protection Coordination | Guardion",
  description:
    "An Australian licensed base with a vetted global network. Guardion coordinates executive and family travel security anywhere in the world, always within local law.",
  alternates: { canonical: "/global-reach" },
  openGraph: {
    title: "Global Reach — Guardion",
    description:
      "How Guardion coordinates protection worldwide from its Australian base — advance planning, local liaison, cultural awareness and single-point accountability.",
    url: "/global-reach",
    siteName: "Guardion",
    type: "website",
  },
};

export default function GlobalReach() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main id="main">
        <section className="grain vignette relative min-h-[68svh] overflow-hidden">
          <HeroBackdrop />
          <div className="relative z-10 mx-auto flex min-h-[68svh] max-w-[1280px] flex-col justify-end px-6 pb-20 pt-40 md:pb-28">
            <span className="eyebrow mb-6">Global Reach</span>
            <h1 className="max-w-[24ch] font-serif text-[40px] leading-[1.03] tracking-tight text-foreground sm:text-5xl md:text-[64px]">
              An Australian base. A vetted network the world over.
            </h1>
            <p className="mt-8 max-w-[62ch] text-base leading-relaxed text-text-mute md:text-lg">
              Guardion is licensed and headquartered in Australia. Beyond our
              own borders we operate through a carefully selected network of
              trusted partners — coordinating protection wherever a principal
              or their family need to travel, always within local law.
            </p>
          </div>
        </section>

        {/* Operating model */}
        <section className="border-t border-border bg-background">
          <Reveal className="mx-auto max-w-[1280px] px-6 py-24 md:py-32">
            <div className="grid gap-16 md:grid-cols-[1fr_1.6fr]">
              <div>
                <span className="eyebrow mb-6">The operating model</span>
                <h2 className="mt-6 max-w-[18ch] font-serif text-3xl leading-[1.08] text-foreground md:text-4xl">
                  Honest about what we own — and what we coordinate.
                </h2>
              </div>
              <div className="max-w-[64ch] space-y-6 text-base leading-relaxed text-text-mute md:text-[17px]">
                <p>
                  Our licensed operating base is Australia. We do not claim
                  offices, standing teams or security licences in countries
                  where we do not hold them. What we do hold, and what has
                  been built over years, is a shortlist of vetted operators
                  and firms abroad whose standards match our own.
                </p>
                <p>
                  For international engagements, Guardion remains the single
                  point of accountability for the client. Planning, briefing,
                  quality control and communication are held in-house. Local
                  execution is delivered by partners who are licensed in
                  their jurisdiction, briefed to our brief, and answerable
                  to us for the duration of the engagement.
                </p>
                <p>
                  This model is deliberate. It keeps the client relationship
                  simple, keeps the operating footprint honest, and keeps
                  every action inside the law of the country it is taken in.
                </p>
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
                <span className="eyebrow mb-6">Lead use case</span>
                <h2 className="mt-6 max-w-[22ch] font-serif text-3xl leading-[1.08] text-foreground md:text-4xl">
                  Executive and family travel security.
                </h2>
                <p className="mt-8 max-w-[60ch] text-base leading-relaxed text-text-mute md:text-[17px]">
                  Most international requests we receive concern travel — a
                  board meeting overseas, a family holiday, a relocation, a
                  sensitive negotiation, a public appearance abroad. Travel
                  is where routine breaks down: unfamiliar cities, unfamiliar
                  drivers, unfamiliar venues, and threat pictures that shift
                  from one border to the next.
                </p>
                <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-text-mute md:text-[17px]">
                  We plan around that. A principal or family travelling with
                  Guardion should feel that the trip has been rehearsed
                  before they left, and that someone competent is always one
                  step ahead of them on the ground.
                </p>
              </div>
              <ul className="grid gap-px overflow-hidden border border-border bg-border">
                {[
                  { icon: PlaneTakeoff, label: "Private and commercial aviation coordination" },
                  { icon: Users, label: "Family, staff and minor-child specific planning" },
                  { icon: Globe2, label: "In-country liaison with vetted local partners" },
                  { icon: MapPin, label: "Medical, evacuation and contingency routing" },
                ].map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-start gap-4 bg-surface p-6">
                    <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center border border-border text-accent">
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <span className="text-sm leading-relaxed text-foreground/90">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>

        {/* How an international engagement works */}
        <section className="border-t border-border bg-background">
          <Reveal className="mx-auto max-w-[1280px] px-6 py-24 md:py-32">
            <div className="max-w-[52ch]">
              <span className="eyebrow mb-6">A typical international engagement</span>
              <h2 className="mt-6 font-serif text-3xl leading-[1.08] text-foreground md:text-4xl">
                Prepared in Australia. Executed on the ground.
              </h2>
            </div>
            <ol className="mt-16 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((step, i) => (
                <li key={step.title} className="bg-surface p-8 md:p-10">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-text-mute tabular-nums">
                    Step 0{i + 1}
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
                  <span className="eyebrow mb-6">Australian licensed footprint</span>
                  <h2 className="mt-6 max-w-[20ch] font-serif text-3xl leading-[1.1] text-foreground md:text-[34px]">
                    Licensed to operate directly in five Australian states and
                    territories.
                  </h2>
                  <div className="relative mx-auto mt-12 hidden w-full max-w-[300px] md:block">
                    <div className="scope-rings pointer-events-none absolute inset-[-12%] z-0 opacity-60" aria-hidden />
                    <GlobeGraticule className="relative z-10 text-border" />
                  </div>
                </div>
                <div>
                  <p className="max-w-[58ch] text-base leading-relaxed text-text-mute">
                    Within Australia, Guardion holds security licensing across
                    Queensland, New South Wales, the Australian Capital
                    Territory, Victoria and South Australia. Assignments in
                    other Australian jurisdictions are coordinated through
                    locally licensed partners on the same terms as our
                    international engagements.
                  </p>
                  <ul className="mt-8 grid grid-cols-2 gap-px overflow-hidden border border-border bg-border sm:grid-cols-5">
                    {STATES.map((s) => (
                      <li key={s.code} className="bg-surface p-5">
                        <div className="text-[10px] uppercase tracking-[0.22em] text-text-mute">
                          {s.code}
                        </div>
                        <div className="mt-2 text-sm text-foreground/90">{s.name}</div>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-8 text-xs uppercase tracking-[0.18em] text-text-mute">
                    International engagements are coordinated within local jurisdiction.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <ContactBand />
      </main>
      <Footer />
    </div>
  );
}
