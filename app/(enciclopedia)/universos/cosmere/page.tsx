// importação de dependências:

// importação de componentes:
import { Aqui } from "@/src/components/caminho/aqui";
import { ItemDoCaminho } from "@/src/components/caminho/caminho";
import { Post, Cabecalho, Conteudo, Topico, P, Lista, T1, T2, T3 } from "@/src/components/posts/estrutura";
import { Citar, Discorrer, Significado } from "@/src/components/posts/destaques";
import { Enlaçar, Listar, Mencionar, CriarReferencia } from "@/src/components/posts/ligacoes";
import { ContainerDeImagem, ImagemTematica } from "@/src/components/posts/imagens";

export default function Page() {
  const id_props = "scroll-mt-[76px]";
  const navData = [
    {
      topico: "O Cosmere",
    },
    {
      topico: "Reinos do Cosmere",
      items: [
        { subtopico: "Reino Físico" },
        { subtopico: "Reino Cognitivo" },
        { subtopico: "Reino Espiritual" },
      ],
    },
    // Outros itens...
  ];

  return (
    <Post indice={navData}>
      <Cabecalho>
        <ItemDoCaminho pronde="/universos" pagina="Universos" />
        <Aqui pagina="Cosmere" />
      </Cabecalho>

      <Conteudo>
        <T1 texto="O Cosmere" />
          <Citar citacao="Você se deparou com algo muito, muito maior do que você, sua política ou seu pequeno planeta.">- <Mencionar quem="Khriss" /> para <Mencionar quem="Kelsier" />.</Citar>
        <div>
          <div className="float-right my-2">
            <ContainerDeImagem
              src="https://raw.githubusercontent.com/sand-br/sandbr/refs/heads/main/public/images/cosmere/constelacoes_da_cosmere.jpg"
              artista="Isaac Stewart"
              link_do_artista="https://x.com/izykstewart"
              descricao="Mapa estelar do Cosmere."
            >
            </ContainerDeImagem>
          </div>
          <P>
            O Cosmere é um universo fictício compartilhado, criado por{" "} <Enlaçar destino="/brandon-sanderson" texto="Brandon Sanderson" />, que serve como cenário para muitas de suas obras literárias.As histórias ambientadas no Cosmere estão interligadas por uma <Significado palavra="cosmologia" significado="Isto é, por uma mesma origem, estrutura e evolução do universo."/> comum e por regras consistentes que governam os sistemas de magia. Além disso, certos personagens e elementos narrativos transitam entre os diferente mundos do cosmere ou aparecem em
            mais de um deles.
          </P>
          <P>
            Apesar dessas conexões, Sanderson enfatiza que não é necessário
            compreender toda a cosmologia para ler, entender e apreciar os
            livros ambientados nesse universo.
          </P>
          <P>
            Atualmente, o Cosmere abrange as seguintes sagas literárias:
          </P>
          <Lista>
            <li>
              <Listar qual="Dragonsteel" /> (Dragão de Aço) - Não lançado.
            </li>
            <li>
              <Listar qual="Elantris" />.
            </li>
            <li>
              <Listar qual="Nascidos da Bruma" />.
            </li>
            <li>
              <Listar qual="Os relatos da Guerra das Tempestades" />.
            </li>
          </Lista>
          <P>Os livros autônomos:</P>
          <Lista>
            <li>
              <Listar qual="Warbreaker - O alento dos deuses" />.
            </li>
            <li>
              <Listar qual="Tress, a Garota do Mar Esmeralda" />.
            </li>
            <li>
              <Listar qual="Yumi and the Nightmare Painter" /> - Não
              traduzido.
            </li>
            <li>
              <Listar qual="The Sunlit Man" /> - Não traduzido.
            </li>
            <li>
              <Listar qual="Isles of the Emberdark" /> - Não traduzido.
            </li>
          </Lista>
          <P>E a novela gráfica:</P>
          <Lista>
            <li>
              <Listar qual="White Sand" /> - Não traduzida.
            </li>
          </Lista>
        </div>

        <div>
          <div className="float-left max-w-[220px] mb-2">
            <ImagemTematica
              claro="https://raw.githubusercontent.com/sand-br/sandbr/refs/heads/main/public/images/cosmere/simbolo_da_cosmere_p.svg"
              escuro="https://raw.githubusercontent.com/sand-br/sandbr/refs/heads/main/public/images/cosmere/simbolo_da_cosmere_b.svg"
              artista="Isaac Stewart"
              link_do_artista="https://x.com/izykstewart"
              descricao="Símbolo (logo) do Cosmere."
            />
          </div>

          <P>
            A <Significado palavra="cosmogonia" significado="Isto é, a teoria sobre a origem e evolução do universo." /> do Cosmere começa com <Enlaçar destino="/adonalsium" texto="Adonalsium" />, descrito como uma força ou entidade primordial que pode ser comparada a um “deus original”. Sua verdadeira natureza é envolta em mistério; ainda não se sabe ao certo se Adonalsium era uma consciência, uma energia divina ou algo completamente diferente.
          </P>

          <P>
            Em um evento conhecido como a{" "}
            <Enlaçar
              destino="/eventos/ruptura-de-adonalsium"
              texto="Ruptura de Adonalsium"
            />
            , essa entidade foi despedaçada em dezesseis partes, chamadas de{" "}
            <Enlaçar
              destino="/conceitos/fractais-de-adonalsium"
              texto="Fractais"
            />
            . cada fractal representa um aspecto específico do que era
            Adonalsium, e carregam um enorme poder.
          </P>

          <P>
            Após a Ruptura, os Fractais se ligaram a indivíduos que
            assumiram esses fragmentos de poder, transformando-se em uma
            espécie de “deuses menores” no Cosmere
          </P>

          <P>
            Esses novos portadores do poder de Adonalsium eventualmente
            deixaram seu planeta natal e migraram para diferentes mundos
            dentro do Cosmere. Em cada planeta, os Fractais interagiram com
            as características únicas do local, dando origem a formas
            distintas de magia. Essa interação entre o poder dos Fractais e
            os ambientes moldou a realidade de cada mundo e influenciou
            profundamente a vida e a cultura de seus habitantes.
          </P>
        </div>

        <T2 texto="Reinos do Cosmere"/>
          <Citar citacao="Todas as coisas existem em três reinos, Gaotona. Físico, Cognitivo e Espiritual. O Reino Físico é o que sentimos, o que temos diante de nós. O Reino Cognitivo é como vemos um objeto e como esse objeto se vê. O Reino Espiritual contém a alma do objeto, sua essência, bem como as formas pelas quias está conectado às coisas e às pessoas ao seu redor.">- <Mencionar quem="Shai"/> para <Mencionar quem="Gaotona"/>.</Citar>
        <P>
          No Cosmere, toda existência é dividida em três reinos fundamentais
          que coexistem e interagem entre si: o <Enlaçar destino="/reinos/reino-fisico" texto="Reino Físico" />, o <Enlaçar destino="/reinos/reino-cognitivo" texto="Reino Cognitivo" /> e o <Enlaçar destino="/reinos/reino-espiritual" texto="Reino Espiritual" />. Segundo Sanderson, esses reinos foram estabelecidos desde o início do universo e são a base para a compreensão da realidade e da magia nos mundos do Cosmere.
        </P>
        <P>
          O Reino Físico é o que é percebido como o mundo material, onde os eventos tangíveis acontecem. o Reino Cognitivo reflete pensamentos, ideias e percepções, funcionando quase como um espelho do mundo físico, mas moldado pelas crenças e consciências. Já o Reino Espiritual contém as essências e ideais perfeitos de tudo, servindo como uma matriz que define o que cada coisa ou pessoa é em sua forma mais pura.
        </P>
        <P>
          A conexão entre os reinos se manifesta de forma mais evidente no ciclo da vida e da morte. No Cosmere, quando alguém morre, sua essência não desaparece imediatamente. Uma <Enlaçar destino="/conceitos/sombra-cognitiva" texto="Sombra Cognitiva" /> surge no Reino Cognitivo, carregando a percepção e os traços dessa pessoa. Para a maioria dos indivíduos, essa sombra é efêmera e logo segue para o <Enlaçar destino="/lugares/alem" texto="Além" />, enquanto sua <Enlaçar destino="/conceitos/investidura" texto="Investidura" /> (a energia espiritual que conecta todas as coisas no Cosmere) retorna ao Reino Espiritual.
        </P>
        <P>
          Entretanto, há exceções. Pessoas com maior quantidade de Investidura em vida podem permanecer no Reino Cognitivo por mais tempo antes de serem atraídas para o Além. E ainda mais excepcionais são os Fractários — aqueles que carregaram parte do poder de um Fractal. Esses indivíduos têm uma ligação tão profunda com a Investidura que podem resistir indefinidamente ao chamado do Além, escolhendo se desejam ou não <em>atravessar</em>
        </P>
        <P>
          E enquanto a passagem para o Além não acontece, é possível reverter a morte em alguns casos. Por meio de magia, o corpo físico pode ser curado ou infundido com Investidura suficiente para restaurar a vida, ou então só para transformar o morto em uma Sombra Cognitiva duradoura. Contudo, certas mortes são irreversíveis.Aaqueles mortos pela <Enlaçar destino="/objetos/espadas-fractais" texto="espada fractal" /> <Enlaçar destino="/objetos/sangue-noturno" texto="Sangue Noturno" />, pela{" "} <Enlaçar destino="/conceitos/anti-investidura" texto="Anti-Investidura" />, ou consumidos pelo <Enlaçar destino="/seres/esprenos" texto="espreno" /> <Enlaçar destino="/seres/yelig-nar" texto="Yelig-nar" /> têm suas almas completamente destruídas, impossibilitando qualquer retorno.
        </P>
        <P>
          Ademais, como a cura mágica no Cosmere funciona conectando as partes de alguém que estão <em>dispersas</em> nos reinos; ela acaba sendo limitada pela percepção de si que foi deixada no <Enlaçar destino="/reinos/reino-cognitivo" texto="Reino Cognitivo" />. Isto é, a forma como a pessoa se percebe influencia diretamente o processo de cura. Se alguém aceita uma característica como parte de si mesmo (como uma cicatriz ou deficiência), essa percepção é projetada no Reino Cognitivo, impedindo a restauração total segundo a forma perfeita e ideal que existe no <Enlaçar destino="/reinos/reino-espiritual" texto="Reino Espiritual"/>.
        </P>

          <T3 texto="Reino Físico"/>
            <Discorrer destino="/reinos/reino-fisico/" assunto="o Reino Físico" />
          <P>
            O Reino Físico do Cosmere é formado de partículas fundamentais conhecidas como e segue as leis comuns da física, a não ser quando a influência e/ou interferência de algum dos outros Reinos as modifica.
          </P>
          <P>
            O Reino Físico no Cosmere é o plano da existência que percebemos diretamente, formado por partículas fundamentais chamadas <Enlaçar destino="/materiais/axi" texto="axi" />. Essas partículas compõem toda a matéria e energia no Cosmere. O Reino Físico segue as leis comuns da física — exceto quando sofre influência ou interferência de um dos outros reinos ( <Enlaçar destino="/reinos/reino-cognitivo" texto="Cognitivo" /> ou <Enlaçar destino="/reinos/reino-espiritual" texto="Espiritual" />), o que pode alterar sua dinâmica natural.
          </P>
          <P>
            Pelo que sabemos atualmente, no Reino Físico, o Cosmere é um aglomerado estelar composto por aproximadamente 50 a 100 estrelas. Dentro dele, estão dezesseis sistemas planetários conhecidos, que abrigam um total de dezenove planetas notáveis, além de diversos outros objetos celestes, como planetas anões, luas, constelações etc.
          </P>
          <P>
            Embora o Cosmere seja vasto, ele não é ilimitado. Sabe-se que houve tentativas de ultrapassar os limites físicos do aglomerado estelar, mas o resultado dessas empreitadas permanece um mistério.
          </P>


          <T3 texto="Reino Cognitivo" />
            <Discorrer destino="/reinos/reino-cognitivo" assunto="o Reino Cognitivo" />
          <P>
            O Reino Cognitivo é, em essência, uma versão espelhada do Reino Físico, mas com diferenças marcantes. Ele é conhecido como o Reino do Pensamento, e é moldado diretamente pela percepção coletiva e as ideias predominantes dos habitantes de um mundo, influenciando sua aparência e estrutura ao espelhar o Reino Físico.
          </P>
          <P>
            O Reino Cognitivo também é influciado por o quanto as pessoas de um mundo pensam em conceitos do Reino Físico. Por exemplo, no Reino Cognitivo, o espaço sideral é extremamente pequeno, já que as pessoas raramente pensam no vasto espaço entre os planetas.
          </P>
          <P>
            Algumas entidades existem naturalmente no Reino Cognitivo ou são nativas dele, como os <Enlaçar destino="/seres/esprenos" texto="esprenos" />, que personificam pensamentos, emoções e características naturais, e as sombras cognitivas, que são remanescentes de seres que já viveram no Reino Físico.
          </P>
          <P>
            O Reino Cognitivo é quase como uma versão do Reino Físico com diferenças bem marcadas. Por definição, o Reino Cognitivo é o Reino do pensamento e, assim sendo, ele é significativamente afetado pela forma como as pessoas imaginam e percebem as ideias sobre seu mundo e o universo imediatamente a sua volta.
          </P>
          <P>
            Por exemplo, o espaço sideral é significativamente pequeno no Reino Cognitivo, porque as pessoas não passam muito tempo pensando no espaço entre os planetas.
          </P>
          <P>
            Há também algumas entidades que são nativas do Reino Cognitivo ou que existem naturalmente nele, como é o caso dos <Enlaçar destino="/seres/esprenos" texto="esprenos" />, que personificam pensamentos, emoções e características naturais; e das <Enlaçar destino="/conceitos/sombra-cognitiva" texto="Sombras Cognitivas" />.
          </P>
          <P>
            A aparência do Reino Cognitivo ao redor de cada planeta tende a refletir suas características únicas. Por exemplo:
          </P>
          <Lista>
            <li>
              O Reino Cognitivo de <Enlaçar destino="/mundos/scadrial" texto="Scadrial" /> (planeta de <Enlaçar destino="/livros/nascidos-da-bruma" texto="Nascidos da Bruma" />) é composto por névoa/bruma.
            </li>

            <li>
              Em <Enlaçar destino="/mundos/roshar" texto="Roshar" />(planeta de <Enlaçar destino="/livros/os-relatos-da-guerra-das-tempestades/" texto="Os relatos da Guerra das Tempestades" />), ele se manifesta como esferas brilhantes
            </li>
          </Lista>
          <P>
            Outra peculiaridade do Reino Cognitivo é a inversão entre terra e água. No Reino Cognitivo, as terras firmes do Físico se tornam líquidos navegáveis, enquanto os corpos de água no Físico se tornam massas sólidas. Essa inversão cria um desafio para seres físicos que entram no Reino Cognitivo, pois podem se afogar nos líquidos que o compõem. Por outro lado, entidades cognitivas atravessam essas regiões sem dificuldades.
          </P>

          <T3 texto="Reino Espiritual"/>
            <Discorrer destino="/reinos/reino-espiritual" assunto="o Reino Espiritual" />
          <P>
            No Cosmere, a Intenção é uma propriedade espiritual que representa a vontade ou propósito essencial de uma pessoa ou entidade. Ela não é algo esporádico, acidental ou fortuito; se a Intenção é necessária para realizar algo, a pessoa que tenta fazê-lo deve não apenas executar a ação, mas também ter a intenção deliberada de realizá-la. Muitas magias dos mundos de Brandon Sanderson dependem dessa característica, exigindo que o usuário aja conscientemente com Intenção para ativar ou manipular a Investidura.
          </P>
          <P>
            O Reino Espiritual, diferente dos outros dois reinos do Cosmere, não é exatamente um lugar físico ou tangível. Ele existe além do espaço e do tempo, transcendendo as limitações da realidade perceptível. Brandon Sanderson o descreve como um reino de conceitos e essências.
          </P>
          <P>Os conceitos fundamentais do Reino Espiritual incluem:</P>
          <ul className="list-decimal list-inside flex flex-col gap-2">
            <li id="intenção" className={id_props}><Enlaçar destino="/conceitos/intencao" texto="Intenção" />:
              <div className="flex flex-col">
                <P>
                  Entidades de Investidura, como os <Enlaçar destino="/seres/esprenos" texto="esprenos" />, as <Enlaçar destino="/conceitos/sombra-cognitiva" texto="Sombras Cognitivas" /> e até os Fractários, possuem uma Intenção intrínseca, que reflete o propósito fundamental da Investidura de que são compostos. Com o passar do tempo, essas entidades tendem a se alinhar tão fortemente à sua Intenção que se tornam incapazes de agir de forma contrária a ela.
                </P>

                <P>
                  Um exemplo extremo é <Enlaçar destino="/personagens/ati" texto="Ati" />, o portador original do Fractal <Enlaçar destino="/fractais/ruina" texto="Ruína" />. Inicialmente, Ati era descrito como gentil e generoso, mas, ao longo do tempo, foi completamente consumido pela Intenção do Fractal Ruína. Essa transformação o levou a desejar a destruição total de <Enlaçar destino="/mundos/scadrial" texto="Scadrial" />, pois ele acreditava que a ruína era uma parte essencial do ciclo natural do Cosmere.
                </P>
              </div>
            </li>

            <li id="identidade" className={id_props}><Enlaçar destino="/conceitos/identidade" texto="Identidade" />:
              <div className="flex flex-col">
                <P>
                  No Cosmere, a Identidade é uma propriedade espiritual que define o que uma pessoa ou objeto essencialmente é. Ela funciona como uma espécie de fechadura e chave nas interações com a Investidura, sendo fundamental para as <Enlaçar destino="/objetos/mentes-de-metal" texto="Mentes de metal" /> da <Enlaçar destino="/sistemas-de-magia/feruquemia" texto="Feruquemia" />. Em condições normais, um feruquemista só pode acessar atributos armazenados por ele mesmo, já que a Identidade de quem armazenou deve corresponder à Identidade de quem tenta recuperar.
                </P>

                <P>
                  A Identidade é intrinsecamente conectada ao conceito de <Enlaçar destino="/conceitos/teia-espiritual" texto="Teia Espiritual" />, que pode ser vista como um <em>DNA espiritual</em>. Embora as Teias Espirituais ainda não tenham sido completamente explicadas, sabe-se que elas:
                </P>

                <Lista>
                  <li>
                    Contêm informações detalhadas sobre a Investidura associada a uma pessoa ou objeto.
                  </li>
                  <li>
                    São, de certa forma, quantificáveis e podem ser lidas ou manipuladas por aqueles que possuem habilidades específicas para interagir com o Reino Espiritual.
                  </li>
                </Lista>

                <P>
                  Além de definir quem ou o que algo é, a Identidade também desempenha um papel na Conexão, armazenando vínculos entre pessoas, objetos e até conceitos abstratos. Esses vínculos espirituais têm implicações tanto no funcionamento das magias no Cosmere quanto nas interações entre os Reinos.
                </P>
              </div>
            </li>

            <li id="conexão" className={id_props}><Enlaçar destino="/conceitos/conexao" texto="Conexão" />
              <div className="flex flex-col">
                <P>
                  A Conexão é uma propriedade espiritual que representa e armazena os vínculos espirituais entre diferentes entidades no Cosmere, como seres vivos, locais, itens e até conceitos abstratos. Esses vínculos transcendem o Reino Físico e têm implicações práticas e mágicas.
                </P>

                <P>
                  Por exemplo, é possível estabelecer uma Conexão entre uma pessoa e uma região, permitindo que ela fale instantaneamente o idioma local, como se fosse um falante nativo. Essa aplicação é um dos exemplos mais conhecidos da manipulação de Conexões no Cosmere.
                </P>

                <P>
                  A Conexão também desempenha um papel fundamental no funcionamento dos Fractais. Para que alguém assuma o poder de um Fractal após a morte de seu Portador, essa pessoa precisa estar Conectada ao Fractal de forma significativa.
                </P>

                <P>
                  Assim como outras propriedades espirituais, a Conexão é quantificável e pode ser manipulada por meio de <Enlaçar destino="/conceitos/artes-investidas" texto="Artes Investidas" /> ou outras formas de interação com a Investidura. Embora Sanderson tenha mencionado que a Conexão pode ser alterada artificialmente, o método exato para fazê-lo ainda não foi explicado.
                </P>
              </div>
            </li>

            <li id="sorte" className={id_props}><Enlaçar destino="/conceitos/sorte" texto="Sorte" />
              <div className="flex flex-col">
                <P>
                  No Cosmere, a Sorte é uma propriedade espiritual ligada à boa fortuna, à capacidade de prever ou visualizar eventos futuros e à percepção de possibilidades futuras. Essa propriedade é explorada de diversas formas nos mundos criados por Sanderson, especialmente através da manipulação da Investidura.
                </P>

                <P>
                  Um exemplo icônico de Sorte em ação são as sombras de <Enlaçar destino="/materiais/atium" texto="atium" /> em Nascidos da Bruma. Quando um usuário consome atium, ele pode prever o futuro imediato, visualizando as possíveis ações de seus oponentes em combate. Esse é um uso direto de Sorte para antecipar eventos de curto prazo.
                </P>

                <P>
                  Embora o uso de Sorte para prever o futuro imediato seja relativamente eficiente, tentar visualizar eventos mais distantes ou em outros locais é significativamente mais complicado. Esse tipo de previsão frequentemente resulta em visões imprecisas ou subjetivas, limitadas pela complexidade do futuro e pelas inúmeras variáveis envolvidas.
                </P>
              </div>
            </li>
          </ul>
          <P>
            Além disso, no Reino Espiritual, tudo existe em sua forma ideal. Isso significa que qualquer coisa ou ser no Cosmere possui uma versão perfeita e completa representada neste reino, livre de imperfeições físicas ou distorções cognitivas. É essa versão ideal que muitas vezes serve como base para magias de cura e restauração nos mundos do Cosmere.
          </P>

        <T2 texto="Investidura"/>
          <Citar citacao="Sua investidura está ligada à sua alma; de fato, poderia ser uma parte da sua alma, assim como seu sangue é parte do seu corpo.">
            <Mencionar quem="VenDell" /> para <Mencionar quem="Waxillium" />.
          </Citar>
        <P>
          A Investidura é uma das três essências fundamentais que compõem o Cosmere, juntamente com a matéria e a energia. Ela pode ser descrita como uma energia espiritual que permeia e transcende os Reinos Físico, Cognitivo e Espiritual.
        </P>

          <T3 texto="Natureza e aparência"/>
          <P>
            A Investidura existe principalmente no <Enlaçar destino="/reinos/reino-espiritual" texto="Reino Espiritual" />, mas pode se manifestar nos outros Reinos. Quando aparece no <Enlaçar destino="/reinos/reino-fisico" texto="Reino Físico" />, ela geralmente se condensa em um dos estados da matéria: sólido, líquido ou gás. Ao interagir com o Físico, a Investidura obedece às leis de conservação de energia e termodinâmica, reforçando sua conexão com os conceitos físicos do Cosmere.
          </P>

          <T3 texto="Origem e ruptura"/>
          <P>
            Toda a Investidura no Cosmere estava originalmente ligada diretamente a <Enlaçar destino="/adonalsium" texto="Adonalsium" />. Com a <Enlaçar destino="/eventos/ruptura-de-adonalsium" texto="Ruptura" />, ela foi dividida igualmente entre os <Enlaçar destino="/conceitos/fractais-de-adonalsium" texto="Fractais" />, os dezesseis fragmentos resultantes da quebra de Adonalsium. Apesar dessa divisão, a Investidura mantém um vínculo essencial com a essência de Adonalsium, pois os Fractais são, de certa forma, extensões dele.
          </P>
          <P>
            Sanderson descreve a Ruptura como algo que “significou tudo e nada ao mesmo tempo” para a Investidura. Isso sugere que, embora a Investidura tenha sido fragmentada, sua essência ainda reflete a unidade original de Adonalsium.
          </P>

          <T3 texto="Lascas"/>
          <P>
            Se deixada sozinha por tempo suficiente, a Investidura pode se tornar autoconsciente, resultando na formação de entidades chamadas Lascas. Exemplos desse fenômeno incluem os <Enlaçar destino="/seres/seons" texto="seons" /> de <Enlaçar destino="/livros/elantris" texto="Elantris" /> e os <Enlaçar destino="/seres/esprenos" texto="esprenos" /> de <Enlaçar destino="/livros/os-relatos-da-guerra-das-tempestades/" texto="Os relatos da Guerra das Tempestades" />.
          </P>

          <T3 texto="Interação e corrupção" />
          <P>
            A Investidura é, por natureza, conectada ao Fractal a que pertence. Contudo, ela pode tentar corromper ou cooptar a Investidura associada a outro Fractal.
          </P>
          <P>
            Quando uma forma de Investidura tenta cooptar ou corromper outra forma de Investidura, frequentemente ocorre um efeito vermelho. Exemplos disso incluem a fumaça vermelha liberada pelos <Enlaçar destino="/objetos/selos-de-alma" texto="selos de alma"/> de <Mencionar quem="Shai"/> quando ela os usa para alterar temporariamente a alma de <Mencionar quem="Gaotona"/>; a névoa vermelha associada à invasão de <Enlaçar destino="/fractais/autonomia" texto="Trell"/> em Scadrial; e a coloração avermelhada de alguns esprenos Iluminados por <Mencionar quem="Sja-anat"/>. Da mesma forma, quando uma entidade possui ou exerce forte influência sobre uma pessoa, os olhos dessa pessoa frequentemente brilham em vermelho. Isso é visível nos corpos de Scadrial controlados por Autonomia, nos soldados possuídos pela <Enlaçar destino="/objetos/fragmentos/euforia" texto="Euforia"/> durante a <Enlaçar destino="/eventos/batalha-do-campo-de-thaylen" texto="Batalha do Campo de Thaylen"/>, e em muitos servos de <Enlaçar destino="/fractais/odio" texto="Odium"/>, cujas almas são corrompidas por seu poder.
          </P>

        <Topico titulo="Bibliografia">
          <CriarReferencia qual={3}>
            Quando falamos em Fractais e Fractários no contexto do Cosmere,
            estamos falando nos fragmentos de Adonalsium e daqueles que
            portaram os Fractais de Adonalsium. Não confundir com os Fractais
            e os Fractários de Roshar que aparecem em Os relatos da Guerra da
            Tempestades.
          </CriarReferencia>
        </Topico>
      </Conteudo>
    </Post>
  );
}
