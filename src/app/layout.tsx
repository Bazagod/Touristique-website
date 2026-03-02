import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ikaze Burundi — Tourisme au Cœur de l'Afrique",
  description:
    "Découvrez le Burundi : Lac Tanganyika, Source du Nil, Chutes de Karera, Mont Heha, Tambourinaires, Plage de Saga. Voyagez au cœur de l'Afrique.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${cormorant.variable} antialiased`}>{children}</body>
    </html>
  );
}
