"use client"

// ↓ IMPORTAÇÕES ↓
// importações de dependências: 
import Link from "next/link"

// importações de componentes:
import { SearchForm } from "@/components/sidebar/search-form"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle"
import { Logo } from "../logo";

// ↑ FIM DAS IMPORTAÇÕES ↑.

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 flex w-full items-center bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60 border-b">
      <div className="flex h-(--header-height) w-full items-center gap-2 px-4">
        <Logo />

        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb className="hidden sm:block">
          <BreadcrumbList>
            <BreadcrumbItem className="select-none">
              Enciclopédia
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Data Fetching</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <SearchForm className="w-full sm:ml-auto sm:w-auto" />
        <Button asChild variant="outline" className="h-8">
          <Link href="/docs/contribuir">Contribua</Link>
        </Button>
        <Toggle />
      </div>
    </header>
  )
}
