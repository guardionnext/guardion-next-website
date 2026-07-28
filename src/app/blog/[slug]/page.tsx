import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ContactBand } from "@/components/site/ContactBand";
import { getPostBySlug, getAllPosts, formatPostDate } from "@/lib/blog";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article not found | Guardion",
      robots: { index: false, follow: false },
    };
  }

  const url = `/blog/${slug}`;
  return {
    title: `${post.title} | Guardion`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url,
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const url = `/blog/${slug}`;
  const others = getAllPosts().filter((p) => p.slug !== post.slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: "Guardion" },
    mainEntityOfPage: url,
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="main">
        {/* Article header */}
        <section className="grain relative overflow-hidden border-b border-border bg-background">
          <div className="relative z-10 mx-auto max-w-[780px] px-6 pb-16 pt-40 md:pt-48">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-text-mute transition hover:text-foreground"
            >
              <ArrowLeft className="h-3 w-3" aria-hidden /> Field notes
            </Link>
            <h1 className="mt-8 font-serif text-[36px] leading-[1.08] tracking-tight text-foreground md:text-[52px]">
              {post.title}
            </h1>
            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] uppercase tracking-[0.22em] text-text-mute">
              <span>{post.author}</span>
              <span aria-hidden className="h-px w-6 bg-border" />
              <time dateTime={post.date}>{formatPostDate(post.date)}</time>
              <span aria-hidden className="h-px w-6 bg-border" />
              <span>{post.readingMinutes} min read</span>
            </div>
          </div>
        </section>

        {/* Article body */}
        <section className="bg-background">
          <div className="mx-auto max-w-[68ch] px-6 py-20 md:py-28">
            <article className="post-prose">{post.body}</article>
          </div>
        </section>

        {/* Related */}
        {others.length > 0 && (
          <section className="border-t border-border bg-surface">
            <div className="mx-auto max-w-[1280px] px-6 py-20 md:py-24">
              <span className="eyebrow mb-6">Continue reading</span>
              <ul className="mt-8 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
                {others.map((p) => (
                  <li key={p.slug} className="bg-surface">
                    <Link
                      href={`/blog/${p.slug}`}
                      className="group flex h-full flex-col p-8 md:p-10"
                    >
                      <div className="text-[10px] uppercase tracking-[0.22em] text-text-mute">
                        {formatPostDate(p.date)} · {p.readingMinutes} min
                      </div>
                      <h3 className="mt-4 font-serif text-xl leading-[1.15] text-foreground md:text-2xl">
                        {p.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-text-mute">
                        {p.excerpt}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <ContactBand />
      </main>
      <Footer />
    </div>
  );
}
