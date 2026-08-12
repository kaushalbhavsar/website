import { createMetadata } from "@/lib/seo";
import { getServiceBySlug } from "@/lib/content/services";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { notFound } from "next/navigation";

export const metadata = createMetadata({
  title: "Independent Security Advisory",
  description: "Independent technical guidance for difficult cybersecurity decisions, investigations and security architecture questions.",
  path: "/services/security-advisory/",
});

export default function Page() {
  const service = getServiceBySlug("security-advisory");
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
