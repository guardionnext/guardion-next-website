// Blog *index* page copy (the listing at /blog and /zh/blog). The individual
// articles are English-only and are not translated; the post titles/excerpts on
// the listing therefore stay in English (they link to English articles).

import type { Metadata } from "next";
import { type Locale, localePath, alternatesFor } from "@/lib/i18n";

export type BlogIndexContent = {
  eyebrow: string;
  h1: string;
  intro: string;
  /** Shown under the intro when non-empty (zh: notes that articles are in English). */
  articlesNote: string;
  /** Rendered as `{minutes} {minRead}`. */
  minRead: string;
  readThePiece: string;
};

const en: BlogIndexContent = {
  eyebrow: "Field notes",
  h1: "Considered writing on protection and intelligence.",
  intro:
    "Occasional, practical pieces from the principals of Guardion — written for the people who make decisions about protection and private enquiries, and for the professionals who advise them.",
  articlesNote: "",
  minRead: "min read",
  readThePiece: "Read the piece",
};

const zhHans: BlogIndexContent = {
  eyebrow: "手记",
  h1: "关于保护与情报的深思之作。",
  intro:
    "Guardion 负责人不定期撰写的务实文章——写给那些就保护与私人调查作决策的人，以及为他们提供建议的专业人士。",
  articlesNote: "文章以英文发表。",
  minRead: "分钟阅读",
  readThePiece: "阅读全文",
};

export function getBlogIndexContent(locale: Locale): BlogIndexContent {
  return locale === "en" ? en : zhHans;
}

const enMeta = {
  title: "Field Notes — Protection & Investigations Blog | Guardion",
  description:
    "Considered, practical writing on close protection, executive security and lawful private investigations, from the principals of Guardion.",
  ogTitle: "Field Notes — The Guardion Blog",
  ogDescription:
    "Practical, plain-language writing on protection and investigations from the principals of Guardion.",
};

const zhMeta = {
  title: "手记 — 保护与调查博客 | Guardion",
  description:
    "由 Guardion 负责人撰写、关于贴身护卫、高管安保与合法私人调查的深思而务实的文章。",
  ogTitle: "手记 — Guardion 博客",
  ogDescription:
    "Guardion 负责人以平实语言撰写的、关于保护与调查的务实文章。",
};

export function buildBlogIndexMetadata(locale: Locale): Metadata {
  const m = locale === "en" ? enMeta : zhMeta;
  return {
    title: m.title,
    description: m.description,
    alternates: alternatesFor(locale, "/blog"),
    openGraph: {
      title: m.ogTitle,
      description: m.ogDescription,
      url: localePath(locale, "/blog"),
      siteName: "Guardion",
      type: "website",
    },
  };
}
