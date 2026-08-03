export const SITE = {
  name: "Guardion",
  legalName: "Specialist Protection & Investigations Pty Ltd",
  abn: "74 683 697 716",
  tagline: "Specialist Protection & Investigations",
  positioning: "Protection & Intelligence — end to end.",
  url: "https://guardion.com.au",
  phone: "+61 401 207 060",
  phoneHref: "tel:+61401207060",
  email: "info@guardion.com.au",
  whatsapp: "https://wa.me/61401207060",
  signal: "https://signal.me/#p/+61401207060",
  // Guardion's WeChat ID, for Chinese-speaking / Greater China clients who
  // prefer WeChat over WhatsApp/Signal. Optionally add a QR image at
  // /public/wechat-qr.webp for easier scanning.
  wechat: "wxid_qi58zj7r4r4722",
  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
  },
  licences: [
    { state: "QLD", number: "4917079" },
    { state: "NSW", number: "000110700" },
    { state: "ACT", number: "00797474" },
    { state: "VIC", number: "987-047-60S" }, // TODO: temporary placeholder — replace with Guardion's VIC business licence once issued
    { state: "SA", number: "ISL 351789" },
  ],
} as const;

export const SERVICES = [
  {
    slug: "close-protection",
    title: "Close Protection",
    summary:
      "Discreet, embedded protection for principals in daily life and high-risk moments.",
  },
  {
    slug: "executive-protection",
    title: "Executive Protection",
    summary:
      "Coordinated security for executives across travel, meetings and public appearances.",
  },
  {
    slug: "residential-security",
    title: "Residential Security",
    summary:
      "Layered protection of the home — assessment, hardening and standing guard.",
  },
  {
    slug: "security-driving",
    title: "Security Driving",
    summary:
      "Trained protective drivers and vetted vehicles for principals and families.",
  },
  {
    slug: "investigations",
    title: "Investigations",
    summary:
      "Lawful, court-admissible enquiries handled with absolute confidentiality.",
  },
  {
    slug: "tailored-security",
    title: "Tailored Security",
    summary:
      "Bespoke programs for events, sensitive transitions and unique threat pictures.",
  },
] as const;
