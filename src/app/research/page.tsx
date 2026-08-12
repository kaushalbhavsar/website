import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/hero/PageHero";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { publications, researchCategories, satarkLinks } from "@/lib/content/research";

export const metadata = createMetadata({
  title: "Research",
  description:
    "Pratikar research in insider threat prediction, behavioral analysis, malware investigation and security analytics. SATARK is the open-source initiative behind this work.",
  path: "/research/",
});

export default function ResearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Research"
        title="Evidence-based security research applied to real investigations."
        description="Pratikar’s research lineage spans insider threat prediction, behavioral analysis, malware techniques and explainable security analytics — grounded in peer-reviewed work and practical investigation experience."
      />

      <section className="py-16 bg-surface border-y border-border">
        <Container size="narrow">
          <SectionHeading
            eyebrow="Open Source Initiative"
            title="SATARK"
            description="Scalable Automated Technology for Analysis and Ranking of Known Threats — an open-source security analytics framework and open-source initiative of Pratikar."
          />
          <Card className="mt-8">
            <p className="text-sm text-text-secondary leading-relaxed">
              SATARK provides a plugin-first architecture for building explainable detection pipelines
              across insider threats, malware, phishing, cloud, identity, email and web security.
              The framework is being rebuilt in public with transparent scoring and reproducible detections.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={satarkLinks.home}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:text-accent-hover"
              >
                satark.org →
              </a>
              <a
                href={satarkLinks.research}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:text-accent-hover"
              >
                SATARK research archive →
              </a>
              <a
                href={satarkLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:text-accent-hover"
              >
                GitHub →
              </a>
            </div>
          </Card>
        </Container>
      </section>

      <section className="py-16">
        <Container size="narrow">
          <SectionHeading
            title="Research focus"
            description="Work that informs how Pratikar investigates incidents and designs detection-oriented analysis."
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Insider threat prediction",
                description: "Behavioral analysis, Threat-Rank scoring, and forensic techniques for identifying internal risk.",
              },
              {
                title: "Malware & web security",
                description: "Malicious code analysis, web application vulnerabilities and detection-oriented forensic methods.",
              },
              {
                title: "Explainable analytics",
                description: "Transparent risk scores with evidence, confidence and reasoning — not unexplained numbers.",
              },
              {
                title: "Investigation methodology",
                description: "Connecting behavioral signals, technical evidence and incident reconstruction across domains.",
              },
            ].map((item) => (
              <Card key={item.title}>
                <h2 className="font-semibold text-text-primary">{item.title}</h2>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-surface border-y border-border">
        <Container size="narrow">
          <SectionHeading title="Selected publications" />
          <p className="mt-4 text-sm text-text-muted">
            Full bibliography and BibTeX available on{" "}
            <a href={satarkLinks.research} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-hover underline underline-offset-2">
              satark.org/research
            </a>.
          </p>
          <div className="mt-10 space-y-8">
            {researchCategories.map((category) => {
              const items = publications.filter((p) => p.category === category);
              if (items.length === 0) return null;
              return (
                <div key={category}>
                  <h3 className="font-mono text-xs tracking-widest uppercase text-text-muted mb-4">
                    {category}
                  </h3>
                  <ul className="space-y-4">
                    {items.map((pub) => (
                      <li key={pub.title} className="border-l-2 border-border pl-4">
                        <p className="font-medium text-text-primary text-sm">{pub.title}</p>
                        <p className="mt-1 text-xs text-text-secondary">{pub.authors}</p>
                        <p className="mt-1 text-xs text-text-muted">
                          {pub.venue} · {pub.year}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-surface border-t border-border">
        <Container size="narrow">
          <SectionHeading
            eyebrow="Learn the methodology"
            title="From research to training"
            description="Research on insider threats, malware and security analytics also informs Pratikar's professional training."
          />
          <div className="mt-6">
            <Link href="/training/" className="text-sm text-accent hover:text-accent-hover">
              Explore Training →
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
