"use client";
import Link from "next/link";

const ano = new Date().getFullYear()

export const CopyrightWithYear = () => {
  return (
    <span className="block text-muted-foreground">
      © {ano} <Link href="/" className="hover:underline">SandBR</Link>.
    </span>
  );
};

export const CopyrightAndLicences = () => {
  return (
    <span className="block text-muted-foreground">
      © {ano} <Link href="/" className="hover:underline">sandbr</Link> e Raave Aires. Textos e outros conteúdos originais licenciados sob <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt-br" target="_blank" rel="noopener noreferrer" className="hover:underline">CC BY-NC-SA 4.0</a>, código-fonte licenciado sob a <a href="https://www.gnu.org/licenses/gpl-3.0.en.html" target="_blank" rel="noopener noreferrer" className="hover:underline">GNU GPL v3</a>.
    </span>
  );
};