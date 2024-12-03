// importação de dependências:
import { ReactNode } from "react";
import Link from "next/link";
import { differenceInDays, parse } from "date-fns";

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

interface Videos_YouTube {
  titulo?: string | ReactNode,
  subtitulo?: string,
  idDoVideo: string,
}

interface Revisao {
  quando: string,
  quem?: string | ReactNode,
  link?: string
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

// Signficado adiciona um pequeno balão de definição de uma palavra
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

// YouTube cria um campo com um vídeo do YouTube
const YouTube: React.FC<Videos_YouTube> = ({ titulo, subtitulo, idDoVideo }) => {
  return (
    <div className="border rounded-md aspect-video flex flex-col justify-center">
      <div className="border-b p-3 select-none flex items-center justify-between">
        {titulo === undefined ? <p>Vídeo no YouTube</p> : <p className="flex flex-col">{titulo}{subtitulo === undefined ? null : <span className="text-sm text-citacao">{subtitulo}</span>}</p>}
      </div>

      <div className="aspect-video">
        <iframe src={`https://www.youtube-nocookie.com/embed/${idDoVideo}`} className="w-full h-full rounded-b-md"  title="Vídeo do YouTube" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </div>
  );
};

const Revisado: React.FC<Revisao> = ({ quando, quem, link }) => {
  const dia = () => differenceInDays(new Date(), parse(quando, "dd/MM/yyyy", new Date()));
  
  if (isNaN(dia())) {
    return null; // se dia() for NaN, o componente retorna null, e não renderiza nada na tela
  }

  const Quem = ()=>{
    return (
      <>
        {link === undefined ? (
          <span>{quem}</span>
        ) : (
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-destaque hover:underline">{quem}</a>
        )}
      </>
    );
  }

  return (
    <>  
      <p className="text-citacao text-sm mb-4">
        {dia() < 0 ? null : dia() === 0 ? (
          <span>Esta página foi revisada hoje</span>
        ) : dia() === 1 ? (
          <span>Esta página foi revisada ontem</span>
        ) : (
          <span>Esta página foi revisada {dia()} dias atrás</span>
        )}
        {quem === undefined ? (
          <span>.</span>
        ) : (
          <span> por <Quem />.</span>
        )}
      </p>
      
    </>
  );
};

export { Citar, Discorrer, Significado, YouTube, Revisado }