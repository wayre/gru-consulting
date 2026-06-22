"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Sobre() {
  const textRef = useRef<HTMLParagraphElement>(null);

  // Efeito para criar a animação de scroll no texto principal com GSAP e ScrollTrigger
  useEffect(() => {
    // Registrar o plugin ScrollTrigger no lado do cliente
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context((self) => {
      // Seleciona todas as letras animadas dentro do escopo do elemento pai
      const chars = self.selector?.(".about-char");
      if (!chars || chars.length === 0) return;

      // Animação idêntica ao elemento .textoLongo do site webhub (GSAP a partir de y: 100% e opacity: 0)
      gsap.from(chars, {
        y: "100%", // Inicia deslocado 100% de sua própria altura para baixo
        opacity: 0,
        duration: 0.3,
        stagger: 0.02,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 90%",
          end: "bottom 50%",
          scrub: 3, // Lag/Inércia de scroll suave de 3 segundos
        },
      });
    }, textRef); // Escopo do GSAP restrito a esta referência para isolar seletores

    return () => ctx.revert(); // Limpa as animações e triggers ao desmontar
  }, []);

  // Configuração dos segmentos atendidos com base no design do Figma
  const segmentos = [
    {
      title: "Arte e Cultura",
      description: "Galerias, museus, curadores e estúdios criativos que exportam e importam obras com a segurança que peças valiosas exigem.",
      icon: "/ico-segment-art.svg",
    },
    {
      title: "Design e Decoração",
      description: "Designers, fabricantes de móveis e marcas autorais que operam internacionalmente sem montar estrutura interna.",
      icon: "/ico-segment-design.svg",
    },
    {
      title: "Indústria e Comércio",
      description: "Pequenas e médias indústrias iniciantes ou em expansão no comércio exterior, com acesso a especialistas seniores.",
      icon: "/ico-segment-industry.svg",
    },
  ];

  return (
    <section className="about-section w-full bg-[#F2F2F2] py-16 md:py-24 lg:pt-35 lg:pb-62.5 text-zinc-900 font-poppins">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Bloco de introdução principal da consultoria */}
        <div className="about-main-text mx-auto max-w-231.25 text-center mb-10">
          <p
            ref={textRef}
            className="font-instrument text-2xl md:text-3xl lg:text-[36px] lg:leading-13.75 text-[#606060] font-normal"
          >
            {"Somos uma consultoria especializada em Comércio Exterior. Unimos experiência técnica e suporte completo em logística, despacho aduaneiro e câmbio para simplificar operações internacionais.".split(" ").map((word, wIdx, arr) => (
              <span key={wIdx} className="inline-block overflow-hidden align-bottom whitespace-nowrap">
                {word.split("").map((char, cIdx) => (
                  <span key={cIdx} className="about-char inline-block">
                    {char}
                  </span>
                ))}
                {/* Adiciona espaço após cada palavra (exceto no final) */}
                {wIdx < arr.length - 1 && <span className="inline-block">&nbsp;</span>}
              </span>
            ))}
          </p>
        </div>

        {/* Separador horizontal cinza conforme o Figma */}
        <div className="mx-auto my-10 h-1.75 w-76.25 bg-[#D9D9D9] rounded-full" />

        {/* Bloco sobre inteligência e viabilização */}
        <div className="mx-auto max-w-278.25 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center my-16 lg:my-20">

          {/* Lado Esquerdo: Logo Box e Botão de Falar no WhatsApp */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-99.75 aspect-399/269">
              <Image
                src="/logo-about.png"
                alt="Logo Box GRU Consulting"
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Link para Falar no WhatsApp */}
            <Link
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex h-8.75 w-41.25 items-center justify-center rounded-[9px] bg-[#236253] text-[10px] font-semibold uppercase tracking-wider text-white shadow-[0px_2.34px_2.34px_0px_rgba(0,0,0,0.25)] transition-all duration-300 hover:bg-[#1a4b3f] hover:scale-105"
            >
              Falar no WhatsApp
            </Link>
          </div>

          {/* Lado Direito: Informações e Diferenciais de Consultoria */}
          <div className="lg:col-span-7 flex flex-col gap-4 text-center lg:text-left">
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#6B6057]">
              Inteligência · Consultoria & Viabilidade
            </span>

            <h2 className="flex flex-col gap-1">
              <span className="font-poppins text-3xl md:text-[46px] font-semibold text-[#002047] leading-tight">
                Não apenas enviamos.
              </span>
              <span className="font-poppins text-4xl md:text-[58px] font-light text-[#3F3731]/70 leading-tight">
                Viabilizamos o seu negócio.
              </span>
            </h2>

            <p className="mt-4 font-poppins text-lg md:text-[23px] font-light text-[#3F3731]/70 leading-[1.3]">
              Antes do primeiro container, vem a estratégia. Analisamos a viabilidade financeira e o compliance tributário para garantir que sua internacionalização seja sustentável e protegida.
            </p>
          </div>

        </div>

        {/* Sub-seção com os Segmentos Atendidos */}
        <div className="mt-20 lg:mt-28 flex flex-col items-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#6B6057] mb-8">
            Segmentos Atendidos
          </span>

          {/* Grid de Cards dos Segmentos Atendidos com divisores internos */}
          <div className="w-full max-w-210.5 flex flex-col md:flex-row md:items-stretch rounded-sm overflow-hidden divide-y md:divide-y-0 md:divide-x divide-[#D9D9D9]">
            {segmentos.map((seg, idx) => (
              <div
                key={idx}
                className="flex-1 bg-[#FCFAF6] px-6 py-10 md:py-8 lg:px-7 lg:py-9 flex flex-col items-center text-center gap-5 transition-colors duration-300 hover:bg-[#FAF6EE] group"
              >
                {/* Ícone correspondente do segmento */}
                <div className="relative w-15 h-15 transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={seg.icon}
                    alt={`Ícone do segmento ${seg.title}`}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Título do segmento usando a fonte serifada EB Garamond */}
                <h3 className="font-garamond text-2xl font-medium text-[#131B26] mt-2">
                  {seg.title}
                </h3>

                {/* Descrição resumida do segmento */}
                <p className="font-instrument text-sm text-[#131B26]/70 leading-relaxed max-w-53.75">
                  {seg.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
