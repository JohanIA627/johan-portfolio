import type { Metadata } from "next";
import { Inter, Fuzzy_Bubbles } from "next/font/google";
import { ProveedorIdioma } from "./i18n/contexto";
import ProveedorMovimiento from "./componentes/ProveedorMovimiento";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fuzzyBubbles = Fuzzy_Bubbles({
  variable: "--font-firma",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const titulo = "Johan Sebastián Rondón — Portafolio";
const descripcion =
  "Ingeniero industrial (UPB). Digitalización de procesos, datos y automatización con IA aplicada a operaciones.";

export const metadata: Metadata = {
  title: titulo,
  description: descripcion,
  openGraph: {
    title: titulo,
    description: descripcion,
    url: "https://johan-portfolio-silk.vercel.app",
    siteName: titulo,
    images: ["https://johan-portfolio-silk.vercel.app/foto-johan.jpg"],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: titulo,
    description: descripcion,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${inter.variable} ${fuzzyBubbles.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ProveedorMovimiento>
          <ProveedorIdioma>{children}</ProveedorIdioma>
        </ProveedorMovimiento>
      </body>
    </html>
  );
}
