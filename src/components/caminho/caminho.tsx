// importação de dependências:
import React, { ReactNode } from "react";
import Link from "next/link";


// importação de componentes da shadcn:
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/src/components/ui/breadcrumb";

interface Caminhos {
  children: ReactNode;
}

interface ItemsDoCaminho {
  pronde: string,
  pagina: string,
}

const Caminho: React.FC<Caminhos> = ({ children }) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem className="hidden lg:block">
            <BreadcrumbLink asChild>
                <Link href="/">Enciclopédia</Link>
            </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator className="hidden lg:block"/>

        {children}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

const ItemDoCaminho: React.FC<ItemsDoCaminho> = ({ pronde, pagina }) => {
  return (
    <>
      <BreadcrumbItem className="hidden lg:block">
        <BreadcrumbLink asChild>
            <Link href={pronde} className="estilo_do_item">{pagina}</Link>
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbSeparator className="hidden lg:block"/>
    </>
  );
};



export { Caminho, ItemDoCaminho };