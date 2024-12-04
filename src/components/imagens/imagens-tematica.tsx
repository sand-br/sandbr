"use client"

// importação de dependências:
import React from "react";
import Image, { StaticImageData } from "next/image";

//importação de componentes:
import { Ir } from "../posts/ligacoes";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/src/components/ui/tooltip";

interface Imagens {
  claro: string | StaticImageData;
  escuro: string | StaticImageData;
  link_do_artista?: string;
  artista?: string;
  descricao: string;
}

export const ImagemTematica: React.FC<Imagens> = ({ claro, escuro, link_do_artista, artista, descricao }) => {
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
    <div className="border border-border flex flex-col items-center mx-5 my-3 lg:my-0 mb-3 gap-2 p-4 rounded-md sm:max-w-[300px] md:max-w-[500px]">
      <div className="rounded-md overflow-hidden">
        {/*esta imagem será exibida quando o tema claro estiver ativo*/}
        <Image
          src={claro}
          alt={descricao}
          width={500}
          height={500}
          className="block dark:hidden"
        />

        {/*esta imagem será exibida quando o tema escuro estiver ativo*/}
        <Image
          src={escuro}
          alt={descricao}
          width={500}
          height={500}
          className="hidden dark:block"
        />
      </div>

      {artista == undefined ? null : (
        <p className="text-xs text-citacao">Feita por {credito()}.</p>
      )}

      <p className="text-xs text-citacao text-center">{descricao}</p>
    </div>
  );
}
