import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ContactBand } from "@/components/site/ContactBand";
import { Reveal } from "@/components/site/Reveal";
import { HeroBackdrop } from "@/components/site/HeroBackdrop";
import { getAllPosts, formatPostDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Field Notes — Protection & Investigations Blog | Guardion",
  description:
    "Considered, practical writing on close protection, executive security and lawful private investigations, from the principals of Guardion.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Field Notes — The Guardion Blog",
    description:
      "Practical, plain-language writing on protection and investigations from the principals of Guardion.",
    url: "/blog",
    siteName: "Guardion",
    type: "website",
  },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Guardion — Field Notes",
    url: "/blog",
    description:
      "Practical writing on close protection, executive security and lawful private investigations.",
    publisher: { "@type": "Organization", name: "Guardion" },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.description,
      datePublished: p.date,
      url: `/blog/${p.slug}`,
      author: { "@type": "Organization", name: p.author },
    })),
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="main">
        <section className="grain vignette relative overflow-hidden">
          <HeroBackdrop overlay="strong" />
          <div className="relative z-10 mx-auto max-w-[1280px] px-6 pb-20 pt-40 md:pb-28 md:pt-48">
            <span className="eyebrow mb-6">Field notes</span>
            <h1 className="max-w-[24ch] font-serif text-[40px] leading-[1.03] tracking-tight text-foreground sm:text-5xl md:text-[64px]">
              Considered writing on protection and intelligence.
            </h1>
            <p className="mt-8 max-w-[62ch] text-base leading-relaxed text-text-mute md:text-lg">
              Occasional, practical pieces from the principals of Guardion —
              written for the people who make decisions about protection and
              private enquiries, and for the professionals who advise them.
            </p>
          </div>
        </section>

        <section className="border-t border-border bg-background">
          <Reveal className="mx-auto max-w-[1280px] px-6 py-20 md:py-28">
            <ul className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
              {posts.map((p) => (
                <li key={p.slug} className="bg-surface">
                  <Link
                    href={`/blog/${p.slug}`}
                    className="group flex h-full flex-col p-8 md:p-10"
                  >
                    <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-text-mute">
                      <time dateTime={p.date}>{formatPostDate(p.date)}</time>
                      <span aria-hidden className="h-px w-6 bg-border" />
                      <span>{p.readingMinutes} min read</span>
                    </div>
                    <h2 className="mt-6 font-serif text-2xl leading-[1.15] text-foreground transition group-hover:text-foreground md:text-[28px]">
                      {p.title}
                    </h2>
                    <p className="mt-4 max-w-[54ch] text-sm leading-relaxed text-text-mute md:text-[15px]">
                      {p.excerpt}
                    </p>
                    <span className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-accent">
                      Read the piece
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        <ContactBand />
      </main>
      <Footer />
    </div>
  );
}
