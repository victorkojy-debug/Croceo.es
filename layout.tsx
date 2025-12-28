import type { Metadata } from "next";
import { PT_Serif, Varela } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

const ptSerif = PT_Serif({
  weight: ["400", "700"],
  variable: "--font-serif",
  subsets: ["latin"],
});

const varela = Varela({
  weight: "400",
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Croceo Spain | Luxury Villa Management & Airbnb Concierge",
  description: "Croceo supports luxury villa owners in Spain with property management and Airbnb concierge services. A turnkey service for simple and stress-free seasonal rentals in Barcelona, Ibiza, Mallorca, and Marbella.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${ptSerif.variable} ${varela.variable}`}>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
