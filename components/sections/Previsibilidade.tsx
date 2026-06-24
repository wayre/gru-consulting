"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Previsibilidade() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const columnsRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Registrar o plugin ScrollTrigger no lado do cliente
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Animação de revelação do título
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // 2. Animação sequencial (stagger) dos pilares
      if (columnsRef.current) {
        gsap.fromTo(
          columnsRef.current.children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: columnsRef.current,
              start: "top 90%",
            },
          }
        );
      }

      // 3. Animação das imagens da galeria
      if (galleryRef.current) {
        gsap.fromTo(
          galleryRef.current.children,
          { opacity: 0, scale: 0.95, y: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: galleryRef.current,
              start: "top 95%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert(); // Limpar animações ao desmontar o componente
  }, []);

  const galleryImages = [
    {
      src: "/gru-gallery/gru-gallery1.webp",
      alt: "Transporte Seguro e Logística Avançada",
      tag: "Logística",
      title: "Transporte Internacional"
    },
    {
      src: "/gru-gallery/gru-gallery2.webp",
      alt: "Despacho Aduaneiro e Homologação de Documentação",
      tag: "Aduaneiro",
      title: "Desembaraço de Carga"
    },
    {
      src: "/gru-gallery/gru-gallery3.webp",
      alt: "Embalagem Especializada para Cargas Delicadas",
      tag: "Segurança",
      title: "Embalagem Técnica"
    },
    {
      src: "/gru-gallery/gru-gallery4.webp",
      alt: "Manuseio de Mobiliário e Obras de Arte",
      tag: "Arte & Design",
      title: "Logística de Nicho"
    },
    {
      src: "/gru-gallery/gru-gallery5.webp",
      alt: "Carregamento e Consolidação de Containers",
      tag: "Operações",
      title: "Estufagem Segura"
    },
    {
      src: "/gru-gallery/gru-gallery6.webp",
      alt: "Rastreamento e Controle de Fluxo Logístico",
      tag: "Previsibilidade",
      title: "Gestão de Prazos"
    },
    {
      src: "/gru-gallery/gru-gallery7.webp",
      alt: "Armazenamento e Proteção Preventiva",
      tag: "Armazém",
      title: "Instalações Climatizadas"
    },
    {
      src: "/gru-gallery/gru-gallery8.webp",
      alt: "Despacho e Validação no Terminal Portuário",
      tag: "Portos",
      title: "Liberação Aduaneira"
    },
    {
      src: "/gru-gallery/gru-gallery9.webp",
      alt: "Entrega Técnica de Itens de Alto Padrão (White Glove)",
      tag: "Premium",
      title: "Serviço White Glove"
    },
    {
      src: "/gru-gallery/gru-gallery10.webp",
      alt: "Consultoria Tributária e Análise de Risco",
      tag: "Estratégia",
      title: "Compliance Fiscal"
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="previsibilidade"
      className="w-full bg-[#0B0D12] pt-20 sm:pt-28 pb-0 text-white font-poppins overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-16 sm:mb-24">
        {/* Cabeçalho com o Título e Ícone de Avião */}
        <div ref={titleRef} className="flex flex-col gap-6 text-left mb-16 md:mb-20">
          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-[42px] font-light leading-tight text-white flex flex-wrap items-center gap-x-4 gap-y-3">
            <span className="relative pb-3 whitespace-nowrap">
              O Caminho
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#E5B584]" />
            </span>
            <span className="flex items-center gap-3">
              <span>da Previsibilidade</span>
              <div className="relative w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center -translate-y-1">
                <Image
                  src="/Airplane-light.svg"
                  alt="Ícone de Avião"
                  fill
                  className="object-contain opacity-70"
                />
              </div>
            </span>
          </h2>
        </div>

        {/* Grid dos Quatro Pilares */}
        <div
          ref={columnsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16"
        >
          {/* Pilar I */}
          <div className="flex flex-col gap-3">
            <span className="font-poppins text-3xl font-light text-[#E5B584]">I.</span>
            <h3 className="text-xs font-semibold tracking-wider text-white uppercase">
              Diagnóstico
            </h3>
            <p className="text-sm font-light text-white/60 leading-relaxed">
              Identificação de gargalos, viabilidade e classificação fiscal.
            </p>
          </div>

          {/* Pilar II */}
          <div className="flex flex-col gap-3">
            <span className="font-poppins text-3xl font-light text-[#E5B584]">II.</span>
            <h3 className="text-xs font-semibold tracking-wider text-white uppercase">
              Planejamento
            </h3>
            <p className="text-sm font-light text-white/60 leading-relaxed">
              Estruturação tributária, cambial e logística personalizada.
            </p>
          </div>

          {/* Pilar III */}
          <div className="flex flex-col gap-3">
            <span className="font-poppins text-3xl font-light text-[#E5B584]">III.</span>
            <h3 className="text-xs font-semibold tracking-wider text-white uppercase">
              Execução
            </h3>
            <p className="text-sm font-light text-white/60 leading-relaxed">
              Operacionalização técnica com rigor documental e aduaneiro.
            </p>
          </div>

          {/* Pilar IV */}
          <div className="flex flex-col gap-3">
            <span className="font-poppins text-3xl font-light text-[#E5B584]">IV.</span>
            <h3 className="text-xs font-semibold tracking-wider text-white uppercase">
              Acompanhamento
            </h3>
            <p className="text-sm font-light text-white/60 leading-relaxed">
              Monitoramento contínuo e reporte até a entrega final.
            </p>
          </div>
        </div>
      </div>


    </section>
  );
}
