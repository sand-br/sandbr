import {
  UniverseCardProps,
  UniversesField,
} from "@/components/home/cards/universes-field";

function RenderUniversesField() {
  const universesData: UniverseCardProps[] = [
    {
      href: "/universo/cosmere",
      src: "https://raw.githubusercontent.com/sand-br/sandbr/refs/heads/main/public/home/universes/cosmere.webp",
      alt: "Cartão do universo cosmere mostrando um mapa estelar em tons de azul com linhas que conectam constelações e estrelas, e figuras flutuantes mostrando o que as constelações representam.",
      title: "Cosmere",
      description:
        "Universo interconectado das séries Nascidos da Bruma, Os relatos da Guerra das Tempestades e livros como Tress e Warbreaker.",
    },
    {
      href: "/universo/cytoverso",
      src: "https://raw.githubusercontent.com/sand-br/sandbr/refs/heads/main/public/home/universes/cytoverso.webp",
      alt: "Cartão do universo Cytoverso com o retrato de uma mulher de perfil (a Spensa, protagonista de Skyward), rodeada por um halo cósmico e nebulosas avermelhadas",
      title: "Cytoverso",
      description:
        "Ambiente dos livros de Skyward e Defending Elysium, focado em exploração espacial.",
    },
    {
      href: "/universo/executores",
      src: "https://raw.githubusercontent.com/sand-br/sandbr/refs/heads/main/public/home/universes/executores.webp",
      alt: "Cartão do universo Executores, apresenta um homem em pé, com chamas e fragmentos escuros ao redor e saindo da mão dele, em um cenário urbano distópico",
      title: "Executores",
      description:
        "Mundo da série Os Executores, onde humanos encaram super-poderosos.",
    },
    {
      href: "/universo/independentes",
      src: "https://raw.githubusercontent.com/sand-br/sandbr/refs/heads/main/public/home/universes/frugal-wizard.webp",
      alt: "Cartão de Obras Independentes mostrando um cavaleiro futurista com elmo pontudo e capa em pose triunfante sobre um robô insetoide, com diversos discos voadores ao fundo em estilo gravura monocromática azul",
      title: "Independentes",
      description:
        "Outras obras do Sanderson.",
    },
  ];

  return <UniversesField universes={universesData} />;
}

export { RenderUniversesField };
