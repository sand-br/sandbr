// importação de componentes:
import { Post, Cabecalho, Conteudo, P, Lista, T1, T2, T3 } from "@/src/components/posts/estrutura";
import { ItemDoCaminho } from "@/src/components/caminho/caminho";
import { Aqui } from "@/src/components/caminho/aqui";
import { Enlaçar, Ir, Referenciar, CriarReferencia } from "@/src/components/posts/ligacoes";
import { Revisado } from "@/src/components/posts/destaques";
import { CampoCopiavel, EmailCopiavel, TextoCopiavel } from "@/src/components/posts/copiavel";
import { ContainerDeImagem } from "@/src/components/imagens/container";

export default function Pagina(){
  const ano = new Date().getFullYear().toString();
  const indice = [
    { topico: "A Sandbr" },
    { topico: "Licença de conteúdo",
      items: [
        { subtopico: "Atribuir o conteúdo distribuído" }
      ]
    },
    { topico: "Licença do código-fonte", 
      items: [
        { subtopico: "Principais termos da licença" },
        { subtopico: "Atribuir o código-fonte" }
      ]
    },
    { topico: "Direitos autorais",
      items: [
        { subtopico: "Uso de imagens"}
      ]
     },
     { topico: "Uso comercial" },
     { topico: "Atualizações de licença" },
     { topico: "Outros" },
     { topico: "Saiba mais" },
     { topico: "Notas" }
  ]
  
  return(
    <Post indice={indice}>
      <Cabecalho>
        <ItemDoCaminho pronde="/sobre" pagina="Sobre"/>
        <Aqui pagina="Licenças"/>
      </Cabecalho>

      <Conteudo>
        <T1 texto="A Sandbr"/>

        <div>
          <div className="float-right max-w-[400px] md:max-w-[300px]">
            <ContainerDeImagem 
              descricao="Um Inquisidor de Aço. Durante o Império Final, os inquisidores eram responsáveis por executar algumas das leis do Senhor Soberano." 
              artista="Rho_Concepts" 
              link_do_artista="https://www.reddit.com/user/Rho_Concepts/"
              src="https://raw.githubusercontent.com/sand-br/sandbr/refs/heads/main/public/images/cosmere/inquisidor.jpg"
            />
          </div>

          <P>A Sandbr é uma enciclopédia independente<Referenciar qual={1}/>, feita por fãs e dedicada exclusivamente às obras de <Enlaçar destino="/brandon-sanderson" texto="Brandon Sanderson"/>. Nosso objetivo é catalogar, organizar e compartilhar informações sobre suas criações, além de ampliar o acesso a conteúdos relacionados.</P>

          <P>Com base nesse objetivo, assumimos o compromisso de tornar esta enciclopédia aberta, colaborativa, livre e acessível; um espaço onde leitores e admiradores do autor possam encontrar informações organizadas, detalhadas e constantemente atualizadas sobre suas obras.</P>

          <P>Em alinhamento com esse compromisso, adotamos os modelos de licenciamento listados abaixo.</P>

          <T2 texto="Licença de conteúdo"/>
          <P>Todo o conteúdo documental da Sandbr é disponibilizado sob a licença <Ir destino="https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode.pt" texto="CC BY-NC-SA 4.0 Internacional"/> (Atribuição - Não Comercial - Compartilha Igual). Isso significa que:</P>

          <Lista>
            <li>Você pode compartilhar (copiar e redistribuir o material em qualquer formato ou meio).</li>
            <li>Você pode adaptar (remixar, transformar e criar a partir do material).
            </li>
          </Lista>

          <p>Desde que você:</p>
          
          <Lista>
            <li>Dê os devidos créditos à Sandbr como fonte original.</li>
            <li>Não utilize o material para fins comerciais.</li>
            <li>Compartilhe o material derivado sob a mesma licença CC BY-NC-SA 4.0.</li>
          </Lista>

        <T3 texto="Atribuir o conteúdo distribuído"/>
        <P>Ao reutilizar ou compartilhar o conteúdo da Sandbr, pedimos que você inclua a seguinte nota de atribuição:</P>
        </div>



        <CampoCopiavel titulo="Atribuição de conteúdo" aviso="A atribuição foi copiada.">
          <p>Informações extraídas da Sandbr. Disponível em &lt;sandbr.vercel.app&gt;. Licenciado sob CC BY-NC-SA 4.0 Internacional.</p>
        </CampoCopiavel>

        <T2 texto="Licença do código-fonte"/>
        <P>O código-fonte da Sandbr está licenciado sob a <Ir destino="https://www.gnu.org/licenses/gpl-3.0.en.html#license-text" texto="GNU General Public License v3.0"/> (GPL v3) e disponível publicamente no <Ir destino="https://github.com/sand-br/sandbr" texto="GitHub"/>.</P>

        <T3 texto="Principais termos da licença"/>
        <Lista>
          <li>Liberdade de uso: Qualquer pessoa pode usar, modificar e distribuir o código, desde que respeite os termos da licença.</li>
          <li>Código aberto: Qualquer redistribuição do código (modificado ou não) deve incluir o código-fonte e manter a mesma licença GPL v3.</li>
          <li>Direito de modificações: Você pode alterar o código e redistribuir versões modificadas, mas deve garantir que elas também sejam distribuídas sob a GPLv3.</li>
          <li>Garantias: O código é fornecido “como está”, sem garantias de funcionamento ou adequação a propósitos específicos.</li>
        </Lista>

        <T3 texto="Atribuir o código-fonte"/>
        <P>Se você redistribuir o código, precisa incluir:</P>
        <Lista>
          <li>Uma cópia da licença GPL v3.</li>
          <li>Um aviso de copyright mencionando os autores do projeto.</li>
        </Lista>
        <CampoCopiavel titulo="Atribuição de código-fonte" aviso="A atribuição foi copiada.">
          <p>Copyright (C) 12.{ano} EH, Sandbr.</p> 

          <p>Este programa é software livre: você pode redistribuí-lo e/ou modificá-lo sob os termos da Licença Pública Geral GNU (GNU General Public License) conforme publicada pela Free Software Foundation, na versão 3 da Licença, ou qualquer versão posterior.</p>
            
          <p>Este programa é distribuído na esperança de que seja útil, mas SEM NENHUMA GARANTIA; sem sequer a garantia implícita de COMERCIALIZAÇÃO ou de ADEQUAÇÃO A UM PROPÓSITO ESPECÍFICO. Consulte a Licença Pública Geral GNU para mais detalhes.</p>

          <p>Você deve ter recebido uma cópia da Licença Pública Geral GNU junto com este programa. Caso contrário, veja &lt;gnu.org/licenses/&gt;.</p>
        </CampoCopiavel>

        <T2 texto="Direitos autorais" />
        <P>
          Embora a Sandbr seja um projeto independente, seu conteúdo é baseado nas obras de Brandon Sanderson, que permanecem sob os direitos autorais do autor e de suas editoras. Não reivindicamos qualquer propriedade intelectual sobre as obras originais de Sanderson. No entanto, o conteúdo produzido pela Sandbr, como análises, resumos, tabelas e outros materiais organizados pelo projeto, é de nossa autoria e protegido por direitos autorais próprios.
        </P>
        <T3 texto="Uso de imagens"/>
        <P>
          A Sandbr utiliza muitas imagens que não são feitas por nossa equipe para enriquecer o conteúdo enciclopédico. Estas imagens contemplam três categorias principais: imagens oficiais, fanarts e obras de terceiros.
        </P>
        <Lista>
          <li><strong>Imagens oficiais.</strong> São consideradas “imagens oficiais” as capas de livros, artes promocionais ou ilustrações criadas por artistas associados a Brandon Sanderson, suas editoras ou contratados.</li>
          <li>
            <strong>Fanarts.</strong> São criações artísticas produzidas por fãs, que reinterpretam ou expandem o universo visual das obras de Brandon Sanderson. Essas imagens geralmente não têm vínculo oficial com o autor ou editoras e são compartilhadas na internet pelos próprios artistas sob diferentes condições de uso mas, geralmente, sem especificar uma licença de conteúdo.
          </li>
          <li>
            <strong>Obras de terceiros.</strong> Incluem imagens criadas por artistas ou fontes que não são fãs declarados ou diretamente associados ao universo de Brandon Sanderson, mas cujas criações podem ser relevantes para o contexto visual ou analítico do conteúdo enciclopédico.
          </li>
        </Lista>
        <P>
          Sempre que possível, as imagens utilizadas na Sandbr, sejam elas oficiais, fanarts ou obras de terceiros, são acompanhadas de informações detalhadas sobre os créditos, incluindo o nome do artista, da editora ou da fonte original, além de links para perfis ou páginas dos criadores quando disponíveis. A Sandbr reconhece e valoriza o trabalho desses artistas, incentivando seus leitores a apoiá-los por meio da aquisição de produtos oficiais, contribuições em projetos de financiamento coletivo ou divulgação de seus trabalhos com os devidos créditos.
        </P>
        <P>
          Ademais, essas imagens, sejam oficiais, fanarts ou obras de terceiros, são empregadas exclusivamente para fins educacionais e/ou informativos, como referência visual, análise ou contextualização. A aplicação segue as diretrizes do <Ir destino="https://www.jusbrasil.com.br/topicos/10625543/artigo-46-da-lei-n-9610-de-19-de-fevereiro-de-1998" texto="art. 46 da Lei nº 9.610/1998"/> – a Lei de Direitos Autorais – que permite a reprodução de obras para fins de estudo, crítica ou polêmica, sem fins comerciais e com a devida atribuição de créditos.
        </P>
        <P>
          Caso você identifique algum uso inadequado de seu trabalho ou deseje solicitar ajustes nos créditos ou remoções, entre em contato pelo e-mail <EmailCopiavel email="sandbr@proton.me"/>. Para facilitar o atendimento, use um destes assuntos predefinidos que melhor corresponda ao seu caso: 
        </P>
        <Lista>
          <li><TextoCopiavel texto="Ajuste de créditos" />, caso seu trabalho tenha sido creditado a outra pessoa ou fonte.</li>
          <li><TextoCopiavel texto="Correção de informações"/>, caso alguma informação sobre o seu trabalho tenha sido publicada incorretamente.</li>
          <li><TextoCopiavel texto="Remoção de conteúdo" />, caso deseje que seu trabalho não seja usado na Sandbr.</li>
        </Lista>


        <T2 texto="Uso comercial" />
        <P>
          A Sandbr não disponibiliza licenças de uso comercial para nenhum material criado, utilizado e/ou distribuído na enciclopédia, salvo em situações expressamente especificadas. O único caso em que é previamente permitido o uso comercial está relacionado ao código-fonte da enciclopédia, que é disponibilizado sob a licença <Ir destino="https://www.gnu.org/licenses/gpl-3.0.en.html#license-text" texto="GPL v3"/>. Essa licença garante liberdade para estudar, modificar e redistribuir o código, incluindo usos comerciais, desde que respeitados os termos dessa licença.
        </P>

        <T2 texto="Atualizações de licença" />
        <P>
          A Sandbr se reserva o direito de atualizar suas políticas de licenciamento para refletir mudanças no escopo do projeto ou demandas legais, sempre preservando o compromisso com a comunidade.
        </P>

        <T2 texto="Outros" />
        <P>
          Se você tem alguma dúvida sobre as licenças da Sandbr, seus termos ou se deseja usar o conteúdo da enciclopédia de um jeito que não está previsto nos termos das licenças que usamos, entre em contato conosco pelo e-mail <EmailCopiavel email="sandbr@proton.me"/> com o assunto <TextoCopiavel texto="Licenciamento" />.
        </P>

        <T3 texto="Saiba mais" />
        <Lista>
          <li>Jusbrasil: <Ir destino="https://www.jusbrasil.com.br/artigos/fair-use-e-sua-aplicacao-na-legislacao-brasileira/1184110496" texto="Fair use e sua aplicação na legislação brasileira."/></li>
          <li>Planalto: <Ir destino="https://www.planalto.gov.br/ccivil_03/Leis/L9610.htm" texto="Lei 9.610, de 19 de Fevereiro de 1998."/></li>
        </Lista>
        
        

        <T2 texto="Notas"/>
        <CriarReferencia qual={1}>
          A Sandbr não é afiliada a Brandon Sanderson, suas editoras ou quaisquer entidades relacionadas às suas obras e à publicação destas.
        </CriarReferencia>

        <Revisado
          quando="24/11/2024"
          quem="Raavë Aires"
          link="https://github.com/raave-aires/"
        />
      </Conteudo>
    </Post>
  );
};

