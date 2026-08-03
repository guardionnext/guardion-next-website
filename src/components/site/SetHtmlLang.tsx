"use client";

import { useEffect } from "react";

/**
 * Sets <html lang> for the /zh subtree.
 *
 * The App Router has a single root layout that owns <html lang="en-AU">, and a
 * nested layout can't re-render <html> at SSR without middleware or route-group
 * root layouts. This updates document.documentElement.lang on the client so the
 * document language is correct for /zh pages. The root <html> has
 * suppressHydrationWarning, so this causes no hydration mismatch. SSR crawlers
 * still get the stronger language signals: hreflang, og:locale and JSON-LD
 * inLanguage, plus lang="zh-Hans" on the content wrapper.
 */
export function SetHtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    const previous = document.documentElement.lang;
    document.documentElement.lang = lang;
    return () => {
      document.documentElement.lang = previous;
    };
  }, [lang]);
  return null;
}
