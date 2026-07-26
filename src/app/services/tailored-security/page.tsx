import type { Metadata } from "next";
import { ServicePage, buildServiceJsonLd, type ServiceContent } from "@/components/site/ServicePage";

const content: ServiceContent = {
  slug: "tailored-security",
  title: "Tailored Security",
  eyebrow: "Tailored Security",
  promise:
    "Bespoke programs for events, sensitive transitions and threat pictures that do not fit inside a standard brochure.",
  coversHeading: "When the requirement is unusual, the response should be too.",
  coversBody: [
    "Not every requirement is a standing detail or a single driver. Some sit deliberately across categories: a private wedding on a remote property; a difficult family transition; a founder's public exit; a house move under media attention; a philanthropic visit to a sensitive region; the closure of a business unit. These situations reward planning rather than headcount, and they usually benefit from being handled by a single firm that can move between disciplines as the day requires.",
    "Tailored security engagements begin with the situation, not the service list. We spend time understanding what is actually being asked — the people involved, the sensitivities, what success looks like, what the client wants to avoid at all costs — and only then design the smallest, quietest program that meets it. In many cases the finished program combines close protection, security driving, a residential posture and an investigative strand under one point of accountability.",
    "The value here is coordination. A single principal of the firm owns the engagement end to end; the client does not have to translate between vendors, brief the same context twice, or reconcile competing accounts of what happened.",
  ],
  coversPoints: [
    "Private events, weddings and milestone gatherings",
    "Family transitions, separations and estate matters",
    "Corporate closures, redundancies and announcements",
    "Sensitive relocations and house moves",
    "Philanthropic or personal travel to unusual locations",
    "One-off engagements requiring several disciplines together",
  ],
  howHeading: "Designed to the situation, delivered as one program.",
  steps: [
    { title: "Listen", body: "An unhurried conversation with the principals or their advisers. We ask a lot of questions and write nothing down that has not been agreed. The goal at this stage is a shared understanding, not a proposal." },
    { title: "Design", body: "A written program tailored to the situation — the smallest, quietest arrangement that meets it. Disciplines are combined only where they earn their place; nothing is included because it fills a page." },
    { title: "Deliver", body: "A named lead runs the engagement across every strand — protection, driving, residence, enquiry — so the client speaks to one person and receives one account of the day." },
    { title: "Close", body: "A single written debrief and, where appropriate, a set of recommendations for what should be sustained, adjusted or stood down. Most tailored engagements end cleanly; some evolve into standing work." },
  ],
  whoHeading: "For situations a standard package would misread.",
  whoBody:
    "Tailored security is engaged when a requirement is genuinely unusual — in scale, in sensitivity, in the mix of disciplines needed — or when several ordinary requirements need to be handled together with a single point of accountability. Advisers, family offices and executive assistants often bring these engagements to us on behalf of a principal who does not want to explain the situation more than once.",
  whoList: [
    "Private events on non-standard venues or properties",
    "Family offices managing a sensitive transition",
    "Advisers coordinating protection alongside legal matters",
    "Principals who need several capabilities under one hand",
  ],
  exampleTitle: "A private wedding on a remote property, planned as a single unbranded program.",
  exampleBody:
    "For a private family wedding held on a rural property with expected media interest and a genuine security concern relating to one guest, Guardion designed a program combining an advance survey, discreet perimeter management, close protection for two principals, security driving for arrivals and departures, and a quiet investigative watch on the flagged individual. Guests experienced a well-run private event; the family experienced the day they had wanted; the flagged risk never became visible.",
  closingNote: "Details and identifying facts are altered to protect the client.",
};

export const metadata: Metadata = {
  title: "Tailored Security Programs & Bespoke Protection | Guardion",
  description:
    "Bespoke security programs for private events, sensitive transitions and unusual threat pictures. Multiple disciplines, one point of accountability.",
  alternates: { canonical: "/services/tailored-security" },
  openGraph: {
    title: "Tailored Security — Guardion",
    description:
      "When the requirement is unusual, the response should be too. Tailored programs delivered under a single principal of the firm.",
    url: "/services/tailored-security",
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
