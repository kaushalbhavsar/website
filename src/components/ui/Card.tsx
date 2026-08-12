import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
};

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-surface p-6",
        hover && "transition-colors duration-200 hover:border-text-muted/30 hover:bg-surface-secondary",
        className,
      )}
    >
      {children}
    </div>
  );
}
