// Our Work page copy. English is the single source of truth; Simplified Chinese
// is auto-placeholdered until a real `zhHans` object is supplied. Case reference
// codes (GRD-…) are never translated — they're restored after placeholdering.

import type { Metadata } from "next";
import type { CaseStudy, CaseStudyLabels } from "@/components/site/CaseStudyCard";
import { type Locale, localePath, alternatesFor } from "@/lib/i18n";
import { placeholderize } from "./placeholder";

export type OurWorkContent = {
  hero: { eyebrow: string; h1: string; body: string };
  confidentialityNote: string;
  caseLabels: CaseStudyLabels;
  studies: CaseStudy[];
};

const en: OurWorkContent = {
  hero: {
    eyebrow: "Our Work",
    h1: "What the work looks like, when we can say anything at all.",
    body: "The scenarios below illustrate how Guardion approaches the problems clients bring us. They are representative, not a client list.",
  },
  confidentialityNote:
    "All identifying details in the case studies below — including names, locations, dates, sectors where necessary, and any operational specifics that could identify a client or an operative — have been removed or altered. Each scenario is drawn from the type of work Guardion is engaged to do, and is presented here to show how we approach it, not to disclose that we did it.",
  caseLabels: {
    caseWord: "Case",
    ref: "Ref.",
    situation: "Situation",
    approach: "Approach",
    outcome: "Outcome",
  },
  studies: [
    {
      reference: "GRD-PA-014",
      sector: "Public appearance · entertainment",
      headline: "A credible threat surfaced days before a public appearance.",
      situation:
        "A public-facing client was scheduled to attend a ticketed event in an Australian capital when a specific, personally-directed threat was received through social channels. The client's team asked whether the appearance should proceed and, if so, on what terms.",
      approach:
        "Our investigators triaged the source and credibility of the threat within twenty-four hours. In parallel, a close-protection team conducted venue reconnaissance, agreed arrival and egress routes with the venue and local police liaison, and rehearsed a low-visibility protective posture that would not alter the client's on-stage experience.",
      outcome:
        "The appearance proceeded as planned. The threat actor was identified and referred to authorities for handling under the appropriate law. The client's audience saw a normal event; the client saw a calm, quiet team who never had to raise their profile above what the room required.",
    },
    {
      reference: "GRD-RS-021",
      sector: "Residential · high-profile family",
      headline: "A residential security review for a high-profile family.",
      situation:
        "A family whose principal had recently taken on a more public role asked Guardion to review their primary residence and the daily routines of the household. Their existing arrangements had grown up piecemeal over years and had not been assessed as a whole.",
      approach:
        "A principal of the firm walked the property with the family, mapped the routines of every adult and child in the household, and produced a written assessment covering physical hardening, access control, staff vetting, communication protocols and a school-run plan. Recommendations were sequenced by risk, not by cost, and delivered without pressure to buy hardware.",
      outcome:
        "The family adopted the recommendations over the following months. A standing point of contact was retained inside Guardion, available around the clock. Day-to-day life for the family continued to look, from the outside, unremarkable — which is what they had asked for.",
    },
    {
      reference: "GRD-IN-032",
      sector: "Investigations · corporate",
      headline: "A discreet enquiry supporting a corporate client.",
      situation:
        "A corporate client suspected that confidential internal material was reaching a competitor. Because the matter potentially involved employees, it required an enquiry that would stand up if it became a formal dispute — while remaining invisible to the wider organisation until then.",
      approach:
        "Guardion scoped the enquiry with the client's external legal counsel so that every step was lawful, proportionate and admissible. Open-source research, discreet interviews and structured evidence handling were carried out over several weeks by a small, named team, with regular briefings to counsel rather than to the wider business.",
      outcome:
        "A concise, evidence-referenced report was delivered to counsel. The client acted on it through its lawyers on terms of its own choosing. Guardion's role — and the client's identity — remained confidential throughout, as they remain today.",
    },
  ],
};

const zhHans: OurWorkContent = {
  hero: {
    eyebrow: "工作案例",
    h1: "在我们能够透露之时，这份工作是什么模样。",
    body: "以下情景展示了 Guardion 如何应对客户带来的难题。它们具有代表性，但并非客户名单。",
  },
  confidentialityNote:
    "以下案例中所有可用于识别身份的细节——包括姓名、地点、日期、必要时的行业，以及任何可能暴露客户或护卫人员身份的行动细节——均已删除或更改。每一则情景都取材于 Guardion 所承接工作的类型，此处呈现是为了说明我们如何应对，而非透露我们确曾承接。",
  caseLabels: {
    caseWord: "案例",
    ref: "编号",
    situation: "情况",
    approach: "做法",
    outcome: "结果",
  },
  studies: [
    {
      reference: "GRD-PA-014",
      sector: "公开露面 · 娱乐",
      headline: "一次公开露面前数日，出现了可信的威胁。",
      situation:
        "一位面向公众的客户原定出席澳大利亚某首府城市的一场售票活动，其间通过社交渠道收到了一则针对本人的具体威胁。客户团队询问此次露面是否应当继续，若继续，又该以何种方式进行。",
      approach:
        "我们的调查人员在二十四小时内评估了威胁的来源与可信度。与此同时，一支贴身护卫团队对场地进行踏勘，与场馆及当地警方联络人商定了到场与撤离路线，并演练了一套不会影响客户台上体验的低调保护布置。",
      outcome:
        "此次露面如期进行。威胁实施者的身份被查明，并移交有关部门依法处理。客户的观众看到的是一场如常的活动；而客户看到的，是一支沉着、低调、始终未超出现场所需而显露身形的团队。",
    },
    {
      reference: "GRD-RS-021",
      sector: "住宅 · 知名家庭",
      headline: "为一个知名家庭进行的住宅安保审查。",
      situation:
        "一个家庭的家主近期担任了更为公开的职务，遂请 Guardion 审查其主要住所与家庭的日常作息。他们现有的安排是多年来零散形成的，从未作为一个整体加以评估。",
      approach:
        "公司的一位负责人与家人一同实地查看了房产，梳理了家中每位成人与孩子的作息，并出具了一份书面评估，涵盖物理加固、门禁管理、员工背景审核、通讯规程与上下学接送方案。各项建议按风险高低而非成本排序，交付时也不施加任何购置设备的压力。",
      outcome:
        "在随后的数月里，这个家庭采纳了各项建议。Guardion 内部保留了一位常设对接人，全天候待命。这个家庭的日常生活，从外表看依旧平淡无奇——而这正是他们所希望的。",
    },
    {
      reference: "GRD-IN-032",
      sector: "调查 · 企业",
      headline: "为一家企业客户提供支持的谨慎调查。",
      situation:
        "一家企业客户怀疑内部机密资料流向了竞争对手。由于此事可能牵涉员工，因此需要一次即便日后演变为正式争议也经得起检验的调查——同时在此之前，对公司内更广泛的范围保持不为人知。",
      approach:
        "Guardion 与客户的外部法律顾问共同界定了调查范围，以确保每一步都合法、适度且具有证据效力。公开信息研究、谨慎访谈与规范的证据处理，由一支人员固定的小型团队用数周时间完成，并定期向法律顾问而非公司更广范围汇报。",
      outcome:
        "一份简明、附有证据引证的报告交付给了法律顾问。客户通过其律师，按自己选择的方式据此采取行动。Guardion 的角色——以及客户的身份——自始至终保密，至今依然如此。",
    },
  ],
};

export function getOurWorkContent(locale: Locale): OurWorkContent {
  if (locale === "en") return en;
  return zhHans ?? placeholderize(en);
}

const enMeta = {
  title: "Our Work — Anonymised Case Studies | Guardion",
  description:
    "Anonymised scenarios showing how Guardion approaches protection and investigations. Situation, approach and outcome — all identifying detail removed.",
  ogTitle: "Our Work — Guardion",
  ogDescription:
    "How Guardion approaches real engagements — anonymised, structured as Situation, Approach and Outcome.",
};

const zhMeta = {
  title: "工作案例 — 匿名案例 | Guardion",
  description:
    "以匿名情景展示 Guardion 如何开展保护与调查。情况、做法与结果——所有可识别身份的细节均已删除。",
  ogTitle: "工作案例 — Guardion",
  ogDescription:
    "Guardion 如何应对真实委托——以匿名方式，按情况、做法与结果的结构呈现。",
};

export function buildOurWorkMetadata(locale: Locale): Metadata {
  const m = locale === "en" ? enMeta : zhMeta;
  return {
    title: m.title,
    description: m.description,
    alternates: alternatesFor(locale, "/our-work"),
    openGraph: {
      title: m.ogTitle,
      description: m.ogDescription,
      url: localePath(locale, "/our-work"),
      siteName: "Guardion",
      type: "website",
    },
  };
}
