import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-hover border border-transparent",
  secondary:
    "bg-surface-secondary text-text-primary hover:bg-border border border-border",
  ghost:
    "bg-transparent text-text-secondary hover:text-text-primary hover:bg-surface-secondary border border-transparent",
  outline:
    "bg-transparent text-text-primary border border-border hover:border-text-muted",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  external?: boolean;
  disabled?: boolean;
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  onClick,
  type = "button",
  external,
  disabled,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-medium rounded transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    disabled && "opacity-50 cursor-not-allowed pointer-events-none",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if (href) {
    const absolute = /^https?:\/\//i.test(href);
    if (absolute || external) {
      return (
        <a
          href={href}
          className={classes}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
