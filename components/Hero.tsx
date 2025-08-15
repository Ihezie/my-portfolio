"use client";

import OrbitAnimation from "./OrbitAnimation";
import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import useResponsive from "@/hooks/useResponsive";
import { Stars } from "@react-three/drei";
import {ArrowDown} from "lucide-react";
const moonData = [
  {
    position: [0, 4.18, 0],
    text: "code",
    color: "#4aa7ff",
  },
  {
    position: [0, 2.09, 0],
    text: "eat",
    color: "#4aa7ff",
  },
  {
    position: [0, 0, 0],
    text: "sleep",
    color: "#4aa7ff",
  },
];

const Hero = () => {
  const isLarge = useResponsive("width >= 1024px");
  let fogFarPoint = 13;
  if(isLarge){
    fogFarPoint = 25;
  }
  return (
    <section className="text-white relative flex flex-col h-[95vh] sm:min-h-[700px] lg:h-screen">
      <div className="absolute w-full con-px abs-x-center pt-[15vh] lg:pt-[13vh] z-10">
          <h1 className="text-center text-[28px] leading-8 uppercase sm:text-4xl md:text-[40px] md:leading-15 lg:text-[46px]">
            Hey, I'm <span className="text-green-300">Raymond Ogbuehi</span>
          </h1>
          <p className="text-center text-sm mt-4 w-4/5 mx-auto sm:text-base lg:text-lg max-w-[600px]">
            I'm a Frontend developer dedicated to building the coolest AND most
            functional web experiences out there.
          </p>
          <div className="text-center mt-10 flex justify-center gap-6">
            <button
              type="button"
              className="btn bg-green-300 text-black flex items-center gap-2 border border-green-300 hover:bg-transparent hover:text-green-300 transition-colors duration-300"
            >
              See projects
              {/* <ArrowDown className="inline-block"/> */}
            </button>
            <button type="button" className="btn border">
              My resume
            </button>
          </div>
      </div>
      <Canvas camera={{ fov: 30, position: [0, 0, 10] }}>
        <fog attach="fog" args={["#000000", 8, fogFarPoint]} />
        <OrbitAnimation moonData={moonData} />
        <Stars
          radius={100} // how far the stars are
          depth={50} // star field depth (along camera ray)
          count={5000} // number of stars
          factor={4} // size factor
          saturation={1} // color saturation
          fade // makes stars fade at the edges
          speed={1} // twinkle speed
        />
        <EffectComposer>
          <Bloom
            intensity={2.5}
            luminanceThreshold={0}
            luminanceSmoothing={0.9}
            height={100}
          />
        </EffectComposer>
      </Canvas>
    </section>
  );
};
export default Hero;
