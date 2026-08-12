import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/hero/PageHero";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Contact",
  description: "Contact Pratikar for cybersecurity incident response, security reviews and technical consultation. Based in India, serving remote engagements worldwide.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        description="For general enquiries, security reviews or technical consultation. For active incidents, use the incident assistance form."
      />

      <section className="py-16">
        <Container size="narrow">
          <div className="mb-10 p-4 rounded border border-border bg-surface-secondary text-sm text-text-secondary">
            <p>Based in {siteConfig.location.country}. Remote technical engagements worldwide.</p>
            <p className="mt-2">
              Active incident?{" "}
              <a href="/incident/" className="text-accent hover:text-accent-hover underline underline-offset-2">
                Request incident assistance
              </a>
            </p>
          </div>
          <ContactForm />
        </Container>
      </section>
    </>
  );
}
