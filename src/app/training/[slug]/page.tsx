import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/seo";
import { TrainingProgramTemplate } from "@/components/training/TrainingProgramTemplate";
import { programs, getProgramBySlug } from "@/lib/content/training";

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) return {};
  return createMetadata({
    title: program.title,
    description: program.description,
    path: `/training/${slug}/`,
  });
}

export default async function TrainingProgramPage({ params }: Props) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) notFound();
  return <TrainingProgramTemplate program={program} />;
}
