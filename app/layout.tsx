import type { Metadata } from "next";
import "./globals.css";
import { Space_Mono, Roboto, Audiowide, Syne } from "next/font/google";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Raymond Ogbuehi - Frontend Engineer",
  description: "",
};
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});
const spaceMono = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-space-mono",
});
const audiowide = Audiowide({
  weight: "400",
  variable: "--font-audiowide",
});
const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne"
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${roboto.variable} ${spaceMono.variable} ${audiowide.variable} ${syne.variable}`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
