import type { Metadata } from "next";
import { OurWorkPage } from "@/components/site/OurWorkPage";
import { buildOurWorkMetadata } from "@/lib/content/our-work";

export const metadata: Metadata = buildOurWorkMetadata("zh-Hans");

export default function Page() {
  return <OurWorkPage locale="zh-Hans" />;
}
