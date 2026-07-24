"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SobreLP() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animação da imagem da esquerda (slide suave + fade)
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

      // Animação do conteúdo da direita (slide suave + fade)
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
      id="sobre"
      className="w-full bg-[#FAFAFA] text-zinc-900 font-poppins py-20 sm:py-24 lg:py-32 overflow-hidden border-b border-zinc-100"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Lado Esquerdo: Imagem da Caixa Conceitual e Botão */}
          <div
            ref={imageRef}
            className="lg:col-span-5 flex flex-col items-center justify-center w-full"
          >
            <div className="relative w-full max-w-[360px] aspect-[400/270] rounded-2xl overflow-hidden">
              <Image
                src="/logo-about.png"
                alt="GRU Consulting Conceito"
                fill
                priority
                className="object-contain"
              />
            </div>

            <Link
              href="/whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex h-11 items-center justify-center rounded-[4px] bg-[#236253] text-[11px] font-semibold uppercase tracking-wider text-white px-8 shadow-sm transition-all duration-300 hover:bg-[#1a4b3f] hover:scale-[1.02] active:scale-[0.98]"
            >
              Falar no WhatsApp
            </Link>
          </div>

          {/* Lado Direito: Informações Institucionais */}
          <div
            ref={contentRef}
            className="lg:col-span-7 flex flex-col justify-center text-left gap-5"
          >
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] text-[#B89774] uppercase">
              Sobre a GRU Consulting
            </span>

            <h2 className="font-poppins text-3xl sm:text-4xl lg:text-[45px] font-light leading-tight text-[#002047] mb-2">
              Experiência para conectar empresas ao <br className="hidden sm:block" />
              <span className="font-semibold">mercado internacional.</span>
            </h2>

            <div className="space-y-4 font-poppins font-light text-sm sm:text-base text-zinc-600 leading-relaxed max-w-2xl">
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
