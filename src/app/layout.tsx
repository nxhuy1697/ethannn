
import type { Metadata } from "next";
import "./globals.css";
import { Sora, Roboto } from "next/font/google";

//components
import TopLeftImg from "@/components/TopLeftImg";
import dynamic from "next/dynamic";

import Nav from "@/components/Nav";
import Header from "@/components/Header";

import Transition from "@/components/Transition";
import PageTransition from "@/components/PageTransition";


export const metadata: Metadata = {
  title: "Ethan's Portfolio",
  description: "Generated by create next app",
};
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});
const roboto = Roboto({
  subsets: ["vietnamese"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="en">
      <body
        className={`page bg-site text-white bg-cover bg-no-repeat ${roboto.variable} font-roboto relative`}
      >
        {/* <TopLeftImg /> */}
        <Nav />
        <Header />
        <PageTransition>
        <Transition />

        {children}

        </PageTransition>

      </body>
    </html>
  );
}