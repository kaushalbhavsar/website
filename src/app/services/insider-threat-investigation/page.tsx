import { createMetadata } from "@/lib/seo";
import { getServiceBySlug } from "@/lib/content/services";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { notFound } from "next/navigation";

export const metadata = createMetadata({
  title: "Insider Threat Investigation",
  description: "Investigate suspicious internal activity, privilege misuse, and data access patterns with evidence-based methodology.",
  path: "/services/insider-threat-investigation/",
});

export default function Page() {
  const service = getServiceBySlug("insider-threat-investigation");
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
