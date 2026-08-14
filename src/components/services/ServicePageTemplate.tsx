import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/hero/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { ContactCTA } from "@/components/conversion/ContactCTA";
import { InsightCard } from "@/components/content/InsightCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/seo";
import { portalAssessmentForService, portalCta } from "@/lib/portal";
import type { Service } from "@/lib/content/services";
import { articles } from "@/lib/content/articles";

const serviceRoutes: Record<string, string> = {
  "incident-investigation": "/services/incident-investigation/",
  "breach-remediation": "/services/breach-remediation/",
  "malware-analysis": "/services/malware-analysis/",
  "security-architecture-review": "/services/security-architecture-review/",
  "expert-reports": "/services/expert-reports/",
  "security-advisory": "/services/security-advisory/",
  "insider-threat-investigation": "/services/insider-threat-investigation/",
};

export function ServicePageTemplate({ service }: { service: Service }) {
  const relatedInsights = articles
    .filter((a) =>
      service.slug.includes("incident") ? a.category === "Incident Response" :
      service.slug.includes("malware") ? a.category === "Malware" :
      service.slug.includes("insider") ? a.category === "Insider Threats" :
      service.slug.includes("architecture") ? a.category === "Security Architecture" :
      a.category === "Investigations"
    )
    .slice(0, 3);

  const ctaHref = portalAssessmentForService(service.slug);
  const ctaLabel = portalCta.report;

  return (
    <>
      <JsonLd data={[
        breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services/" },
          { name: service.title, url: serviceRoutes[service.slug] ?? `/services/${service.slug}/` },
        ]),
        faqSchema(service.faqs),
      ]} />

      <PageHero
        eyebrow={service.shortTitle}
        title={service.title}
        description={service.heroDescription}
      />

      <section className="py-16">
        <Container size="narrow">
          <SectionHeading title="When this service is needed" />
          <ul className="mt-8 space-y-3">
            {service.situations.map((s) => (
              <li key={s} className="flex gap-3 text-text-secondary">
                <span className="text-accent shrink-0">—</span>{s}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 bg-surface border-y border-border">
        <Container size="narrow">
          <SectionHeading title="What we investigate" />
          <ul className="mt-8 space-y-3">
            {service.investigates.map((item) => (
              <li key={item} className="flex gap-3 text-text-secondary">
                <span className="text-accent shrink-0">—</span>{item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16">
        <Container size="narrow">
          <SectionHeading title="Methodology" />
          <div className="mt-8 space-y-6">
            {service.methodology.map((step, i) => (
              <div key={step.title} className="flex gap-4">
                <span className="font-mono text-xs text-accent shrink-0 pt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-semibold text-text-primary">{step.title}</h3>
                  <p className="mt-1 text-sm text-text-secondary">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-surface border-y border-border">
        <Container size="narrow">
          <SectionHeading title="Typical deliverables" />
          <ul className="mt-8 space-y-3">
            {service.deliverables.map((d) => (
              <li key={d} className="flex gap-3 text-text-secondary">
                <span className="text-accent shrink-0">—</span>{d}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16">
        <Container size="narrow">
          <SectionHeading title="Frequently asked questions" />
          <div className="mt-8 space-y-6">
            {service.faqs.map((faq) => (
              <Card key={faq.question}>
                <h3 className="font-semibold text-text-primary">{faq.question}</h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {relatedInsights.length > 0 && (
        <section className="py-16 bg-surface border-y border-border">
          <Container>
            <SectionHeading title="Related insights" />
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedInsights.map((a) => (
                <InsightCard key={a.slug} article={a} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/insights/" className="text-sm text-accent hover:text-accent-hover">
                View all insights →
              </Link>
            </div>
          </Container>
        </section>
      )}

      <ContactCTA
        title={`Discuss ${service.shortTitle.toLowerCase()}`}
        description={`Whether you need immediate assistance or are planning ahead, we can help with ${service.shortTitle.toLowerCase()}.`}
        primaryLabel={ctaLabel}
        primaryHref={ctaHref}
      />
    </>
  );
}
