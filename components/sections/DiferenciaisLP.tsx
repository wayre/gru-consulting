"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function DiferenciaisLP() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animação de cabeçalho
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // Animação dos cards
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 90%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const diferenciais = [
    {
      title: "Atendimento Consultivo",
      description: "Cada operação é analisada conforme os objetivos do cliente.",
      icon: (
        <svg className="w-5 h-5 text-[#E5B584]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      title: "Segurança",
      description: "Atuação alinhada às normas nacionais e internacionais.",
      icon: (
        <svg className="w-5 h-5 text-[#E5B584]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Eficiência",
      description: "Processos organizados para reduzir tempo e custos operacionais.",
      icon: (
        <svg className="w-5 h-5 text-[#E5B584]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Solução Integrada",
      description: "Consultoria, logística, despacho e câmbio em um único parceiro.",
      icon: (
        <svg className="w-5 h-5 text-[#E5B584]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="diferenciais"
      className="relative w-full bg-[#0B0D12] text-white font-poppins py-20 sm:py-24 lg:py-32 border-b border-white/5 overflow-hidden"
    >
      {/* Background glow sutil */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] bg-[#E5B584]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col justify-start">
        
        {/* Cabeçalho da Seção */}
        <div ref={headerRef} className="max-w-3xl flex flex-col gap-4 text-left mb-16 lg:mb-24">
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.15em] text-[#E5B584] uppercase">
            Nossos Diferenciais
          </span>

          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-[45px] font-light leading-tight text-white">
            Por que escolher a <br className="hidden sm:block" />
            <span className="font-semibold text-white/95">GRU Consulting?</span>
          </h2>
        </div>

        {/* Grid de Diferenciais */}
        <div 
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-2"
        >
          {diferenciais.map((item, idx) => (
            <div
              key={idx}
              className="relative group bg-white/1 border border-white/5 hover:border-[#E5B584]/20 rounded-2xl p-6 md:p-8 flex flex-col justify-start gap-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/2"
            >
              {/* Círculo do Ícone */}
              <div className="w-10 h-10 rounded-xl bg-white/2 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Textos */}
              <div className="flex flex-col gap-2.5">
                <h3 className="font-poppins font-semibold text-sm sm:text-base text-white tracking-wide">
                  {item.title}
                </h3>
                <p className="font-poppins font-light text-xs sm:text-sm text-white/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
