"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Sobre() {
  const textRef = useRef<HTMLParagraphElement>(null);
  const strategyTextRef = useRef<HTMLParagraphElement>(null);
  const intelligenceRef = useRef<HTMLDivElement>(null);
  const segmentsContainerRef = useRef<HTMLDivElement>(null);

  // Efeito para criar a animação de scroll nos textos com GSAP e ScrollTrigger
  useEffect(() => {
    // Registrar o plugin ScrollTrigger no lado do cliente
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animação do texto principal
      if (textRef.current) {
        const chars = textRef.current.querySelectorAll(".about-char");
        if (chars.length > 0) {
          gsap.from(chars, {
            y: "100%", // Inicia deslocado 100% de sua própria altura para baixo
            opacity: 0,
            duration: 0.3,
            stagger: 0.02,
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 96%",
              end: "bottom 85%",
              scrub: 3, // Lag/Inércia de scroll suave de 3 segundos
            },
          });
        }
      }

      // Animação do texto de estratégia
      if (strategyTextRef.current) {
        const chars = strategyTextRef.current.querySelectorAll(".strategy-char");
        if (chars.length > 0) {
          gsap.from(chars, {
            y: "100%", // Inicia deslocado 100% de sua própria altura para baixo
            opacity: 0,
            duration: 0.3,
            stagger: 0.02,
            scrollTrigger: {
              trigger: strategyTextRef.current,
              start: "top 96%",
              end: "bottom 85%",
              scrub: 3, // Lag/Inércia de scroll suave de 3 segundos
            },
          });
        }
      }

      // Animação fade-in-up controlada por scroll para os filhos do bloco de inteligência e viabilização
      if (intelligenceRef.current) {
        const children = intelligenceRef.current.children;
        gsap.from(children, {
          y: 60,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power1.out",
          scrollTrigger: {
            trigger: intelligenceRef.current,
            start: "top 95%", // Inicia a animação quando o topo do bloco entra na tela
            end: "top 65%",   // Completa a animação quando o bloco subir um pouco mais
            scrub: 1.5,       // Vincula o progresso da animação ao scroll com suavização
          },
        });
      }

      // Animação fade-in-up controlada por scroll para os cards dos segmentos atendidos
      if (segmentsContainerRef.current) {
        const cards = segmentsContainerRef.current.children;
        gsap.from(cards, {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.4, // Propagação sequencial entre os cards conforme o scroll
          ease: "power1.out",
          scrollTrigger: {
            trigger: segmentsContainerRef.current,
            start: "top 95%", // Inicia quando o topo da seção entra na tela
            end: "top 65%",   // Completa a animação quando a seção subir um pouco mais
            scrub: 1.5,       // Vincula o progresso da animação à rolagem do mouse
          },
        });
      }
    });

    return () => ctx.revert(); // Limpa as animações e triggers ao desmontar
  }, []);

  // Configuração dos segmentos atendidos com base no design do Figma
  const segmentos = [
    {
      title: "Arte e Cultura",
      description: "Galerias, museus, curadores e estúdios criativos que exportam e importam obras com a segurança que peças valiosas exigem.",
      icon: "/ico-segment-art.svg",
    },
    {
      title: "Design e Decoração",
      description: "Designers, fabricantes de móveis e marcas autorais que operam internacionalmente sem montar estrutura interna.",
      icon: "/ico-segment-design.svg",
    },
    {
      title: "Indústria e Comércio",
      description: "Pequenas e médias indústrias iniciantes ou em expansão no comércio exterior, com acesso a especialistas seniores.",
      icon: "/ico-segment-industry.svg",
    },
  ];

  return (
    <section className="about-section w-full bg-[#F2F2F2] py-16 md:py-24 pt-30 lg:pt-35 lg:pb-42.5 text-zinc-900 font-poppins">
      <div className="mx-auto max-w-7xl px-10 sm:px-6 lg:px-8">

        {/* Bloco de introdução principal da consultoria */}
        <div className="w-full md:w-[80%] about-main-text mx-auto max-w-231.25 text-center mb-10">
          <p
            ref={textRef}
            className="font-instrument text-[26px] md:text-3xl lg:text-[36px] lg:leading-13.75 text-[#606060] font-normal"
          >
            {"Somos uma consultoria especializada em Comércio Exterior. Unimos experiência técnica e suporte completo em logística, despacho aduaneiro e câmbio para simplificar operações internacionais.".split(" ").map((word, wIdx, arr) => (
              <span key={wIdx} className="inline-block overflow-hidden align-bottom whitespace-nowrap">
                {word.split("").map((char, cIdx) => (
                  <span key={cIdx} className="about-char inline-block">
                    {char}
                  </span>
                ))}
                {/* Adiciona espaço após cada palavra (exceto no final) */}
                {wIdx < arr.length - 1 && <span className="inline-block">&nbsp;</span>}
              </span>
            ))}
          </p>
        </div>



        {/* Bloco sobre inteligência e viabilização */}
        <div ref={intelligenceRef} className="mx-auto max-w-278.25 grid grid-cols-1 sm:grid-cols-[35%_65%] sm:gap-10 gap-12 lg:grid-cols-12 lg:gap-16 items-center my-16 lg:my-20">

          {/* Lado Esquerdo: Logo Box e Botão de Falar no WhatsApp */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            <div className="relative w-[80%] max-w-99.75 aspect-399/269">
              <Image
                src="/logo-about.png"
                alt="Logo Box GRU Consulting"
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Link para Falar no WhatsApp */}
            <Link
              href="/whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 hidden lg:flex h-8.75 w-41.25 items-center justify-center rounded-[9px] bg-[#236253] text-[10px] font-semibold uppercase tracking-wider text-white shadow-[0px_2.34px_2.34px_0px_rgba(0,0,0,0.25)] transition-all duration-300 hover:bg-[#1a4b3f] hover:scale-105"
            >
              Falar no WhatsApp
            </Link>
          </div>

          {/* Lado Direito: Informações e Diferenciais de Consultoria */}
          <div className="lg:col-span-6 flex flex-col gap-4 text-center lg:text-left scale-90">
            <span className="text-[14px] font-semibold uppercase tracking-[0.15em] text-[#6B6057]">
              Inteligência · Consultoria & Viabilidade
            </span>

            <h2 className="flex flex-col gap-1 mt-10">
              <span className="font-poppins text-2xl md:text-[32px] font-semibold text-[#002047] leading-tight">
                Não apenas enviamos.
              </span>
              <span className="font-poppins text-4xl md:text-[42px] font-light text-[#3F3731]/70 leading-tight">
                Viabilizamos <br className="hidden md:block" />o seu negócio.
              </span>
            </h2>
          </div>


        </div>

        <div className="w-full md:w-[80%] lg:w-[70%] lg:mt-20 text-center mx-auto">
          <p
            ref={strategyTextRef}
            className="mt-4 font-poppins text-[24px] md:text-[30px] font-light text-[#3F3731]/70 leading-[1.3]"
          >
            {"Antes do primeiro container, vem a estratégia. Analisamos a viabilidade financeira e o compliance tributário para garantir que sua internacionalização seja sustentável e protegida.".split(" ").map((word, wIdx, arr) => (
              <span key={wIdx} className="inline-block overflow-hidden align-bottom whitespace-nowrap">
                {word.split("").map((char, cIdx) => (
                  <span key={cIdx} className="strategy-char inline-block">
                    {char}
                  </span>
                ))}
                {/* Adiciona espaço após cada palavra (exceto no final) */}
                {wIdx < arr.length - 1 && <span className="inline-block">&nbsp;</span>}
              </span>
            ))}
          </p>
        </div>

        {/* Sub-seção com os Segmentos Atendidos */}
        <div className="mt-20 lg:mt-28 flex flex-col items-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#6B6057] mb-4">
            Segmentos Atendidos
          </span>

          {/* Grid de Cards dos Segmentos Atendidos com divisores internos */}
          <div
            ref={segmentsContainerRef}
            className="w-full md:max-w-210.5 flex flex-col md:flex-row items-center md:items-stretch rounded-sm overflow-hidden gap-2 md:gap-4"
          >
            {segmentos.map((seg, idx) => (
              <div
                key={idx}
                className="flex-1 md:bg-[#FCFAF6] md:px-6 md:py-8 lg:px-7 lg:py-9 flex flex-row md:flex-col items-center text-center gap-2 md:gap-5 transition-colors duration-300 md:hover:bg-[#FAF6EE] group md:shadow-[0px_2.34px_2.34px_0px_rgba(0,0,0,0.12)]"
              >
                {/* Ícone correspondente do segmento */}
                <div className="relative flex w-[30vw] md:w-15 h-15 transition-transform duration-300 group-hover:scale-110 scale-130 md:scale-100">
                  <Image
                    src={seg.icon}
                    alt={`Ícone do segmento ${seg.title}`}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="w-full flex flex-col items-start md:items-center">
                  {/* Título do segmento usando a fonte serifada EB Garamond */}
                  <h3 className="text-[19.75px] font-medium text-[#131B26] mt-2 text-left md:text-center">
                    {seg.title}
                  </h3>

                  {/* Descrição resumida do segmento */}
                  <p className="text-[15px] md:text-[17.5px] text-[#131B26]/70 leading-relaxed max-w-85 md:max-w-53.75 text-left md:text-center">
                    {seg.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
