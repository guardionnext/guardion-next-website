import type { ReactNode } from "react";
import Link from "next/link";

export type FaqItem = { q: string; a: ReactNode };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  date: string; // ISO
  readingMinutes: number;
  author: string;
  body: ReactNode;
  // Optional FAQ block. When present, the article renders an accessible
  // accordion and the page emits FAQPage structured data so the answers are
  // eligible for rich results / "People also ask" placements.
  faq?: FaqItem[];
  // Optional heading for the FAQ section. Defaults to the close-protection
  // wording; set it per-post so the heading matches the article's subject.
  faqHeading?: string;
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
function Ul({ children }: { children: ReactNode }) {
  return <ul>{children}</ul>;
}
function A({ href, children }: { href: string; children: ReactNode }) {
  return <Link href={href}>{children}</Link>;
}

// Plain-text version of an FAQ answer, for FAQPage structured data. Google
// wants the answer as text/HTML, not a React tree, so we keep a string beside
// each rich answer where the two would differ; simple answers can reuse the
// node when it is already a string.
export function faqAnswerText(a: ReactNode): string {
  if (typeof a === "string") return a;
  return "";
}

export const POSTS: BlogPost[] = [
  {
    slug: "residential-security-how-you-live",
    title:
      "Residential security starts with how you live, not just where you live",
    description:
      "Good residential security isn't about turning a home into a fortress. It starts with understanding routine, exposure and the way a family actually lives.",
    excerpt:
      "The home is often the most predictable part of a person's life — and predictability is what the wrong person looks for first. Why good residential security starts with how a family lives.",
    date: "2026-09-23",
    readingMinutes: 6,
    author: "Guardion",
    body: (
      <>
        <P>
          Home is where people let their guard down. It&rsquo;s where they
          relax, spend time with family and stop thinking about the world
          outside.
        </P>
        <P>That&rsquo;s exactly why it deserves careful protection.</P>
        <P>
          For many families, high-profile individuals and business owners, the
          home is also the most predictable part of their lives. The same people
          come and go. Cars leave at similar times each morning. Children follow
          the same school run. Contractors, cleaners and delivery drivers form a
          regular pattern.
        </P>
        <P>
          None of this is unusual. But predictability is what someone with bad
          intentions looks for first.
        </P>

        <H2>Why homes are more exposed than people realise</H2>
        <P>
          When most people think about residential security, they think about
          what they can see: gates, cameras, lighting and perhaps a guard at the
          front entrance.
        </P>
        <P>
          Those measures matter. But a lot of exposure happens well beyond the
          property line.
        </P>
        <P>
          Consider how much can be learned about a household without ever going
          near it:
        </P>
        <Ul>
          <li>
            Real estate listings and floor plans that stay online long after a
            sale
          </li>
          <li>
            Renovation photos showing layouts, entry points and security systems
          </li>
          <li>
            Social media posts that reveal holidays, routines or when the house
            is empty
          </li>
          <li>Tagged locations from family members, friends or staff</li>
          <li>Public business records linked to a residential address</li>
          <li>Vehicles regularly photographed outside the home</li>
        </Ul>
        <P>
          Each piece on its own seems harmless. Put together, they can reveal
          routines, relationships and vulnerabilities that were never meant to
          be public.
        </P>

        <H2>More guards isn&rsquo;t always the answer</H2>
        <P>
          It&rsquo;s natural to assume that better protection means more people
          on site. Sometimes it does.
        </P>
        <P>
          But a strong physical presence can still start at a disadvantage if
          too much about the household is already exposed. Adding another guard
          doesn&rsquo;t remove the information someone has already gathered.
        </P>
        <P>
          Often the most effective improvements are the quiet ones: changing a
          predictable habit, tightening who has access to the property, briefing
          staff properly, or removing information that should never have been
          public in the first place.
        </P>

        <H2>What good residential security looks like</H2>
        <P>
          At Guardion, we believe{" "}
          <A href="/services/residential-security">residential security</A>{" "}
          should be built around the household, not the other way around. A
          well-designed approach usually includes the following.
        </P>
        <P>
          <strong>Understanding how the family lives.</strong> Before
          recommending anything, we need to understand daily routines, who has
          access to the home, how the family travels and what matters most to
          them. A plan that ignores lifestyle won&rsquo;t be followed for long.
        </P>
        <P>
          <strong>Looking at the home from the outside.</strong> This means
          assessing both the physical property and the wider footprint: what can
          be seen from the street, what can be found online and what patterns an
          observer might pick up over time.
        </P>
        <P>
          <strong>Building protection in layers.</strong> Depending on the level
          of risk, this may combine static security presence, mobile patrols,
          access control, surveillance systems and background checks on staff or
          contractors. No single measure does the job alone.
        </P>
        <P>
          <strong>Planning for change.</strong> Risk isn&rsquo;t constant.
          Travel, renovations, public events, media attention or a vacant home
          during holidays can all change a household&rsquo;s exposure. Good
          security adjusts before those moments, not after.
        </P>
        <P>
          <strong>Keeping it discreet.</strong> If security makes a family feel
          like they&rsquo;re living in a compound, something has gone wrong. The
          best arrangements protect without dominating daily life.
        </P>

        <H2>Signs it may be time to review your residential security</H2>
        <Ul>
          <li>
            Your profile, business or public visibility has recently grown
          </li>
          <li>
            You&rsquo;ve had unexplained visitors, calls or attention near the
            home
          </li>
          <li>
            Staff, contractors or household arrangements have changed
          </li>
          <li>
            You&rsquo;re planning extended travel or the property will be vacant
          </li>
          <li>
            Your current security was set up years ago and hasn&rsquo;t been
            reviewed since
          </li>
          <li>
            You&rsquo;re unsure what information about your home is publicly
            available
          </li>
        </Ul>

        <H2>A home should still feel like a home</H2>
        <P>
          Residential security isn&rsquo;t about fear, and it isn&rsquo;t about
          building walls. It&rsquo;s about making sure the one place you should
          feel safest actually is.
        </P>
        <P>
          The right approach protects your family, property and privacy while
          letting you live the way you want to.
        </P>
        <P>
          If you&rsquo;d like a confidential conversation about your home&rsquo;s
          security, <A href="/contact">contact Guardion</A> to discuss a plan
          tailored to your household.
        </P>
      </>
    ),
    faqHeading: "Common questions about residential security",
    faq: [
      {
        q: "What is residential security?",
        a: "Residential security is the protection of a home and the people who live in it, built around how the household actually operates rather than a fixed set of products. A good approach combines an understanding of daily routines, an assessment of the property and its wider footprint, and layered measures — which may include a static or mobile security presence, access control, surveillance and vetting of staff or contractors — sized to the level of risk.",
      },
      {
        q: "Isn’t residential security just cameras, gates and alarms?",
        a: "Those measures matter, but they only address what can be seen at the property line. A great deal of exposure sits elsewhere — in real estate listings, renovation photos, social media posts, tagged locations and public records that reveal a household’s layout, routines and movements. Effective residential security looks at that wider picture as well as the physical property.",
      },
      {
        q: "Do I need more guards to be safer at home?",
        a: "Not necessarily. A strong physical presence can still start at a disadvantage if too much about the household is already exposed, and adding another guard doesn’t remove information someone has already gathered. Often the most effective changes are quieter ones — adjusting a predictable habit, tightening who has access, briefing staff properly, or removing information that was never meant to be public.",
      },
      {
        q: "How can someone learn about my home without going near it?",
        a: "More than most people expect. Real estate listings and floor plans stay online long after a sale, renovation photos reveal layouts and entry points, social posts show when a house is empty, tagged locations map routines, and public business records can link a name to a residential address. Each piece seems harmless alone; put together, they can expose routines, relationships and vulnerabilities that were never meant to be public.",
      },
      {
        q: "When should I review my residential security?",
        a: "It’s worth reviewing when your profile or public visibility grows, when you’ve had unexplained visitors or attention near the home, when staff or household arrangements change, when you’re planning extended travel or the property will be vacant, or simply when your current arrangements were set up years ago and haven’t been looked at since. If you’re unsure what information about your home is publicly available, that on its own is a reason to review.",
      },
      {
        q: "Is residential security only for celebrities or the very wealthy?",
        a: "No. It suits any household whose profile, business, wealth or circumstances create exposure worth managing — and it’s equally suited to a specific period, such as extended travel or a spell of heightened public attention, rather than a permanent arrangement. The goal is proportionate protection that fits how a family lives, not turning a home into a compound.",
      },
    ],
  },
  {
    slug: "executive-protection-services",
    title: "Executive protection services: a plain-language guide",
    description:
      "What executive protection services are, what they include, who uses them and how to choose a provider — a clear, honest guide from an Australian protection firm.",
    excerpt:
      "The phrase is used loosely and pictured wrongly. A clear guide to what executive protection services actually are — what they include, who they are for, and how to engage a provider well.",
    date: "2026-09-11",
    readingMinutes: 11,
    author: "Guardion",
    faqHeading: "Common questions about executive protection",
    body: (
      <>
        <P>
          Executive protection services are the planned, close-in protection of
          a person — usually a company leader or other high-profile individual —
          across their working life and the moments of heightened exposure that
          come with it. A service combines risk assessment, advance planning,
          secure movement and a trained protective presence, delivered by a firm
          so that the principal can travel, appear and work without incident and
          without it becoming a spectacle.
        </P>
        <P>
          That is the whole idea in a sentence. Most of what people picture when
          they hear the term — the dark suits, the coiled earpieces, the drama —
          describes a fraction of the work and misunderstands the rest. Good
          executive protection is quiet, administrative and almost invisible.
          This guide explains what the service actually is, what it includes,
          who uses it, and how to engage a provider well. If you want the
          narrower question of what a single engagement feels like day to day,
          we cover that in{" "}
          <A href="/blog/what-executive-protection-actually-involves">
            what executive protection actually involves
          </A>
          .
        </P>

        <H2>What executive protection services actually are</H2>
        <P>
          &ldquo;Executive protection&rdquo; is the American term for what
          British and Australian practice calls{" "}
          <A href="/blog/what-is-close-protection">close protection</A>. The
          word <em>executive</em> simply frames the work around corporate
          principals — chief executives, chairs, founders, general counsel,
          public-facing spokespeople — and the office that supports them. The
          discipline, the planning and the standards are the same.
        </P>
        <P>
          A service, rather than a single person, is the important distinction.
          The operator walking a few paces behind the principal is the visible
          last few percent of a much larger body of work — assessment,
          reconnaissance, coordination and rehearsal — that a firm carried out
          before anyone left the door. When people search for executive
          protection <em>services</em>, that wider capability is what they are
          really looking for.
        </P>

        <H2>What a service includes</H2>
        <P>
          The exact scope is set by the principal&rsquo;s exposure, not by a
          brochure, but a full executive protection service usually draws on
          most of the following:
        </P>
        <Ul>
          <li>
            <strong>Threat and risk assessment</strong> — an honest picture of
            who the principal is, what makes them of interest to a hostile
            party, and where the practical points of exposure sit.
          </li>
          <li>
            <strong>Advance work</strong> — surveying routes, walking venues and
            confirming arrival and departure points before the principal
            arrives.
          </li>
          <li>
            <strong>Secure movement</strong> — integrated{" "}
            <A href="/services/security-driving">security driving</A>, timed
            journeys and rehearsed contingencies for medical, mechanical and
            hostile events.
          </li>
          <li>
            <strong>Protective presence</strong> — a trained operator, or a
            small team, close enough to matter without becoming the thing
            everyone notices.
          </li>
          <li>
            <strong>Travel and event support</strong> — airport meet-and-assist,
            hotel coordination, AGMs, earnings days, conferences and public
            appearances.
          </li>
          <li>
            <strong>Residential and family cover</strong> — extending the
            picture to the home and the people around the principal where the
            situation warrants it.
          </li>
        </Ul>
        <P>
          Numbers are set by requirement, not by theatre. A serious provider
          sizes the service to the threat picture and scales it down the moment
          the requirement passes.
        </P>

        <H2>The purpose of executive protection</H2>
        <P>
          The purpose is not to project status or to intimidate. It is to reduce
          the likelihood and the consequences of harm to a specific person, and
          to let that person keep working, travelling and appearing in public
          with their exposure quietly managed. Corporate exposure moves with
          earnings announcements, hostile transactions, activist attention,
          redundancies, litigation and media cycles. Executive protection exists
          to absorb that pressure so it never reaches the principal or the
          business.
        </P>
        <Quote>
          When a plan is done well, the day itself is unremarkable. That is the
          intention. A protective operation that looks dramatic is usually one
          that has been forced to improvise.
        </Quote>

        <H2>Who uses executive protection</H2>
        <P>
          Executive protection suits people whose profile, wealth, role or
          circumstances create sustained exposure — and who need that exposure
          managed without turning their life into a security operation. It is
          equally suited to a short, sensitive window rather than a permanent
          arrangement. Common users include:
        </P>
        <Ul>
          <li>Chief executives, chairs and founders with a public profile</li>
          <li>Boards commissioning protection for a named director</li>
          <li>General counsel managing hostile litigation exposure</li>
          <li>High-net-worth individuals and their immediate family</li>
          <li>Public figures during periods of heightened attention</li>
          <li>Visiting principals who need an Australian-based team</li>
        </Ul>
        <P>
          And yes — a private individual, not just a corporation, can engage
          protection. There is nothing that restricts it to the famous or the
          corporate. What matters is not a title but a genuine, identified
          reason: a credible threat, an unwelcome contact, a period of unusual
          exposure. A reputable firm will tell you honestly whether that reason
          is present.
        </P>

        <H2>What an executive protection specialist does</H2>
        <P>
          An executive protection specialist — sometimes called an executive
          protection agent, a close protection officer or, loosely, a bodyguard
          — is responsible for a principal&rsquo;s safety across ordinary
          movements and high-risk moments alike. On any given engagement that
          means assessing risk, doing the advance work, driving or coordinating
          secure movement, and holding a protective presence in the room.
        </P>
        <P>
          The visible skills matter, but the defining ones are judgement and
          discretion. Executive protection is a client-facing profession: the
          specialist is in rooms the principal is paid to be in, so they are
          chosen as much for temperament and manner as for physical capability.
          An operator who is technically excellent but socially clumsy will
          embarrass the client in exactly the rooms they were hired to move
          through.
        </P>

        <H2>Executive protection, bodyguards and personal protection</H2>
        <P>
          These terms overlap, and the confusion is reasonable. They describe
          the same underlying work from different angles.
        </P>
        <H3>Executive protection vs a bodyguard</H3>
        <P>
          <em>Bodyguard</em> describes the physical function — standing between
          a person and harm. Executive protection includes that, but the term
          implies formal training, licensing and the planning discipline behind
          the presence: assessment, advance work, route and venue
          reconnaissance, contingency planning. Put simply, every executive
          protection specialist can act as a bodyguard, but not every bodyguard
          works to executive protection standards.
        </P>
        <H3>Personal protection vs executive protection</H3>
        <P>
          <em>Personal protection</em> is the broader, more general phrase for
          protecting an individual — it can describe anything from a single
          escort to a full program. <em>Executive protection</em> is personal
          protection organised for a corporate principal and coordinated with
          the office that supports them: the calendar, the travel, the
          announcements. In practice the difference is one of context and
          coordination rather than a different set of skills.
        </P>
        <H3>Executive protection vs close protection</H3>
        <P>
          The same discipline under two names. <em>Close protection</em> is the
          British and Australian term and emphasises the close-in role;{" "}
          <em>executive protection</em> is the American term and frames the work
          around corporate life. We unpack the terminology in full in{" "}
          <A href="/blog/what-is-close-protection">what is close protection</A>.
        </P>

        <H2>What an executive protection company is — and how to choose one</H2>
        <P>
          An executive protection company is a firm that provides this service:
          it employs or engages trained, licensed operators, assesses risk,
          plans and runs engagements, and takes accountability for the outcome.
          A good one is defined less by the size of its roster than by the
          quality of its judgement. When you are choosing, look for:
        </P>
        <Ul>
          <li>
            <strong>Current, verifiable licences</strong> for every jurisdiction
            the firm works in — and a willingness to show them.
          </li>
          <li>
            <strong>A named principal of the firm</strong> who is accountable
            for the work, not just a booking desk.
          </li>
          <li>
            <strong>Written confidentiality terms</strong> offered as a matter
            of course, before you share anything sensitive.
          </li>
          <li>
            <strong>Honest scoping</strong> — a firm that will tell you when
            protection is warranted, what form it should take, and sometimes
            that it is not needed at all.
          </li>
          <li>
            <strong>A clear written scope of work</strong> naming operators,
            roles, hours, transport, equipment, insurance and rate. Cheap and
            vague is expensive.
          </li>
        </Ul>
        <P>
          A firm that agrees enthusiastically to any timeline, however
          impossible, or that encourages a client to attract attention, has
          misunderstood the assignment.
        </P>

        <H2>Executive protection in Australia</H2>
        <P>
          In Australia, executive protection is a licensed security activity,
          regulated state by state, and the work is performed unarmed. Operators
          must hold current security licences and accredited training. A serious
          provider holds the licences for the jurisdictions it works in and can
          show them — Guardion operates under security licences across
          Queensland, New South Wales, the ACT, Victoria and South Australia.
          Where a matter extends overseas, the honest model is a disciplined
          home team working through vetted local partners, rather than claiming
          to operate everywhere under its own licence.
        </P>
        <P>
          Demand for the service has grown steadily, driven by more visible
          leadership, online exposure and lower-friction harassment. Much of
          that demand is for short-notice or project-based cover — an AGM, a
          public announcement, a difficult all-hands, a single trip — rather
          than permanent details.
        </P>

        <H2>Thinking about executive protection as a career</H2>
        <P>
          A good deal of the public interest in this field comes from people
          considering it as work rather than engaging it as a client, so it is
          worth addressing plainly. Executive protection can be a rewarding
          career for the right temperament, but it is not the one the films
          suggest. It rewards planners and communicators over the physically
          imposing, and most of the day is preparation, coordination and
          patience.
        </P>
        <P>
          In Australia, getting in starts with the relevant state security
          licence and accredited close/personal protection training, typically a
          short course of days to a few weeks, on top of a clean background and
          a first-aid qualification. The licence is only the entry ticket; real
          competence — surveillance detection, protective driving, medical
          response, sound judgement — is built over years alongside experienced
          operators. Pay varies widely with licensing, experience, the risk
          picture and whether the work is standing or project-based; experienced
          protection work sits well above general security guarding, but there
          is no single figure, and salary numbers you find online are mostly
          from the United States and do not translate directly to the
          Australian, unarmed market.
        </P>

        <H2>How to start</H2>
        <P>
          If any of this reflects your situation, the right first step is not to
          hire anyone — it is a confidential conversation. You can read how we
          approach the work on our{" "}
          <A href="/services/executive-protection">
            executive protection service page
          </A>
          , or <A href="/contact">speak to a principal of the firm</A> and
          describe the situation candidly. A good firm will tell you honestly
          whether protection is warranted, what form it should take, and
          sometimes that it is not needed at all.
        </P>
      </>
    ),
    faq: [
      {
        q: "What are executive protection services?",
        a: "Executive protection services are the planned, close-in protection of a person — usually a company leader or other high-profile individual — delivered by a firm. A service combines threat assessment, advance planning, secure movement and a trained protective presence, so the principal can travel, work and appear in public with their exposure quietly managed. The visible operator is the last few percent of a much larger body of planning and coordination.",
      },
      {
        q: "What is the purpose of executive protection?",
        a: "The purpose is to reduce the likelihood and consequences of harm to a specific person, and to let them keep working, travelling and appearing in public with their exposure managed. It is not about status or intimidation. Corporate exposure moves with earnings announcements, hostile transactions, activist attention, litigation and media cycles; executive protection absorbs that pressure so it never reaches the principal or the business.",
      },
      {
        q: "Who uses executive protection?",
        a: "Chief executives, chairs and founders with a public profile; boards commissioning protection for a director; general counsel managing hostile litigation; high-net-worth individuals and their families; public figures during periods of heightened attention; and visiting principals who need a local team. It suits anyone whose profile, role or circumstances create sustained exposure — and is equally suited to a short, sensitive window rather than a permanent arrangement.",
      },
      {
        q: "Can a normal person have a bodyguard?",
        a: "Yes. Protection is not restricted to the famous or the corporate — a private individual can engage it. What matters is not a title but a genuine, identified reason: a credible threat, an unwelcome contact, or a period of unusual exposure. A reputable firm will assess the situation honestly and tell you whether protection is actually warranted.",
      },
      {
        q: "What does an executive protection specialist do?",
        a: "An executive protection specialist is responsible for a principal’s safety across ordinary movements and high-risk moments alike. That means assessing risk, doing advance work on routes and venues, driving or coordinating secure movement, and holding a protective presence in the room. The defining skills are judgement and discretion as much as physical capability, because the work is client-facing and takes place in the rooms the principal is paid to be in.",
      },
      {
        q: "What are executive protection agents?",
        a: "“Executive protection agent” is another name for an executive protection specialist or close protection officer — a trained, licensed operator responsible for a principal’s safety. Beyond physical capability, a good agent is a planner and a communicator, chosen for temperament and manner as well as protective skill.",
      },
      {
        q: "What is the difference between a bodyguard and executive protection?",
        a: "“Bodyguard” describes the physical function — standing between a person and harm. Executive protection includes that but implies formal training, licensing and a planning discipline: risk assessment, advance work, route and venue reconnaissance and contingency planning. Every executive protection specialist can act as a bodyguard; not every bodyguard works to executive protection standards.",
      },
      {
        q: "What is the difference between personal protection and executive protection?",
        a: "Personal protection is the broader, more general phrase for protecting an individual — anything from a single escort to a full program. Executive protection is personal protection organised for a corporate principal and coordinated with the office that supports them: the calendar, the travel, the announcements. The difference is one of context and coordination rather than a different set of skills.",
      },
      {
        q: "What is an executive protection company?",
        a: "An executive protection company is a firm that provides the service: it employs or engages trained, licensed operators, assesses risk, plans and runs engagements, and takes accountability for the outcome. A good one is defined by the quality of its judgement rather than the size of its roster — look for current verifiable licences, a named principal accountable for the work, written confidentiality terms, honest scoping and a clear written scope of work.",
      },
      {
        q: "Is executive protection in demand?",
        a: "Yes. Demand has grown steadily, driven by more visible leadership, greater online exposure and lower-friction harassment. Much of that demand is for short-notice or project-based cover — an AGM, a public announcement, a difficult all-hands, a single trip — rather than permanent standing details.",
      },
      {
        q: "Is executive protection a good career?",
        a: "It can be, for the right temperament. It rewards planners and communicators over the physically imposing, and most of the day is preparation, coordination and patience rather than confrontation. The work involves long hours, travel, constant situational awareness and responsibility for another person’s safety — well-run firms manage that load through planning and realistic rostering so alertness is sustainable.",
      },
      {
        q: "How do you get into executive protection, and how long is the training?",
        a: "In Australia, getting in starts with the relevant state security licence and accredited close/personal protection training — typically a short course of days to a few weeks — on top of a clean background check and a first-aid qualification. The licence is only the entry ticket; real competence in surveillance detection, protective driving, medical response and judgement is built over years alongside experienced operators.",
      },
      {
        q: "How much do executive protection agents and bodyguards get paid?",
        a: "Pay varies widely with licensing, experience, the risk picture and whether work is standing or project-based. Experienced protection work sits well above general security guarding, but there is no single figure. Salary numbers you find online are mostly from the United States and do not translate directly to the Australian, unarmed market.",
      },
    ],
  },
  {
    slug: "what-is-close-protection",
    title: "What is close protection? A plain-language guide",
    description:
      "Close protection is the specialised, close-in protection of one person against threats, harassment and harm. What it means, who needs it, and how it works in Australia.",
    excerpt:
      "The word gets used loosely and pictured wrongly. A clear guide to what close protection actually is — the term, the discipline, the officer, and how it is done well.",
    date: "2026-08-28",
    readingMinutes: 9,
    author: "Guardion",
    faqHeading: "Common questions about close protection",
    body: (
      <>
        <P>
          Close protection is the specialised, close-in protection of one person
          — the principal — against physical threats, harassment and harm. It
          combines advance planning, risk assessment, secure movement and a
          trained protective presence, and it is used by people whose profile,
          wealth or circumstances create sustained exposure: executives,
          high-net-worth individuals, public figures and visiting dignitaries.
        </P>
        <P>
          That is the whole idea in a sentence. Almost everything else people
          believe about the work — the dark suits, the coiled earpieces, the
          drama — describes a fraction of it and misunderstands the rest. The
          reality is quieter, more considered, and far more about preparation
          than confrontation.
        </P>

        <H2>What &ldquo;close protection&rdquo; actually means</H2>
        <P>
          The word <em>close</em> refers to proximity, not secrecy. A close
          protection officer works close to the principal — near enough to see
          what is developing and to act before it reaches them. It is the
          opposite of manned guarding, where a person stands at a fixed point
          and watches a place. Close protection watches a person, and moves with
          them through the whole fabric of their day.
        </P>
        <P>
          It is also a system rather than a single individual. The person
          walking a few paces behind the principal is the visible last few
          percent of a much larger body of work — assessment, reconnaissance,
          coordination and rehearsal — that happened before anyone left the
          door.
        </P>

        <H2>What a close protection officer does</H2>
        <P>
          A close protection officer (often shortened to CPO, and sometimes
          called a personal protection specialist) is responsible for a
          principal&rsquo;s safety across ordinary movements and high-risk
          moments alike. On any given engagement that means:
        </P>
        <Ul>
          <li>
            <strong>Risk assessment</strong> — building an honest picture of who
            the principal is, what makes them of interest to a hostile party,
            and where the practical points of exposure sit.
          </li>
          <li>
            <strong>Advance work</strong> — surveying routes, walking venues and
            confirming arrival and departure points before the principal ever
            arrives.
          </li>
          <li>
            <strong>Secure movement</strong> — integrated{" "}
            <A href="/services/security-driving">security driving</A>, timed
            journeys and rehearsed contingencies for medical, mechanical and
            hostile events.
          </li>
          <li>
            <strong>Protective presence</strong> — reading a room, managing
            proximity, and staying close enough to matter without becoming the
            thing everyone notices.
          </li>
        </Ul>
        <P>
          The visible skills matter, but the defining ones are judgement and
          discretion. A good CPO is chosen as much for temperament and manner as
          for physical capability, because the work is client-facing and takes
          place in the rooms the principal is paid to move through.
        </P>

        <H2>
          Close protection, executive protection and bodyguards — the same work,
          different names
        </H2>
        <P>
          These terms are often used interchangeably, and the confusion is
          reasonable. In practice they describe the same discipline from
          different angles:
        </P>
        <H3>Close protection vs executive protection</H3>
        <P>
          <em>Close protection</em> is the British and Australian term, and it
          emphasises the close-in protective role. <em>Executive protection</em>{" "}
          is the American term, and it tends to frame the work around corporate
          principals, business travel and the office that supports them. The
          skills, planning and standards are the same — we cover the distinction
          in more depth in{" "}
          <A href="/blog/what-executive-protection-actually-involves">
            what executive protection actually involves
          </A>
          .
        </P>
        <H3>Bodyguard vs close protection officer</H3>
        <P>
          <em>Bodyguard</em> describes the physical function — standing between
          a person and harm. A close protection officer does that too, but the
          term implies formal training, licensing and a planning discipline
          behind the presence. Put simply: every CPO is a bodyguard, but not
          every bodyguard works to CPO standards.
        </P>

        <H2>The planning behind the presence</H2>
        <P>
          People sometimes ask about the &ldquo;7 Ps&rdquo; of close protection.
          It is a planning maxim borrowed from military doctrine —{" "}
          <em>Proper Planning and Preparation Prevents Poor Performance</em> —
          and it captures the single most important truth about the work: the
          outcome on the day is decided beforehand, by the assessment,
          reconnaissance and rehearsal, not by improvisation in the moment.
        </P>
        <Quote>
          When a plan is done well, the day itself is unremarkable. That is the
          intention. A protective operation that looks dramatic is usually one
          that has been forced to improvise.
        </Quote>
        <P>
          This is why arranging protection well is largely an exercise in
          preparation and coordination. If you are organising it for a specific
          occasion, our practical guide to{" "}
          <A href="/blog/how-to-arrange-close-protection-for-an-event">
            arranging close protection for an event
          </A>{" "}
          walks through the steps end to end.
        </P>

        <H2>Who needs close protection</H2>
        <P>
          Close protection suits people whose exposure is sustained enough that
          it needs to be managed — without turning their life into a security
          operation. It is equally suited to a short, sensitive window rather
          than a permanent arrangement. Common situations include:
        </P>
        <Ul>
          <li>High-net-worth individuals and their immediate family</li>
          <li>Executives and founders with a public profile</li>
          <li>Public figures during periods of heightened attention</li>
          <li>Visiting principals who need an Australian-based team</li>
          <li>
            Anyone subject to a specific, identified threat or unwelcome contact
          </li>
        </Ul>
        <P>
          Much of the demand is for exactly this kind of short-notice or
          project-based cover — a court appearance, a public announcement, a
          family transition, a single trip. Good protection scales up when the
          picture requires it and scales down when it does not.
        </P>

        <H2>What good close protection looks like</H2>
        <P>
          The best protection is discreet, proportionate and coordinated. It is
          sized by requirement rather than theatre — a small, rehearsed team,
          never an entourage. It coordinates with venue security, drivers and
          household staff rather than competing with them. And it is honest: a
          reputable firm will tell you when protection is warranted, what form
          it should take, and sometimes that it is not needed at all.
        </P>

        <H2>Close protection in Australia</H2>
        <P>
          In Australia, close protection is a licensed security activity,
          regulated state by state. Operators must hold current security
          licences and accredited training, and the work is performed unarmed. A
          serious provider holds the licences for the jurisdictions it works in
          and can show them — Guardion operates under security licences across
          Queensland, New South Wales, the ACT, Victoria and South Australia.
          Where a matter extends overseas, the honest model is a disciplined
          home team working through vetted local partners rather than claiming
          to operate everywhere under its own licence.
        </P>
        <P>
          If any of this reflects your situation, the right first step is not to
          hire anyone — it is a confidential conversation. You can read how we
          approach the work on our{" "}
          <A href="/services/close-protection">close protection service page</A>
          , or <A href="/contact">speak to a principal of the firm</A> and
          describe the situation candidly.
        </P>
      </>
    ),
    faq: [
      {
        q: "What does “close protection” mean?",
        a: "Close protection is the specialised, close-in protection of one individual — the principal — against physical threats, harassment and harm. The word “close” refers to the operator’s proximity to the person, not to secrecy. It combines advance planning, risk assessment, secure movement and a trained protective presence.",
      },
      {
        q: "What is the difference between close protection and executive protection?",
        a: "They describe the same discipline from different angles. “Close protection” is the British and Australian term and emphasises the close-in protective role; “executive protection” is the American term and tends to frame the work around corporate principals and business travel. In practice the skills, planning and standards are the same.",
      },
      {
        q: "What is the difference between a bodyguard and a close protection officer?",
        a: "“Bodyguard” describes the physical function — standing between a person and harm. A close protection officer (CPO) does that too, but the term implies formal training, licensing and a planning discipline: risk assessment, advance work, route and venue reconnaissance and contingency planning. Every CPO is a bodyguard; not every bodyguard works to CPO standards.",
      },
      {
        q: "Who is a close protection officer?",
        a: "A close protection officer is a trained, licensed operator responsible for a principal’s safety across their daily life and high-risk moments. Beyond physical capability, a good CPO is a planner and a communicator — chosen as much for judgement and discretion as for protective skill.",
      },
      {
        q: "What are the 7 P’s in close protection?",
        a: "The “7 Ps” is a planning maxim borrowed from military doctrine: Proper Planning and Preparation Prevents Poor Performance. In close protection it captures the core truth of the work — that the outcome on the day is decided by the assessment, reconnaissance and rehearsal done beforehand, not by improvisation.",
      },
      {
        q: "Can anyone do close protection?",
        a: "No. In Australia, close protection is a licensed security activity regulated state by state, requiring accredited training, background checks and a current security licence. Beyond the licence, the work demands temperament, fitness, medical training and sound judgement — capabilities that take time to build.",
      },
      {
        q: "Is close protection a stressful job?",
        a: "It can be. The work involves long hours, constant situational awareness, travel and responsibility for another person’s safety. Well-run operations manage that load through planning, clear team roles and realistic rostering, so alertness is sustainable rather than a matter of running on adrenaline.",
      },
      {
        q: "What is the highest level of bodyguard?",
        a: "There is no single global rank, but the upper tier of the profession is close protection for high-threat principals — dignitaries, heads of state and high-profile individuals — delivered by teams with advanced training in surveillance detection, protective driving, medical response and, where lawful, firearms. In Australia this work is performed unarmed and to state licensing standards.",
      },
    ],
  },
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
          Executive protection is one of the most misunderstood services in the
          private security industry. Popular imagery — dark suits, coiled
          earpieces, hands hovering near jackets — describes a fraction of the
          work and misses almost all of the discipline behind it. The reality is
          quieter, more administrative, and far more considered than most people
          expect.
        </P>
        <P>
          A well-run executive protection engagement is, first and foremost, a
          planning exercise. Long before an operator stands near a principal,
          the firm has already assessed the person, their movements, their
          public profile and the environments they intend to travel through. The
          visible part of the service — the person walking a few paces behind —
          is the last few percent of the work.
        </P>

        <H2>Assessment comes first</H2>
        <P>
          Every engagement begins with a threat and vulnerability assessment.
          That is not a form to be filled in. It is a structured examination of
          who the principal is, what makes them of interest to a hostile party,
          and where the practical points of exposure sit — at home, in transit,
          at work, and in public.
        </P>
        <P>
          The assessment produces a written picture that is uncomfortable to
          read the first time. It names risks in plain language and separates
          the plausible from the theatrical. Good protection spends its budget
          on the plausible.
        </P>

        <H2>Planning is the product</H2>
        <P>
          From that picture comes a plan: routes, timings, venues, arrival and
          departure procedures, contingency options, medical considerations,
          communications, and the specific behaviours expected of every person
          on the team. It is written down, rehearsed where possible, and
          reviewed after each engagement.
        </P>
        <P>
          When a plan is done well, the day itself is unremarkable. That is the
          intention. A protective operation that looks dramatic is usually one
          that has been forced to improvise.
        </P>

        <Quote>
          The best days on this work are the ones the principal will not
          remember in a week. Quiet, on time, and entirely their own.
        </Quote>

        <H2>Presence, not spectacle</H2>
        <P>
          The operator standing near the principal is chosen as much for
          temperament and manner as for capability. They are in the room because
          they can read it. They know when to move forward, when to hold back,
          and when to say nothing at all. Their presence should reassure the
          principal and go unnoticed by everyone else.
        </P>
        <P>
          In our own work we place a great deal of weight on this. An operator
          who is technically excellent but socially clumsy will embarrass the
          client in the rooms they are paid to move through. Executive
          protection is a client-facing profession, and the people who do it
          well are recognisably professionals — literate, presentable, and calm.
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
          Where the work moves internationally, coordination widens to include
          vetted local partners who understand their own jurisdiction. No
          serious firm claims to operate everywhere in the world under its own
          licence. The honest model is a small, disciplined home team that works
          through trusted people abroad.
        </P>

        <H2>What executive protection is not</H2>
        <P>
          It is not a status symbol. It is not intimidation. It is not a
          substitute for common-sense privacy hygiene, and it is not a reason to
          behave more publicly than the principal otherwise would. A protection
          team that encourages a client to attract attention has misunderstood
          the assignment.
        </P>
        <P>
          Nor is it a permanent commitment. Many engagements are project based —
          a period of elevated exposure, a specific trip, a court appearance, a
          public announcement. The service should scale up when the picture
          requires it and scale down when it does not.
        </P>

        <H2>When to consider it</H2>
        <P>
          A reasonable trigger for a conversation is any of the following: a
          change in the principal's public profile, a credible communication
          that gives them pause, a period of unusual travel, a family event that
          will be visible online, or simply a sense that the environment around
          them has shifted.
        </P>
        <P>
          The right first step is not to hire anyone. It is to speak to a
          principal of a reputable firm and describe the situation candidly. A
          good firm will tell you honestly whether protection is warranted, what
          form it should take, and — sometimes — that it is not needed at all.
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
          Most requests for close protection at an event come from the people
          around the principal rather than the principal themselves. Personal
          assistants, chiefs of staff, event producers and family offices carry
          the practical burden of arranging it, often on short notice and while
          managing a dozen other moving parts. This guide is written for them.
        </P>
        <P>
          The goal is a simple one: the principal arrives, participates and
          leaves without incident, and without the security arrangements
          themselves becoming a topic of conversation. Every decision below
          serves that goal.
        </P>

        <H2>Start earlier than feels necessary</H2>
        <P>
          A good rule of thumb is to open the conversation two to three weeks
          before the event, and no less than seventy-two hours out for anything
          shorter. That window is not about availability. It is about the time
          required to walk the venue, agree routes, coordinate with the venue's
          own security, and — if needed — liaise with a driver and a residence
          team.
        </P>
        <P>
          Late requests are workable, but they force compromises. A firm that
          agrees enthusiastically to any timeline, however impossible, is
          telling you something about how it operates.
        </P>

        <H2>Share more than feels natural</H2>
        <P>
          Assistants often instinctively share as little as possible with an
          outside vendor. That instinct is right in most contexts and wrong
          here. A protection team can only plan well if they understand who the
          principal is, what the event is, who else will be there, what the
          principal is expected to do while there, and what has prompted the
          request.
        </P>
        <P>
          A reputable firm will treat that information as privileged and will
          sign confidentiality terms as a matter of course. If the conversation
          feels loose or the paperwork does not exist, that is your answer about
          the firm.
        </P>

        <Quote>
          The people we work best with are the ones who tell us the awkward
          parts first. It shortens the planning by days.
        </Quote>

        <H2>Agree the visible posture in advance</H2>
        <P>
          "Discreet" means different things to different people. Some principals
          want a team that blends entirely into the guest list; others want a
          visible deterrent presence at the entrance and no one obvious inside.
          Decide this early, in writing, and share it with the venue.
        </P>
        <P>
          Dress code, radio use, whether operators carry earpieces, whether they
          eat or drink during the event, where they stand when the principal is
          seated — all of these are worth deciding before the day, because
          changing them on the day is visible.
        </P>

        <H2>Walk the venue</H2>
        <P>
          A physical walk-through is the single most valuable hour of
          preparation. It surfaces things a floor plan cannot: sight lines,
          back-of-house corridors, lift keys, the actual arrival point for cars,
          the location of the nearest hospital, the room the principal will use
          if they need a moment away from the floor.
        </P>
        <P>
          Where a walk-through is impossible, the protection lead should
          coordinate with the venue's own security manager and obtain a current
          plan. If the event is at a residence, the walk-through is not
          optional.
        </P>

        <H2>Arrival and departure are the pinch points</H2>
        <P>
          Almost every problem at an event happens at arrival or departure.
          Guests are photographed as they step out of the vehicle. Crowds
          accumulate at the door. The pavement, not the ballroom, is where the
          plan usually earns its keep.
        </P>
        <P>
          Confirm the drop-off point with the driver. Confirm who greets the
          principal at the door. Confirm the exit route and a viable
          alternative. If media are expected, agree in advance where the
          principal will pause and where they will not.
        </P>

        <H2>Coordinate, do not compete</H2>
        <P>
          If the event has its own security, or other guests bring their own
          teams, coordination is essential. A protection lead should make
          contact with counterparts, agree communications, and respect the
          venue's chain of command. Guests notice friction between security
          teams long before they notice the security itself.
        </P>

        <H2>What a good quote looks like</H2>
        <P>
          Expect a written scope of work that names the number of operators,
          their roles, hours on duty, transport arrangements, equipment, any
          sub-contracted specialists (medical, technical), insurance position,
          and a clear rate. Expect a named principal of the firm to be
          accountable — not just a booking desk.
        </P>
        <P>
          Cheap and vague is expensive. A clear scope protects both sides and,
          more importantly, protects the client on the day.
        </P>

        <H2>After the event</H2>
        <P>
          A short after-action note the following day is a mark of a serious
          firm. It records what happened, what did not, and what should change
          next time. Keep it. It becomes the starting point for the next
          engagement and, over time, a very useful record for the office that
          manages the principal's calendar.
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
          People often come to a private investigator with a suspicion and a
          sense of urgency. Both are reasonable. Neither, on its own, is a
          reason to open an investigation. The first job of a serious firm is to
          slow the conversation down and work out whether an investigation is
          the right instrument at all.
        </P>
        <P>
          Sometimes it is. Sometimes the situation is better addressed by a
          lawyer, an accountant, an HR professional, or simply by a direct
          conversation. Knowing the difference is the beginning of getting a
          useful outcome.
        </P>

        <H2>What a private investigator actually does</H2>
        <P>
          A licensed investigator gathers information, lawfully, and records it
          in a form that can withstand scrutiny. That includes open-source
          research, structured interviews, physical observation where
          appropriate, verification of documents, and coordination with
          specialists — forensic accountants, digital examiners, legal counsel —
          when the picture requires it.
        </P>
        <P>
          What an investigator does not do is act above the law. No reputable
          firm will intercept communications without authority, access private
          accounts, impersonate officials, or obtain information by pressure.
          The moment those lines are crossed, the resulting material is
          worthless in a courtroom and dangerous to the client.
        </P>

        <H2>Reasonable triggers</H2>
        <P>
          There are several situations in which engaging an investigator is a
          proportionate step. A pattern of loss inside a business that internal
          controls cannot explain. A dispute where the available facts do not
          match the story being told. A background enquiry before a significant
          appointment, investment or partnership. A family matter where safety,
          not curiosity, is the concern.
        </P>
        <P>
          In each of those cases the goal is the same: to replace suspicion with
          fact, and to do so in a way that a court, a board or a regulator would
          accept.
        </P>

        <H2>When it is the wrong tool</H2>
        <P>
          There are equally clear cases where an investigation is the wrong
          instrument. A domestic disagreement that has not been discussed
          openly. A commercial grievance that has never been put in writing. A
          wish to monitor an ex-partner or a family member for reasons that do
          not concern safety. A reputable firm will decline this work, and
          should.
        </P>

        <Quote>
          The right question is not "can you find out." It is "what would you do
          with the answer if we did." Sometimes the honest answer changes the
          request.
        </Quote>

        <H2>Lawful and court-admissible</H2>
        <P>
          "Lawful and court-admissible" is not a marketing phrase. It is a
          working standard that shapes every step of a matter. Observation is
          conducted from places where a private investigator has a right to be.
          Documents are obtained through proper channels. Interviews are
          consented, recorded where required, and stored securely. Chains of
          custody are maintained. Notes are written contemporaneously.
        </P>
        <P>
          The result is a report that a solicitor can rely on, a board can act
          on, and — if it comes to it — that survives cross-examination.
        </P>

        <H2>Confidentiality is structural</H2>
        <P>
          Investigations often touch material a client would prefer never
          existed. The engagement should be structured accordingly. Written
          confidentiality terms are signed at the outset. Access to the matter
          is limited to the people working on it. Files are stored in a manner
          appropriate to their sensitivity. Where a matter is legally
          privileged, the firm coordinates with counsel so that privilege is
          preserved throughout.
        </P>

        <H2>What a first conversation looks like</H2>
        <P>
          The first conversation with a serious firm is short, private and
          honest. It covers who you are, what you are worried about, what
          outcome you actually want, and what has been done so far. It does not
          commit either party to anything. It should end with a clear
          recommendation — proceed, wait, or engage a different professional
          entirely.
        </P>
        <P>
          If the conversation instead ends with a large invoice and a promise to
          "start immediately," it is worth having a second conversation
          elsewhere.
        </P>

        <H2>Protection and intelligence together</H2>
        <P>
          There are cases where an investigation and a protection engagement
          belong together — a credible threat that needs to be understood and
          mitigated at the same time. In our own practice those matters are run
          by a single principal so that the two workstreams inform one another.
          The point of doing both under one roof is precisely that the
          intelligence and the protection are never working from different
          pictures of the same problem.
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

export function formatPostDate(iso: string, intlLocale = "en-AU"): string {
  const d = new Date(iso);
  return d.toLocaleDateString(intlLocale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
