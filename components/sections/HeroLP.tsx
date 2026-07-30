"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./newHero.css";
import Image from "next/image";

export default function HeroLP() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isLoaded, setIsLoaded] = useState(false);

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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Controla o carregamento, mute e reprodução do vídeo
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Garante programaticamente que o vídeo está mutado para permitir autoplay
    video.muted = true;

    // Configura a velocidade de reprodução para 0.7
    video.playbackRate = 0.6;

    // Safety fallback: garante que o overlay de loading desapareça após 1.5s
    // mesmo se o vídeo falhar ou demorar para carregar.
    const fallbackTimeout = setTimeout(() => {
      setIsLoaded(true);
    }, 1500);

    // Se o vídeo já estiver com dados suficientes (ex: cacheado)
    if (video.readyState >= 2) {
      setIsLoaded(true);
      clearTimeout(fallbackTimeout);
    }

    const handleLoadedData = () => {
      setIsLoaded(true);
      clearTimeout(fallbackTimeout);
    };

    video.addEventListener("loadeddata", handleLoadedData);

    // Tenta iniciar a reprodução imediatamente
    video.play().catch((err) => {
      console.log("Autoplay bloqueado no carregamento inicial:", err);
    });

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData);
      clearTimeout(fallbackTimeout);
    };
  }, []);

  // Controla a reprodução do vídeo com base na visibilidade (Intersection Observer)
  // para economizar CPU, GPU e bateria quando a seção não estiver na tela.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch((err) => {
            // Silencia erro se o autoplay for bloqueado temporariamente
            console.log("Autoplay bloqueado pelo observer:", err);
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.0 } // 0.0 para tocar assim que qualquer parte aparecer
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="inicio"
      className={`relative h-screen max-h-275 w-full bg-[#0B0D12] pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 flex items-center overflow-hidden ${isLoaded ? "is-ready" : ""}`}
    >
      {/* Gradiente de fundo animado */}
      <div className="absolute inset-0 animated-gradient opacity-30" />

      {/* Vídeo do mapa mundi como fundo do Hero */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        poster="/frames/map-001.jpg"
        className="hero-video-bg"
        onLoadedData={() => setIsLoaded(true)}
      >
        <source src="/mapa.mp4" type="video/mp4" />
        Seu navegador não suporta reprodução de vídeo.
      </video>

      {/* Grade de fundo geométrica semi-transparente */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="hero-grid" />
      </div>
      {/* Efeito de ruído granulado para textura */}
      <div className="noise" />

      {/* Brilho de fundo (glow) posicionado atrás do elemento central */}
      <div className="hero-glow" />

      {/* Cones de luz projetados na vertical */}
      <div className="cone cone-1">
        <div className="cone-beam" />
      </div>
      <div className="cone cone-2">
        <div className="cone-beam" />
      </div>
      <div className="cone cone-3">
        <div className="cone-beam" />
      </div>

      {/* Vinheta escura nas bordas para focar a atenção no centro */}
      <div className="absolute inset-0 hero-vignette" />

      {/* Tela preta de loading posicionada atrás para evitar flickering */}
      <div className={`loading-overlay ${isLoaded ? "fade-out" : ""}`} />

      {/* imagem city com efeito blend mode sobre o video na parte inferior do screen */}
      <Image
        src="/city-full-transp.webp"
        alt="City"
        width={1920}
        height={1080}
        className="absolute bottom-0 left-0 w-full h-[30vh] object-cover object-bottom opacity-30 mix-blend-overlay pointer-events-none"
        priority
      />

      {/* degrade de 10% height e 100% screen da cor #0b0d12 para transparente */}
      <div className="absolute bottom-0 left-0 w-full h-[5vh] bg-gradient-to-t from-[#0b0d12] to-transparent" />

      {/* Conteúdo do Hero */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center text-center">

        {/* Lado Único: Conteúdo Textual Centralizado e Ações */}
        <div
          ref={textContainerRef}
          className="flex flex-col items-center text-center gap-6"
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
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto mt-6">
            {/* Botão Primário: WhatsApp / Contato */}
            <a
              href="/whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-[4px] bg-white/12 hover:bg-white/20 text-white font-semibold text-sm px-8 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#E5B584]/10 text-center border border-white/20 backdrop-blur-sm"
            >
              Falar com um especialista
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
