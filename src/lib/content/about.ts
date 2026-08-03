// About page copy. English is the single source of truth; Simplified Chinese is
// auto-placeholdered until a real `zhHans` object is supplied. Proper names
// (James McKelliff, Soldier On, ASIAL) live in the component, not here.

import type { Metadata } from "next";
import { type Locale, localePath, alternatesFor } from "@/lib/i18n";
import { placeholderize } from "./placeholder";

export type AboutContent = {
  hero: { eyebrow: string; h1: string; body: string };
  founder: {
    eyebrow: string;
    role: string;
    portraitCaption: string;
    portraitAlt: string;
    bio: string[];
    qualsHeading: string;
    quals: string[];
  };
  values: {
    eyebrow: string;
    heading: string;
    items: { title: string; body: string }[];
  };
  firm: { eyebrow: string; heading: string; body: string[] };
  credentials: { eyebrow: string; heading: string; body: string };
  affiliations: {
    eyebrow: string;
    heading: string;
    intro: string;
    viewCertificate: string;
    items: { label: string; body: string }[];
  };
};

const en: AboutContent = {
  hero: {
    eyebrow: "About Guardion",
    h1: "A small firm, held to a single standard.",
    body: "Guardion was founded to bring protection and investigations together under one professional standard — quiet, precise, and accountable to the people who trust us.",
  },
  founder: {
    eyebrow: "Founder",
    role: "Founder & Principal",
    portraitCaption: "Ronin SA–certified · ADF veteran",
    portraitAlt: "James McKelliff, Founder and Principal of Guardion",
    bio: [
      "Guardion is led by James McKelliff, who has spent more than eighteen years in protection and public-safety roles across military and civilian settings. He is a Ronin South Africa–certified close protection operator, trained to the FREC3 pre-hospital care standard and in firearms and advanced protective driving.",
      "From 2013 to 2021 he served with the Australian Defence Force in the Royal Australian Artillery, on an air-defence missile and radar team charged with protecting land forces. He qualified as a military driving instructor and combat-fitness leader, mentored incoming soldiers, and deployed on Operation Bushfire Assist. That grounding — readiness, planning and disciplined execution under pressure — still shapes how every Guardion task is prepared.",
      "His civilian career spans the full breadth of the industry: cash-in-transit and armoured work, crowd control and venue security, residential protection teams, and licensed private investigations conducted under instruction from law firms. He has led night-time security operations, run convoy movements with encrypted team communications, and built and supervised trusted protection details for private clients.",
      "In recent years his work has moved into the private, high-end of the profession — discreet close protection for high-net-worth individuals and their families, VIPs, touring recording artists, political commentators and public figures, across international sport, motorsport and televised production. In his relentless international work: he has deployed on operations throughout Asia, Europe and the Americas — in practice, every corner of the globe — with the extensive travel such engagements demand. In keeping with the firm's first principle, the people he protects are never named.",
      "He continues to formalise that experience academically. He is roughly halfway through a Bachelor of Global Security, majoring in terrorism and counter-terrorism, with completion expected in early 2028 — sharpening the threat assessment and planning discipline that underpins every Guardion engagement.",
      "His philosophy is straightforward. Good protection is boring on the outside and thoroughly rehearsed on the inside. Good investigations are patient, lawful, and worth standing behind in a courtroom. Neither is theatre. Both are, above all, a duty to the client.",
      "Every Guardion engagement is signed off by a principal of the firm. Clients speak to someone accountable — not a duty desk, not a rotating account manager.",
    ],
    qualsHeading: "Training & qualifications",
    quals: [
      "Ronin South Africa — Close Protection (FREC3 Medical, Firearms & Advanced Driving)",
      "Australian Defence Force — Royal Australian Artillery (2013–2021)",
      "Bachelor of Global Security — majoring in Terrorism & Counter-Terrorism (in progress, completion early 2028)",
      "Licensed Private Investigator",
      "NGV1 Security Clearance",
      "Diploma of Security Risk Management",
      "Certificate IV in Security Management",
      "SA Firearms Licence for Security (H6)",
      "Heavy Combination & advanced protective driving licences",
    ],
  },
  values: {
    eyebrow: "Values",
    heading: "Three words we hold ourselves to.",
    items: [
      {
        title: "Discretion",
        body: "Client identities, movements and engagements are never disclosed — before, during or after the work. Silence is part of the service.",
      },
      {
        title: "Precision",
        body: "Plans are written, rehearsed and reviewed. Nothing is improvised where preparation was possible.",
      },
      {
        title: "Professionalism",
        body: "Lawful, licensed, understated. Our operators represent the client in every room they enter and every street they cross.",
      },
    ],
  },
  firm: {
    eyebrow: "The firm",
    heading: "Deliberately small. Deliberately narrow.",
    body: [
      "Guardion accepts a limited number of engagements. That is a choice, not a marketing line. Close protection and lawful investigations are exacting disciplines, and both suffer when a firm grows past what it can personally supervise.",
      "Our operators are chosen for temperament as much as training. The people we place beside a principal are calm, literate, presentable, and comfortable in the rooms our clients move through — as well as capable of the harder end of the work if the picture changes.",
      "We are an Australian firm. Our licensed operating base is Australia, and our international work is coordinated through vetted local partners inside their own jurisdictions. Everything we do is done within the law of the country it is done in.",
    ],
  },
  credentials: {
    eyebrow: "Credentials & licensing",
    heading: "Registered and licensed under Australian law.",
    body: "Guardion is registered as an Australian company and holds security licensing across five states and territories. Licence numbers are published below and updated when they are renewed. Copies are available on request.",
  },
  affiliations: {
    eyebrow: "Compliance & affiliations",
    heading: "Accountable to more than our clients.",
    intro:
      "Guardion operates as an ethical member of the security and risk-management industry — compliant with the rules, regulations and legislation that govern it. We value our people and our clients, and respect the countries in which we work.",
    viewCertificate: "View certificate",
    items: [
      {
        label: "Veteran support",
        body: "Guardion is a veteran-owned business, and we give back to the military community that shaped us. We are proud supporters of Soldier On — a not-for-profit delivering holistic support to current and former Australian Defence Force personnel and their families. Soldier On has featured our partnership in an article, reflecting the values we share with those who have served.",
      },
      {
        label: "Industry membership",
        body: "Guardion is a member of the Australian Security Industry Association Limited (ASIAL), the peak body for Australia's security profession. Membership holds us to ASIAL's standards of professionalism, integrity and compliance, and keeps us engaged with industry best practice through training, accreditation and regulatory engagement.",
      },
    ],
  },
};

const zhHans: AboutContent = {
  hero: {
    eyebrow: "关于 Guardion",
    h1: "一家小而精的公司，恪守同一标准。",
    body: "Guardion 的创立，是为了将保护与调查纳入同一专业标准之下——低调、精准，并对信任我们的人负责。",
  },
  founder: {
    eyebrow: "创始人",
    role: "创始人兼负责人",
    portraitCaption: "Ronin 南非认证 · 澳大利亚国防军退伍军人",
    portraitAlt: "Guardion 创始人兼负责人 James McKelliff",
    bio: [
      "Guardion 由 James McKelliff 领导，他在军队与民用领域从事保护与公共安全工作已逾十八年。他是经 Ronin 南非认证的贴身护卫人员，接受过 FREC3 院前急救标准以及枪械与高级防卫驾驶的训练。",
      "2013 年至 2021 年，他在澳大利亚国防军皇家澳大利亚炮兵服役，隶属于一支负责保护地面部队的防空导弹与雷达团队。他取得了军事驾驶教官与战斗体能带头人资格，指导新入伍士兵，并参加了「丛林大火援助行动」（Operation Bushfire Assist）。这份历练——临战准备、周密规划与高压下的严明执行——至今仍塑造着 Guardion 每一项任务的筹备方式。",
      "他的民用职业生涯覆盖了整个行业：押运与武装押送、人群管控与场馆安保、住宅保护团队，以及受律师事务所委托开展的持牌私人调查。他曾指挥夜间安保行动，以加密团队通讯组织车队行进，并为私人客户组建和督导可信赖的护卫小组。",
      "近年来，他的工作转向行业中私密而高端的领域——为高净值人士及其家人、要客、巡演的录音艺人、政治评论员与公众人物提供谨慎的贴身护卫，涉及国际体育、赛车运动与电视制作。这是一项高度国际化的工作：他曾在亚洲、欧洲与美洲各地执行任务——实际上遍及全球各个角落——并承担此类委托所需的大量差旅。秉持公司的首要原则，他所保护的对象从不具名。",
      "他还在通过学业将这些经验系统化。目前他已修读全球安全学士学位约一半课程，主修恐怖主义与反恐方向，预计于 2028 年初完成——这进一步磨砺了支撑 Guardion 每一项委托的威胁评估与规划功力。",
      "他的理念很简单。好的保护，表面平淡无奇，内里则经过周密演练。好的调查，耐心、合法，并经得起法庭的检验。两者都不是作秀。归根结底，它们都是对客户的一份责任。",
      "Guardion 的每一项委托都由公司负责人亲自签署确认。客户面对的是一位真正负责的人——而非值班台，也非轮换的客户经理。",
    ],
    qualsHeading: "培训与资质",
    quals: [
      "Ronin 南非——贴身护卫（FREC3 急救、枪械与高级驾驶）",
      "澳大利亚国防军——皇家澳大利亚炮兵（2013–2021）",
      "全球安全学士——主修恐怖主义与反恐（在读，预计 2028 年初完成）",
      "持牌私人调查员",
      "NGV1 安全审查许可",
      "安全风险管理文凭",
      "安保管理四级证书",
      "南澳安保枪械牌照（H6）",
      "重型组合车与高级防卫驾驶牌照",
    ],
  },
  values: {
    eyebrow: "价值观",
    heading: "我们恪守的三个词。",
    items: [
      {
        title: "谨慎",
        body: "客户的身份、行踪与委托，无论在工作之前、之中还是之后，都绝不透露。缄默本身就是服务的一部分。",
      },
      {
        title: "精准",
        body: "方案都经过书面拟定、演练与复盘。凡是可以事先准备的，绝不临场发挥。",
      },
      {
        title: "专业",
        body: "合法、持牌、低调。我们的护卫人员，在踏入的每一个场合、走过的每一条街道，都代表着客户。",
      },
    ],
  },
  firm: {
    eyebrow: "关于公司",
    heading: "有意做小，有意做专。",
    body: [
      "Guardion 只承接有限数量的委托。这是一种选择，而非营销说辞。贴身护卫与合法调查都是要求严苛的专业，一旦公司规模超出其亲力督导的能力，两者都会大打折扣。",
      "我们挑选护卫人员，既看训练，也看性情。我们安排在要客身边的人，沉着、有素养、举止得体，能自在地出入客户所处的场合——同时，一旦情势生变，也有能力应对更严峻的局面。",
      "我们是一家澳大利亚公司。我们的持牌运营基地在澳大利亚，国际业务则通过当地经审核的合作伙伴，在各自司法管辖区内统筹开展。我们所做的一切，都在其所在国家的法律范围内进行。",
    ],
  },
  credentials: {
    eyebrow: "资质与牌照",
    heading: "依澳大利亚法律注册并持牌。",
    body: "Guardion 已注册为澳大利亚公司，并在五个州与领地持有安保牌照。牌照编号列示于下方，并在续期时更新。可应要求提供副本。",
  },
  affiliations: {
    eyebrow: "合规与会员资格",
    heading: "我们负责的对象，不止是客户。",
    intro:
      "Guardion 作为安保与风险管理行业中恪守操守的一员运营——遵守规范该行业的各项规则、法规与法律。我们珍视自己的团队与客户，并尊重我们开展工作的每一个国家。",
    viewCertificate: "查看证书",
    items: [
      {
        label: "退伍军人支持",
        body: "Guardion 是一家退伍军人所有的企业，我们回馈塑造了我们的军人群体。我们自豪地支持 Soldier On——一家为现役与退役澳大利亚国防军人员及其家人提供全方位支持的非营利机构。Soldier On 曾在一篇文章中报道我们的合作，正体现了我们与曾经服役者所共有的价值观。",
      },
      {
        label: "行业会员",
        body: "Guardion 是澳大利亚安保行业协会（ASIAL）的会员，该协会是澳大利亚安保行业的最高行业机构。会员身份使我们恪守 ASIAL 在专业、诚信与合规方面的标准，并通过培训、认证与监管互动，让我们持续紧跟行业最佳实践。",
      },
    ],
  },
};

export function getAboutContent(locale: Locale): AboutContent {
  if (locale === "en") return en;
  return zhHans ?? placeholderize(en);
}

const enMeta = {
  title: "About — James McKelliff & the Guardion Standard | Guardion",
  description:
    "Guardion is led by James McKelliff — a Ronin South Africa–certified close protection operator and ADF veteran with 18+ years in protection and investigations.",
  ogTitle: "About Guardion",
  ogDescription:
    "The firm, its founder, and the values behind every Guardion engagement — discretion, precision, professionalism.",
};

const zhMeta = {
  title: "关于我们 — James McKelliff 与 Guardion 标准 | Guardion",
  description:
    "Guardion 由 James McKelliff 领导——一位经 Ronin 南非认证的贴身护卫人员、澳大利亚国防军退伍军人，在保护与调查领域拥有 18 年以上经验。",
  ogTitle: "关于 Guardion",
  ogDescription:
    "关于这家公司、它的创始人，以及 Guardion 每一项委托背后的价值观——谨慎、精准、专业。",
};

export function buildAboutMetadata(locale: Locale): Metadata {
  const m = locale === "en" ? enMeta : zhMeta;
  return {
    title: m.title,
    description: m.description,
    alternates: alternatesFor(locale, "/about"),
    openGraph: {
      title: m.ogTitle,
      description: m.ogDescription,
      url: localePath(locale, "/about"),
      siteName: "Guardion",
      type: "profile",
    },
  };
}
