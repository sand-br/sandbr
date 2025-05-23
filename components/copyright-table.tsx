import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export interface Infos {
  imagem: string;
  autor?: string;
  licenca?: string;
}

export interface Direitos {
  info: Infos[];
}

export function CopyrightTable({ info }: Direitos) {
  const linhasTabela = info.map((item, index) => (
    <TableRow key={index}>
      <TableCell>{item.imagem}</TableCell>
      <TableCell>{item.autor || "Desconhecido(a)"}</TableCell>
      <TableCell>
        <em>{item.licenca || "Fair use"}</em>
      </TableCell>
    </TableRow>
  ));

  return (
    <Table className="max-w-[47rem]">
      <TableHeader>
        <TableRow>
          <TableHead>Imagem</TableHead>
          <TableHead>
            <em>Copyright</em>
          </TableHead>
          <TableHead>Licença de uso</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>{linhasTabela}</TableBody>
    </Table>
  );
}
