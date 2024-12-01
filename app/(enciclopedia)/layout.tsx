// importação de dependências:
import React, { ReactNode } from "react";

// importação de componentes da shadcn:
import { AppSidebar } from "@/src/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/src/components/ui/sidebar";

interface Pages {
  caminho: ReactNode,
  children: ReactNode,
}

export default function Post({ caminho, children }: Pages){
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "19rem",
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <SidebarInset>        
          {children}
      </SidebarInset>
    </SidebarProvider>
  );
};
