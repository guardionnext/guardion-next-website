import type { Metadata } from "next";
import { ServicePage, buildServiceJsonLd, type ServiceContent } from "@/components/site/ServicePage";

const content: ServiceContent = {
  slug: "executive-protection",
  title: "Executive Protection",
  eyebrow: "Executive Protection",
  promise:
    "Coordinated security for executives across travel, meetings and public appearances — planned around the calendar, not bolted onto it.",
  coversHeading: "Corporate exposure, quietly managed.",
  coversBody: [
    "Executive protection is close protection built for corporate life. The principal is a chief executive, chair, founder, general counsel or public-facing spokesperson; the exposure moves with earnings announcements, hostile transactions, activist attention, redundancies, litigation and media cycles. The requirement is protection that fits inside a professional calendar without becoming the subject of it.",
    "Guardion works alongside the executive's office — most often a chief of staff, executive assistant or in-house security lead — as a discreet extension of the team. We do not brand ourselves in front of colleagues, clients or shareholders. Operators arrive dressed for the room, brief in advance and step back the moment the requirement passes.",
    "Engagements range from a single sensitive movement — an AGM, a site closure, a difficult all-hands — to standing programs for a named executive across an entire year of travel and appearances. Domestic and international legs are stitched together so the principal experiences one continuous, coordinated service.",
  ],
  coversPoints: [
    "AGMs, earnings days and public announcements",
    "Domestic and international business travel",
    "Airport meet-and-assist and lounge coordination",
    "Site visits, town halls and difficult conversations",
    "Media appearances and industry conferences",
    "Family protection during executive exposure",
  ],
  howHeading: "Integrated with the office, invisible to the room.",
  steps: [
    { title: "Brief", body: "A confidential briefing with the executive and, where appropriate, chief of staff or in-house counsel. We map the calendar, the exposure, and the internal appetite for visibility." },
    { title: "Plan", body: "A protective plan per movement or per program — routes, venues, hotels, drivers, contingencies and communications — signed off before anything is booked in the principal's name." },
    { title: "Execute", body: "A named lead operator runs each movement. Advance work, driver and any local partner are already in position. Colleagues meeting the executive rarely realise a team is present." },
    { title: "Report", body: "A short written report to the nominated office contact after each movement, and a quarterly review of the standing program — what is working, what should change, what should stop." },
  ],
  whoHeading: "For offices that need protection to behave like professional services.",
  whoBody:
    "Executive protection suits organisations whose leadership carries genuine — not theatrical — exposure, and who want that exposure handled with the same discretion they expect from external counsel or a family office. It is regularly engaged by ASX-listed companies, private groups, family offices and their advisers on behalf of a named principal.",
  whoList: [
    "Chief executives, chairs and founders",
    "Boards commissioning protection for a director",
    "General counsel managing hostile litigation exposure",
    "Chiefs of staff coordinating international travel",
  ],
  exampleTitle: "An international travel program built around a chief executive's quarterly cycle.",
  exampleBody:
    "For a listed-company chief executive whose role required regular travel across Asia, Europe and North America, Guardion built a rolling protective travel program keyed to the earnings calendar. An Australian lead operator travelled with the principal; local partners in each destination were briefed to a common standard and handed off through a single named point of contact. Over two years the program absorbed several sensitive announcements, a boardroom transition and one credible threat referral, without any of it becoming visible externally.",
  closingNote: "Details and identifying facts are altered to protect the client.",
};

export const metadata: Metadata = {
  title: "Executive Protection for CEOs & Boards | Guardion",
  description:
    "Coordinated protection for executives, chairs and founders across travel, AGMs and public appearances. Discreet, integrated with the office, delivered to a professional standard.",
  alternates: { canonical: "/services/executive-protection" },
  openGraph: {
    title: "Executive Protection — Guardion",
    description:
      "Corporate exposure, quietly managed. A protective program built around the executive calendar.",
    url: "/services/executive-protection",
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
