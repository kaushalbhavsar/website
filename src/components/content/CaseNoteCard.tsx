import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { CaseNote } from "@/lib/content/cases";

export function CaseNoteCard({ note }: { note: CaseNote }) {
  const href = note.body ? `/cases/${note.slug}/` : undefined;

  return (
    <Card hover className="flex flex-col h-full">
      <div className="flex items-center gap-2 mb-3">
        <Badge variant="mono">{note.category}</Badge>
        {note.status === "hypothetical" && (
          <Badge variant="muted">Hypothetical scenario</Badge>
        )}
        {note.status === "verified" && (
          <Badge variant="accent">Verified anonymised case</Badge>
        )}
      </div>
      <h3 className="text-lg font-semibold text-text-primary">
        {href ? (
          <Link href={href} className="hover:text-accent transition-colors">
            {note.title}
          </Link>
        ) : (
          note.title
        )}
      </h3>
      <p className="mt-3 text-sm text-text-secondary leading-relaxed flex-1">{note.summary}</p>
      {href && (
        <Link
          href={href}
          className="mt-6 inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-hover transition-colors group"
        >
          Read the case note
          <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      )}
    </Card>
  );
}
