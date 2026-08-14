import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { articles } from "@/lib/content/articles";
import { getPublishedCaseNotes } from "@/lib/content/cases";
import { programs } from "@/lib/content/training";
import { services } from "@/lib/content/services";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const staticPages = [
    "",
    "incident-response/",
    "incident-response/first-steps/",
    "investigations/",
    "expertise/",
    "cases/",
    "insights/",
    "about/",
    "research/",
    "careers/",
    "training/",
    "training/corporate/",
    "training/register-interest/",
    "incident/",
    "contact/",
    "privacy/",
    "terms/",
    "security/",
  ];

  return [
    ...staticPages.map((path) => ({
      url: `${base}/${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...services.map((s) => ({
      url: `${base}/services/${s.slug}/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...articles.map((a) => ({
      url: `${base}/insights/${a.slug}/`,
      lastModified: new Date(a.publishedAt),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
    ...getPublishedCaseNotes().map((note) => ({
      url: `${base}/cases/${note.slug}/`,
      lastModified: note.publishedAt ? new Date(note.publishedAt) : new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
    ...programs.map((p) => ({
      url: `${base}/training/${p.slug}/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
