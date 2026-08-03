import type { Metadata } from "next";
import { AboutPage } from "@/components/site/AboutPage";
import { buildAboutMetadata } from "@/lib/content/about";

export const metadata: Metadata = buildAboutMetadata("zh-Hans");

export default function Page() {
  return <AboutPage locale="zh-Hans" />;
}
