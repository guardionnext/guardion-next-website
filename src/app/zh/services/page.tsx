import type { Metadata } from "next";
import { ServicesIndexPage } from "@/components/site/ServicesIndexPage";
import { buildServicesIndexMetadata } from "@/lib/content/services";

export const metadata: Metadata = buildServicesIndexMetadata("zh-Hans");

export default function ServicesIndex() {
  return <ServicesIndexPage locale="zh-Hans" />;
}
