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
  name: "Guardion",
  description:
    "Specialist close protection and private investigations. Licensed in Australia; operating worldwide through vetted partners.",
  telephone: "+61 401 207 060",
  email: "info@guardion.com.au",
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
    <html lang="en" className={`${newsreader.variable} ${inter.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </body>
    </html>
  );
}
