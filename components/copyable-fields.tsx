"use client";
// ↓ IMPORTAÇÕES ↓
// importações de dependências:
import React, { useRef, ReactNode } from "react";

// importações de componentes:
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

// importações de ícones:
import { Copy } from "lucide-react";
// ↑ FIM DAS IMPORTAÇÕES ↑.

// ↓ TIPAGENS ↓
interface CopyableProps {
  text: string;
  symbol?: ReactNode;
}

interface EmailProps {
  email: string;
}

interface FieldProps {
  titulo?: string;
  children: ReactNode;
}
// ↑ FIM DAS TIPAGENS ↑

const Copyable: React.FC<CopyableProps> = ({ text, symbol }) => {
  const spanRef  = useRef<HTMLSpanElement>(null);

  // função para copiar o conteúdo renderizado dentro do <span>
  const copiar = () => {
    if (spanRef .current) {
      const content = spanRef .current.innerText;
      navigator.clipboard
        .writeText(content)
        .then(() => {
          toast.success("Copiado.");
        })
        .catch(() => {
          toast.error("Houve um erro ao copiar. Se ele persistir, tente recarregar a página.");
        });
    }
  };

  return (
    <Button
      variant="outline"
      className="h-[30px] p-0 gap-0 inline-flex items-center group hover:bg-background overflow-hidden"
      onClick={copiar}
    >
      <span className="h-full w-full px-1 inline-flex items-center group-hover:bg-background text-destaque">
        <span ref={spanRef } className="px-1">{text}</span>
      </span>
      <span className="border-l h-full w-full inline-flex items-center justify-center px-2 group-hover:bg-accent group-hover:text-accent-foreground">
         {symbol ?? <Copy />}
      </span>
    </Button>
  );
};

const Email: React.FC<EmailProps> = ({ email }) => {
  const spanRef = useRef<HTMLSpanElement>(null);

  // função para copiar o conteúdo renderizado dentro do <span>
  const copiar = () => {
    if (spanRef.current) {
      const content = spanRef.current.innerText;
      navigator.clipboard
        .writeText(content)
        .then(() => {
          toast.success("O e-mail foi copiado.");
        })
        .catch(() => {
          toast.error("Houve um erro ao copiar o e-mail. Se ele persistir, tente recarregar a página.");
        });
    }
  };

  return (
    <Button
      variant="outline"
      className="h-[30px] p-0 gap-0 inline-flex items-center group hover:bg-background overflow-hidden"
      onClick={copiar}
    >
      <span className="h-full w-full px-1 inline-flex items-center group-hover:bg-background text-destaque hover:underline">
        <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
          <span ref={spanRef} className="px-1">{email}</span>
        </a>
      </span>
      <span className="border-l h-full w-full inline-flex items-center justify-center px-2 group-hover:bg-accent group-hover:text-accent-foreground">
        <Copy />
      </span>
    </Button>
  );
};

const Field: React.FC<FieldProps> = ({ titulo, children }) => {
  const preRef = useRef<HTMLDivElement>(null);

  // função para copiar o conteúdo renderizado dentro do <pre>
  const copiar = () => {
    if (preRef.current) {
      const content = preRef.current.innerText;
      navigator.clipboard
        .writeText(content)
        .then(() => {
          toast.success("O texto foi copiado.");
        })
        .catch(() => {
          toast.error("Houve um erro ao copiar. Se ele persistir, tente recarregar a página.");
        });
    }
  };

  return (
    <div className="border rounded-md max-w-[90vw] my-2  bg-background dark:bg-input/30">
      <div className="border-b p-3 select-none flex items-center justify-between">
        {titulo === undefined ? <p>Copie</p> : <p>{titulo}</p>}
        <Button variant="outline" onClick={copiar}>
          Copiar <Copy />
        </Button>
      </div>

      <div
        className="dark:bg-[#0a0a0a] py-3 px-5 rounded-md"
        ref={preRef}
      >
        <pre className="max-h-72 flex flex-col gap-3 overflow-y-auto overflow-x-hidden font-mono whitespace-pre-wrap">
          {children}
        </pre>
      </div>
    </div>
  );
};



export { Copyable, Email, Field };
