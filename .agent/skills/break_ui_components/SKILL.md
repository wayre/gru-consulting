Aqui está o documento reformulado. O conteúdo foi enxugado para focar em ações diretas, com explicações limpas, código objetivo e sem redundâncias.

---

## name: break_ui_components
description: Diretrizes diretas para componentização modular em React (Mobile-First, TypeScript e Tailwind CSS).

# Diretrizes de Componentização React (Mobile-First & TypeScript)

Este guia orienta a refatoração de interfaces monolíticas em componentes React modulares, tipados e responsivos.

## 1. Decomposição da Interface

Antes de codificar, divida a tela visualmente em três níveis lógicos:

1. **Layouts Globais**: Estruturas fixas compartilhadas (ex: `Header`, `Footer`).
2. **Seções de Conteúdo**: Blocos lógicos da página (ex: `Hero`, `ContactSection`).
3. **UI Básica (Átomos)**: Elementos genéricos e altamente reutilizáveis (ex: `Button`, `Input`).

---

## 2. Estrutura de Diretórios

Organize o projeto por escopo dentro de `components/`:

```text
components/
  layout/      # Header, Footer, Sidebar
  sections/    # Hero, Features, ContactForm
  ui/          # Button, Input, Card, Badge

```

---

## 3. Tipagem com TypeScript

Evite o uso de `React.FC`. Prefira tipar as propriedades diretamente na assinatura do componente.

### Exemplo: Componente de UI (`ui/Button.tsx`)

```tsx
import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500",
    secondary: "bg-zinc-800 hover:bg-zinc-700 text-white focus:ring-zinc-500",
    outline: "border border-zinc-300 hover:bg-zinc-50 text-zinc-700 dark:border-zinc-700 dark:hover:bg-zinc-800 dark:text-zinc-300"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };

  // Comentários sempre em português
  const finalClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={finalClassName} {...props}>
      {children}
    </button>
  );
}

```

---

## 4. Responsividade Mobile-First (Tailwind CSS)

* **Padrão**: Aplique estilos sem prefixo visando a menor tela (Mobile).
* **Progressão**: Adicione breakpoints (`md:`, `lg:`) apenas para telas maiores.

### Exemplo: Componente de Seção (`sections/Hero.tsx`)

```tsx
import React from "react";
import { Button } from "../ui/Button";

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-between gap-8 px-4 py-12 md:flex-row md:px-8 md:py-20 lg:px-16">
      {/* Bloco de Texto */}
      <div className="w-full text-center md:w-1/2 md:text-left">
        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-4xl md:text-5xl">
          Soluções Tecnológicas Inteligentes
        </h1>
        <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400 sm:text-lg">
          Ajudamos sua empresa a crescer de forma ágil, segura e escalável.
        </p>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
          <Button variant="primary" size="lg" className="w-full sm:w-auto">Começar Agora</Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto">Saiba Mais</Button>
        </div>
      </div>
      
      {/* Bloco de Imagem */}
      <div className="w-full md:w-1/2">
        <div className="aspect-video w-full rounded-2xl bg-zinc-200 dark:bg-zinc-800 transition-all hover:scale-105" />
      </div>
    </section>
  );
}

```

---

## 5. Fluxo de Refatoração (Monólito ➔ Módulos)

1. **Extrair Átomos (`ui/`)**: Isole elementos comuns como botões, inputs e cards.
2. **Mapear Estados**: Identifique as funções e estados que devem permanecer no componente pai.
3. **Isolar Seções (`sections/`)**: Mova os blocos maiores de conteúdo para arquivos próprios.
4. **Tipar Elementos**: Garanta interfaces TypeScript explícitas para todas as novas `props`.
5. **Montar a Página**: Substitua o código antigo no arquivo principal pelas chamadas dos novos componentes.
6. **Validar Breakpoints**: Teste o comportamento responsivo partindo do mobile até o desktop.