import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export function InvestigationLabSection() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          title="Don't solve CTF flags. Investigate incidents."
          description="Traditional security labs often tell the learner exactly what vulnerability to find. Pratikar labs sometimes begin with uncertainty — the way real investigations do."
          align="center"
        />
        <Card className="mt-12 max-w-3xl mx-auto font-mono text-sm">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-border text-xs text-text-muted">
            <span>LAB / INVESTIGATION</span>
            <span>LEVEL / INTERMEDIATE</span>
          </div>
          <div className="space-y-3 text-text-secondary">
            <p><span className="text-text-muted tabular-nums">09:42</span> — The finance team reports that an internal application is behaving strangely.</p>
            <p className="text-text-muted text-xs pt-2">You receive:</p>
            <ul className="text-xs space-y-1 text-text-muted pl-4">
              <li>· application logs</li>
              <li>· authentication logs</li>
              <li>· server artefacts</li>
              <li>· network events</li>
              <li>· user reports</li>
            </ul>
            <p className="text-text-primary pt-3">Your task: <span className="text-accent">Determine what happened.</span></p>
          </div>
          <p className="mt-6 text-[10px] text-text-muted text-center">
            Decorative lab scenario — illustrative training format
          </p>
        </Card>
      </Container>
    </section>
  );
}
