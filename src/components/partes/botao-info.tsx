// importação de dependências:
import React from "react";
import Image from "next/image";

// importação de componentes:
import { Button } from "@/src/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/src/components/ui/drawer"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/src/components/ui/tooltip"

// importação de ícones:
import { Info } from "lucide-react";

export const BotaoInfo = () => {
  return (
    <>
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="cursor-help hidden lg:flex justify-center" asChild>
          <Button variant="outline" size="icon"><Info/></Button>
        </TooltipTrigger>

        <TooltipContent className="w-80 bg-background border hyphens-auto ml-4">
          <p>O download de imagens desta enciclopédia é fornecido apenas para fins de consulta ou apreciação pessoal. <em>A Sandbr não concede licenças para o uso destas imagens.</em> Recomendamos verificar os direitos autorais e obter permissões diretamente com os detentores legais antes de qualquer utilização.</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>

    <Drawer>
      <DrawerTrigger className="lg:hidden" asChild>
        <Button variant="outline" size="icon"><Info/></Button>
      </DrawerTrigger>

      <DrawerContent className="mb-10">
        <p className="m-8 hyphens-auto text-center">O download de imagens desta enciclopédia é fornecido apenas para fins de consulta ou apreciação pessoal. <em>A Sandbr não concede licenças para o uso destas imagens.</em> Recomendamos verificar os direitos autorais e obter permissões diretamente com os detentores legais antes de qualquer utilização.</p>
        <DrawerClose asChild className="flex justify-center">
          <div>
            <Button >Estou ciente</Button>
          </div>
        </DrawerClose>
      </DrawerContent>
    </Drawer>
    </>
  );
}