"use client";

import { DarkThemeToggle } from "flowbite-react";
import React, { useState } from "react";

export default function Home() {
  // Estado para controlar a navegação móvel
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Estados para simular o envio do formulário de contato/agendamento
  const [nome, setNome] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Manipulador de envio do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome || !email) return;

    setIsSubmitting(true);
    // Simulação de chamada de API de 1.5 segundos
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setNome("");
      setEmpresa("");
      setEmail("");
      setMensagem("");

      // Reseta a mensagem de sucesso após 5 segundos
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div>
      <>
        <div>
          Hello
        </div>
      </>
    </div>
  );
}
