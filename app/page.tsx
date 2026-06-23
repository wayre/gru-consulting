"use client";

import React from "react";
import { Header } from "../components/layout/Header";
import NewHero from "@/components/sections/newHero";
import Sobre from "@/components/sections/Sobre";
import LogisticaEventosArte from "@/components/sections/LogisticaEventosArte";
import ForeignTrade from "@/components/sections/ForeignTrade";
import Previsibilidade from "@/components/sections/Previsibilidade";

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
        <ForeignTrade />
        <Previsibilidade />
      </main>
    </div>
  );
}
