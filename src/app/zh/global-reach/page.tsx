import type { Metadata } from "next";
import { GlobalReachPage } from "@/components/site/GlobalReachPage";
import { buildGlobalReachMetadata } from "@/lib/content/global-reach";

export const metadata: Metadata = buildGlobalReachMetadata("zh-Hans");

export default function Page() {
  return <GlobalReachPage locale="zh-Hans" />;
}
