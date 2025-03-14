// importação de dependências:
import React, { ReactNode } from "react";

// importação de componentes:
import { Button } from "@/src/components/ui/button";
import { Separator } from "@/src/components/ui/separator";
import { ThemeToggle } from "@/src/components/ui/theme-toggle";
import { SidebarInset, SidebarTrigger } from "@/src/components/ui/sidebar";

// importação de componentes meus:
import { Caminho } from "@/src/components/caminho/caminho";

// importação de ícones:
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { AppSidebar, ItemsDoIndice } from "../ui/app-sidebar";
import { Rodape } from "../footer";

interface Posts {
  indice: ItemsDoIndice[],
  children: ReactNode
}

interface Estruturas {
  children: ReactNode,
}

interface Topicos {
  titulo: string;
  children: string | ReactNode;
}

interface Escritos {
  texto: string;
}

const Post: React.FC<Posts> = ({ indice, children }) => {
  return(
    <>
      <AppSidebar indice={indice}/>
      <SidebarInset>{children}<Rodape/></SidebarInset>
    </>
  ); 
}

const Cabecalho: React.FC<Estruturas> = ({ children })=>{
  return(
      <header className="sticky top-0 flex items-center justify-between bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60 mr-4">
        <div className="flex h-16 shrink-0 items-center gap-2 px-4">
          <SidebarTrigger className="flex -ml-1" />
          <Separator orientation="vertical" className="flex md:hidden mr-2 h-4" />

          <Caminho>
            {children}
          </Caminho>
        </div>

        <div className="flex items-center gap-2">
          <Button
            size="default"
            className="gap-4 hidden sm:flex border-borderc"
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
  return <main className="flex flex-col px-5 lg:pr-5 leading-snug">{children}</main>;
}

const Topico: React.FC<Topicos> = ({ titulo, children }) => {
  return (
    <section className="flex flex-col gap-2 text-justify hyphens-auto mb-2">
      <h1 className="text-xl hidden lg:block md:text-2xl font-medium scroll-mt-[84px]" id={titulo.toLowerCase().replace(/\s/g, '-')}>
        {titulo}
      </h1>
      {children}
    </section>
  );
};

const Subtopico: React.FC<Topicos> = ({ titulo, children }) => {
  return (
    <div className="flex flex-col gap-2 mb-2 text-justify hyphens-auto">
      <h3 className="text-lg font-medium scroll-mt-[84px]" id={titulo.toLowerCase().replace(/\s/g, '-')}>
        {titulo}
      </h3>
      {children}
    </div>
  );
};

const P: React.FC<Estruturas> = ({ children }) => {
  return <p className="pb-2 leading-snug hyphens-auto">{children}</p>
}

const Lista: React.FC<Estruturas> = ({ children }) => {
  return <ul className="flex flex-col pb-2 gap-1 list-disc list-inside leading-snug">{children}</ul>
}

const T1: React.FC<Escritos> = ({ texto }) => {
  return <h1 className="text-base lg:text-2xl scroll-mt-[84px] self-center md:self-start" id={`${texto.toLowerCase().replace(/\s+/g, '-')}`}><strong>{texto}</strong></h1>
};

const T2: React.FC<Escritos> = ({ texto }) => {
  return <h2 className="text-base lg:text-xl pt-2 scroll-mt-[84px]" id={`${texto.toLowerCase().replace(/\s+/g, '-')}`}><strong>{texto}</strong></h2>
};

const T3: React.FC<Escritos> = ({ texto }) => {
  return <h3 className="text-base lg:text-lg scroll-mt-[84px]" id={`${texto.toLowerCase().replace(/\s+/g, '-')}`}><strong>{texto}</strong></h3>
};



export { Post, Cabecalho, Conteudo, Topico, Subtopico, P, Lista, T1, T2, T3 }