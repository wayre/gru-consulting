"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function DesafioDeMercado() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Registrar o plugin ScrollTrigger no lado do cliente
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animação da coluna da esquerda (Revelação suave com deslocamento vertical)
      if (leftColRef.current) {
        gsap.fromTo(
          leftColRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: leftColRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // Animação sequencial (stagger) dos itens de desafio na coluna da direita
      if (rightColRef.current) {
        gsap.fromTo(
          rightColRef.current.children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.25,
            ease: "power2.out",
            scrollTrigger: {
              trigger: rightColRef.current,
              start: "top 85%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert(); // Limpa as animações ao desmontar o componente
  }, []);

  const desafios = [
    {
      number: "01",
      title: "INSEGURANÇA NORMATIVA",
      description:
        "O desconhecimento de exigências legais e normas aduaneiras gera paralisia e medo de multas severas ou retenção de carga.",
    },
    {
      number: "02",
      title: "RISCOS FINANCEIROS",
      description:
        "A ausência de planejamento cambial e fiscal compromete a margem de lucro e a previsibilidade do fluxo de caixa internacional.",
    },
    {
      number: "03",
      title: "FALTA DE ESTRUTURA",
      description:
        "Muitas empresas desejam operar globalmente, mas não possuem equipe especializada nem departamento interno de Comex.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#0B0D12] text-white font-poppins py-20 md:py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Coluna da Esquerda: Rótulo e Título Principal */}
          <div
            ref={leftColRef}
            className="flex flex-col text-center md:text-left justify-start"
          >
            <span className="font-garamond italic text-[22px] md:text-[24px] text-[#E5B584] mb-4 md:mb-6">
              Desafios do Mercado
            </span>
            <h2 className="font-garamond text-3xl sm:text-4xl lg:text-[45px] font-normal leading-tight md:leading-[1.2] text-white max-w-lg mx-auto md:mx-0">
              A complexidade não deve ser um entrave para sua expansão global.
            </h2>
          </div>

          {/* Coluna da Direita: Lista de Desafios */}
          <div
            ref={rightColRef}
            className="flex flex-col gap-12 md:gap-16 mt-4 md:mt-2"
          >
            {desafios.map((desafio, index) => (
              <div
                key={index}
                className="flex flex-col text-center md:text-left gap-3 md:gap-4"
              >
                {/* Título do Desafio */}
                <h3 className="text-[11px] font-medium tracking-[0.15em] text-[#E5B584] uppercase">
                  {desafio.number} — {desafio.title}
                </h3>
                {/* Descrição do Desafio */}
                <p className="font-poppins font-light text-[15px] md:text-[16.5px] text-white/70 leading-relaxed max-w-xl mx-auto md:mx-0">
                  {desafio.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
