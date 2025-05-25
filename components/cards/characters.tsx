"use client";

import Link from "next/link";
import { ContentCard } from "./content-card";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

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
    <div className="rounded-lg border justify-center items-center px-6">
      <div className="flex items-center justify-between py-4">
        <p className="font-semibold">Principais personagens</p>
        <Button variant="link" asChild>
          <Link href="/personagens">Ver todos <MoveRight className="size-4" /></Link>
        </Button>
      </div>
      <div className="min-w-dvh flex flex-wrap gap-4 border-t py-8">
        {montarPerfis}
      </div>
    </div>
  )
}