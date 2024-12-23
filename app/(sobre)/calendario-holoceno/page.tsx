// importação de componentes:
import { Post, Cabecalho, Conteudo, P, Lista, T1, T2 } from "@/src/components/posts/estrutura";
import { ItemDoCaminho } from "@/src/components/caminho/caminho";
import { Aqui } from "@/src/components/caminho/aqui";
import { Ir } from "@/src/components/posts/ligacoes";
import { YouTube } from "@/src/components/posts/destaques";
import { Revisado, Hoje, Ano } from "@/src/components/posts/datas";

export default function Pagina(){
  const indice = [
    {topico: "Calendário Holoceno"},
    {topico: "Estrutura e conversão"},
    {topico: "Saiba mais"}
  ]
  
  return(
    <Post indice={indice}>
      <Cabecalho>
        <ItemDoCaminho pronde="/sobre" pagina="Sobre"/>
        <Aqui pagina="Calendário Holoceno"/>
      </Cabecalho>

      <Conteudo>
        <T1 texto="Calendário Holoceno" />
        <P><Hoje/></P>
        <P>
          O Calendário Holoceno, também conhecido como Era Holocena ou Era Humana (abreviado como EH), é uma adaptação do calendário <Ir destino="https://pt.wikipedia.org/wiki/Calend%C3%A1rio_gregoriano" texto="Juliano-Gregoriano"/>. Seu objetivo é estabelecer uma contagem de anos mais adequada
          para representar a história humana e o início do período
          geológico <Ir destino="https://pt.wikipedia.org/wiki/Holoceno" texto="Holoceno"/>. Para isso, adiciona-se 10.000 anos aos anos do calendário Gregoriano após o início da <Ir destino="https://pt.wikipedia.org/wiki/Era_Comum" texto="Era Comum"/> (EC) e 10.001 anos aos anos antes da Era Comum (AEC).
        </P>
        <P>
          Apesar do nome, o ano 1 EH não marca precisamente o início do Holoceno, mas é um ponto de referência arbitrário para o começo da chamada Era Humana. Essa escolha simplifica a conversão entre o Calendário Holoceno e o calendário Gregoriano, especialmente pela inexistência do ano zero nos sistemas Juliano e Gregoriano.
        </P>

        <T2 texto="Estrutura e conversão" />
        <Lista>
          <li>O ano 0 EH corresponde ao ano 10.001 AEC no calendário Gregoriano.</li>
          <li>O ano 10.000 AEC equivale ao ano 1 EH.</li>
          <li>Para anos após o início da Era Comum, basta adicionar o número 1 à esquerda do ano Gregoriano para convertê-lo ao Calendário Holoceno.</li>
        </Lista>
        <P><Ano/></P>

        <T2 texto="Saiba mais"/>
        <P>
          Para mais detalhes sobre o Calendário Holoceno, veja a página sobre ele na <Ir destino="https://pt.wikipedia.org/wiki/Calend%C3%A1rio_Holoceno" texto="Wikipédia"/>.
        </P>
        <P>
          Ou o vídeo abaixo do canal <Ir destino="https://www.youtube.com/@kurzgesagt" texto="Kurzgesagt – In a Nutshell"/>.
        </P>

        <YouTube idDoVideo="czgOWmtGVGs" titulo="Vídeo: Uma nova história para a humanidade - A Era Humana." subtitulo="Áudio em inglês. Legendas em português disponíveis."/>

        <Revisado
          quando="24/11/2024"
          quem="Raavë Aires"
          link="https://github.com/raave-aires/"
        />
      </Conteudo>
    </Post>
  );
};

