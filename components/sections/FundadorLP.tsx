"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function FundadorLP() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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

      // Animação do card de glassmorphism (slide suave da esquerda + fade)
      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // Animação da imagem do fundador (slide suave da direita + fade)
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { opacity: 0, x: 40 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: imageRef.current,
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
      className="w-full bg-white text-zinc-900 font-poppins py-8 sm:py-5 lg:pb-30 overflow-hidden relative"
    >
      {/* Adicionar um background image absolute com 100% width e height auto abaixo do conteudo da pagina e bottom = 0*/}
      <div className="absolute bottom-0 left-0 w-full h-[400px] flex items-end">
        <Image
          src="/bg-fundador-base.webp"
          alt="Base"
          fill
          className="w-full h-full object-cover object-bottom"
          priority
          sizes="(max-w-1024px) 100vw, 1116px"
        />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Título da Seção Centralizado no Topo */}
        <div className="w-full flex justify-center mb-10 lg:mb-16">
          <h2
            ref={titleRef}
            className="font-poppins text-lg sm:text-[25px] font-light sm:font-semibold text-black text-center leading-tight"
          >
            Conheça o fundador da GRU Consulting
          </h2>
        </div>

        {/* Container Principal com Imagem de Background */}
        <div className="relative w-full mx-auto lg:rounded-[30px] overflow-hidden min-h-337 lg:min-h-224.75 flex flex-col items-center lg:items-end p-4 sm:p-8 lg:p-0 lg:translate-x-[7vw]">

          {/* Imagem de Fundo (Escritório) */}
          <div className="absolute inset-0 w-full lg:w-[70%] h-[500px] lg:h-full z-0 select-none pointer-events-none -translate-x-10 lg:translate-0 scale-120 lg:scale-100">
            <Image
              src="/bg-fundador.webp"
              alt="Escritório GRU Consulting"
              fill
              className="w-full h-auto object-contain object-top"
              priority
              sizes="(max-w-1024px) 100vw, 1116px"
            />
          </div>

          {/* Conteúdo sobreposto (Glassmorphism + Foto do Mauricio) */}
          <div className="relative z-10 w-full flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between items-center lg:items-end lg:pl-20 lg:pr-0 lg:pb-5 lg:pt-25">

            {/* Lado Esquerdo: Card de Glassmorphism */}
            <div className="flex flex-col mt-20">
              <div>
                <span className="w-full font-instrument text-xs font-semibold tracking-[0.20em] text-black uppercase lg:self-start">
                  O Fundador
                </span>
              </div>
              <div
                ref={cardRef}
                className="w-full lg:max-w-142.25 bg-white/60 backdrop-blur-xs rounded-[23px] lg:rounded-[20px] shadow-sm border border-white/20 px-2.5 sm:px-6 lg:px-6.25 py-10 sm:py-14 lg:py-17.5 flex flex-col gap-4 lg:gap-6 items-center text-center lg:text-left z-10"
              >

                <h3 className="w-full font-garamond text-3xl sm:text-[36px] font-medium leading-tight text-[#131B26] lg:self-start">
                  Mauricio Bernardino Grunewald
                </h3>

                {/* Card Branco Interno de Especialidades */}
                <div className="w-full max-w-120.75 bg-white rounded-xl py-3.5 px-5 border border-zinc-100/50 shadow-sm text-left">
                  <p className="whitespace-pre-line font-poppins text-[15px] font-medium text-[#52525C] leading-5.5">
                    {"Especialista em Comércio Exterior\n✔ Importação\n✔ Exportação\n✔ Despacho Aduaneiro\n✔ Logística Internacional\n✔ Assessoria Cambial"}
                  </p>
                </div>

                {/* Textos Descritivos */}
                <div className="space-y-4 font-poppins font-light text-normal sm:text-base lg:text-lg text-[#52525C] leading-6.5 text-left max-w-120.75 px-3">
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

                {/* Estatísticas / Indicadores */}
                <div className="w-full max-w-120.75 border-t border-[#131B26]/10 pt-4 flex flex-row gap-10 sm:gap-14 justify-start">
                  <div className="flex flex-col items-start">
                    <span className="font-garamond text-[30px] font-medium text-[#131B26] leading-none mb-1">
                      25+
                    </span>
                    <span className="font-instrument text-[10px] font-semibold tracking-[0.15em] text-[#131B26]/50 uppercase">
                      Anos de Mercado
                    </span>
                  </div>

                  <div className="flex flex-col items-start">
                    <span className="font-garamond text-[30px] font-medium text-[#131B26] leading-none mb-1">
                      2018
                    </span>
                    <span className="font-instrument text-[10px] font-semibold tracking-[0.15em] text-[#131B26]/50 uppercase">
                      Fundação GRU
                    </span>
                  </div>
                </div>

              </div>
            </div>


            {/* Lado Direito: Imagem do Fundador Transparente */}
            <div
              ref={imageRef}
              className="relative w-73.75 h-82.75 lg:w-128.5 lg:h-144.25 shrink-0 flex justify-center items-end"
            >
              <Image
                src="/mauricio-sentado-transp.webp"
                alt="Mauricio Bernardino Grunewald"
                fill
                priority
                className="object-top-left translate-x-[9vw] sm:translate-x-[4vw] md:translate-x-[5vw] lg:translate-x-0"
                sizes="(max-w-1024px) 295px, 514px"
              />
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
