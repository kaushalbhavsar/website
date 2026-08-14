import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/hero/PageHero";
import { Container } from "@/components/layout/Container";
import { PortalHandoff } from "@/components/conversion/PortalHandoff";

export const metadata = createMetadata({
  title: "Get Incident Help",
  description: "Start a cybersecurity incident assessment in the Pratikar Incident Response Portal. Describe what happened, preserve evidence, and work with an investigator.",
  path: "/incident/",
});

export default function IncidentPage() {
  return (
    <>
      <PageHero
        eyebrow="Incident Response Portal"
        title="Start in the secure case portal"
        description="Describe your situation in the Pratikar Incident Response Portal. The assessment takes a few minutes and does not require an account."
      />

      <section className="py-16">
        <Container size="narrow">
          <PortalHandoff />
        </Container>
      </section>
    </>
  );
}
