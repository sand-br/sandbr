// importação de dependências:
import React, { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";

//importação de componentes:
import { Ir } from "./ligacoes";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/src/components/ui/tooltip";

interface Container {
  children: ReactNode;
  link_do_artista?: string;
  artista?: string;
  descricao: string;
}

interface Imagens {
  claro: string | StaticImageData;
  escuro: string | StaticImageData;
  alt: string;
  width: number;
  height: number;
}

function ContainerDeImagem({
  children,
  link_do_artista,
  artista,
  descricao,
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
    <div className="border border-border flex flex-col items-center mx-5 my-3 gap-2 p-2 rounded-md sm:max-w-[300px] md:max-w-[400px]">
      <div className="rounded-md overflow-hidden">{children}</div>

      {artista == undefined ? null : (
        <p className="text-xs text-citacao">Feita por {credito()}.</p>
      )}
      <p className="text-xs text-citacao">{descricao}</p>
    </div>
  );
}

const ImagemTematica: React.FC<Imagens> = ({
  claro,
  escuro,
  alt,
  width,
  height,
}) => {
  return (
    <>
      {/*esta imagem será exibida quando o tema claro estiver ativo*/}
      <Image
        src={claro}
        alt={alt}
        width={width}
        height={height}
        className="block dark:hidden"
      />

      {/*esta imagem será exibida quando o tema escuro estiver ativo*/}
      <Image
        src={escuro}
        alt={alt}
        width={width}
        height={height}
        className="hidden dark:block"
      />
    </>
  );
};

export { ContainerDeImagem, ImagemTematica };
