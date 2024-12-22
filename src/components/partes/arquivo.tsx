"use client"

// importação de dependências:
import React, { ReactNode, useState } from "react";
import { useToast } from "@/src/hooks/use-toast";

// importação de componentes:
import { Button } from "@/src/components/ui/button";
import { Spinner } from "../partes/spinner";

// importação de ícones:
import { ArrowDownToLine, Check, X } from "lucide-react";

interface Botao {
  src: string
  texto: string
}

const Arquivo: React.FC<Botao> = ({ src, texto }) => {
  const { toast } = useToast();
  const [botao, setBotao] = useState<ReactNode>(<ArrowDownToLine />)

  const baixar = async () => {
    setBotao(<Spinner />)
    const nome = src.split('/').pop() || "imagem"; // Obtém o nome do arquivo ou define um padrão

    try {
      const response = await fetch(src);
      if (!response.ok) {
        toast({
          description: <p className="flex gap-3 items-center text-justify hyphens-auto"><X className="text-red-600" size={22} />Houve um erro ao baixar a imagem. Verifique sua conexão ou tente recarregar a página.</p>
        })
        setBotao(<ArrowDownToLine />)
      }

      const blob = await response.blob();
      const blobURL = window.URL.createObjectURL(blob); // cria uma URL temporária para o blob

      // cria o elemento <a> para forçar o download
      const elemento = document.createElement("a");
      elemento.href = blobURL;
      elemento.download = nome;
      document.body.appendChild(elemento); // necessário para alguns navegadores
      elemento.click();

      toast({
        description: <p className="flex gap-3 items-center text-justify hyphens-auto"><Check className="text-destaque" size={22} />O download começará em breve.</p>
      })
      setBotao(<Check className="text-destaque" />)
      setInterval(() => {
        setBotao(<ArrowDownToLine />)
      }, 2000);

      // remove o elemento <a> e libera a URL temporária
      document.body.removeChild(elemento);
      window.URL.revokeObjectURL(blobURL);
    } catch (error) {
      toast({
        description: <p className="flex gap-3 items-center text-justify hyphens-auto"><X className="text-red-600" size={22} />Houve um erro ao baixar a imagem. Verifique sua conexão ou tente recarregar a página.</p>
      })
      setBotao(<X className="text-red-600" />)
      setInterval(() => {
        setBotao(<ArrowDownToLine />)
      }, 2000);
      console.error("Erro ao realizar o download: ", error);
      return;
    }
  };

  return (
    <div>
      <Button
        variant="outline"
        className="h-[30px] p-0 gap-0 inline-flex items-center group hover:bg-background overflow-hidden"
        onClick={baixar}
      >
        <span className="h-full w-full px-1 inline-flex items-center group-hover:bg-background"><span>{texto}</span></span>
        <span
          className="border-l h-full w-full inline-flex items-center justify-center px-2 group-hover:bg-accent group-hover:text-accent-foreground"
        >
          {botao}
        </span>
      </Button>
    </div>
  );
}

export { Arquivo }