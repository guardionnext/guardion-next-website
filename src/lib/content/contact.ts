// Contact page + enquiry form copy. English is the single source of truth;
// Simplified Chinese is auto-placeholdered until a real `zhHans` object is set.

import type { Metadata } from "next";
import { type Locale, localePath, alternatesFor } from "@/lib/i18n";
import { placeholderize } from "./placeholder";

export type ContactContent = {
  hero: { eyebrow: string; h1: string; body: string };
  aside: {
    eyebrow: string;
    intro: string;
    phoneLabel: string;
    wechatBody: string;
    expectEyebrow: string;
    expectItems: string[];
  };
  form: {
    eyebrow: string;
    heading: string;
    intro: string;
    success: { title: string; body: string };
    labels: { name: string; email: string; phone: string; service: string; location: string; message: string };
    required: string;
    placeholders: {
      name: string;
      email: string;
      phone: string;
      service: string;
      location: string;
      message: string;
    };
    serviceAria: string;
    errors: { name: string; email: string; phone: string; service: string; message: string };
    submitErrorGeneric: string;
    submitErrorNetwork: string;
    privacyNote: string;
    submit: string;
    submitting: string;
  };
};

const en: ContactContent = {
  hero: {
    eyebrow: "Contact",
    h1: "Request a confidential consultation.",
    body: "Speak with a principal of the firm directly. Whether you are assessing a risk, planning travel, or responding to an immediate concern, we will listen first, then advise.",
  },
  aside: {
    eyebrow: "Direct channels",
    intro:
      "If you prefer to speak now, use the options below. All communications are handled with the same discretion as a formal engagement.",
    phoneLabel: "24-hour phone",
    wechatBody:
      "Preferred by many of our Greater China clients. Add us on WeChat for a discreet conversation — Mandarin- and Cantonese-speaking coordination is available.",
    expectEyebrow: "What to expect",
    expectItems: [
      "A direct conversation with a principal — no sales team, no call centre.",
      "Honest scoping: we recommend only what the situation requires.",
      "Strict confidentiality from the first message onward.",
    ],
  },
  form: {
    eyebrow: "Enquiry form",
    heading: "Send a confidential enquiry.",
    intro:
      "Tell us briefly what you need. A principal of the firm will respond directly, usually within one business day. Every enquiry is handled in strict confidence.",
    success: {
      title: "Thank you. We will be in touch shortly.",
      body: "Your enquiry has been sent. A principal of the firm will respond directly, usually within one business day. To reach us sooner, please call or message directly.",
    },
    labels: {
      name: "Name",
      email: "Email",
      phone: "Phone",
      service: "Service",
      location: "Location / country of operation",
      message: "Message",
    },
    required: "(required)",
    placeholders: {
      name: "Your full name",
      email: "you@example.com",
      phone: "+61 ...",
      service: "Select a service",
      location: "e.g. Sydney, Melbourne, London, Singapore",
      message: "Describe your situation briefly, including any known risks, dates or locations.",
    },
    serviceAria: "Service of interest",
    errors: {
      name: "Please enter your name.",
      email: "Please enter a valid email address.",
      phone: "Please enter a phone number.",
      service: "Please select a service.",
      message: "Please enter a brief message.",
    },
    submitErrorGeneric:
      "Something went wrong sending your enquiry. Please try again, or call us directly.",
    submitErrorNetwork:
      "We couldn't reach the server. Please check your connection and try again, or call us directly.",
    privacyNote:
      "Your enquiry is handled discreetly and in confidence. We do not share identifying details, and we respond only to the channels you provide.",
    submit: "Send enquiry",
    submitting: "Sending…",
  },
};

const zhHans: ContactContent = {
  hero: {
    eyebrow: "联系我们",
    h1: "预约一次保密咨询。",
    body: "直接与公司负责人交谈。无论您是在评估风险、筹划出行，还是应对眼前的担忧，我们都会先倾听，再提出建议。",
  },
  aside: {
    eyebrow: "直接联系方式",
    intro:
      "如果您希望现在就沟通，可使用以下方式。所有沟通都会以与正式委托同等的谨慎加以处理。",
    phoneLabel: "24 小时电话",
    wechatBody:
      "我们许多大中华地区的客户都更青睐这种方式。添加我们的微信，即可展开一次谨慎的交谈——并可提供普通话与粤语协调。",
    expectEyebrow: "您可以期待什么",
    expectItems: [
      "与负责人的直接交谈——没有销售团队，也没有呼叫中心。",
      "如实界定范围：我们只建议情形真正需要的。",
      "从第一条消息起即严格保密。",
    ],
  },
  form: {
    eyebrow: "咨询表单",
    heading: "发送一份保密咨询。",
    intro:
      "简要告诉我们您的需求。公司负责人会亲自回复，通常在一个工作日内。每一项咨询都严格保密处理。",
    success: {
      title: "谢谢。我们很快会与您联系。",
      body: "您的咨询已发送。公司负责人会亲自回复，通常在一个工作日内。如需更快联系我们，请直接致电或发送消息。",
    },
    labels: {
      name: "姓名",
      email: "电子邮箱",
      phone: "电话",
      service: "服务",
      location: "地点 / 业务所在国家",
      message: "留言",
    },
    required: "（必填）",
    placeholders: {
      name: "您的全名",
      email: "you@example.com",
      phone: "+61 ...",
      service: "请选择服务",
      location: "例如：悉尼、墨尔本、伦敦、新加坡",
      message: "简要描述您的情况，包括任何已知的风险、日期或地点。",
    },
    serviceAria: "感兴趣的服务",
    errors: {
      name: "请输入您的姓名。",
      email: "请输入有效的电子邮箱地址。",
      phone: "请输入电话号码。",
      service: "请选择一项服务。",
      message: "请输入简要留言。",
    },
    submitErrorGeneric: "发送咨询时出现问题。请重试，或直接致电我们。",
    submitErrorNetwork: "我们无法连接到服务器。请检查您的网络后重试，或直接致电我们。",
    privacyNote:
      "您的咨询将以谨慎、保密的方式处理。我们不会分享任何可识别身份的信息，且仅通过您提供的方式回复。",
    submit: "发送咨询",
    submitting: "发送中…",
  },
};

export function getContactContent(locale: Locale): ContactContent {
  if (locale === "en") return en;
  return zhHans ?? placeholderize(en);
}

const enMeta = {
  title: "Contact — Request a Confidential Consultation | Guardion",
  description:
    "Request a confidential consultation with Guardion for close protection, executive protection, investigations and security driving. Discreet, 24-hour response.",
  ogTitle: "Contact Guardion — Request a Confidential Consultation",
  ogDescription:
    "Speak directly with a principal of the firm. Phone, email, WhatsApp, Signal or a secure enquiry form.",
};

const zhMeta = {
  title: "联系我们 — 预约保密咨询 | Guardion",
  description:
    "就贴身护卫、高管保护、调查与安保驾驶，向 Guardion 预约一次保密咨询。谨慎，24 小时响应。",
  ogTitle: "联系 Guardion — 预约保密咨询",
  ogDescription:
    "直接与公司负责人交谈。电话、电子邮箱、WhatsApp、Signal 或安全咨询表单。",
};

export function buildContactMetadata(locale: Locale): Metadata {
  const m = locale === "en" ? enMeta : zhMeta;
  return {
    title: m.title,
    description: m.description,
    alternates: alternatesFor(locale, "/contact"),
    openGraph: {
      title: m.ogTitle,
      description: m.ogDescription,
      url: localePath(locale, "/contact"),
      siteName: "Guardion",
      type: "website",
    },
  };
}
