// importação de dependências:
import React from "react";
import { Imagem } from "./imagem";

//importação de componentes:
import { Ir } from "../posts/ligacoes";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/src/components/ui/tooltip";

interface Container {
  link_do_artista?: string;
  artista?: string;
  src: string;
  descricao: string;
}

export function ContainerDeImagem({
  link_do_artista,
  artista,
  descricao,
  src,
}: Container) {
  const credito = () => {
    return (
      <>
        {link_do_artista == undefined ? (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>{artista}</TooltipTrigger>
              <TooltipContent>
                <p>Não encontramos um perfil oficial deste artista.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ) : (
          <Ir destino={link_do_artista!} texto={artista!} />
        )}
      </>
    );
  };

  return (
    <div className="border border-border flex flex-col items-center mx-5 my-3 lg:my-0 mb-3 gap-2 p-2 rounded-md sm:max-w-[300px] md:max-w-[500px]">
      <div className="rounded-md overflow-hidden">
        <Imagem src={src} width={500} height={500} alt={descricao}/>
      </div>

      {artista == undefined ? null : (
        <p className="text-xs text-citacao">Feita por {credito()}.</p>
      )}

      <p className="text-xs text-citacao text-center">{descricao}</p>
    </div>
  );
}