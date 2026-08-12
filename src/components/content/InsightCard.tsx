import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { Article } from "@/lib/content/articles";

export function InsightCard({ article }: { article: Article }) {
  return (
    <Card hover className="flex flex-col h-full">
      <Badge variant="mono" className="self-start">{article.category}</Badge>
      <h3 className="mt-4 text-lg font-semibold text-text-primary">
        <Link href={`/insights/${article.slug}/`} className="hover:text-accent transition-colors">
          {article.title}
        </Link>
      </h3>
      <p className="mt-3 text-sm text-text-secondary leading-relaxed flex-1">{article.summary}</p>
      <div className="mt-4 flex items-center gap-3 text-xs text-text-muted font-mono">
        <time dateTime={article.publishedAt}>{article.publishedAt}</time>
        <span>·</span>
        <span>{article.readingTime} min read</span>
      </div>
    </Card>
  );
}
