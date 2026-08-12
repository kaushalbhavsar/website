import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/hero/PageHero";
import { Container } from "@/components/layout/Container";

export const metadata = createMetadata({
  title: "Terms of Use",
  description: "Terms governing use of the Pratikar website and general information provided.",
  path: "/terms/",
});

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms of Use" />
      <section className="py-16">
        <Container size="narrow">
          <div className="space-y-6 text-text-secondary text-sm leading-relaxed">
            <p>
              This website provides general information about Pratikar&apos;s cybersecurity services.
              Content on this site does not constitute professional advice for any specific incident
              or security situation.
            </p>
            <h2 className="text-lg font-semibold text-text-primary pt-4">No emergency service</h2>
            <p>
              Submitting a form does not establish an attorney-client or formal engagement relationship.
              For active incidents requiring immediate response, clearly indicate urgency in your submission.
            </p>
            <h2 className="text-lg font-semibold text-text-primary pt-4">General guidance</h2>
            <p>
              Articles and first-aid guidance are educational. They do not replace tailored advice
              for your specific incident, jurisdiction or regulatory requirements.
            </p>
            <h2 className="text-lg font-semibold text-text-primary pt-4">Intellectual property</h2>
            <p>
              Website content is owned by Pratikar unless otherwise noted. Reproduction requires permission.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
