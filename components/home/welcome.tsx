import Link from "next/link";

import { Button } from "@/components/ui/button";
import { WordRotate } from "@/components/magicui/word-rotate";

import { MoveRight } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

function RenderWordRotate() {
  const palavras = [
    "Brandon Sanderson.",
    "o Cosmere.",
    "os Nascidos da Bruma.",
    "os Radiantes.",
    "Warbreaker.",
    "a Tress.",
    "Executores.",
    "Elantris.",
    "o Hoid.",
    "o Sobrevivente.",
  ];

  return (
    <p className="text-xl tracking-tight text-muted-foreground max-w-md text-left leading-none">
      A enciclopédia brasileira sobre{" "}
      <WordRotate
        words={palavras.sort(() => Math.random() - 0.5)}
        duration={5000}
      />
    </p>
  );
}

function RenderAuxiliaryButtons() {
  return (
    <div className="flex flex-row gap-4">
      <Button size="lg" className="gap-4" variant="outline" asChild>
        <a
          href="https://github.com/sand-br/sandbr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Botão de contribuição que leva ao GitHub"
        >
          Contribua <GitHubLogoIcon className="size-4" />
        </a>
      </Button>
      <Button size="lg" asChild>
        <Link
          href="/#explorar"
          className="gap-4"
          aria-label="Botão que leva à seção de exploração de assuntos."
        >
          Explorar <MoveRight className="size-4" />
        </Link>
      </Button>
    </div>
  );
}

function RenderWelcome() {
  return (
    <div className="flex gap-4 flex-col">
      <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
        bem-vindo(a) à{" "}
        <span className="text-[#e73720] font-averia">sandbr</span>!
      </h1>
      <RenderWordRotate />
      <RenderAuxiliaryButtons />
    </div>
  );
}

export { RenderWelcome };
