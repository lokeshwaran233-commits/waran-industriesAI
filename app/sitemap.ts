import type { MetadataRoute } from "next";
import { divisions } from "@/content/divisions";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["", "/about", "/research", "/frontier", "/contact"].map((path) => ({
    url: `${site.url}${path || "/"}`,
    lastModified: now,
    changeFrequency: path === "" ? ("daily" as const) : ("monthly" as const),
    priority: path === "" ? 1 : 0.7,
  }));
  const divisionRoutes = divisions.map((d) => ({
    url: `${site.url}/divisions/${d.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: d.slug === "primal" ? 0.9 : 0.75,
  }));
  return [...staticRoutes, ...divisionRoutes];
}
