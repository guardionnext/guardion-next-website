import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ContactBand } from "@/components/site/ContactBand";
import { SERVICES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services — Close Protection & Investigations | Guardion",
  description:
    "Close protection, executive protection, residential security, security driving, investigations and tailored programs. Australian-licensed, coordinated worldwide.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Guardion Services — Protection & Intelligence",
    description:
      "A single firm for protection and lawful investigations. Explore Guardion's six service capabilities.",
    url: "/services",
    siteName: "Guardion",
    type: "website",
  },
};

export default function ServicesIndex() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main id="main">
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-[1280px] px-6 pb-20 pt-40 md:pb-28 md:pt-48">
            <span className="eyebrow mb-6">Services</span>
            <h1 className="mt-6 max-w-[22ch] font-serif text-[40px] leading-[1.03] tracking-tight text-foreground sm:text-5xl md:text-[64px]">
              Protection and intelligence, offered as one.
            </h1>
            <p className="mt-8 max-w-[64ch] text-base leading-relaxed text-text-mute md:text-lg">
              Guardion's capabilities are deliberately narrow. We do not sell
              technology, uniforms or manned guarding at scale. We provide
              principal-focused protection and lawful private investigations —
              two disciplines that most firms treat separately, delivered here
              under a single standard and a single point of accountability.
            </p>
            <p className="mt-6 max-w-[64ch] text-base leading-relaxed text-text-mute md:text-lg">
              Each capability below can be engaged on its own or combined into
              a coordinated program. Where a threat is identified through an
              investigation, the same firm can stand up the protective response
              — end to end, without handoffs.
            </p>
          </div>
        </section>

        <section className="bg-background">
          <div className="mx-auto max-w-[1280px] px-6 py-24 md:py-32">
            <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s, i) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group flex flex-col justify-between bg-surface p-8 transition duration-300 hover:bg-surface-2 md:p-10"
                >
                  <div>
                    <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-text-mute">
                      <span className="tabular-nums">0{i + 1}</span>
                      <span className="h-px w-8 bg-border" />
                    </div>
                    <h2 className="mt-6 font-serif text-2xl text-foreground">{s.title}</h2>
                    <p className="mt-4 max-w-[36ch] text-sm leading-relaxed text-text-mute">
                      {s.summary}
                    </p>
                  </div>
                  <div className="mt-10 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.18em] text-text-mute transition group-hover:text-foreground">
                      Read more
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-text-mute transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ContactBand />
      </main>
      <Footer />
    </div>
  );
}
