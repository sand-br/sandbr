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
 
// ↑ FIM DAS IMPORTAÇÕES ↑.

const averia = Averia_Serif_Libre({
  weight: "400",
  style: "normal",
  variable: "--font-averia",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s - Sandbr',
    default: 'Sandbr',
  },
  description: "A enciclopédia brasileira sobre Brandon Sanderson",
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
    <html lang="pt-BR" suppressHydrationWarning>
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
        </ThemeProvider>
      </body>
    </html>
  );
}
