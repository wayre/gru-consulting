import { useRef } from "react";
import Image from "next/image";




export const Clientes = () => {

  // Array com as marcas/clientes parceiros para facilidade de manutenção
  const clientLogos = [
    { name: "Multiparts", src: "logo-multiparts.png" },
    { name: "Grupo Maxi", src: "logo-grupo-maxi.png" },
    // { name: "Tropical Estufas", src: "logo-tropical-estufas.png" },
    { name: "Valflex", src: "logo-valflex.png" },
    { name: "Rocha Bahia", src: "logo-rocha-bahia.png" },
    { name: "Tetralite", src: "logo-tetralite.png" },
    { name: "Motiv", src: "logo-motiv.png" },
    { name: "Fortuna", src: "logo-fortuna.png" },
    { name: "Renz Intrumentos Elétricos", src: "logo-renz-intrumentos-eletricos.png" }
  ];

  // Cria uma lista de logos rotacionada a partir do índice 4 para a segunda animação
  const rotatedLogos = [...clientLogos.slice(4), ...clientLogos.slice(0, 4)];


  const root = useRef<HTMLElement>(null);


  return (
    <section>
      <p className="text-center text-xl font-semibold text-black/70 my-10">Nossos Clientes Parceiros</p>
      {/* Segunda linha animada: move-se suavemente para a direita */}
      <div className="w-5/6 m-auto overflow-hidden">
        <div className="flex w-max animate-marquee-right py-2 bg-black rounded-4xl border border-zinc-800/10">
          {/* Primeiro set de logos */}
          {rotatedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-right-1-${index}`}
              className="flex h-10 w-24 items-center justify-center opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100 sm:w-28 md:w-32 flex-shrink-0 mx-4 sm:mx-6 md:mx-8"
            >
              <Image
                src={"/logos-empresas/" + logo.src}
                alt={`Logo da marca ${logo.name}`}
                width={150}
                height={50}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
          {/* Segundo set de logos duplicado para criar a ilusão de loop infinito */}
          {rotatedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-right-2-${index}`}
              className="flex h-10 w-24 items-center justify-center opacity-100 transition-all duration-300 hover:grayscale-0 hover:opacity-100 sm:w-28 md:w-32 flex-shrink-0 mx-4 sm:mx-6 md:mx-8"
            >
              <Image
                src={"/logo-empresas/" + logo.src}
                alt={`Logo da marca ${logo.name}`}
                width={150}
                height={50}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clientes;
