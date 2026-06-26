"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registra o ScrollTrigger com o GSAP
gsap.registerPlugin(ScrollTrigger);

/**
 * Rolagem suave global usando Lenis, sincronizada com o ScrollTrigger do GSAP.
 * Respeita a preferência de movimento reduzido do sistema operacional (prefers-reduced-motion).
 */
export const SmoothScroll = () => {
  useEffect(() => {
    // Verifica se o usuário prefere movimento reduzido no sistema
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    // Inicializa a instância do Lenis com as configurações de suavização
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // Sincroniza o ScrollTrigger com cada evento de rolagem do Lenis
    lenis.on("scroll", ScrollTrigger.update);

    // Integra a renderização por frame (raf) do Lenis com o ticker do GSAP
    const tickerCb = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCb);
    gsap.ticker.lagSmoothing(0);

    // Intercepta cliques em links de âncora para que a navegação interna respeite a rolagem suave do Lenis
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const link = target?.closest<HTMLAnchorElement>("a[href^='#']");
      if (!link) return;
      
      const id = link.getAttribute("href");
      if (!id || id === "#") return;
      
      const el = document.querySelector(id);
      if (!el) return;
      
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: -80, duration: 1.2 });
    };
    document.addEventListener("click", onClick);

    // Limpeza de ouvintes e instâncias ao desmontar o componente
    return () => {
      document.removeEventListener("click", onClick);
      gsap.ticker.remove(tickerCb);
      lenis.destroy();
    };
  }, []);

  return null;
};

export default SmoothScroll;
