"use client";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

export default function ContatoLP() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const sectionRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animação do bloco de informações
      if (infoRef.current) {
        gsap.fromTo(
          infoRef.current.children,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: infoRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // Animação do formulário
      if (formRef.current) {
        gsap.fromTo(
          formRef.current,
          { opacity: 0, x: 30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: formRef.current,
              start: "top 85%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome || !email || !mensagem) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    // Simula uma requisição de envio de e-mail/webhook
    setTimeout(() => {
      setStatus("success");
      setNome("");
      setEmail("");
      setTelefone("");
      setMensagem("");
    }, 1500);
  };

  return (
    <section
      ref={sectionRef}
      id="contato"
      className="w-full bg-[#FAFAFA] text-zinc-900 font-poppins py-20 sm:py-24 lg:py-32 border-b border-zinc-100 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Lado Esquerdo: Informações de Contato */}
          <div
            ref={infoRef}
            className="lg:col-span-5 flex flex-col gap-6 text-left"
          >
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] text-[#B89774] uppercase">
              Contato
            </span>

            <h2 className="font-poppins text-3xl sm:text-4xl lg:text-[45px] font-light leading-tight text-[#002047] mb-2">
              Fale com um <br className="hidden sm:block" />
              <span className="font-semibold">especialista.</span>
            </h2>

            <p className="font-poppins font-light text-sm sm:text-base text-zinc-600 leading-relaxed max-w-sm mb-4">
              Estamos prontos para analisar sua operação aduaneira ou cambial e propor melhorias estratégicas de imediato.
            </p>

            {/* Canais de Contato */}
            <div className="flex flex-col gap-5 mt-2">
              
              {/* WhatsApp */}
              <Link
                href="/whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-[#236253]/10 border border-[#236253]/20 flex items-center justify-center text-[#236253] group-hover:bg-[#236253] group-hover:text-white transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-semibold tracking-wider text-zinc-400 uppercase">WhatsApp</span>
                  <span className="text-sm font-medium text-[#002047] group-hover:text-[#236253] transition-colors">Iniciar conversa rápida</span>
                </div>
              </Link>

              {/* E-mail */}
              <a
                href="mailto:contato@gruconsulting.com.br"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-[#236253]/10 border border-[#236253]/20 flex items-center justify-center text-[#236253] group-hover:bg-[#236253] group-hover:text-white transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-semibold tracking-wider text-zinc-400 uppercase">E-mail</span>
                  <span className="text-sm font-medium text-[#002047] group-hover:text-[#236253] transition-colors">contato@gruconsulting.com.br</span>
                </div>
              </a>

              {/* Localização */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#236253]/10 border border-[#236253]/20 flex items-center justify-center text-[#236253]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-semibold tracking-wider text-zinc-400 uppercase">Escritório</span>
                  <span className="text-sm font-medium text-[#002047]">São Paulo, SP - Brasil</span>
                </div>
              </div>

            </div>
          </div>

          {/* Lado Direito: Formulário Interativo */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="lg:col-span-7 w-full bg-white border border-zinc-200/60 rounded-3xl p-8 md:p-10 shadow-xs flex flex-col gap-6"
          >
            {/* Nome */}
            <div className="flex flex-col gap-2">
              <label htmlFor="nome" className="text-xs font-semibold tracking-wider text-zinc-500 uppercase">
                Nome completo *
              </label>
              <input
                type="text"
                id="nome"
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Ex: João da Silva"
                className="w-full h-12 px-4 rounded-xl border border-zinc-200 focus:border-[#236253] focus:ring-1 focus:ring-[#236253] outline-none transition-all font-poppins text-sm"
              />
            </div>

            {/* Grid E-mail e Telefone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* E-mail */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-semibold tracking-wider text-zinc-500 uppercase">
                  E-mail institucional *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ex: joao@empresa.com.br"
                  className="w-full h-12 px-4 rounded-xl border border-zinc-200 focus:border-[#236253] focus:ring-1 focus:ring-[#236253] outline-none transition-all font-poppins text-sm"
                />
              </div>

              {/* Telefone */}
              <div className="flex flex-col gap-2">
                <label htmlFor="telefone" className="text-xs font-semibold tracking-wider text-zinc-500 uppercase">
                  Telefone / WhatsApp
                </label>
                <input
                  type="tel"
                  id="telefone"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  placeholder="Ex: (11) 99999-9999"
                  className="w-full h-12 px-4 rounded-xl border border-zinc-200 focus:border-[#236253] focus:ring-1 focus:ring-[#236253] outline-none transition-all font-poppins text-sm"
                />
              </div>
            </div>

            {/* Mensagem */}
            <div className="flex flex-col gap-2">
              <label htmlFor="mensagem" className="text-xs font-semibold tracking-wider text-zinc-500 uppercase">
                Como podemos ajudar? *
              </label>
              <textarea
                id="mensagem"
                required
                rows={4}
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                placeholder="Descreva brevemente suas necessidades em comércio exterior..."
                className="w-full p-4 rounded-xl border border-zinc-200 focus:border-[#236253] focus:ring-1 focus:ring-[#236253] outline-none transition-all font-poppins text-sm resize-none"
              />
            </div>

            {/* Feedback de Status */}
            {status === "success" && (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-medium">
                Mensagem enviada com sucesso! Nossa equipe entrará em contato em breve.
              </div>
            )}
            {status === "error" && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm font-medium">
                Por favor, preencha todos os campos obrigatórios.
              </div>
            )}

            {/* Botão de Envio */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full h-12 rounded-xl bg-[#236253] hover:bg-[#1a4b3f] disabled:bg-zinc-300 text-white font-semibold text-sm transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center cursor-pointer"
            >
              {status === "loading" ? "Enviando..." : "Enviar Mensagem"}
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}
