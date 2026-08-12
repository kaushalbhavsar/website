import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/hero/PageHero";
import { Container } from "@/components/layout/Container";
import { CaseNoteCard } from "@/components/content/CaseNoteCard";
import { caseNotes } from "@/lib/content/cases";

export const metadata = createMetadata({
  title: "Technical Case Notes",
  description: "Anonymised investigation lessons and hypothetical technical scenarios. Not customer case studies — editorial notes from incident investigation work.",
  path: "/cases/",
});

export default function CasesPage() {
  return (
    <>
      <PageHero
        eyebrow="Technical Case Notes"
        title="Investigation scenarios and lessons"
        description="These notes describe common investigation patterns and lessons. They are hypothetical scenarios unless explicitly marked as verified anonymised cases."
      />

      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseNotes.map((note) => (
              <CaseNoteCard key={note.slug} note={note} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
