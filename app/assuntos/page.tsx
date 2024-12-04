// importação de dependências:
import React from "react";
import Image from "next/image";

// importação de componentes:
import { Button } from "@/src/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from "@/src/components/ui/dialog-edited"
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

// importação de ícones:
import { ArrowDownToLine, X } from "lucide-react";

export default function Page() {
  return (
    <Dialog>
      <DialogTrigger className="m-10" asChild><Button size="lg">Abrir</Button></DialogTrigger>

      <DialogContent className="w-full h-full flex flex-col gap-0 focus:outline-none focus:ring-transparent focus:border-none">
        <header className="sticky top-0 w-full flex items-center px-5 justify-between bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b z-50">
          <VisuallyHidden.Root><DialogTitle>Imagem aberta.</DialogTitle></VisuallyHidden.Root>
          <p className="h-16 flex items-center">Teste de título</p>

          <div className="flex gap-3 items-center h-16">
            <Button variant="outline" size="icon"><ArrowDownToLine /></Button>
            <DialogClose asChild><Button variant="outline" size="icon"><X /></Button></DialogClose>
          </div>
        </header>

        <main className="relative flex-grow flex justify-center items-center overflow-hidden">
          <Image
            className="max-w-full max-h-full object-contain"
            src="https://raw.githubusercontent.com/sand-br/sandbr/refs/heads/main/public/images/testes/flores-de-cereja.jpg"
            alt="teste"
            fill
          />
        </main>
      </DialogContent>
    </Dialog>
  );
}