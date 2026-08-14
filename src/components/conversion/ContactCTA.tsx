import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portal, portalCta } from "@/lib/portal";

type ContactCTAProps = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function ContactCTA({
  title = "Need technical guidance?",
  description = "Whether you are dealing with an active incident or planning security improvements, start in the incident response portal so context, evidence and decisions stay in one place.",
  primaryLabel = portalCta.report,
  primaryHref = portal.assessment,
  secondaryLabel = portalCta.signIn,
  secondaryHref = portal.auth,
}: ContactCTAProps) {
  return (
    <section className="py-20 border-t border-border">
      <Container size="narrow">
        <SectionHeading title={title} description={description} align="center" />
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href={primaryHref} size="lg">
            {primaryLabel}
          </Button>
          <Button href={secondaryHref} variant="outline" size="lg">
            {secondaryLabel}
          </Button>
        </div>
      </Container>
    </section>
  );
}
