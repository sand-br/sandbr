"use client";

// importações de dependências:
import React, { useEffect } from "react";
import { useIndex } from "@/contexts/indexContext";

// importações de componentes:
import Contribuir from "@/app/(enciclopedia)/docs/_markdown/contribuir.mdx";
import { useWay } from "@/contexts/wayContext";

export default function Page() {
  const { setIndice, setTitulo } = useIndex();
  const { setCategoria, setPaginas } = useWay();

  useEffect(() => {
    setTitulo("Como contribuir?");
  }, [setTitulo]);

  useEffect(() => {
    setIndice([
      {
        topico: "Ajude no desenvolvimento",
        subtopicos: [{ subtopico: "Como ajudar" }],
      },
      {
        topico: "Envie conteúdo",
        subtopicos: [
          { subtopico: "O que aceitamos" },
          { subtopico: "Como enviar" },
          { subtopico: "Envie" },
          { subtopico: "Criptografia opcional" },
        ],
      },
      {
        topico: "Contribua financeiramente",
      },
      {
        topico: "Considerações finais",
      },
    ]);
  }, [setIndice]);

  useEffect(() => {
    setCategoria("Docs");
    setPaginas(["Como contribuir?"]);
  }, [setCategoria, setPaginas]);

  return <Contribuir />;
}