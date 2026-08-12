export const siteConfig = {
  name: "Pratikar",
  tagline: "Cybersecurity Incident Response, Investigation & Advisory",
  description:
    "Pratikar helps organizations investigate security incidents, understand what happened, contain the damage, recover safely, and strengthen their systems against recurrence.",
  url: "https://pratikar.com",
  locale: "en_IN",
  location: {
    country: "India",
    region: "IN",
  },
  founder: {
    name: "Dr. Kaushal Bhavsar",
    title: "Cybersecurity Practitioner & Researcher",
  },
} as const;

export const navigation = [
  { label: "Incident Response", href: "/incident-response" },
  { label: "Investigations", href: "/investigations" },
  { label: "Security Advisory", href: "/services/security-advisory" },
  { label: "Expertise", href: "/expertise" },
  { label: "Training", href: "/training" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
] as const;

export const footerTraining = [
  { label: "Professional Training", href: "/training" },
  { label: "Corporate Training", href: "/training/corporate" },
] as const;

export const footerExpertise = [
  { label: "Incident Investigation", href: "/services/incident-investigation" },
  { label: "Malware Analysis", href: "/services/malware-analysis" },
  { label: "Breach Remediation", href: "/services/breach-remediation" },
  { label: "Security Architecture", href: "/services/security-architecture-review" },
  { label: "Insider Threats", href: "/services/insider-threat-investigation" },
] as const;

export const footerResources = [
  { label: "Insights", href: "/insights" },
  { label: "Research", href: "/research" },
  { label: "Incident First Steps", href: "/incident-response/first-steps" },
  { label: "Technical Case Notes", href: "/cases" },
  { label: "Careers", href: "/careers" },
  { label: "About", href: "/about" },
] as const;

export type FooterExternalLink = {
  label: string;
  href: string;
  description?: string;
};

export const footerExternal: FooterExternalLink[] = [
  {
    label: "SATARK",
    href: "https://satark.org",
    description: "Open-source initiative of Pratikar",
  },
  { label: "InfoSecQuiz", href: "https://infosecquiz.com" },
];
