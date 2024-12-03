// importação de dependências:
import React, { ReactNode } from "react";

// importação de componentes da shadcn:
import { SidebarProvider } from "@/src/components/ui/sidebar";

interface Pages {
  children: ReactNode,
}

export default function Post({ children }: Pages){
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "19rem",
        } as React.CSSProperties
      }
    >
      {children}
    </SidebarProvider>
  );
};
