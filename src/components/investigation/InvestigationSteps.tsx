const steps = [
  { num: "01", title: "Preserve", description: "Avoid destroying evidence required to understand the attack." },
  { num: "02", title: "Investigate", description: "Determine entry points, affected systems and attacker activity." },
  { num: "03", title: "Contain", description: "Reduce further exposure while protecting business operations." },
  { num: "04", title: "Recover", description: "Remove persistence, restore confidence and strengthen controls." },
];

export function InvestigationSteps() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {steps.map((step) => (
        <div key={step.num} className="relative">
          <span className="font-mono text-xs text-accent tracking-wider">{step.num}</span>
          <h3 className="mt-2 text-lg font-semibold text-text-primary">{step.title}</h3>
          <p className="mt-2 text-sm text-text-secondary leading-relaxed">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
