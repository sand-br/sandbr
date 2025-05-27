// ↓ IMPORTAÇÕES ↓

// importações de dependências:
import type { Metadata } from "next";

// importações de fontes:
import { Averia_Serif_Libre, Geist, Geist_Mono } from "next/font/google";

// importações de estilos:
import "./globals.css";

// importações de componentes:
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "@/components/ui/sonner"
import { Progress } from "@/components/progress";
 
// ↑ FIM DAS IMPORTAÇÕES ↑.

const averia = Averia_Serif_Libre({
  weight: "400",
  style: "normal",
  variable: "--font-averia",
  subsets: ["latin"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: '%s - Sandbr',
    default: 'Sandbr',
  },
  description: "A enciclopédia brasileira sobre Brandon Sanderson",
  keywords: [ 'brandon sanderson', 'cosmere', 'mistborn', 'stormlight archive', 'elantris', 'warbreaker', 'white sand', 'the reckoners', 'fantasy', 'high fantasy', 'magic systems', 'shardborn', 'roskar', 'scadrial', 'nalthis', 'fan theories', 'sanderson bibliography', 'epic fantasy', 'audiobooks', 'graphic audio', 'stormlight', 'lighteyes', 'radiant', 'eldritch', 'coppermind', 'nascidos da bruma', 'os relatos da guerra das tempestades', 'o caminho dos reis', 'palavras de radiância', 'sacramentadora', 'darkone', 'os executores', 'executores', 'império final', 'poço da ascenção', 'o herói da eras', 'vin wiki', 'vin', 'kelsier', 'kelsier wiki', 'kaladin', 'kaladin wiki', 'fantasia', 'alta fantasia', 'sistemas de magia', 'teorias de fãs', 'bibliografia sanderson', 'livros', 'audiolivros', 'enciclopédia', 'ordem de leitura cosmere', 'cosmere ordem de leitura', 'brandon sanderson ordem de leitura', 'sanderson ordem de leitura', 'stormlight ordem de leitura', 'mistborn ordem de leitura'
  ],
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicons/light.svg",
        href: "/favicons/light.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicons/dark.svg",
        href: "/favicons/dark.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${averia.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <Progress />
        </ThemeProvider>
      </body>
    </html>
  );
}
