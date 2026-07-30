import { MetadataRoute } from "next";

// Mapeamento dinâmico para gerar o sitemap.xml do site
export default function sitemap(): MetadataRoute.Sitemap {
  // Rota principal da landing page
  return [
    {
      url: "https://gruconsulting.com.br",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}
