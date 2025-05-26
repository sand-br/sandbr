import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// este componente contém o badge e o drawer de aviso de spoilers.
/*
  * Exibe um alerta de spoilers para os usuários, adaptando a experiência conforme o dispositivo.

  * Em telas desktop, utiliza um Tooltip para mostrar o aviso ao passar o mouse sobre o badge.
  * Em dispositivos móveis, utiliza um Drawer para garantir acessibilidade e melhor experiência de leitura,
  * já que tooltips baseados em hover não funcionam bem em telas touch.

  * O Drawer é usado no mobile porque permite uma interação mais clara e acessível, exibindo o aviso em destaque
  * e exigindo uma ação explícita do usuário para fechar, o que não seria possível com tooltips tradicionais.
*/

function SpoilerWarning() {
  return (
    <div className="ml-1">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="cursor-help hidden lg:block">
            <Badge variant="destructive">Alerta de spoilers!</Badge>
          </TooltipTrigger>
          <TooltipContent className="w-80 border hyphens-auto ml-4">
            <p>
              O conteúdo desta enciclopédia contém revelações significativas
              sobre todas as obras do Brandon Sanderson. Leia por sua conta e
              risco.
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <Drawer>
        <DrawerTrigger className="lg:hidden">
          <Badge variant="destructive">Alerta de spoilers!</Badge>
        </DrawerTrigger>
        <DrawerContent className="mb-10">
          <p className="m-8 hyphens-auto text-center">
            O conteúdo desta enciclopédia contém revelações significativas sobre
            todas as obras do Brandon Sanderson. Leia por sua conta e risco.
          </p>
          <DrawerClose>
            <Button>Estou ciente</Button>
          </DrawerClose>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export { SpoilerWarning };
