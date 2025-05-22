"use client";

import React from "react";

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "sonner";

import { useWay } from "@/contexts/wayContext";

export function Way() {
  const { categoria, paginas } = useWay();

  const copiar_link = () => {
    const url = window.location.href; // obtém o URL atual
    navigator.clipboard
      .writeText(url)
      .then(() => {
        toast.success("Copiado.");
      })
      .catch((err) => {
        toast.error("Houve um erro ao copiar. Se ele persistir, tente recarregar a página.");
        console.error(err);
      });
  };

  return (
    <Breadcrumb >
      <BreadcrumbList>
        <BreadcrumbItem>{categoria}</BreadcrumbItem>
        {paginas.map((pagina, idx) => {
          const isLast = idx === paginas.length - 1;

          return (
            <React.Fragment key={pagina + idx}>
              <BreadcrumbSeparator />
              {isLast ? (
                 <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger
                      className="cursor-help"
                      onClick={copiar_link}
                    >
                      <BreadcrumbPage>{pagina}</BreadcrumbPage>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="w-40 text-center cursor-help">
                        Parece que você já está aqui. Clique para copiar o link.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ) : (
                <BreadcrumbItem>{pagina}</BreadcrumbItem>
              )}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
