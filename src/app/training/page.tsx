import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/hero/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { TrainingCategoryCard } from "@/components/training/TrainingCategoryCard";
import { TrainingProgramCard } from "@/components/training/TrainingProgramCard";
import { InvestigationLabSection } from "@/components/training/InvestigationLabSection";
import { TrainingInstructorSection } from "@/components/training/TrainingInstructorSection";
import { InsightCard } from "@/components/content/InsightCard";
import {
  trainingCategories,
  trainingPhilosophy,
  programs,
  getFeaturedProgram,
} from "@/lib/content/training";
import { articles } from "@/lib/content/articles";

export const metadata = createMetadata({
  title: "Cybersecurity Training",
  description:
    "Professional cybersecurity training built around systems, evidence, attacks and practical investigation. Incident response, malware, application security and insider threats.",
  path: "/training/",
});

const trainingInsights = articles.filter((a) =>
  ["Incident Response", "Malware", "Insider Threats", "Investigations", "Security Architecture"].includes(a.category)
).slice(0, 3);

export default function TrainingPage() {
  const featured = getFeaturedProgram();

  return (
    <>
      <section className="relative py-20 md:py-32 overflow-hidden border-b border-border">
        <Container>
          <p className="font-mono text-xs tracking-widest uppercase text-text-muted mb-4">
            Cybersecurity Training
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-text-primary tracking-tight leading-tight max-w-3xl">
            Learn security by understanding how attacks actually work.
          </h1>
          <p className="mt-6 text-lg text-text-secondary leading-relaxed max-w-2xl">
            Training built around real systems, incident investigation, malware, application security
            and the reasoning security professionals use when things go wrong.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button href="#programs" size="lg">Explore Training</Button>
            <Button href="/training/corporate/" variant="outline" size="lg">Corporate Training</Button>
          </div>
          <p className="mt-6 font-mono text-xs text-text-muted tracking-wide">
            Security Engineering · Incident Response · Malware · Application Security · Insider Threats
          </p>
        </Container>
      </section>

      <section className="py-20 bg-surface border-b border-border">
        <Container size="narrow">
          <SectionHeading title="Security training should go beyond tools." />
          <div className="mt-8 space-y-4 text-text-secondary leading-relaxed">
            <p>
              Cybersecurity professionals are often taught commands, products and checklists.
              Pratikar training focuses instead on understanding:
            </p>
            <ul className="space-y-2 pl-4">
              {[
                "what is happening",
                "why it is happening",
                "what evidence supports the conclusion",
                "how an attacker thinks",
                "how systems fail",
                "how to investigate those failures",
                "how to make security decisions",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm">
                  <span className="text-accent shrink-0">—</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading title="Training philosophy" align="center" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {trainingPhilosophy.map((item) => (
              <Card key={item.title}>
                <h3 className="font-semibold text-text-primary">{item.title}</h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-surface border-y border-border" id="programs">
        <Container>
          <SectionHeading
            title="Training for security professionals"
            description="Structured learning paths across the domains Pratikar investigates in practice."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingCategories.map((cat) => (
              <TrainingCategoryCard key={cat.slug} category={cat} />
            ))}
          </div>
        </Container>
      </section>

      {featured && (
        <section className="py-20">
          <Container>
            <SectionHeading eyebrow="Featured Program" title="Flagship training" />
            <div className="mt-10 max-w-xl">
              <TrainingProgramCard program={featured} />
            </div>
          </Container>
        </section>
      )}

      <InvestigationLabSection />

      <section className="py-20 bg-surface border-y border-border">
        <Container>
          <SectionHeading
            title="Corporate training"
            description="Workshops adapted to your architecture, technology stack and team maturity."
          />
          <p className="mt-4 text-sm text-text-secondary max-w-2xl">
            Exercises can mirror realistic incidents without using sensitive production information.
          </p>
          <div className="mt-8">
            <Button href="/training/corporate/" variant="outline">Discuss Corporate Training</Button>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container size="narrow">
          <SectionHeading
            eyebrow="Research → Practice"
            title="From research to training"
            description="Research on insider threats, malware and security analytics informs how Pratikar teaches investigation and security engineering."
          />
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/research/" className="text-sm text-accent hover:text-accent-hover">
              View research →
            </Link>
            <Link href="/insights/" className="text-sm text-accent hover:text-accent-hover">
              Read insights →
            </Link>
          </div>
        </Container>
      </section>

      <TrainingInstructorSection />

      <section className="py-20">
        <Container>
          <SectionHeading title="Selected insights for learners" />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {trainingInsights.map((a) => (
              <InsightCard key={a.slug} article={a} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-accent-soft border-y border-accent/20">
        <Container size="narrow" className="text-center">
          <SectionHeading
            title="Register interest"
            description="No cohort dates are fabricated. Register to hear when programs open for enrollment."
            align="center"
          />
          <div className="mt-8">
            <Button href="/training/register-interest/" size="lg">Register Interest</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
