import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/hero/PageHero";
import { Container } from "@/components/layout/Container";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: "How Pratikar handles personal information and incident enquiry data.",
  path: "/privacy/",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" />
      <section className="py-16">
        <Container size="narrow">
          <div className="space-y-6 text-text-secondary text-sm leading-relaxed">
            <p>
              Pratikar respects the confidentiality of incident-related enquiries. Information submitted through
              the Incident Response Portal is used to triage, investigate and respond to your case.
            </p>
            <h2 className="text-lg font-semibold text-text-primary pt-4">Data collection</h2>
            <p>
              The portal collects the information you provide during assessment and case work: contact details,
              incident description, and any evidence you choose to upload. This website does not use invasive
              tracking or third-party analytics that capture form contents.
            </p>
            <h2 className="text-lg font-semibold text-text-primary pt-4">Sensitive information</h2>
            <p>
              Do not submit passwords or authentication tokens through public pages. Evidence such as logs,
              screenshots and documents should be shared inside the restricted case workspace in the portal,
              where files are tracked with integrity metadata.
            </p>
            <h2 className="text-lg font-semibold text-text-primary pt-4">Retention</h2>
            <p>
              Case data is retained only as long as necessary to respond, complete the investigation and
              maintain business records. Incident details are handled with appropriate confidentiality
              and are only made available to authorised people working on your case.
            </p>
            <h2 className="text-lg font-semibold text-text-primary pt-4">Contact</h2>
            <p>
              For privacy-related questions, start a request in the{" "}
              <a href="https://portal.pratikar.com/assessment?category=other" className="text-accent hover:text-accent-hover underline underline-offset-2">
                Incident Response Portal
              </a>
              {" "}or email{" "}
              <a href="mailto:security@pratikar.com" className="text-accent hover:text-accent-hover underline underline-offset-2">
                security@pratikar.com
              </a>
              .
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
