"use client"

// importação de dependências:
import React from "react";

// importação de componentes:
import { Button } from "@/src/components/ui/button";

// importação de ícones:
import { ArrowDownToLine } from "lucide-react";

interface Botao {
  src: string
}

const Baixar: React.FC<Botao> = ({ src }) => {
  const baixar_imagem = async () => {
    const nome = src.split('/').pop() || "imagem"; // Obtém o nome do arquivo ou define um padrão
  
    try {
      // Faz o download da imagem como um blob
      const response = await fetch(src);
      if (!response.ok) throw new Error("Erro ao baixar a imagem");
  
      const blob = await response.blob();
  
      // Cria uma URL temporária para o blob
      const blobURL = window.URL.createObjectURL(blob);
  
      // Cria o elemento <a> para forçar o download
      const elemento = document.createElement("a");
      elemento.href = blobURL;
      elemento.download = nome;
      document.body.appendChild(elemento); // Necessário para alguns navegadores
      elemento.click();
  
      // Remove o elemento <a> e libera a URL temporária
      document.body.removeChild(elemento);
      window.URL.revokeObjectURL(blobURL);
    } catch (error) {
      console.error("Erro ao realizar o download:", error);
    }
  };
  
  return <Button variant="outline" size="icon" onClick={baixar_imagem}><ArrowDownToLine /></Button>
}

export { Baixar }