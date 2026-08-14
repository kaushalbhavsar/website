import { portal, portalCta } from "@/lib/portal";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const steps = [
  {
    title: "Describe what happened",
    body: "Answer a short set of questions about the situation. No account is required to begin.",
  },
  {
    title: "Receive preliminary triage",
    body: "An explainable severity estimate with the factors that produced it. This is triage input, not a forensic conclusion.",
  },
  {
    title: "Share evidence securely",
    body: "Submit logs, screenshots and documents into a restricted case workspace.",
  },
  {
    title: "Work with an investigator",
    body: "A named investigator reviews the case and directs the response.",
  },
];

type PortalHandoffProps = {
  className?: string;
  showTrainingLink?: boolean;
};

export function PortalHandoff({ className, showTrainingLink = false }: PortalHandoffProps) {
  return (
    <div className={cn("space-y-8", className)}>
      <ol className="space-y-5">
        {steps.map((step, i) => (
          <li key={step.title} className="flex gap-4">
            <span className="font-mono text-xs text-accent shrink-0 pt-1">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-semibold text-text-primary">{step.title}</h3>
              <p className="mt-1 text-sm text-text-secondary leading-relaxed">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button href={portal.assessment} size="lg">
          {portalCta.report}
        </Button>
        <Button href={portal.auth} variant="outline" size="lg">
          {portalCta.existingCase}
        </Button>
      </div>

      <p className="text-xs text-text-muted leading-relaxed">
        Incident information is only made available to authorised people working on your case.
        Files submitted as evidence are tracked with integrity metadata.
      </p>

      {showTrainingLink && (
        <p className="text-sm text-text-secondary">
          Looking for professional training rather than incident help?{" "}
          <a href="/training/register-interest/" className="text-accent hover:text-accent-hover underline underline-offset-2">
            Register training interest
          </a>
          .
        </p>
      )}
    </div>
  );
}
