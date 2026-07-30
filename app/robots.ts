import { MetadataRoute } from "next";

// Geração dinâmica das diretivas do robots.txt
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/whatsapp", // Impede a indexação da rota de redirecionamento do WhatsApp
    },
    sitemap: "https://gruconsulting.com.br/sitemap.xml",
  };
}
