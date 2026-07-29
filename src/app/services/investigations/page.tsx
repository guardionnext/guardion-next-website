import type { Metadata } from "next";
import { ServicePage, buildServiceJsonLd, type ServiceContent } from "@/components/site/ServicePage";

const content: ServiceContent = {
  slug: "investigations",
  title: "Investigations",
  eyebrow: "Investigations",
  promise:
    "Lawful, confidential private enquiries that produce evidence fit for court, board or family office — and, where warranted, a protective response from the same firm.",
  coversHeading: "Answers you can act on — and rely on in a hearing.",
  coversBody: [
    "Guardion's investigations practice exists to answer difficult questions properly. Enquiries are conducted by licensed investigators to a documented standard, with evidence gathered lawfully and preserved so it holds up if the matter goes further — into a courtroom, a board paper, a family office meeting, or a dispute between principals. Every step is designed with admissibility and confidentiality in mind from the outset.",
    "We do not take work that requires unlawful methods. We do not pretend to. Where a client's expectation cannot be met inside the law, we say so plainly and, where appropriate, propose a lawful alternative that will hold up under scrutiny. This is the discipline that makes our findings useful when it matters.",
    "Because Guardion also delivers protection, an investigation that uncovers a genuine threat does not end at a written report. Where the client wishes, the same firm can plan and stand up the protective response — end to end, under one relationship. It is the reason many clients come to us in the first place.",
  ],
  coversPoints: [
    "Threat assessments and person-of-interest enquiries",
    "Discreet surveillance conducted by licensed investigators",
    "Corporate and commercial due diligence",
    "Locating persons and asset tracing enquiries",
    "Workplace, fraud and misconduct investigations",
    "Evidence packages prepared for legal proceedings",
  ],
  howHeading: "Instructed carefully. Delivered admissibly.",
  steps: [
    { title: "Instruct", body: "A confidential meeting — often with the client's lawyer present — to define the question, the acceptable methods, the deliverable and the boundary at which the enquiry stops. Nothing begins until this is written and agreed." },
    { title: "Plan", body: "An investigative plan under the relevant state licence and privacy obligations. Where the matter is legally sensitive, we work at counsel's direction so material remains within legal professional privilege." },
    { title: "Enquire", body: "Fieldwork conducted quietly by licensed investigators. Surveillance, interviews and open-source enquiries are logged contemporaneously, with chain-of-custody maintained for anything intended as evidence." },
    { title: "Report", body: "A written report drafted for its audience — court, board or principal — supported by an evidence bundle. Where findings warrant it, we brief on protective options before the report is circulated." },
  ],
  whoHeading: "For lawyers, family offices and principals who need it done properly.",
  whoBody:
    "The investigations practice is engaged most often by legal counsel, family offices, corporate boards and private principals dealing with a specific concern — a threat, a dispute, an insider issue, a missing person, an untested counterparty. Clients come to Guardion when a matter is sensitive enough that both the answer and the process for reaching it need to be defensible.",
  whoList: [
    "Law firms instructing on behalf of a client",
    "Family offices assessing counterparties or staff",
    "Boards responding to a suspected internal issue",
    "Individuals dealing with harassment, stalking or a persistent threat",
  ],
  exampleTitle: "A lawful enquiry into a persistent threat, followed by a coordinated protective response.",
  exampleBody:
    "Instructed through counsel, Guardion investigated a sustained pattern of contact directed at a principal and their family. Surveillance and open-source enquiries were conducted under state licence; the resulting evidence supported an application to court and was accepted without challenge. On the same instruction the firm stood up a discreet close-protection posture around the family and residence during the hearing period, drawing down as the risk subsided.",
  closingNote: "All identifying details are altered. Every enquiry is conducted within the law of the operating jurisdiction and under strict client confidentiality.",
};

export const metadata: Metadata = {
  title: "Private Investigations Australia — Licensed | Guardion",
  description:
    "Licensed private investigations producing court-admissible evidence. Threat assessments, surveillance, due diligence and workplace enquiries, in strict confidence.",
  alternates: { canonical: "/services/investigations" },
  openGraph: {
    title: "Investigations — Guardion",
    description:
      "Lawful, confidential enquiries that stand up in court. When findings warrant it, the same firm can stand up the protective response.",
    url: "/services/investigations",
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
