const timelineEvents = [
  { time: "03:14:22", event: "Authentication anomaly detected", label: "EVIDENCE / AUTH" },
  { time: "03:17:08", event: "Privilege escalation", label: "EVIDENCE / HOST" },
  { time: "03:22:41", event: "Unknown executable observed", label: "EVIDENCE / HOST" },
  { time: "03:27:16", event: "Outbound connection initiated", label: "EVIDENCE / NETWORK" },
  { time: "03:31:54", event: "Investigation boundary established", label: "EVENT 014" },
];

export function EvidenceGraph() {
  return (
    <div className="relative rounded-lg border border-border bg-surface p-6 font-mono text-xs overflow-hidden">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
        <span className="text-text-muted tracking-widest uppercase">Incident Timeline</span>
        <span className="text-text-muted">UTC+05:30 · CONFIDENCE: HIGH</span>
      </div>

      <div className="space-y-4">
        {timelineEvents.map((item, i) => (
          <div key={i} className="flex gap-4 items-start group">
            <span className="text-text-muted shrink-0 w-20 tabular-nums">{item.time}</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-accent/70 text-[10px] tracking-wider">{item.label}</span>
              </div>
              <p className="text-text-secondary group-hover:text-text-primary transition-colors">
                {item.event}
              </p>
            </div>
            {i < timelineEvents.length - 1 && (
              <div className="absolute left-[5.5rem] mt-6 w-px h-4 bg-border hidden sm:block" style={{ marginTop: `${i * 3.5 + 2}rem` }} />
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 pt-4 border-t border-border flex items-center justify-center gap-6 text-[10px] text-text-muted tracking-wider">
        <span>IDENTITY</span>
        <span className="text-border">→</span>
        <span>HOST</span>
        <span className="text-border">→</span>
        <span>EVENT</span>
        <span className="text-border">→</span>
        <span>NETWORK</span>
      </div>

      <p className="mt-4 text-[10px] text-text-muted text-center">
        Decorative illustration — not a real incident
      </p>
    </div>
  );
}
