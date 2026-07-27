import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ShieldCheck,
  Search,
  ChevronDown,
  Award,
  Globe2,
  Lock,
  Scale,
} from "lucide-react";
import heroImage from "@/assets/hero-night-city.jpg";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ContactBand } from "@/components/site/ContactBand";
import { SERVICES } from "@/lib/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Guardion — Specialist Protection & Investigations",
  description:
    "Discreet close protection and private investigations for high-net-worth individuals, executives and family offices. Licensed in Australia, coordinated worldwide.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Guardion — Specialist Protection & Investigations",
    description:
      "Protection & Intelligence, end to end. A calm, controlled security partner for individuals and organisations.",
    url: "/",
    siteName: "Guardion",
    type: "website",
  },
};

const STATS = [
  { label: "Licensed across", value: "5 states & territories" },
  { label: "Operating", value: "Worldwide" },
  { label: "Response", value: "24-hour" },
];

const CRED = [
  {
    icon: Award,
    title: "Operator pedigree",
    body: "Backgrounds in Australian law enforcement and military service.",
  },
  {
    icon: Lock,
    title: "Absolute discretion",
    body: "Client identities, movements and engagements are never disclosed.",
  },
  {
    icon: Scale,
    title: "Legal compliance",
    body: "Licensed operations; investigations produce court-admissible evidence.",
  },
  {
    icon: Globe2,
    title: "Global coordination",
    body: "Executive and family travel supported through vetted local partners.",
  },
];

const TESTIMONIALS = [
  {
    name: "Jessica Carter",
    role: "Private Client",
    quote:
      "Guardion made the entire experience feel calm and controlled. Nothing was ever theatrical — they were simply there, and everything went smoothly.",
  },
  {
    name: "Amie Coldwell",
    role: "Executive Assistant",
    quote:
      "As the person coordinating on behalf of the principal, I valued their precision. Briefs were tight, communication was quiet, and every logistical detail was handled.",
  },
  {
    name: "Connor Murray",
    role: "Corporate Security Director",
    quote:
      "We use Guardion when we need a partner who understands both protection and intelligence. That combination is rare, and it matters.",
  },
];

const FAQS = [
  {
    q: "How do I request a quote?",
    a: "Submit a confidential consultation request or call our 24-hour line. A principal of the firm will speak with you directly, understand the requirement, and provide a scoped proposal — usually within one business day.",
  },
  {
    q: "How do I know which service is right for me?",
    a: "We begin with a short, no-obligation conversation. From there we advise honestly — sometimes the answer is a single driver for a specific movement; sometimes it is a longer program. We will not recommend more than the situation requires.",
  },
  {
    q: "Are Guardion operatives licensed and trained?",
    a: "Yes. Guardion holds security licences in Queensland, New South Wales, the Australian Capital Territory, Victoria and South Australia. Operators hold current state licences and complete ongoing training in protection, first aid and defensive driving.",
  },
  {
    q: "What services does Guardion offer?",
    a: "Close protection, executive protection, residential security, security driving, private investigations and tailored security programs. All can be combined into a single, coordinated engagement.",
  },
  {
    q: "How is confidentiality maintained?",
    a: "Every engagement is governed by strict internal protocols and non-disclosure. We do not share client names, itineraries or engagement details externally, and internal access is limited to those directly involved.",
  },
  {
    q: "Can Guardion support international travel?",
    a: "Yes. From an Australian licensed base we coordinate protection worldwide through a vetted network of trusted operatives and local partners, always within the law of the operating jurisdiction.",
  },
  {
    q: "How quickly can you respond?",
    a: "Our 24-hour line is monitored continuously. Standard engagements are scoped within a business day; urgent protective movements can typically be resourced within hours.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main id="main">
        <Hero />
        <PositioningStrip />
        <Difference />
        <ServicesGrid />
        <Credibility />
        <GlobalReachTeaser />
        <Testimonials />
        <FAQ />
        <ContactBand />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="grain vignette relative min-h-[100svh] overflow-hidden">
      <Image
        src={heroImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
        aria-hidden
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(14,16,19,0.55) 0%, rgba(14,16,19,0.7) 55%, rgba(14,16,19,0.98) 100%)",
        }}
        aria-hidden
      />
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1280px] flex-col justify-end px-6 pb-24 pt-40 md:pb-32">
        <span className="eyebrow rise">Protection &amp; Intelligence — end to end</span>
        <h1 className="rise mt-8 max-w-[18ch] font-serif text-[44px] leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-[72px]">
          Specialist Protection &amp; Investigations.
        </h1>
        <p className="rise mt-8 max-w-[62ch] text-base leading-relaxed text-text-mute md:text-lg">
          Guardion delivers a premium protection experience for individuals and
          organisations seeking elite personal security. We redefine what safety
          feels like — calm, calculated, and always in control.
        </p>
        <div className="rise mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex h-12 items-center border border-accent bg-accent px-6 text-sm font-medium text-white transition hover:bg-[#a91f26]"
          >
            Confidential Consultation
          </Link>
          <Link
            href="/services"
            className="inline-flex h-12 items-center gap-2 border border-border/70 bg-background/20 px-6 text-sm text-foreground backdrop-blur-sm transition hover:border-foreground/40"
          >
            Our Services
          </Link>
        </div>
        <div className="mt-16 flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-text-mute">
          <ChevronDown className="h-4 w-4 animate-bounce" aria-hidden />
          Scroll
        </div>
      </div>
    </section>
  );
}

function PositioningStrip() {
  return (
    <section className="border-y border-border bg-background">
      <div className="mx-auto max-w-[1280px] px-6">
        <ul className="grid grid-cols-1 md:grid-cols-3">
          {STATS.map((s, i) => (
            <li
              key={s.label}
              className={`flex items-baseline gap-4 py-8 ${
                i > 0 ? "md:border-l md:border-border md:pl-12" : ""
              } ${i < STATS.length - 1 ? "border-b border-border md:border-b-0" : ""}`}
            >
              <span className="h-2 w-2 shrink-0 bg-accent" aria-hidden />
              <div className="min-w-0">
                <div className="text-[10px] uppercase tracking-[0.22em] text-text-mute">
                  {s.label}
                </div>
                <div className="mt-1 font-serif text-2xl text-foreground">{s.value}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Difference() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[1280px] px-6 py-28 md:py-36">
        <div className="grid gap-16 md:grid-cols-[1fr_1.4fr] md:items-end">
          <div>
            <span className="eyebrow mb-6">The Guardion difference</span>
            <h2 className="mt-6 font-serif text-4xl leading-[1.05] text-foreground md:text-[44px]">
              One firm, one continuous responsibility.
            </h2>
          </div>
          <p className="max-w-[56ch] text-base leading-relaxed text-text-mute md:text-lg">
            Most providers do one or the other. Guardion is unusual in offering
            both close protection and private investigations under a single
            brand — so a threat can be investigated and then protected against,
            end to end, without handoffs.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
          <article className="bg-surface p-10 md:p-14">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-accent" aria-hidden />
              <span className="text-[10px] uppercase tracking-[0.22em] text-text-mute">
                Protection
              </span>
            </div>
            <h3 className="mt-6 font-serif text-3xl text-foreground">
              Presence, without theatre.
            </h3>
            <p className="mt-5 max-w-[46ch] text-sm leading-relaxed text-text-mute">
              Close and executive protection built around the principal's day —
              quiet, embedded, and rehearsed. From a single movement to a
              standing detail, our operators are chosen for judgement first.
            </p>
          </article>
          <article className="bg-surface p-10 md:p-14">
            <div className="flex items-center gap-3">
              <Search className="h-5 w-5 text-accent" aria-hidden />
              <span className="text-[10px] uppercase tracking-[0.22em] text-text-mute">
                Intelligence
              </span>
            </div>
            <h3 className="mt-6 font-serif text-3xl text-foreground">
              Answers, on the record.
            </h3>
            <p className="mt-5 max-w-[46ch] text-sm leading-relaxed text-text-mute">
              Lawful, confidential investigations that produce evidence fit for
              court, board or family office. When findings warrant it, the same
              team responsible for the enquiry can stand up the response.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

function ServicesGrid() {
  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1280px] px-6 py-28 md:py-36">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow mb-6">Services</span>
            <h2 className="mt-6 max-w-[24ch] font-serif text-4xl leading-[1.05] text-foreground md:text-[44px]">
              A calibrated set of capabilities.
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-foreground/85 transition hover:text-foreground"
          >
            All services
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group relative flex flex-col justify-between bg-surface p-8 transition duration-300 hover:bg-surface-2 md:p-10"
            >
              <div>
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-text-mute">
                  <span className="tabular-nums">0{i + 1}</span>
                  <span className="h-px w-8 bg-border" />
                </div>
                <h3 className="mt-6 font-serif text-2xl text-foreground">{s.title}</h3>
                <p className="mt-4 max-w-[36ch] text-sm leading-relaxed text-text-mute">
                  {s.summary}
                </p>
              </div>
              <div className="mt-10 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.18em] text-text-mute transition group-hover:text-foreground">
                  Read more
                </span>
                <ArrowUpRight className="h-5 w-5 text-text-mute transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Credibility() {
  return (
    <section className="grain border-t border-border bg-surface">
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 py-24 md:py-32">
        <div className="max-w-[52ch]">
          <span className="eyebrow mb-6">Why Guardion</span>
          <h2 className="mt-6 font-serif text-4xl leading-[1.05] text-foreground md:text-[44px]">
            Standards you can quietly rely on.
          </h2>
        </div>
        <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {CRED.map((c) => (
            <div key={c.title} className="bg-surface p-8">
              <c.icon className="h-5 w-5 text-accent" aria-hidden />
              <h3 className="mt-6 font-serif text-lg text-foreground">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-mute">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GlobalReachTeaser() {
  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1280px] px-6 py-28 md:py-36">
        <div className="grid gap-14 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div>
            <span className="eyebrow mb-6">Global reach</span>
            <h2 className="mt-6 max-w-[22ch] font-serif text-4xl leading-[1.05] text-foreground md:text-[44px]">
              An Australian base. A worldwide operating model.
            </h2>
            <p className="mt-6 max-w-[56ch] text-base leading-relaxed text-text-mute">
              We hold security licences across five Australian states and
              territories, and coordinate protection abroad through a vetted
              network of trusted
              operatives and local partners — always within the law of the
              operating jurisdiction. We do not maintain owned offices overseas,
              and we do not pretend to.
            </p>
            <Link
              href="/global-reach"
              className="mt-8 inline-flex items-center gap-2 text-sm text-foreground/90 transition hover:text-foreground"
            >
              How the model works
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-px border border-border bg-border">
            {["QLD", "NSW", "ACT", "VIC", "SA", "International"].map((r) => (
              <div key={r} className="flex items-center gap-3 bg-surface p-6">
                <span className="h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden />
                <span className="text-sm text-foreground">{r}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1280px] px-6 py-28 md:py-36">
        <span className="eyebrow mb-6">In their words</span>
        <h2 className="mt-6 max-w-[24ch] font-serif text-4xl leading-[1.05] text-foreground md:text-[44px]">
          Quiet feedback from those who hire us.
        </h2>
        <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="flex h-full flex-col justify-between bg-surface p-8 md:p-10">
              <blockquote className="font-serif text-lg leading-[1.5] text-foreground/95">
                <span className="mr-1 text-accent">“</span>
                {t.quote}
                <span className="ml-1 text-accent">”</span>
              </blockquote>
              <figcaption className="mt-10 border-t border-border pt-5">
                <div className="text-sm text-foreground">{t.name}</div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-text-mute">
                  {t.role}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1280px] px-6 py-28 md:py-36">
        <div className="grid gap-16 md:grid-cols-[1fr_1.6fr]">
          <div>
            <span className="eyebrow mb-6">FAQ</span>
            <h2 className="mt-6 max-w-[16ch] font-serif text-4xl leading-[1.05] text-foreground md:text-[44px]">
              Questions we're asked, answered plainly.
            </h2>
            <p className="mt-6 max-w-[42ch] text-sm leading-relaxed text-text-mute">
              If your question isn't here, speak with us directly. Every
              conversation is confidential.
            </p>
          </div>
          <Accordion type="single" collapsible className="border-t border-border">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-b border-border">
                <AccordionTrigger className="py-6 text-left font-serif text-lg text-foreground hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-sm leading-relaxed text-text-mute">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
