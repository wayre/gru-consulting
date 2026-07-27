"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import "./newHero.css";
import Image from "next/image";

const TOTAL_FRAMES = 192;
const ANIMATION_FPS = 15; // 15 FPS é equivalente a 0.5x do vídeo original de 30 FPS

export default function HeroLP() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  // Refs para controle do canvas e sequência de imagens
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const animationFrameIdRef = useRef<number | null>(null);
  const currentFrameRef = useRef(0);

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

  useEffect(() => {
    let isMounted = true;
    const images: HTMLImageElement[] = [];
    let loadedCount = 0;
    let loadTimeout: any;

    // Função para obter a URL do frame formatada
    const getFrameUrl = (index: number) => {
      const paddedIndex = String(index).padStart(3, "0");
      return `/frames/map-${paddedIndex}.jpg`;
    };

    // Pré-carrega o primeiro frame imediatamente para exibição rápida
    const firstImg = new window.Image();
    firstImg.src = getFrameUrl(1);
    firstImg.onload = () => {
      if (!isMounted) return;

      // Desenha o primeiro frame no canvas
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = firstImg.naturalWidth;
        canvas.height = firstImg.naturalHeight;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(firstImg, 0, 0, canvas.width, canvas.height);
        }
      }

      // Dispara o estado pronto para ocultar o loading overlay
      setIsLoaded(true);

      // Inicia o pré-carregamento em lote dos demais frames após um leve delay para priorizar LCP
      loadTimeout = setTimeout(() => {
        if (isMounted) preloadAllFrames();
      }, 500);
    };

    // Pré-carrega todas as imagens para evitar flickering no loop
    const preloadAllFrames = () => {
      for (let i = 1; i <= TOTAL_FRAMES; i++) {
        const img = new window.Image();
        img.src = getFrameUrl(i);
        img.onload = () => {
          if (!isMounted) return;
          loadedCount++;
          if (loadedCount === TOTAL_FRAMES) {
            startAnimation();
          }
        };
        images.push(img);
      }
      imagesRef.current = images;
    };

    // Inicia a animação utilizando requestAnimationFrame
    const startAnimation = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const firstLoadedImg = imagesRef.current[0];
      if (firstLoadedImg) {
        // Redefine a largura e altura do canvas apenas se forem diferentes dos valores atuais,
        // evitando que o navegador limpe o canvas e cause piscadas visuais (flickering).
        if (canvas.width !== firstLoadedImg.naturalWidth) {
          canvas.width = firstLoadedImg.naturalWidth;
        }
        if (canvas.height !== firstLoadedImg.naturalHeight) {
          canvas.height = firstLoadedImg.naturalHeight;
        }
      }

      let lastTime = 0;
      const interval = 1000 / ANIMATION_FPS;

      const render = (time: number) => {
        if (!isMounted) return;

        if (!lastTime) lastTime = time;
        const elapsed = time - lastTime;

        if (elapsed >= interval) {
          const currentImg = imagesRef.current[currentFrameRef.current];
          if (currentImg && currentImg.complete) {
            ctx.drawImage(currentImg, 0, 0, canvas.width, canvas.height);
          }
          currentFrameRef.current = (currentFrameRef.current + 1) % TOTAL_FRAMES;
          lastTime = time - (elapsed % interval);
        }

        animationFrameIdRef.current = requestAnimationFrame(render);
      };

      animationFrameIdRef.current = requestAnimationFrame(render);
    };

    return () => {
      isMounted = false;
      clearTimeout(loadTimeout);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
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

      {/* Canvas da animação de sequência de imagens como fundo do Hero */}
      <canvas
        ref={canvasRef}
        className="hero-video-bg"
      />



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

      {/* //imagem city com efeito blend mode sobre o video na parte inferior do screen */}
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
            <Link
              href="/whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-[4px] bg-white/12 hover:bg-white/20 text-white font-semibold text-sm px-8 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#E5B584]/10 text-center border border-white/20 backdrop-blur-sm"
            >
              Falar com um especialista
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}
