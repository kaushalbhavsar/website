import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/hero/PageHero";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata = createMetadata({
  title: "Careers",
  description:
    "Work with Pratikar on cybersecurity incident investigation, technical analysis and security advisory. Remote-friendly, evidence-driven practice.",
  path: "/careers/",
});

const focusAreas = [
  {
    title: "Incident investigation",
    description:
      "Analyse compromised systems, reconstruct attack timelines and determine scope across infrastructure, identities and applications.",
  },
  {
    title: "Malware & technical analysis",
    description:
      "Examine malicious code, persistence mechanisms, indicators of compromise and technical evidence from active investigations.",
  },
  {
    title: "Security architecture & advisory",
    description:
      "Review systems, data flows and controls. Provide independent technical guidance without vendor bias.",
  },
  {
    title: "Research & technical writing",
    description:
      "Contribute to investigation methodology, internal knowledge and public insights that help organisations respond more effectively.",
  },
];

const qualities = [
  "You think in evidence before assumptions.",
  "You can connect signals across systems, logs, identities and behaviour.",
  "You communicate technical findings clearly to technical and non-technical audiences.",
  "You work carefully under pressure — especially when an incident is active.",
  "You prefer depth over buzzwords.",
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Investigation work requires people who understand how compromises actually happen."
        description="Pratikar is a specialist practice, not a large MSSP. We look for practitioners who can investigate seriously, communicate clearly and maintain independence."
      />

      <section className="py-16">
        <Container size="narrow">
          <SectionHeading title="What we do together" />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {focusAreas.map((area) => (
              <Card key={area.title}>
                <h2 className="font-semibold text-text-primary">{area.title}</h2>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">{area.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-surface border-y border-border">
        <Container size="narrow">
          <SectionHeading title="Who tends to fit" />
          <ul className="mt-8 space-y-3">
            {qualities.map((q) => (
              <li key={q} className="flex gap-3 text-text-secondary text-sm leading-relaxed">
                <span className="text-accent shrink-0">—</span>
                {q}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16">
        <Container size="narrow">
          <SectionHeading
            title="Current opportunities"
            description="We do not maintain a standing list of generic security roles. When capacity allows, we consider experienced practitioners for investigation, analysis and advisory work — often on a remote or engagement basis."
          />
          <Card className="mt-8">
            <p className="text-sm text-text-secondary leading-relaxed">
              If your background includes incident response, digital forensics, malware analysis, cloud security,
              application security or security research, we welcome a concise introduction describing your experience
              and the type of work you are interested in.
            </p>
            <p className="mt-4 text-sm text-text-muted">
              Include relevant investigation experience, technical domains and availability. We do not respond to
              generic bulk applications.
            </p>
            <div className="mt-6">
              <Button href="/contact/" variant="outline">
                Introduce Yourself
              </Button>
            </div>
          </Card>
        </Container>
      </section>

      <section className="py-16 bg-surface border-t border-border">
        <Container size="narrow">
          <SectionHeading
            eyebrow="Practice"
            title="Test your security knowledge"
            description="InfoSecQuiz is an independent quiz platform for cybersecurity concepts, incident response and technical security topics."
          />
          <a
            href="https://infosecquiz.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors text-sm"
          >
            Visit infosecquiz.com →
          </a>
        </Container>
      </section>
    </>
  );
}
