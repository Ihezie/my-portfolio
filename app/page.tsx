"use client"

import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";


export default function Home() {
  return (
    <main className="">
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
