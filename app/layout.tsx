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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe culpa tempora voluptas, illum rem eveniet aspernatur repudiandae magnam qui eos vitae ullam ipsa explicabo nemo officiis consectetur impedit quo expedita fugit modi nobis odio. A, dignissimos quam debitis, alias rem blanditiis repellat id illum sed cupiditate voluptate reprehenderit voluptatum. Sint ut, fugit nam non tenetur nostrum laudantium rem reiciendis, officiis modi aperiam qui delectus obcaecati asperiores voluptas officia harum voluptate itaque ipsum eos ducimus ad. Atque culpa eos quia dolor, rem laboriosam? Doloribus nam dicta harum ipsa officia? Natus inventore temporibus quaerat consequatur dolor suscipit sint nemo dolorum labore voluptatem minus esse optio hic soluta recusandae deserunt dolorem, nam, consequuntur nesciunt, quisquam illum vero beatae. Quos sed voluptates fugit deserunt nostrum obcaecati? A, tempora. Inventore neque laboriosam saepe velit culpa, fuga praesentium! Nesciunt, pariatur accusamus sed nostrum recusandae ex veniam sit cum officiis est similique illum beatae nulla! Dicta unde sint totam quia repellat, libero suscipit tenetur pariatur molestias magnam eligendi animi perferendis, distinctio quasi quam corrupti amet, cumque cupiditate. Provident corporis sit, sequi accusantium commodi recusandae. Eaque veritatis magnam expedita laborum temporibus recusandae blanditiis exercitationem odio nemo unde assumenda tempore sapiente magni cumque fugiat, odit iste obcaecati? Ipsum minima doloremque nihil deserunt praesentium ex impedit vitae. Nostrum omnis ad consequatur quibusdam excepturi explicabo cupiditate aliquid natus eligendi id. Voluptate corrupti voluptates dolorum accusamus ipsam fuga dicta qui nam sint adipisci ea maiores, amet magnam expedita ut dignissimos iusto aliquid sapiente omnis. Similique amet, maxime perferendis fugit in tempore facilis, ipsum veritatis nihil itaque non tempora error repellat? Odit culpa, ducimus distinctio fuga facilis dolorum temporibus repellendus nobis cupiditate, magni laboriosam ab atque in ut excepturi blanditiis eaque quo nemo id perspiciatis suscipit? Voluptate voluptates aspernatur omnis quisquam sint, dolorem, similique odio beatae ratione velit quos eaque facere repudiandae amet?
      </body>
    </html>
  );
}
