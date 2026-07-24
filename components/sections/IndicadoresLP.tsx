"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function IndicadoresLP() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (sectionRef.current) {
        // Animação de fade-in e subida suave para cada indicador
        gsap.fromTo(
          sectionRef.current.querySelectorAll(".indicador-item"),
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 90%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const indicadores = [
    "Atendimento personalizado",
    "Especialistas em Comércio Exterior",
    "Operações nacionais e internacionais",
    "Suporte em todas as etapas",
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#11141D] py-8 sm:py-10 border-b border-white/5"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-4 items-center justify-between">
          {indicadores.map((texto, idx) => (
            <div
              key={idx}
              className="indicador-item flex items-center gap-3.5 py-2 px-3 rounded-lg hover:bg-white/2 transition-colors duration-300"
            >
              {/* Ícone de Check Elegante */}
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#E5B584]/10 border border-[#E5B584]/30 flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-[#E5B584]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              {/* Texto do Indicador */}
              <span className="font-poppins font-normal text-sm sm:text-[15px] text-white/90 tracking-wide">
                {texto}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
