"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";

export default function HeroLP() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Cria um contexto GSAP para garantir que as animações sejam limpas ao desmontar
    const ctx = gsap.context(() => {
      // Animação de entrada dos textos (fade-in + slide up)
      if (textContainerRef.current) {
        gsap.fromTo(
          textContainerRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            delay: 0.5, // Leve delay para sincronizar com a entrada da página
          }
        );
      }

      // Animação de entrada do container de imagem (fade-in + escala suave)
      if (imageContainerRef.current) {
        gsap.fromTo(
          imageContainerRef.current,
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power2.out",
            delay: 0.8,
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="inicio"
      className="relative min-h-screen w-full bg-[#0B0D12] pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 flex items-center overflow-hidden border-b border-white/5"
    >
      {/* Detalhes de luz de fundo para design premium (Glow verde e dourado) */}
      <div className="absolute top-1/4 left-0 -translate-y-1/2 w-[350px] h-[350px] bg-[#236253]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#E5B584]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Lado Esquerdo: Conteúdo Textual e Ações */}
          <div
            ref={textContainerRef}
            className="lg:col-span-7 flex flex-col items-start text-left gap-6 lg:pr-4"
          >
            {/* Tag superior de identificação */}
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] text-[#E5B584] uppercase">
              GRU Consulting
            </span>

            {/* Título Principal Focado em Soluções */}
            <h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-light leading-[1.15] text-white">
              Soluções completas em <br className="hidden sm:block" />
              <span className="font-semibold text-white/95">Comércio Exterior</span> para empresas que importam e exportam.
            </h1>

            {/* Descrição Narrativa */}
            <p className="font-poppins font-light text-sm sm:text-base lg:text-lg text-white/70 leading-relaxed max-w-2xl mt-2">
              Consultoria estratégica, despacho aduaneiro, logística internacional e assessoria cambial para operações mais seguras, ágeis e eficientes.
            </p>

            {/* Botões de Ação */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mt-6">
              {/* Botão Primário: WhatsApp / Contato */}
              <Link
                href="/whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-[4px] bg-[#E5B584] hover:bg-[#d4a473] text-black font-semibold text-sm px-8 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#E5B584]/10 text-center"
              >
                Falar com um especialista
              </Link>

              {/* Botão Secundário: Rolar para formulário */}
              <a
                href="#contato"
                className="inline-flex h-12 items-center justify-center rounded-[4px] border border-white/30 hover:border-white bg-transparent hover:bg-white/5 text-white font-medium text-sm px-8 transition-all duration-300 active:scale-[0.98] text-center"
              >
                Solicitar uma consultoria
              </a>
            </div>
          </div>

          {/* Lado Direito: Imagem Hero Estilizada */}
          <div
            ref={imageContainerRef}
            className="lg:col-span-5 w-full flex justify-center lg:justify-end"
          >
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[5/6] max-w-lg rounded-[24px] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
              {/* Overlay de cor de branding sutil */}
              <div className="absolute inset-0 bg-[#236253]/10 mix-blend-multiply z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-0" />
              
              <Image
                src="/hero-logistic.png"
                alt="Logística Internacional GRU Consulting"
                fill
                sizes="(max-w-1024px) 100vw, 450px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
