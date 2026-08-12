import { createMetadata } from "@/lib/seo";
import { getServiceBySlug } from "@/lib/content/services";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { notFound } from "next/navigation";

export const metadata = createMetadata({
  title: "Expert Technical Reports",
  description: "Convert complex security findings into clear technical documentation suitable for stakeholders, investigators or legal professionals.",
  path: "/services/expert-reports/",
});

export default function Page() {
  const service = getServiceBySlug("expert-reports");
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
