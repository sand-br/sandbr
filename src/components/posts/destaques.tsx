// importação de dependências:
import { ReactNode } from "react";
import Link from "next/link";

// importação de componentes:
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/src/components/ui/tooltip";

// importação de ícones:
import { Eye } from "lucide-react";

// constantes:
const estilo_de_link = "text-destaque hover:underline scroll-mt-[84px]"

interface Citação {
  citacao: string;
  children?: string | ReactNode;
}

interface Detalhes {
  destino: string,
  assunto: string
}

interface Significados {
  palavra: string
  significado: string,
}

// Citar é usado para criar um campo formatado de citação
const Citar: React.FC<Citação> = ({ citacao, children }) => {
  return (
    <p className="text-citacao text-base italic">
      “{citacao}” {children}
    </p>
  );
};

// Discorrer é uma elemento que linka uma versão mais completa do assunto de um tópico
const Discorrer: React.FC<Detalhes> = ({destino, assunto}) =>{
  return(
    <div className="flex items-center gap-1 text-citacao">
      <Eye size={18}/>
      <p className="text-sm italic">Para mais detalhes, consulte a página sobre <Link href={destino} className={estilo_de_link} target="_blank">{assunto}</Link>.</p>
    </div>
  );
}

const Significado: React.FC<Significados> = ({ palavra, significado }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger><span className="underline">{palavra}</span></TooltipTrigger>
        <TooltipContent>
          <p>{significado}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export { Citar, Discorrer, Significado }