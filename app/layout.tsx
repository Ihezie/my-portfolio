import type { Metadata } from "next";
import "./globals.css";
import { Russo_One, Roboto, Josefin_Sans, Racing_Sans_One } from "next/font/google";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Raymond Ogbuehi - Frontend Engineer",
  description: "",
};

const russoOne = Russo_One({
  weight: "400",
  variable: "--font-russo",
  subsets: ["latin"],
});
const racingSans = Racing_Sans_One({
  weight: "400",
  variable: "--font-racing",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const josefinSans = Josefin_Sans({
  variable: "--josefin-sans",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${russoOne.variable} ${roboto.variable} ${josefinSans.variable} ${racingSans.variable}`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
