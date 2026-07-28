import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export default function PostNotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main id="main" className="mx-auto max-w-[720px] px-6 pb-24 pt-40 text-center">
        <span className="eyebrow">Field notes</span>
        <h1 className="mt-6 font-serif text-4xl text-foreground">Article not found.</h1>
        <p className="mt-4 text-text-mute">
          That piece may have been moved or retired.
        </p>
        <Link
          href="/blog"
          className="mt-8 inline-flex items-center gap-2 text-sm text-accent"
        >
          <ArrowLeft className="h-4 w-4" /> Back to all articles
        </Link>
      </main>
      <Footer />
    </div>
  );
}
