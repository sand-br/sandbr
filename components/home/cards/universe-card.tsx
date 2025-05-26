import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import { MoveRight } from "lucide-react";

interface UniverseCardProps {
  href: string;
  src: StaticImageData | string;
  alt: string;
  title: string;
  description: string;
}

function UniverseCard({ href, src, alt, title, description }: UniverseCardProps ) {
  return (
    <Link href={href} className="relative w-[295px] h-[413px] rounded-2xl overflow-hidden flex cursor-pointer group/meucard border hover:border-white/30">
      <Image
        src={src}
        alt={alt}
        className="absolute aspect-5/7 w-full z-30"
        width={295}
        height={413}
      />

      <div className="absolute self-end px-6 pb-6 hyphens-auto z-50 text-white">
        <h4 className="text-2xl font-semibold group-hover/meucard:text-sandbr">{title}</h4>
        <h5>
          {description}
        </h5>
        <MoveRight className="mt-4 size-6 group-hover/meucard:text-sandbr" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-background/90">
        <span className="sr-only">Vinheta do texto</span>
      </div>

      <div className="absolute min-w-full h-full transition duration-300 group-hover/meucard:bg-black/60 z-40">
        <span className="sr-only">Escurecimento do hover</span>
      </div>
    </Link>
  );
}

export { type UniverseCardProps, UniverseCard };