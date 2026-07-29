"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Clientes from "./Clientes";

export default function ExpertisesLP() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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
      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, scale: 0.95, y: 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 90%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const expertises = [
    {
      title: "Obras de Arte",
      description: "Operações com alto nível de cuidado documental e logístico.",
      icon: (
        <svg className="w-6 h-6 text-[#236253]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Projetos Personalizados",
      description: "Estratégias desenvolvidas conforme as necessidades de cada cliente.",
      icon: (
        <svg className="w-6 h-6 text-[#236253]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      )
    },
    {
      title: "Conformidade Regulatória",
      description: "Suporte técnico para operações que exigem atenção às normas e exigências legais.",
      icon: (
        <svg className="w-6 h-6 text-[#236253]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="segmentos"
      className="w-full bg-white text-zinc-900 font-poppins py-20 sm:py-24 lg:py-32 border-b border-zinc-100 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 flex flex-col justify-start">

        {/* Cabeçalho da Seção */}
        <div ref={headerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16 lg:mb-24">
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.15em] text-[#B89774] uppercase">
              Nossa Expertise
            </span>

            <h2 className="font-poppins text-3xl sm:text-4xl lg:text-[45px] font-light leading-tight text-[#002047]">
              Além das <br className="hidden sm:block" />
              <span className="font-semibold">operações convencionais.</span>
            </h2>
          </div>

          <div className="lg:col-span-7 lg:pt-8">
            <p className="font-poppins text-base sm:text-lg text-zinc-600 leading-relaxed font-light">
              A experiência da GRU Consulting vai além das operações convencionais. Atuamos em projetos que exigem planejamento, conformidade e acompanhamento técnico, oferecendo soluções seguras para diferentes cenários do comércio exterior.
            </p>
          </div>
        </div>

        {/* Grid de Cards de Expertise */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
        >
          {expertises.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col bg-[#F9FBFB] hover:bg-white border border-zinc-200/50 hover:border-[#236253]/20 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
            >
              {/* Ícone */}
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white border border-zinc-200/50 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-[#236253]/30">
                {item.icon}
              </div>

              {/* Título da Expertise */}
              <h3 className="font-poppins font-semibold text-lg text-[#002047] mt-6 mb-3 group-hover:text-[#236253] transition-colors duration-300">
                {item.title}
              </h3>

              {/* Descrição da Expertise */}
              <p className="font-poppins text-zinc-600 text-sm sm:text-base leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Inserir parceiros em loop na vertical */}
        <Clientes />

      </div>
    </section>
  );
}
