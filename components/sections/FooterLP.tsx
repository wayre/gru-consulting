"use client";

import React from "react";
import Link from "next/link";

export default function FooterLP() {
  return (
    <footer className="w-full bg-[#0B0D12] text-white font-poppins border-t border-white/5 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Grid do Rodapé */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-16">
          
          {/* Coluna 1: Marca e Descrição */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h2 className="font-poppins text-xl font-bold tracking-wide text-white/90">
              GRU Consulting
            </h2>
            <p className="font-poppins font-light text-xs sm:text-sm leading-relaxed text-white/50 max-w-sm">
              Especialistas em comércio exterior e operações de câmbio. Desde 2018 provendo segurança operacional, agilidade tributária e previsibilidade para internacionalizar sua empresa.
            </p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.18em] text-white/30 uppercase">
              Links Rápidos
            </span>
            <ul className="flex flex-col gap-3 font-poppins font-light text-xs sm:text-sm">
              <li>
                <a href="#inicio" className="text-white/60 hover:text-[#E5B584] transition-colors duration-300">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-white/60 hover:text-[#E5B584] transition-colors duration-300">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#como-trabalhamos" className="text-white/60 hover:text-[#E5B584] transition-colors duration-300">
                  Como Trabalhamos
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="text-white/60 hover:text-[#E5B584] transition-colors duration-300">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white/60 hover:text-[#E5B584] transition-colors duration-300">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Serviços */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.18em] text-white/30 uppercase">
              Serviços
            </span>
            <ul className="flex flex-col gap-3 font-poppins font-light text-xs sm:text-sm">
              <li>
                <a href="#servicos" className="text-white/60 hover:text-[#E5B584] transition-colors duration-300">
                  Consultoria em Comércio Exterior
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-white/60 hover:text-[#E5B584] transition-colors duration-300">
                  Despacho Aduaneiro
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-white/60 hover:text-[#E5B584] transition-colors duration-300">
                  Logística Internacional
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-white/60 hover:text-[#E5B584] transition-colors duration-300">
                  Assessoria Cambial
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-white/60 hover:text-[#E5B584] transition-colors duration-300">
                  Trading Company
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Contato & Redes */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.18em] text-white/30 uppercase">
              Contato
            </span>
            <ul className="flex flex-col gap-3 font-poppins font-light text-xs sm:text-sm">
              <li>
                <a href="mailto:contato@gruconsulting.com.br" className="text-white/60 hover:text-[#E5B584] transition-colors duration-300 break-all">
                  contato@gruconsulting.com.br
                </a>
              </li>
              <li>
                <span className="text-white/60">São Paulo, SP - Brasil</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-2">
              {/* Link para Rede Social (LinkedIn por exemplo) */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-[#E5B584] transition-colors duration-300"
              >
                <span className="text-xs font-medium">LinkedIn</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-[#E5B584] transition-colors duration-300"
              >
                <span className="text-xs font-medium">Instagram</span>
              </a>
            </div>
          </div>

        </div>

        {/* Linha Divisória */}
        <div className="w-full h-px bg-white/5 mb-10" />

        {/* Seção Inferior: Direitos e Privacidade */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-[9px] sm:text-[10px] font-medium tracking-[0.2em] text-white/30 uppercase text-center sm:text-left">
            © 2026 GRU CONSULTING — TODOS OS DIREITOS RESERVADOS
          </span>
          <Link
            href="/politica-de-privacidade"
            className="text-[9px] sm:text-[10px] font-medium tracking-[0.2em] text-white/30 hover:text-white/65 uppercase transition-colors"
          >
            Política de Privacidade
          </Link>
        </div>

      </div>
    </footer>
  );
}
