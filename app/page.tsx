"use client";

import React from "react";
import { Header } from "../components/layout/Header";
import NewHero from "@/components/sections/newHero";
import Sobre from "@/components/sections/Sobre";
import LogisticaEventosArte from "@/components/sections/LogisticaEventosArte";
import DesafioDeMercado from "@/components/sections/DesafioDeMercado";
import FundadorCTA from "@/components/sections/FundadorCTA";
import ForeignTrade from "@/components/sections/ForeignTrade";
import Previsibilidade from "@/components/sections/Previsibilidade";
import BrandSection from "@/components/sections/BrandSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#0B0D12] text-white">
      {/* Barra de Navegação Superior */}
      <Header />

      {/* Conteúdo Principal da Página */}
      <main className="flex-grow">
        {/* <Hero /> */}
        <NewHero />
        <Sobre />
        <LogisticaEventosArte />
        <DesafioDeMercado />
        <FundadorCTA />
        <ForeignTrade />
        <Previsibilidade />
        <BrandSection />
        <Footer />
      </main>
    </div>
  );
}
