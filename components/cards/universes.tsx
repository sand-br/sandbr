import Image from "next/image";
import { ShootingStars } from "../ui/shooting-stars";
import { StarsBackground } from "../ui/stars-background";

import Cosmere from "@/public/home_imgs/cosmere.avif"
import { MoveRight } from "lucide-react";

export function Worlds() {
  return (
    <div className="relative rounded-lg border justify-center items-center px-6">
      <div className="flex items-center justify-between py-4">
        <p className="font-semibold">Universos</p>
      </div>

      <div className="min-w-dvh flex flex-wrap gap-4 border-t py-8 ">
        <div className="relative w-[295px] h-[413px] rounded-2xl overflow-hidden flex cursor-pointer group/meucard">
          <Image src={Cosmere} alt="Cosmere" className="absolute aspect-5/7 w-full z-10"/>
          
          <div className="absolute self-end z-30 px-6 pb-6 hyphens-auto">
            <p className="text-2xl font-semibold">Cosmere</p>
            <p className="z-30">O universo onde se passam os livros de Os relatos da Guerra das Tempestades, Nascidos da Bruma, Tress, a Garoto do Mar Esmeralda etc.</p>
            <MoveRight className="mt-4 size-6"/>
          </div>
          
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-background/90 z-20"></div>
          
          <div className="absolute min-w-full h-full transition duration-300 group-hover/meucard:bg-black/60 z-10">
        </div>
      </div>


        <div className="w-[295px] h-[30rem] bg-amber-300">
          Cytoverso
        </div>
        <div className="w-[295px] h-[30rem] bg-amber-300">
          Executores
        </div>
        <div className="w-[295px] h-[30rem] bg-amber-300">
          Solitários
        </div>
      </div>
      <StarsBackground starDensity={0.00060}/>
      <ShootingStars />
    </div>
  );
}
