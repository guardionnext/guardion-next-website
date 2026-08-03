"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";
import { SITE } from "@/lib/site";
import {
  localePath,
  localeLabel,
  stripLocale,
  isTranslated,
  ZH_READY,
  type Locale,
} from "@/lib/i18n";
import { getUI, getServices } from "@/lib/content/ui";

export function Header({ locale = "en" }: { locale?: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const t = getUI(locale);
  const services = getServices(locale);
  const lp = (path: string) => localePath(locale, path);

  const nav = [
    { to: "/global-reach", label: t.nav.globalReach },
    { to: "/about", label: t.nav.about },
    { to: "/our-work", label: t.nav.ourWork },
    { to: "/blog", label: t.nav.blog },
    { to: "/contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-gradient-to-b from-black/50 to-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1280px] items-center justify-between gap-6 px-6 transition-all duration-300 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        <Logo
          priority
          locale={locale}
          imgClassName={`w-auto shrink-0 transition-all duration-300 ${
            scrolled ? "h-10" : "h-12"
          }`}
        />

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="inline-flex items-center gap-1 text-sm text-foreground/85 transition hover:text-foreground"
              aria-expanded={servicesOpen}
              aria-haspopup="menu"
            >
              {t.header.services}
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {servicesOpen && (
              <div
                role="menu"
                className="absolute left-1/2 top-full w-[420px] -translate-x-1/2 pt-3"
              >
                <div className="grid grid-cols-1 gap-1 border border-border bg-surface p-3 shadow-2xl">
                  <Link
                    href={lp("/services")}
                    className="flex items-center justify-between border-b border-border px-3 py-2 text-sm text-foreground/85 hover:text-foreground"
                  >
                    <span className="eyebrow">{t.header.overview}</span>
                    <span className="text-xs text-text-mute">{t.header.allServicesArrow} →</span>
                  </Link>
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={lp(`/services/${s.slug}`)}
                      className="group flex items-start gap-3 px-3 py-2.5 transition hover:bg-surface-2"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden />
                      <span className="min-w-0">
                        <span className="block text-sm text-foreground">{s.title}</span>
                        <span className="block truncate text-xs text-text-mute">{s.summary}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          {nav.map((n) => (
            <Link
              key={n.to}
              href={lp(n.to)}
              className="text-sm text-foreground/85 transition hover:text-foreground"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher current={locale} />
          <a
            href={SITE.phoneHref}
            className="group inline-flex items-center gap-2 text-sm text-foreground/85 transition hover:text-foreground"
          >
            <Phone className="h-3.5 w-3.5 text-accent" aria-hidden />
            <span className="tabular-nums">{SITE.phone}</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-text-mute">{t.header.hr24}</span>
          </a>
          <Link
            href={lp("/contact")}
            className="inline-flex h-10 items-center border border-accent bg-accent px-5 text-sm font-medium text-white transition hover:bg-[#a91f26]"
          >
            {t.header.consultation}
          </Link>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center border border-border text-foreground lg:hidden"
          aria-label={t.header.openMenu}
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>

      {/* Mobile overlay — a sibling of <header>, not a child, so the header's
          backdrop-filter can't trap this fixed overlay inside its containing
          block (which clipped the menu once the page had been scrolled). */}
      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-background lg:hidden">
          <div className="flex h-20 items-center justify-between border-b border-border px-6">
            <Logo locale={locale} />
            <button
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center border border-border"
              aria-label={t.header.closeMenu}
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-6 py-8">
            <div className="mb-6">
              <div className="eyebrow mb-4">{t.header.services}</div>
              <div className="flex flex-col divide-y divide-border border-y border-border">
                <Link
                  href={lp("/services")}
                  onClick={() => setOpen(false)}
                  className="py-3 text-base text-foreground"
                >
                  {t.header.allServices}
                </Link>
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={lp(`/services/${s.slug}`)}
                    onClick={() => setOpen(false)}
                    className="py-3 text-base text-foreground"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col divide-y divide-border border-y border-border">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  href={lp(n.to)}
                  onClick={() => setOpen(false)}
                  className="py-4 font-serif text-xl text-foreground"
                >
                  {n.label}
                </Link>
              ))}
            </div>
            <Link
              href={lp("/contact")}
              onClick={() => setOpen(false)}
              className="mt-8 inline-flex w-full items-center justify-center border border-accent bg-accent px-5 py-3 text-sm font-medium text-white"
            >
              {t.header.consultation}
            </Link>
            <div className="mt-8">
              <LanguageSwitcher current={locale} onNavigate={() => setOpen(false)} />
            </div>
          </nav>
          <a
            href={SITE.phoneHref}
            className="flex items-center justify-center gap-3 border-t border-border bg-surface py-5 text-base text-foreground"
          >
            <Phone className="h-4 w-4 text-accent" aria-hidden />
            <span className="tabular-nums">{SITE.phone}</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-text-mute">{t.header.hr24}</span>
          </a>
        </div>
      )}
    </>
  );
}

/**
 * EN / 中文 switcher. Hidden until ZH_READY so the live English site is
 * unchanged while translations are still being written. Links to the same page
 * in the other locale by rewriting the current pathname's locale prefix.
 */
function LanguageSwitcher({
  current,
  onNavigate,
}: {
  current: Locale;
  onNavigate?: () => void;
}) {
  const pathname = usePathname() || "/";
  if (!ZH_READY) return null;

  const { path } = stripLocale(pathname);
  // No switcher on English-only sections (e.g. the blog) — there's no zh page.
  if (!isTranslated(path)) return null;
  const options: Locale[] = ["en", "zh-Hans"];

  return (
    <div className="inline-flex items-center gap-1 text-xs" aria-label="Language">
      {options.map((loc, i) => (
        <span key={loc} className="inline-flex items-center">
          {i > 0 && <span className="mx-1 text-border" aria-hidden>·</span>}
          {loc === current ? (
            <span className="font-medium text-foreground" aria-current="true">
              {localeLabel[loc]}
            </span>
          ) : (
            <Link
              href={localePath(loc, path)}
              hrefLang={loc === "en" ? "en-AU" : "zh-Hans"}
              onClick={onNavigate}
              className="text-text-mute transition hover:text-foreground"
            >
              {localeLabel[loc]}
            </Link>
          )}
        </span>
      ))}
    </div>
  );
}
