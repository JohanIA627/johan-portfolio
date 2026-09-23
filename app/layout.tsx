import type { Metadata, Viewport } from "next";
import { Inter, Fuzzy_Bubbles } from "next/font/google";
import { ProveedorIdioma } from "./i18n/contexto";
import { ProveedorTema } from "./tema/contexto";
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

const titulo = "Johan Sebastián Rondón | Portafolio";
const descripcion =
  "Estudio Ingeniería Industrial en la UPB. Diseño mecánico, datos y automatización de procesos con IA. Busco prácticas profesionales para 2027.";

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

// Color de la barra del navegador en móvil, según el tema del sistema
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f8fb" },
    { media: "(prefers-color-scheme: dark)", color: "#0e1116" },
  ],
};

// Corre antes de pintar: fija el tema guardado (o el del sistema) para que
// no haya destello de tema claro al abrir en oscuro.
const scriptTema = `(function(){try{var t=localStorage.getItem("johan-portfolio:tema");if(t!=="claro"&&t!=="oscuro"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"oscuro":"claro"}document.documentElement.setAttribute("data-tema",t)}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${fuzzyBubbles.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: scriptTema }} />
      </head>
      <body className="min-h-full flex flex-col">
        <ProveedorTema>
          <ProveedorMovimiento>
            <ProveedorIdioma>{children}</ProveedorIdioma>
          </ProveedorMovimiento>
        </ProveedorTema>
      </body>
    </html>
  );
}
