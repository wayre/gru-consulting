"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0B0D12] text-white font-poppins border-t border-white/5 py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-20">
        
        {/* Seção Superior do Footer */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12 md:gap-8">
          
          {/* Coluna da Esquerda: Marca e Descrição */}
          <div className="flex flex-col gap-4 max-w-md">
            <h2 className="font-garamond text-2xl md:text-[28px] font-normal tracking-wide text-white/90">
              GRU Consulting
            </h2>
            <p className="text-[10px] sm:text-[11px] font-medium tracking-[0.18em] leading-relaxed text-white/50 uppercase">
              Especialistas em comércio exterior e <br className="hidden sm:inline" />
              operações de câmbio. Desde 2018 <br className="hidden sm:inline" />
              provendo segurança operacional.
            </p>
          </div>

          {/* Colunas da Direita: Escritório e Contato */}
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-16 lg:gap-24 md:pt-2">
            
            {/* Coluna Escritório */}
            <div className="flex flex-col gap-3">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.18em] text-white/40 uppercase">
                Escritório
              </span>
              <span className="text-sm sm:text-[15px] font-light text-white/70">
                São Paulo, Brasil
              </span>
            </div>

            {/* Coluna Contato */}
            <div className="flex flex-col gap-3">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.18em] text-white/40 uppercase">
                Contato
              </span>
              <Link 
                href="mailto:contato@gruconsulting.com.br" 
                className="text-sm sm:text-[15px] font-light text-white/70 hover:text-[#E5B584] transition-colors duration-300"
              >
                contato@gruconsulting.com.br
              </Link>
            </div>

          </div>

        </div>

        {/* Linha Divisória */}
        <div className="w-full h-px bg-white/5 my-12 md:my-16" />

        {/* Seção Inferior: Direitos Autorais */}
        <div className="flex justify-center items-center">
          <span className="text-[9px] sm:text-[10px] font-medium tracking-[0.2em] text-white/30 uppercase text-center">
            © 2026 GRU CONSULTING — DIREITOS RESERVADOS
          </span>
        </div>

      </div>
    </footer>
  );
}
