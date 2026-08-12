import { createMetadata } from "@/lib/seo";
import { getServiceBySlug } from "@/lib/content/services";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { notFound } from "next/navigation";

export const metadata = createMetadata({
  title: "Cyber Incident Investigation",
  description: "Determine what happened, how access was obtained, what systems were affected and whether the attacker maintained persistence.",
  path: "/services/incident-investigation/",
});

export default function Page() {
  const service = getServiceBySlug("incident-investigation");
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
