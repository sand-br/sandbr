import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { SquareArrowOutUpRight } from "lucide-react";
import { SiMarkdown } from "@icons-pack/react-simple-icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Aviso() {
  return (
    <Card className="w-[21rem] align-middle select-none">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Instruções <SiMarkdown className="inline-block" />
        </CardTitle>
        <CardDescription>
          <p>
            Os artigos da Sandbr são escritos em Markdown, que utiliza marcações
            simples para formatar texto. Por exemplo:
          </p>
        </CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        <ul className="list-disc ml-4">
          <li>
            <code>#</code> gera{" "}
            <span className="font-bold text-base">Títulos</span>;
          </li>
          <li>
            **texto** gera <strong>negrito</strong>;
          </li>
          <li>
            _texto_ gera <em>itálico</em>;
          </li>
          <li>
            [texto](url) gera{" "}
            <a
              href="https://github.com/mende1/guia-definitivo-de-markdown/blob/master/README.md#a-sintaxe-do-markdown"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="hover:underline dark:text-cyan-500 text-blue-600">
                um link
              </span>
              <SquareArrowOutUpRight
                className="inline-block align-middle dark:text-cyan-500 text-blue-600"
                size={12}
              />
            </a>
            ;
          </li>
          <li>- gera uma lista como essa;</li>
        </ul>

        <ol className="list-decimal ml-4 pt-2">
          <li>já 1. gera uma lista enumerada.</li>
        </ol>
      </CardContent>
      <CardFooter className="text-sm text-muted-foreground flex flex-col items-start gap-2">
        <p>
          Se precisar de ajuda com Markdown, veja{" "}
          <a
            href="https://github.com/mende1/guia-definitivo-de-markdown/blob/master/README.md#a-sintaxe-do-markdown"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline dark:text-cyan-500 text-blue-600"
          >
            este guia
            <SquareArrowOutUpRight
              className="inline-block align-middle dark:text-cyan-500 text-blue-600"
              size={12}
            />
          </a>
          ; ou entre em contato conosco:
        </p>

        <div className="flex gap-2">
          <Button asChild size="sm">
            <a
              href="mailto:contato+ajuda@sandbr.org?subject=Preciso%20de%20ajuda%20com%20o%20Markdown"
              rel="noopener noreferrer"
            >
              Preciso de ajuda
            </a>
          </Button>
          <Button asChild size="sm" variant="secondary">
            <Link href="/docs/markdown">
              Docs
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
