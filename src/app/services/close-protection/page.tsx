import type { Metadata } from "next";
import { ServicePage, buildServiceJsonLd, type ServiceContent } from "@/components/site/ServicePage";

const content: ServiceContent = {
  slug: "close-protection",
  title: "Close Protection",
  eyebrow: "Close Protection",
  promise:
    "Embedded, principal-focused protection that runs beside the client's day — quiet in ordinary moments, decisive in critical ones.",
  coversHeading: "A protective presence built around a single life.",
  coversBody: [
    "Close protection is the discipline of keeping one person — the principal — safe across the entire fabric of their day. It is not manned guarding, and it is not a uniform on a door. It is a small team of experienced operators who understand the principal's routine, movements, associates and pressures, and who quietly remove the friction and the risk that would otherwise touch them.",
    "A Guardion close-protection engagement typically combines a lead operator who works directly alongside the principal, a security driver, and — where the threat picture warrants it — a residence and advance capability. Numbers are set by requirement, not by theatre. In most cases the principal barely notices we are working; that is the intent.",
    "Every detail is planned to a written operations order and rehearsed in advance. Journeys are surveyed, venues are walked, communications are tested, and contingencies for medical, mechanical and hostile events are agreed before the principal leaves the door.",
  ],
  coversPoints: [
    "Personal escort — daily movements, meetings, evenings",
    "Advance work — venue, route and access reconnaissance",
    "Security driving integrated as standard",
    "Discreet baggage, hotel and residence coordination",
    "Medical and trauma-trained operators",
    "Encrypted communications between the team",
  ],
  howHeading: "A small, rehearsed team — never an entourage.",
  steps: [
    { title: "Consult", body: "A confidential conversation with a principal of the firm to understand the person, the concerns and the calendar ahead. Nothing is put in writing until you agree it should be." },
    { title: "Assess", body: "A written protective assessment: threat picture, exposure points across the routine, residence and travel, and the operator profile and posture that fits the principal's life." },
    { title: "Deploy", body: "A selected team with a lead operator as your single point of contact. Advance work, driver, communications and medical kit are in place before the first movement." },
    { title: "Review", body: "A quiet debrief on close of engagement — what was seen, what was adjusted, and any residual risk worth acting on. Standing details are reviewed on a set cadence." },
  ],
  whoHeading: "For principals whose day cannot be interrupted.",
  whoBody:
    "Close protection suits people whose profile, wealth, work or personal circumstances create sustained exposure — and who need that exposure managed without turning their life into a security operation. It is equally suited to a short, sensitive window: a court appearance, a public announcement, a family transition, an unwelcome contact.",
  whoList: [
    "High-net-worth individuals and their immediate family",
    "Executives and founders with a public profile",
    "Visiting principals requiring an Australian-based team",
    "Individuals subject to a specific, identified threat",
  ],
  exampleTitle: "A standing detail for a family with young children, structured to be invisible.",
  exampleBody:
    "Following a credible intrusion attempt at a family home, Guardion stood up a small standing detail for the principals and their children. Operators were selected for demeanour as much as capability; school drop-offs, weekend sport and household deliveries were quietly absorbed into the protective routine. Over eighteen months the family reported no further incidents and — importantly to them — no visible change to their children's experience of ordinary life.",
  closingNote: "Details and identifying facts are altered to protect the client.",
};

export const metadata: Metadata = {
  title: "Close Protection Services Australia | Guardion",
  description:
    "Discreet, embedded close protection for principals and families. Licensed operators, security driving and advance work — engaged quietly, delivered precisely.",
  alternates: { canonical: "/services/close-protection" },
  openGraph: {
    title: "Close Protection — Guardion",
    description:
      "Principal-focused close protection for high-net-worth individuals and executives. Quiet in ordinary moments, decisive in critical ones.",
    url: "/services/close-protection",
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
