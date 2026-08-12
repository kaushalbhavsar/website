export type Article = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  publishedAt: string;
  readingTime: number;
  content: string;
};

export const articleCategories = [
  "Incident Response",
  "Malware",
  "Insider Threats",
  "Security Architecture",
  "Investigations",
  "Data Security",
  "Cybersecurity Engineering",
] as const;

export const articles: Article[] = [
  {
    slug: "what-to-preserve-after-discovering-a-security-breach",
    title: "What to Preserve After Discovering a Security Breach",
    category: "Incident Response",
    summary:
      "The first hours after discovering a breach determine how much evidence survives. Learn which logs, artefacts and records matter most before remediation begins.",
    publishedAt: "2026-01-15",
    readingTime: 8,
    content: `When a security breach is discovered, the instinct to reset passwords, reinstall systems and delete suspicious files is understandable. These actions often destroy the evidence required to understand how the incident occurred.

## Authentication and access logs

Preserve authentication logs from identity providers, VPN gateways, and application login systems. These records reveal when accounts were accessed, from where, and whether access patterns changed before the incident was detected.

## Application and infrastructure logs

Web server access logs, application error logs, and cloud audit trails often contain the earliest indicators of compromise. Export these before log rotation or retention policies remove them.

## Endpoint and network evidence

If endpoint detection tools generated alerts, preserve those records along with firewall logs and DNS query logs. Network evidence frequently reveals command-and-control communication that endpoint tools miss.

## Human observations

Document what users observed: unusual emails, unexpected prompts, changed files, or degraded performance. These observations help investigators correlate technical evidence with real-world impact.

## What not to do immediately

Avoid mass password resets, system reinstalls, or deletion of suspicious files until you have guidance on evidence preservation. Each of these actions can eliminate artefacts needed to reconstruct the attack timeline.`,
  },
  {
    slug: "why-reinstalling-a-compromised-server-can-destroy-evidence",
    title: "Why Reinstalling a Compromised Server Can Destroy Evidence",
    category: "Investigations",
    summary:
      "Reinstalling feels like the fastest path to recovery. It also removes the artefacts investigators need to determine entry points, persistence mechanisms and scope.",
    publishedAt: "2026-01-08",
    readingTime: 6,
    content: `Reinstalling a compromised server is one of the most common — and most damaging — responses to a security incident. The server may appear clean afterward, but the investigation becomes significantly harder.

## What reinstallation removes

A fresh installation eliminates file timestamps, memory-resident malware, web shells, modified configuration files, and attacker-created accounts. These artefacts often reveal how access was obtained and whether persistence mechanisms remain elsewhere.

## When reinstallation is appropriate

Reinstallation may be necessary after evidence has been preserved through disk imaging, log export, and memory capture. The sequence matters: preserve first, then remediate.

## Alternative containment approaches

Network isolation, account disablement, and service suspension can contain an active threat while preserving the environment for investigation. Document every containment action with timestamps.

## The investigation question

Removing malicious code answers "how do we clean this?" Investigation answers "how did this happen?" Both questions matter, but they require different approaches and different timing.`,
  },
  {
    slug: "building-a-cybersecurity-incident-timeline",
    title: "Building a Cybersecurity Incident Timeline",
    category: "Investigations",
    summary:
      "A well-constructed incident timeline connects disparate signals into a coherent narrative. Here is how investigators reconstruct events across systems and identities.",
    publishedAt: "2025-12-20",
    readingTime: 10,
    content: `Incident timelines transform scattered log entries into a sequence of events that explains what happened, when, and in what order. Building one requires correlating evidence across multiple sources.

## Start with known anchors

Begin with confirmed events: when the incident was reported, when specific alerts fired, or when users noticed unusual behaviour. These anchor points provide reference frames for correlating other evidence.

## Normalize timestamps

Logs from different systems may use different time zones or clock drift. Normalize all timestamps to a single reference (typically UTC) before correlation.

## Layer evidence sources

Combine authentication logs, network flow data, endpoint alerts, and application logs. Each source reveals different aspects of attacker activity.

## Identify gaps honestly

Timelines with unexplained gaps are more useful than timelines that fill gaps with assumptions. Mark uncertain periods and note what additional evidence would resolve them.`,
  },
  {
    slug: "how-attackers-maintain-persistence-after-initial-compromise",
    title: "How Attackers Maintain Persistence After Initial Compromise",
    category: "Malware",
    summary:
      "Initial access is rarely the end of an attack. Understanding common persistence mechanisms helps investigators determine whether an environment remains compromised.",
    publishedAt: "2025-12-10",
    readingTime: 9,
    content: `After gaining initial access, attackers typically establish persistence to maintain access even if credentials are changed or initial entry points are closed.

## Common persistence mechanisms

Scheduled tasks, modified startup scripts, web shells, backdoor accounts, and cloud IAM role modifications are among the most frequently observed persistence techniques.

## Why persistence matters for investigation

Finding persistence reveals attacker intent and scope. A single web shell may indicate a broader compromise involving credential theft and lateral movement.

## Detection approaches

Compare current system state against known-good baselines. Review recently created accounts, modified cron jobs, and unexpected outbound connections.

## Remediation considerations

Removing persistence without understanding how it was established risks missing related compromises elsewhere in the environment.`,
  },
  {
    slug: "understanding-account-takeover-evidence",
    title: "Understanding Account Takeover Evidence",
    category: "Incident Response",
    summary:
      "Account takeover incidents leave traces across authentication systems, email logs and application access records. Learn where to look and what patterns indicate compromise.",
    publishedAt: "2025-11-28",
    readingTime: 7,
    content: `Account takeover is one of the most common incident types. Evidence typically spans identity providers, email systems, and the applications the compromised account accessed.

## Authentication anomalies

Look for logins from unfamiliar locations, impossible travel patterns, authentication from new devices, and successful logins immediately following failed attempts.

## Email and communication evidence

Forwarded email rules, deleted messages, and sent items the account holder did not authorise often reveal attacker activity after takeover.

## Application access patterns

Review what resources the account accessed after the suspected compromise. Data downloads, permission changes, and API key creation are common post-takeover activities.`,
  },
  {
    slug: "what-logs-matter-during-an-insider-threat-investigation",
    title: "What Logs Matter During an Insider Threat Investigation",
    category: "Insider Threats",
    summary:
      "Insider threat investigations require correlating access patterns, data movement and behavioural signals. These log sources provide the foundation for evidence-based analysis.",
    publishedAt: "2025-11-15",
    readingTime: 8,
    content: `Insider threat investigations differ from external attacks because the subject may have legitimate access to systems and data. Evidence must distinguish authorised activity from misuse.

## Access and authentication logs

Track when the subject accessed systems, what resources they viewed, and whether access patterns changed relative to their normal behaviour.

## Data movement evidence

File access logs, download records, email attachments, and cloud storage activity reveal whether sensitive data was accessed or exfiltrated.

## Behavioural correlation

Combine technical evidence with contextual information: role changes, performance issues, departure timelines, and reported concerns from colleagues.`,
  },
  {
    slug: "distinguishing-malware-cleanup-from-incident-investigation",
    title: "Distinguishing Malware Cleanup from Incident Investigation",
    category: "Malware",
    summary:
      "Removing malware and investigating an incident are related but distinct activities. Understanding the difference prevents premature remediation that destroys evidence.",
    publishedAt: "2025-11-01",
    readingTime: 5,
    content: `Organisations often conflate malware removal with incident investigation. Both are necessary, but they serve different purposes and require different sequencing.

## Malware cleanup

Focuses on identifying and removing malicious code, restoring affected systems, and verifying that known threats are eliminated.

## Incident investigation

Focuses on determining how the compromise occurred, what was accessed, whether persistence exists, and what weaknesses enabled the attack.

## Why the distinction matters

Cleaning malware without investigation leaves root causes unaddressed. The same vulnerability or access path may remain exploitable.`,
  },
  {
    slug: "security-architecture-mistakes-that-make-investigations-harder",
    title: "Security Architecture Mistakes That Make Investigations Harder",
    category: "Security Architecture",
    summary:
      "Logging gaps, inconsistent time synchronisation and missing access controls do not just create security risks — they make incident investigation significantly more difficult.",
    publishedAt: "2025-10-18",
    readingTime: 9,
    content: `Security architecture decisions made during normal operations directly affect how effectively incidents can be investigated when they occur.

## Insufficient logging

Systems without adequate audit logging leave investigators without the data needed to reconstruct events. Log retention policies that are too short eliminate evidence before incidents are detected.

## Time synchronisation failures

When systems use inconsistent clocks, correlating events across infrastructure becomes unreliable. NTP configuration is a foundational investigation requirement.

## Overly permissive access

When too many users share administrative credentials, attribution becomes impossible. Individual accountability requires individual access controls.`,
  },
  {
    slug: "how-to-document-a-cybersecurity-incident",
    title: "How to Document a Cybersecurity Incident",
    category: "Incident Response",
    summary:
      "Clear incident documentation supports investigation, remediation and future prevention. Here is what to record and when during an active incident.",
    publishedAt: "2025-10-05",
    readingTime: 7,
    content: `Documentation during an incident serves multiple purposes: preserving institutional knowledge, supporting legal proceedings, and enabling post-incident review.

## What to document immediately

Record when the incident was discovered, who discovered it, initial observations, and any immediate containment actions taken. Include timestamps for every entry.

## Ongoing documentation

As investigation progresses, document findings, hypotheses tested, evidence collected, and decisions made. Note who made each decision and why.

## Post-incident documentation

After resolution, compile a timeline, root cause analysis, remediation actions taken, and recommendations for preventing recurrence.`,
  },
  {
    slug: "when-suspicious-employee-behaviour-becomes-a-security-investigation",
    title: "When Suspicious Employee Behaviour Becomes a Security Investigation",
    category: "Insider Threats",
    summary:
      "Not every unusual behaviour warrants investigation. Learn the signals that indicate when employee activity crosses from anomaly to evidence-based security concern.",
    publishedAt: "2025-09-22",
    readingTime: 8,
    content: `Determining when employee behaviour warrants formal investigation requires balancing security concerns with fairness and legal considerations.

## Technical signals

Unusual data access patterns, after-hours activity on sensitive systems, attempts to bypass access controls, and use of unauthorised storage devices may indicate security concerns.

## Contextual factors

Role changes, known departure dates, disciplinary proceedings, and access to particularly sensitive data provide context for interpreting technical signals.

## Investigation principles

Preserve evidence before confrontation. Document observations objectively. Seek appropriate expertise before taking irreversible actions.`,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter((a) => a.category === category);
}

export function getRelatedArticles(slug: string, limit = 3): Article[] {
  const current = getArticleBySlug(slug);
  if (!current) return articles.slice(0, limit);
  return articles
    .filter((a) => a.slug !== slug && a.category === current.category)
    .slice(0, limit);
}
