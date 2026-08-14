export const portal = {
  origin: "https://portal.pratikar.com",
  assessment: "https://portal.pratikar.com/assessment",
  auth: "https://portal.pratikar.com/auth",
} as const;

export const portalCta = {
  report: "I Need This Investigated",
  signIn: "Sign in to a case",
  existingCase: "I already have a case",
} as const;

export type PortalCategory =
  | "website_compromise"
  | "malware_ransomware"
  | "email_compromise"
  | "business_email_compromise"
  | "data_breach"
  | "insider_threat"
  | "cloud_server_compromise"
  | "social_media_compromise"
  | "financial_fraud"
  | "suspicious_activity"
  | "digital_forensics"
  | "other";

export function portalAssessment(category?: PortalCategory): string {
  if (!category) return portal.assessment;
  return `${portal.assessment}?category=${category}`;
}

const serviceCategories: Record<string, PortalCategory | undefined> = {
  "incident-investigation": undefined,
  "malware-analysis": "malware_ransomware",
  "breach-remediation": "data_breach",
  "insider-threat-investigation": "insider_threat",
  "expert-reports": "digital_forensics",
  "security-advisory": "other",
  "security-architecture-review": "other",
};

export function portalAssessmentForService(slug: string): string {
  return portalAssessment(serviceCategories[slug]);
}
