// importação de dependências:
import Image from "next/image";
import Link from "next/link";

// importação de componentes:
import { Button } from "@/src/components/ui/button";
import { Badge } from "@/src/components/ui/badge";
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
import WordRotate from "@/src/components/ui/word-rotate";

// importação de ícones:
import { MoveRight } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Home() {
  const palavras = ["Brandon Sanderson.", "o Cosmere.", "Nascidos da Bruma.", "Os relatos da Guerra das Tempestades.", "Warbreaker - O sopro dos deuses.","Tress, a Garota do Mar Esmeralda.","Executores.","Elantris.","o Hoid."]

  return (
    <section>
      <div className="w-full py-20 lg:py-20 select-none border-b">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
            <div className="flex gap-4 flex-col">
              <div>
                
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="cursor-help hidden lg:block">
                    <Badge variant="destructive">Alerta de spoilers!</Badge>
                  </TooltipTrigger>
                  <TooltipContent className="w-80 bg-background border text-white hyphens-auto ml-4">
                    <p>O conteúdo desta enciclopédia contém revelações significativas sobre todas as obras do Brandon Sanderson. Leia por sua conta e risco.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <Drawer>
                <DrawerTrigger className="lg:hidden">
                  <Badge variant="destructive">Alerta de spoilers!</Badge>
                </DrawerTrigger>
                <DrawerContent className="mb-10">
                  <p className="m-8 hyphens-auto text-center">O conteúdo desta enciclopédia contém revelações significativas sobre todas as obras do Brandon Sanderson. Leia por sua conta e risco.</p>
                  <DrawerClose>
                    <Button>Estou ciente</Button>
                  </DrawerClose>
                </DrawerContent>
              </Drawer>

                
              </div>
              <div className="flex gap-4 flex-col">
                <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
                  bem-vindo(a) à <span className="text-[#e73720]">sandbr</span>!
                </h1>
                <p className="text-xl tracking-tight text-muted-foreground max-w-md text-left leading-none">
                  A enciclopédia brasileira sobre <WordRotate words={palavras.sort(() => Math.random() - 0.5)} duration={5000}/>
                </p>
              </div>
              <div className="flex flex-row gap-4">
                <Button size="lg" className="gap-4" variant="outline" asChild>
                  <a href="https://github.com/sand-br/sandbr" target="_blank" rel="noopener noreferrer">Contribua <GitHubLogoIcon className="w-4 h-4" /></a>
                </Button>
                <Button size="lg" asChild>
                  <Link href="/assuntos" className="gap-4">Explorar <MoveRight className="w-4 h-4" /></Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-muted rounded-md aspect-square box-border overflow-hidden">
                <Image src="https://i.imgur.com/1y5z29V.jpeg" width={300} height={300} alt="Vin"/>
              </div>
              <div className="bg-muted rounded-md row-span-2 aspect-9/16 box-border overflow-hidden">
                <Image src="https://i.imgur.com/dpPAk60.jpeg" width={500} height={1000} alt="Vin"/>
              </div>
              <div className="bg-muted rounded-md aspect-square box-border overflow-hidden">
                <Image src="https://i.imgur.com/AxXqYO2.jpeg" width={300} height={300} alt="Vin"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
