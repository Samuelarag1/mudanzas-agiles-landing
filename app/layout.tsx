import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { WhatsAppFloat } from "@/components/whatsapp-float";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "La Mudadora - Mudanzas Profesionales en Tucumán y Todo el País",
  description:
    "Empresa líder en mudanzas nacionales y locales desde Tucumán. Servicio profesional, seguro y confiable. Presupuestos gratuitos sin compromiso.",
  keywords:
    "mudanzas tucuman, mudanzas nacionales, guardamuebles, mudanzas profesionales, mudanzas argentina",
  authors: [{ name: "La Mudadora" }],
  openGraph: {
    title: "La Mudadora - Mudanzas sin Estrés en Todo el País",
    description:
      "Mudanzas nacionales exclusivas y compartidas desde Tucumán. También locales. Presupuestos gratuitos.",
    url: "https://mudanzasagiles.com",
    siteName: "La Mudadora",
    locale: "es_AR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR">
      <body className={inter.className}>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
