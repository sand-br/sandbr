// importação de dependências:
import React from "react";
import Image from "next/image";

//importação de componentes:
import { Ir } from "./ligacoes";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/src/components/ui/tooltip";

interface Imagens {
  fonte: string;
  descricao: string;
  artista?: string;
  link_do_artista?: string;
}

const Imagem: React.FC<Imagens> = ({
  fonte,
  descricao,
  artista,
  link_do_artista,
}) => {
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
      <div className="flex flex-col items-center border border-border rounded-md p-1 lg:p-2 gap-2 box-content float-none sm:float-right max-w-screen sm:max-w-[300px] lg:max-w-[500px] mx-5 mb-2 text-sm">
        <Image
          src={fonte}
          alt={descricao}
          width={500}
          height={500}
          priority
          className="rounded-md"
        />

        {artista == undefined ? null : (
          <p className="text-xs text-citacao">Feita por {credito()}.</p>
        )}

        <p>{descricao}</p>
      </div>
  );
};

export { Imagem };
