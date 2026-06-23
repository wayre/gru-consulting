"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Seção de Comércio Exterior (Foreign Trade) da GRU Consulting.
 * Implementa o design 'foreigntrade-section' do Figma, integrando a imagem dos contêineres
 * e os pilares de serviços aduaneiros e de importação/exportação.
 */
export default function ForeignTrade() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Registrar o plugin ScrollTrigger no lado do cliente
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // 1. Animação de revelação do cabeçalho de conteúdo (título, label, descrição)
            if (contentRef.current) {
                gsap.fromTo(
                    contentRef.current.children,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        stagger: 0.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: contentRef.current,
                            start: "top 85%",
                        },
                    }
                );
            }

            // 2. Animação sequencial (stagger) dos cards de diferenciais/serviços
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

        return () => ctx.revert(); // Limpar animações ao desmontar o componente
    }, []);

    // Lista dos pilares de comércio exterior para estruturar os cards
    const services = [
        {
            title: "Desembaraço & Compliance",
            desc: "Gestão completa de licenças, classificação fiscal de mercadorias (NCM) e compliance tributário para mitigação total de riscos operacionais.",
            icon: (
                <svg className="w-6 h-6 text-[#E5B584]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        },
        {
            title: "Despacho Aduaneiro",
            desc: "Presença estratégica e homologação ágil em portos e aeroportos, assegurando a liberação rápida de cargas com controle minucioso de prazos.",
            icon: (
                <svg className="w-6 h-6 text-[#E5B584]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
            )
        },
        {
            title: "Logística Internacional",
            desc: "Agenciamento e coordenação de frete internacional (marítimo, aéreo e rodoviário) com rotas otimizadas e consolidação inteligente de cargas.",
            icon: (
                <svg className="w-6 h-6 text-[#E5B584]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2a2.5 2.5 0 002.5-2.5V10a2 2 0 00-2-2h-1.5a3 3 0 01-3-3V3.935M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: "Câmbio & Finanças",
            desc: "Estruturação financeira de remessas e recebimentos, cartas de crédito e assessoria cambial alinhada com as normativas do Banco Central.",
            icon: (
                <svg className="w-6 h-6 text-[#E5B584]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        }
    ];

    return (
        <section
            ref={sectionRef}
            id="comex"
            className="relative w-full bg-[#0B0D12] overflow-hidden font-poppins text-white"
        >
            {/* Imagem de Fundo e Overlays Gradientes */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <Image
                    src="/bg-foreigntrade-section.webp"
                    alt="Operações de Comércio Exterior com contêineres"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center md:object-right opacity-35 md:opacity-45"
                />
                {/* Overlay escuro inferior para suavizar a transição com rodapés e seções pretas */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D12] via-[#0B0D12]/20 to-[#0B0D12]/30" />
                {/* Overlay escuro lateral para garantir legibilidade de textos no desktop */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D12] via-[#0B0D12]/30 to-transparent hidden md:block" />
            </div>

            {/* Conteúdo da Seção */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-24 lg:py-36 flex flex-col justify-start">

                {/* Cabeçalho de Texto */}
                <div ref={contentRef} className="max-w-2xl flex flex-col gap-4 sm:gap-5 text-left mb-14 lg:mb-20">
                    <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.15em] text-[#E5B584] uppercase">
                        Comércio Exterior & Aduaneiro
                    </span>

                    <h2 className="font-poppins text-3xl sm:text-4xl lg:text-[49px] font-light leading-tight text-white">
                        Operações globais <br className="hidden sm:block" />
                        <span className="font-semibold text-white/95">estruturadas sem gargalos.</span>
                    </h2>

                    <p className="font-poppins font-light text-sm sm:text-base lg:text-lg text-white/70 leading-relaxed max-w-xl">
                        Viabilizamos operações internacionais complexas para empresas que buscam excelência logística e conformidade aduaneira — sem burocracia.
                    </p>
                </div>

                {/* Grid de Cards dos Serviços */}
                <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-2">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="relative group overflow-hidden bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-[#E5B584]/20 rounded-[20px] p-6 lg:p-8 flex flex-col justify-between gap-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(229,181,132,0.12)]"
                        >
                            {/* Glow interno sutil em hover */}
                            <div className="absolute -inset-px bg-gradient-to-br from-[#E5B584]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[20px] pointer-events-none" />

                            <div className="flex flex-col gap-5 relative z-10">
                                {/* Ícone */}
                                <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                    {service.icon}
                                </div>

                                {/* Título */}
                                <h3 className="font-poppins text-base sm:text-lg font-semibold text-white tracking-wide">
                                    {service.title}
                                </h3>

                                {/* Descrição */}
                                <p className="font-poppins font-light text-xs sm:text-sm text-white/60 leading-relaxed">
                                    {service.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
