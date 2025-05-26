import { Infos, CopyrightTable } from "../copyright-table";

function By() {
  const creditosImagens: Infos[] = [
    {
      imagem: "Hoid, 'Worldsinger'",
      autor: "Ari Ibarra, Brotherwise Games",
    },
    {
      imagem: "Kelsier",
      autor: "Miranda Meeks, Dragonssteel Entertainment",
    },
    {
      imagem: "Szeth, 'Weep As You Kill'",
      autor: "Ari Ibarra, Brotherwise Games",
    },
    {
      imagem: "Tress e Charlie, 'Na parede baixa do jardim'",
      autor: "Howard Lyon, Dragonssteel Entertainment",
    },
    {
      imagem:
        "Vasher, 'Running through the God King's palace wielding Nightblood'",
      autor: "Esther Schrader",
    },
    {
      imagem: "Vin",
      autor: "Deandra Scicluna",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center max-h-[25rem]">
      <p className="self-start pb-4">Atribuição de créditos:</p>
      <CopyrightTable info={creditosImagens} />
    </div>
  );
}
