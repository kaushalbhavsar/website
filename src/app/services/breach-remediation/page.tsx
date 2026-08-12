import { createMetadata } from "@/lib/seo";
import { getServiceBySlug } from "@/lib/content/services";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { notFound } from "next/navigation";

export const metadata = createMetadata({
  title: "Breach & Malware Remediation",
  description: "Identify malicious components, remove persistence mechanisms and help restore affected environments securely.",
  path: "/services/breach-remediation/",
});

export default function Page() {
  const service = getServiceBySlug("breach-remediation");
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
