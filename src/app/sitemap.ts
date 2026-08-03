import type { MetadataRoute } from "next";
import { SITE, SERVICES } from "@/lib/site";
import { getAllPosts } from "@/lib/blog";
import { ZH_READY, localePath, htmlLang, isTranslated } from "@/lib/i18n";

// One entry per base (English) path. Once ZH_READY is true, each entry also
// advertises its Simplified Chinese counterpart via alternates.languages, which
// is Google's recommended way to declare hreflang from a sitemap. Until then the
// sitemap is exactly what it was — English only, no alternates.
function entry(
  path: string,
  opts: {
    lastModified?: Date;
    changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority?: number;
  } = {}
): MetadataRoute.Sitemap[number] {
  const base: MetadataRoute.Sitemap[number] = {
    url: `${SITE.url}${localePath("en", path)}`,
    lastModified: opts.lastModified ?? new Date(),
    changeFrequency: opts.changeFrequency,
    priority: opts.priority,
  };
  if (ZH_READY && isTranslated(path)) {
    base.alternates = {
      languages: {
        [htmlLang.en]: `${SITE.url}${localePath("en", path)}`,
        [htmlLang["zh-Hans"]]: `${SITE.url}${localePath("zh-Hans", path)}`,
      },
    };
  }
  return base;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = [
    entry("/", { lastModified: now, changeFrequency: "weekly", priority: 1.0 }),
    entry("/services", { lastModified: now, changeFrequency: "monthly", priority: 0.9 }),
    entry("/global-reach", { lastModified: now, changeFrequency: "monthly", priority: 0.7 }),
    entry("/about", { lastModified: now, changeFrequency: "monthly", priority: 0.7 }),
    entry("/our-work", { lastModified: now, changeFrequency: "monthly", priority: 0.7 }),
    entry("/blog", { lastModified: now, changeFrequency: "weekly", priority: 0.7 }),
    entry("/contact", { lastModified: now, changeFrequency: "monthly", priority: 0.8 }),
  ];

  const serviceEntries: MetadataRoute.Sitemap = SERVICES.map((s) =>
    entry(`/services/${s.slug}`, { lastModified: now, changeFrequency: "monthly", priority: 0.8 })
  );

  const blogEntries: MetadataRoute.Sitemap = getAllPosts().map((p) =>
    entry(`/blog/${p.slug}`, { lastModified: new Date(p.date), changeFrequency: "monthly", priority: 0.6 })
  );

  return [...staticEntries, ...serviceEntries, ...blogEntries];
}
