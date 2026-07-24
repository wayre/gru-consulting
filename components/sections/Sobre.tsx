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
    });

    return () => ctx.revert(); // Limpa as animações e triggers ao desmontar
  }, []);
  return (
    <section className="about-section w-full bg-white py-16 md:py-24 pt-30 lg:pt-35 lg:pb-42.5 text-zinc-900 font-poppins" id="sobre">
      <div className="mx-auto max-w-7xl px-10 sm:px-6 lg:px-8">

        {/* Bloco de introdução principal da consultoria */}
        <div className="w-full md:w-[80%] about-main-text mx-auto max-w-231.25 text-center mb-10">
          <p
            ref={textRef}
            className="text-[26px] md:text-3xl lg:text-[30px] lg:leading-13.75 text-[#606060] font-light"
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
      </div>
    </section>
  );
}
