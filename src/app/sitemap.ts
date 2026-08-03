import type { MetadataRoute } from "next";
import { SITE, SERVICES } from "@/lib/site";
import { getAllPosts } from "@/lib/blog";
import { ZH_READY, localePath, htmlLang, isTranslated } from "@/lib/i18n";

type Opts = {
  lastModified?: Date;
  changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority?: number;
};

// Emit one <url> entry per available language version of a path, each carrying
// the same reciprocal hreflang set (Google's recommended sitemap format for
// multilingual sites). Untranslated paths (blog articles) get a single English
// entry with no alternates. Everything is English-only until ZH_READY is true.
function entriesFor(path: string, opts: Opts = {}): MetadataRoute.Sitemap {
  const enUrl = `${SITE.url}${localePath("en", path)}`;
  const base = {
    lastModified: opts.lastModified ?? new Date(),
    changeFrequency: opts.changeFrequency,
    priority: opts.priority,
  };

  if (!ZH_READY || !isTranslated(path)) {
    return [{ url: enUrl, ...base }];
  }

  const zhUrl = `${SITE.url}${localePath("zh-Hans", path)}`;
  const languages = {
    [htmlLang.en]: enUrl,
    [htmlLang["zh-Hans"]]: zhUrl,
  };
  return [
    { url: enUrl, ...base, alternates: { languages } },
    { url: zhUrl, ...base, alternates: { languages } },
  ];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPaths: [string, Opts][] = [
    ["/", { lastModified: now, changeFrequency: "weekly", priority: 1.0 }],
    ["/services", { lastModified: now, changeFrequency: "monthly", priority: 0.9 }],
    ["/global-reach", { lastModified: now, changeFrequency: "monthly", priority: 0.7 }],
    ["/about", { lastModified: now, changeFrequency: "monthly", priority: 0.7 }],
    ["/our-work", { lastModified: now, changeFrequency: "monthly", priority: 0.7 }],
    ["/blog", { lastModified: now, changeFrequency: "weekly", priority: 0.7 }],
    ["/contact", { lastModified: now, changeFrequency: "monthly", priority: 0.8 }],
  ];

  const staticEntries = staticPaths.flatMap(([path, opts]) => entriesFor(path, opts));

  const serviceEntries = SERVICES.flatMap((s) =>
    entriesFor(`/services/${s.slug}`, { lastModified: now, changeFrequency: "monthly", priority: 0.8 })
  );

  const blogEntries = getAllPosts().flatMap((p) =>
    entriesFor(`/blog/${p.slug}`, { lastModified: new Date(p.date), changeFrequency: "monthly", priority: 0.6 })
  );

  return [...staticEntries, ...serviceEntries, ...blogEntries];
}
