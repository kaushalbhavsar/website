import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="py-16 md:py-24 border-b border-border">
      <Container size="narrow">
        {eyebrow && <Badge variant="mono" className="mb-4">{eyebrow}</Badge>}
        <h1 className="text-3xl md:text-4xl font-semibold text-text-primary tracking-tight">{title}</h1>
        {description && (
          <p className="mt-6 text-lg text-text-secondary leading-relaxed">{description}</p>
        )}
      </Container>
    </section>
  );
}
