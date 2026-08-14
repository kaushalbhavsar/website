export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  heroDescription: string;
  linkLabel: string;
  situations: string[];
  investigates: string[];
  methodology: { title: string; description: string }[];
  deliverables: string[];
  faqs: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "incident-investigation",
    title: "Cyber Incident Investigation",
    shortTitle: "Incident Investigation",
    description:
      "Determine what happened, how access was obtained, what systems were affected and whether the attacker maintained persistence.",
    heroDescription:
      "When a security incident occurs, understanding the full scope requires systematic investigation across systems, identities, and infrastructure — not assumptions.",
    linkLabel: "Explore Incident Investigation",
    situations: [
      "Suspected unauthorized access to systems or accounts",
      "Unusual network activity or outbound connections",
      "Reports of compromised credentials or data exposure",
      "Security alerts indicating potential breach activity",
      "Unexplained changes to system configuration or files",
      "Ransomware or extortion-related incidents requiring scope assessment",
    ],
    investigates: [
      "Entry points and initial access vectors",
      "Affected systems, accounts, and data",
      "Attacker activity timeline and lateral movement",
      "Persistence mechanisms and backdoors",
      "Data access and potential exfiltration",
      "Scope of compromise across the environment",
    ],
    methodology: [
      { title: "Scope", description: "Identify potentially affected users, systems, and infrastructure." },
      { title: "Evidence", description: "Collect logs, artefacts, and technical indicators from relevant sources." },
      { title: "Timeline", description: "Reconstruct the sequence of events across systems and identities." },
      { title: "Root Cause", description: "Determine how the incident occurred and what weaknesses were exploited." },
      { title: "Remediation", description: "Guide containment and removal of attacker access and persistence." },
    ],
    deliverables: [
      "Incident timeline and scope assessment",
      "Technical findings report",
      "Root cause analysis",
      "Remediation recommendations",
      "Evidence preservation guidance",
    ],
    faqs: [
      {
        question: "How quickly can an investigation begin?",
        answer: "For active incidents, initial scoping can typically begin once access to relevant systems and logs is established. The priority is preserving evidence while understanding scope.",
      },
      {
        question: "Do you work with our existing security team?",
        answer: "Yes. Pratikar provides independent investigation expertise that complements internal teams, MSSPs, and legal counsel.",
      },
      {
        question: "What if the incident is still active?",
        answer: "Active incidents require careful balance between containment and evidence preservation. We guide decisions to minimize further damage while maintaining investigability.",
      },
    ],
  },
  {
    slug: "breach-remediation",
    title: "Breach & Malware Remediation",
    shortTitle: "Breach Remediation",
    description:
      "Identify malicious components, remove persistence mechanisms and help restore affected environments securely.",
    heroDescription:
      "Remediation must address both the immediate threat and the conditions that allowed it. Cleaning without understanding leaves the environment vulnerable to recurrence.",
    linkLabel: "Explore Breach Remediation",
    situations: [
      "Confirmed malware infection on servers or endpoints",
      "Compromised web applications serving malicious content",
      "Web shells or backdoors discovered on infrastructure",
      "Post-investigation remediation following a breach",
      "Persistent threat requiring thorough environment cleanup",
      "Cloud environment compromise requiring secure restoration",
    ],
    investigates: [
      "Malicious files, scripts, and executables",
      "Persistence mechanisms across systems",
      "Modified configurations and unauthorized accounts",
      "Compromised credentials requiring rotation",
      "Network-level indicators of compromise",
      "Related systems that may share the same compromise",
    ],
    methodology: [
      { title: "Identify", description: "Locate all malicious components and persistence mechanisms." },
      { title: "Contain", description: "Isolate affected systems to prevent further spread." },
      { title: "Remove", description: "Eliminate malicious code, accounts, and configurations." },
      { title: "Verify", description: "Confirm remediation completeness through technical validation." },
      { title: "Strengthen", description: "Address weaknesses that enabled the compromise." },
    ],
    deliverables: [
      "Remediation plan and execution guidance",
      "Verification of malicious component removal",
      "Credential rotation recommendations",
      "Hardening recommendations",
      "Post-remediation validation report",
    ],
    faqs: [
      {
        question: "Should we reinstall affected systems?",
        answer: "Reinstallation may be appropriate after evidence preservation. The decision depends on incident scope, system criticality, and whether sufficient evidence has been collected.",
      },
      {
        question: "How do we know remediation is complete?",
        answer: "Complete remediation requires verifying that all identified malicious components are removed, persistence mechanisms are eliminated, and related systems have been assessed.",
      },
    ],
  },
  {
    slug: "malware-analysis",
    title: "Technical Investigation & Malware Analysis",
    shortTitle: "Malware Analysis",
    description:
      "Analyse logs, infrastructure, suspicious activity and technical evidence to reconstruct security events.",
    heroDescription:
      "Malware is often evidence of a broader incident. Analysis reveals what the malicious code does, how it arrived, and what it indicates about attacker intent.",
    linkLabel: "Explore Investigations",
    situations: [
      "Unknown executables or scripts discovered on systems",
      "Suspicious email attachments or download links",
      "Web application serving unexpected content",
      "Endpoint alerts indicating potential malware",
      "Need to understand malware capabilities and intent",
      "Legal or investigative requirement for technical analysis",
    ],
    investigates: [
      "Malicious code behaviour and capabilities",
      "Delivery mechanisms and infection vectors",
      "Command-and-control communication patterns",
      "Data collection and exfiltration methods",
      "Persistence and propagation techniques",
      "Indicators of compromise for broader detection",
    ],
    methodology: [
      { title: "Acquire", description: "Safely collect suspicious files and related artefacts." },
      { title: "Analyse", description: "Examine code behaviour, network activity, and system modifications." },
      { title: "Correlate", description: "Connect malware findings to broader incident evidence." },
      { title: "Report", description: "Document findings in clear, actionable technical language." },
    ],
    deliverables: [
      "Malware analysis report",
      "Indicators of compromise (IOCs)",
      "Behavioural analysis summary",
      "Recommendations for detection and prevention",
      "Technical documentation for legal or investigative use",
    ],
    faqs: [
      {
        question: "Can you analyse malware samples we provide?",
        answer: "Yes. Submit samples through the restricted case workspace in the Incident Response Portal after starting an assessment. Do not email malware samples or upload them to public pages.",
      },
      {
        question: "Is malware always the primary incident?",
        answer: "No. Malware is frequently evidence that reveals a broader compromise involving credentials, access abuse, or infrastructure weaknesses.",
      },
    ],
  },
  {
    slug: "security-architecture-review",
    title: "Security Architecture Review",
    shortTitle: "Security Architecture",
    description:
      "Review systems, applications, cloud architecture, data flows and access controls to identify weaknesses before they become incidents.",
    heroDescription:
      "Security architecture decisions made today determine how effectively incidents can be detected, investigated, and contained tomorrow.",
    linkLabel: "Explore Architecture Review",
    situations: [
      "Pre-deployment security assessment of new systems",
      "Post-incident architecture hardening",
      "Cloud migration security review",
      "Sensitive data handling architecture assessment",
      "Access control and identity architecture review",
      "Technical second opinion on security design decisions",
    ],
    investigates: [
      "Network segmentation and trust boundaries",
      "Identity and access management design",
      "Data flow paths and storage security",
      "Logging and monitoring coverage",
      "Application attack surface",
      "Cloud infrastructure security configuration",
    ],
    methodology: [
      { title: "Understand", description: "Map systems, data flows, and trust boundaries." },
      { title: "Assess", description: "Evaluate controls against threats and investigation requirements." },
      { title: "Identify", description: "Document weaknesses and architectural risks." },
      { title: "Recommend", description: "Provide actionable improvements prioritized by risk." },
    ],
    deliverables: [
      "Architecture assessment report",
      "Risk-prioritized findings",
      "Control improvement recommendations",
      "Logging and monitoring gap analysis",
      "Security design guidance",
    ],
    faqs: [
      {
        question: "Is this a compliance audit?",
        answer: "No. This is a technical security architecture review focused on identifying weaknesses that could lead to or complicate security incidents.",
      },
      {
        question: "Can this review happen before an incident?",
        answer: "Yes. Proactive architecture review is often the most effective way to prevent incidents and ensure investigability when they occur.",
      },
    ],
  },
  {
    slug: "expert-reports",
    title: "Expert Technical Reports",
    shortTitle: "Expert Reports",
    description:
      "Convert complex security findings into clear technical documentation suitable for stakeholders, investigators or legal professionals.",
    heroDescription:
      "Technical findings must be communicated clearly to audiences with varying expertise. Expert reports bridge the gap between investigation evidence and decision-making.",
    linkLabel: "Explore Expert Reports",
    situations: [
      "Legal proceedings requiring technical expert documentation",
      "Regulatory reporting following a security incident",
      "Board or executive briefing on incident findings",
      "Insurance claim documentation for cyber incidents",
      "Law enforcement technical support and reporting",
      "Dispute resolution requiring independent technical opinion",
    ],
    investigates: [
      "Technical evidence interpretation",
      "Incident timeline reconstruction",
      "Root cause determination",
      "Impact assessment and scope documentation",
      "Control failure analysis",
      "Remediation adequacy evaluation",
    ],
    methodology: [
      { title: "Review", description: "Examine available technical evidence and investigation findings." },
      { title: "Analyse", description: "Apply technical expertise to interpret evidence objectively." },
      { title: "Document", description: "Produce clear, structured reports for the intended audience." },
      { title: "Support", description: "Provide technical consultation throughout the process." },
    ],
    deliverables: [
      "Expert technical report",
      "Incident timeline documentation",
      "Evidence summary and interpretation",
      "Technical consultation and briefing",
      "Supplementary documentation as required",
    ],
    faqs: [
      {
        question: "Can reports be used in legal proceedings?",
        answer: "Reports are prepared with clarity and objectivity suitable for legal and investigative contexts. Specific legal requirements should be discussed during engagement.",
      },
      {
        question: "Do you provide testimony?",
        answer: "Technical consultation and report preparation are core services. Specific testimony requirements can be discussed based on the case context.",
      },
    ],
  },
  {
    slug: "security-advisory",
    title: "Independent Security Advisory",
    shortTitle: "Security Advisory",
    description:
      "Provide independent technical guidance for difficult cybersecurity decisions, investigations and security architecture questions.",
    heroDescription:
      "Independent advice should be driven by the technical situation — not by products that need to be sold or vendor relationships that need to be maintained.",
    linkLabel: "Explore Advisory",
    situations: [
      "Second opinion on security architecture decisions",
      "Evaluation of vendor security proposals",
      "Guidance on incident response planning",
      "Technical consultation during active investigations",
      "Security strategy for sensitive projects",
      "Independent assessment of security team findings",
    ],
    investigates: [
      "Security design and architecture decisions",
      "Incident response approach and priorities",
      "Technology selection and configuration",
      "Risk assessment and prioritization",
      "Investigation scope and methodology",
      "Remediation strategy and sequencing",
    ],
    methodology: [
      { title: "Listen", description: "Understand the technical context and decision requirements." },
      { title: "Analyse", description: "Apply independent technical expertise to the situation." },
      { title: "Advise", description: "Provide clear, actionable guidance without vendor bias." },
      { title: "Support", description: "Remain available for follow-up consultation as needed." },
    ],
    deliverables: [
      "Advisory consultation sessions",
      "Written recommendations and analysis",
      "Architecture and design guidance",
      "Incident response planning support",
      "Ongoing technical consultation as needed",
    ],
    faqs: [
      {
        question: "How is advisory different from managed services?",
        answer: "Advisory provides independent expert guidance. Pratikar does not sell or manage security products — advice is based solely on technical merit.",
      },
      {
        question: "Can advisory support ongoing incidents?",
        answer: "Yes. Advisory can provide independent technical guidance during active incidents, complementing internal teams and other responders.",
      },
    ],
  },
  {
    slug: "insider-threat-investigation",
    title: "Insider Threat Investigation",
    shortTitle: "Insider Threats",
    description:
      "Investigate suspicious internal activity, privilege misuse, and data access patterns with evidence-based methodology.",
    heroDescription:
      "Insider threat investigations require correlating technical evidence with behavioural context — while preserving fairness and investigation integrity.",
    linkLabel: "Explore Insider Threat Investigation",
    situations: [
      "Suspicious data access or download activity",
      "Unauthorized use of privileged accounts",
      "Reports of potential intellectual property theft",
      "Anomalous behaviour preceding employee departure",
      "Policy violations involving sensitive data",
      "Need for independent assessment of internal security concerns",
    ],
    investigates: [
      "Access patterns and authentication behaviour",
      "Data movement and exfiltration indicators",
      "Privilege usage and escalation events",
      "Communication and collaboration platform activity",
      "Device and endpoint usage patterns",
      "Correlation of technical and behavioural signals",
    ],
    methodology: [
      { title: "Scope", description: "Define investigation boundaries and relevant timeframes." },
      { title: "Preserve", description: "Collect logs and evidence before any confrontation." },
      { title: "Analyse", description: "Correlate access, data movement, and behavioural signals." },
      { title: "Report", description: "Document findings objectively for appropriate stakeholders." },
    ],
    deliverables: [
      "Investigation findings report",
      "Access and activity timeline",
      "Data movement analysis",
      "Evidence summary",
      "Recommendations for controls and monitoring",
    ],
    faqs: [
      {
        question: "Should we confront the employee first?",
        answer: "Premature confrontation can affect evidence, behaviour, and investigation integrity. Evidence should be preserved and analysed before confrontation decisions.",
      },
      {
        question: "What legal considerations apply?",
        answer: "Insider threat investigations intersect with employment law and privacy requirements. Legal counsel should be involved alongside technical investigation.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
