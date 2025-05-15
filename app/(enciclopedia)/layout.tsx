// ↓ IMPORTAÇÕES ↓
// importações de dependências:
import type { Metadata } from "next";

// importações de componentes:
import { IndexProvider } from "@/contexts/indexContext";
import { SidebarInset, SidebarProvider } from "@/components/sidebar/sidebar";
import { SiteHeader } from "@/components/sidebar/site-header";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import SidebarRightClient from "@/components/sidebar/sidebar-right-client";
import { Footer } from "@/components/site-footer";
// ↑ FIM DAS IMPORTAÇÕES ↑.

export const metadata: Metadata = {
  title: "Enciclopédia",
};
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <IndexProvider>
        <SidebarProvider className="flex flex-col">
          <SiteHeader />
          <div className="flex flex-1">
            <AppSidebar />
            <SidebarInset>
              <main className="flex flex-col py-8 px-8 lg:px-16 min-h-dvh">
                {children}
              </main>
              <Footer />
            </SidebarInset>
            <SidebarRightClient />
          </div>
        </SidebarProvider>
      </IndexProvider>
    </>
  );
}
