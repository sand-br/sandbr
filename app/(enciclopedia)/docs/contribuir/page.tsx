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
          { subtopico: "Como você pode ajudar" }
        ]
      },
      {
        topico: "Envie livros",
        subtopicos: [
          { subtopico: "Como enviar" },
          { subtopico: "Criptografia de e-mail" },
          { subtopico: "Processo de revisão" },
        ]
      },
      {
        topico: "Semeie via Torrent",
        subtopicos: [
          { subtopico: "Por que semear?" },
          { subtopico: "Como semear" }
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