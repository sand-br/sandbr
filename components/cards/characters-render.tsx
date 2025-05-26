import {
  CharacterCardProps,
  CharactersField
} from "@/components/cards/characters-field";

function RenderCharactersField() {
  const profilesData: CharacterCardProps[] = [
    {
      href: "/personagem/hoid",
      url: "https://raw.githubusercontent.com/sand-br/sandbr/refs/heads/main/public/profiles/hoid.avif",
      personagem: "Hoid",
    },
    {
      href: "/personagem/kaladin",
      url: "https://raw.githubusercontent.com/sand-br/sandbr/refs/heads/main/public/profiles/kaladin.avif",
      personagem: "Kaladin",
    },
    {
      href: "/personagem/vin",
      url: "https://raw.githubusercontent.com/sand-br/sandbr/refs/heads/main/public/profiles/vin.avif",
      personagem: "Vin",
    },
    {
      href: "/personagem/kelsier",
      url: "https://raw.githubusercontent.com/sand-br/sandbr/refs/heads/main/public/profiles/kelsier.avif",
      personagem: "Kelsier",
    },
    {
      href: "/personagem/sazed",
      url: "https://raw.githubusercontent.com/sand-br/sandbr/refs/heads/main/public/profiles/sazed.avif",
      personagem: "Sazed",
    },
    {
      href: "/personagem/shallan",
      url: "https://raw.githubusercontent.com/sand-br/sandbr/refs/heads/main/public/profiles/shallan.avif",
      personagem: "Shallan Davar",
    },
    {
      href: "/personagem/jasnah",
      url: "https://raw.githubusercontent.com/sand-br/sandbr/refs/heads/main/public/profiles/jasnah.avif",
      personagem: "Jasnah Kholin",
    },
    {
      href: "/personagem/tress",
      url: "https://raw.githubusercontent.com/sand-br/sandbr/refs/heads/main/public/profiles/tress.avif",
      personagem: "Tress",
    },
    {
      href: "/personagem/szeth",
      url: "https://raw.githubusercontent.com/sand-br/sandbr/refs/heads/main/public/profiles/szeth.avif",
      personagem: "Szeth",
    },
    {
      href: "/personagem/dalinar-kholin",
      url: "https://raw.githubusercontent.com/sand-br/sandbr/refs/heads/main/public/profiles/dalinar.avif",
      personagem: "Dalinar Kholin",
    },
    {
      href: "/personagem/sisirinah",
      url: "https://raw.githubusercontent.com/sand-br/sandbr/refs/heads/main/public/profiles/sisirinah.avif",
      personagem: "Siri",
    },
    {
      href: "/personagem/vivenna",
      url: "https://raw.githubusercontent.com/sand-br/sandbr/refs/heads/main/public/profiles/vivenna.avif",
      personagem: "Vivenna",
    },
    {
      href: "/personagem/wax",
      url: "https://raw.githubusercontent.com/sand-br/sandbr/refs/heads/main/public/profiles/wax.avif",
      personagem: "Waxillium Ladrian",
    },
    {
      href: "/personagem/elend",
      url: "https://raw.githubusercontent.com/sand-br/sandbr/refs/heads/main/public/profiles/elend.avif",
      personagem: "Elend Venture",
    },
  ];

  return(
    <CharactersField profiles={profilesData} />
  );
}

export { RenderCharactersField };
