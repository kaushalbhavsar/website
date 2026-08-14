import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/hero/PageHero";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/services/ServiceCard";
import { InvestigationSteps } from "@/components/investigation/InvestigationSteps";
import { IncidentCTA } from "@/components/conversion/IncidentCTA";
import { ContactCTA } from "@/components/conversion/ContactCTA";
import { services } from "@/lib/content/services";
import { portalCta } from "@/lib/portal";

export const metadata = createMetadata({
  title: "Incident Response",
  description: "Cybersecurity incident response, investigation and recovery guidance. Pratikar helps organizations preserve evidence, contain threats and recover safely.",
  path: "/incident-response/",
});

export default function IncidentResponsePage() {
  const irServices = services.filter((s) =>
    ["incident-investigation", "breach-remediation", "malware-analysis"].includes(s.slug)
  );

  return (
    <>
      <PageHero
        eyebrow="Incident Response"
        title="Investigate. Contain. Recover."
        description="When a security incident occurs, the priority is understanding what happened while preserving the evidence needed to answer that question."
      />

      <section className="py-16">
        <Container>
          <SectionHeading
            title="Active incident response"
            description="When systems behave unexpectedly, accounts are compromised or suspicious activity appears, the first priority is preserving evidence while determining the actual scope of the incident."
          />
          <div className="mt-10">
            <InvestigationSteps />
          </div>
        </Container>
      </section>

      <section className="py-16 bg-surface border-y border-border">
        <Container>
          <SectionHeading title="Incident response services" />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {irServices.map((s) => (
              <ServiceCard key={s.slug} title={s.title} description={s.description} href={`/services/${s.slug}/`} linkLabel={s.linkLabel} />
            ))}
          </div>
        </Container>
      </section>

      <IncidentCTA variant="compact" />
      <ContactCTA
        title="Start incident response"
        description="Describe what happened in the portal. No account is required to begin."
        primaryLabel={portalCta.incident}
      />
    </>
  );
}
