import { notFound } from "next/navigation";
import Link from "next/link";
import { createMetadata, articleSchema, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { InsightCard } from "@/components/content/InsightCard";
import { articles, getArticleBySlug, getRelatedArticles } from "@/lib/content/articles";
import { getTrainingBridgeForCategory } from "@/lib/content/training";
import { portal } from "@/lib/portal";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return createMetadata({
    title: article.title,
    description: article.summary,
    path: `/insights/${slug}/`,
    type: "article",
    publishedTime: article.publishedAt,
    authors: ["Dr. Kaushal Bhavsar"],
    tags: [article.category],
  });
}

export default async function InsightArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getRelatedArticles(slug);
  const paragraphs = article.content.split("\n\n");
  const trainingBridge = getTrainingBridgeForCategory(article.category);

  return (
    <>
      <JsonLd data={[
        articleSchema({ ...article, description: article.summary }),
        breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Insights", url: "/insights/" },
          { name: article.title, url: `/insights/${slug}/` },
        ]),
      ]} />

      <article className="py-16 md:py-24">
        <Container size="narrow">
          <Badge variant="mono">{article.category}</Badge>
          <h1 className="mt-4 text-3xl md:text-4xl font-semibold text-text-primary tracking-tight">
            {article.title}
          </h1>
          <div className="mt-4 flex items-center gap-3 text-xs text-text-muted font-mono">
            <time dateTime={article.publishedAt}>{article.publishedAt}</time>
            <span>·</span>
            <span>{article.readingTime} min read</span>
          </div>

          <div className="mt-10 space-y-6 text-text-secondary leading-relaxed">
            {paragraphs.map((block, i) => {
              if (block.startsWith("## ")) {
                return (
                  <h2 key={i} className="text-xl font-semibold text-text-primary pt-4">
                    {block.replace("## ", "")}
                  </h2>
                );
              }
              return <p key={i}>{block}</p>;
            })}
          </div>

          <div className="mt-12 pt-8 border-t border-border space-y-4">
            <a href={portal.assessment} className="text-accent hover:text-accent-hover text-sm block">
              Need incident assistance? Start an assessment →
            </a>
            {trainingBridge && (
              <p className="text-sm text-text-muted">
                {trainingBridge.message}{" "}
                <Link href={trainingBridge.href} className="text-accent hover:text-accent-hover">
                  Explore Pratikar training →
                </Link>
              </p>
            )}
          </div>
        </Container>
      </article>

      {related.length > 0 && (
        <section className="py-16 bg-surface border-t border-border">
          <Container>
            <h2 className="text-xl font-semibold text-text-primary mb-8">Related insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((a) => (
                <InsightCard key={a.slug} article={a} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
