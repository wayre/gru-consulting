"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ServicosLP() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animação do cabeçalho (fade-in-up)
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // Animação dos cards de serviços (fade-in-up sequencial)
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
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

  const servicosData = [
    {
      title: "Consultoria em Comércio Exterior",
      description: "Planejamento estratégico para operações de importação e exportação.",
      icon: (
        <svg className="w-6 h-6 text-[#E5B584]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      layoutClass: "lg:col-span-4"
    },
    {
      title: "Despacho Aduaneiro",
      description: "Gestão completa da documentação e desembaraço aduaneiro.",
      icon: (
        <svg className="w-6 h-6 text-[#E5B584]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      layoutClass: "lg:col-span-4"
    },
    {
      title: "Logística Internacional",
      description: "Coordenação de embarques e acompanhamento da cadeia logística.",
      icon: (
        <svg className="w-6 h-6 text-[#E5B584]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      layoutClass: "lg:col-span-4"
    },
    {
      title: "Assessoria Cambial",
      description: "Estruturação financeira de pagamentos internacionais e operações de câmbio.",
      icon: (
        <svg className="w-6 h-6 text-[#E5B584]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      layoutClass: "lg:col-span-6 md:col-span-1"
    },
    {
      title: "Trading Company",
      description: "Intermediação comercial para ampliar oportunidades internacionais.",
      icon: (
        <svg className="w-6 h-6 text-[#E5B584]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
      layoutClass: "lg:col-span-6 md:col-span-2"
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="servicos"
      className="relative w-full bg-[#0B0D12] overflow-hidden font-poppins text-white py-20 sm:py-24 lg:py-32 border-b border-white/5"
    >
      {/* Detalhes de luz de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#236253]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col justify-start">
        
        {/* Cabeçalho de Texto da Seção */}
        <div ref={headerRef} className="max-w-3xl flex flex-col gap-4 sm:gap-5 text-left mb-14 lg:mb-20">
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.15em] text-[#E5B584] uppercase">
            Nossos Serviços
          </span>

          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-[45px] font-light leading-tight text-white">
            Soluções para cada etapa da <br className="hidden sm:block" />
            <span className="font-semibold text-white/95">operação internacional.</span>
          </h2>

          <p className="font-poppins font-light text-sm sm:text-base lg:text-lg text-white/70 leading-relaxed max-w-2xl">
            Da estratégia à execução, oferecemos suporte completo para importar, exportar e conduzir operações internacionais com segurança.
          </p>
        </div>

        {/* Grid de Cards dos Serviços com Efeitos Glassmorphism */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 w-full mt-2">
          {servicosData.map((service, idx) => (
            <div
              key={idx}
              className={`relative group overflow-hidden bg-white/1 hover:bg-white/3 border border-white/5 hover:border-[#236253]/30 rounded-[20px] p-6 lg:p-8 flex flex-col justify-between gap-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(35,98,83,0.15)] ${service.layoutClass}`}
            >
              {/* Brilho gradual em degradê ao passar o mouse */}
              <div className="absolute -inset-px bg-linear-to-br from-[#236253]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[20px] pointer-events-none" />

              <div className="flex flex-col gap-5 relative z-10">
                {/* Ícone customizado do Serviço */}
                <div className="w-12 h-12 rounded-xl bg-white/2 border border-white/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>

                {/* Título do Serviço */}
                <h3 className="font-poppins text-base sm:text-lg font-semibold text-white tracking-wide">
                  {service.title}
                </h3>

                {/* Descrição Detalhada */}
                <p className="font-poppins font-light text-xs sm:text-sm text-white/60 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
