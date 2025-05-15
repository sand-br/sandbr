"use client";

// ↓ IMPORTAÇÕES ↓
// importações de dependências:
import React from "react";
import Link from "next/link";

// importação de componentes:
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/sidebar/sidebar";

// importações de contextos:
import { useIndex, Topico } from "@/contexts/indexContext";
// ↑ FIM DAS IMPORTAÇÕES ↑

export function SidebarRight() {
  const { indice, titulo, ...props } = useIndex();

  const montarIndice = indice.map((item: Topico) => ({
    topico: item.topico,
    url: `#${item.topico.toLowerCase().replace(/\s+/g, "-")}`,
    items: item.subtopicos?.map((sub) => ({
      subtopico: sub.subtopico,
      sub_url: `#${sub.subtopico.toLowerCase().replace(/\s+/g, "-")}`,
    })),
  }));

  return (
    <Sidebar
      collapsible="none"
      className="sticky top-(--header-height) h-[calc(100svh-var(--header-height))]! hidden lg:flex border-l"
      {...props}
    >
      <SidebarContent>
        <SidebarGroup>
          <SidebarHeader className="font-semibold">Nesta página</SidebarHeader>
          <SidebarMenu>
            <SidebarHeader>
              <Link href={`#${titulo.toLowerCase().replace(/\s+/g, "-")}`} scroll>
                {titulo}
              </Link>
            </SidebarHeader>
            {montarIndice.map((item) => (
              <SidebarMenuItem key={item.topico}>
                <SidebarMenuButton asChild>
                  <Link href={item.url} className="font-medium" scroll>
                    {item.topico}
                  </Link>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub className="ml-2 border-l-0 px-1.5">
                    {item.items.map((sub) => (
                      <SidebarMenuSubItem key={sub.subtopico}>
                        <SidebarMenuSubButton asChild>
                          <Link href={sub.sub_url} scroll>
                            {sub.subtopico}
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}