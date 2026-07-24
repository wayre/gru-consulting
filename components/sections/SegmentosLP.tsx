"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SegmentosLP() {
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
          { opacity: 0, scale: 0.9, y: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.2)",
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

  const segmentos = [
    {
      name: "Agronegócio",
      icon: (
        <svg className="w-6 h-6 text-[#236253]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
        </svg>
      )
    },
    {
      name: "Saúde",
      icon: (
        <svg className="w-6 h-6 text-[#236253]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      name: "Indústria",
      icon: (
        <svg className="w-6 h-6 text-[#236253]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      name: "Tecnologia",
      icon: (
        <svg className="w-6 h-6 text-[#236253]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      name: "Autopeças",
      icon: (
        <svg className="w-6 h-6 text-[#236253]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      name: "Energia",
      icon: (
        <svg className="w-6 h-6 text-[#236253]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      name: "Bens de Consumo",
      icon: (
        <svg className="w-6 h-6 text-[#236253]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    {
      name: "Máquinas e Equipamentos",
      icon: (
        <svg className="w-6 h-6 text-[#236253]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 4a2 2 0 114 0v1a2 2 0 01-2 2H9a2 2 0 01-2-2V4a2 2 0 012-2h2m4 4h4a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h4" />
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
        <div ref={headerRef} className="max-w-3xl flex flex-col gap-4 text-left mb-14 lg:mb-20">
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.15em] text-[#B89774] uppercase">
            Segmentos Atendidos
          </span>

          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-[45px] font-light leading-tight text-[#002047]">
            Atendemos empresas de <br className="hidden sm:block" />
            <span className="font-semibold">diversos segmentos.</span>
          </h2>
        </div>

        {/* Grid de Cards dos Segmentos */}
        <div 
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full"
        >
          {segmentos.map((seg, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 bg-[#F9FBFB] hover:bg-[#EBF3F1] border border-zinc-200/50 hover:border-[#236253]/20 rounded-2xl p-5 md:p-6 transition-all duration-300 hover:shadow-xs group"
            >
              {/* Ícone */}
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white border border-zinc-200/50 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                {seg.icon}
              </div>

              {/* Título do Segmento */}
              <span className="font-poppins font-medium text-sm text-[#002047] group-hover:text-[#236253] transition-colors duration-300">
                {seg.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
