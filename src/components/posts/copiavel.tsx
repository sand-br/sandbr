"use client"

// importação de dependências:
import React, { ReactNode, useRef } from "react";

// importação de componentes:
import { Button } from "@/src/components/ui/button";
import { useToast } from "@/src/hooks/use-toast"

// importação de ícones:
import { Check, X, Copy } from "lucide-react";

interface TextosCopiaveis {
  texto: string
}

interface EmailsCopiaveis {
  email: string
}

interface CamposCopiaveis {
  titulo: string | ReactNode;
  children: ReactNode;
  aviso: string;
}

const TextoCopiavel: React.FC<TextosCopiaveis> = ({ texto }) => {
  const { toast } = useToast()
  const preRef = useRef<HTMLSpanElement>(null);

  // função para copiar o conteúdo renderizado dentro do <pre>
  const copiar = () => {
    if (preRef.current) {
      // seleciona o texto renderizado dentro do elemento
      const content = preRef.current.innerText;
      navigator.clipboard
        .writeText(content)
        .then(() => {
          toast({
            duration: 5000,
            description: <p className="flex gap-3 items-center"><Check className="text-destaque" size={22}/>O texto foi copiado.</p>,
          })
        })
        .catch(() => {
          toast({
            duration: 5000,
            description: <p className="flex gap-3 items-center"><X className="text-red-600" size={22}/>Houve um erro ao copiar o texto. Se ele persistir, tente recarregar a página.</p>
          })
        });
    }
  };

  return(
      <Button
        variant="outline"
        className="h-[30px] p-0 gap-0 inline-flex items-center group hover:bg-background"
        onClick={copiar}
      >
        <span className="h-full w-full px-1 inline-flex items-center group-hover:bg-background">“<span ref={preRef}>{texto}</span>”</span>
        <span 
          className="border-l h-full w-full inline-flex items-center justify-center px-2 group-hover:bg-accent group-hover:text-accent-foreground"
        >
          <Copy/>
        </span>
      </Button>
  )
}

const EmailCopiavel: React.FC<EmailsCopiaveis> = ({ email }) => {
  const { toast } = useToast()
  const preRef = useRef<HTMLSpanElement>(null);

  // função para copiar o conteúdo renderizado dentro do <pre>
  const copiar = () => {
    if (preRef.current) {
      // seleciona o texto renderizado dentro do elemento
      const content = preRef.current.innerText;
      navigator.clipboard
        .writeText(content)
        .then(() => {
          toast({
            duration: 5000,
            description: <p className="flex gap-3 items-center"><Check className="text-destaque" size={22}/>O e-mail foi copiado.</p>,
          })
        })
        .catch(() => {
          toast({
            duration: 5000,
            description: <p className="flex gap-3 items-center"><X className="text-red-600" size={22}/>Houve um erro ao copiar o e-mail. Se ele persistir, tente recarregar a página.</p>
          })
        });
    }
  };

  return(
      <Button
        variant="outline"
        className="h-[30px] p-0 gap-0 inline-flex items-center group hover:bg-background"
        onClick={copiar}
      >
        <span className="h-full w-full px-1 inline-flex items-center group-hover:bg-background text-destaque hover:underline"><a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer"><span ref={preRef}>{email}</span></a></span>
        <span 
          className="border-l h-full w-full inline-flex items-center justify-center px-2 group-hover:bg-accent group-hover:text-accent-foreground"
        >
          <Copy/>
        </span>
      </Button>
  )
}

const CampoCopiavel: React.FC<CamposCopiaveis> = ({ titulo, children, aviso }) => {
  const { toast } = useToast()
  const preRef = useRef<HTMLDivElement>(null); // referência ao elemento que será copiado

  // função para copiar o conteúdo renderizado dentro do <pre>
  const copiar = () => {
    if (preRef.current) {
      // seleciona o texto renderizado dentro do elemento
      const content = preRef.current.innerText;
      navigator.clipboard
        .writeText(content)
        .then(() => {
          toast({
            duration: 5000,
            description: <p className="flex gap-3 items-center"><Check className="text-destaque" size={22}/>{aviso}</p>,
          })
        })
        .catch(() => {
          toast({
            duration: 5000,
            description: <p className="flex gap-3 items-center"><X className="text-red-600" size={22}/>Houve um erro ao copiar. Se ele persistir, tente recarregar a página.</p>
          })
        });
    }
  };

  return (
    <div className="border rounded-md mb-2 lg:max-w-[66%]">
      <div className="border-b p-3 select-none flex items-center justify-between">
        {titulo === undefined ? <p>Copie</p> : <p>{titulo}</p>}
        <Button variant="outline" onClick={copiar}>
          Copiar <Copy />
        </Button>
      </div>

      <div
        className="bg-copiavel py-3 px-5 rounded-md"
        ref={preRef} // referência para o elemento
      >
        <pre className="max-h-72 flex flex-col gap-3 overflow-y-auto overflow-x-hidden font-mono whitespace-pre-wrap scrollbar-none">
          {children}
        </pre>
      </div>
    </div>
  );
};

export { CampoCopiavel, EmailCopiavel, TextoCopiavel };