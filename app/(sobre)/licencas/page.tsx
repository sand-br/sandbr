// importação de componentes:
import { Post, Cabecalho, Conteudo, P, Lista, T1, T2, T3 } from "@/src/components/posts/estrutura";
import { ItemDoCaminho } from "@/src/components/caminho/caminho";
import { Aqui } from "@/src/components/caminho/aqui";
import { Enlaçar, Ir, Referenciar } from "@/src/components/posts/ligacoes";
import { Revisado } from "@/src/components/posts/destaques";
import { Copiavel } from "@/src/components/posts/copiavel";
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
    }
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

          <P>Com base nesse objetivo, assumimos o compromisso de tornar esta enciclopédia aberta, colaborativa, livre e acessível — um espaço onde leitores e admiradores do autor possam encontrar informações organizadas, detalhadas e constantemente atualizadas sobre suas obras.</P>

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
        </div>


        <T3 texto="Atribuir o conteúdo distribuído"/>
        <P>Ao reutilizar ou compartilhar o conteúdo da Sandbr, pedimos que você inclua a seguinte nota de atribuição:</P>

        <Copiavel titulo="Atribuição de conteúdo">
          <p>Informações extraídas da Sandbr. Disponível em &lt;sandbr.vercel.app&gt;. Licenciado sob CC BY-NC-SA 4.0 Internacional.</p>
        </Copiavel>

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
        
        <Copiavel titulo="Atribuição de código-fonte">
          <p>Copyright (C) 12.{ano} EH, Sandbr.</p> 

          <p>Este programa é software livre: você pode redistribuí-lo e/ou modificá-lo sob os termos da Licença Pública Geral GNU (GNU General Public License) conforme publicada pela Free Software Foundation, na versão 3 da Licença, ou qualquer versão posterior.</p>
            
          <p>Este programa é distribuído na esperança de que seja útil, mas SEM NENHUMA GARANTIA; sem sequer a garantia implícita de COMERCIALIZAÇÃO ou de ADEQUAÇÃO A UM PROPÓSITO ESPECÍFICO. Consulte a Licença Pública Geral GNU para mais detalhes.</p>

          <p>Você deve ter recebido uma cópia da Licença Pública Geral GNU junto com este programa. Caso contrário, veja &lt;gnu.org/licenses/&gt;.</p>
        </Copiavel>

        <Revisado
          quando="24/11/2024"
          quem="Raavë Aires"
          link="https://github.com/raave-aires/"
        />
      </Conteudo>
    </Post>
  );
};

