import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/hero/PageHero";
import { Container } from "@/components/layout/Container";
import { TrainingInterestForm } from "@/components/forms/TrainingInterestForm";

export const metadata = createMetadata({
  title: "Register Training Interest",
  description:
    "Register interest in Pratikar cybersecurity training — professional programs, corporate workshops and investigation-based labs.",
  path: "/training/register-interest/",
});

export default function RegisterInterestPage() {
  return (
    <>
      <PageHero
        eyebrow="Training"
        title="Register interest"
        description="Tell us what you want to learn. We will contact you when relevant programs or cohorts are announced — no artificial scarcity or fabricated dates."
      />

      <section className="py-16">
        <Container size="narrow">
          <TrainingInterestForm />
        </Container>
      </section>
    </>
  );
}
