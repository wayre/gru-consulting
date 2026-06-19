"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { DarkThemeToggle } from "flowbite-react";

export function Header() {
  // Estado para controlar a abertura do menu hambúrguer no mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Itens de navegação do menu
  const menuItems = [
    { label: "Inteligência", href: "#inteligencia" },
    { label: "Nicho", href: "#nicho" },
    { label: "Embalagem", href: "#embalagem" },
    { label: "Método", href: "#metodo" },
    { label: "Segurança", href: "#seguranca" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-2xl transition-colors duration-300">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo da GRU Consulting */}
        <div className="flex flex-1 justify-start">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-horizontal.svg"
              alt="GRU Consulting Logo"
              width={193}
              height={35}
              priority
              className="h-8 w-auto object-contain dark:brightness-100 brightness-95"
            />
          </Link>
        </div>

        {/* Menu de Navegação - Desktop */}
        <nav className="hidden lg:flex items-center justify-center space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Ações da Direita - Desktop */}
        <div className="hidden lg:flex flex-1 items-center justify-end space-x-4">
          {/* Botão de Alternar Modo Escuro */}
          <div className="rounded-lg text-white hover:bg-white/10 transition-colors">
            <DarkThemeToggle className="text-white hover:text-white bg-transparent border-none focus:ring-0" />
          </div>

          {/* Botão Falar com Consultor */}
          <Link
            href="#contato"
            className="inline-flex h-9 items-center justify-center rounded-[2px] border border-white/70 bg-transparent px-5 text-xs font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black"
          >
            Falar com Consultor
          </Link>
        </div>

        {/* Botão de Menu Mobile e Alternador de Tema Escuro */}
        <div className="flex lg:hidden items-center space-x-2">
          {/* Alternador de Tema sempre visível no Mobile */}
          <div className="rounded-lg text-white hover:bg-white/10 transition-colors">
            <DarkThemeToggle className="text-white hover:text-white bg-transparent border-none focus:ring-0" />
          </div>

          {/* Botão de Menu Hambúrguer */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-white/85 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Abrir menu principal</span>
            {isMenuOpen ? (
              // Ícone Fechar (X)
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Ícone Hambúrguer
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menu Dropdown - Mobile */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black/90 backdrop-blur-3xl border-b border-white/10 animate-fade-in" id="mobile-menu">
          <div className="space-y-1 px-4 pb-6 pt-3">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-md px-3 py-3 text-base font-medium text-white/80 hover:bg-white/10 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
            
            {/* Botão Falar com Consultor no Mobile */}
            <div className="pt-4 px-3">
              <Link
                href="#contato"
                onClick={() => setIsMenuOpen(false)}
                className="flex w-full h-11 items-center justify-center rounded-[2px] border border-white/70 bg-transparent px-5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black"
              >
                Falar com Consultor
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
