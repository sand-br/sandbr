"use client";

import { ContentCard } from "./content-card";

export interface Fonte {
  href: string;
  url: string;
  personagem: string;
}

export interface Perfis {
  perfil: Fonte[]
}

export function Characters({ perfil }: Perfis){
  const montarPerfis = perfil.map(( item, index) => (
    <ContentCard key={index} href={item.href} url={item.url} personagem={item.personagem} />
  ))

  return(
    <div className="rounded-lg border min-w-dvh flex flex-wrap justify-center items-center gap-4 px-6 py-8">
      {montarPerfis}
    </div>
  )
}