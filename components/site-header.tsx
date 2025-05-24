"use client"

// ↓ IMPORTAÇÕES ↓
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/theme-toggle"
import { Logo } from "@/components/logo";

// ↑ FIM DAS IMPORTAÇÕES ↑.

export function SiteHeader() {
  return (
    <header className="sticky h-16 top-0 z-50 flex w-full items-center bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60 border-b mb-4">
      <div className="flex h-(--header-height) w-full items-center gap-2 px-4">
        <Logo />

        <Separator orientation="vertical" className="mr-2 h-4" />
        
        
        <Button variant="outline" className="h-8 w-full sm:ml-auto sm:w-auto">
          Salvar
        </Button>
        <Toggle />
      </div>
    </header>
  )
}
