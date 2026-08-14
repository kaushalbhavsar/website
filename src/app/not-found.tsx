import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { portal } from "@/lib/portal";

export default function NotFound() {
  return (
    <section className="py-32">
      <Container size="narrow" className="text-center">
        <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-4">
          Error 404
        </p>
        <h1 className="text-3xl font-semibold text-text-primary">Page not found</h1>
        <p className="mt-4 text-text-secondary">
          The page you requested does not exist or has been moved.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/">Return Home</Button>
          <a href={portal.assessment} className="text-sm text-accent hover:text-accent-hover">
            Need incident help?
          </a>
        </div>
      </Container>
    </section>
  );
}
