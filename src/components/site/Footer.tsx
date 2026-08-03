import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Phone, Mail } from "lucide-react";
import { Logo } from "./Logo";
import { SITE } from "@/lib/site";
import { localePath, type Locale } from "@/lib/i18n";
import { getUI, getServices } from "@/lib/content/ui";

export function Footer({ locale = "en" }: { locale?: Locale }) {
  const t = getUI(locale);
  const services = getServices(locale);
  const lp = (path: string) => localePath(locale, path);

  const firmLinks: [string, string][] = [
    ["/about", t.footer.links.about],
    ["/global-reach", t.footer.links.globalReach],
    ["/our-work", t.footer.links.ourWork],
    ["/blog", t.footer.links.blog],
    ["/contact", t.footer.links.contact],
    ["/privacy", t.footer.links.privacy],
    ["/terms", t.footer.links.terms],
  ];

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1280px] px-6 py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo variant="white" locale={locale} />
            <p className="mt-6 max-w-[32ch] text-sm leading-relaxed text-text-mute">
              {t.footer.tagline}. {t.footer.blurb}
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
              alt={t.footer.veteranAlt}
              width={1450}
              height={1536}
              sizes="80px"
              className="mt-10 h-20 w-auto"
            />
          </div>

          <div className="md:col-span-2">
            <span className="eyebrow mb-6">{t.footer.servicesHeading}</span>
            <ul className="mt-6 space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={lp(`/services/${s.slug}`)}
                    className="text-text-mute transition hover:text-foreground"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <span className="eyebrow mb-6">{t.footer.firmHeading}</span>
            <ul className="mt-6 space-y-3 text-sm">
              {firmLinks.map(([href, label]) => (
                <li key={href}>
                  <Link
                    href={lp(href)}
                    className="text-text-mute transition hover:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <span className="eyebrow mb-6">{t.footer.contactHeading}</span>
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
                  {t.footer.response24}
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
          <span className="eyebrow">{t.footer.licensingHeading}</span>
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
              © {new Date().getFullYear()} {SITE.legalName}. {t.footer.rights}
            </p>
            <p>
              {t.footer.tradingAs}{" "}
              <span className="tabular-nums">{SITE.abn}</span>
            </p>
          </div>
          <p className="max-w-[52ch] md:text-right">
            {t.footer.legalNote}
          </p>
        </div>
      </div>
    </footer>
  );
}
