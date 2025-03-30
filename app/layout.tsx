// importações de dependências:
import type { Metadata } from "next";

// importações de componentes:

// importações de estilos:
import "./globals.css";

// importações de fontes:
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  generator: "Next.js",
  applicationName: "Sandbr",
  authors: [{ name: "Raavë Aires", url: "https://github.com/raave-aires" }],
  creator: "Raavë Aires",
  publisher: "Raavë Aires",
  keywords: [
    // Termos gerais do autor
    "Brandon Sanderson",
    "Enciclopédia Brandon Sanderson",
    "Enciclopedia Brandon Sanderson",
    "Obras de Brandon Sanderson",
    "Obras Brandon Sanderson",
    "Livros Brandon Sanderson",
    "Biografia Brandon Sanderson",
    "Brandon Sanderson bio",
    "Brandon Sanderson biografia",
    "Sanderson",
    "Brandon Sanderson Encyclopedia",
    "Brandon Sanderson Works",
    "Brandon Sanderson Biography",
    
    // Mistborn / Nascidos da Bruma
    "Mistborn",
    "Nascidos da Bruma",
    "Mistborn Wiki",
    "Enciclopédia Mistborn",
    "Enciclopedia Mistborn",
    "Mistborn Series",
    "Mistborn Serie",

    "Mistborn: Nascidos da Bruma",
    "Mistborn Encyclopedia",
    "Allomancy",
    "Alomancia",
    "Sistema Alomântico",
    
    //  Elantris
    "Elantris",
    "Elantris Wiki",
    "Enciclopédia Elantris",
    "Elantris Book",
    "Elantris Livro",
    
    //  O Império Final / Final Empire
    "O Imperio Final",
    "Final Empire",
    "Mistborn The Final Empire",
    "The Final Empire",
    
    // Stormlight Archive / O Caminho dos Reis
    "O Caminho dos Reis",
    "The Way of Kings",
    "Stormlight Archive",
    "Enciclopédia Stormlight Archive",
    "Arquivos Stormlight",
    "Stormlight Archive Encyclopedia",
    "Stormlight Archive Series",
    
    // Universo Cosmere
    "Cosmere",
    "Universo Cosmere",
    "Cosmere Encyclopedia",
    "Enciclopédia Cosmere",
    "Cosmere Universe",
    "Cosmere Timeline",
    "Cronologia Cosmere",
    "Cronologia do Cosmere",
    "Cosmere Lore",
    "Lore Cosmere",
    "História Cosmere",
    
    // Outras obras e termos
    "Warbreaker",
    "Warbreaker Wiki",
    "Warbreaker Book",
    "Warbreaker: Livro",
    "The Reckoners",
    "Steelheart",
    "Firefight",
    "The Reckoners Series",
    
    // Termos adicionais e curiosidades
    "Brandon Sanderson Interviews",
    "Entrevistas Brandon Sanderson",
    "Brandon Sanderson Facts",
    "Curiosidades Brandon Sanderson",
    "Brandon Sanderson Trivia",
    "Fan Theories Brandon Sanderson",
    "Teorias de Fãs Brandon Sanderson",
    "Brandon Sanderson Novels",
    "Romances Brandon Sanderson",
    "Brandon Sanderson Books",
    "Livros de Brandon Sanderson",
    "Magic Systems Cosmere",
    "Sistemas de Magia Cosmere",
    "Allomancy vs Feruchemy",
    "Shadesmar",
    "Mundo Shadesmar",
    "Surgebinding",
    "Escuridão de Surgebinding"
],
  title: {
    default: "Sandbr",
    template: "%s | Sandbr",
  },
  description: "A enciclopédia brasileira sobre Brandon Sanderson",
  icons: {
    icon: [
      { media: "(prefers-color-scheme: light)", url: "/s-claro.svg" },
      new URL("s-claro.svg", "http://arquivo.localhost:3000"),
      { url: "/s-escuro.svg", media: "(prefers-color-scheme: dark)" },
      new URL("s-escuro.svg", "http://arquivo.localhost:3000"),
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
