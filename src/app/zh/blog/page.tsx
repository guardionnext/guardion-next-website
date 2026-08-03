import type { Metadata } from "next";
import { BlogIndexPage } from "@/components/site/BlogIndexPage";
import { buildBlogIndexMetadata } from "@/lib/content/blog-index";

export const metadata: Metadata = buildBlogIndexMetadata("zh-Hans");

export default function Page() {
  return <BlogIndexPage locale="zh-Hans" />;
}
