import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { portal, portalAssessment, portalCta } from "@/lib/portal";

const audiences = [
  {
    title: "Experiencing an incident",
    description: "Compromised systems, malware, suspicious access, account takeover, or suspected breach.",
    question: "Can you figure out what happened and help us recover?",
    cta: portalCta.incident,
    href: portal.assessment,
  },
  {
    title: "Need independent security expertise",
    description: "Architecture review, security assessment, threat modelling, or a technical second opinion.",
    question: "Can you review our security posture objectively?",
    cta: portalCta.brand,
    href: portalAssessment("other"),
  },
  {
    title: "Lawyer or investigator",
    description: "Technical incident interpretation, digital evidence review, expert reports, or timeline reconstruction.",
    question: "Can you help explain the technical evidence?",
    cta: portalCta.legal,
    href: portalAssessment("digital_forensics"),
  },
  {
    title: "Individual or executive",
    description: "Compromised account, suspicious device behaviour, impersonation, or personal cybersecurity incident.",
    question: "Can someone investigate this discreetly?",
    cta: portalCta.individual,
    href: portalAssessment("suspicious_activity"),
  },
];

export function AudienceSection() {
  return (
    <section className="py-20 border-b border-border">
      <Container>
        <h2 className="text-2xl md:text-3xl font-semibold text-text-primary tracking-tight text-center">
          Who we help
        </h2>
        <p className="mt-4 text-text-secondary text-center max-w-2xl mx-auto">
          Different situations require different expertise. Identify yours below.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {audiences.map((audience) => (
            <Card key={audience.title} hover className="flex flex-col">
              <h3 className="text-lg font-semibold text-text-primary">{audience.title}</h3>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">{audience.description}</p>
              <p className="mt-4 text-sm text-text-muted italic">&ldquo;{audience.question}&rdquo;</p>
              <div className="mt-6 pt-4 border-t border-border">
                <Button href={audience.href} variant="outline" size="sm">
                  {audience.cta}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
