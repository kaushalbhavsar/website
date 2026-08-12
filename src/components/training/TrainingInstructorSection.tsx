import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { instructorCredentials } from "@/lib/content/training";
import { siteConfig } from "@/lib/site";

export function TrainingInstructorSection() {
  return (
    <section className="py-16 bg-surface border-y border-border">
      <Container size="narrow">
        <SectionHeading
          eyebrow="Instructor"
          title={siteConfig.founder.name}
          description="Training connects directly to investigation experience, published research and security engineering practice."
        />
        <Card className="mt-8">
          <ul className="space-y-2">
            {instructorCredentials.map((item) => (
              <li key={item} className="text-sm text-text-secondary flex gap-2">
                <span className="text-accent shrink-0">—</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/about/" className="text-sm text-accent hover:text-accent-hover">
              About →
            </Link>
            <Link href="/research/" className="text-sm text-accent hover:text-accent-hover">
              Research →
            </Link>
          </div>
        </Card>
      </Container>
    </section>
  );
}
