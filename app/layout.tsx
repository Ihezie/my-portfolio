import type { Metadata } from "next";
import "./globals.css";
import { Audiowide, Syne } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Raymond Ogbuehi - Frontend Developer",
  description: "Frontend developer creating websites that leave you with a smile :)",
};

const audiowide = Audiowide({
  weight: "400",
  variable: "--font-audiowide",
});
const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${audiowide.variable} ${syne.variable}`}>
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
