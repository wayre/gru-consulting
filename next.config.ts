import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  // Define a raiz do workspace para o Turbopack para evitar inferência incorreta decorrente de outros lockfiles
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default withFlowbiteReact(nextConfig);