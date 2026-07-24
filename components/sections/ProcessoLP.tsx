"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ProcessoLP() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animação de revelação sequencial das etapas
      if (stepsRef.current) {
        gsap.fromTo(
          stepsRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: stepsRef.current,
              start: "top 85%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const passos = [
    {
      numero: "01",
      titulo: "Entendemos sua necessidade",
      desc: "Primeiro contato para analisar as demandas específicas do seu negócio."
    },
    {
      numero: "02",
      titulo: "Planejamos a operação",
      desc: "Definição de rotas, custos estimados e enquadramento aduaneiro seguro."
    },
    {
      numero: "03",
      titulo: "Executamos toda a documentação",
      desc: "Elaboração de licenças, registros e guias necessárias para o compliance."
    },
    {
      numero: "04",
      titulo: "Acompanhamos embarques",
      desc: "Monitoramento em tempo real do transporte até o destino aduaneiro."
    },
    {
      numero: "05",
      titulo: "Concluímos a operação",
      desc: "Desembaraço concluído e entrega segura das mercadorias."
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="como-trabalhamos"
      className="relative w-full bg-white text-zinc-900 font-poppins py-20 sm:py-24 lg:py-32 border-b border-zinc-100 overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col justify-start">
        
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl flex flex-col gap-4 text-left mb-16 lg:mb-24">
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.15em] text-[#B89774] uppercase">
            Como Trabalhamos
          </span>

          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-[45px] font-light leading-tight text-[#002047]">
            Um processo <br className="hidden sm:block" />
            <span className="font-semibold">simples e transparente.</span>
          </h2>
          
          <p className="font-poppins font-light text-sm sm:text-base text-zinc-600 leading-relaxed max-w-xl">
            Estruturamos as etapas operacionais com clareza para reduzir a percepção de risco e dar previsibilidade em cada etapa do processo.
          </p>
        </div>

        {/* Linha do Tempo Horizontal / Vertical */}
        <div 
          ref={stepsRef}
          className="relative grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-6 mt-4 lg:mt-8 w-full"
        >
          {/* Linha conectora em desktop */}
          <div className="hidden md:block absolute top-[27px] left-[5%] right-[5%] h-0.5 bg-zinc-200/70 -z-10" />

          {passos.map((passo, idx) => (
            <div key={idx} className="flex md:flex-col items-start gap-5 md:gap-6 group relative">
              
              {/* Círculo do Número */}
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-zinc-50 border border-zinc-200/80 text-[#236253] group-hover:bg-[#236253] group-hover:border-[#236253] group-hover:text-white font-instrument text-lg font-bold flex items-center justify-center transition-all duration-300 shadow-sm relative z-10">
                {passo.numero}
              </div>

              {/* Conteúdo Textual */}
              <div className="flex flex-col gap-2.5 text-left md:pt-1">
                <h3 className="font-poppins font-semibold text-sm sm:text-base text-[#002047] group-hover:text-[#236253] transition-colors duration-300">
                  {passo.titulo}
                </h3>
                <p className="font-poppins font-light text-xs sm:text-sm text-zinc-500 leading-relaxed pr-2 md:pr-0">
                  {passo.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
