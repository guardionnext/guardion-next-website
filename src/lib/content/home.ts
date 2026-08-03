// Home page copy. English is the single source of truth; Simplified Chinese is
// auto-placeholdered until a real `zhHansHome` object is supplied.

import type { Metadata } from "next";
import { type Locale, localePath, alternatesFor } from "@/lib/i18n";
import { placeholderize } from "./placeholder";

export type HomeContent = {
  hero: {
    eyebrow: string;
    verticalLabel: string;
    h1: string;
    body: string;
    ctaConsult: string;
    ctaServices: string;
    badges: string[]; // icons fixed in component (MapPin, Globe2, Clock)
    scroll: string;
  };
  stats: { label: string; value: string }[];
  difference: {
    eyebrow: string;
    heading: string;
    body: string;
    protectionLabel: string;
    protectionTitle: string;
    protectionBody: string;
    intelligenceLabel: string;
    intelligenceTitle: string;
    intelligenceBody: string;
  };
  services: { eyebrow: string; heading: string; allServices: string; readMore: string };
  credibility: { eyebrow: string; heading: string; items: { title: string; body: string }[] };
  globalReach: {
    eyebrow: string;
    heading: string;
    body: string;
    internationalLabel: string;
    vettedTag: string;
    link: string;
    legendBase: string;
    legendPartners: string;
  };
  testimonials: { eyebrow: string; heading: string; items: { role: string; quote: string }[] };
  ethos: { eyebrow: string; statement: string };
  engagement: {
    eyebrow: string;
    heading: string;
    intro: string;
    steps: { title: string; body: string }[];
  };
  faq: { eyebrow: string; heading: string; intro: string; items: { q: string; a: string }[] };
};

const en: HomeContent = {
  hero: {
    eyebrow: "Protection & Intelligence — end to end",
    verticalLabel: "Protection · Intelligence",
    h1: "Specialist Protection & Investigations.",
    body: "Guardion delivers a premium protection experience for individuals and organisations seeking elite personal security. We redefine what safety feels like — calm, calculated, and always in control.",
    ctaConsult: "Confidential Consultation",
    ctaServices: "Our Services",
    badges: ["Licensed across Australia", "Coordinated worldwide", "24-hour response"],
    scroll: "Scroll",
  },
  stats: [
    { label: "Licensed across", value: "5 states & territories" },
    { label: "Operating", value: "Worldwide" },
    { label: "Response", value: "24-hour" },
  ],
  difference: {
    eyebrow: "The Guardion difference",
    heading: "One firm, one continuous responsibility.",
    body: "Most providers do one or the other. Guardion is unusual in offering both close protection and private investigations under a single brand — so a threat can be investigated and then protected against, end to end, without handoffs.",
    protectionLabel: "Protection",
    protectionTitle: "Presence, without theatre.",
    protectionBody:
      "Close and executive protection built around the principal’s day — quiet, embedded, and rehearsed. From a single movement to a standing detail, our operators are chosen for judgement first.",
    intelligenceLabel: "Intelligence",
    intelligenceTitle: "Answers, on the record.",
    intelligenceBody:
      "Lawful, confidential investigations that produce evidence fit for court, board or family office. When findings warrant it, the same team responsible for the enquiry can stand up the response.",
  },
  services: {
    eyebrow: "Services",
    heading: "A calibrated set of capabilities.",
    allServices: "All services",
    readMore: "Read more",
  },
  credibility: {
    eyebrow: "Why Guardion",
    heading: "Standards you can quietly rely on.",
    items: [
      { title: "Operator pedigree", body: "Backgrounds in Australian Defence Force service and the licensed security industry." },
      { title: "Absolute discretion", body: "Client identities, movements and engagements are never disclosed." },
      { title: "Legal compliance", body: "Licensed operations; investigations produce court-admissible evidence." },
      { title: "Global coordination", body: "Executive and family travel supported through vetted local partners." },
    ],
  },
  globalReach: {
    eyebrow: "Global reach",
    heading: "An Australian base. A worldwide operating model.",
    body: "We hold security licences across five Australian states and territories, and coordinate protection abroad through a vetted network of trusted operatives and local partners — always within the law of the operating jurisdiction. We do not maintain owned offices overseas, and we do not pretend to.",
    internationalLabel: "International",
    vettedTag: "Vetted",
    link: "How the model works",
    legendBase: "Australian base",
    legendPartners: "Vetted partners",
  },
  testimonials: {
    eyebrow: "In their words",
    heading: "Quiet feedback from those who hire us.",
    items: [
      { role: "Private Client", quote: "Guardion made the entire experience feel calm and controlled. Nothing was ever theatrical — they were simply there, and everything went smoothly." },
      { role: "Executive Assistant", quote: "As the person coordinating on behalf of the principal, I valued their precision. Briefs were tight, communication was quiet, and every logistical detail was handled." },
      { role: "Corporate Security Director", quote: "We use Guardion when we need a partner who understands both protection and intelligence. That combination is rare, and it matters." },
    ],
  },
  ethos: {
    eyebrow: "Our ethos",
    statement:
      "The best protection is the kind you never notice — present when it matters, invisible when it doesn’t, and absolute either way.",
  },
  engagement: {
    eyebrow: "How we engage",
    heading: "A measured path — from first call to standing detail.",
    intro: "Every engagement follows the same disciplined sequence, scaled to the situation. No theatre, no upsell — only what the picture requires.",
    steps: [
      { title: "Confidential consultation", body: "A principal of the firm listens first. No obligation, and nothing on the record." },
      { title: "Threat & risk assessment", body: "We map the real picture — people, patterns and places — and grade the exposure honestly." },
      { title: "Bespoke planning", body: "A right-sized plan: routes, contingencies and the smallest effective footprint." },
      { title: "Discreet execution", body: "Quiet, rehearsed delivery — with the intelligence to adapt as the situation moves." },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Questions we’re asked, answered plainly.",
    intro: "If your question isn’t here, speak with us directly. Every conversation is confidential.",
    items: [
      { q: "How do I request a quote?", a: "Submit a confidential consultation request or call our 24-hour line. A principal of the firm will speak with you directly, understand the requirement, and provide a scoped proposal — usually within one business day." },
      { q: "How do I know which service is right for me?", a: "We begin with a short, no-obligation conversation. From there we advise honestly — sometimes the answer is a single driver for a specific movement; sometimes it is a longer program. We will not recommend more than the situation requires." },
      { q: "Are Guardion operatives licensed and trained?", a: "Yes. Guardion holds security licences in Queensland, New South Wales, the Australian Capital Territory, Victoria and South Australia. Operators hold current state licences and complete ongoing training in protection, first aid and defensive driving." },
      { q: "What services does Guardion offer?", a: "Close protection, executive protection, residential security, security driving, private investigations and tailored security programs. All can be combined into a single, coordinated engagement." },
      { q: "How is confidentiality maintained?", a: "Every engagement is governed by strict internal protocols and non-disclosure. We do not share client names, itineraries or engagement details externally, and internal access is limited to those directly involved." },
      { q: "Can Guardion support international travel?", a: "Yes. From an Australian licensed base we coordinate protection worldwide through a vetted network of trusted operatives and local partners, always within the law of the operating jurisdiction." },
      { q: "How quickly can you respond?", a: "Our 24-hour line is monitored continuously. Standard engagements are scoped within a business day; urgent protective movements can typically be resourced within hours." },
    ],
  },
};

const zhHans: HomeContent = {
  hero: {
    eyebrow: "保护与情报——端到端",
    verticalLabel: "保护 · 情报",
    h1: "专业保护与调查。",
    body: "Guardion 为寻求顶级个人安全的个人与机构，提供高端的保护体验。我们重新定义安全的感受——沉着、缜密，始终尽在掌控。",
    ctaConsult: "保密咨询",
    ctaServices: "我们的服务",
    badges: ["持牌覆盖全澳", "全球统筹协调", "24 小时响应"],
    scroll: "向下滚动",
  },
  stats: [
    { label: "持牌覆盖", value: "5 个州与领地" },
    { label: "运营范围", value: "全球" },
    { label: "响应", value: "24 小时" },
  ],
  difference: {
    eyebrow: "Guardion 的与众不同",
    heading: "一家公司，一份连续到底的责任。",
    body: "大多数服务商只做其中一项。Guardion 的独特之处，在于将贴身护卫与私人调查置于同一品牌之下——因此，一项威胁可以先被调查、再被防范，端到端完成，无需在不同团队间交接。",
    protectionLabel: "保护",
    protectionTitle: "有存在感，无戏剧化。",
    protectionBody:
      "围绕要客的一天打造的贴身与高管保护——低调、贴身、经过演练。无论是单次行程还是常驻警卫，我们首先看重护卫人员的判断力。",
    intelligenceLabel: "情报",
    intelligenceTitle: "答案，经得起记录。",
    intelligenceBody:
      "合法、保密的调查，所得证据可用于法庭、董事会或家族办公室。当调查结果需要时，负责调查的同一团队可随即启动相应的保护应对。",
  },
  services: {
    eyebrow: "服务",
    heading: "一组精心校准的能力。",
    allServices: "全部服务",
    readMore: "了解更多",
  },
  credibility: {
    eyebrow: "为何选择 Guardion",
    heading: "值得您默默信赖的标准。",
    items: [
      { title: "过硬的从业背景", body: "拥有澳大利亚国防军服役与持牌安保行业的从业背景。" },
      { title: "绝对谨慎", body: "客户的身份、行踪与委托详情，绝不对外透露。" },
      { title: "合法合规", body: "持牌运营；调查所得证据可用于法庭。" },
      { title: "全球统筹", body: "通过经审核的当地合作伙伴，为高管与家庭差旅提供支持。" },
    ],
  },
  globalReach: {
    eyebrow: "全球覆盖",
    heading: "立足澳大利亚，面向全球的运营模式。",
    body: "我们在澳大利亚五个州与领地持有安保牌照，并通过一个由可信人员与当地合作伙伴组成、经严格甄选的网络，在海外统筹保护工作——始终在运营地的法律范围内进行。我们在海外并不设立自有办事处，也绝不假称如此。",
    internationalLabel: "国际",
    vettedTag: "经审核",
    link: "运营模式详解",
    legendBase: "澳大利亚基地",
    legendPartners: "经审核的合作伙伴",
  },
  testimonials: {
    eyebrow: "客户之声",
    heading: "来自委托者的低调反馈。",
    items: [
      { role: "私人客户", quote: "Guardion 让整个过程都显得沉着而有序。没有任何张扬的举动——他们只是恰到好处地在场，一切都顺利进行。" },
      { role: "高管助理", quote: "作为代要客统筹安排的人，我很看重他们的精准。简报严谨，沟通低调，每一处后勤细节都被妥善处理。" },
      { role: "企业安全总监", quote: "当我们需要一个同时懂得保护与情报的合作伙伴时，就会选择 Guardion。这样的组合十分难得，也至关重要。" },
    ],
  },
  ethos: {
    eyebrow: "我们的理念",
    statement:
      "最好的保护，是你从未察觉的保护——在关键时刻在场，在无需时隐于无形，而无论哪一种，都坚定可靠。",
  },
  engagement: {
    eyebrow: "合作流程",
    heading: "一条稳健有序的路径——从第一通电话到常驻警卫。",
    intro: "每一次委托都遵循同样严谨的步骤，并根据具体情况调整规模。不作秀，不推销——只提供情形真正需要的。",
    steps: [
      { title: "保密咨询", body: "由公司负责人先行倾听。没有任何义务，也不留记录。" },
      { title: "威胁与风险评估", body: "我们厘清真实情形——人、规律与地点——并如实评估风险敞口。" },
      { title: "定制规划", body: "规模适中的方案：路线、应急预案，以及最小而有效的布置。" },
      { title: "谨慎执行", body: "低调、经过演练地执行——并凭借情报随情势变化灵活应对。" },
    ],
  },
  faq: {
    eyebrow: "常见问题",
    heading: "常被问到的问题，直白作答。",
    intro: "如果这里没有您的问题，欢迎直接与我们联系。每一次交谈都严格保密。",
    items: [
      { q: "如何获取报价？", a: "提交保密咨询请求，或拨打我们的 24 小时电话。公司负责人会直接与您沟通，了解需求，并提供范围明确的方案——通常在一个工作日内。" },
      { q: "我如何知道哪项服务适合自己？", a: "我们会从一次简短、无义务的交谈开始，然后如实给出建议——有时答案只是为某次行程配一名驾驶员，有时则是一套更长期的方案。我们绝不会建议超出情形所需的服务。" },
      { q: "Guardion 的人员是否持牌并受过训练？", a: "是的。Guardion 在昆士兰州、新南威尔士州、澳大利亚首都领地、维多利亚州与南澳大利亚州持有安保牌照。护卫人员持有有效的州牌照，并持续接受保护、急救与防卫驾驶方面的培训。" },
      { q: "Guardion 提供哪些服务？", a: "贴身护卫、高管保护、住宅安保、安保驾驶、私人调查以及定制安保方案。所有服务均可整合为一次统筹协调的委托。" },
      { q: "如何保障保密性？", a: "每一项委托都受严格的内部规程与保密协议约束。我们不会对外透露客户姓名、行程或委托详情，内部也仅限直接参与者知悉。" },
      { q: "Guardion 能否支持国际差旅？", a: "可以。我们以澳大利亚的持牌基地为依托，通过由可信人员与当地合作伙伴组成的经审核网络，在全球范围内统筹保护，并始终在运营地的法律范围内进行。" },
      { q: "你们的响应速度有多快？", a: "我们的 24 小时电话全天候有人值守。常规委托可在一个工作日内确定范围；紧急的保护行动通常可在数小时内调配到位。" },
    ],
  },
};

export function getHomeContent(locale: Locale): HomeContent {
  if (locale === "en") return en;
  return zhHans ?? placeholderize(en);
}

const enMeta = {
  title: "Guardion — Specialist Protection & Investigations",
  description:
    "Discreet close protection and private investigations for high-net-worth individuals, executives and family offices. Licensed in Australia, coordinated worldwide.",
  ogTitle: "Guardion — Specialist Protection & Investigations",
  ogDescription:
    "Protection & Intelligence, end to end. A calm, controlled security partner for individuals and organisations.",
};

const zhMeta = {
  title: "Guardion — 专业保护与调查",
  description:
    "为高净值人士、高管与家族办公室提供谨慎的贴身护卫与私人调查。持牌于澳大利亚，业务统筹全球。",
  ogTitle: "Guardion — 专业保护与调查",
  ogDescription:
    "保护与情报，端到端。为个人与机构提供沉着、可控的安保伙伴。",
};

export function buildHomeMetadata(locale: Locale): Metadata {
  const m = locale === "en" ? enMeta : zhMeta;
  return {
    title: m.title,
    description: m.description,
    alternates: alternatesFor(locale, "/"),
    openGraph: {
      title: m.ogTitle,
      description: m.ogDescription,
      url: localePath(locale, "/"),
      siteName: "Guardion",
      type: "website",
    },
  };
}
