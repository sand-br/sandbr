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

interface Estruturas {
  children: ReactNode,
}

interface Topicos {
  titulo: string;
  children: string | ReactNode;
}

const Cabecalho: React.FC<Estruturas> = ({ children })=>{
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

const Conteudo: React.FC<Estruturas> = ({ children })=>{
  return <main className="flex flex-col gap-2 px-4 mt-2">{children}</main>;
}

const Topico: React.FC<Topicos> = ({ titulo, children }) => {
  return (
    <section className="flex flex-col gap-3 text-justify hyphens-auto mb-5">
      <h1 className="text-xl hidden lg:block md:text-2xl font-medium scroll-mt-[84px]" id={titulo.toLowerCase().replace(/\s/g, '_')}>
        {titulo}
      </h1>
      {children}
    </section>
  );
};

const Subtopico: React.FC<Topicos> = ({ titulo, children }) => {
  return (
    <div className="flex flex-col gap-3 mt-5 text-justify hyphens-auto">
      <h3 className="text-lg font-medium scroll-mt-[84px]" id={titulo.toLowerCase().replace(/\s/g, '_')}>
        {titulo}
      </h3>
      {children}
    </div>
  );
};

export { Cabecalho, Conteudo, Topico, Subtopico }