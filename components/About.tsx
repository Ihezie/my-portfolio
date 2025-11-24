"use client";

import { skills } from "@/constants";
import Image from "next/image";
import { motion, stagger } from "motion/react";
import { SplitText, gsap, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, useGSAP, ScrollTrigger);

export const containerVariants = {
  show: {
    opacity: 1,
    transition: {
      delayChildren: stagger(0.1),
      when: "beforeChildren",
    },
  },
  hide: {
    opacity: 1,
  },
};
export const childVariants = {
  show: {
    opacity: 1,
    y: 0,
    rotate: 0,
  },
  hide: {
    opacity: 0,
    rotate: 4,
    y: 15,
  },
};
export const viewPortOptions = {
  once: true,
  amount: "all",
};

const About = () => {
  useGSAP(() => {
    let split = SplitText.create(".split-text", { type: "words" });

    gsap.from(split.words, {
      scrollTrigger: ".split-text",
      duration: 1,
      y: 10,
      autoAlpha: 0,
      stagger: 0.03,
    });
  });

  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      viewport={{
        amount: 0.3,
        once: true,
      }}
      whileInView={{
        opacity: 1,
      }}
      className="mt-26 section-px"
    >
      <h2 id="about" className="mb-8 sm:mb-13 lg:mb-15">
        About
      </h2>
      <div className="lg:grid lg:grid-cols-[55%_40%] xl:grid-cols-[62%_33%] lg:gap-[5%] lg:items-start">
        <div className="relative rounded-3xl mb-14 md:order-2 self-center">
          <motion.div
            initial={{
              rotate: 0,
            }}
            viewport={{
              amount: "all",
              once: true,
            }}
            whileInView={{
              rotate: -3,
            }}
            transition={{
              duration: 0.4,
            }}
          >
            <Image
              className="rounded-2xl
             max-h-[450px] object-cover w-[85%] max-w-[530px] md:w-full lg:max-h-none mx-auto origin-bottom md:rounded-3xl"
              src="/personal-images/raymond-3.jpeg"
              width={3024}
              height={4032}
              alt="raymond"
            />
          </motion.div>

          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                rotate: 0,
              }}
              viewport={{
                amount: "all",
                once: true,
              }}
              whileInView={{
                opacity: 1,
                rotate: (i + 1) * 2.5,
                filter: `blur(${(i + 1) / 1.8}px)`,
              }}
              style={{
                zIndex: -(i + 1),
              }}
              transition={{
                duration: 0.4,
              }}
              className="absolute border border-white h-full top-0 w-[85%] max-w-[530px] rounded-2xl -z-10  origin-bottom bg-background abs-x-center md:w-full"
            ></motion.div>
          ))}
        </div>
        <div>
          <div className="flex flex-col gap-5 font-medium ">
            <p className="split-text">
              I am a frontend developer dedicated to crafting clean, responsive,
              and user-centered web interfaces. My focus is on translating
              ideas, wireframes, and visual concepts into well-structured code
              that works seamlessly across a wide range of devices and screen
              sizes. I approach every project with a strong emphasis on clarity,
              accessibility, and long-term maintainability.
            </p>
            <p className="split-text">
              My core skill set includes HTML, CSS, and JavaScript, complemented
              by modern frontend frameworks and tools that help streamline
              development workflows and improve performance. I work with
              component-based architectures, responsive design principles, and
              best practices that ensure consistent and scalable user
              experiences. I also pay close attention to browser compatibility,
              optimization techniques, and clean UI patterns.
            </p>
            <p className="split-text">
              I enjoy transforming static designs into dynamic, interactive
              elements that engage users while keeping performance and
              accessibility at the forefront. Whether working with CSS
              animations, state management, or API integrations, I focus on
              building interfaces that feel intuitive and polished.
            </p>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hide"
            whileInView="show"
            viewport={{
              amount: "all",
              once: true,
            }}
          >
            <motion.h3 variants={childVariants} className="mt-6">
              My Tools
            </motion.h3>
            <div className="flex flex-wrap gap-3 mt-6 items-center mb-20">
              {skills.map(({ tech, logo }) => {
                const darkTheme = ["Motion", "React", "GSAP"];
                return (
                  <motion.div
                    variants={childVariants}
                    viewport={{
                      amount: "all",
                      once: true,
                    }}
                    key={tech}
                    className={`font-bold text-black px-[6px] py-[2px] origin-top-left rounded flex items-center ${
                      darkTheme.includes(tech)
                        ? "bg-gray-800 text-white"
                        : "bg-white"
                    }`}
                  >
                    <Image
                      src={logo}
                      alt={tech}
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    {tech}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
    // Add a favourite stuff section
  );
};
export default About;
