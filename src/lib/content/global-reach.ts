// Global Reach page copy. English is the single source of truth; Simplified
// Chinese is auto-placeholdered until a real `zhHans` object is supplied.
// State codes (QLD, NSW…) are fixed in the component; their names and the city
// list live here so they can be translated too.

import type { Metadata } from "next";
import { type Locale, localePath, alternatesFor } from "@/lib/i18n";
import { placeholderize } from "./placeholder";

export type GlobalReachContent = {
  hero: { eyebrow: string; h1: string; body: string };
  model: { eyebrow: string; heading: string; body: string[] };
  useCase: { eyebrow: string; heading: string; body: string[]; points: string[] };
  regional: { eyebrow: string; heading: string; body: string[]; cities: string[]; note: string };
  engagement: { eyebrow: string; heading: string; stepLabel: string; steps: { title: string; body: string }[] };
  footprint: { eyebrow: string; heading: string; body: string; stateNames: string[]; note: string };
};

const en: GlobalReachContent = {
  hero: {
    eyebrow: "Global Reach",
    h1: "An Australian base. A vetted network the world over.",
    body: "Guardion is licensed and headquartered in Australia. Beyond our own borders we operate through a carefully selected network of trusted partners — coordinating protection wherever a principal or their family need to travel, always within local law.",
  },
  model: {
    eyebrow: "The operating model",
    heading: "Honest about what we own — and what we coordinate.",
    body: [
      "Our licensed operating base is Australia. We do not claim offices, standing teams or security licences in countries where we do not hold them. What we do hold, and what has been built over years, is a shortlist of vetted operators and firms abroad whose standards match our own.",
      "For international engagements, Guardion remains the single point of accountability for the client. Planning, briefing, quality control and communication are held in-house. Local execution is delivered by partners who are licensed in their jurisdiction, briefed to our brief, and answerable to us for the duration of the engagement.",
      "This model is deliberate. It keeps the client relationship simple, keeps the operating footprint honest, and keeps every action inside the law of the country it is taken in.",
    ],
  },
  useCase: {
    eyebrow: "Lead use case",
    heading: "Executive and family travel security.",
    body: [
      "Most international requests we receive concern travel — a board meeting overseas, a family holiday, a relocation, a sensitive negotiation, a public appearance abroad. Travel is where routine breaks down: unfamiliar cities, unfamiliar drivers, unfamiliar venues, and threat pictures that shift from one border to the next.",
      "We plan around that. A principal or family travelling with Guardion should feel that the trip has been rehearsed before they left, and that someone competent is always one step ahead of them on the ground.",
    ],
    points: [
      "Private and commercial aviation coordination",
      "Family, staff and minor-child specific planning",
      "In-country liaison with vetted local partners",
      "Medical, evacuation and contingency routing",
    ],
  },
  regional: {
    eyebrow: "Regional focus",
    heading: "Asia and South-East Asia.",
    body: [
      "A growing share of our work is built around Asia and the wider South-East Asian region — principals and families travelling for business, property, education and leisure across Greater China and the region's major hubs. It is territory we know well and coordinate in continually.",
      "For clients from Greater China in particular, we plan to the protocol, privacy expectations and communication preferences those engagements require — including Mandarin- and Cantonese-speaking coordination in-country, arranged through our vetted local partners. Discretion, privacy and the comfort of the family come first, and every detail is calibrated accordingly.",
    ],
    cities: ["Hong Kong", "Shanghai", "Singapore", "Bangkok", "Kuala Lumpur", "Tokyo"],
    note: "Regional engagements are coordinated within local jurisdiction, through vetted partners.",
  },
  engagement: {
    eyebrow: "A typical international engagement",
    heading: "Prepared in Australia. Executed on the ground.",
    stepLabel: "Step",
    steps: [
      { title: "Advance planning", body: "Route studies, venue reconnaissance, medical routing and contingency plans are drafted before the principal departs Australia. Nothing is improvised on arrival." },
      { title: "Local liaison", body: "We engage vetted operators, drivers and, where appropriate, law enforcement or hotel security in-country. Every partner is briefed to Guardion's operating standard." },
      { title: "Cultural awareness", body: "Protocol, dress, communication and threat picture are calibrated to the destination. Discretion looks different in Tokyo, Riyadh, Milan and Los Angeles — we adjust accordingly." },
      { title: "Coordinated logistics", body: "Aviation, ground movement, accommodation and personal staff are sequenced into a single plan, held by one point of contact in Australia and one on the ground." },
    ],
  },
  footprint: {
    eyebrow: "Australian licensed footprint",
    heading: "Licensed to operate directly in five Australian states and territories.",
    body: "Within Australia, Guardion holds security licensing across Queensland, New South Wales, the Australian Capital Territory, Victoria and South Australia. Assignments in other Australian jurisdictions are coordinated through locally licensed partners on the same terms as our international engagements.",
    stateNames: [
      "Queensland",
      "New South Wales",
      "Australian Capital Territory",
      "Victoria",
      "South Australia",
    ],
    note: "International engagements are coordinated within local jurisdiction.",
  },
};

const zhHans: GlobalReachContent = {
  hero: {
    eyebrow: "全球覆盖",
    h1: "立足澳大利亚，遍及全球的经审核网络。",
    body: "Guardion 持牌运营，总部设在澳大利亚。在国门之外，我们通过一个精心遴选的可信合作伙伴网络开展工作——无论要客或其家人需要前往何处，都为其统筹保护，并始终在当地法律范围内进行。",
  },
  model: {
    eyebrow: "运营模式",
    heading: "对自有能力与协调能力，我们都坦诚以告。",
    body: [
      "我们的持牌运营基地在澳大利亚。在我们并不持有牌照的国家，我们绝不谎称设有办事处、常驻团队或安保牌照。我们真正拥有、并经多年积累而成的，是一份经审核的海外人员与公司名单，他们的标准与我们相当。",
      "对于国际委托，Guardion 始终是客户的唯一责任对接方。规划、简报、质量把控与沟通均由内部掌握。当地的执行则由在其司法管辖区持牌的合作伙伴完成，他们依照我们的简报行事，并在整个委托期间对我们负责。",
      "这一模式是刻意为之。它让客户关系保持简单，让运营足迹保持诚实，并让每一项行动都处于其发生国家的法律范围之内。",
    ],
  },
  useCase: {
    eyebrow: "主要应用场景",
    heading: "高管与家庭差旅安全。",
    body: [
      "我们收到的大多数国际请求都与出行有关——一次海外董事会、一次家庭度假、一次搬迁、一场敏感谈判，或一次海外公开露面。出行正是日常规律被打破之时：陌生的城市、陌生的司机、陌生的场所，以及一过边境便随之改变的威胁态势。",
      "我们的规划正是围绕这一点展开。与 Guardion 同行的要客或家庭，应当感到整趟行程在出发前就已演练妥当，且在当地始终有一位能干的人先他们一步做好安排。",
    ],
    points: [
      "私人与商业航空协调",
      "针对家人、随行人员与未成年子女的专门规划",
      "与经审核的当地合作伙伴的当地联络",
      "医疗、撤离与应急路线安排",
    ],
  },
  regional: {
    eyebrow: "区域重点",
    heading: "亚洲与东南亚。",
    body: [
      "我们越来越多的工作，围绕亚洲及更广阔的东南亚地区展开——要客与家庭因商务、置业、教育与休闲，往返于大中华地区及区域内各大枢纽。这是我们十分熟悉、并持续在其中统筹协调的区域。",
      "尤其对于来自大中华地区的客户，我们会按照此类委托所需的礼仪规格、隐私预期与沟通习惯来制定方案——包括通过经审核的当地合作伙伴，安排普通话与粤语的当地协调。谨慎、隐私与家人的舒适始终摆在首位，每一处细节都据此精心调校。",
    ],
    cities: ["香港", "上海", "新加坡", "曼谷", "吉隆坡", "东京"],
    note: "区域委托通过经审核的合作伙伴，在当地司法管辖范围内统筹开展。",
  },
  engagement: {
    eyebrow: "一次典型的国际委托",
    heading: "在澳大利亚筹备，在当地执行。",
    stepLabel: "步骤",
    steps: [
      { title: "前期规划", body: "路线研究、场地踏勘、医疗路线与应急预案，都在要客离开澳大利亚之前拟定。抵达后绝不临场拼凑。" },
      { title: "当地联络", body: "我们在当地联系经审核的护卫人员、司机，并在适当情况下对接执法部门或酒店安保。每一位合作伙伴都会按 Guardion 的运营标准接受简报。" },
      { title: "文化意识", body: "礼仪、着装、沟通与威胁态势都会针对目的地加以调校。在东京、利雅得、米兰与洛杉矶，「谨慎」各有不同——我们会据此调整。" },
      { title: "统筹后勤", body: "航空、地面行进、住宿与随行人员被编排进同一套方案，由澳大利亚的一位对接人与当地的一位对接人共同掌握。" },
    ],
  },
  footprint: {
    eyebrow: "澳大利亚持牌覆盖",
    heading: "获牌可在澳大利亚五个州与领地直接运营。",
    body: "在澳大利亚境内，Guardion 于昆士兰州、新南威尔士州、澳大利亚首都领地、维多利亚州与南澳大利亚州持有安保牌照。在澳大利亚其他司法管辖区的任务，则按与国际委托相同的方式，通过当地持牌的合作伙伴统筹开展。",
    stateNames: [
      "昆士兰州",
      "新南威尔士州",
      "澳大利亚首都领地",
      "维多利亚州",
      "南澳大利亚州",
    ],
    note: "国际委托在当地司法管辖范围内统筹开展。",
  },
};

export function getGlobalReachContent(locale: Locale): GlobalReachContent {
  if (locale === "en") return en;
  return zhHans ?? placeholderize(en);
}

const enMeta = {
  title: "Global Reach — Worldwide Protection Coordination | Guardion",
  description:
    "An Australian licensed base with a vetted global network, and a dedicated focus on Asia and South-East Asia. Guardion coordinates executive and family travel security worldwide — including Mandarin- and Cantonese-speaking coordination for Greater China clients — always within local law.",
  ogTitle: "Global Reach — Guardion",
  ogDescription:
    "How Guardion coordinates protection worldwide from its Australian base — advance planning, local liaison, cultural awareness and single-point accountability.",
};

const zhMeta = {
  title: "全球覆盖 — 全球保护统筹 | Guardion",
  description:
    "以澳大利亚持牌基地为依托，拥有经审核的全球网络，并专注于亚洲与东南亚。Guardion 在全球范围内统筹高管与家庭差旅安全——包括为大中华地区客户提供普通话与粤语协调——始终在当地法律范围内进行。",
  ogTitle: "全球覆盖 — Guardion",
  ogDescription:
    "Guardion 如何以澳大利亚基地为依托，在全球统筹保护——前期规划、当地联络、文化意识与单一责任对接。",
};

export function buildGlobalReachMetadata(locale: Locale): Metadata {
  const m = locale === "en" ? enMeta : zhMeta;
  return {
    title: m.title,
    description: m.description,
    alternates: alternatesFor(locale, "/global-reach"),
    openGraph: {
      title: m.ogTitle,
      description: m.ogDescription,
      url: localePath(locale, "/global-reach"),
      siteName: "Guardion",
      type: "website",
    },
  };
}
