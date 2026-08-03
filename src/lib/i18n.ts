// Internationalisation core for the Guardion site.
//
// URL strategy (SEO): English stays at its existing bare URLs (/about,
// /services/…) with no prefix, so nothing that is already indexed changes.
// Simplified Chinese lives under the /zh subdirectory (/zh/about, …).
//
// This is a manual subdirectory mirror — no middleware, no extra dependency.
// Shared components take an optional `locale` (default "en"), so English pages
// keep working untouched and only the /zh tree opts into Chinese.

export const locales = ["en", "zh-Hans"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/**
 * Launch switch for the Simplified Chinese site.
 *
 * While `false` (translations still being written): the English site is left
 * completely unchanged — no language switcher, no hreflang, sitemap stays
 * English-only — and every /zh page is served `noindex` so Google never sees
 * the [ZH] placeholder copy. The /zh routes still render, so they can be
 * previewed by visiting the URL directly.
 *
 * Flip to `true` once the zh-Hans copy is filled in: the switcher appears,
 * reciprocal hreflang is emitted, /zh enters the sitemap, and /zh becomes
 * indexable — all at once. "Nothing goes live half-translated."
 */
export const ZH_READY = true;

/** URL path segment for each locale. English is unprefixed. */
export const localePrefix: Record<Locale, string> = {
  en: "",
  "zh-Hans": "/zh",
};

/** Value for the <html lang> attribute and hreflang codes. */
export const htmlLang: Record<Locale, string> = {
  en: "en-AU",
  "zh-Hans": "zh-Hans",
};

/** Human label for the language switcher. */
export const localeLabel: Record<Locale, string> = {
  en: "EN",
  "zh-Hans": "中文",
};

/**
 * Sections whose *sub-paths* exist in English only. The blog index (/blog) is
 * translated (/zh/blog), but individual articles (/blog/<slug>) are not — the
 * long-form posts stay English. Links to an untranslated path from the /zh tree
 * resolve to the English URL, the switcher hides on it, and it gets no
 * hreflang / sitemap alternate.
 */
export const untranslatedPrefixes = ["/blog"];

/** True if `path` has (or will have) a Chinese counterpart under /zh. */
export function isTranslated(path: string): boolean {
  // Match sub-paths only (e.g. "/blog/foo"), never the prefix itself ("/blog").
  return !untranslatedPrefixes.some((p) => path.startsWith(`${p}/`));
}

/**
 * Prefix an app-relative path for a locale.
 * localePath("zh-Hans", "/about") -> "/zh/about"
 * localePath("zh-Hans", "/")      -> "/zh"
 * localePath("en", "/about")      -> "/about"
 * localePath("zh-Hans", "/blog")  -> "/blog"   (untranslated → English)
 */
export function localePath(locale: Locale, path: string): string {
  if (locale !== "en" && !isTranslated(path)) {
    return localePath("en", path);
  }
  const clean = path === "/" ? "" : path;
  const prefixed = `${localePrefix[locale]}${clean}`;
  return prefixed === "" ? "/" : prefixed;
}

/** Strip any locale prefix from a full pathname, returning the base path. */
export function stripLocale(pathname: string): { locale: Locale; path: string } {
  if (pathname === "/zh" || pathname.startsWith("/zh/")) {
    const path = pathname.slice(3) || "/";
    return { locale: "zh-Hans", path };
  }
  return { locale: "en", path: pathname || "/" };
}

/**
 * Reciprocal hreflang map for a base (English) path, for use in Next.js
 * `metadata.alternates.languages`. Every localized page — English and Chinese
 * alike — should emit the same map so the alternates are reciprocal, plus an
 * x-default pointing at the English URL.
 *
 * languageAlternates("/about") ->
 *   { "en-AU": "/about", "zh-Hans": "/zh/about", "x-default": "/about" }
 */
export function languageAlternates(path: string): Record<string, string> | undefined {
  // Until the Chinese copy is live, don't advertise it as an alternate — an
  // hreflang pointing at noindex placeholder pages is a bad SEO signal. Also
  // skip English-only sections (e.g. the blog), which have no /zh counterpart.
  if (!ZH_READY || !isTranslated(path)) return undefined;
  return {
    [htmlLang.en]: localePath("en", path),
    [htmlLang["zh-Hans"]]: localePath("zh-Hans", path),
    "x-default": localePath("en", path),
  };
}

/**
 * Convenience builder for a page's `metadata.alternates`: canonical for the
 * given locale plus the reciprocal language map.
 */
export function alternatesFor(locale: Locale, path: string) {
  return {
    canonical: localePath(locale, path),
    languages: languageAlternates(path),
  };
}
