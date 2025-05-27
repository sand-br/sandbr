
import Link from "next/link";
import { Year } from "./copyright/year";

export const CopyrightWithYear = () => {
  return (
    <span className="block text-muted-foreground">
      © <Year /> <Link href="/" className="hover:underline">SandBR</Link>.
    </span>
  );
};

export const CopyrightAndLicences = () => {
  return (
    <div className="text-muted-foreground">
      <p>
        © <Year /> <Link href="/" className="hover:underline">sandbr</Link> & <a href="http://github.com/raave-aires" target="_blank" rel="noopener noreferrer" className="hover:underline">raave aires</a>.
      </p>
      <ul className="list-disc list-inside">
        <li>
          licença de conteúdo original: <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt-br" target="_blank" rel="noopener noreferrer" className="hover:underline">cc by-nc-sa 4.0</a>;
        </li>
        <li>
          licença de código-fonte: <a href="https://www.gnu.org/licenses/gpl-3.0.en.html" target="_blank" rel="noopener noreferrer" className="hover:underline">gnu gpl v3</a>.
        </li>
      </ul>
    </div>
  );
};