"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Seção de Logística de Eventos e Arte da GRU Consulting.
 * Implementa o design 'logistic-session' do Figma, integrando o vídeo da caixa
 * e o background personalizado para o título.
 */
export default function LogisticaEventosArte() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleBgRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Registrar o plugin ScrollTrigger no lado do cliente
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Animação de revelação do título e background superior
      gsap.fromTo(
        titleBgRef.current,
        { opacity: 0, y: -30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleBgRef.current,
            start: "top 85%",
          },
        }
      );

      // 2. Animação do cartão flutuante de Logística de Nicho
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 90%",
          },
        }
      );

      // 3. Animação do vídeo da caixa (revelação com slide-in da esquerda)
      gsap.fromTo(
        videoContainerRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: videoContainerRef.current,
            start: "top 80%",
          },
        }
      );

      // 4. Animação dos textos da direita (fade-in com slide-up sequencial)
      if (textContentRef.current) {
        const textElements = textContentRef.current.children;
        gsap.fromTo(
          textElements,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: textContentRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert(); // Limpar animações ao desmontar o componente
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#ffffff] overflow-hidden font-poppins text-zinc-900"
    >
      {/* Banner Superior com a imagem de background */}
      <div
        ref={titleBgRef}
        className="relative w-full h-70 sm:h-75 lg:h-120 bg-cover bg-center flex items-center"
        style={{
          backgroundImage: "url('/background-licho-artes.png')",
        }}
      >
        {/* Overlay escuro elegante para garantir contraste com o texto */}
        {/* <div className="absolute inset-0 bg-black/40" /> */}

        {/* Cartão de Logística de Nicho (Caixa Branca Flutuante) - Versão Desktop */}
        <div
          ref={cardRef}
          className="hidden lg:flex absolute -bottom-14 left-6 sm:left-12 lg:left-20 p-8 bg-[#FFFDFB] rounded-[25px] shadow-[3px_5px_10px_0px_rgba(0,0,0,0.05)] z-20 flex-col justify-center"
        >
          {/* Label deslocado para cima na borda */}
          <div className="absolute -top-3.5 left-13.25 bg-[#423E3E] border border-black/5 rounded-md px-6 py-1 flex items-center justify-center">
            <span className="text-[11px] font-medium text-[#D9D9D9] tracking-wider uppercase">
              Logística de Nicho
            </span>
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto lg:px-8 flex flex-col justify-start">
            <h2 className="font-poppins text-[40px] font-bold leading-tight text-[#002047] max-w-2xl">
              A Logística por trás <br />
              <span className="font-light text-[40px] text-[#3F3731]">do Design Brasileiro.</span>
            </h2>
          </div>

        </div>
      </div>

      {/* Cartão de Logística de Nicho - Versão Mobile */}
      <div className="flex lg:hidden px-6 -mt-10 relative z-20 scale-90">
        <div className="bg-[#FFFDFB] rounded-[20px] p-8 shadow-[3px_5px_10px_0px_rgba(0,0,0,0.05)] relative">
          <div className="absolute -top-3 left-7.5 bg-[#423E3E] border border-black/5 rounded-md px-4 py-1">
            <span className="text-[10px] font-medium text-[#D9D9D9] tracking-wider uppercase">
              Logística de Nicho
            </span>
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col justify-start">
            <h2 className="font-poppins text-[22px] sm:text-4xl lg:text-[50px] font-bold leading-tight text-[#002047] max-w-2xl">
              A Logística por trás <br />
              <span className="font-light text-[36px] text-[#3F3731] leading-tight">do Design Brasileiro.</span>
            </h2>
          </div>
        </div>
      </div>

      <div className="w-full mx-auto px-10 sm:px-15 pt-8 md:pt-20 text-center max-w-7xl">
        <p className="text-[#3F3731]/80 font-poppins font-light text-[24px] sm:text-[28px] leading-relaxed mt-10">
          Somos especialistas em cargas sensíveis. De mobiliário modernista a obras de arte únicas, cuidamos da coleta,  embalagem sob medida e entrega  porta-a-porta (White Glove).
        </p>
      </div>

      {/* Bloco de Conteúdo Inferior (Vídeo e Informações de Proteção Técnica) */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 lg:pt-30 pb-20 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Lado Esquerdo: Vídeo da Caixa */}
          <div
            ref={videoContainerRef}
            className="col-span-1 lg:col-span-6 w-full lg:max-w-[626px] order-2 lg:order-1 mt-6 lg:mt-0"
          >
            <div className="relative w-full aspect-[626/405] rounded-[25px] overflow-hidden shadow-[3px_5px_10px_0px_rgba(0,0,0,0.05)]">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/caixa.mp4" type="video/mp4" />
                Seu navegador não suporta a tag de vídeo.
              </video>
            </div>
          </div>

          {/* Lado Direito: Textos e White Gloves */}
          <div
            ref={textContentRef}
            className="col-span-1 lg:col-span-6 lg:col-start-7 lg:max-w-[523px] flex flex-col justify-start gap-6 order-1 lg:order-2"
          >
            <h3 className="font-poppins text-3xl sm:text-4xl lg:text-[49px] font-light text-[#002047] leading-tight">
              Proteção técnica <br />
              à prova de trajetos.
            </h3>

            <p className="font-poppins font-light text-base sm:text-lg text-[#3F3731]/75 leading-relaxed">
              Expertise técnica em logística internacional aplicada a mobiliário assinado, obras de arte e itens delicados. Logística para Feiras, Exposições e Eventos Internacionais — cada caixa é projetada para a peça que protege.
            </p>

            <p className="font-poppins font-light text-base sm:text-lg text-[#3F3731]/75 leading-relaxed">
              Pinho seco, berço interno em espuma técnica revestida de tecido técnico, camadas de papel kraft que respiram com a mercadoria. Protocolos de conservação preventiva certificados.
            </p>

            {/* Box Serviço White Gloves */}
            <div className="w-full bg-[#FCFAF6]/60 border-l-[3px] border-[#002047]/40 rounded-r-[15px] p-6 sm:p-8 flex flex-col gap-3 relative overflow-hidden mt-2">
              <span className="text-[10px] font-semibold tracking-wider text-[#002047]/75 uppercase">
                Serviço White Gloves
              </span>
              <p className="font-poppins font-light text-sm sm:text-[15px] text-[#3F3731]/90 leading-relaxed">
                Um serviço de entrega técnica que vai além do transporte, garantindo o manuseio cuidadoso e a integridade total da peça no destino final.
              </p>

              {/* Rodapé do box com ícone e texto */}
              <div className="flex items-center gap-3 mt-2 text-[#3F3731]/60 text-xs sm:text-[12px] font-light">
                <div className="relative w-5 h-5 flex items-center justify-center">
                  <Image
                    src="/Airplane-light.svg"
                    alt="Ícone de Avião"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </div>
                <span>Entrega técnica com máximo cuidado</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
