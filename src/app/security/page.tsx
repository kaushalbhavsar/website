import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/hero/PageHero";
import { Container } from "@/components/layout/Container";

export const metadata = createMetadata({
  title: "Responsible Disclosure",
  description: "Security vulnerability disclosure policy for Pratikar. Report security issues responsibly.",
  path: "/security/",
});

export default function SecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="Security"
        title="Responsible disclosure"
        description="If you discover a security vulnerability affecting Pratikar systems, we appreciate responsible disclosure."
      />

      <section className="py-16">
        <Container size="narrow">
          <div className="space-y-6 text-text-secondary text-sm leading-relaxed">
            <h2 className="text-lg font-semibold text-text-primary">Reporting</h2>
            <p>
              Report security vulnerabilities to{" "}
              <a href="mailto:security@pratikar.com" className="text-accent hover:text-accent-hover underline underline-offset-2">
                security@pratikar.com
              </a>
              .
            </p>
            <p>
              Machine-readable policy:{" "}
              <a
                href="https://pratikar.com/.well-known/security.txt"
                className="text-accent hover:text-accent-hover underline underline-offset-2"
              >
                security.txt
              </a>
            </p>

            <h2 className="text-lg font-semibold text-text-primary pt-4">Guidelines</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Provide sufficient detail to reproduce the issue</li>
              <li>Allow reasonable time for remediation before public disclosure</li>
              <li>Do not access, modify, or delete data belonging to others</li>
              <li>Do not perform denial-of-service or destructive testing</li>
            </ul>

            <h2 className="text-lg font-semibold text-text-primary pt-4">Scope</h2>
            <p>
              This policy applies to Pratikar-owned websites and services. Third-party services
              should be reported to their respective owners.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
