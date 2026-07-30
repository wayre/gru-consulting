import React from "react";
import type { Metadata } from "next";
import { Header } from "../components/layout/Header";
import HeroLP from "@/components/sections/HeroLP";
import IndicadoresLP from "@/components/sections/IndicadoresLP";
import ServicosLP from "@/components/sections/ServicosLP";
import ProcessoLP from "@/components/sections/ProcessoLP";
import FundadorLP from "@/components/sections/FundadorLP";
import DiferenciaisLP from "@/components/sections/DiferenciaisLP";
import ExpertisesLP from "@/components/sections/ExpertisesLP";
import FAQ_LP from "@/components/sections/FAQ_LP";
import CTALocalLP from "@/components/sections/CTALocalLP";
import ContatoLP from "@/components/sections/ContatoLP";
import FooterLP from "@/components/sections/FooterLP";
import Sobre from "@/components/sections/Sobre";

// Metadados ricos em SEO para a página inicial (Landing Page)
export const metadata: Metadata = {
  title: "GRU Consulting | Consultoria em Comércio Exterior",
  description: "Segurança, clareza e previsibilidade em suas operações internacionais de importação, exportação, logística e câmbio.",
  keywords: [
    "comércio exterior",
    "consultoria em comércio exterior",
    "despacho aduaneiro",
    "logística internacional",
    "assessoria cambial",
    "trading company",
    "importação e exportação",
    "GRU Consulting"
  ],
  alternates: {
    canonical: "https://gruconsulting.com.br",
  },
  openGraph: {
    title: "GRU Consulting | Consultoria em Comércio Exterior",
    description: "Segurança, clareza e previsibilidade em suas operações internacionais de importação, exportação, logística e câmbio.",
    url: "https://gruconsulting.com.br",
    siteName: "GRU Consulting",
    images: [
      {
        url: "https://gruconsulting.com.br/hero-logistic.png", // Imagem existente na pasta public usada como fallback para compartilhamento
        width: 1200,
        height: 630,
        alt: "GRU Consulting - Consultoria em Comércio Exterior",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GRU Consulting | Consultoria em Comércio Exterior",
    description: "Segurança, clareza e previsibilidade em suas operações internacionais de importação, exportação, logística e câmbio.",
    images: ["https://gruconsulting.com.br/hero-logistic.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};


export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#0B0D12] text-white">
      {/* Barra de Navegação Superior */}
      <Header />

      {/* Conteúdo Principal da Nova Landing Page */}
      <main className="grow">
        {/* Seção 1: Hero */}
        <HeroLP />

        {/* Seção 2: Indicadores de Confiança */}
        {/* <IndicadoresLP /> */}

        {/* Seção 3: Nossos Serviços */}
        <ServicosLP />

        {/* Seção 4: Como Trabalhamos */}
        <ProcessoLP />

        {/* Seção 5: Sobre da Empresa */}
        <Sobre />

        {/* Seção 6: Sobre o Fundador */}
        <FundadorLP />

        {/* Seção 6: Diferenciais */}
        <DiferenciaisLP />

        {/* Seção 7: Nossa Expertise */}
        <ExpertisesLP />

        {/* Seção 8: FAQ */}
        <FAQ_LP />

        {/* Seção 9: Chamada Final (CTA) */}
        <CTALocalLP />

        {/* Seção 10: Contato */}
        <ContatoLP />
      </main>

      {/* Seção 11: Rodapé */}
      <FooterLP />
    </div>
  );
}
