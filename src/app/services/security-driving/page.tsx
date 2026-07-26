import type { Metadata } from "next";
import { ServicePage, buildServiceJsonLd, type ServiceContent } from "@/components/site/ServicePage";

const content: ServiceContent = {
  slug: "security-driving",
  title: "Security Driving",
  eyebrow: "Security Driving",
  promise:
    "Trained protective drivers and vetted vehicles — the safest interval of any principal's day, treated with the seriousness it deserves.",
  coversHeading: "A vehicle is a small, mobile venue.",
  coversBody: [
    "The drive is where most principals are least protected and most predictable. A repeated route, a known vehicle and an unhardened driver together represent the single largest exposure in an otherwise well-managed day. Guardion's security driving service treats the vehicle as a mobile venue: a controlled environment that has been chosen, prepared and rehearsed in advance.",
    "Drivers are selected from operators with recognised protective driving qualifications and current state security licences. They are trained in surveillance detection, defensive and evasive driving, first aid and route planning, and they are matched to the principal — a driver for a family with young children is not the same driver we would place with a visiting executive.",
    "Vehicles are sourced discreetly, presentable rather than conspicuous, mechanically checked before each engagement and kept clean of anything that identifies the principal or their itinerary. Where the threat picture warrants, we can arrange armoured options through vetted partners.",
  ],
  coversPoints: [
    "Trained, licensed protective drivers",
    "Vetted, presentation-grade vehicles",
    "Pre-driven route planning with alternates",
    "Airport, hotel and residence coordination",
    "Integration with close and executive protection",
    "Armoured vehicle options through vetted partners",
  ],
  howHeading: "Route, vehicle and driver — all chosen before the door opens.",
  steps: [
    { title: "Scope", body: "A short call to confirm principals, dates, movements, luggage, family members and any specific concerns about the route, the destinations or the visibility of the vehicle." },
    { title: "Prepare", body: "Route survey and alternates driven in advance. Vehicle selected and inspected. Driver briefed on the principal, the itinerary and the communications plan for the day." },
    { title: "Drive", body: "Timings held quietly. The driver is early, calm and unobtrusive at every pick-up and drop-off. If a protection team is present, the driver is part of that team, not adjacent to it." },
    { title: "Close", body: "A short handover at end of engagement — anything observed on the route, on foot at venues or around the residence that the principal or the wider team should be aware of." },
  ],
  whoHeading: "For anyone whose calendar the vehicle sits inside.",
  whoBody:
    "Security driving is engaged both as a standalone service — a driver for a visiting family, an evening event, a difficult school run — and as an integrated component of close and executive protection. Many long-term clients begin with driving alone and expand from there as trust is established.",
  whoList: [
    "Visiting principals requiring an Australian-based driver",
    "Families with young children on repeated routines",
    "Executives during periods of heightened exposure",
    "Sensitive one-off movements — legal, medical, personal",
  ],
  exampleTitle: "A visiting family's Australian leg, driven end to end by a single vetted team.",
  exampleBody:
    "For an internationally based family visiting Australia over a school holiday, Guardion provided a lead driver and a second vehicle for luggage and staff across a three-week itinerary. Routes between the residence, private schools' summer programs and coastal destinations were driven in advance. The same driver was retained for the entire visit — a deliberate choice, so the children experienced continuity rather than a rotation of strangers.",
  closingNote: "Details and identifying facts are altered to protect the client.",
};

export const metadata: Metadata = {
  title: "Security Driving & Protective Drivers Australia | Guardion",
  description:
    "Trained, licensed protective drivers and vetted vehicles for principals and families across Australia. Route planning, defensive driving and integrated protection.",
  alternates: { canonical: "/services/security-driving" },
  openGraph: {
    title: "Security Driving — Guardion",
    description:
      "The drive is often the most exposed part of the day. Guardion treats the vehicle as a mobile venue — planned, rehearsed and quietly held.",
    url: "/services/security-driving",
    siteName: "Guardion",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildServiceJsonLd(content)) }}
      />
      <ServicePage content={content} />
    </>
  );
}
