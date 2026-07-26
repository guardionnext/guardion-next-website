export const SITE = {
  name: "Guardion",
  tagline: "Specialist Protection & Investigations",
  positioning: "Protection & Intelligence — end to end.",
  url: "https://guardion.com.au",
  phone: "+61 401 207 060",
  phoneHref: "tel:+61401207060",
  email: "info@guardion.com.au",
  whatsapp: "https://wa.me/61401207060",
  signal: "https://signal.me/#p/+61401207060",
  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
  },
  licences: [
    { state: "QLD", number: "[QLD Licence No.]" },
    { state: "NSW", number: "[NSW Master Licence No.]" },
    { state: "ACT", number: "[ACT Licence No.]" },
    { state: "VIC", number: "[VIC Licence No.]" },
    { state: "SA", number: "[SA Licence No.]" },
  ],
} as const;

export const SERVICES = [
  {
    slug: "close-protection",
    title: "Close Protection",
    summary: "Discreet, embedded protection for principals in daily life and high-risk moments.",
  },
  {
    slug: "executive-protection",
    title: "Executive Protection",
    summary: "Coordinated security for executives across travel, meetings and public appearances.",
  },
  {
    slug: "residential-security",
    title: "Residential Security",
    summary: "Layered protection of the home — assessment, hardening and standing guard.",
  },
  {
    slug: "security-driving",
    title: "Security Driving",
    summary: "Trained protective drivers and vetted vehicles for principals and families.",
  },
  {
    slug: "investigations",
    title: "Investigations",
    summary: "Lawful, court-admissible enquiries handled with absolute confidentiality.",
  },
  {
    slug: "tailored-security",
    title: "Tailored Security",
    summary: "Bespoke programs for events, sensitive transitions and unique threat pictures.",
  },
] as const;
