const methodologySteps = [
  { title: "Signal", description: "Something unusual has occurred." },
  { title: "Scope", description: "Identify potentially affected users, systems and infrastructure." },
  { title: "Evidence", description: "Collect relevant logs, artefacts and technical indicators." },
  { title: "Timeline", description: "Reconstruct what happened and in what sequence." },
  { title: "Root Cause", description: "Determine how the incident occurred." },
  { title: "Remediation", description: "Remove persistence and close security weaknesses." },
  { title: "Resilience", description: "Improve controls to reduce recurrence." },
];

export function MethodologyChain() {
  return (
    <div className="relative">
      <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
      <div className="space-y-8 lg:space-y-0">
        {methodologySteps.map((step, i) => (
          <div
            key={step.title}
            className={`lg:flex lg:items-center lg:gap-8 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
          >
            <div className={`lg:w-1/2 ${i % 2 === 0 ? "lg:text-right lg:pr-12" : "lg:text-left lg:pl-12"}`}>
              <div className={`inline-block rounded-lg border border-border bg-surface p-5 ${i % 2 === 0 ? "lg:ml-auto" : ""}`}>
                <h3 className="font-semibold text-text-primary">{step.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{step.description}</p>
              </div>
            </div>
            <div className="hidden lg:flex lg:w-8 lg:h-8 lg:shrink-0 items-center justify-center rounded-full border-2 border-accent bg-background z-10">
              <span className="w-2 h-2 rounded-full bg-accent" />
            </div>
            <div className="lg:w-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
}
