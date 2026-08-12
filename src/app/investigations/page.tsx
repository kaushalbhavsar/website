import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/hero/PageHero";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/services/ServiceCard";
import { ContactCTA } from "@/components/conversion/ContactCTA";
import { services } from "@/lib/content/services";

export const metadata = createMetadata({
  title: "Investigations",
  description: "Technical investigation and digital evidence analysis for cybersecurity incidents. Log analysis, timeline reconstruction and malware investigation.",
  path: "/investigations/",
});

export default function InvestigationsPage() {
  const investigationServices = services.filter((s) =>
    ["incident-investigation", "malware-analysis", "insider-threat-investigation", "expert-reports"].includes(s.slug)
  );

  return (
    <>
      <PageHero
        eyebrow="Investigations"
        title="From signals to evidence."
        description="Technical investigation connects logs, infrastructure, identities and behaviour into a coherent understanding of what happened."
      />

      <section className="py-16">
        <Container>
          <SectionHeading
            title="Investigation services"
            description="We analyse technical evidence to reconstruct security events and determine scope, root cause and remediation requirements."
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {investigationServices.map((s) => (
              <ServiceCard key={s.slug} title={s.title} description={s.description} href={`/services/${s.slug}/`} linkLabel={s.linkLabel} />
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA
        title="Discuss a technical case"
        description="Whether you need investigation support, expert reports or technical consultation, we can help interpret the evidence."
        primaryLabel="Discuss a Technical Case"
        primaryHref="/contact/"
      />
    </>
  );
}
