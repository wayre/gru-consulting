"use client";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function FAQ_LP() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
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

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Posso importar mesmo sem experiência?",
      answer: "Sim. Nossa equipe acompanha todas as etapas da operação, desde a viabilidade técnica até a entrega final no seu armazém, orientando sua empresa em todo o processo."
    },
    {
      question: "Vocês realizam apenas despacho aduaneiro?",
      answer: "Sim. Também prestamos serviços específicos conforme a necessidade do cliente. Embora ofereçamos soluções completas ponta a ponta, se sua empresa precisa apenas de desembaraço aduaneiro ou suporte cambial pontual, estamos prontos para atuar."
    },
    {
      question: "A GRU atende empresas de qualquer porte?",
      answer: "Sim. Desenvolvemos soluções personalizadas e dimensionadas tanto para pequenas e médias empresas que estão iniciando no mercado global quanto para corporações de grande porte com altos volumes operacionais."
    },
    {
      question: "Também auxiliam no fechamento de câmbio?",
      answer: "Sim. Oferecemos assessoria cambial totalmente integrada às suas operações internacionais, facilitando a estruturação financeira dos pagamentos, análise de contratos de câmbio e conformidade regulatória."
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="relative w-full bg-[#0B0D12] text-white font-poppins py-20 sm:py-24 lg:py-32 border-b border-white/5 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#236253]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 flex flex-col justify-start">
        
        {/* Cabeçalho */}
        <div className="flex flex-col gap-4 text-center mb-16">
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.15em] text-[#E5B584] uppercase">
            Perguntas Frequentes
          </span>
          <h2 className="font-poppins text-3xl sm:text-4xl font-light text-white leading-tight">
            Dúvidas <span className="font-semibold text-white/95">Frequentes.</span>
          </h2>
        </div>

        {/* Lista de FAQ */}
        <div 
          ref={contentRef}
          className="flex flex-col gap-4 w-full"
        >
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div
                key={idx}
                className="border border-white/5 bg-white/1 hover:bg-white/2 rounded-2xl overflow-hidden transition-all duration-300"
              >
                {/* Pergunta / Botão Acordeão */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none"
                >
                  <span className="font-poppins font-medium text-sm sm:text-base text-white/90 group-hover:text-white transition-colors">
                    {faq.question}
                  </span>
                  
                  {/* Ícone Indicador de Status (+) ou (-) */}
                  <span className="flex-shrink-0 ml-4 w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white transition-transform duration-300">
                    <svg
                      className={`w-3 h-3 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M18 12H6" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6v12M6 12h12" />
                      )}
                    </svg>
                  </span>
                </button>

                {/* Resposta */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[250px] opacity-100 border-t border-white/5" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="p-6 font-poppins font-light text-xs sm:text-sm text-white/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
