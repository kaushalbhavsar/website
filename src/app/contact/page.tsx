import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/hero/PageHero";
import { Container } from "@/components/layout/Container";
import { PortalHandoff } from "@/components/conversion/PortalHandoff";
import { siteConfig } from "@/lib/site";
import { portalCta } from "@/lib/portal";

export const metadata = createMetadata({
  title: "Contact",
  description: "Contact Pratikar through the Incident Response Portal for incident help, investigations and technical consultation. Based in India, serving remote engagements worldwide.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="All intake happens in the portal"
        description="Incident reports, investigations and project requests are submitted through the Pratikar Incident Response Portal so context, evidence and decisions stay in one place."
      />

      <section className="py-16">
        <Container size="narrow">
          <div className="mb-10 p-4 rounded border border-border bg-surface-secondary text-sm text-text-secondary">
            <p>Based in {siteConfig.location.country}. Remote technical engagements worldwide.</p>
            <p className="mt-2">
              If you are not sure how to classify the situation, begin anyway and choose Other / Not sure.
            </p>
          </div>
          <PortalHandoff showTrainingLink primaryLabel={portalCta.brand} />
        </Container>
      </section>
    </>
  );
}
