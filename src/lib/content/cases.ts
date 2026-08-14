export type CaseTimelineEvent = {
  time: string;
  event: string;
  label: string;
};

export type CaseNote = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  status: "hypothetical" | "verified";
  publishedAt?: string;
  readingTime?: number;
  body?: string;
  timeline?: CaseTimelineEvent[];
  relatedInsightSlugs?: string[];
  relatedServiceSlugs?: string[];
};

export const caseNotes: CaseNote[] = [
  {
    slug: "ransomware-exposed-remote-access",
    title: "Ransomware After Exposed Remote Access",
    category: "Incident Response",
    status: "verified",
    publishedAt: "2026-08-14",
    readingTime: 9,
    summary:
      "Ransomware encrypted a workstation after attackers brute-forced an internet-exposed remote desktop and a shared administrative account. A line-of-business server was planted with the same malware but never restarted, so encryption never ran there. Backups, not antivirus, prevented operational collapse.",
    timeline: [
      {
        time: "Day 1 · afternoon",
        event:
          "Brute-force authentication begins against an internet-exposed remote desktop on a central server.",
        label: "EVIDENCE / AUTH",
      },
      {
        time: "Day 1 · afternoon",
        event:
          "First successful login to a shared administrative account from a network inconsistent with the organisation's operations.",
        label: "EVIDENCE / AUTH",
      },
      {
        time: "Day 2 · evening",
        event:
          "Another successful remote login to the same account, shortly before malware appears on the line-of-business server.",
        label: "EVIDENCE / AUTH",
      },
      {
        time: "Day 2 · evening",
        event:
          "Ransomware dropped on the application server. A firewall exception and autorun persistence are created. The server is left running, so the payload stays dormant.",
        label: "EVIDENCE / HOST",
      },
      {
        time: "Day 2 · evening",
        event:
          "The same self-propagating malware reaches a workstation without antivirus. Files on that machine are encrypted when it is in use.",
        label: "EVIDENCE / HOST",
      },
      {
        time: "Day 3",
        event:
          "Further overseas logins to the shared account. Brute-force volume drops after access has already been obtained.",
        label: "EVIDENCE / AUTH",
      },
    ],
    relatedInsightSlugs: [
      "understanding-account-takeover-evidence",
      "how-attackers-maintain-persistence-after-initial-compromise",
      "building-a-cybersecurity-incident-timeline",
    ],
    relatedServiceSlugs: [
      "incident-investigation",
      "malware-analysis",
      "breach-remediation",
    ],
    body: `## What was reported

An organisation with more than eighty endpoints asked Pratikar to investigate a ransomware incident. Files on at least one workstation had been encrypted. There was a real possibility that line-of-business systems would follow. An existing backup strategy is what prevented the incident from becoming an operational collapse.

The question was not only how to clean the affected machines. It was how the attackers got in, whether other systems still carried the payload, and which weaknesses would let the same path be reused.

## Scope

Investigation covered the internal network, a line-of-business application server, a central server that many workstations relied on, and an affected endpoint. Malware samples were collected from more than one host. Authentication logs from the central server became the primary evidence for reconstructing access.

## What the evidence showed

The perimeter was weaker than the malware suggested. Remote desktop on a core server was reachable from the internet. The network's public address disclosed domain and mail-server information and advertised services that did not need to be visible. Address assignment was dynamic, which later made it harder to tie activity to a physical machine. There was no dedicated network security device in front of the environment.

The application server was running an unsupported operating system that no longer received vendor security updates. A ransomware binary had been dropped on it. The malware created a firewall exception for outbound communication and an autorun registry entry so it would launch on restart. The server had not been restarted after the drop, so the payload remained dormant. Security logs on that host did not show the unusual activity that the authentication logs on the central server later made obvious.

That dormancy mattered. The malware was self-propagating: once activated on one machine, it spread to other weak systems on the network. Because it had not yet run on the application server, that host was not the source of the outbreak — it was a waiting second victim.

The central server told a clearer story. Remote desktop was not only enabled; it was reachable from outside the organisation. In a three-day window the logs recorded more than twenty thousand failed login attempts — several every minute. A shared administrative account, used by staff to install software, was the account that eventually succeeded. Failed attempts on that account outnumbered successful ones by a wide margin. Two distinct external attackers appeared in the traffic. One of them obtained the password. After that success, the brute-force volume fell away.

Successful logins to the shared account came from overseas networks that did not match normal operations. The login that mattered occurred about an hour before malware appeared on the application server, and about two hours before the workstation was encrypted. The sequence is what closed the insider-activation hypothesis for practical purposes: external access, then planting, then encryption on a machine that actually started the payload.

The installed antivirus did not detect the sample at the time of the drop. It was a new variant. Signature-based tools lag planned attacks. Two of the affected machines also did not have antivirus installed before the incident.

## Root cause

This was not a novel exploit against the line-of-business application. It was a login problem that became a ransomware problem.

The password on a privileged account was weak. That account was shared. Remote desktop on a server that many systems depended on was exposed to the internet. Attackers brute-forced common usernames, then targeted accounts that existed in the environment, until the shared administrative password worked. They signed in, disabled antivirus where they could, and planted ransomware that would encrypt files and spread. Systems without current protection were the ones that suffered.

An insider could, in theory, have activated malware already present on the network. The logs did not support that reading. They did show why the question is hard to answer cleanly when staff exchange usernames and passwords: individual accountability disappears, and so does attribution.

## What limited the damage

Backups allowed the organisation to restore rather than negotiate. The application server's unpaid reboot was luck, not a control — the autorun entry was already waiting. Cleaning the dormant malware and the registry persistence removed that particular risk. It did not close the path that delivered it.

## What made the investigation harder

Dynamic addressing meant a computer's identity on the network changed with restart order, so reconstructing which person used which machine was unreliable. Shared credentials meant a successful administrative login could not be tied to a person. One affected server had been formatted before restoration; logs had been extracted first, which is what made the brute-force reconstruction possible. Without that extraction, the authentication story would have been gone.

## Lessons

Ransomware often starts as a credential and exposure problem. The binary on disk is evidence of an incident that began at the login prompt.

A machine that has not been restarted is not a clean machine. Autorun persistence is a delayed detonation, not an all-clear.

Tens of thousands of failed logins in a short window are a signal. A successful login from an unexpected location after that volume is the pivot, not background noise.

Shared administrator accounts make both prevention and investigation worse. They widen the blast radius of a guessed password and erase the ability to say who did what.

Antivirus that has never seen a sample will not save an internet-facing remote desktop. Backups, unique privileged accounts, and not exposing remote access to the world are the controls that decided the outcome here.

## Recommendations that still apply

Do not expose remote desktop to the internet. Put a network security control in front of the environment and require a VPN or equivalent before administrative access.

Stop using a shared privileged account for daily software installation. Give people named accounts, restrict elevation, and disable unused logins — including those left behind when staff leave.

Treat authentication logging as investigation infrastructure: retain it, protect it, and alert on brute-force volume and success-after-failure from unexpected locations.

Inventory systems with addresses that can be mapped to a physical machine. Dynamic addressing without documentation is an investigation failure waiting for an incident.

Upgrade unsupported operating systems. Application allow-listing reduces the value of a dropped binary. Staff need a way to report suspected malware that does not depend on a single reactive support account.

None of those recommendations require identifying the organisation. They are the same weaknesses this investigation keeps finding when ransomware is treated as a malware event instead of an access event.`,
  },
  {
    slug: "exposed-rdp-and-sql-brute-force",
    title: "Brute Force Against Exposed Remote Desktop and SQL Server",
    category: "Investigations",
    status: "verified",
    publishedAt: "2026-08-14",
    readingTime: 6,
    summary:
      "Event logs showed concurrent brute-force attempts against internet-reachable remote desktop and a database server, plus a successful logon by a little-used account from an unrecognised workstation. The finding was not a finished forensic case — it was enough to show that two administrative services should never have been facing the internet.",
    timeline: [
      {
        time: "Earlier in the window",
        event:
          "Failed SQL Server logins arrive from multiple overseas networks. The database port is reachable from the internet.",
        label: "EVIDENCE / AUTH",
      },
      {
        time: "Later in the window",
        event:
          "Failed Windows logons appear from several countries in a single day, consistent with opportunistic remote-desktop brute force rather than one operator.",
        label: "EVIDENCE / AUTH",
      },
      {
        time: "Same day",
        event:
          "A little-used account completes a successful interactive logon from a workstation with a default, unmanaged-looking computer name. The session lasts about twenty minutes.",
        label: "EVIDENCE / AUTH",
      },
      {
        time: "After review",
        event:
          "Log analysis can show the exposure and the suspicious success. It cannot, by itself, prove whether that account was still legitimate — that requires the organisation to validate who owns it.",
        label: "INVESTIGATION LIMIT",
      },
    ],
    relatedInsightSlugs: [
      "understanding-account-takeover-evidence",
      "security-architecture-mistakes-that-make-investigations-harder",
      "building-a-cybersecurity-incident-timeline",
    ],
    relatedServiceSlugs: [
      "incident-investigation",
      "expert-reports",
      "security-architecture-review",
    ],
    body: `## What was reported

An organisation asked for a review of Windows event logs. There was no confirmed ransomware, no encrypted files, and no instruction to image disks. The question was narrower: what do the authentication records actually show?

That kind of engagement is common. Logs are already there. A full forensic examination is not always authorised yet. The work is to extract what the logs can support — and to say clearly what they cannot.

## Scope

The review covered security and SQL Server login events on a Windows server. Two services were in view: remote desktop and the database engine. No malware samples were collected. No claim was made that every host in the environment had been examined.

## What the evidence showed

Failed Windows logons arrived from several countries in a short window, including both domestic and overseas networks. The pattern is what opportunistic brute force against an internet-reachable remote desktop looks like: many sources, no single operator, no need for a custom exploit. The login prompt was simply reachable.

SQL Server told the same story on a different port. Failed database logins came from multiple overseas networks days before the Windows failures clustered. The database was not only listening internally. It was being guessed at from the public internet.

One successful logon stood apart from the failures. An account that looked like a leftover service identity — the sort of name used for file transfer, not for a person — signed in interactively from a workstation whose computer name looked like a default Windows install, not a managed asset. The session lasted about twenty minutes, then ended.

That success is the finding that needs a human answer. Logs can show that the account exists, that it authenticated, and that the workstation name does not look like the rest of the estate. They cannot show whether the account was still supposed to exist, whether anyone in the organisation still used it, or whether the session was an attacker who had already guessed the password. The organisation had to confirm that, or disable the account until they could.

## Root cause

Two administrative surfaces were facing the internet: remote desktop and SQL Server. Once those ports are reachable, brute force is not a sophisticated campaign. It is background traffic. The failed logins from many geographies are what that traffic looks like when anyone bothers to read the logs.

The suspicious successful logon is a separate, sharper problem. Unused or poorly named accounts remain valid credentials. If nobody can say who owns them, investigators cannot say whether a twenty-minute session was maintenance or compromise. Shared, forgotten, and service accounts create that ambiguity on purpose, even when nobody intended to.

## What log analysis could not do

This review was not a forensic examination of the server. It did not reconstruct every process, every file drop, or every outbound connection. The recommendations assumed the log entries were complete enough to act on. If they were not — if logging was incomplete, clocks were wrong, or the interesting activity happened on a different host — disk-level investigation would still be required.

That limit is worth stating in the report. Treating a log review as a closed incident is how organisations miss the payload that never generated a failed login.

## Lessons

Failed logins from many countries in one day are usually a signal that a service is on the internet, not that a named adversary has chosen the organisation.

A successful logon by an account nobody recognises is a finding, not a footnote. Brute-force noise is easy to scroll past. The session that worked is the one that needs an owner.

Exposing SQL Server to the world is the same class of mistake as exposing remote desktop. Attackers do not need to pick one. The logs in this case showed both.

Blacklisting addresses after they have already reached the login prompt is a chase. Allowing only known networks — or, better, not offering remote desktop and database ports to the internet at all — is the control that matches the evidence.

Log analysis answers what the logs recorded. Investigation answers whether that is the whole incident.

## Recommendations that still apply

Do not publish remote desktop or database ports to the internet. If remote administration is required, put it behind a VPN or an equivalent controlled path. If a narrow exception is unavoidable, restrict it to known addresses — knowing that this only works when those addresses are stable.

Inventory accounts the way you inventory servers. Service identities used for file transfer should not have interactive logon. Accounts that nobody can claim should be disabled.

Alert on brute-force volume and on success after failure, especially from networks that do not match how the organisation actually works. Retain the logs long enough that a review like this still has something to read.

If the logs raise a successful session that cannot be explained, that is the point to preserve the host and widen the investigation — not the point to assume the review is finished.`,
  },
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
  "A machine that has not been restarted is not a clean machine.",
  "Tens of thousands of failed logins are evidence, not noise.",
  "A successful login by an account nobody recognises is a finding, not a footnote.",
];

export function getCaseBySlug(slug: string): CaseNote | undefined {
  return caseNotes.find((note) => note.slug === slug);
}

export function getPublishedCaseNotes(): CaseNote[] {
  return caseNotes.filter((note) => Boolean(note.body));
}
