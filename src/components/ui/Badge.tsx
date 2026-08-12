import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "accent" | "muted" | "mono";
  className?: string;
};

const variants = {
  default: "bg-surface-secondary text-text-secondary border-border",
  accent: "bg-accent-soft text-accent border-accent/20",
  muted: "bg-surface text-text-muted border-border",
  mono: "bg-surface-secondary text-text-muted border-border font-mono text-xs tracking-wide uppercase",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded border text-xs font-medium",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
