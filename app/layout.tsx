import type { Metadata } from "next";
import { Source_Sans_3, Playfair_Display, Pinyon_Script } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import PageLoader from "./components/PageLoader";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700"],
  display: "swap",
});

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const pinyonScript = Pinyon_Script({
  subsets: ["latin"],
  variable: "--font-pinyon",
  weight: ["400"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Lost Coast Getaways | Shelter Cove, CA",
  description: "Corporate retreats, youth coaching, and luxury getaways on the rugged Lost Coast of California. Experience Shelter Cove, Black Sands Beach, and the King Range.",
  icons: {
    icon: "/fav.png",
    apple: "/fav.png",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans3.variable} ${pinyonScript.variable}`}>
      <head>
        {/* Preload hero poster for fast LCP */}
        <link rel="preload" href="/images/hero.avif" as="image" type="image/avif" />
        {/* Preconnect for external domains */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
      </head>
      <body
        className="antialiased bg-brand-dark text-brand-mist font-sans overflow-x-hidden selection:bg-brand-gold selection:text-white"
      >
        <PageLoader />
        {children}
        <Script 
          src="https://subscribe-forms.beehiiv.com/attribution.js" 
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
