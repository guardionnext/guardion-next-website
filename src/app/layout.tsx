import type { Metadata, Viewport } from "next";
import { Inter, Newsreader } from "next/font/google";
import { SITE } from "@/lib/site";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal"],
  variable: "--font-newsreader",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Guardion — Specialist Protection & Investigations",
    template: "%s",
  },
  description:
    "Guardion is an Australian close-protection and private-investigations firm. Discreet, licensed and coordinated worldwide — Protection & Intelligence, end to end.",
  authors: [{ name: "Guardion" }],
  openGraph: {
    siteName: "Guardion",
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0E1013",
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE.url}/#business`,
  name: "Guardion",
  legalName: SITE.legalName,
  description:
    "Specialist close protection and private investigations. Licensed in Australia; operating worldwide through vetted partners.",
  url: SITE.url,
  logo: `${SITE.url}/logo.webp`,
  image: `${SITE.url}/logo.webp`,
  telephone: SITE.phone,
  email: SITE.email,
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    addressCountry: "AU",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Queensland" },
    { "@type": "AdministrativeArea", name: "New South Wales" },
    { "@type": "AdministrativeArea", name: "Australian Capital Territory" },
    { "@type": "AdministrativeArea", name: "Victoria" },
    { "@type": "AdministrativeArea", name: "South Australia" },
    { "@type": "Place", name: "International — coordinated through vetted partners" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-AU"
      className={`${newsreader.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body>
        {/* Mark JS as available before paint so scroll-reveal hidden states
            only apply when they can actually be undone (no-JS shows content). */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js');",
          }}
        />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </body>
    </html>
  );
}
