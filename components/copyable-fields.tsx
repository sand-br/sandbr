"use client";

import { toast } from "sonner";
import { useRef, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

// Tipagem das props do Email
interface EmailProps {
  email: string;
}

const Email: React.FC<EmailProps> = ({ email }) => {
  const preRef = useRef<HTMLSpanElement>(null);

  // função para copiar o conteúdo renderizado dentro do <span>
  const copiar = () => {
    if (preRef.current) {
      const content = preRef.current.innerText;
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
          <span ref={preRef}>{email}</span>
        </a>
      </span>
      <span className="border-l h-full w-full inline-flex items-center justify-center px-2 group-hover:bg-accent group-hover:text-accent-foreground">
        <Copy />
      </span>
    </Button>
  );
};

// Tipagem das props do Campo
interface FieldProps {
  titulo?: string;
  children: ReactNode;
}

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
    <div className="border rounded-md max-w-[90vw] my-2 lg:max-w-[66%] bg-background dark:bg-input/30">
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

export { Field, Email };
