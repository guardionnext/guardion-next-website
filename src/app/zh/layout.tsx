import type { Metadata } from "next";
import { SetHtmlLang } from "@/components/site/SetHtmlLang";
import { htmlLang, ZH_READY } from "@/lib/i18n";

// Applies to every /zh page. While translations are still placeholders
// (ZH_READY === false) the whole subtree is noindex so Google never sees the
// [ZH] copy; flipping ZH_READY to true removes the noindex in one place.
export const metadata: Metadata = {
  ...(ZH_READY ? {} : { robots: { index: false, follow: true } }),
  openGraph: {
    locale: "zh_CN",
  },
};

export default function ZhLayout({ children }: { children: React.ReactNode }) {
  return (
    <div lang={htmlLang["zh-Hans"]}>
      <SetHtmlLang lang={htmlLang["zh-Hans"]} />
      {children}
    </div>
  );
}
