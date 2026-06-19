import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, EB_Garamond, Instrument_Sans } from "next/font/google";
import { ThemeInit } from "../.flowbite-react/init";
import "./globals.css";

// Configuração das fontes padrão e das fontes específicas do Figma
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  weight: ["400", "500", "600", "700"],
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
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${ebGaramond.variable} ${instrumentSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-poppins">
        <ThemeInit />
        {children}
      </body>
    </html>
  );
}

