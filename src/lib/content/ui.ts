// Shared UI-chrome copy (header, footer, contact band, service-page labels)
// for every locale, plus a locale-aware accessor for the SERVICES list.
//
// English values MUST stay byte-identical to what the pages render today so the
// English site is unchanged. zh-Hans holds the Simplified Chinese translations.

import type { Locale } from "@/lib/i18n";
import { SERVICES } from "@/lib/site";

export type UIStrings = {
  header: {
    services: string;
    overview: string;
    allServicesArrow: string; // rendered as `{allServices} →` — English: "All services"
    consultation: string;
    hr24: string;
    openMenu: string;
    closeMenu: string;
    allServices: string;
  };
  nav: { globalReach: string; about: string; ourWork: string; blog: string; contact: string };
  footer: {
    tagline: string; // English matches SITE.tagline exactly
    blurb: string;
    servicesHeading: string;
    firmHeading: string;
    contactHeading: string;
    licensingHeading: string;
    response24: string;
    rights: string;
    tradingAs: string;
    legalNote: string;
    veteranAlt: string;
    links: {
      about: string;
      globalReach: string;
      ourWork: string;
      blog: string;
      contact: string;
      privacy: string;
      terms: string;
    };
  };
  contactBand: {
    eyebrow: string;
    heading: string;
    body: string;
    consultation: string;
    hr24: string;
    directChannels: string;
    discretionNote: string;
  };
  service: {
    home: string;
    breadcrumbServices: string;
    covers: string;
    howWeWork: string;
    defaultHowHeading: string;
    step: string; // rendered `{step} 0{n}` — English: "Step"
    whoItsFor: string;
    defaultWhoHeading: string;
    anonymisedExample: string;
    relatedCapabilities: string;
    relatedHeading: string;
    allServices: string;
    readMore: string;
  };
  /** Service title + summary keyed by slug. */
  services: Record<
    (typeof SERVICES)[number]["slug"],
    { title: string; summary: string }
  >;
};

export const ui: Record<Locale, UIStrings> = {
  en: {
    header: {
      services: "Services",
      overview: "Overview",
      allServicesArrow: "All services",
      consultation: "Confidential Consultation",
      hr24: "24hr",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      allServices: "All services",
    },
    nav: {
      globalReach: "Global Reach",
      about: "About",
      ourWork: "Our Work",
      blog: "Blog",
      contact: "Contact",
    },
    footer: {
      tagline: "Specialist Protection & Investigations",
      blurb:
        "An Australian firm providing close protection and private investigations for individuals and organisations, at home and abroad.",
      servicesHeading: "Services",
      firmHeading: "Firm",
      contactHeading: "Contact",
      licensingHeading: "Licensing",
      response24: "24 hour response",
      rights: "All rights reserved.",
      tradingAs: "Trading as Guardion · ABN",
      legalNote:
        "Guardion operates in accordance with Australian security industry law. International engagements are coordinated through vetted local partners, within local jurisdiction.",
      veteranAlt: "Australian Veteran Owned Business",
      links: {
        about: "About",
        globalReach: "Global Reach",
        ourWork: "Our Work",
        blog: "Blog",
        contact: "Contact",
        privacy: "Privacy",
        terms: "Terms",
      },
    },
    contactBand: {
      eyebrow: "Speak with us",
      heading: "A quiet conversation. Nothing on the record.",
      body: "Every enquiry is handled by a principal of the firm. Share as much or as little as you wish — we will listen first, then advise.",
      consultation: "Confidential Consultation",
      hr24: "24hr",
      directChannels: "Direct channels",
      discretionNote:
        "Communications are handled discreetly. We do not disclose client identities, itineraries or engagements — before, during or after an assignment.",
    },
    service: {
      home: "Home",
      breadcrumbServices: "Services",
      covers: "What it covers",
      howWeWork: "How we work",
      defaultHowHeading: "A rehearsed, unhurried process.",
      step: "Step",
      whoItsFor: "Who it's for",
      defaultWhoHeading: "Fitted to the principal, not the brochure.",
      anonymisedExample: "Anonymised example",
      relatedCapabilities: "Related capabilities",
      relatedHeading: "Often engaged alongside this service.",
      allServices: "All services",
      readMore: "Read more",
    },
    services: {
      "close-protection": {
        title: "Close Protection",
        summary:
          "Discreet, embedded protection for principals in daily life and high-risk moments.",
      },
      "executive-protection": {
        title: "Executive Protection",
        summary:
          "Coordinated security for executives across travel, meetings and public appearances.",
      },
      "residential-security": {
        title: "Residential Security",
        summary:
          "Layered protection of the home — assessment, hardening and standing guard.",
      },
      "security-driving": {
        title: "Security Driving",
        summary:
          "Trained protective drivers and vetted vehicles for principals and families.",
      },
      investigations: {
        title: "Investigations",
        summary:
          "Lawful, court-admissible enquiries handled with absolute confidentiality.",
      },
      "tailored-security": {
        title: "Tailored Security",
        summary:
          "Bespoke programs for events, sensitive transitions and unique threat pictures.",
      },
    },
  },

  "zh-Hans": {
    header: {
      services: "服务",
      overview: "概览",
      allServicesArrow: "全部服务",
      consultation: "保密咨询",
      hr24: "24小时",
      openMenu: "打开菜单",
      closeMenu: "关闭菜单",
      allServices: "全部服务",
    },
    nav: {
      globalReach: "全球覆盖",
      about: "关于我们",
      ourWork: "工作案例",
      blog: "博客",
      contact: "联系我们",
    },
    footer: {
      tagline: "专业保护与调查",
      blurb:
        "一家澳大利亚公司，为个人与机构提供贴身护卫及私人调查服务，业务遍及国内与海外。",
      servicesHeading: "服务",
      firmHeading: "公司",
      contactHeading: "联系",
      licensingHeading: "牌照资质",
      response24: "24 小时响应",
      rights: "保留所有权利。",
      tradingAs: "以 Guardion 名义经营 · ABN",
      legalNote:
        "Guardion 依照澳大利亚安保行业法律运营。国际业务通过经严格甄选的当地合作伙伴，在当地司法管辖范围内统筹开展。",
      veteranAlt: "澳大利亚退伍军人所有企业",
      links: {
        about: "关于我们",
        globalReach: "全球覆盖",
        ourWork: "工作案例",
        blog: "博客",
        contact: "联系我们",
        privacy: "隐私政策",
        terms: "服务条款",
      },
    },
    contactBand: {
      eyebrow: "与我们联系",
      heading: "一次私密的交谈，不留任何记录。",
      body: "每一项咨询都由公司负责人亲自处理。您可以自行决定透露多少——我们会先倾听，再提出建议。",
      consultation: "保密咨询",
      hr24: "24小时",
      directChannels: "直接联系方式",
      discretionNote:
        "所有沟通均以谨慎方式处理。无论在任务之前、之中还是之后，我们都不会透露客户身份、行程或委托详情。",
    },
    service: {
      home: "首页",
      breadcrumbServices: "服务",
      covers: "服务内容",
      howWeWork: "我们如何工作",
      defaultHowHeading: "一套经过演练、从容不迫的流程。",
      step: "步骤",
      whoItsFor: "适合谁",
      defaultWhoHeading: "因人而定，而非照本宣科。",
      anonymisedExample: "匿名案例",
      relatedCapabilities: "相关服务",
      relatedHeading: "常与本服务一同委托。",
      allServices: "全部服务",
      readMore: "了解更多",
    },
    services: {
      "close-protection": {
        title: "贴身护卫",
        summary: "在日常生活与高风险时刻，为要客提供谨慎、贴身的保护。",
      },
      "executive-protection": {
        title: "高管保护",
        summary: "在差旅、会议与公开露面等场合，为高管提供统筹协调的安保。",
      },
      "residential-security": {
        title: "住宅安保",
        summary: "对住所的多层次保护——评估、加固与驻守。",
      },
      "security-driving": {
        title: "安保驾驶",
        summary: "为要客及其家人提供受训的防卫驾驶员与经审核的车辆。",
      },
      investigations: {
        title: "调查",
        summary: "合法、可用于法庭的调查，全程严格保密。",
      },
      "tailored-security": {
        title: "定制安保",
        summary: "为活动、敏感过渡期与特殊威胁情形量身定制的方案。",
      },
    },
  },
};

/** UI chrome strings for a locale. */
export function getUI(locale: Locale): UIStrings {
  return ui[locale];
}

/**
 * SERVICES list localized for a locale — same slugs/order as lib/site.ts, with
 * title/summary swapped for the locale's copy. Use this instead of importing
 * SERVICES directly wherever titles/summaries are shown.
 */
export function getServices(locale: Locale) {
  return SERVICES.map((s) => ({
    slug: s.slug,
    title: ui[locale].services[s.slug].title,
    summary: ui[locale].services[s.slug].summary,
  }));
}
