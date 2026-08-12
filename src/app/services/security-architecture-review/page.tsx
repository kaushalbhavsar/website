import { createMetadata } from "@/lib/seo";
import { getServiceBySlug } from "@/lib/content/services";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { notFound } from "next/navigation";

export const metadata = createMetadata({
  title: "Security Architecture Review",
  description: "Review systems, applications, cloud architecture, data flows and access controls to identify weaknesses before they become incidents.",
  path: "/services/security-architecture-review/",
});

export default function Page() {
  const service = getServiceBySlug("security-architecture-review");
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
