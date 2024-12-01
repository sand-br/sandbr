// importação de componentes:
import { Aqui } from "@/src/components/caminho/aqui";
import { ItemDoCaminho } from "@/src/components/caminho/caminho";
import { Cabecalho } from "../../../../src/components/posts/cabecalho";
import { Conteudo } from "@/src/components/posts/conteudo";

const caminho = ()=>{
  <>
    <ItemDoCaminho pronde="/universos" pagina="Universos"/>
    <Aqui pagina="Cosmere"/>
  </>
}

export default function Page() {
  return (
    <>
      <Cabecalho>
        <ItemDoCaminho pronde="/universos" pagina="Universos" />
        <Aqui pagina="Cosmere" />
      </Cabecalho>

      <Conteudo titulo="Cosmere">
        <p>Teste</p>
      </Conteudo>
    </>
  );
}
