import { notFound } from "next/navigation";
import Link from "next/link";
import { createMetadata, articleSchema, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { InsightCard } from "@/components/content/InsightCard";
import { CaseTimeline } from "@/components/investigation/CaseTimeline";
import { getPublishedCaseNotes, getCaseBySlug } from "@/lib/content/cases";
import { getArticleBySlug, type Article } from "@/lib/content/articles";
import { getServiceBySlug, type Service } from "@/lib/content/services";
import { getTrainingBridgeForCategory } from "@/lib/content/training";
import { portal } from "@/lib/portal";

export function generateStaticParams() {
  return getPublishedCaseNotes().map((note) => ({ slug: note.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const note = getCaseBySlug(slug);
  if (!note?.body) return {};
  return createMetadata({
    title: note.title,
    description: note.summary,
    path: `/cases/${slug}/`,
    type: "article",
    publishedTime: note.publishedAt,
    authors: ["Dr. Kaushal Bhavsar"],
    tags: [note.category, "anonymised case"],
  });
}

export default async function CaseNotePage({ params }: Props) {
  const { slug } = await params;
  const note = getCaseBySlug(slug);
  if (!note?.body) notFound();

  const paragraphs = note.body.split("\n\n");
  const relatedInsights = (note.relatedInsightSlugs ?? [])
    .map((insightSlug) => getArticleBySlug(insightSlug))
    .filter((article): article is Article => article !== undefined);
  const relatedServices = (note.relatedServiceSlugs ?? [])
    .map((serviceSlug) => getServiceBySlug(serviceSlug))
    .filter((service): service is Service => service !== undefined);
  const trainingBridge = getTrainingBridgeForCategory(note.category);

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            title: note.title,
            description: note.summary,
            slug: note.slug,
            publishedAt: note.publishedAt ?? "",
            category: note.category,
            pathPrefix: "cases",
          }),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Technical Case Notes", url: "/cases/" },
            { name: note.title, url: `/cases/${slug}/` },
          ]),
        ]}
      />

      <article className="py-16 md:py-24">
        <Container size="narrow">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="mono">{note.category}</Badge>
            <Badge variant="accent">Verified anonymised case</Badge>
          </div>
          <h1 className="mt-4 text-3xl md:text-4xl font-semibold text-text-primary tracking-tight">
            {note.title}
          </h1>
          {note.publishedAt && (
            <div className="mt-4 flex items-center gap-3 text-xs text-text-muted font-mono">
              <time dateTime={note.publishedAt}>{note.publishedAt}</time>
              {note.readingTime && (
                <>
                  <span>·</span>
                  <span>{note.readingTime} min read</span>
                </>
              )}
            </div>
          )}

          {note.status === "verified" && (
            <p className="mt-8 text-sm text-text-muted leading-relaxed border-l-2 border-border pl-4">
              Identifying details have been removed. This is an anonymised account of a verified
              investigation. It is not a customer case study.
            </p>
          )}

          <p className="mt-8 text-text-secondary leading-relaxed">{note.summary}</p>

          {note.timeline && note.timeline.length > 0 && (
            <div className="mt-10">
              <CaseTimeline events={note.timeline} />
            </div>
          )}

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

          {relatedServices.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border">
              <h2 className="text-lg font-semibold text-text-primary">Related services</h2>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedServices.map((service) => (
                  <Card key={service.slug} hover>
                    <h3 className="font-semibold text-text-primary text-sm">{service.shortTitle}</h3>
                    <Link
                      href={`/services/${service.slug}/`}
                      className="mt-3 inline-block text-sm text-accent hover:text-accent-hover"
                    >
                      {service.linkLabel} →
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          )}

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

      {relatedInsights.length > 0 && (
        <section className="py-16 bg-surface border-t border-border">
          <Container>
            <h2 className="text-xl font-semibold text-text-primary mb-8">Related insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedInsights.map((article) => (
                <InsightCard key={article.slug} article={article} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
