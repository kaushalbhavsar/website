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
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
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
  { label: "Incident First Steps", href: "/incident-response/first-steps" },
  { label: "Technical Case Notes", href: "/cases" },
  { label: "About", href: "/about" },
] as const;
