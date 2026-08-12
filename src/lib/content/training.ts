export type TrainingFormat = "Live" | "Workshop" | "Corporate" | "Self-paced";
export type TrainingLevel = "Foundation" | "Intermediate" | "Advanced";
export type TrainingStatus = "Open" | "Upcoming" | "On Request" | "Closed";

export type TrainingModule = {
  title: string;
  description: string;
  topics: string[];
};

export type TrainingProgram = {
  slug: string;
  title: string;
  shortTitle?: string;
  category: string;
  description: string;
  positioning: string;
  audience: string[];
  notFor: string[];
  prerequisites?: string[];
  outcomes: string[];
  modules: TrainingModule[];
  labs?: string[];
  format: TrainingFormat;
  duration?: string;
  level: TrainingLevel;
  status: TrainingStatus;
  price?: number;
  currency?: "INR" | "USD";
  priceNote?: string;
  featured?: boolean;
  relatedService?: string;
  relatedResearch?: boolean;
  faqs: { question: string; answer: string }[];
};

export type TrainingCategory = {
  slug: string;
  title: string;
  description: string;
  topics: string[];
  ctaLabel: string;
  href: string;
};

export const trainingPhilosophy = [
  {
    title: "Understand before you automate",
    description: "Tools are useful only when you understand what they are showing you.",
  },
  {
    title: "Investigate, don't just scan",
    description: "Finding an alert is different from explaining an incident.",
  },
  {
    title: "Build before you break",
    description: "Understanding applications, infrastructure and code produces better security professionals.",
  },
  {
    title: "Evidence before assumptions",
    description: "Security conclusions should be supported by observable evidence.",
  },
];

export const trainingCategories: TrainingCategory[] = [
  {
    slug: "foundations",
    title: "Cybersecurity Foundations",
    description: "For developers, IT professionals and people moving into security.",
    topics: [
      "networking for security",
      "Linux",
      "HTTP and web architecture",
      "authentication",
      "access control",
      "security fundamentals",
      "attack surfaces",
      "basic investigation",
    ],
    ctaLabel: "View Foundation Training",
    href: "/training/register-interest/",
  },
  {
    slug: "application-security",
    title: "Application & Web Security",
    description: "How web applications work, fail, and get compromised.",
    topics: [
      "how web applications actually work",
      "HTTP attacks",
      "authentication weaknesses",
      "access-control failures",
      "injection",
      "server-side vulnerabilities",
      "web shells",
      "malware on web infrastructure",
      "secure application architecture",
    ],
    ctaLabel: "Explore Application Security",
    href: "/training/practical-cybersecurity-engineering/",
  },
  {
    slug: "incident-response",
    title: "Incident Response & Investigation",
    description: "Triage, evidence, timelines and root-cause analysis.",
    topics: [
      "incident triage",
      "evidence preservation",
      "log analysis",
      "incident timelines",
      "scope determination",
      "root-cause analysis",
      "persistence",
      "compromise investigation",
      "reporting",
    ],
    ctaLabel: "Explore Incident Response Training",
    href: "/training/practical-cybersecurity-engineering/",
  },
  {
    slug: "malware-analysis",
    title: "Malware Analysis",
    description: "Behaviour, analysis techniques and investigation methodology.",
    topics: [
      "malware behaviour",
      "static analysis",
      "dynamic analysis",
      "obfuscation",
      "persistence mechanisms",
      "malicious JavaScript",
      "indicators of compromise",
      "investigation methodology",
    ],
    ctaLabel: "Explore Malware Training",
    href: "/training/register-interest/",
  },
  {
    slug: "insider-threats",
    title: "Insider Threat Investigation",
    description: "Behavioural indicators, evidence correlation and investigation methodology — grounded in Pratikar research.",
    topics: [
      "insider threat fundamentals",
      "behavioural indicators",
      "event correlation",
      "privilege misuse",
      "anomalous access",
      "evidence interpretation",
      "insider-risk models",
      "investigation methodology",
    ],
    ctaLabel: "Explore Insider Threat Training",
    href: "/training/register-interest/",
  },
  {
    slug: "security-engineering",
    title: "Security Engineering",
    description: "Architecture, controls and detection-oriented design.",
    topics: [
      "secure architecture",
      "identity and access",
      "cloud security concepts",
      "data security",
      "threat modelling",
      "security controls",
      "logging",
      "detection-oriented architecture",
    ],
    ctaLabel: "Explore Security Engineering",
    href: "/training/practical-cybersecurity-engineering/",
  },
];

export const programs: TrainingProgram[] = [
  {
    slug: "practical-cybersecurity-engineering",
    title: "Practical Cybersecurity Engineering",
    shortTitle: "Security Engineering",
    category: "Security Engineering",
    description:
      "From how systems work to how they fail — a hands-on program for professionals who want to understand security through systems, code, attacks and investigation.",
    positioning:
      "From how systems work to how they fail.",
    audience: [
      "Junior security professionals seeking deeper technical foundations",
      "Developers moving toward security engineering roles",
      "IT professionals transitioning into security",
      "SOC analysts who want to understand incidents beyond alerts",
      "Students with basic computing knowledge and willingness to do hands-on work",
    ],
    notFor: [
      "You only want certification exam preparation",
      "You want memorised interview answers without understanding",
      "You expect a guaranteed job or placement",
      "You are looking only for tool demonstrations",
      "You do not want hands-on technical work",
    ],
    prerequisites: [
      "Basic familiarity with using a computer and the command line",
      "Willingness to read logs, write scripts and investigate problems",
      "No prior security certification required",
    ],
    outcomes: [
      "Understand how operating systems, networks and web applications work from a security perspective",
      "Use Python for security automation, log parsing and analysis",
      "Recognise common attack patterns and persistence mechanisms",
      "Investigate a simulated compromise using evidence and timelines",
      "Make informed security architecture and hardening decisions",
    ],
    modules: [
      {
        title: "Module 1 — Systems",
        description: "Foundational understanding of the environments security professionals investigate.",
        topics: [
          "operating systems",
          "processes, files and permissions",
          "networking, DNS and HTTP",
          "how applications run and communicate",
        ],
      },
      {
        title: "Module 2 — Code",
        description: "Python as a tool for security work — not programming for its own sake.",
        topics: [
          "automation and parsing",
          "network interaction and APIs",
          "building simple security tooling",
          "log analysis with code",
        ],
      },
      {
        title: "Module 3 — Applications",
        description: "Web architecture, sessions, and where applications fail.",
        topics: [
          "web architecture and sessions",
          "authentication and authorization",
          "APIs and databases",
          "mapping attack surfaces",
        ],
      },
      {
        title: "Module 4 — Attacks",
        description: "How compromises happen in practice.",
        topics: [
          "common web attacks",
          "credential attacks and privilege abuse",
          "malware and persistence",
          "exploitation concepts",
        ],
      },
      {
        title: "Module 5 — Investigation",
        description: "The reasoning behind incident response.",
        topics: [
          "logs and artefacts",
          "building incident timelines",
          "scope and evidence",
          "root cause and attribution limitations",
        ],
      },
      {
        title: "Module 6 — Defence",
        description: "From understanding attacks to strengthening systems.",
        topics: [
          "hardening and security architecture",
          "monitoring and detection",
          "access control design",
          "incident readiness",
        ],
      },
      {
        title: "Final Lab — Investigation Challenge",
        description: "Something happened. Find out what.",
        topics: [
          "determine initial entry point",
          "reconstruct attacker actions",
          "identify persistence and affected resources",
          "build an incident timeline",
          "recommend remediation",
        ],
      },
    ],
    labs: [
      "Simulated compromised environment investigation",
      "Log correlation and timeline reconstruction",
      "Web application attack surface analysis",
    ],
    format: "Live",
    duration: "Multi-module program",
    level: "Intermediate",
    status: "On Request",
    priceNote: "Register interest for upcoming cohort details",
    featured: true,
    relatedService: "/services/security-architecture-review/",
    relatedResearch: true,
    faqs: [
      {
        question: "Is this a placement program?",
        answer: "No. This program focuses on building genuine technical understanding. We do not guarantee jobs or placements.",
      },
      {
        question: "Do I need to know programming?",
        answer: "Basic computing familiarity is sufficient. Module 2 introduces Python as a security tool — prior programming experience helps but is not required.",
      },
      {
        question: "When is the next cohort?",
        answer: "Cohort dates are announced when confirmed. Register interest to be notified when enrollment opens.",
      },
      {
        question: "Is this available for corporate teams?",
        answer: "Yes. Modules can be adapted for corporate workshops. See corporate training for details.",
      },
    ],
  },
];

export function getProgramBySlug(slug: string): TrainingProgram | undefined {
  return programs.find((p) => p.slug === slug);
}

export function getFeaturedProgram(): TrainingProgram | undefined {
  return programs.find((p) => p.featured);
}

/** Map insight categories to training bridge content */
export function getTrainingBridgeForCategory(category: string): {
  show: boolean;
  message: string;
  href: string;
} | null {
  const bridges: Record<string, { message: string; href: string }> = {
    "Incident Response": {
      message: "Want to learn this through practical investigation?",
      href: "/training/",
    },
    Malware: {
      message: "Want to learn malware investigation through hands-on training?",
      href: "/training/",
    },
    "Insider Threats": {
      message: "Explore insider threat investigation training grounded in research.",
      href: "/training/",
    },
    Investigations: {
      message: "Want to learn investigation methodology through practical training?",
      href: "/training/practical-cybersecurity-engineering/",
    },
    "Security Architecture": {
      message: "Learn security engineering through systems, evidence and practical labs.",
      href: "/training/practical-cybersecurity-engineering/",
    },
  };
  const bridge = bridges[category];
  if (!bridge) return null;
  return { show: true, ...bridge };
}

export const corporateOfferings = [
  {
    title: "Secure Development",
    description: "For software engineering teams — understanding attack surfaces, secure design and common failure patterns in code.",
  },
  {
    title: "Incident Readiness",
    description: "For security and IT teams — evidence preservation, triage, scoping and coordinated response.",
  },
  {
    title: "Security for Engineering Teams",
    description: "Security concepts for backend, cloud and platform engineers who build and operate systems.",
  },
  {
    title: "Malware & Compromise Investigation",
    description: "For security operations teams — analysing compromises beyond alert triage.",
  },
  {
    title: "Insider Threat Investigation",
    description: "For security, risk and investigation teams — behavioural signals, evidence correlation and methodology.",
  },
  {
    title: "Custom Workshops",
    description: "Training built around your technology stack, architecture, team maturity and specific requirements.",
  },
];

export const instructorCredentials = [
  "Cybersecurity practitioner since 2009",
  "Malware and web security investigation experience",
  "Insider-threat research and PhD in behavioral analysis for threat prediction",
  "Published peer-reviewed research on insider threats and malware techniques",
  "US patent for malware detection systems (2025)",
  "SATARK open-source security analytics framework",
  "Practical incident investigation and security architecture advisory",
];
