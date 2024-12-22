"use client"

// importação de dependências:
import React, { ReactNode, useState } from "react";
import { differenceInDays, parse } from "date-fns";

interface Revisao {
  quando: string,
  quem?: string | ReactNode,
  link?: string
}

const Revisado: React.FC<Revisao> = ({ quando, quem, link }) => {
  const [ dia ] = useState(() => differenceInDays(new Date(), parse(quando, "dd/MM/yyyy", new Date())));
  
  if (isNaN(dia)) {
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
      <p className="text-citacao text-sm mt-3 mb-4">
        {dia < 0 ? null : dia === 0 ? (
          <span>Esta página foi revisada hoje</span>
        ) : dia === 1 ? (
          <span>Esta página foi revisada ontem</span>
        ) : (
          <span>Esta página foi revisada {dia} dias atrás</span>
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

const Hoje = () => {
  const data = new Date()
  const agora = data.getHours();
  const meses = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro"
  ];

  const saudacao = (): string => {
    if (agora >= 0 && agora < 6) {
      return "Boa madrugada";
    } else if (agora >= 6 && agora < 12) {
      return "Bom dia";
    } else if (agora >= 12 && agora < 18) {
      return "Boa tarde";
    } else {
      return "Boa noite";
    }
  } 

  const mes = data.getMonth();

  return `${saudacao()}! Hoje é dia ${data.getDate().toString()} de ${meses[mes]} de 12.${data.getFullYear().toString().slice(1)} da Era Humana.`
}

const Ano = () => {
  const ano = new Date().getFullYear().toString();
  return `O ano ${ano} EC torna-se 12.${ano.slice(1)} EH`
}

export { Hoje, Revisado, Ano }