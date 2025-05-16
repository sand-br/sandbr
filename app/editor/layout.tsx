import { SiteHeader } from "@/components/site-header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return(
    <div className="flex flex-col">
      <SiteHeader />
      <div className="flex justify-center shrink-0">
        <main className="min-h-dvh w-2/3 flex flex-col">
          {children}
        </main>
      </div>
    </div>
  );
}