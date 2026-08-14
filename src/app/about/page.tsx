import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/hero/PageHero";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { personSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { portal, portalCta } from "@/lib/portal";

export const metadata = createMetadata({
  title: "About",
  description: "Pratikar is a specialist cybersecurity practice focused on incident investigation, breach remediation and independent security advisory.",
  path: "/about/",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={personSchema()} />

      <PageHero
        title="Security incidents deserve investigation, not guesswork."
        description="Pratikar was created around a simple principle: cybersecurity decisions should be based on evidence."
      />

      <section className="py-16">
        <Container size="narrow">
          <div className="prose prose-invert max-w-none space-y-6 text-text-secondary leading-relaxed">
            <p>
              Modern incidents rarely fit neatly into one category. A compromise may involve application
              vulnerabilities, credentials, cloud infrastructure, malware, data access and human behaviour at the same time.
            </p>
            <p>
              Pratikar brings these signals together to help organisations understand the incident as a whole.
            </p>
            <p>
              We investigate security incidents, contain threats, guide recovery and strengthen systems against recurrence.
              Our work spans cyber incident investigation, breach remediation, digital evidence analysis, security
              architecture review, expert technical reports and independent advisory.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-surface border-y border-border">
        <Container size="narrow">
          <SectionHeading title={siteConfig.founder.name} />
          <Card className="mt-8">
            <p className="text-text-secondary leading-relaxed">
              Cybersecurity practitioner with expertise in security research, malware investigation,
              insider-threat research, security architecture, software engineering and practical incident analysis.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              <Link href="/research/" className="text-sm text-accent hover:text-accent-hover">
                Research →
              </Link>
              <Link href="/careers/" className="text-sm text-accent hover:text-accent-hover">
                Careers →
              </Link>
              <a
                href="https://satark.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:text-accent-hover"
              >
                SATARK →
              </a>
              <a
                href="https://infosecquiz.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:text-accent-hover"
              >
                InfoSecQuiz →
              </a>
            </div>
            <p className="mt-4 text-xs text-text-muted">
              SATARK is an open-source initiative of Pratikar.
            </p>
          </Card>
        </Container>
      </section>

      <section className="py-16">
        <Container size="narrow" className="text-center">
          <Button href={portal.assessment} size="lg">{portalCta.brand}</Button>
        </Container>
      </section>
    </>
  );
}
