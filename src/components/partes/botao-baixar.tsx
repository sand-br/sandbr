"use client"

// importação de dependências:
import React, { ReactNode, useState } from "react";
import { useToast } from "@/src/hooks/use-toast";

// importação de componentes:
import { Button } from "@/src/components/ui/button";
import { Spinner } from "./spinner";

// importação de ícones:
import { ArrowDownToLine, Check, X } from "lucide-react";

interface Botao {
  src: string
}

const Baixar: React.FC<Botao> = ({ src }) => {
  const { toast } = useToast();
  const [botao, setBotao] = useState<ReactNode>(<ArrowDownToLine />)

  const baixar_imagem = async () => {
    setBotao(<Spinner />)
    const nome = src.split('/').pop() || "imagem"; // Obtém o nome do arquivo ou define um padrão
  
    try {
      const response = await fetch(src);
      if (!response.ok){
        toast({ 
          description: <p className="flex gap-3 items-center text-justify hyphens-auto"><X className="text-red-600" size={22}/>Houve um erro ao baixar a imagem. Verifique sua conexão ou tente recarregar a página.</p> 
        })
        setBotao(<ArrowDownToLine/>)
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
        description: <p className="flex gap-3 items-center text-justify hyphens-auto"><Check className="text-destaque" size={22}/>O download começará em breve.</p> 
      })
      setBotao(<Check className="text-destaque"/>)
      setInterval(() => {
        setBotao(<ArrowDownToLine/>)
      }, 2000);

      // remove o elemento <a> e libera a URL temporária
      document.body.removeChild(elemento);
      window.URL.revokeObjectURL(blobURL);
    } catch (error) {
      toast({ 
        description: <p className="flex gap-3 items-center text-justify hyphens-auto"><X className="text-red-600" size={22}/>Houve um erro ao baixar a imagem. Verifique sua conexão ou tente recarregar a página.</p> 
      })
      setBotao(<X className="text-red-600" />)
      setInterval(() => {
        setBotao(<ArrowDownToLine/>)
      }, 2000);
      console.error("Erro ao realizar o download: ", error);
    }
  };
  
  return <Button variant="outline" size="icon" onClick={baixar_imagem}>{botao}</Button>
}

export { Baixar }