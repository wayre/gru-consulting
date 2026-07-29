"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function DiferenciaisLP() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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
      if (cardsRef.current) {
        // Animação dos cards mobile
        gsap.fromTo(
          cardsRef.current.querySelectorAll(".card-mobile"),
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 90%",
            },
          }
        );

        // Animação dos cards desktop
        gsap.fromTo(
          cardsRef.current.querySelectorAll(".card-desktop"),
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 90%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const diferenciais = [
    {
      title: "Atendimento Consultivo",
      description: "Cada operação é analisada conforme os objetivos do cliente.",
      icon: (
        <svg className="w-5 h-5 text-[#E5B584]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      title: "Segurança",
      description: "Atuação alinhada às normas nacionais e internacionais.",
      icon: (
        <svg className="w-5 h-5 text-[#E5B584]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Eficiência",
      description: "Processos organizados para reduzir tempo e custos operacionais.",
      icon: (
        <svg className="w-5 h-5 text-[#E5B584]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Solução Integrada",
      description: "Consultoria, logística, despacho e câmbio em um único parceiro.",
      icon: (
        <svg className="w-5 h-5 text-[#E5B584]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="diferenciais"
      className="relative w-full bg-[#0B0D12] text-white font-poppins border-b overflow-hidden h-[1214px] lg:h-[975px]"
    >
      {/* Imagem de background cobrindo a seção */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <Image
          src="/bg-diferenciais.webp"
          alt="Background Diferenciais"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* degrade vertical de preto para transparente com bottom = 0  */}
      <div className="absolute bottom-0 left-0 w-full h-[52%] bg-gradient-to-t from-[#011125] to-transparent z-10" />

      {/* Glow de fundo sutil */}
      <div className="absolute left-0 w-[350px] h-[350px] bg-[#E5B584]/5 rounded-full blur-[100px] pointer-events-none top-[427px] lg:top-[263px] z-0" />

      {/* Conteúdo principal */}
      <div className="relative z-10 w-full max-w-[1205px] mx-auto h-full lg:h-[975px]">

        {/* degrade vertical de preto para transparente com bottom = 0  */}
        <div className="absolute bottom-0 left-0 w-full h-[52%] bg-gradient-to-t from-[#011125] to-transparent z-10" />

        {/* Imagem de Mauricio à esquerda no desktop e em segundo plano no mobile */}
        <div className="absolute w-[100%] sm:w-[75%] lg:w-[45%] h-[1204px] lg:h-full pointer-events-none top-[150px] sm:top-[200px] left-[2%] sm:left-[13%] lg:left-0 lg:top-[40px] z-0">
          <Image
            src="/mauricio-full.webp"
            alt="Maurício GRU Consulting"
            fill
            priority
            className="w-full h-full object-contain object-top opacity-75 lg:opacity-100"
          />
        </div>



        {/* Lado Direito: Cabeçalho de texto e Grid de diferenciais */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 lg:translate-x-0 w-full max-w-[390px] lg:max-w-none lg:w-[618px] md:left-[32%] lg:left-[clamp(27.313rem,_-25.912rem_+_83.163vw,_37.5rem)] lg:h-[875px] flex flex-col justify-between pt-[70px] md:top-[120px] px-5 pb-[70px] lg:py-[113px] lg:px-0 z-10">

          {/* Cabeçalho da Seção */}
          <div
            ref={headerRef}
            className="w-full flex flex-col gap-3 justify-start items-start pb-[240px] lg:pb-0 h-[458px] lg:h-[148px]"
          >
            <span className="text-[11px] font-semibold tracking-[0.15em] text-[#E5B584] uppercase">
              Nossos Diferenciais
            </span>

            <h2 className="font-poppins text-[32px] lg:text-[45px] font-light leading-[42px] lg:leading-[56px] text-white">
              Por que escolher a <br className="hidden lg:block" />
              <span className="font-semibold text-white/95">GRU Consulting?</span>
            </h2>
          </div>

          {/* Grid de Diferenciais */}
          <div
            ref={cardsRef}
            className="w-full md:w-[618px] lg:w-[618px] h-auto lg:h-[489px] bg-black/15 backdrop-blur-[4px] rounded-[20px] lg:bg-transparent lg:backdrop-blur-none lg:rounded-none flex flex-col gap-[10px] py-[32px] px-[10px] md:grid md:grid-cols-2 lg:gap-6 lg:p-0 lg:pr-[38px]"
          >
            {diferenciais.map((item, idx) => (
              <React.Fragment key={idx}>
                {/* Card para dispositivos móveis (Mobile) */}
                <div className="card-mobile flex lg:hidden relative w-full h-[143px] bg-white/[0.01] border border-white/5 rounded-2xl p-5 flex-col justify-between items-start">
                  <div className="flex flex-row items-center gap-6 w-full">
                    {/* Círculo do Ícone */}
                    <div className="w-10 h-10 rounded-xl bg-white/2 border border-white/10 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    {/* Título do Card */}
                    <h3 className="font-poppins font-semibold text-sm text-white tracking-wide">
                      {item.title}
                    </h3>
                  </div>
                  {/* Descrição do Card */}
                  <p className="font-poppins font-light text-xs text-white/90 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Card para desktop (Web) */}
                <div className="card-desktop hidden lg:flex relative w-[278px] h-[232px] bg-white/[0.01] border border-white/5 hover:border-[#E5B584]/20 rounded-2xl p-[33px_38px_34px_33px] flex-col justify-between items-start transition-all duration-300 hover:-translate-y-1 hover:bg-white/2 group">
                  {/* Círculo do Ícone */}
                  <div className="w-10 h-10 rounded-xl bg-white/2 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    {item.icon}
                  </div>
                  {/* Título do Card */}
                  <h3 className="font-poppins font-semibold text-base text-white tracking-wide">
                    {item.title}
                  </h3>
                  {/* Descrição do Card */}
                  <p className="font-poppins font-light text-sm text-white/60 leading-[23px]">
                    {item.description}
                  </p>
                </div>
              </React.Fragment>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
