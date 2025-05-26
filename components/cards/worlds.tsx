import { ShootingStars } from "../ui/shooting-stars";
import { StarsBackground } from "../ui/stars-background";

export function Worlds() {
  return (
    <div className="relative rounded-lg border justify-center items-center px-6">
      <div className="flex items-center justify-between py-4">
        <p className="font-semibold">Mundos</p>
      </div>

      <div className="min-w-dvh flex flex-wrap gap-4 border-t py-8">
        <div className="w-[295px] h-[30rem] bg-amber-300">
          Cosmere
        </div>
        <div className="w-[295px] h-[30rem] bg-amber-300">
          Cytoverso
        </div>
        <div className="w-[295px] h-[30rem] bg-amber-300">
          Executores
        </div>
        <div className="w-[295px] h-[30rem] bg-amber-300">
          Solitários
        </div>
      </div>
      <StarsBackground starDensity={0.00060}/>
      <ShootingStars />
    </div>
  );
}
