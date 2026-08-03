import type { Metadata } from "next";
import { ServicePage, buildServiceJsonLd } from "@/components/site/ServicePage";
import { getServiceContent, buildServiceMetadata } from "@/lib/content/services";

const slug = "security-driving";
const locale = "zh-Hans" as const;

export const metadata: Metadata = buildServiceMetadata(slug, locale);

export default function Page() {
  const content = getServiceContent(slug, locale);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildServiceJsonLd(content, locale)) }}
      />
      <ServicePage content={content} locale={locale} />
    </>
  );
}
