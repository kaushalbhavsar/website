import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { EvidenceGraph } from "@/components/investigation/EvidenceGraph";

export function IncidentHero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <Badge variant="mono" className="mb-6">
              Cyber Incident Response & Security Investigation
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-text-primary tracking-tight leading-tight">
              When something goes wrong, understand exactly what happened.
            </h1>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed max-w-xl">
              Pratikar helps organizations investigate cybersecurity incidents, contain threats,
              recover safely and understand the weaknesses that allowed the incident to occur.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button href="/incident/" size="lg">Get Incident Help</Button>
              <Button href="/expertise/" variant="outline" size="lg">Explore Our Expertise</Button>
            </div>
            <p className="mt-6 font-mono text-xs text-text-muted tracking-wide">
              Incident Investigation · Malware Analysis · Breach Response · Security Advisory
            </p>
          </div>
          <div className="lg:pl-8">
            <EvidenceGraph />
          </div>
        </div>
      </Container>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
