"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface ContentCardProps {
  href: string;
  url: string;
  personagem: string;
}

export function ContentCard({ href, url, personagem }: ContentCardProps) {
  return (
    <Link className="group/card w-40 h-40 overflow-hidden" href={href}>
      <div
        className={cn(
          "overflow-hidden cursor-pointer relative card rounded-lg shadow-xl max-w-sm mx-auto flex justify-between w-full h-full bg-cover"
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