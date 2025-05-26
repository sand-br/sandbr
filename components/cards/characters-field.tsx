"use client";

import Link from "next/link";
import { CharacterCard, CharacterCardProps } from "@/components/cards/character-card";

import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

interface CharactersFieldProps {
  profiles: CharacterCardProps[]
}

function CharactersField({ profiles }: CharactersFieldProps){
  const mountProfiles = profiles.map(( profile, index) => (
    <CharacterCard key={index} href={profile.href} url={profile.url} personagem={profile.personagem} />
  ));

  return(
    <div className="rounded-lg border justify-center items-center px-6">
      <div className="flex items-center justify-between py-4">
        <p className="font-semibold">Principais personagens</p>
        <Button variant="link" asChild>
          <Link href="/personagens">Ver todos <MoveRight className="size-4" /></Link>
        </Button>
      </div>

      <div className="min-w-dvh flex flex-wrap justify-center-safe items-center-safe gap-4 border-t py-8">
        {mountProfiles}
      </div>
    </div>
  )
}

export { type CharacterCardProps, CharactersField };