import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/hero/PageHero";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { corporateOfferings } from "@/lib/content/training";

export const metadata = createMetadata({
  title: "Corporate Cybersecurity Training",
  description:
    "Corporate cybersecurity training adapted to your environment — secure development, incident readiness, malware investigation and insider threat workshops.",
  path: "/training/corporate/",
});

export default function CorporateTrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="Corporate Training"
        title="Cybersecurity training built around your environment."
        description="Workshops adapted to your architecture, technology stack, engineering maturity and security responsibilities — not generic slide decks."
      />

      <section className="py-16">
        <Container size="narrow">
          <SectionHeading
            title="Adapted to your context"
            description="Corporate workshops can be shaped around your specific requirements."
          />
          <ul className="mt-8 space-y-2">
            {[
              "architecture and technology stack",
              "engineering maturity",
              "security responsibilities across teams",
              "threat model and risk priorities",
              "team experience and learning goals",
            ].map((item) => (
              <li key={item} className="text-sm text-text-secondary flex gap-2">
                <span className="text-accent shrink-0">—</span>{item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-text-muted">
            Where appropriate, exercises mirror realistic incidents without using actual sensitive production information.
          </p>
        </Container>
      </section>

      <section className="py-16 bg-surface border-y border-border">
        <Container>
          <SectionHeading title="Corporate offerings" />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {corporateOfferings.map((offering) => (
              <Card key={offering.title} hover>
                <h2 className="font-semibold text-text-primary">{offering.title}</h2>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">{offering.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container size="narrow" className="text-center">
          <Button href="/training/register-interest/" size="lg">Discuss Corporate Training</Button>
          <p className="mt-4">
            <Button href="/training/register-interest/" variant="ghost" size="sm">
              Register Interest
            </Button>
          </p>
        </Container>
      </section>
    </>
  );
}
