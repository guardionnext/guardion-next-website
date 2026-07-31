import type { Metadata } from "next";
import { ShieldAlert } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ContactBand } from "@/components/site/ContactBand";
import { Reveal } from "@/components/site/Reveal";
import { HeroBackdrop } from "@/components/site/HeroBackdrop";
import { CaseStudyCard, type CaseStudy } from "@/components/site/CaseStudyCard";

const STUDIES: CaseStudy[] = [
  {
    reference: "GRD-PA-014",
    sector: "Public appearance · entertainment",
    headline: "A credible threat surfaced days before a public appearance.",
    situation:
      "A public-facing client was scheduled to attend a ticketed event in an Australian capital when a specific, personally-directed threat was received through social channels. The client's team asked whether the appearance should proceed and, if so, on what terms.",
    approach:
      "Our investigators triaged the source and credibility of the threat within twenty-four hours. In parallel, a close-protection team conducted venue reconnaissance, agreed arrival and egress routes with the venue and local police liaison, and rehearsed a low-visibility protective posture that would not alter the client's on-stage experience.",
    outcome:
      "The appearance proceeded as planned. The threat actor was identified and referred to authorities for handling under the appropriate law. The client's audience saw a normal event; the client saw a calm, quiet team who never had to raise their profile above what the room required.",
  },
  {
    reference: "GRD-RS-021",
    sector: "Residential · high-profile family",
    headline: "A residential security review for a high-profile family.",
    situation:
      "A family whose principal had recently taken on a more public role asked Guardion to review their primary residence and the daily routines of the household. Their existing arrangements had grown up piecemeal over years and had not been assessed as a whole.",
    approach:
      "A principal of the firm walked the property with the family, mapped the routines of every adult and child in the household, and produced a written assessment covering physical hardening, access control, staff vetting, communication protocols and a school-run plan. Recommendations were sequenced by risk, not by cost, and delivered without pressure to buy hardware.",
    outcome:
      "The family adopted the recommendations over the following months. A standing point of contact was retained inside Guardion, available around the clock. Day-to-day life for the family continued to look, from the outside, unremarkable — which is what they had asked for.",
  },
  {
    reference: "GRD-IN-032",
    sector: "Investigations · corporate",
    headline: "A discreet enquiry supporting a corporate client.",
    situation:
      "A corporate client suspected that confidential internal material was reaching a competitor. Because the matter potentially involved employees, it required an enquiry that would stand up if it became a formal dispute — while remaining invisible to the wider organisation until then.",
    approach:
      "Guardion scoped the enquiry with the client's external legal counsel so that every step was lawful, proportionate and admissible. Open-source research, discreet interviews and structured evidence handling were carried out over several weeks by a small, named team, with regular briefings to counsel rather than to the wider business.",
    outcome:
      "A concise, evidence-referenced report was delivered to counsel. The client acted on it through its lawyers on terms of its own choosing. Guardion's role — and the client's identity — remained confidential throughout, as they remain today.",
  },
];

export const metadata: Metadata = {
  title: "Our Work — Anonymised Case Studies | Guardion",
  description:
    "Anonymised scenarios showing how Guardion approaches protection and investigations. Situation, approach and outcome — all identifying detail removed.",
  alternates: { canonical: "/our-work" },
  openGraph: {
    title: "Our Work — Guardion",
    description:
      "How Guardion approaches real engagements — anonymised, structured as Situation, Approach and Outcome.",
    url: "/our-work",
    siteName: "Guardion",
    type: "website",
  },
};

export default function OurWork() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main id="main">
        <section className="grain vignette relative min-h-[60svh] overflow-hidden">
          <HeroBackdrop />
          <div className="relative z-10 mx-auto flex min-h-[60svh] max-w-[1280px] flex-col justify-end px-6 pb-20 pt-40 md:pb-28">
            <span className="eyebrow mb-6">Our Work</span>
            <h1 className="max-w-[22ch] font-serif text-[40px] leading-[1.03] tracking-tight text-foreground sm:text-5xl md:text-[64px]">
              What the work looks like, when we can say anything at all.
            </h1>
            <p className="mt-8 max-w-[62ch] text-base leading-relaxed text-text-mute md:text-lg">
              The scenarios below illustrate how Guardion approaches the
              problems clients bring us. They are representative, not a
              client list.
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
                All identifying details in the case studies below —
                including names, locations, dates, sectors where necessary,
                and any operational specifics that could identify a client
                or an operative — have been removed or altered. Each
                scenario is drawn from the type of work Guardion is engaged
                to do, and is presented here to show how we approach it, not
                to disclose that we did it.
              </p>
            </div>
          </Reveal>
        </section>

        {/* Case studies */}
        <section className="bg-background">
          <div className="mx-auto max-w-[1280px] space-y-10 px-6 py-16 md:space-y-14 md:py-24">
            {STUDIES.map((study, i) => (
              <Reveal key={study.reference}>
                <CaseStudyCard study={study} index={i} />
              </Reveal>
            ))}
          </div>
        </section>

        <ContactBand />
      </main>
      <Footer />
    </div>
  );
}
