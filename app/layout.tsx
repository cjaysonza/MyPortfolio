import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header, { Footer } from "./components/headerfooter.jsx";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "cjaysonza's Portfolio",
  description: "A portfolio built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-[#1d212c] text-white`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
