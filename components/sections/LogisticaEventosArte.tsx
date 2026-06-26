"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Cache global das imagens do frame para evitar carregamento duplicado no desktop e mobile
const framesCache: HTMLImageElement[] = [];
let preloadedPromise: Promise<HTMLImageElement[]> | null = null;
const frameCount = 164;
const getFrameUrl = (idx: number) => `/box-frames/box-${String(idx).padStart(3, "0")}.png`;

const preloadFrames = (): Promise<HTMLImageElement[]> => {
  if (typeof window === "undefined") {
    return Promise.resolve([]);
  }
  if (preloadedPromise) return preloadedPromise;

  preloadedPromise = new Promise((resolve) => {
    let loadedCount = 0;
    for (let i = 1; i <= frameCount; i++) {
      const img = new window.Image();
      img.src = getFrameUrl(i);
      const onImageLoad = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          resolve(framesCache);
        }
      };
      img.onload = onImageLoad;
      img.onerror = onImageLoad;
      framesCache.push(img);
    }
  });

  return preloadedPromise;
};

interface BoxCanvasSequenceProps {
  className?: string;
}

function BoxCanvasSequence({ className }: BoxCanvasSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [, setImagesLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    // Configura tamanho nativo do canvas correspondente às dimensões das imagens originais
    canvas.width = 626;
    canvas.height = 405;

    // Objeto para controle do frame atual pelo GSAP
    const boxSequence = { frame: 0 };

    // Desenha o frame específico no canvas
    const renderFrame = (frameIndex: number) => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      const img = framesCache[frameIndex];
      if (img && img.complete && img.naturalWidth !== 0) {
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
      } else {
        // Fallback: se o frame atual não estiver pronto, tenta o primeiro frame
        const fallbackImg = framesCache[0];
        if (fallbackImg && fallbackImg.complete && fallbackImg.naturalWidth !== 0) {
          context.drawImage(fallbackImg, 0, 0, canvas.width, canvas.height);
        }
      }
    };

    // Inicia o pré-carregamento das imagens
    preloadFrames().then(() => {
      setImagesLoaded(true);
      renderFrame(Math.round(boxSequence.frame));
    });

    // Registra listener para redesenhar assim que as imagens forem carregadas individualmente
    const handleLoad = () => {
      renderFrame(Math.round(boxSequence.frame));
    };

    framesCache.forEach((img) => {
      if (!img.complete) {
        img.addEventListener("load", handleLoad);
      }
    });

    // Registra a animação de scroll no GSAP
    const animation = gsap.to(boxSequence, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom", // Começa a rolar quando entra no viewport
        end: "bottom top",   // Termina quando sai do viewport
        scrub: 0.5,          // Sincroniza suavemente com o movimento de scroll
        onUpdate: () => {
          renderFrame(Math.round(boxSequence.frame));
        },
      },
    });

    // Primeira renderização local
    renderFrame(0);

    return () => {
      framesCache.forEach((img) => {
        img.removeEventListener("load", handleLoad);
      });
      if (animation.scrollTrigger) {
        animation.scrollTrigger.kill();
      }
      animation.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className={`${className} relative overflow-hidden`}>
      <canvas
        ref={canvasRef}
        className="w-full h-auto aspect-[626/405] block object-cover bg-transparent"
        style={{ maxWidth: "100%", maxHeight: "100%" }}
      />
    </div>
  );
}

/**
 * Seção de Logística de Eventos e Arte da GRU Consulting.
 * Implementa o design 'logistic-session' do Figma, integrando o vídeo da caixa
 * e o background personalizado para o título.
 */
export default function LogisticaEventosArte() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleBgRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Registrar o plugin ScrollTrigger no lado do cliente
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Animação de revelação do título e background superior
      gsap.fromTo(
        titleBgRef.current,
        { opacity: 0, y: -30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleBgRef.current,
            start: "top 85%",
          },
        }
      );

      // 2. Animação do cartão flutuante de Logística de Nicho
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 90%",
          },
        }
      );

      // 3. Animação de revelação dos cartões de serviço
      gsap.fromTo(
        ".card-step-animate",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".card-step-animate",
            start: "top 90%",
          },
        }
      );

      // 4. Animação do vídeo da caixa (revelação com slide-in da esquerda)
      gsap.utils.toArray(".box-video-animate").forEach((el: any) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });

      // 5. Animação dos textos da seção de proteção
      gsap.utils.toArray(".box-text-animate").forEach((el: any) => {
        const textElements = el.children;
        gsap.fromTo(
          textElements,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });

      // 6. Animação de entrada dos itens da galeria
      gsap.fromTo(
        ".gallery-image-animate",
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.04,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".gallery-image-animate",
            start: "top 92%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert(); // Limpar animações ao desmontar o componente
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden font-poppins text-zinc-900 bg-white"
    >
      {/* Banner Superior com a imagem de background */}
      <div
        ref={titleBgRef}
        className="relative w-full h-70 sm:h-75 lg:h-120 bg-cover bg-center flex items-center"
        style={{
          backgroundImage: "url('/background-licho-artes.png')",
        }}
      >
        {/* Cartão de Logística de Nicho (Caixa Branca Flutuante) - Versão Desktop */}
        <div
          ref={cardRef}
          className="hidden lg:flex absolute -bottom-14 left-6 sm:left-12 lg:left-20 p-8 bg-[#FFFDFB] rounded-[25px] shadow-[3px_5px_10px_0px_rgba(0,0,0,0.05)] z-20 flex-col justify-center"
        >
          {/* Label deslocado para cima na borda */}
          <div className="absolute -top-3.5 left-13.25 bg-[#423E3E] border border-black/5 rounded-md px-6 py-1 flex items-center justify-center">
            <span className="text-[11px] font-medium text-[#D9D9D9] tracking-wider uppercase">
              Logística de Nicho
            </span>
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto lg:px-8 flex flex-col justify-start">
            <h2 className="font-poppins text-[40px] font-bold leading-tight text-[#002047] max-w-2xl">
              A Logística por trás <br />
              <span className="font-light text-[40px] text-[#3F3731]">do Design Brasileiro.</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Cartão de Logística de Nicho - Versão Mobile */}
      <div className="flex lg:hidden px-6 -mt-10 relative z-20 scale-90">
        <div className="bg-[#FFFDFB] rounded-[20px] p-8 shadow-[3px_5px_10px_0px_rgba(0,0,0,0.05)] relative">
          <div className="absolute -top-3 left-7.5 bg-[#423E3E] border border-black/5 rounded-md px-4 py-1">
            <span className="text-[10px] font-medium text-[#D9D9D9] tracking-wider uppercase">
              Logística de Nicho
            </span>
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col justify-start">
            <h2 className="font-poppins text-[22px] sm:text-4xl lg:text-[50px] font-bold leading-tight text-[#002047] max-w-2xl">
              A Logística por trás <br />
              <span className="font-light text-[36px] text-[#3F3731] leading-tight">do Design Brasileiro.</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Conteúdo Abaixo do Banner com cor de fundo off-white */}
      <div className="w-full  bg-white pt-0 md:pt-28 pb-24">
        {/* Parágrafo de Introdução */}
        <div className="w-full mx-auto px-6 sm:px-12 pt-12 pb-16 text-center max-w-5xl">
          <p className="text-[#3F3731] font-poppins font-light text-[20px] md:text-[36px] lg:leading-13.75 tracking-tight">
            Exportar mobiliário assinado e obras de arte exige mais do que um frete comum. Exige cuidado milimétrico. Nós cuidamos de todo o processo — desde a embalagem sob medida até a entrega final no destino.
          </p>
        </div>

        {/* Grade de Três Cartões de Serviços */}
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 pb-20">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1: Embalagem Sob Medida */}
            <div className="card-step-animate col-span-1 bg-white rounded-[15px] p-6 lg:p-8 shadow-[0px_8px_30px_rgba(0,0,0,0.03)] border border-black/[0.02] flex flex-col justify-start text-left">
              <div className="flex items-center gap-2 mb-3 justify-start">
                <span className="text-[20px] leading-none">📦</span>
                <span className="font-poppins font-semibold text-[15px] lg:text-[18px] text-[#8C6D58]">
                  Embalagem Sob Medida
                </span>
              </div>
              <p className="font-poppins font-light text-[13px] lg:text-[15px] text-[#7A7470] leading-relaxed">
                Proteção planejada e desenvolvida especificamente para a anatomia de cada peça.
              </p>
            </div>

            {/* Card 2: Trajeto Seguro */}
            <div className="card-step-animate col-span-1 bg-white rounded-[15px] p-6 lg:p-8 shadow-[0px_8px_30px_rgba(0,0,0,0.03)] border border-black/[0.02] flex flex-col justify-start text-left">
              <div className="flex items-center gap-2 mb-3 justify-start">
                <span className="text-[20px] leading-none">✈️</span>
                <span className="font-poppins font-semibold text-[15px] lg:text-[18px] text-[#3B6B88]">
                  Trajeto Seguro
                </span>
              </div>
              <p className="font-poppins font-light text-[13px] lg:text-[15px] text-[#7A7470] leading-relaxed">
                Gestão aduaneira e logística internacional para feiras, galerias e eventos.
              </p>
            </div>

            {/* Card 3: Entrega White Glove (Ocupa 2 colunas no mobile) */}
            <div className="card-step-animate col-span-2 lg:col-span-1 bg-white rounded-[15px] p-6 lg:p-8 shadow-[0px_8px_30px_rgba(0,0,0,0.03)] border border-black/[0.02] flex flex-col justify-start text-center lg:text-left">
              <div className="flex items-center gap-2 mb-3 justify-center lg:justify-start">
                <span className="text-[20px] leading-none">🧤</span>
                <span className="font-poppins font-semibold text-[15px] lg:text-[18px] text-[#3C7A5C]">
                  Entrega White Glove
                </span>
              </div>
              <p className="font-poppins font-light text-[13px] lg:text-[15px] text-[#7A7470] leading-relaxed">
                Manuseio técnico e cuidadoso até o posicionamento final no destino.
              </p>
            </div>
          </div>
        </div>

        {/* Bloco de Proteção Técnica - Versão Desktop */}
        <div className="hidden lg:flex flex-row items-center justify-between w-full max-w-7xl mx-auto px-20 mb-20 py-16 gap-16 bg-[#f3ede9]/70 rounded-2xl shadow-mauve-400/30">
          {/* Lado Esquerdo: Vídeo da Caixa */}
          <div className="box-video-animate w-full max-w-[500px] shrink-0">
            <BoxCanvasSequence className="relative w-full aspect-[626/405] overflow-hidden opacity-70" />
          </div>

          {/* Divisor Vertical */}
          <div className="w-[1px] h-[180px] bg-zinc-200 self-center shrink-0" />

          {/* Lado Direito: Informações */}
          <div className="box-text-animate flex flex-col gap-4 max-w-[500px] text-left">
            <h3 className="font-poppins text-[22px] md:text-[44px] leading-[1] font-light text-[#002047]">
              Proteção técnica <br />
              <span className="font-light text-[#a3a09d] text-[22px] md:text-[40px]">
                à prova de trajetos.
              </span>
            </h3>
            <p className="font-poppins font-light text-[22px] text-[#7A7470] leading-relaxed">
              Expertise técnica em logística internacional aplicada a mobiliário assinado, obras de arte e itens delicados. Logística para Feiras, Exposições e Eventos Internacionais.
            </p>
            <span className="font-poppins text-[16px] font-medium text-[#A19B95] uppercase tracking-wider mt-2 block">
              Entrega técnica com máximo cuidado
            </span>
          </div>
        </div>

        {/* Bloco de Proteção Técnica - Versão Mobile */}
        <div className="flex lg:hidden flex-col gap-8 w-full px-6 py-12 bg-[#f3ede9]/90">
          {/* Linha com Título e Vídeo */}
          <div className="flex flex-row items-center justify-between gap-16 w-full">
            {/* Esquerda: Título */}
            <div className="box-text-animate flex flex-col gap-2 pl-4 border-l-2 border-[#002047] justify-center text-left">
              <h3 className="font-poppins text-[22px] leading-tight font-semibold text-[#002047]">
                Proteção técnica <br />
                <span className="font-normal text-[#3F3731] text-[22px]">
                  à prova de trajetos.
                </span>
              </h3>
              <span className="font-poppins text-[10px] font-medium text-[#A19B95] uppercase tracking-wider mt-1 block">
                Entrega técnica com máximo cuidado
              </span>
            </div>

            {/* Direita: imagem Miniatura */}
            <div className="box-video-animate w-[130px] sm:w-[180px] shrink-0">
              <BoxCanvasSequence className="relative w-full aspect-[626/405] rounded-[15px] overflow-hidden" />
            </div>
          </div>

          {/* Descrição Centralizada */}
          <div className="w-full">
            <p className="font-poppins font-light text-[14px] text-[#7A7470] leading-relaxed text-center px-4">
              Expertise técnica em logística internacional aplicada a mobiliário assinado, obras de arte e itens delicados. Logística para Feiras, Exposições e Eventos Internacionais.
            </p>
          </div>
        </div>

        {/* Galeria de Fotos - Desktop */}
        <div className="hidden lg:grid grid-cols-5 gap-[3px] w-full max-w-7xl mx-auto px-20 pt-8 pb-12">
          {Array.from({ length: 10 }).map((_, idx) => (
            <div
              key={idx}
              className="gallery-image-animate relative aspect-square overflow-hidden bg-zinc-100 shadow-[0px_4px_10px_rgba(0,0,0,0.02)]"
            >
              <Image
                src={`/gru-gallery/gru-gallery${idx + 1}.webp`}
                alt={`Galeria GRU ${idx + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 20vw, 15vw"
              />
            </div>
          ))}
        </div>

        {/* Galeria de Fotos - Mobile */}
        <div className="flex lg:hidden flex-col gap-[3px] w-full px-6 pt-4 pb-8">
          <div className="grid grid-cols-4 gap-[3px]">
            {/* Primeiras 8 fotos */}
            {Array.from({ length: 8 }).map((_, idx) => (
              <div
                key={idx}
                className="gallery-image-animate relative aspect-square overflow-hidden bg-zinc-100 shadow-[0px_2px_5px_rgba(0,0,0,0.02)]"
              >
                <Image
                  src={`/gru-gallery/gru-gallery${idx + 1}.webp`}
                  alt={`Galeria GRU ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
            ))}
            {/* Últimas 2 fotos centralizadas */}
            {Array.from({ length: 2 }).map((_, idx) => (
              <div
                key={idx}
                className="gallery-image-animate col-start-2 col-span-1 relative aspect-square overflow-hidden bg-zinc-100 shadow-[0px_2px_5px_rgba(0,0,0,0.02)]"
                style={{ gridColumnStart: idx + 2 }}
              >
                <Image
                  src={`/gru-gallery/gru-gallery${idx + 9}.webp`}
                  alt={`Galeria GRU ${idx + 9}`}
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
