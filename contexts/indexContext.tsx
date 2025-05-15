"use client";

// ↓ IMPORTAÇÕES ↓
import React, { createContext, useContext, useState, ReactNode } from "react";
// ↑ FIM DAS IMPORTAÇÕES ↑

// ↓ TIPAGENS ↓
export interface Subtopico {
  subtopico: string;
}

export interface Topico {
  topico: string;
  subtopicos?: Subtopico[];
}

interface IndexContextType {
  indice: Topico[];
  setIndice: React.Dispatch<React.SetStateAction<Topico[]>>;
  titulo: string;
  setTitulo: React.Dispatch<React.SetStateAction<string>>;
}
// ↑ FIM DAS TIPAGENS ↑

const IndexContext = createContext<IndexContextType | undefined>(undefined);

interface IndexProviderProps {
  children: ReactNode;
  className?: string;
}

export function IndexProvider({ children, className }: IndexProviderProps) {
  const [indice, setIndice] = useState<Topico[]>([]);
  const [titulo, setTitulo] = useState<string>("");

  return (
    <IndexContext.Provider value={{ indice, setIndice, titulo, setTitulo }}>
      <div className={className ?? "[--header-height:calc(--spacing(14))]"}>
        {children}
      </div>
    </IndexContext.Provider>
  );
}

export function useIndex(): IndexContextType {
  const context = useContext(IndexContext);
  if (!context) {
    throw new Error("useIndex must be used within an IndexProvider");
  }
  return context;
}
