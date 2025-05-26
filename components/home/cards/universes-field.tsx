import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

import { UniverseCardProps, UniverseCard } from "@/components/home/cards/universe-card";

interface UniversesFieldProps {
  universes: UniverseCardProps[];
}

function UniversesField({ universes }: UniversesFieldProps ) {
  const mountCards = universes.map(( universe, index ) => (
    <UniverseCard key={index} href={universe.href} src={universe.src} alt={universe.alt} title={universe.title} description={universe.description} />
  ));

  return (
    <div className="relative rounded-lg border justify-center items-center px-6">
      <p className="font-semibold py-4">Universos</p>

      <div className="min-w-dvh flex flex-wrap gap-4 border-t py-8 ">
        {mountCards}
      </div>

      <StarsBackground starDensity={0.0006} />
      <ShootingStars />
    </div>
  );
};

export { type UniverseCardProps, UniversesField };
