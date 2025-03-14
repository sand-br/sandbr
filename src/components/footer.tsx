// importação de dependências:
import Link from "next/link";

//importação de componentes:
import { Ir } from "./posts/ligacoes";

interface Enlaces {
  destino: string;
  texto: string;
}

const Enlaçar: React.FC<Enlaces> = ({ destino, texto }) => {
  return (
    <Link href={destino} className="hover:underline" prefetch={true}>
      {texto}
    </Link>
  );
};

export function Rodape() {
  const ano = new Date().getFullYear().toString().slice(1);
  return (
    <footer className="bg-background border-t">
      <div className="w-full mx-auto max-w-(--breakpoint-xl) p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-600 dark:text-gray-400 sm:text-center">
          © <Enlaçar destino="/calendario-holoceno" texto={`12.${ano}`} />{" "}
          EH,{" "}
          <Link href="/" className="hover:underline">
            Sandbr
          </Link>
          . Distribuído sob as licenças{" "}
          <Ir
            destino="https://github.com/sand-br/sandbr/blob/main/LICENSE"
            texto="GPL v3"
          />{" "}
          e{" "}
          <Ir
            destino="https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode.pt"
            texto="CC BY-NC-SA 4.0"
          />
          .
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-600 dark:text-gray-400 sm:mt-0 gap-3">
          <li>
            <Enlaçar destino="/sobre" texto="Sobre a Sandbr" />
          </li>
          <li>
            <Enlaçar destino="/licencas" texto="Licenças" />
          </li>
          <li>
            <Enlaçar destino="/contato" texto="Contato" />
          </li>
        </ul>
      </div>
    </footer>
  );
}
