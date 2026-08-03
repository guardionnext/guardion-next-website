import type { Metadata } from "next";
import { HomePage } from "@/components/site/HomePage";
import { buildHomeMetadata } from "@/lib/content/home";

export const metadata: Metadata = buildHomeMetadata("zh-Hans");

export default function Page() {
  return <HomePage locale="zh-Hans" />;
}
