"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

export default function FundadorCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Registrar o plugin ScrollTrigger no lado do cliente
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animação da imagem do fundador (slide da esquerda para a direita)
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { opacity: 0, x: -50 },
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

      // Animação do conteúdo de texto do fundador (slide da direita para a esquerda)
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // Animação da seção de CTA (subida suave com fade-in)
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ctaRef.current,
              start: "top 90%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert(); // Limpa as animações ao desmontar o componente
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white text-zinc-900 font-poppins py-20 md:py-28 lg:py-32 overflow-hidden border-t border-zinc-100"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-20">

        {/* Bloco do Fundador */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Esquerda: Imagem com cantos arredondados */}
          <div
            ref={imageRef}
            className="lg:col-span-5 flex justify-center w-full"
          >
            <div className="relative w-full aspect-4/5 sm:aspect-square lg:aspect-4/5 max-w-120 rounded-3xl overflow-hidden shadow-lg bg-zinc-100">
              <Image
                src="/mauricio-escritorio.webp"
                alt="Mauricio Bernardino Grunewald"
                fill
                sizes="(max-w-720px) 100vw, 480px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Direita: Texto e Informações */}
          <div
            ref={contentRef}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] text-[#B89774] uppercase mb-3 md:mb-4">
              O Fundador
            </span>

            <h2 className="font-garamond text-3xl sm:text-4xl lg:text-[40px] font-semibold leading-tight text-[#002047] mb-6 md:mb-8">
              Mauricio Bernardino Grunewald
            </h2>

            <div className="space-y-4 md:space-y-6 text-[#5F5955] text-[14px] sm:text-[15px] md:text-[16px] font-light leading-relaxed max-w-2xl">
              <p>
                Com trajetória iniciada em 1997 no Banco Real e cerca de 16 anos no
                setor bancário, Mauricio consolidou sua expertise como gerente de
                contas e passou pela AGK Corretora de Câmbio antes de atuar na área
                de Comércio Exterior da System Cargo (atual Sys Group).
              </p>
              <p>
                Em 2018, fundou a GRU Consulting para preencher uma lacuna de clareza
                no mercado — unindo o rigor das instituições financeiras com a
                agilidade necessária ao comércio exterior moderno.
              </p>
            </div>

            {/* Linha Divisória Fina */}
            <hr className="w-full border-t border-zinc-200/70 my-8 md:my-10" />

            {/* Estatísticas */}
            <div className="flex flex-row gap-16 md:gap-24">
              <div className="flex flex-col">
                <span className="font-garamond text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#002047] leading-none mb-2">
                  25+
                </span>
                <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.15em] text-[#6B6057] uppercase">
                  Anos de Mercado
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-garamond text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#002047] leading-none mb-2">
                  2018
                </span>
                <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.15em] text-[#6B6057] uppercase">
                  Fundação GRU
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Bloco CTA (Pronto para expandir...) */}
        <div
          ref={ctaRef}
          className="mt-28 md:mt-36 lg:mt-40 text-center flex flex-col items-center"
        >
          <h2 className="font-garamond text-2xl sm:text-3xl lg:text-[38px] font-normal leading-tight text-[#002047] max-w-2xl px-4">
            Pronto para expandir suas operações para o mercado global?
          </h2>

          <Link
            href="/whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 md:mt-10 inline-flex items-center justify-center gap-2.5 bg-[#0B0D12] text-white rounded-full px-8 py-4 text-[14px] md:text-[15px] font-medium transition-all duration-300 hover:bg-[#1a1e27] hover:scale-105 active:scale-98 shadow-lg shadow-black/10 cursor-pointer"
          >
            <span className="text-base font-semibold leading-none">+</span>
            <span>Agendar reunião estratégica</span>
          </Link>

        </div>

      </div>
    </section>
  );
}
