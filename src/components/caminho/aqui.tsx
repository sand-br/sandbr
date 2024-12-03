"use client"

// importação de dependências:
import { useToast } from "@/src/hooks/use-toast";

// importação de componentes:
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/src/components/ui/tooltip";
import { BreadcrumbItem, BreadcrumbPage } from "@/src/components/ui/breadcrumb";

// importação de ícones:
import { Check, X } from "lucide-react";

interface Final {
  pagina: string;
}

const Aqui: React.FC<Final> = ({ pagina }) => {
  const { toast } = useToast();
  const copiar_link = () => {
    const url = window.location.href; // Obtém o URL atual
    navigator.clipboard
      .writeText(url)
      .then(() => {
        toast({ description: <p className="flex gap-3 items-center"><Check className="text-destaque" size={30}/> O link da página foi copiado.</p> });
      })
      .catch((err) => {
        toast({
          description: <p className="flex gap-3 items-center"><X className="text-red-600" size={40}/>Houve um erro ao copiar o link. Se ele persistir, tente recarregar a página.</p>
        });
        console.error(err);
      });
  };

  return (
    <>
      <BreadcrumbItem>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger onClick={copiar_link}>
              <BreadcrumbPage>{pagina}</BreadcrumbPage>
            </TooltipTrigger>
            <TooltipContent>
              <p className="w-40 text-center">
                Parece que você já está aqui. Clique para copiar o link.
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </BreadcrumbItem>
    </>
  );
};

export { Aqui }