import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/hero/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema, courseSchema } from "@/lib/seo";
import { TrainingInstructorSection } from "@/components/training/TrainingInstructorSection";
import type { TrainingProgram } from "@/lib/content/training";

export function TrainingProgramTemplate({ program }: { program: TrainingProgram }) {
  const ctaHref =
    program.status === "Open"
      ? "/training/register-interest/"
      : "/training/register-interest/";

  const ctaLabel =
    program.status === "Open"
      ? "Apply for the Next Cohort"
      : program.status === "Upcoming"
        ? "Register Interest"
        : "Register Interest";

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Training", url: "/training/" },
            { name: program.title, url: `/training/${program.slug}/` },
          ]),
          faqSchema(program.faqs),
          courseSchema(program),
        ]}
      />

      <PageHero
        eyebrow={program.category}
        title={program.title}
        description={program.positioning || program.description}
      />

      <section className="py-8 border-b border-border">
        <Container size="narrow">
          <div className="flex flex-wrap gap-3 font-mono text-xs text-text-muted tracking-wider uppercase">
            <span>PROGRAM / {program.category}</span>
            <span>LEVEL / {program.level}</span>
            <span>FORMAT / {program.format}</span>
            <Badge variant="muted">{program.status}</Badge>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container size="narrow">
          <SectionHeading title="About this program" />
          <p className="mt-6 text-text-secondary leading-relaxed">{program.description}</p>
        </Container>
      </section>

      <section className="py-16 bg-surface border-y border-border">
        <Container size="narrow">
          <SectionHeading title="Who this is for" />
          <ul className="mt-6 space-y-2">
            {program.audience.map((item) => (
              <li key={item} className="text-sm text-text-secondary flex gap-2">
                <span className="text-accent shrink-0">—</span>{item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16">
        <Container size="narrow">
          <SectionHeading title="Who this is not for" />
          <ul className="mt-6 space-y-2">
            {program.notFor.map((item) => (
              <li key={item} className="text-sm text-text-secondary flex gap-2">
                <span className="text-text-muted shrink-0">—</span>{item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {program.prerequisites && program.prerequisites.length > 0 && (
        <section className="py-16 bg-surface border-y border-border">
          <Container size="narrow">
            <SectionHeading title="Prerequisites" />
            <ul className="mt-6 space-y-2">
              {program.prerequisites.map((item) => (
                <li key={item} className="text-sm text-text-secondary flex gap-2">
                  <span className="text-accent shrink-0">—</span>{item}
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <section className="py-16">
        <Container size="narrow">
          <SectionHeading title="Learning outcomes" />
          <ul className="mt-6 space-y-2">
            {program.outcomes.map((item) => (
              <li key={item} className="text-sm text-text-secondary flex gap-2">
                <span className="text-accent shrink-0">—</span>{item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 bg-surface border-y border-border">
        <Container size="narrow">
          <SectionHeading title="Curriculum" />
          <div className="mt-10 space-y-6">
            {program.modules.map((mod, i) => (
              <Card key={mod.title}>
                <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 font-semibold text-text-primary">{mod.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{mod.description}</p>
                <ul className="mt-3 space-y-1">
                  {mod.topics.map((t) => (
                    <li key={t} className="text-xs text-text-muted flex gap-2">
                      <span>·</span>{t}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {program.labs && program.labs.length > 0 && (
        <section className="py-16">
          <Container size="narrow">
            <SectionHeading title="Practical labs" />
            <ul className="mt-6 space-y-2">
              {program.labs.map((lab) => (
                <li key={lab} className="text-sm text-text-secondary flex gap-2">
                  <span className="text-accent shrink-0">—</span>{lab}
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <section className="py-16 bg-surface border-y border-border">
        <Container size="narrow">
          <SectionHeading title="Format & availability" />
          <div className="mt-6 space-y-3 text-sm text-text-secondary">
            <p><strong className="text-text-primary">Format:</strong> {program.format}</p>
            {program.duration && <p><strong className="text-text-primary">Duration:</strong> {program.duration}</p>}
            <p><strong className="text-text-primary">Level:</strong> {program.level}</p>
            <p><strong className="text-text-primary">Status:</strong> {program.status}</p>
            {program.priceNote && (
              <p><strong className="text-text-primary">Pricing:</strong> {program.priceNote}</p>
            )}
            {program.price && program.currency && (
              <p><strong className="text-text-primary">Price:</strong> {program.currency === "INR" ? "₹" : "$"}{program.price.toLocaleString()}</p>
            )}
          </div>
        </Container>
      </section>

      <TrainingInstructorSection />

      <section className="py-16">
        <Container size="narrow">
          <SectionHeading title="Frequently asked questions" />
          <div className="mt-8 space-y-4">
            {program.faqs.map((faq) => (
              <Card key={faq.question}>
                <h3 className="font-semibold text-text-primary text-sm">{faq.question}</h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {(program.relatedService || program.relatedResearch) && (
        <section className="py-16 bg-surface border-y border-border">
          <Container size="narrow">
            <SectionHeading title="Related at Pratikar" />
            <div className="mt-6 flex flex-wrap gap-4">
              {program.relatedResearch && (
                <Link href="/research/" className="text-sm text-accent hover:text-accent-hover">
                  Research →
                </Link>
              )}
              {program.relatedService && (
                <Link href={program.relatedService} className="text-sm text-accent hover:text-accent-hover">
                  Related service →
                </Link>
              )}
              <Link href="/insights/" className="text-sm text-accent hover:text-accent-hover">
                Insights →
              </Link>
            </div>
          </Container>
        </section>
      )}

      <section className="py-16">
        <Container size="narrow" className="text-center">
          <Button href={ctaHref} size="lg">{ctaLabel}</Button>
          <p className="mt-4">
            <Link href="/training/corporate/" className="text-sm text-text-muted hover:text-text-secondary">
              Discuss corporate training →
            </Link>
          </p>
        </Container>
      </section>
    </>
  );
}
