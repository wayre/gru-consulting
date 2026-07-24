"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

export default function CTALocalLP() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: contentRef.current,
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
      className="relative w-full bg-[#236253] text-white font-poppins py-20 sm:py-24 lg:py-28 overflow-hidden"
    >
      {/* Luz dourada de fundo sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#E5B584]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 flex flex-col justify-start">
        
        {/* Bloco de Conteúdo */}
        <div 
          ref={contentRef}
          className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto"
        >
          {/* Título Principal */}
          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-[45px] font-semibold leading-tight text-white">
            Sua empresa pronta para operar no mercado internacional.
          </h2>

          {/* Subtítulo */}
          <p className="font-poppins font-light text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl">
            Conte com uma equipe especializada para tornar suas operações mais seguras, ágeis e eficientes.
          </p>

          {/* Botão de Ação */}
          <div className="mt-4">
            <Link
              href="/whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center rounded-[4px] bg-[#E5B584] hover:bg-[#d4a473] text-black font-semibold text-sm px-10 transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] shadow-lg shadow-black/10 text-center"
            >
              Falar com um especialista
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
