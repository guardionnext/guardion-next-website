import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Phone, Mail } from "lucide-react";
import { Logo } from "./Logo";
import { SITE, SERVICES } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1280px] px-6 py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo variant="white" />
            <p className="mt-6 max-w-[32ch] text-sm leading-relaxed text-text-mute">
              {SITE.tagline}. An Australian firm providing close protection and
              private investigations for individuals and organisations, at home
              and abroad.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a
                href={SITE.social.facebook}
                aria-label="Guardion on Facebook"
                className="inline-flex h-9 w-9 items-center justify-center border border-border text-text-mute transition hover:border-foreground/40 hover:text-foreground"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={SITE.social.instagram}
                aria-label="Guardion on Instagram"
                className="inline-flex h-9 w-9 items-center justify-center border border-border text-text-mute transition hover:border-foreground/40 hover:text-foreground"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={SITE.social.linkedin}
                aria-label="Guardion on LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center border border-border text-text-mute transition hover:border-foreground/40 hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
            <Image
              src="/aus_veteran_owned_business.webp"
              alt="Australian Veteran Owned Business"
              width={1450}
              height={1536}
              className="mt-10 h-20 w-auto"
            />
          </div>

          <div className="md:col-span-2">
            <span className="eyebrow mb-6">Services</span>
            <ul className="mt-6 space-y-3 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-text-mute transition hover:text-foreground"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <span className="eyebrow mb-6">Firm</span>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                ["/about", "About"],
                ["/global-reach", "Global Reach"],
                ["/our-work", "Our Work"],
                ["/blog", "Blog"],
                ["/contact", "Contact"],
                ["/privacy", "Privacy"],
                ["/terms", "Terms"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-text-mute transition hover:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <span className="eyebrow mb-6">Contact</span>
            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center gap-2 text-foreground transition hover:text-foreground"
                >
                  <Phone className="h-3.5 w-3.5 text-accent" aria-hidden />
                  <span className="tabular-nums">{SITE.phone}</span>
                </a>
                <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-text-mute">
                  24 hour response
                </div>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-2 text-text-mute transition hover:text-foreground"
                >
                  <Mail className="h-3.5 w-3.5" aria-hidden />
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Credentials strip */}
        <div className="mt-16 border-t border-border pt-8">
          <span className="eyebrow">Licensing</span>
          <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-5">
            {SITE.licences.map((l) => (
              <div key={l.state} className="border-l border-border pl-3">
                <div className="text-[10px] uppercase tracking-[0.22em] text-text-mute">
                  {l.state}
                </div>
                <div className="mt-1 font-mono text-xs text-foreground/80">
                  {l.number}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-8 text-xs text-text-mute md:flex-row md:items-center">
          <div className="space-y-1">
            <p>
              © {new Date().getFullYear()} {SITE.legalName}. All rights
              reserved.
            </p>
            <p>
              Trading as Guardion · ABN{" "}
              <span className="tabular-nums">{SITE.abn}</span>
            </p>
          </div>
          <p className="max-w-[52ch] md:text-right">
            Guardion operates in accordance with Australian security industry
            law. International engagements are coordinated through vetted local
            partners, within local jurisdiction.
          </p>
        </div>
      </div>
    </footer>
  );
}
