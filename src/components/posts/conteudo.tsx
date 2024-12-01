// importação de dependências:
import React, { ReactNode } from "react";

interface Conteudos {
  titulo: string,
  children: ReactNode
}
const Conteudo: React.FC<Conteudos> = ({ titulo, children })=>{
  return <main className="flex flex-col gap-2 px-4 mt-2"><h1 className="hidden lg:block md:text-2xl">{titulo}</h1>{children}</main>;
}

export { Conteudo }