import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { IncidentHero } from "@/components/hero/IncidentHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/services/ServiceCard";
import { InvestigationSteps } from "@/components/investigation/InvestigationSteps";
import { MethodologyChain } from "@/components/investigation/MethodologyChain";
import { IncidentCTA } from "@/components/conversion/IncidentCTA";
import { InsightCard } from "@/components/content/InsightCard";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { services } from "@/lib/content/services";
import { articles } from "@/lib/content/articles";
import { fieldNotes } from "@/lib/content/cases";

const expertiseMatrix = [
  {
    category: "Incident Response",
    items: ["security incident investigation", "breach analysis", "compromise assessment", "containment planning", "recovery guidance"],
  },
  {
    category: "Malware & Web Security",
    items: ["malicious code analysis", "compromised website investigation", "persistence analysis", "web attack investigation", "indicators of compromise"],
  },
  {
    category: "Identity & Access",
    items: ["suspicious authentication", "account compromise", "privilege abuse", "access-control weaknesses", "identity attack investigation"],
  },
  {
    category: "Data Security",
    items: ["sensitive-data exposure", "access-path analysis", "data-flow review", "privacy-oriented security architecture"],
  },
  {
    category: "Insider Threats",
    items: ["behavioural signals", "privilege misuse", "anomalous activity", "insider-risk investigation", "evidence correlation"],
  },
  {
    category: "Cloud & Application Security",
    items: ["cloud security architecture", "application attack surfaces", "IAM", "logging and monitoring", "security control design"],
  },
];

const differentiators = [
  {
    title: "Investigation before assumption",
    description: "We avoid jumping to conclusions before examining technical evidence.",
  },
  {
    title: "Technical depth",
    description: "Security incidents often cross applications, infrastructure, identities, malware and human behaviour. Investigation must connect those signals.",
  },
  {
    title: "Independent perspective",
    description: "Advice should be driven by the technical situation rather than by products that need to be sold.",
  },
  {
    title: "Actionable findings",
    description: "An investigation is only useful when findings translate into decisions, remediation and stronger controls.",
  },
];

const homepageServices = services.filter((s) =>
  ["incident-investigation", "breach-remediation", "malware-analysis", "security-architecture-review", "expert-reports", "security-advisory"].includes(s.slug)
);

export default function HomePage() {
  return (
    <>
      <IncidentHero />

      {/* Immediate Incident Section */}
      <section className="py-20 bg-surface border-y border-border">
        <Container>
          <SectionHeading
            title="Dealing with an active security incident?"
            description="When systems behave unexpectedly, accounts are compromised or suspicious activity appears, the first priority is preserving evidence while determining the actual scope of the incident."
          />
          <div className="mt-12">
            <InvestigationSteps />
          </div>
          <div className="mt-10 text-center">
            <Button href="/incident/" size="lg">Talk to an Incident Specialist</Button>
          </div>
        </Container>
      </section>

      {/* Core Services */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Core Services"
            title="Investigate. Contain. Recover. Strengthen."
            description="Focused expertise for serious cybersecurity incidents — not a catalogue of unrelated services."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {homepageServices.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                description={service.description}
                href={`/services/${service.slug}/`}
                linkLabel={service.linkLabel}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Methodology */}
      <section className="py-20 bg-surface border-y border-border">
        <Container>
          <SectionHeading
            eyebrow="Methodology"
            title="From uncertainty to evidence."
            align="center"
          />
          <div className="mt-16">
            <MethodologyChain />
          </div>
        </Container>
      </section>

      {/* Why Pratikar */}
      <section className="py-20">
        <Container>
          <SectionHeading title="Why Pratikar" description="Authority built through methodology, not marketing claims." />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {differentiators.map((d) => (
              <Card key={d.title}>
                <h3 className="font-semibold text-text-primary">{d.title}</h3>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed">{d.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Expertise Matrix */}
      <section className="py-20 bg-surface border-y border-border">
        <Container>
          <SectionHeading title="Expertise" description="Technical depth across the domains that matter during investigation." />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseMatrix.map((group) => (
              <div key={group.category}>
                <h3 className="font-semibold text-text-primary mb-4">{group.category}</h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-text-secondary flex gap-2">
                      <span className="text-text-muted">·</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/expertise/" className="text-sm text-accent hover:text-accent-hover">
              View full expertise →
            </Link>
          </div>
        </Container>
      </section>

      {/* Incident CTA */}
      <IncidentCTA />

      {/* Field Notes */}
      <section className="py-20">
        <Container size="narrow">
          <SectionHeading eyebrow="Field Notes" title="Lessons from investigation work" align="center" />
          <div className="mt-10 space-y-6">
            {fieldNotes.map((note, i) => (
              <blockquote key={i} className="border-l-2 border-accent pl-6 text-text-secondary italic">
                {note}
              </blockquote>
            ))}
          </div>
        </Container>
      </section>

      {/* Insights Preview */}
      <section className="py-20 bg-surface border-y border-border">
        <Container>
          <SectionHeading title="Insights" description="Technical writing for people who investigate incidents." />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.slice(0, 3).map((a) => (
              <InsightCard key={a.slug} article={a} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/insights/" variant="outline">View All Insights</Button>
          </div>
        </Container>
      </section>

      {/* Microcopy annotation */}
      <div className="py-6 border-t border-border">
        <Container>
          <p className="font-mono text-[10px] text-text-muted text-center tracking-widest uppercase">
            Assess → Investigate → Contain → Recover · Evidence Before Assumption
          </p>
        </Container>
      </div>
    </>
  );
}
