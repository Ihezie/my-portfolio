"use client";

import OrbitAnimation from "./OrbitAnimation";
import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import useResponsive from "@/hooks/useResponsive";
import { Stars } from "@react-three/drei";
import { ArrowDown } from "lucide-react";
import { LoaderScreen } from "./LoaderScreen";
import { motion, stagger } from "motion/react";
import { useState } from "react";
import Typewriter from "typewriter-effect";

const containerVariants = {
  show: {
    opacity: 1,
    transition: { delayChildren: stagger(0.4), when: "beforeChildren", duration: 4.3 },
  },
  hide: {
    opacity: 0,
  },
};
const childVariants = {
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8},
  },
  hide: {
    opacity: 0,
    y: 10,
  },
};

const Hero = () => {
  const isLarge = useResponsive("width >= 1024px");
  const isSmall = useResponsive("width >= 640px");
  let fogFarPoint = 13;
  let radius = 65;
  if (isLarge) {
    fogFarPoint = 25;
  }
  if (isSmall) {
    radius = 100;
  }

  const [isVisible, setVisible] = useState(true); // LoaderScreen visibility state

  return (
    <section
      id="hero"
      className="text-white relative flex flex-col h-[95vh] sm:min-h-[700px] lg:h-screen"
    >
      {!isVisible && (
        <div className="absolute w-full hero-footer-px abs-x-center pt-[15vh] lg:pt-[13vh] z-10">
          <div className="mx-auto max-w-max">
            <h1 className="text-center text-[30px] leading-9 uppercase xs:text-[34px] xs:leading-10 sm:text-4xl md:text-[40px] md:leading-15 lg:text-[46px]">
              <Typewriter
                options={{
                  cursor: "_",
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Hey,")
                    .typeString(" I'm")
                    .typeString(
                      " <span style='color: #7bf1a8;'>Raymond Ogbuehi</span>"
                    )
                    .start();
                }}
              />
            </h1>
          </div>
          <motion.div
            initial="hide"
            animate="show"
            variants={containerVariants}
          >
            <motion.p
              variants={childVariants}
              className="text-center mt-7 w-4/5 mx-auto font-medium lg:text-lg max-w-[750px]"
            >
              I build web experiences that make you say,{" "}
              <span className="italic">"Hey, this isn't utter garbage!"</span>
            </motion.p>
            <motion.a
              variants={childVariants}
              className="mx-auto text-[15px] mt-6 text-black flex items-center group border-white relative w-[179px]"
              href="#projects"
            >
              <button className="hidden border-none sm:block p-1.5 rounded-full border-[1.5px] bg-gray-700 transition-transform duration-500 absolute -z-10 scale-0 group-hover:scale-100">
                <ArrowDown className="size-6 text-green-300" />
              </button>
              <button className="btn bg-white flex gap-2 items-center duration-500 transition-transform sm:group-hover:translate-x-[38.75%]">
                See projects
              </button>
              <button className="p-1.5 border-none rounded-full border-[1.5px] transition-transform absolute right-0 sm:group-hover:scale-0 duration-500 bg-gray-700">
                <ArrowDown className="size-6 text-white" />
              </button>
            </motion.a>
          </motion.div>
        </div>
      )}

      <LoaderScreen setVisible={setVisible} isVisible={isVisible} />
      <Canvas camera={{ fov: 30, position: [0, 0, 10] }}>
        {/* <CameraControls/> */}
        <fog attach="fog" args={["#000000", 8, fogFarPoint]} />
        <ambientLight intensity={1} />
        <pointLight intensity={1} position={[0, 0, 3]} />
        <OrbitAnimation />
        <Stars
          radius={radius} // how far the stars are
          depth={50} // star field depth (along camera ray)
          count={5000} // number of stars
          factor={4} // size factor
          saturation={1} // color saturation
          fade // makes stars fade at the edges
          speed={1} // twinkle speed
        />
        <EffectComposer>
          <Bloom
            intensity={1}
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
