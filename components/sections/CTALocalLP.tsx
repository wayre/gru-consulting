"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

export default function CTALocalLP() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animação de entrada dos elementos internos
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
      className="relative w-full bg-[#236253] text-white font-poppins h-[870px] lg:h-[515px] overflow-hidden"
    >
      {/* Imagem de background cobrindo a seção */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <Image
          src="/fale-com-o-mauricio.webp"
          alt="Fale com o Maurício"
          fill
          priority
          className="object-cover object-[calc(80%-10px)_50%] lg:object-center"
        />
      </div>

      {/* Camada sutil de escurecimento radial no mobile para melhorar legibilidade */}
      <div className="absolute lg:hidden inset-0 bg-[radial-gradient(circle,transparent_20%,rgba(0,0,0,0.5)_100%)] lg:bg-transparent z-0 pointer-events-none" />

      {/* Luz dourada de fundo sutil */}
      <div className="absolute lg:hidden w-[550px] h-[550px] bg-[#E5B584]/5 rounded-full blur-[140px] pointer-events-none left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 lg:left-[445px] lg:top-[-17px] lg:translate-x-0 lg:translate-y-0 z-0" />

      {/* Degradê vertical de preto para transparente no mobile para legibilidade do texto */}
      <div className="absolute lg:hidden bottom-0 inset-x-0 h-[450px] bg-gradient-to-t from-black to-transparent z-[1] pointer-events-none" />

      {/* Wrapper de Conteúdo Principal */}
      <div className="relative z-10 w-full max-w-[1205px] mx-auto h-full px-5 lg:px-0">

        {/* Bloco de Conteúdo */}
        <div
          ref={contentRef}
          className="absolute left-1/2 -translate-x-1/2 lg:translate-x-0 w-full max-w-[380px] lg:max-w-[756px] lg:left-[130px] top-0 lg:top-[110px] h-full lg:h-[282px] pt-[500px] lg:pt-0 pb-10 lg:pb-0 flex flex-col justify-between items-center"
        >
          {/* Título Principal */}
          <h2 className="font-poppins text-[28px] sm:text-[32px] lg:text-[45px] font-semibold leading-[36px] sm:leading-[42px] lg:leading-[56px] text-white text-center">
            Sua empresa pronta para operar<br className="hidden sm:block" /> no mercado internacional.
          </h2>

          {/* Subtítulo */}
          <p className="font-poppins font-light text-sm sm:text-[15px] lg:text-[18px] text-white/80 leading-relaxed lg:leading-[29px] max-w-[320px] sm:max-w-none lg:max-w-[630px] text-center">
            Fale diretamente com Maurício e tire suas dúvidas sobre importação, exportação, despacho aduaneiro ou assessoria cambial.
          </p>

          {/* Botão de Ação */}
          <div className="flex justify-center w-full">
            <Link
              href="/whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-[256px] h-[62px] items-center justify-center rounded-xl border border-[#4D5649] text-white font-semibold text-sm transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] hover:brightness-110 shadow-lg shadow-black/10 text-center"
              style={{ background: "linear-gradient(149deg, #446C63 0%, #232A18 100%)" }}
            >
              Fale diretamente<br />com o Especialista
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
