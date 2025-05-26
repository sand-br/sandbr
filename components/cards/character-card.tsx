"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface CharacterCardProps {
  href: string;
  url: string;
  personagem: string;
}

function CharacterCard({ href, url, personagem }: CharacterCardProps) {
  return (
    <Link className="group/card w-40 h-40 overflow-hidden rounded-lg border dark:hover:border-white/30" href={href}>
      <div
        className={cn(
          "cursor-pointer relative card shadow-xl max-w-sm mx-auto flex justify-between w-full h-full bg-cover"
        )}
        style={{
          backgroundImage: `url('${url}')`,
        }}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="text content place-self-end bg-black/30 backdrop-blur-md border border-white/30 shadow-small py-1 px-2 rounded-md ml-2 mb-2">
          <h4 className="font-bold text-sm text-gray-50 relative z-10 ">
            {personagem}
          </h4>
        </div>
      </div>
    </Link>
  );
}

export { type CharacterCardProps, CharacterCard }