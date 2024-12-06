// importação de dependências:
import type { Metadata } from "next";

// importação de provedores
import { ThemeProvider } from "@/src/components/ui/theme-provider"
import { Toaster } from "@/src/components/ui/toaster"

// importação de arquivos:
import localFont from "next/font/local";

// importação de estilos:
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sandbr",
  description: "A enciclopédia brasileira sobre Brandon Sanderson",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/favicons/light.svg',
        href: '/favicons/light.svg'
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/favicons/dark.svg',
        href: '/favicons/dark.svg'
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
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
