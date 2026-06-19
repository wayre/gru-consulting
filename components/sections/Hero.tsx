"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap"; // Importa a configuração global do GSAP
import "./Hero.css"; // Importa os estilos visuais de brilhos, cones e ruídos

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Array com as marcas/clientes parceiros para facilidade de manutenção
  const clientLogos = [
    { name: "Fortuna", src: "/cliente-fortuna.png" },
    { name: "Grupo Maxi", src: "/cliente-maxi.png" },
    { name: "Motiv", src: "/cliente-motiv.png" },
    { name: "Multiparts", src: "/cliente-multiparts.png" },
    { name: "Renz", src: "/cliente-renz.png" },
    { name: "Rocha Bahia", src: "/cliente-rocha.png" },
  ];

  useEffect(() => {
    // Configura a velocidade de reprodução do vídeo para 0.5x (mais suave)
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }

    // Inicializa a timeline de animação de entrada com o GSAP
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Define os estados iniciais dos elementos para evitar flash visual indesejado
      gsap.set(".hero-video, .animated-gradient, .hero-glow", { opacity: 0 });
      gsap.set(".hero-sub, .hero-title, .hero-desc, .hero-btn", { opacity: 0, y: 30 });
      gsap.set(".hero-image", { opacity: 0, x: 50, scale: 0.95 });
      gsap.set(".light-floor, .hero-line", { scaleX: 0, transformOrigin: "center" });
      gsap.set(".cone", { scaleY: 0, transformOrigin: "bottom center", opacity: 0 });
      gsap.set(".hero-partners", { opacity: 0, y: 20 });

      // Sequência de animação
      tl.to(".hero-video, .animated-gradient", { opacity: 0, duration: 1.5 })
        .to(".hero-glow", { opacity: 1, duration: 2 }, "-=1")
        .to(".hero-sub", { opacity: 1, y: 0, duration: 0.8 }, "-=1.5")
        .to(".hero-title", { opacity: 1, y: 0, duration: 1 }, "-=0.6")
        .to(".hero-desc", { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")
        .to(".hero-btn", { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")
        .to(".hero-image", { opacity: 1, x: 0, scale: 1, duration: 1.2, ease: "back.out(1.2)" }, "-=1.2")
        .to(".light-floor, .hero-line", { scaleX: 1, duration: 1.2, ease: "power2.inOut" }, "-=1")
        .to(".cone", { scaleY: 1, opacity: 1, duration: 1.2, stagger: 0.15 }, "-=0.8")
        .to(".hero-partners", { opacity: 1, y: 0, duration: 0.8 }, "-=0.6");
    }, containerRef);

    // Limpa as instâncias do GSAP ao desmontar o componente
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen w-full flex-col justify-between bg-[#0B0D12] overflow-hidden pt-12 text-white"
    >
      {/* Gradiente de fundo animado */}
      <div className="absolute inset-0 animated-gradient opacity-30 pointer-events-none z-0" />

      {/* Vídeo do mapa mundial de fundo */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="hero-video absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
      >
        <source src="/mapa.mp4" type="video/mp4" />
      </video>

      {/* Grade de fundo geométrica semi-transparente */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-0">
        <div className="hero-grid" />
      </div>

      {/* Efeito de ruído granulado para textura */}
      <div className="noise pointer-events-none z-0" />

      {/* Brilho de fundo (glow) posicionado atrás do elemento central */}
      <div className="hero-glow pointer-events-none z-0" />

      {/* Cones de luz projetados na vertical (Holofotes) */}
      <div className="cone cone-1 pointer-events-none z-0"><div className="cone-beam" /></div>
      <div className="cone cone-2 pointer-events-none z-0"><div className="cone-beam" /></div>
      <div className="cone cone-3 pointer-events-none z-0"><div className="cone-beam" /></div>

      {/* Linha brilhante na base refletindo a luz (light-floor) */}
      <div className="light-floor pointer-events-none z-0" />

      {/* Vinheta escura nas bordas para focar a atenção no centro */}
      <div className="absolute inset-0 hero-vignette pointer-events-none z-0" />

      {/* Overlay escuro para garantir contraste */}
      <div className="absolute inset-0 bg-black/45 md:bg-black/25 z-5 pointer-events-none" />

      {/* Conteúdo Principal do Hero */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-4 pt-8 sm:px-6 md:flex-row md:gap-12 md:pt-16 lg:px-8">

        {/* Coluna Esquerda: Textos e Botão de Ação */}
        <div className="flex w-full flex-col items-center text-center md:w-1/2 md:items-start md:text-left">
          {/* Subtítulo inicial */}
          <span className="hero-sub text-[12px] leading-[18px] md:text-[14px] md:leading-[21px] font-medium uppercase tracking-[0.15em] text-[#BAD9CF]">
            Comércio Exterior desde 1997
          </span>

          {/* Título Principal */}
          <h1 className="hero-title mt-4 text-[32px] leading-[40px] md:text-[44px] md:leading-[55px] lg:text-[52px] lg:leading-[65px] font-semibold tracking-tight">
            Comércio Exterior com <br className="hidden sm:inline" />
            <span className="text-[#BAD9CF]">Segurança</span>, <span className="text-[#BAD9CF]">Clareza</span> <br className="hidden sm:inline" />
            e <span className="text-[#BAD9CF]">Previsibilidade</span>
          </h1>

          {/* Descrição curta */}
          <p className="hero-desc mt-6 text-[18px] leading-[27px] md:text-[24px] md:leading-[36px] lg:text-[30px] lg:leading-[45px] font-light text-zinc-300">
            Sua operação sem complexidade.
          </p>

          {/* Botão para falar no WhatsApp */}
          <Link
            href="https://wa.me/5500000000000" // Substituir pelo número real
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn mt-8 flex h-[60px] w-full max-w-[283px] items-center justify-center rounded-[15px] bg-[#236253] text-[17px] font-medium leading-[25px] text-white shadow-lg shadow-black/30 transition-all duration-300 hover:scale-105 hover:bg-[#1b4c40] focus:outline-none focus:ring-2 focus:ring-[#BAD9CF] focus:ring-offset-2 focus:ring-offset-black"
          >
            Falar no WhatsApp
          </Link>
        </div>

        {/* Coluna Direita: Imagem do Consultor */}
        <div className="hero-image mt-12 flex w-full justify-center md:mt-0 md:w-1/2 md:justify-end">
          <div className="relative max-w-[400px] md:max-w-[528px]">
            <Image
              src="/mauricio.png"
              alt="Maurício - GRU Consulting"
              width={528}
              height={735}
              priority
              className="h-auto w-full object-contain"
            />
          </div>
        </div>

      </div>

      {/* Rodapé do Hero: Divisor e Seção de Clientes */}
      <div className="relative z-10 w-full mt-auto">

        {/* Linha Divisória de Gradiente (line-base do Figma) */}
        <div
          className="hero-line h-[2px] w-full"
          style={{
            background: "linear-gradient(270deg, rgba(186, 217, 207, 0) 0%, rgba(186, 217, 207, 0.7) 10%, #BAD9CF 50%, rgba(186, 217, 207, 0.64) 90%, rgba(186, 217, 207, 0) 100%)"
          }}
        />

        {/* Seção das Marcas Parceiras */}
        <div className="hero-partners relative bg-[#171A22] py-8 md:py-10">

          {/* Badge flutuante (LABEL do Figma) */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-[7px] border border-black/10 bg-[#A8A8A8] px-4 py-1">
            <span className="text-[10px] font-semibold tracking-wider text-[#2C2C2C] uppercase sm:text-xs">
              Marcas que confiam na expertise da GRU
            </span>
          </div>

          {/* Grid de Logos dos Clientes */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12">
              {clientLogos.map((logo) => (
                <div
                  key={logo.name}
                  className="flex h-12 w-28 items-center justify-center grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100 sm:w-32 md:w-36"
                >
                  <Image
                    src={logo.src}
                    alt={`Logo da marca ${logo.name}`}
                    width={150}
                    height={50}
                    className="h-full w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
