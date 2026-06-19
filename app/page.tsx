"use client";

import React from "react";
import { Header } from "../components/layout/Header";
import { Hero } from "../components/sections/Hero";
import NewHero from "@/components/sections/newHero";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#0B0D12] text-white">
      {/* Barra de Navegação Superior */}
      <Header />

      {/* Conteúdo Principal da Página */}
      <main className="flex-grow">
        {/* <Hero /> */}
        <NewHero />
        <div className="h-screen w-full bg-red-500">oi</div>
      </main>
    </div>
  );
}
