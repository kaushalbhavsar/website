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
              contact or incident forms is used solely to respond to your request.
            </p>
            <h2 className="text-lg font-semibold text-text-primary pt-4">Data collection</h2>
            <p>
              We collect only the information you provide: name, email, organization, phone (optional),
              and message content. We do not use invasive tracking or third-party analytics that capture
              form contents.
            </p>
            <h2 className="text-lg font-semibold text-text-primary pt-4">Sensitive information</h2>
            <p>
              Do not submit passwords, authentication tokens, malware samples or confidential evidence
              through web forms. Secure transfer arrangements can be established separately.
            </p>
            <h2 className="text-lg font-semibold text-text-primary pt-4">Retention</h2>
            <p>
              Enquiry data is retained only as long as necessary to respond and maintain business records.
              Incident details are handled with appropriate confidentiality.
            </p>
            <h2 className="text-lg font-semibold text-text-primary pt-4">Contact</h2>
            <p>
              For privacy-related questions, contact us through the{" "}
              <a href="/contact/" className="text-accent hover:text-accent-hover underline underline-offset-2">
                contact form
              </a>.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
