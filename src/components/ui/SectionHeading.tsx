import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        align === "center" && "text-center mx-auto max-w-2xl",
        className,
      )}
    >
      {eyebrow && (
        <p className="font-mono text-xs tracking-widest uppercase text-text-muted mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl md:text-3xl font-semibold text-text-primary tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-text-secondary text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
