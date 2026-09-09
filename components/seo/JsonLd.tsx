import { site } from "@/content/site";
import { divisions } from "@/content/divisions";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    description: site.description,
    slogan: site.tagline,
    department: divisions.map((d) => ({
      "@type": "Organization",
      name: d.name,
      description: d.summary,
      url: `${site.url}/divisions/${d.slug}`,
    })),
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
