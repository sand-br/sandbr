"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface CharacterCardProps {
  href: string;
  url: string;
  personagem: string;
}

function CharacterCard({ href, url, personagem }: CharacterCardProps) {
  return (
    <Link
      className="relative w-40 h-40 overflow-hidden border dark:hover:border-white/30 rounded-lg group/card cursor-pointer flex"
      href={href}
    >
      <Image
        src={url}
        alt={personagem}
        width={160}
        height={160}
        className="absolute z-10"
      />
      <div className="absolute z-40 w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
      
      <div className="text content place-self-end bg-black/30 backdrop-blur-md border border-white/30 shadow-small py-1 px-2 rounded-md ml-2 mb-2 absolute z-50">
        <h4 className="font-bold text-sm text-gray-50">
          {personagem}
        </h4>
      </div>
    </Link>
  );
}

export { type CharacterCardProps, CharacterCard };
