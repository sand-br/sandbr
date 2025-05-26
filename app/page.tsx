// componentes do header: 
import { SpoilerWarning } from "@/components/home/warning";
import { RenderWelcome } from "@/components/home/welcome";
import { RenderMarquee } from "@/components/home/marquee/marquee-render";

// componentes do main:
import { RenderCharactersField } from "@/components/home/cards/characters-render";
import { RenderUniversesField } from "@/components/home/cards/universes-render";

// componentes do footer: 
import { Logo } from "@/components/logo";
import { CopyrightAndLicences } from "@/components/copyright-with-year";
import { SocialButtons } from "@/components/social";
import { Toggle } from "@/components/ui/theme-toggle";
import { MadeWith } from "@/components/made-with";

export const metadata = {
  title: 'Página inicial',
  description: 'O compêndio definitivo sobre Brandon Sanderson, seu Cosmere e todas as suas obras – em Português.',
};



export default function Home() {
  return (
    <section>
      <div className="w-full  border-b">
        <div className="container mx-auto">
          <header className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
            <div className="flex gap-4 flex-col lg:pl-12">
              <SpoilerWarning />
              <RenderWelcome />
            </div>

            <RenderMarquee />
          </header>

          <main className="min-h-dvh mt-8 flex flex-col gap-8" id="explorar">
            <RenderCharactersField />
            <RenderUniversesField />
          </main>

          <footer className="flex border-t py-8">
            <div className="pl-6 pr-6 w-2/5 flex flex-col gap-2 items-start">
              <Logo />
              <CopyrightAndLicences />
              <div className="flex gap-2"><SocialButtons /> <Toggle /></div>
              <MadeWith />
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}