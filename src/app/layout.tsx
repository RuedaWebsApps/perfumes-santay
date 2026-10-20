import type { Metadata } from "next";
import "./globals.css";
import { ClientProviders } from "./ClientProviders";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `${SITE.name} | Perfumes de Diseñador en Round Rock, TX`,
  description: `${SITE.taglineEs}. Colección exclusiva de fragancias de diseñador para dama y caballero: Louis Vuitton, Parfums de Marly, Creed, Bond No. 9, Valentino, YSL y más. Round Rock & Austin, Texas.`,
  keywords: [
    "Perfumes Santay",
    "Perfumery Santay",
    "Angel Santay",
    "Perfumes Round Rock",
    "Fragancias de diseñador Austin",
    "Louis Vuitton perfume Round Rock",
    "Creed perfume Texas",
    "Bond No 9 Austin",
    "Parfums de Marly Delina",
    "Valentino Born in Roma",
    "YSL Libre",
  ],
  authors: [{ name: SITE.owner }],
  openGraph: {
    title: `${SITE.name} | Perfumes de Diseñador`,
    description: `${SITE.taglineEs}. Visítanos en ${SITE.fullAddress}`,
    type: "website",
    locale: "es_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#090a0f] text-slate-100 antialiased selection:bg-amber-500 selection:text-black">
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
