import { SiDiscord, SiGithub, SiInstagram, SiWhatsapp } from "@icons-pack/react-simple-icons";
import { Button } from "./ui/button";
import { AtSign } from "lucide-react";

export function SocialButtons(){
  return(
    <div className="flex gap-2">
      <Button asChild variant="outline" className="hover:text-[#5865F2] size-8">
        <a href="http://instagram.com/sandbr-enc" target="_blank" rel="noopener noreferrer"><SiDiscord /></a>
      </Button>

      <Button asChild variant="outline" className="size-8">
        <a href="mailto:contato@sandbr.org" rel="noopener noreferrer" className="hover:text-cyan-500"><AtSign /></a>
      </Button>

      <Button asChild variant="outline" className="size-8">
        <a href="http://github.com/sand-br" target="_blank" rel="noopener noreferrer"><SiGithub /></a>
      </Button>

      <Button asChild size="icon" variant="outline" className="hover:text-[#FF0069] size-8">
        <a href="http://instagram.com/sandbr-enc" target="_blank" rel="noopener noreferrer"><SiInstagram/></a>
      </Button>

      <Button asChild variant="outline" className="hover:text-[#25D366] size-8">
        <a href="http://" target="_blank" rel="noopener noreferrer"><SiWhatsapp /></a>
      </Button>
    </div>
  )
}