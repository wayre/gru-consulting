import type { Metadata } from "next";
import { Poppins, Instrument_Sans, EB_Garamond } from "next/font/google";
import { ThemeInit } from "../.flowbite-react/init";
import SmoothScroll from "../components/layout/SmoothScroll";
import "./globals.css";

// Configuração das fontes específicas do Figma (Poppins, Instrument Sans e EB Garamond)
const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GRU Consulting | Consultoria em Comércio Exterior",
  description: "Segurança, clareza e previsibilidade em suas operações internacionais de importação, exportação, logística e câmbio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${poppins.variable} ${instrumentSans.variable} ${ebGaramond.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-poppins">
        <ThemeInit />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}

