import type { Metadata } from "next";
import "./globals.css";
import {
  Space_Mono,
  Roboto,
  Audiowide,
  Syne,
  Mona_Sans,
  Teko,
} from "next/font/google";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import { relative } from "path";

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
  variable: "--font-syne",
});

const mona = Mona_Sans({
  subsets: ["latin"],
  variable: "--font-mona",
});

const teko = Teko({
  subsets: ["latin"],
  variable: "--font-teko",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${roboto.variable} ${spaceMono.variable} ${audiowide.variable} ${syne.variable} ${mona.variable} ${teko.variable}`}
      >
        <Navbar />
        {children}
        <Toaster
          toastOptions={{
            unstyled: true,
            classNames: {
              toast:
                "bg-white font-syne font-medium flex items-center gap-2 px-4 py-3 justify-center rounded-full font-base shadow-lg sm:!absolute sm:!-translate-x-1/2 sm:!left-1/2 !w-max mx-auto",
              icon: "text-red-500",
            },
          }}
          position="top-center"
          mobileOffset={{ left: 0 }}
        />
      </body>
    </html>
  );
}
