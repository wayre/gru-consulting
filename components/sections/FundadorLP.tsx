"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function FundadorLP() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Registrar o plugin ScrollTrigger no lado do cliente
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animação de fade-in para o título principal no topo
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: -20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // Animação da coluna da esquerda (revelação gradual dos elementos)
      if (leftContentRef.current) {
        gsap.fromTo(
          leftContentRef.current.children,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: leftContentRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // Animação da imagem da direita (fade-in com entrada suave da direita)
      if (rightImageRef.current) {
        gsap.fromTo(
          rightImageRef.current,
          { opacity: 0, x: 40 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: rightImageRef.current,
              start: "top 85%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="sobre"
      className="w-full bg-[#FAFAFA] text-zinc-900 font-poppins py-14 sm:py-24 lg:py-32 overflow-hidden border-b border-zinc-100"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Título da Seção Centralizado no Topo */}
        <div className="w-full flex justify-center mb-16 lg:mb-20">
          <h3
            ref={titleRef}
            className="text-[11px] sm:text-[12px] font-semibold tracking-[0.25em] text-zinc-800 uppercase text-center"
          >
            Conheça o fundador da GRU Consulting
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Lado Esquerdo: Informações e Biografia do Fundador */}
          <div
            ref={leftContentRef}
            className="lg:col-span-7 flex flex-col text-left justify-center lg:justify-start items-center lg:items-start"
          >
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] text-[#B89774] uppercase mb-2">
              O Fundador
            </span>

            <h2 className="font-poppins text-2xl sm:text-4xl lg:text-[24px] font-medium leading-tight text-[#131B26] mb-2">
              Mauricio Bernardino Grunewald
            </h2>

            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.15em] text-zinc-500 uppercase mb-6 block">
              Especialista em Comércio Exterior
            </span>

            {/* Lista de Checklists das Especialidades */}
            <div className="flex flex-col gap-2 mb-8 text-[11px] sm:text-[12px] font-semibold tracking-[0.15em] text-[#5F5955] bg-neutral-200 py-4 px-8 rounded">
              <div className="flex items-center gap-2">
                <span className="text-[#B89774] font-bold">✓</span> IMPORTAÇÃO
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#B89774] font-bold">✓</span> EXPORTAÇÃO
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#B89774] font-bold">✓</span> DESPACHO ADUANEIRO
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#B89774] font-bold">✓</span> LOGÍSTICA INTERNACIONAL
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#B89774] font-bold">✓</span> ASSESSORIA CAMBIAL
              </div>
            </div>

            {/* Texto Descritivo/Trajetória */}
            <div className="space-y-5 font-poppins font-light text-sm sm:text-base text-zinc-600 leading-relaxed max-w-2xl mb-12 flex flex-col justify-center">
              <p>
                A GRU Consulting foi fundada por Maurício Bernardino Grunewald,
                profissional com mais de 25 anos de experiência nas áreas
                financeira e de comércio exterior.
              </p>
              <p>
                Sua trajetória reúne atuação no mercado bancário, câmbio e
                operações internacionais, proporcionando uma visão estratégica
                que integra planejamento financeiro, conformidade e eficiência
                operacional.
              </p>
              <p>
                Em 2018, fundou a GRU Consulting com o propósito de oferecer um
                atendimento consultivo, transparente e próximo ao cliente,
                unindo conhecimento técnico e soluções personalizadas para
                simplificar as operações de comércio exterior.
              </p>
            </div>

            {/* Indicadores / Estatísticas */}
            <div className="flex flex-row gap-16 md:gap-24 justify-center lg:justify-start">
              <div className="flex flex-col">
                <span className="font-garamond text-3xl sm:text-4xl lg:text-[45px] font-bold text-[#002047] leading-none mb-2">
                  25+
                </span>
                <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.15em] text-[#6B6057] uppercase">
                  Anos de Mercado
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-garamond text-3xl sm:text-4xl lg:text-[45px] font-bold text-[#002047] leading-none mb-2">
                  2018
                </span>
                <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.15em] text-[#6B6057] uppercase">
                  Fundação GRU
                </span>
              </div>
            </div>

          </div>

          {/* Lado Direito: Imagem do Fundador */}
          <div
            ref={rightImageRef}
            className="lg:col-span-5 flex justify-center w-full relative"
          >
            <div className="relative w-full max-w-[450px] aspect-[450/470]">
              <Image
                src="/mauricio-sentado-transp.webp"
                alt="Mauricio Bernardino Grunewald"
                fill
                priority
                className="object-contain"
                sizes="(max-w-1024px) 100vw, 450px"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
