import type { Metadata, Viewport } from "next";
import { Bangers, Russo_One, Chakra_Petch, Inter } from "next/font/google";
import "./globals.css";

const bangers = Bangers({
  weight: "400",
  variable: "--font-bangers",
  subsets: ["latin"],
  display: "swap",
});

const russoOne = Russo_One({
  weight: "400",
  variable: "--font-russo",
  subsets: ["latin"],
  display: "swap",
});

const chakraPetch = Chakra_Petch({
  weight: ["400", "600", "700"],
  variable: "--font-chakra",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://garranime.vercel.app"),
  title: "GARRANIME 2026 — 1º Evento Geek de Garrafão do Norte (PA)",
  description:
    "O maior evento de anime, mangá, cosplay e games clássicos de Garrafão do Norte! 22 de Novembro. Ingressos antecipados, Time Azul vs Time Laranja e torneios imperdíveis.",
  keywords: [
    "Garranime",
    "Anime Garrafão do Norte",
    "Evento Geek Pará",
    "Cosplay Garrafão do Norte",
    "Torneio Games Anime",
    "Ingressos Garranime",
  ],
  authors: [{ name: "Organização Garranime" }],
  openGraph: {
    title: "GARRANIME — 1º Evento Geek de Garrafão do Norte",
    description:
      "Karaokê, Lojas Geek, Torneios e muito mais no dia 22 de Novembro. Garanta seu ingresso antecipado por R$ 10!",
    url: "https://garranime.vercel.app",
    siteName: "Garranime Oficial",
    images: [
      {
        url: "/logo-gnime.png",
        width: 1000,
        height: 1000,
        alt: "Logo Oficial do Garranime",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GARRANIME — 1º Evento Geek de Garrafão do Norte",
    description: "Prepare seu cosplay e venha para o 1º Evento Geek de Garrafão do Norte no dia 22 de Novembro!",
    images: ["/logo-gnime.png"],
  },
  icons: {
    icon: "/logo-gnime.png",
    apple: "/logo-gnime.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#FF7A00",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${bangers.variable} ${russoOne.variable} ${chakraPetch.variable} ${inter.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#070B28] text-white font-sans selection:bg-[#FF7A00] selection:text-[#070B28] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
