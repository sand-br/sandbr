// importação de dependências:
import * as React from "react";
import Link from "next/link";

// importação de componentes:
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/src/components/ui/sidebar";

// importação de ícones:
import { House } from "lucide-react";

// Definindo o tipo de dados para as props de navegação
interface ItemsDoIndice {
  topico: string;
  url?: string;
  items?: {
    subtopico: string;
    sub_url?: string;
  }[];
}

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  indice: ItemsDoIndice[];
}

function AppSidebar({ indice, ...props }: AppSidebarProps) {
  const montarIndice = indice.map(item => ({
    topico: item.topico,
    url: `#${item.topico.toLowerCase().replace(/\s+/g, '-')}`, // Cria a URL para o tópico
    items: item.items?.map(subitem => ({
      subtopico: subitem.subtopico,
      sub_url: `#${subitem.subtopico.toLowerCase().replace(/\s+/g, '-')}`, // Cria a URL para o sub-tópico
    })),
  }));

  return (
    <Sidebar variant="floating" collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <House className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span>sandbr</span>
                  <span>Enciclopédia</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <h2 className="pl-2 mt-5">Conteúdo desta página</h2>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {montarIndice.map((item) => (
              <SidebarMenuItem key={item.topico}>
                <SidebarMenuButton asChild>
                  <Link href={item.url} className="font-medium" scroll>
                    {item.topico}
                  </Link>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub className="ml-0 border-l-0 px-1.5">
                    {item.items.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.subtopico}>
                        <SidebarMenuSubButton asChild>
                          <Link href={subItem.sub_url} scroll>{subItem.subtopico}</Link>
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

export { type ItemsDoIndice, AppSidebar }
