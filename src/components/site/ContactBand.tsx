import Link from "next/link";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";
import { SITE } from "@/lib/site";

export function ContactBand() {
  return (
    <section className="grain vignette relative overflow-hidden border-t border-border bg-surface">
      <Reveal className="relative z-10 mx-auto max-w-[1280px] px-6 py-24 md:py-32">
        <div className="grid gap-16 md:grid-cols-[1.2fr_1fr] md:items-end">
          <div>
            <span className="eyebrow mb-6">Speak with us</span>
            <h2 className="mt-6 max-w-[16ch] font-serif text-4xl leading-[1.05] text-foreground md:text-5xl">
              A quiet conversation. Nothing on the record.
            </h2>
            <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-text-mute">
              Every enquiry is handled by a principal of the firm. Share as much
              or as little as you wish — we will listen first, then advise.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center border border-accent bg-accent px-6 text-sm font-medium text-white transition hover:bg-[#a91f26]"
              >
                Confidential Consultation
              </Link>
              <a
                href={SITE.phoneHref}
                className="inline-flex h-12 items-center gap-2 border border-border px-6 text-sm text-foreground transition hover:border-foreground/40"
              >
                <Phone className="h-4 w-4 text-accent" aria-hidden />
                <span className="tabular-nums">{SITE.phone}</span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-text-mute">24hr</span>
              </a>
            </div>
          </div>

          <div className="border-t border-border pt-10 md:border-l md:border-t-0 md:pl-12 md:pt-0">
            <span className="eyebrow mb-6">Direct channels</span>
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="group inline-flex items-center gap-3 text-foreground/90 transition hover:text-foreground"
                >
                  <Mail className="h-4 w-4 text-text-mute group-hover:text-accent" aria-hidden />
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE.whatsapp}
                  className="group inline-flex items-center gap-3 text-foreground/90 transition hover:text-foreground"
                  aria-label="Contact Guardion on WhatsApp"
                >
                  <MessageCircle className="h-4 w-4 text-text-mute group-hover:text-accent" aria-hidden />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={SITE.signal}
                  className="group inline-flex items-center gap-3 text-foreground/90 transition hover:text-foreground"
                  aria-label="Contact Guardion on Signal"
                >
                  <MessageCircle className="h-4 w-4 text-text-mute group-hover:text-accent" aria-hidden />
                  Signal
                </a>
              </li>
            </ul>
            <p className="mt-8 text-xs leading-relaxed text-text-mute">
              Communications are handled discreetly. We do not disclose client
              identities, itineraries or engagements — before, during or after
              an assignment.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
