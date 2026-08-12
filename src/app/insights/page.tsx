import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/hero/PageHero";
import { Container } from "@/components/layout/Container";
import { InsightCard } from "@/components/content/InsightCard";
import { Badge } from "@/components/ui/Badge";
import { articles, articleCategories } from "@/lib/content/articles";

export const metadata = createMetadata({
  title: "Insights",
  description: "Technical articles on incident response, malware investigation, insider threats, security architecture and cybersecurity engineering.",
  path: "/insights/",
});

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Technical writing for investigators"
        description="Practical articles on incident response, evidence preservation, investigation methodology and security architecture."
      />

      <section className="py-8 border-b border-border">
        <Container>
          <div className="flex flex-wrap gap-2">
            {articleCategories.map((cat) => (
              <Badge key={cat} variant="muted">{cat}</Badge>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <InsightCard key={article.slug} article={article} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
