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
    "Atendimento\npersonalizado",
    "Especialistas em\nComércio Exterior",
    "Operações nacionais\ne internacionais",
    "Suporte em\ntodas as etapas",
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#11141D] py-8 sm:py-10 border-b border-white/5 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex flex-row gap-0 md:gap-3 lg:gap-6 items-center  justify-center flex-wrap md:flex-nowrap">
          {indicadores.map((texto, idx) => (
            <div
              key={idx}
              className="indicador-item grid grid-cols-[20px_140px] lg:grid-cols-[20px_160px] lg:grid-cols-[20px_1fr] items-center gap-3.5 py-2 px-3 rounded-lg hover:bg-white/2 transition-colors duration-300 min-w-35"
            >
              {/* Ícone de Check Elegante */}
              <div className="flex shrink-0 w-5 h-5 rounded-full bg-[#E5B584]/10 border border-[#E5B584]/30 items-center  justify-center">
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
              <span className="font-poppins font-normal text-[13px] md:text-[11px] lg:text-[16px] text-white/90 tracking-wide whitespace-nowrap">
                {texto.split("\n").map((linha, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <br />}
                    {linha}
                  </React.Fragment>
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
