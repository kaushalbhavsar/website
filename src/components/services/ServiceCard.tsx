import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  linkLabel: string;
};

export function ServiceCard({ title, description, href, linkLabel }: ServiceCardProps) {
  return (
    <Card hover className="flex flex-col h-full">
      <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
      <p className="mt-3 text-text-secondary text-sm leading-relaxed flex-1">{description}</p>
      <Link
        href={href}
        className="mt-6 inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-hover transition-colors group"
      >
        {linkLabel}
        <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
      </Link>
    </Card>
  );
}
