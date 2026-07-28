import type { ReactNode } from "react";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  date: string; // ISO
  readingMinutes: number;
  author: string;
  body: ReactNode;
};

function P({ children }: { children: ReactNode }) {
  return <p>{children}</p>;
}
function H2({ children }: { children: ReactNode }) {
  return <h2>{children}</h2>;
}
function H3({ children }: { children: ReactNode }) {
  return <h3>{children}</h3>;
}
function Quote({ children }: { children: ReactNode }) {
  return <blockquote>{children}</blockquote>;
}

export const POSTS: BlogPost[] = [
  {
    slug: "what-executive-protection-actually-involves",
    title: "What executive protection actually involves",
    description:
      "Executive protection is planning, coordination and quiet presence — not the theatrics people imagine. A calm, plain-language explanation of the discipline.",
    excerpt:
      "Most of the work happens before the principal ever leaves the door. A plain-language look at what an executive protection engagement really is.",
    date: "2026-06-18",
    readingMinutes: 7,
    author: "Guardion",
    body: (
      <>
        <P>
          Executive protection is one of the most misunderstood services in
          the private security industry. Popular imagery — dark suits,
          coiled earpieces, hands hovering near jackets — describes a
          fraction of the work and misses almost all of the discipline
          behind it. The reality is quieter, more administrative, and far
          more considered than most people expect.
        </P>
        <P>
          A well-run executive protection engagement is, first and
          foremost, a planning exercise. Long before an operator stands
          near a principal, the firm has already assessed the person,
          their movements, their public profile and the environments they
          intend to travel through. The visible part of the service — the
          person walking a few paces behind — is the last few percent of
          the work.
        </P>

        <H2>Assessment comes first</H2>
        <P>
          Every engagement begins with a threat and vulnerability
          assessment. That is not a form to be filled in. It is a
          structured examination of who the principal is, what makes them
          of interest to a hostile party, and where the practical points
          of exposure sit — at home, in transit, at work, and in public.
        </P>
        <P>
          The assessment produces a written picture that is uncomfortable
          to read the first time. It names risks in plain language and
          separates the plausible from the theatrical. Good protection
          spends its budget on the plausible.
        </P>

        <H2>Planning is the product</H2>
        <P>
          From that picture comes a plan: routes, timings, venues, arrival
          and departure procedures, contingency options, medical
          considerations, communications, and the specific behaviours
          expected of every person on the team. It is written down,
          rehearsed where possible, and reviewed after each engagement.
        </P>
        <P>
          When a plan is done well, the day itself is unremarkable. That
          is the intention. A protective operation that looks dramatic is
          usually one that has been forced to improvise.
        </P>

        <Quote>
          The best days on this work are the ones the principal will not
          remember in a week. Quiet, on time, and entirely their own.
        </Quote>

        <H2>Presence, not spectacle</H2>
        <P>
          The operator standing near the principal is chosen as much for
          temperament and manner as for capability. They are in the room
          because they can read it. They know when to move forward, when
          to hold back, and when to say nothing at all. Their presence
          should reassure the principal and go unnoticed by everyone else.
        </P>
        <P>
          In our own work we place a great deal of weight on this. An
          operator who is technically excellent but socially clumsy will
          embarrass the client in the rooms they are paid to move through.
          Executive protection is a client-facing profession, and the
          people who do it well are recognisably professionals — literate,
          presentable, and calm.
        </P>

        <H2>Coordination with other people</H2>
        <P>
          Almost no engagement is conducted alone. Venues have their own
          security. Hotels have their own protocols. Drivers, personal
          assistants, event producers and — occasionally — police need to
          understand what is happening and what is expected of them. A
          protection lead spends much of their day on quiet phone calls.
        </P>
        <P>
          Where the work moves internationally, coordination widens to
          include vetted local partners who understand their own
          jurisdiction. No serious firm claims to operate everywhere in
          the world under its own licence. The honest model is a small,
          disciplined home team that works through trusted people abroad.
        </P>

        <H2>What executive protection is not</H2>
        <P>
          It is not a status symbol. It is not intimidation. It is not a
          substitute for common-sense privacy hygiene, and it is not a
          reason to behave more publicly than the principal otherwise
          would. A protection team that encourages a client to attract
          attention has misunderstood the assignment.
        </P>
        <P>
          Nor is it a permanent commitment. Many engagements are project
          based — a period of elevated exposure, a specific trip, a court
          appearance, a public announcement. The service should scale up
          when the picture requires it and scale down when it does not.
        </P>

        <H2>When to consider it</H2>
        <P>
          A reasonable trigger for a conversation is any of the
          following: a change in the principal's public profile, a
          credible communication that gives them pause, a period of
          unusual travel, a family event that will be visible online, or
          simply a sense that the environment around them has shifted.
        </P>
        <P>
          The right first step is not to hire anyone. It is to speak to a
          principal of a reputable firm and describe the situation
          candidly. A good firm will tell you honestly whether protection
          is warranted, what form it should take, and — sometimes — that
          it is not needed at all.
        </P>
      </>
    ),
  },
  {
    slug: "how-to-arrange-close-protection-for-an-event",
    title: "How to arrange close protection for an event",
    description:
      "A practical guide for personal assistants, event producers and family offices on organising discreet close protection for a private or public event.",
    excerpt:
      "A practical, step-by-step guide for the people who actually organise events — assistants, producers, family offices — on arranging discreet close protection.",
    date: "2026-07-02",
    readingMinutes: 8,
    author: "Guardion",
    body: (
      <>
        <P>
          Most requests for close protection at an event come from the
          people around the principal rather than the principal
          themselves. Personal assistants, chiefs of staff, event
          producers and family offices carry the practical burden of
          arranging it, often on short notice and while managing a dozen
          other moving parts. This guide is written for them.
        </P>
        <P>
          The goal is a simple one: the principal arrives, participates
          and leaves without incident, and without the security
          arrangements themselves becoming a topic of conversation. Every
          decision below serves that goal.
        </P>

        <H2>Start earlier than feels necessary</H2>
        <P>
          A good rule of thumb is to open the conversation two to three
          weeks before the event, and no less than seventy-two hours out
          for anything shorter. That window is not about availability. It
          is about the time required to walk the venue, agree routes,
          coordinate with the venue's own security, and — if needed —
          liaise with a driver and a residence team.
        </P>
        <P>
          Late requests are workable, but they force compromises. A firm
          that agrees enthusiastically to any timeline, however
          impossible, is telling you something about how it operates.
        </P>

        <H2>Share more than feels natural</H2>
        <P>
          Assistants often instinctively share as little as possible with
          an outside vendor. That instinct is right in most contexts and
          wrong here. A protection team can only plan well if they
          understand who the principal is, what the event is, who else
          will be there, what the principal is expected to do while there,
          and what has prompted the request.
        </P>
        <P>
          A reputable firm will treat that information as privileged and
          will sign confidentiality terms as a matter of course. If the
          conversation feels loose or the paperwork does not exist, that
          is your answer about the firm.
        </P>

        <Quote>
          The people we work best with are the ones who tell us the
          awkward parts first. It shortens the planning by days.
        </Quote>

        <H2>Agree the visible posture in advance</H2>
        <P>
          "Discreet" means different things to different people. Some
          principals want a team that blends entirely into the guest
          list; others want a visible deterrent presence at the entrance
          and no one obvious inside. Decide this early, in writing, and
          share it with the venue.
        </P>
        <P>
          Dress code, radio use, whether operators carry earpieces,
          whether they eat or drink during the event, where they stand
          when the principal is seated — all of these are worth deciding
          before the day, because changing them on the day is visible.
        </P>

        <H2>Walk the venue</H2>
        <P>
          A physical walk-through is the single most valuable hour of
          preparation. It surfaces things a floor plan cannot: sight
          lines, back-of-house corridors, lift keys, the actual arrival
          point for cars, the location of the nearest hospital, the room
          the principal will use if they need a moment away from the
          floor.
        </P>
        <P>
          Where a walk-through is impossible, the protection lead should
          coordinate with the venue's own security manager and obtain a
          current plan. If the event is at a residence, the walk-through
          is not optional.
        </P>

        <H2>Arrival and departure are the pinch points</H2>
        <P>
          Almost every problem at an event happens at arrival or
          departure. Guests are photographed as they step out of the
          vehicle. Crowds accumulate at the door. The pavement, not the
          ballroom, is where the plan usually earns its keep.
        </P>
        <P>
          Confirm the drop-off point with the driver. Confirm who greets
          the principal at the door. Confirm the exit route and a viable
          alternative. If media are expected, agree in advance where the
          principal will pause and where they will not.
        </P>

        <H2>Coordinate, do not compete</H2>
        <P>
          If the event has its own security, or other guests bring their
          own teams, coordination is essential. A protection lead should
          make contact with counterparts, agree communications, and
          respect the venue's chain of command. Guests notice friction
          between security teams long before they notice the security
          itself.
        </P>

        <H2>What a good quote looks like</H2>
        <P>
          Expect a written scope of work that names the number of
          operators, their roles, hours on duty, transport arrangements,
          equipment, any sub-contracted specialists (medical, technical),
          insurance position, and a clear rate. Expect a named principal
          of the firm to be accountable — not just a booking desk.
        </P>
        <P>
          Cheap and vague is expensive. A clear scope protects both sides
          and, more importantly, protects the client on the day.
        </P>

        <H2>After the event</H2>
        <P>
          A short after-action note the following day is a mark of a
          serious firm. It records what happened, what did not, and what
          should change next time. Keep it. It becomes the starting point
          for the next engagement and, over time, a very useful record
          for the office that manages the principal's calendar.
        </P>
      </>
    ),
  },
  {
    slug: "when-to-engage-a-private-investigator",
    title: "When to engage a private investigator",
    description:
      "How to tell when a situation genuinely calls for a licensed private investigator — and what a lawful, court-admissible investigation actually looks like.",
    excerpt:
      "Not every difficult situation needs an investigator. A candid look at when it does — and what a lawful, court-admissible enquiry actually looks like.",
    date: "2026-07-20",
    readingMinutes: 8,
    author: "Guardion",
    body: (
      <>
        <P>
          People often come to a private investigator with a suspicion
          and a sense of urgency. Both are reasonable. Neither, on its
          own, is a reason to open an investigation. The first job of a
          serious firm is to slow the conversation down and work out
          whether an investigation is the right instrument at all.
        </P>
        <P>
          Sometimes it is. Sometimes the situation is better addressed by
          a lawyer, an accountant, an HR professional, or simply by a
          direct conversation. Knowing the difference is the beginning of
          getting a useful outcome.
        </P>

        <H2>What a private investigator actually does</H2>
        <P>
          A licensed investigator gathers information, lawfully, and
          records it in a form that can withstand scrutiny. That includes
          open-source research, structured interviews, physical
          observation where appropriate, verification of documents, and
          coordination with specialists — forensic accountants, digital
          examiners, legal counsel — when the picture requires it.
        </P>
        <P>
          What an investigator does not do is act above the law. No
          reputable firm will intercept communications without authority,
          access private accounts, impersonate officials, or obtain
          information by pressure. The moment those lines are crossed,
          the resulting material is worthless in a courtroom and
          dangerous to the client.
        </P>

        <H2>Reasonable triggers</H2>
        <P>
          There are several situations in which engaging an investigator
          is a proportionate step. A pattern of loss inside a business
          that internal controls cannot explain. A dispute where the
          available facts do not match the story being told. A
          background enquiry before a significant appointment,
          investment or partnership. A family matter where safety, not
          curiosity, is the concern.
        </P>
        <P>
          In each of those cases the goal is the same: to replace
          suspicion with fact, and to do so in a way that a court, a
          board or a regulator would accept.
        </P>

        <H2>When it is the wrong tool</H2>
        <P>
          There are equally clear cases where an investigation is the
          wrong instrument. A domestic disagreement that has not been
          discussed openly. A commercial grievance that has never been
          put in writing. A wish to monitor an ex-partner or a family
          member for reasons that do not concern safety. A reputable
          firm will decline this work, and should.
        </P>

        <Quote>
          The right question is not "can you find out." It is "what would
          you do with the answer if we did." Sometimes the honest answer
          changes the request.
        </Quote>

        <H2>Lawful and court-admissible</H2>
        <P>
          "Lawful and court-admissible" is not a marketing phrase. It is
          a working standard that shapes every step of a matter.
          Observation is conducted from places where a private
          investigator has a right to be. Documents are obtained through
          proper channels. Interviews are consented, recorded where
          required, and stored securely. Chains of custody are
          maintained. Notes are written contemporaneously.
        </P>
        <P>
          The result is a report that a solicitor can rely on, a board
          can act on, and — if it comes to it — that survives
          cross-examination.
        </P>

        <H2>Confidentiality is structural</H2>
        <P>
          Investigations often touch material a client would prefer never
          existed. The engagement should be structured accordingly.
          Written confidentiality terms are signed at the outset. Access
          to the matter is limited to the people working on it. Files are
          stored in a manner appropriate to their sensitivity. Where a
          matter is legally privileged, the firm coordinates with counsel
          so that privilege is preserved throughout.
        </P>

        <H2>What a first conversation looks like</H2>
        <P>
          The first conversation with a serious firm is short, private
          and honest. It covers who you are, what you are worried about,
          what outcome you actually want, and what has been done so far.
          It does not commit either party to anything. It should end with
          a clear recommendation — proceed, wait, or engage a different
          professional entirely.
        </P>
        <P>
          If the conversation instead ends with a large invoice and a
          promise to "start immediately," it is worth having a second
          conversation elsewhere.
        </P>

        <H2>Protection and intelligence together</H2>
        <P>
          There are cases where an investigation and a protection
          engagement belong together — a credible threat that needs to be
          understood and mitigated at the same time. In our own practice
          those matters are run by a single principal so that the two
          workstreams inform one another. The point of doing both under
          one roof is precisely that the intelligence and the protection
          are never working from different pictures of the same problem.
        </P>
      </>
    ),
  },
];

export function getAllPosts(): BlogPost[] {
  return [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function formatPostDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}