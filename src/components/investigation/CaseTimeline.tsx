import type { CaseTimelineEvent } from "@/lib/content/cases";

export function CaseTimeline({ events }: { events: CaseTimelineEvent[] }) {
  return (
    <div className="relative rounded-lg border border-border bg-surface p-6 font-mono text-xs overflow-hidden">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-border gap-4">
        <span className="text-text-muted tracking-widest uppercase">Reconstructed timeline</span>
        <span className="text-text-muted shrink-0">ANONYMISED · CONFIDENCE: HIGH</span>
      </div>

      <div className="space-y-5">
        {events.map((item, i) => (
          <div key={`${item.time}-${i}`} className="flex gap-4 items-start">
            <span className="text-text-muted shrink-0 w-28 sm:w-36 leading-relaxed">{item.time}</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-accent/70 text-[10px] tracking-wider">{item.label}</span>
              </div>
              <p className="text-text-secondary leading-relaxed">{item.event}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-4 border-t border-border flex items-center justify-center gap-6 text-[10px] text-text-muted tracking-wider">
        <span>IDENTITY</span>
        <span className="text-border">→</span>
        <span>HOST</span>
        <span className="text-border">→</span>
        <span>EVENT</span>
      </div>
    </div>
  );
}
