import Image from "next/image";
import { Button } from "./ui/button";
import LiberapaySvg from "@/public/liberapay.svg"
import Kofi from "@/public/kofi_symbol.svg"
import { SiGithub } from "@icons-pack/react-simple-icons";

export function Donates() {
  return(
    <div className="flex flex-wrap gap-3 mb-4">
      <Button asChild className="bg-[#f6c915] hover:bg-[#f6c900] text-black">
        <a href="https://liberapay.com/sandbr/donate" target="_blank" rel="noopener noreferrer">
          <Image src={LiberapaySvg} className="size-4" alt="Ícone do Liberapay"/> Doar
        </a>
      </Button>

      <Button asChild className="bg-[#72A5F2] hover:bg-[#72A5F2] text-black">
        <a href="https://liberapay.com/sandbr/donate" target="_blank" rel="noopener noreferrer">
          <Image src={Kofi} className="size-4" alt="Ícone do Liberapay"/> Apoie-me no Ko-fi
        </a>
      </Button>

      <Button asChild>
        <a href="https://github.com/sponsors/sand-br" target="_blank" rel="noopener noreferrer">
          <SiGithub /> GitHub Sponsors
        </a>
      </Button>
    </div>
  );
}
