"use client";

// importações de dependências:
import React, { useEffect } from "react";
import { useIndex } from "@/contexts/indexContext";

// importações de componentes:
import Contribuir from "@/app/(enciclopedia)/docs/_markdown/contribuir.mdx";

export default function Page() {
  const { setIndice } = useIndex();
  const { setTitulo } = useIndex();

  useEffect(() => {
    setTitulo("Como contribuir?");
  }, [setTitulo])

  useEffect(() => {
    setIndice([
      {
        topico: "Ajude no desenvolvimento",
        subtopicos: [
          { subtopico: "Como ajudar" }
        ]
      },
      {
        topico: "Envie conteúdo",
        subtopicos: [
          { subtopico: "O que aceitamos" },
          { subtopico: "Como enviar" },
          { subtopico: "Envie" },
          { subtopico: "Criptografia opcional" },
        ]
      },
      {
        topico: "Contribua financeiramente"
      },
      {
        topico: "Considerações finais"
      }
    ]);
  }, [setIndice]);

  return <Contribuir />;
}