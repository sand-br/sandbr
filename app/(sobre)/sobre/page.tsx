import { Aqui } from "@/src/components/caminho/aqui";
import { Cabecalho, Conteudo, Post, P, Lista, T1, T2, T3 } from "@/src/components/posts/estrutura";
import { Enlaçar, Ir } from "@/src/components/posts/ligacoes";
import { EmailCopiavel, TextoCopiavel } from "@/src/components/posts/copiavel";

export default function Pagina() {
  const indice = [
    { topico: "Sobre a Sandbr" },
    {topico: "Com o que contribuir?",
      items: [
        {subtopico: "Por que contribuir?"}
      ]
    },
    {topico: "Como contribuir?"},
    {topico: "Veja também"}
  ]
  return (
    <Post indice={indice}>
      <Cabecalho>
        <Aqui pagina="Sobre"/>
      </Cabecalho>

      <Conteudo>
        <T1 texto="Sobre a Sandbr" />
        <P>
          A Sandbr é uma enciclopédia colaborativa e independente dedicada a reunir e organizar informações detalhadas sobre as obras do <Enlaçar destino="/brandon-sanderson/" texto="Brandon Sanderson"/>. Nosso objetivo é criar um espaço acessível e completo para fãs de todos os níveis, desde aqueles que acabaram de descobrir o autor até os que mergulharam profundamente em cada teoria e detalhe escondido.
        </P>
        <P>
          Esta enciclopédia é projeto de fãs, feito por fãs e para fãs. Somos apaixonados pelas histórias criadas por <Enlaçar destino="/brandon-sanderson/" texto="Sanderson"/>, e decidimos construir esta enciclopédia como uma forma de homenagear seu trabalho e facilitar o acesso a informações confiáveis e organizadas sobre suas séries, personagens, mundos e sistemas mágicos.
        </P>
        <P>
          Não somos afiliados ao Brandon Sanderson, à <Ir destino="https://www.dragonsteelbooks.com" texto="Dragonsteel Books"/> ou a qualquer outra editora relacionada, mas tratamos o material com o máximo de respeito e nos esforçamos para garantir a precisão e a qualidade das informações apresentadas.
        </P>

        <T2 texto="Com o que contribuir?"/>
        <P>Você pode nos ajudar:</P>
        <ul className="flex flex-col gap-2 pb-2 list-decimal list-inside">
          <li>Escrevendo e revisando artigos. Encontrou algo incompleto ou quer criar um artigo novo? Compartilhe seus conhecimentos e ajude a expandir o conteúdo da sandbr.</li>
          <li>Sinalizando erros. Caso encontre informações imprecisas ou erros em algum artigo, avise-nos! Buscamos sempre oferecer conteúdo de alta qualidade e corrigir qualquer problema rapidamente.</li>
          <li>Ajudando na manutenção técnica. Se você tem experiência com programação, design ou administração de sites, toda ajuda é bem-vinda para manter a Sandbr funcional e atualizada.
            <ul className="flex flex-col pl-4 list-disc list-inside pt-2">
              <li>
                  Nesse caso, você só precisa ter conhecimentos de programação web. Aqui usamos <Ir destino="https://pt-br.react.dev" texto="React"/> e <Ir destino="https://ui.shadcn.com" texto="shadcn"/> para criar componentes, <Ir destino="https://www.typescriptlang.org" texto="TypeScript"/> como linguagem de programação e <Ir destino="https://tailwindcss.com" texto="TailwindCSS"/> para estilizar; tudo isso rodando sobre o <Ir destino="https://nextjs.org/docs" texto="Next.js"/>.

                  <p className="pt-2">
                    Mas não fique com medo! Com conhecimento básico em front-end e vontade de aprender, podemos te ensinar o que for precisar.
                  </p>
              </li>

            </ul>
          </li>
          <li>Tradução. A comunidade de língua portuguesa ainda carece de muitos conteúdos traduzidos sobre as obras de Sanderson. Se você tem habilidades com tradução, pode ajudar a trazer materiais oficiais, extras e até teorias populares do fandom para enriquecer a enciclopédia.</li>
        </ul>
        <T3 texto="Por que contribuir?" />
        <P>
          Contribuir com a Sandbr é mais do que criar ou editar uma enciclopédia; é ajudar a construir um ponto de encontro para fãs apaixonados. Suas contribuições ajudam a criar um espaço que beneficia todos os leitores que desejam explorar o trabalho do <Enlaçar destino="/brandon-sanderson/" texto="Brandon Sanderson"/>
        </P>
        <T2 texto="Como contribuir?" />
        <P>
          Se você já estiver familiarizado com as contribuições via <Ir destino="https://github.com/" texto="GitHub" />, é só fazer um <em>fork</em> e começar a mandar <em>pull requests</em>. Ou, caso deseje, entre em contato pelo nosso e-mail <EmailCopiavel email="contribuir@sandbr.org"/> com o assunto <TextoCopiavel texto="Colaborar no GitHub" /> e lhe faremos os procedimentos necessários para tornar-lhe um colaborador oficial no GitHub da Sandbr.
        </P>
        <P>
          Caso não esteja familiarizado com as contribuições via GitHub, entre em contato conosco pelo nosso e-mail <EmailCopiavel email="contribuir@sandbr.org"/> com o assunto <TextoCopiavel texto="Colaborar com a Sandbr" />.
        </P>
        <P>
          Juntos, podemos tornar a Sandbr a maior e mais completa referência em língua portuguesa sobre as obras do Brandon Sanderson.
        </P>

        <T2 texto="Veja também"/>
        <Lista>
          <li>
            <Enlaçar destino="/licencas" texto="Licenças desta enciclopédia."/>
          </li>
          <li>
            <Enlaçar destino="/contato" texto="Contato e parcerias."/>
          </li>
        </Lista>
      </Conteudo>


    </Post>
  )
}