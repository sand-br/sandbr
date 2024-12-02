// importação de dependências:
import React, { ReactNode } from "react"
import Link from "next/link";

// importação de ícones:
import { ArrowUp } from "lucide-react";

// constantes:
const estilo_de_link = "text-destaque hover:underline scroll-mt-[84px]"

// lista de tipagem:
interface Ancoras {
    o_que: string;
    titulo: string;
}

interface Menção {
  quem: string
}

interface Enlaces {
    destino: string;
    texto: string;
  }

interface Listagem {
    qual: string,
}

interface AncReferencias {
    qual: number,
}

interface Referencias {
    qual: number,
    children: string | ReactNode
}

// Ancorar é usado para criar links entre seções de uma mesma página
const Ancorar: React.FC<Ancoras> = ({ o_que, titulo }) => {
    return (
        <Link href={`#${o_que}`} className={estilo_de_link} scroll={true}>
          {titulo}
        </Link>
    );
};

// Enlaçar é usado para criar links para outras páginas dentro da enciclopédia
const Enlaçar: React.FC<Enlaces> = ({ destino, texto }) => {
  return (
      <Link href={destino} className={estilo_de_link} prefetch={true}>
        {texto}
      </Link>
  );
};

// Listar é usado para mencionar os livros em uma página, e criará um link para a página da enciclopédia do livro em questão
const Listar: React.FC<Listagem> = ({qual}) => {
    return(
      <Link className={estilo_de_link} href={`/livros/${qual.toLowerCase().replace(/\s+/g, '-')}`}>{qual}</Link>
    )
  };

// Referenciar é usado para criar uma âncora que leva à área de referências
const Referenciar: React.FC<AncReferencias> = ({qual}) => {
    return (
      <sup className="scroll-mt-[84px]">
        <Link href={`#nota_${qual}`} className={estilo_de_link} id={`nota_rev_${qual}`}>{`[${qual}]`}</Link>
      </sup>
    );
}

// CriarReferencia usado para criar uma referência e uma âncora que leva de volta ao conteúdo ao qual a refêrencia se relaciona.
const CriarReferencia: React.FC<Referencias> = ({qual, children}) => {
    return (
        <div className="flex gap-3">
            <Link href={`#nota_rev_${qual}`} className="text-zinc-400 hover:text-destaque hover:underline"><ArrowUp size={16}/></Link>
            <p className="text-xs text-zinc-400" id={`nota_${qual}`}>{`[${qual}]`} {children}</p>
        </div>
        
    );
}

// Ir é usado para linkar um site fora da enciclopédia
const Ir: React.FC<Enlaces> = ({destino, texto}) =>{
  return <a href={destino} target="_blank" rel="noopener noreferrer" className={estilo_de_link}>{texto}</a>
}

// Mencionar é usado para citar um personagem
const Mencionar: React.FC<Menção> = ({ quem }) => {
  return(
    <Link className="text-destaque hover:underline" href={`/personagens/${quem.toLowerCase().replace(/[' ]/g, '-')}`}>{quem}</Link>
  )
};

export { Ancorar, CriarReferencia, Enlaçar, Ir, Listar, Mencionar, Referenciar }