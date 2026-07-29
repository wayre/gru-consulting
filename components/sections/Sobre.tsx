"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Sobre() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Efeito para criar animações de entrada com GSAP e ScrollTrigger
  useEffect(() => {
    // Registrar o plugin ScrollTrigger no lado do cliente
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animação da coluna da esquerda (imagem e botão) com entrada lateral e fade
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { opacity: 0, x: -40 },
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

      // Animação da coluna da direita (textos) com entrada de baixo para cima em cascata (stagger)
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

    return () => ctx.revert(); // Limpa as animações e triggers ao desmontar
  }, []);

  return (
    <section
      ref={sectionRef}
      id="sobre"
      className="w-full bg-white text-zinc-900 font-poppins py-14 sm:py-24 lg:py-16 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Lado Esquerdo: Imagem da Caixa Conceitual e Botão do WhatsApp */}
          <div
            ref={imageRef}
            className="lg:col-span-5 flex flex-col items-center justify-center w-full gap-8"
          >
            <div className="relative w-full max-w-90 aspect-360/243 rounded-2xl overflow-hidden">
              <Image
                src="/logo-about.png"
                alt="GRU Consulting Conceito"
                fill
                priority
                className="object-contain"
                sizes="(max-w-1024px) 100vw, 360px"
              />
            </div>

            <Link
              href="/whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-8.25 w-51.75 items-center justify-center rounded-sm bg-[#236253] text-[11px] font-semibold uppercase tracking-wider text-white shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] transition-all duration-300 hover:bg-[#1a4b3f] hover:scale-[1.02] active:scale-[0.98]"
            >
              Falar no WhatsApp
            </Link>
          </div>

          {/* Lado Direito: Informações Institucionais */}
          <div
            ref={contentRef}
            className="lg:col-span-7 flex flex-col justify-center text-left gap-5"
          >
            <span className="text-[11px] font-semibold tracking-[0.2em] text-[#B89774] uppercase">
              Sobre a GRU Consulting
            </span>

            <h2 className="font-poppins text-3xl sm:text-4xl lg:text-[45px] font-light leading-tight lg:leading-14 text-[#002047] mb-2">
              Experiência para <br className="hidden sm:block" />
              conectar empresas ao <br className="hidden sm:block" />
              <span className="font-semibold">mercado internacional.</span>
            </h2>

            <div className="space-y-4 font-poppins font-light text-sm sm:text-base text-[#52525C] leading-relaxed max-w-2xl">
              <p>
                Nascemos com o propósito de oferecer clareza operacional e planejamento inteligente para importações e exportações de todos os portes. Unimos a solidez técnica de profissionais experientes com a agilidade exigida pelo mercado moderno.
              </p>
              <p>
                Nosso diferencial está no comprometimento integral e no atendimento personalizado. Nossa equipe atua em conformidade rigorosa com a legislação nacional e internacional, desenvolvendo caminhos eficientes e seguros para viabilizar as suas operações globais sem gargalos tributários ou logísticos.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
