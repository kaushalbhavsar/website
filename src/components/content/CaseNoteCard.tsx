import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { CaseNote } from "@/lib/content/cases";

export function CaseNoteCard({ note }: { note: CaseNote }) {
  return (
    <Card hover>
      <div className="flex items-center gap-2 mb-3">
        <Badge variant="mono">{note.category}</Badge>
        {note.status === "hypothetical" && (
          <Badge variant="muted">Hypothetical scenario</Badge>
        )}
      </div>
      <h3 className="text-lg font-semibold text-text-primary">{note.title}</h3>
      <p className="mt-3 text-sm text-text-secondary leading-relaxed">{note.summary}</p>
    </Card>
  );
}
