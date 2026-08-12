import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import type { TrainingProgram } from "@/lib/content/training";

const statusVariant = {
  Open: "accent" as const,
  Upcoming: "default" as const,
  "On Request": "muted" as const,
  Closed: "muted" as const,
};

export function TrainingProgramCard({ program }: { program: TrainingProgram }) {
  const ctaLabel =
    program.status === "Open"
      ? "View Program Details"
      : program.status === "Upcoming"
        ? "Register Interest"
        : "Register Interest";

  return (
    <Card hover className="flex flex-col h-full">
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <Badge variant="mono">{program.category}</Badge>
        <Badge variant={statusVariant[program.status]}>{program.status}</Badge>
        <Badge variant="muted">{program.level}</Badge>
      </div>
      <h3 className="text-lg font-semibold text-text-primary">{program.title}</h3>
      {program.positioning && (
        <p className="mt-1 text-sm text-text-muted italic">{program.positioning}</p>
      )}
      <p className="mt-3 text-sm text-text-secondary leading-relaxed flex-1">{program.description}</p>
      <div className="mt-4 font-mono text-[10px] text-text-muted tracking-wider uppercase">
        {program.format}{program.duration ? ` · ${program.duration}` : ""}
      </div>
      <Link
        href={`/training/${program.slug}/`}
        className="mt-6 inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-hover transition-colors group"
      >
        {ctaLabel}
        <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
      </Link>
    </Card>
  );
}
