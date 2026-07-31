import type { Metadata } from "next";
import { Phone, Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { LionWatermark } from "@/components/site/LionWatermark";
import { SITE } from "@/lib/site";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact — Request a Confidential Consultation | Guardion",
  description:
    "Request a confidential consultation with Guardion for close protection, executive protection, investigations and security driving. Discreet, 24-hour response.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Guardion — Request a Confidential Consultation",
    description:
      "Speak directly with a principal of the firm. Phone, email, WhatsApp, Signal or a secure enquiry form.",
    url: "/contact",
    siteName: "Guardion",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Guardion",
  description:
    "Request a confidential consultation with Guardion for close protection and private investigations.",
  url: `${SITE.url}/contact`,
  telephone: SITE.phone,
  email: SITE.email,
  areaServed: [
    { "@type": "AdministrativeArea", name: "Queensland" },
    { "@type": "AdministrativeArea", name: "New South Wales" },
    { "@type": "AdministrativeArea", name: "Australian Capital Territory" },
    { "@type": "AdministrativeArea", name: "Victoria" },
    { "@type": "AdministrativeArea", name: "South Australia" },
    { "@type": "Place", name: "International — coordinated through vetted partners" },
  ],
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="main">
        <Hero />
        <section className="bg-background">
          <Reveal className="mx-auto max-w-[1280px] px-6 py-24 md:py-32">
            <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr]">
              <ContactForm />

              <aside className="border-t border-border pt-10 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
                <span className="eyebrow mb-6">Direct channels</span>
                <p className="mt-6 max-w-[48ch] text-base leading-relaxed text-text-mute">
                  If you prefer to speak now, use the options below. All communications are handled
                  with the same discretion as a formal engagement.
                </p>

                <div className="mt-10 space-y-6">
                  <a
                    href={SITE.phoneHref}
                    aria-label="Call Guardion 24 hour line"
                    className="group block border border-border bg-surface p-6 transition hover:border-foreground/40"
                  >
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-accent" aria-hidden />
                      <span className="text-[10px] uppercase tracking-[0.22em] text-text-mute">
                        24-hour phone
                      </span>
                    </div>
                    <div className="mt-3 font-serif text-2xl text-foreground">{SITE.phone}</div>
                  </a>

                  <a
                    href={`mailto:${SITE.email}`}
                    aria-label="Email Guardion"
                    className="group flex items-center justify-between border border-border bg-surface p-6 transition hover:border-foreground/40"
                  >
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-accent" aria-hidden />
                      <span className="text-sm text-foreground">{SITE.email}</span>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-text-mute transition group-hover:text-accent" />
                  </a>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <a
                      href={SITE.whatsapp}
                      aria-label="Contact Guardion on WhatsApp"
                      className="group flex items-center gap-3 border border-border bg-surface p-5 transition hover:border-foreground/40"
                    >
                      <MessageCircle
                        className="h-5 w-5 text-text-mute group-hover:text-accent"
                        aria-hidden
                      />
                      <span className="text-sm text-foreground">WhatsApp</span>
                    </a>
                    <a
                      href={SITE.signal}
                      aria-label="Contact Guardion on Signal"
                      className="group flex items-center gap-3 border border-border bg-surface p-5 transition hover:border-foreground/40"
                    >
                      <MessageCircle
                        className="h-5 w-5 text-text-mute group-hover:text-accent"
                        aria-hidden
                      />
                      <span className="text-sm text-foreground">Signal</span>
                    </a>
                  </div>
                </div>

                <div className="mt-10 border-t border-border pt-8">
                  <span className="eyebrow">What to expect</span>
                  <ul className="mt-6 space-y-4 text-sm leading-relaxed text-text-mute">
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden />
                      <span>
                        A direct conversation with a principal — no sales team, no call centre.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden />
                      <span>Honest scoping: we recommend only what the situation requires.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden />
                      <span>Strict confidentiality from the first message onward.</span>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="grain vignette ambient-red relative overflow-hidden border-b border-border">
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      {/* Brand lion — desktop */}
      <LionWatermark
        className="right-[-6%] top-[-8%] z-[1] hidden h-[128%] w-[560px] md:block"
        opacity={0.06}
      />
      {/* Brand lion — mobile */}
      <LionWatermark
        className="right-[-24%] top-[4%] z-[1] block h-[72%] w-[300px] md:hidden"
        opacity={0.07}
      />
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 pb-20 pt-40 md:pb-28 md:pt-48">
        <span className="eyebrow">Contact</span>
        <h1 className="mt-6 max-w-[22ch] font-serif text-[40px] leading-[1.03] tracking-tight text-foreground sm:text-5xl md:text-[64px]">
          Request a confidential consultation.
        </h1>
        <p className="mt-8 max-w-[60ch] text-base leading-relaxed text-text-mute md:text-lg">
          Speak with a principal of the firm directly. Whether you are assessing a risk, planning
          travel, or responding to an immediate concern, we will listen first, then advise.
        </p>
      </div>
    </section>
  );
}
