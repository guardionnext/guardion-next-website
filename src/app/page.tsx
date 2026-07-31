import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
  Search,
  ChevronDown,
  Award,
  Globe2,
  Lock,
  Scale,
  MapPin,
  Clock,
  MessagesSquare,
  Radar,
  ClipboardList,
} from "lucide-react";
import heroImage from "@/assets/hero-night-city.webp";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ContactBand } from "@/components/site/ContactBand";
import { Accreditations } from "@/components/site/Accreditations";
import { LionWatermark } from "@/components/site/LionWatermark";
import { Reveal } from "@/components/site/Reveal";
import { Reticle } from "@/components/site/Reticle";
import { GlobeGraticule } from "@/components/site/GlobeGraticule";
import { CapabilitiesMarquee } from "@/components/site/CapabilitiesMarquee";
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
    body: "Backgrounds in Australian Defence Force service and the licensed security industry.",
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
        <CapabilitiesMarquee />
        <Difference />
        <EthosStatement />
        <ServicesGrid />
        <EngagementProcess />
        <Credibility />
        <Accreditations />
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
        className="kenburns object-cover object-[center_60%] brightness-[1.45] contrast-[1.06] saturate-[1.12]"
        aria-hidden
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(14,16,19,0.14) 0%, rgba(14,16,19,0.3) 44%, rgba(14,16,19,0.7) 76%, rgba(14,16,19,0.97) 100%)",
        }}
        aria-hidden
      />
      {/* Faint accent wash pooling toward the lion */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(48% 45% at 82% 62%, rgba(196,38,46,0.14), transparent 70%)",
        }}
        aria-hidden
      />

      {/* Brand lion, emerging from the shadow on the right — desktop */}
      <LionWatermark
        className="right-[-8%] top-[6%] z-[1] hidden h-[86%] w-[620px] md:block"
        opacity={0.14}
      />
      {/* Brand lion — mobile (tuned smaller so it reads behind the headline) */}
      <LionWatermark
        className="right-[-20%] top-[8%] z-[1] block h-[44%] w-[300px] md:hidden"
        opacity={0.12}
      />

      {/* Viewfinder framing marks */}
      <Reticle tone="muted" inset="clamp(1.25rem, 4vw, 3rem)" className="hidden md:block" />

      {/* Editorial vertical label on the far right edge */}
      <span
        className="absolute right-6 top-1/2 z-[2] hidden -translate-y-1/2 text-[10px] uppercase tracking-[0.4em] text-text-mute/80 [writing-mode:vertical-rl] lg:block"
        aria-hidden
      >
        Protection · Intelligence
      </span>

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
            className="group inline-flex h-12 items-center gap-2 border border-accent bg-accent px-6 text-sm font-medium text-white shadow-[0_18px_40px_-18px_rgba(196,38,46,0.9)] transition hover:bg-[#a91f26]"
          >
            Confidential Consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/services"
            className="inline-flex h-12 items-center gap-2 border border-border/70 bg-background/20 px-6 text-sm text-foreground backdrop-blur-sm transition hover:border-foreground/40"
          >
            Our Services
          </Link>
        </div>
        <div className="rise mt-14 flex flex-col gap-5 border-t border-border/60 pt-8 sm:flex-row sm:items-center sm:gap-10">
          {[
            { icon: MapPin, label: "Licensed across Australia" },
            { icon: Globe2, label: "Coordinated worldwide" },
            { icon: Clock, label: "24-hour response" },
          ].map((a) => (
            <div
              key={a.label}
              className="flex items-center gap-2.5 text-xs uppercase tracking-[0.18em] text-text-mute"
            >
              <a.icon className="h-4 w-4 text-accent" aria-hidden />
              {a.label}
            </div>
          ))}
          <span
            className="hidden items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-text-mute/70 sm:ml-auto lg:inline-flex"
            aria-hidden
          >
            <ChevronDown className="h-4 w-4 animate-bounce" />
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
}

function PositioningStrip() {
  return (
    <section className="border-y border-border bg-background">
      <Reveal className="mx-auto max-w-[1280px] px-6">
        <ul className="grid grid-cols-1 md:grid-cols-3">
          {STATS.map((s, i) => (
            <li
              key={s.label}
              className={`group flex items-stretch gap-4 py-9 ${
                i > 0 ? "md:border-l md:border-border md:pl-12" : ""
              } ${i < STATS.length - 1 ? "border-b border-border md:border-b-0" : ""}`}
            >
              <span
                className="w-[3px] shrink-0 bg-accent transition-all duration-500 group-hover:bg-accent-strong"
                aria-hidden
              />
              <div className="min-w-0">
                <div className="text-[10px] uppercase tracking-[0.22em] text-text-mute">
                  {s.label}
                </div>
                <div className="mt-1.5 font-serif text-[26px] leading-tight text-foreground">
                  {s.value}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

function Difference() {
  return (
    <section className="relative overflow-hidden bg-background">
      <LionWatermark
        flip
        className="left-[-8%] top-[18%] hidden w-[520px] lg:block"
        opacity={0.05}
      />
      <Reveal className="relative z-10 mx-auto max-w-[1280px] px-6 py-28 md:py-36">
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
          <article className="hair-accent group relative overflow-hidden bg-surface p-10 transition-colors duration-300 hover:bg-surface-2 md:p-14">
            <ShieldCheck
              className="pointer-events-none absolute -right-6 -top-6 h-40 w-40 text-white/[0.02] transition-transform duration-500 group-hover:scale-105"
              aria-hidden
            />
            <div className="relative flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-accent" aria-hidden />
              <span className="text-[10px] uppercase tracking-[0.22em] text-text-mute">
                Protection
              </span>
            </div>
            <h3 className="relative mt-6 font-serif text-3xl text-foreground">
              Presence, without theatre.
            </h3>
            <p className="relative mt-5 max-w-[46ch] text-sm leading-relaxed text-text-mute">
              Close and executive protection built around the principal&rsquo;s day —
              quiet, embedded, and rehearsed. From a single movement to a
              standing detail, our operators are chosen for judgement first.
            </p>
          </article>
          <article className="hair-accent group relative overflow-hidden bg-surface p-10 transition-colors duration-300 hover:bg-surface-2 md:p-14">
            <Search
              className="pointer-events-none absolute -right-6 -top-6 h-40 w-40 text-white/[0.02] transition-transform duration-500 group-hover:scale-105"
              aria-hidden
            />
            <div className="relative flex items-center gap-3">
              <Search className="h-5 w-5 text-accent" aria-hidden />
              <span className="text-[10px] uppercase tracking-[0.22em] text-text-mute">
                Intelligence
              </span>
            </div>
            <h3 className="relative mt-6 font-serif text-3xl text-foreground">
              Answers, on the record.
            </h3>
            <p className="relative mt-5 max-w-[46ch] text-sm leading-relaxed text-text-mute">
              Lawful, confidential investigations that produce evidence fit for
              court, board or family office. When findings warrant it, the same
              team responsible for the enquiry can stand up the response.
            </p>
          </article>
        </div>
      </Reveal>
    </section>
  );
}

function ServicesGrid() {
  return (
    <section className="border-t border-border bg-background">
      <Reveal className="mx-auto max-w-[1280px] px-6 py-28 md:py-36">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow mb-6">Services</span>
            <h2 className="mt-6 max-w-[24ch] font-serif text-4xl leading-[1.05] text-foreground md:text-[44px]">
              A calibrated set of capabilities.
            </h2>
          </div>
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm text-foreground/85 transition hover:text-foreground"
          >
            All services
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="hair-accent group relative flex flex-col justify-between overflow-hidden bg-surface p-8 transition duration-300 hover:bg-surface-2 md:p-10"
            >
              <span
                className="pointer-events-none absolute right-5 top-3 font-serif text-[64px] leading-none text-white/[0.03] transition-colors duration-300 group-hover:text-accent/10"
                aria-hidden
              >
                0{i + 1}
              </span>
              <div className="relative">
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-text-mute">
                  <span className="tabular-nums">0{i + 1}</span>
                  <span className="h-px w-8 bg-border" />
                </div>
                <h3 className="mt-6 font-serif text-2xl text-foreground">{s.title}</h3>
                <p className="mt-4 max-w-[36ch] text-sm leading-relaxed text-text-mute">
                  {s.summary}
                </p>
              </div>
              <div className="relative mt-10 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.18em] text-text-mute transition group-hover:text-foreground">
                  Read more
                </span>
                <ArrowUpRight className="h-5 w-5 text-text-mute transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </div>
            </Link>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function Credibility() {
  return (
    <section className="grain ambient-red relative overflow-hidden border-t border-border bg-surface">
      <LionWatermark
        className="right-[-6%] top-1/2 hidden w-[560px] -translate-y-1/2 lg:block"
        opacity={0.055}
      />
      <Reveal className="relative z-10 mx-auto max-w-[1280px] px-6 py-24 md:py-32">
        <div className="max-w-[52ch]">
          <span className="eyebrow mb-6">Why Guardion</span>
          <h2 className="mt-6 font-serif text-4xl leading-[1.05] text-foreground md:text-[44px]">
            Standards you can quietly rely on.
          </h2>
        </div>
        <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {CRED.map((c) => (
            <div
              key={c.title}
              className="hair-accent group bg-surface p-8 transition-colors duration-300 hover:bg-surface-2"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center border border-border bg-background/40 transition-colors duration-300 group-hover:border-accent/50">
                <c.icon className="h-5 w-5 text-accent" aria-hidden />
              </span>
              <h3 className="mt-6 font-serif text-lg text-foreground">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-mute">{c.body}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function GlobalReachTeaser() {
  const regions = ["QLD", "NSW", "ACT", "VIC", "SA", "International"];
  return (
    <section className="relative overflow-hidden border-t border-border bg-background">
      <LionWatermark
        flip
        className="left-[-10%] top-1/2 hidden w-[440px] -translate-y-1/2 lg:block"
        opacity={0.045}
      />
      <Reveal className="relative z-10 mx-auto max-w-[1280px] px-6 py-28 md:py-36">
        <div className="grid gap-16 md:grid-cols-[1.05fr_1fr] md:items-center">
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

            {/* Coverage chips */}
            <ul className="mt-9 flex flex-wrap gap-2.5">
              {regions.map((r) => (
                <li
                  key={r}
                  className="group inline-flex items-center gap-2 border border-border bg-surface px-3.5 py-2 text-xs tracking-wide text-foreground/90 transition-colors duration-300 hover:border-accent/50"
                >
                  <span
                    className="h-1.5 w-1.5 shrink-0 bg-accent transition-transform duration-300 group-hover:scale-150"
                    aria-hidden
                  />
                  {r}
                  {r === "International" && (
                    <span className="ml-1 text-[9px] uppercase tracking-[0.2em] text-text-mute">
                      Vetted
                    </span>
                  )}
                </li>
              ))}
            </ul>

            <Link
              href="/global-reach"
              className="group mt-9 inline-flex items-center gap-2 text-sm text-foreground/90 transition hover:text-foreground"
            >
              How the model works
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Graticule globe */}
          <div className="relative mx-auto w-full max-w-[420px]">
            <div className="scope-rings pointer-events-none absolute inset-[-8%] z-0 opacity-70" aria-hidden />
            <GlobeGraticule className="relative z-10 text-border" />
            <div className="relative z-10 mt-6 flex items-center justify-center gap-6 text-[10px] uppercase tracking-[0.2em] text-text-mute">
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 bg-accent" aria-hidden />
                Australian base
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 border border-accent/60" aria-hidden />
                Vetted partners
              </span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-background">
      <span
        className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 font-serif text-[320px] leading-none text-white/[0.02] select-none md:text-[440px]"
        aria-hidden
      >
        &ldquo;
      </span>
      <LionWatermark
        className="right-[-9%] bottom-[-6%] hidden w-[480px] lg:block"
        opacity={0.04}
      />
      <Reveal className="relative z-10 mx-auto max-w-[1280px] px-6 py-28 md:py-36">
        <span className="eyebrow mb-6">In their words</span>
        <h2 className="mt-6 max-w-[24ch] font-serif text-4xl leading-[1.05] text-foreground md:text-[44px]">
          Quiet feedback from those who hire us.
        </h2>
        <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="hair-accent group flex h-full flex-col justify-between bg-surface p-8 transition-colors duration-300 hover:bg-surface-2 md:p-10"
            >
              <blockquote className="font-serif text-lg leading-[1.5] text-foreground/95">
                <span className="mr-1 text-accent">&ldquo;</span>
                {t.quote}
                <span className="ml-1 text-accent">&rdquo;</span>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-4 border-t border-border pt-5">
                <span
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-border bg-background/40 font-serif text-sm tracking-wide text-foreground/90 transition-colors duration-300 group-hover:border-accent/50"
                  aria-hidden
                >
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
                <span className="min-w-0">
                  <span className="block text-sm text-foreground">{t.name}</span>
                  <span className="block text-[11px] uppercase tracking-[0.18em] text-text-mute">
                    {t.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function EthosStatement() {
  return (
    <section className="grain ambient-red relative overflow-hidden border-y border-border bg-surface">
      {/* A larger, imagined lion — present in shadow behind the statement */}
      <LionWatermark
        className="left-1/2 top-1/2 hidden w-[760px] -translate-x-1/2 -translate-y-1/2 md:block"
        opacity={0.06}
      />
      <Reveal className="relative z-10 mx-auto max-w-[1000px] px-6 py-32 text-center md:py-44">
        <div className="mb-8 flex justify-center">
          <span className="eyebrow">Our ethos</span>
        </div>
        <p className="mx-auto max-w-[24ch] font-serif text-3xl leading-[1.16] text-foreground sm:text-4xl md:max-w-[20ch] md:text-[52px] md:leading-[1.12]">
          The best protection is the kind you never notice — present when it
          matters, invisible when it doesn&rsquo;t, and absolute either way.
        </p>
        <div className="mt-12 flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.28em] text-text-mute">
          <span className="h-px w-12 bg-accent" aria-hidden />
          Guardion
          <span className="h-px w-12 bg-accent" aria-hidden />
        </div>
      </Reveal>
    </section>
  );
}

function EngagementProcess() {
  const STEPS = [
    {
      icon: MessagesSquare,
      k: "01",
      title: "Confidential consultation",
      body: "A principal of the firm listens first. No obligation, and nothing on the record.",
    },
    {
      icon: Radar,
      k: "02",
      title: "Threat & risk assessment",
      body: "We map the real picture — people, patterns and places — and grade the exposure honestly.",
    },
    {
      icon: ClipboardList,
      k: "03",
      title: "Bespoke planning",
      body: "A right-sized plan: routes, contingencies and the smallest effective footprint.",
    },
    {
      icon: ShieldCheck,
      k: "04",
      title: "Discreet execution",
      body: "Quiet, rehearsed delivery — with the intelligence to adapt as the situation moves.",
    },
  ];
  return (
    <section className="relative overflow-hidden border-t border-border bg-surface">
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden />
      <Reveal className="relative z-10 mx-auto max-w-[1280px] px-6 py-28 md:py-36">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow mb-6">How we engage</span>
            <h2 className="mt-6 max-w-[24ch] font-serif text-4xl leading-[1.05] text-foreground md:text-[44px]">
              A measured path — from first call to standing detail.
            </h2>
          </div>
          <p className="max-w-[40ch] text-sm leading-relaxed text-text-mute">
            Every engagement follows the same disciplined sequence, scaled to
            the situation. No theatre, no upsell — only what the picture
            requires.
          </p>
        </div>

        <ol className="mt-16 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <li
              key={s.k}
              className="hair-accent group relative bg-surface p-8 transition-colors duration-300 hover:bg-surface-2 md:p-9"
            >
              <span
                className="pointer-events-none absolute right-5 top-4 font-serif text-[54px] leading-none text-white/[0.03] transition-colors duration-300 group-hover:text-accent/10"
                aria-hidden
              >
                {s.k}
              </span>
              <span className="relative inline-flex h-11 w-11 items-center justify-center border border-border bg-background/40 transition-colors duration-300 group-hover:border-accent/50">
                <s.icon className="h-5 w-5 text-accent" aria-hidden />
              </span>
              <h3 className="relative mt-6 font-serif text-xl text-foreground">
                {s.title}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-text-mute">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}

function FAQ() {
  return (
    <section className="border-t border-border bg-background">
      <Reveal className="mx-auto max-w-[1280px] px-6 py-28 md:py-36">
        <div className="grid gap-16 md:grid-cols-[1fr_1.6fr]">
          <div>
            <span className="eyebrow mb-6">FAQ</span>
            <h2 className="mt-6 max-w-[16ch] font-serif text-4xl leading-[1.05] text-foreground md:text-[44px]">
              Questions we&rsquo;re asked, answered plainly.
            </h2>
            <p className="mt-6 max-w-[42ch] text-sm leading-relaxed text-text-mute">
              If your question isn&rsquo;t here, speak with us directly. Every
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
      </Reveal>
    </section>
  );
}
