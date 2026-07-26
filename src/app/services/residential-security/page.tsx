import type { Metadata } from "next";
import { ServicePage, buildServiceJsonLd, type ServiceContent } from "@/components/site/ServicePage";

const content: ServiceContent = {
  slug: "residential-security",
  title: "Residential Security",
  eyebrow: "Residential Security",
  promise:
    "Layered protection of the home — assessed, hardened and, where required, quietly manned around the clock.",
  coversHeading: "The address treated as a considered environment.",
  coversBody: [
    "The home is where a principal is least on guard and most identifiable. It is where family members, staff, deliveries and contractors intersect on a daily basis, and where a lapse is felt most acutely. Guardion approaches residential security as an environment to be understood before it is defended: how the property is used, who has access, how information about the family circulates, and where the real vulnerabilities sit.",
    "Our residential work begins with a written assessment of the property and its routines. From there we recommend a proportionate response — often a combination of physical hardening, procedural changes for household staff, discreet electronic measures, and, when the threat picture warrants it, a standing residential team. The intent is a home that feels the same to the family as it always has, while quietly behaving differently.",
    "Where a standing team is in place, operators are selected for judgement and demeanour first. They understand household life, brief incoming staff and contractors, hold the perimeter without turning the driveway into a checkpoint, and coordinate with close-protection and driving teams when the family moves.",
  ],
  coversPoints: [
    "Written residential threat and vulnerability assessment",
    "Physical hardening advice — access, locks, glazing, lighting",
    "Procedures for household staff, deliveries and contractors",
    "Standing 24-hour residential teams where warranted",
    "Discreet electronic detection and response measures",
    "Coordination with close protection and security driving",
  ],
  howHeading: "Assess before we defend.",
  steps: [
    { title: "Survey", body: "A confidential site visit — usually presented to the household as an insurance or property review — to document the property, its routines and the people who move through it." },
    { title: "Report", body: "A written residential security report with prioritised recommendations, costed where possible, and separated into changes the household can make and work Guardion can perform." },
    { title: "Harden", body: "Implementation of agreed physical, procedural and electronic measures. Where staff behaviours need to change, we brief in person and in a language that does not alarm the family." },
    { title: "Sustain", body: "Ongoing review — quarterly or annually — plus a standing team where a persistent threat is present. New staff and contractors are re-briefed as a matter of routine." },
  ],
  whoHeading: "For families whose home is a known address.",
  whoBody:
    "Residential security suits principals whose address is publicly identifiable, whose household is large enough that access control has become informal, or whose circumstances — a media event, a legal dispute, a separation, an unwelcome contact — have suddenly made the home feel exposed. It is equally suited to a single-property review as it is to a standing multi-residence program.",
  whoList: [
    "Primary residences of high-net-worth families",
    "Secondary and holiday properties left empty for periods",
    "Executive residences during periods of corporate exposure",
    "Short-term hardening around a specific incident or event",
  ],
  exampleTitle: "A discreet upgrade to a family compound following a publicised event.",
  exampleBody:
    "After a family member's role attracted sustained public attention, Guardion conducted a full residential review of the primary home and a coastal property. Physical works were staged as ordinary renovations; household staff were re-briefed individually; a small standing team was placed on the primary residence for a defined window and stepped down as attention subsided. The family retained the character of both homes and, at their request, no household member outside the principals was ever told the reason for the changes.",
  closingNote: "Details and identifying facts are altered to protect the client.",
};

export const metadata: Metadata = {
  title: "Residential Security & Estate Protection | Guardion",
  description:
    "Assessed, hardened and, where required, manned protection of primary and secondary residences. Discreet residential security for principals and their families.",
  alternates: { canonical: "/services/residential-security" },
  openGraph: {
    title: "Residential Security — Guardion",
    description:
      "The home treated as a considered environment. Written assessments, hardening and standing teams — proportionate to the threat.",
    url: "/services/residential-security",
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
