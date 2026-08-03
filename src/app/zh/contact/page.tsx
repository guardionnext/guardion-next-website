import type { Metadata } from "next";
import { ContactPage } from "@/components/site/ContactPage";
import { buildContactMetadata } from "@/lib/content/contact";

export const metadata: Metadata = buildContactMetadata("zh-Hans");

export default function Page() {
  return <ContactPage locale="zh-Hans" />;
}
