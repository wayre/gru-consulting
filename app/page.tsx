"use client";

import React from "react";
import { Header } from "../components/layout/Header";
import HeroLP from "@/components/sections/HeroLP";
import IndicadoresLP from "@/components/sections/IndicadoresLP";
import ServicosLP from "@/components/sections/ServicosLP";
import ProcessoLP from "@/components/sections/ProcessoLP";
import SobreLP from "@/components/sections/SobreLP";
import DiferenciaisLP from "@/components/sections/DiferenciaisLP";
import SegmentosLP from "@/components/sections/SegmentosLP";
import FAQ_LP from "@/components/sections/FAQ_LP";
import CTALocalLP from "@/components/sections/CTALocalLP";
import ContatoLP from "@/components/sections/ContatoLP";
import FooterLP from "@/components/sections/FooterLP";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#0B0D12] text-white">
      {/* Barra de Navegação Superior */}
      <Header />

      {/* Conteúdo Principal da Nova Landing Page */}
      <main className="flex-grow">
        {/* Seção 1: Hero */}
        <HeroLP />

        {/* Seção 2: Indicadores de Confiança */}
        <IndicadoresLP />

        {/* Seção 3: Nossos Serviços */}
        <ServicosLP />

        {/* Seção 4: Como Trabalhamos */}
        <ProcessoLP />

        {/* Seção 5: Sobre a Empresa */}
        <SobreLP />

        {/* Seção 6: Diferenciais */}
        <DiferenciaisLP />

        {/* Seção 7: Segmentos Atendidos */}
        <SegmentosLP />

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
