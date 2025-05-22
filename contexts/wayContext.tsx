"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface WayContextType {
  categoria: string;
  paginas: string[];
  setCategoria: React.Dispatch<React.SetStateAction<string>>;
  setPaginas: React.Dispatch<React.SetStateAction<string[]>>;
}

const WayContext = createContext<WayContextType | undefined>(undefined);

interface WayProviderProps {
  children: ReactNode;
  className?: string;
}

export function WayProvider({ children, className }: WayProviderProps) {
  const [categoria, setCategoria] = useState("");
  const [paginas, setPaginas] = useState<string[]>([]);

  return (
    <WayContext.Provider value={{ categoria, paginas, setCategoria, setPaginas }}>
      <div className={className ?? ""}>
        {children}
      </div>
    </WayContext.Provider>
  );
}

export function useWay(): WayContextType {
  const context = useContext(WayContext);
  if (!context) {
    throw new Error("useWay deve ser usado junto ao WayProvider");
  }
  return context;
}
