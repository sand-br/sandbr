// importação de dependências:
import React, { ReactNode } from "react";

// importação de componentes da shadcn:
import { Button } from "@/src/components/ui/button";
import { Separator } from "@/src/components/ui/separator";
import { ThemeToggle } from "@/src/components/theme-toggle";
import { SidebarTrigger } from "@/src/components/ui/sidebar";

// importação de componentes meus:
import { Caminho } from "@/src/components/caminho/caminho";

// importação de ícones:
import { GitHubLogoIcon } from "@radix-ui/react-icons";

interface Cabecalhos {
    children: ReactNode,
}
export function Cabecalho({ children }: Cabecalhos){
    return(
        <header className="sticky top-0 flex items-center justify-between bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mr-4">
          <div className="flex h-16 shrink-0 items-center gap-2 px-4">
            <SidebarTrigger className="flex md:hidden -ml-1" />
            <Separator orientation="vertical" className="flex md:hidden mr-2 h-4" />

            <Caminho>
              {children}
            </Caminho>
          </div>

          <div className="flex items-center gap-2">
            <Button
              size="default"
              className="gap-4 hidden sm:flex"
              variant="outline"
              asChild
            >
              <a
                href="https://github.com/sand-br/sandbr"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contribua <GitHubLogoIcon className="w-4 h-4" />
              </a>
            </Button>
            <ThemeToggle />
          </div>
        </header>
    );
}