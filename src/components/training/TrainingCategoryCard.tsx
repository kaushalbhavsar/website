import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import type { TrainingCategory } from "@/lib/content/training";

export function TrainingCategoryCard({ category }: { category: TrainingCategory }) {
  return (
    <Card hover className="flex flex-col h-full">
      <h3 className="text-lg font-semibold text-text-primary">{category.title}</h3>
      <p className="mt-2 text-sm text-text-secondary leading-relaxed">{category.description}</p>
      <ul className="mt-4 space-y-1.5 flex-1">
        {category.topics.slice(0, 5).map((topic) => (
          <li key={topic} className="text-xs text-text-muted flex gap-2">
            <span className="text-text-muted shrink-0">·</span>
            {topic}
          </li>
        ))}
        {category.topics.length > 5 && (
          <li className="text-xs text-text-muted">+ {category.topics.length - 5} more</li>
        )}
      </ul>
      <Link
        href={category.href}
        className="mt-6 inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-hover transition-colors group"
      >
        {category.ctaLabel}
        <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
      </Link>
    </Card>
  );
}
