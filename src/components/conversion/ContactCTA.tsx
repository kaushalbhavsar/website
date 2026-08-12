import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

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
  description = "Whether you are dealing with an active incident or planning security improvements, we can help you understand the technical situation.",
  primaryLabel = "Get Incident Help",
  primaryHref = "/incident",
  secondaryLabel = "General Enquiry",
  secondaryHref = "/contact",
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
