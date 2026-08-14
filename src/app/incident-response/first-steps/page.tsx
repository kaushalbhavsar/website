import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/hero/PageHero";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { portal } from "@/lib/portal";

export const metadata = createMetadata({
  title: "Incident First Steps",
  description: "Emergency guidance for organizations that suspect a security compromise. Preserve evidence, contain carefully and seek appropriate expertise.",
  path: "/incident-response/first-steps/",
});

const steps = [
  {
    title: "Don't panic-reset everything",
    content: "Mass password resets, reinstalls and cleanup activities can destroy valuable information needed to understand how the incident occurred.",
  },
  {
    title: "Preserve logs",
    content: "Where possible preserve authentication logs, application logs, firewall logs, endpoint alerts, cloud audit logs, suspicious emails, timestamps, screenshots and suspicious files.",
  },
  {
    title: "Record what you observed",
    content: "Capture when the issue was discovered, who discovered it, affected accounts, affected machines, unusual behaviour and recent system changes.",
  },
  {
    title: "Contain carefully",
    content: "If immediate containment is required, document every action. Network isolation and account disablement can contain threats while preserving evidence.",
  },
  {
    title: "Avoid confronting suspected insiders prematurely",
    content: "Premature confrontation may affect evidence, behaviour or investigation integrity. Preserve technical evidence before personnel decisions.",
  },
  {
    title: "Seek appropriate expertise",
    content: "Security incidents often require specialized investigation skills. Early expert guidance can prevent evidence destruction and scope misassessment.",
  },
];

export default function FirstStepsPage() {
  return (
    <>
      <PageHero
        eyebrow="Emergency Guidance"
        title="Think you're compromised?"
        description="These steps can help preserve evidence and reduce further damage while you seek expert assistance."
      />

      <section className="py-16">
        <Container size="narrow">
          <div className="space-y-6">
            {steps.map((step, i) => (
              <Card key={step.title}>
                <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="mt-2 text-lg font-semibold text-text-primary">{step.title}</h2>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">{step.content}</p>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button href={portal.assessment} size="lg">Start Incident Assessment</Button>
          </div>

          <p className="mt-8 text-xs text-text-muted text-center leading-relaxed">
            This information is general incident-response guidance and does not replace advice tailored to the specific incident.
          </p>
        </Container>
      </section>
    </>
  );
}
