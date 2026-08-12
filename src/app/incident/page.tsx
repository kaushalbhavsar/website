import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/hero/PageHero";
import { Container } from "@/components/layout/Container";
import { IncidentIntakeForm } from "@/components/forms/IncidentIntakeForm";

export const metadata = createMetadata({
  title: "Get Incident Help",
  description: "Request cybersecurity incident assistance. Short intake form for organizations experiencing active or recent security incidents.",
  path: "/incident/",
});

export default function IncidentPage() {
  return (
    <>
      <PageHero
        eyebrow="Incident Assistance"
        title="Request incident help"
        description="Describe your situation and we will respond as soon as possible. For active incidents, avoid actions that may destroy evidence."
      />

      <section className="py-16">
        <Container size="narrow">
          <IncidentIntakeForm />
        </Container>
      </section>
    </>
  );
}
