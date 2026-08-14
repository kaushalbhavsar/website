import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { portal } from "@/lib/portal";

type IncidentCTAProps = {
  variant?: "default" | "compact";
};

export function IncidentCTA({ variant = "default" }: IncidentCTAProps) {
  if (variant === "compact") {
    return (
      <section className="py-12 bg-accent-soft border-y border-accent/20">
        <Container>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-accent mb-2">
                Security Incident?
              </p>
              <p className="text-text-primary font-medium">
                The first few decisions can determine how much evidence survives.
              </p>
            </div>
            <Button href={portal.assessment}>Start Incident Assessment</Button>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-20 md:py-28 bg-accent-soft border-y border-accent/20">
      <Container size="narrow">
        <div className="text-center">
          <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">
            Security Incident?
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-text-primary tracking-tight">
            The first few decisions can determine how much evidence survives.
          </h2>
          <p className="mt-4 text-text-secondary text-lg leading-relaxed">
            Before wiping systems, reinstalling software or deleting suspicious files,
            consider whether those actions could destroy evidence needed to understand the incident.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={portal.assessment} size="lg">
              Start Incident Assessment
            </Button>
            <Link
              href="/incident-response/first-steps"
              className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group"
            >
              What to Do First
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
