export type CaseNote = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  status: "hypothetical" | "verified";
};

export const caseNotes: CaseNote[] = [
  {
    slug: "compromised-web-application",
    title: "Compromised Web Application",
    category: "Web Security",
    summary:
      "A web application began serving unexpected content. Investigation revealed a web shell, credential theft, and lateral movement to internal systems — not merely a defacement.",
    status: "hypothetical",
  },
  {
    slug: "credential-abuse-investigation",
    title: "Credential Abuse Investigation",
    category: "Identity & Access",
    summary:
      "Unusual login patterns from multiple geographic locations suggested account compromise. Timeline reconstruction connected the activity to a phishing campaign weeks earlier.",
    status: "hypothetical",
  },
  {
    slug: "malware-persistence-investigation",
    title: "Malware Persistence Investigation",
    category: "Malware",
    summary:
      "Endpoint alerts flagged suspicious executables. Analysis revealed scheduled task persistence, command-and-control communication, and evidence of data staging.",
    status: "hypothetical",
  },
  {
    slug: "suspicious-administrative-access",
    title: "Suspicious Administrative Access",
    category: "Incident Response",
    summary:
      "Administrative actions on cloud infrastructure did not match normal operational patterns. Investigation traced access to a compromised service account with excessive permissions.",
    status: "hypothetical",
  },
  {
    slug: "sensitive-data-exposure-investigation",
    title: "Sensitive Data Exposure Investigation",
    category: "Data Security",
    summary:
      "A misconfigured cloud storage bucket exposed internal documents. Scope assessment determined what data was accessible, for how long, and whether unauthorized access occurred.",
    status: "hypothetical",
  },
  {
    slug: "insider-threat-investigation",
    title: "Insider Threat Investigation",
    category: "Insider Threats",
    summary:
      "Unusual data access patterns preceded an employee's departure. Log correlation revealed systematic access to sensitive repositories outside normal role requirements.",
    status: "hypothetical",
  },
];

export const fieldNotes = [
  "A malware infection is not necessarily the incident. It may only be the evidence that reveals one.",
  "Removing malicious code answers \"how do we clean this?\" Investigation answers \"how did this happen?\"",
  "The first password reset after a breach may destroy the evidence needed to understand how credentials were compromised.",
  "Log retention policies shorter than your mean time to detect incidents guarantee investigation blind spots.",
  "A web shell on a server often indicates broader compromise — not an isolated defacement.",
];
