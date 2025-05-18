import { SiteHeader } from "@/components/site-header";
import { Aviso } from "./aviso";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return(
    <div className="flex flex-col">
      <SiteHeader />
      <div className="flex justify-center shrink-0 gap-4">
        <main className="max-h-[calc(100vh-5rem)] w-2/3 flex flex-col">
          {children}
        </main>
        <Aviso />
      </div>
    </div>
  );
}