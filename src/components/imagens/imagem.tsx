// importação de dependências:
import React from "react";
import Image from "next/image";

// importação de componentes:
import { Button } from "@/src/components/ui/button";
import { BotaoInfo } from "./botao-info";
import { Baixar } from "@/src/components/imagens/botao-baixar";
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from "@/src/components/ui/dialog-edited"
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

// importação de ícones:
import { X } from "lucide-react";

interface Imagens {
  src: string,
  width: number,
  height: number,
  alt: string
}

export const Imagem: React.FC<Imagens> = ({src, width, height, alt}) => {
  return(
    <Dialog>
      <DialogTrigger asChild className="cursor-pointer">
        <Image src={src} width={width} height={height} alt={alt} />
      </DialogTrigger>

      <DialogContent className="w-full h-full flex flex-col-reverse md:flex-col gap-0 focus:outline-none focus:ring-transparent focus:border-none">
        <VisuallyHidden.Root><DialogTitle>Imagem aberta.</DialogTitle></VisuallyHidden.Root>
        <header className="relative w-full flex items-center px-5 justify-between bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-y z-40">
          <div className="h-16 flex items-center">
            <p className="line-clamp-2 text-justify hyphens-auto z-50">{alt}</p>
          </div>

          <div className="flex gap-3 items-center h-16 pl-5 z-50">
            <BotaoInfo />
            <Baixar src={src} />
            <DialogClose asChild><Button variant="outline" size="icon"><X /></Button></DialogClose>
          </div>
        </header>

        <main className="relative flex-grow flex justify-center items-center overflow-hidden">
          <Image
            className="max-w-full max-h-full object-contain"
            src={src}
            alt={alt}
            fill
          />
        </main>
      </DialogContent>
    </Dialog>
  );
}