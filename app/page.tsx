// importação de dependências:
import Image from "next/image";
import Link from "next/link";

// importação de componentes:
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Marquee } from "@/components/magicui/marquee";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { WordRotate } from "@/components/magicui/word-rotate";

// importação de ícones:
import { MoveRight } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

// importação de arquivos:
import Hoid from "@/public/home_imgs/hoid.jpg";
import Ishikk from "@/public/home_imgs/ishikk.jpg";
import Kaladin from "@/public/home_imgs/kaladin.webp";
import Kelsier from "@/public/home_imgs/kelsier.jpg";
import Siri from "@/public/home_imgs/siri.jpg";
import Szeth from "@/public/home_imgs/szeth.jpg";
import Tress from "@/public/home_imgs/tress-e-charlie.jpg";
import Vasher from "@/public/home_imgs/vasher.png";
import Vin from "@/public/home_imgs/vin.jpg";

import { Infos, CopyrightTable } from "@/components/copyright-table";
import { Logo } from "@/components/logo";
import { CopyrightAndLicences } from "@/components/copyright-with-year";
import { SocialButtons } from "@/components/social";
import { FeitoCom } from "@/components/made-with";
import { Toggle } from "@/components/ui/theme-toggle";
import { Characters, Fonte } from "@/components/cards/characters";
import { Worlds } from "@/components/cards/worlds";

export default function Home() {
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

  const creditosImagens: Infos[] = [
    {
      imagem: "Hoid, 'Worldsinger'",
      autor: "Ari Ibarra, Brotherwise Games",
    },
    {
      imagem: "Kelsier",
      autor: "Miranda Meeks, Dragonssteel Entertainment",
    },
    {
      imagem: "Szeth, 'Weep As You Kill'",
      autor: "Ari Ibarra, Brotherwise Games",
    },
    {
      imagem: "Tress e Charlie, 'Na parede baixa do jardim'",
      autor: "Howard Lyon, Dragonssteel Entertainment",
    },
    {
      imagem:
        "Vasher, 'Running through the God King's palace wielding Nightblood'",
      autor: "Esther Schrader",
    },
    {
      imagem: "Vin",
      autor: "Deandra Scicluna",
    },
    
  ];

  const dadosDosPerfis: Fonte[] = [
    {
      href: "/personagem/hoid",
      url: "https://raw.githubusercontent.com/sand-br/sandbr/refs/heads/main/public/profiles/hoid.jpg",
      personagem: "Hoid"
    },
    {
      href: "/personagem/kaladin",
      url: "https://raw.githubusercontent.com/sand-br/sandbr/refs/heads/main/public/profiles/kaladin.jpg",
      personagem: "Kaladin"
    },
    {
      href: "/personagem/vin",
      url: "https://raw.githubusercontent.com/sand-br/sandbr/refs/heads/main/public/profiles/vin.jpg",
      personagem: "Vin"
    },
    {
      href: "/personagem/kelsier",
      url: "https://raw.githubusercontent.com/sand-br/sandbr/refs/heads/main/public/profiles/kelsier.jpg",
      personagem: "Kelsier"
    },
    {
      href: "/personagem/sazed",
      url: "https://raw.githubusercontent.com/sand-br/sandbr/refs/heads/main/public/profiles/sazed.jpg",
      personagem: "Sazed"
    },
    {
      href: "/personagem/shallan",
      url: "https://raw.githubusercontent.com/sand-br/sandbr/refs/heads/main/public/profiles/shallan.jpg",
      personagem: "Shallan Davar"
    },
    {
      href: "/personagem/jasnah",
      url: "https://raw.githubusercontent.com/sand-br/sandbr/refs/heads/main/public/profiles/jasnah.jpg",
      personagem: "Jasnah Kholin"
    },
    {
      href: "/personagem/tress",
      url: "https://raw.githubusercontent.com/sand-br/sandbr/refs/heads/main/public/profiles/tress.jpg",
      personagem: "Tress"
    },
    {
      href: "/personagem/szeth",
      url: "https://raw.githubusercontent.com/sand-br/sandbr/refs/heads/main/public/profiles/szeth.jpg",
      personagem: "Szeth"
    },
    {
      href: "/personagem/dalinar-kholin",
      url: "https://raw.githubusercontent.com/sand-br/sandbr/refs/heads/main/public/profiles/dalinar.jpg",
      personagem: "Dalinar Kholin"
    },
    {
      href: "/personagem/sisirinah",
      url: "https://raw.githubusercontent.com/sand-br/sandbr/refs/heads/main/public/profiles/sisirinah.jpg",
      personagem: "Siri"
    },
    {
      href: "/personagem/vivenna",
      url: "https://raw.githubusercontent.com/sand-br/sandbr/refs/heads/main/public/profiles/vivenna.jpg",
      personagem: "Vivenna"
    },
    {
      href: "/personagem/wax",
      url: "https://raw.githubusercontent.com/sand-br/sandbr/refs/heads/main/public/profiles/wax.jpg",
      personagem: "Waxillium Ladrian"
    },
    {
      href: "/personagem/elend",
      url: "https://raw.githubusercontent.com/sand-br/sandbr/refs/heads/main/public/profiles/elend.jpg",
      personagem: "Elend Venture"
    },
  ];

  return (
    <section>
      <div className="w-full  border-b">
        <div className="container mx-auto">
          <header className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
            {" "}
            {/* esta div comporta os elementos visuais principais do início */}
            <div className="flex gap-4 flex-col lg:pl-12">
              {" "}
              {/* esta div comporta a saudação de boas-vindas e seus elementos complementares*/}
              <div>
                {" "}
                {/* esta é a div que contém o badge e o drawer de aviso de spoilers */}
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className="cursor-help hidden lg:block">
                      <Badge variant="destructive">Alerta de spoilers!</Badge>
                    </TooltipTrigger>
                    <TooltipContent className="w-80 border hyphens-auto ml-4">
                      <p>
                        O conteúdo desta enciclopédia contém revelações
                        significativas sobre todas as obras do Brandon
                        Sanderson. Leia por sua conta e risco.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <Drawer>
                  <DrawerTrigger className="lg:hidden">
                    <Badge variant="destructive">Alerta de spoilers!</Badge>
                  </DrawerTrigger>
                  <DrawerContent className="mb-10">
                    <p className="m-8 hyphens-auto text-center">
                      O conteúdo desta enciclopédia contém revelações
                      significativas sobre todas as obras do Brandon Sanderson.
                      Leia por sua conta e risco.
                    </p>
                    <DrawerClose>
                      <Button>Estou ciente</Button>
                    </DrawerClose>
                  </DrawerContent>
                </Drawer>
              </div>
              <div className="flex gap-4 flex-col">
                <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
                  bem-vindo(a) à{" "}
                  <span className="text-[#e73720] font-averia">sandbr</span>!
                </h1>
                <p className="text-xl tracking-tight text-muted-foreground max-w-md text-left leading-none">
                  A enciclopédia brasileira sobre{" "}
                  <WordRotate
                    words={palavras.sort(() => Math.random() - 0.5)}
                    duration={5000}
                  />
                </p>
              </div>
              <div className="flex flex-row gap-4">
                <Button size="lg" className="gap-4" variant="outline" asChild>
                  <a
                    href="https://github.com/sand-br/sandbr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contribua <GitHubLogoIcon className="size-4" />
                  </a>
                </Button>
                <Button size="lg" asChild>
                  <Link href="/#explorar" className="gap-4">
                    Explorar <MoveRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative flex max-h-dvh items-center justify-center overflow-hidden">
              {" "}
              {/* esta div comporta o marquee de imagens */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
                <Marquee vertical pauseOnHover={true} className="max-h-dvh">
                  <Image
                    src={Hoid}
                    alt="Kelsier"
                    className="rounded-lg object-cover"
                    width={300}
                    height={300}
                  />
                  <Image
                    src={Vin}
                    alt="Vin"
                    className="rounded-lg object-cover"
                    width={300}
                    height={300}
                  />
                  <Image
                    src={Siri}
                    alt="Siri"
                    className="rounded-lg object-cover aspect-square"
                    width={300}
                  />
                  <Image
                    src={Kaladin}
                    alt="Kaladin"
                    className="rounded-lg object-cover"
                    width={300}
                    height={300}
                  />
                  <Image
                    src={Kelsier}
                    alt="Kelsier"
                    className="rounded-lg object-cover"
                    width={300}
                    height={300}
                  />
                </Marquee>
                <Marquee
                  vertical
                  pauseOnHover={true}
                  reverse
                  className="max-h-dvh"
                >
                  <Image
                    src={Ishikk}
                    alt="Kelsier"
                    className="rounded-lg object-cover aspect-video"
                    width={300}
                  />
                  <Image
                    src={Tress}
                    alt="Tress"
                    className="rounded-lg object-cover"
                    width={300}
                    height={300}
                  />
                  <Image
                    src={Szeth}
                    alt="Szeth"
                    className="rounded-lg object-cover"
                    width={300}
                    height={300}
                  />
                  <Image
                    src={Vasher}
                    alt="Vasher"
                    className="rounded-lg object-cover"
                    width={300}
                    height={300}
                  />
                </Marquee>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
            </div>
          </header>

          <main className="min-h-dvh mt-8 flex flex-col gap-8" id="explorar">
            <Characters perfil={dadosDosPerfis}/>
            <Worlds />
          </main>

          <footer className="flex border-t py-8">
            <div className="pl-6 pr-6 w-2/5 flex flex-col gap-2 items-start">
              <Logo />
              <CopyrightAndLicences />
              <div className="flex gap-2"><SocialButtons /> <Toggle /></div>
              <FeitoCom />
            </div>
            <div className="flex flex-col items-center justify-center max-h-[25rem]">
              <p className="self-start pb-4">Atribuição de créditos:</p>
              <CopyrightTable info={creditosImagens} />
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}
