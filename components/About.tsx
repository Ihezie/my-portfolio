"use client";

import { skills } from "@/constants";
import Image from "next/image";
import { motion, stagger } from "motion/react";
import { SplitText, gsap, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, Link } from "lucide-react";

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
    let paragraphs = gsap.utils.toArray<HTMLParagraphElement>(".split-text");
    paragraphs.forEach((p) => {
      let split = SplitText.create(p, { type: "words" });
      gsap.from(split.words, {
        scrollTrigger: p,
        duration: 1,
        y: 10,
        autoAlpha: 0,
        stagger: 0.03,
      });
    });
  });

  return (
    <motion.section
      id="about"
      initial={{
        opacity: 0,
      }}
      viewport={{
        amount: 0.2,
        once: true,
      }}
      whileInView={{
        opacity: 1,
      }}
      className="mt-26 section-px"
    >
      <h2 className="mb-8 sm:mb-13 lg:mb-15">About</h2>
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
              type: "tween",
            }}
          >
            <Image
              className="rounded-2xl
             max-h-[450px] object-cover w-[85%] max-w-[530px] translate-x-[5%] md:w-full lg:max-h-none origin-bottom md:rounded-3xl sm:translate-x-0 sm:mx-auto"
              src="/personal-images/raymond-4.jpeg"
              width={3024}
              height={4032}
              alt="raymond"
            />
          </motion.div>
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{
                filter: "blur(0px)",
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
                type: "tween",
              }}
              className="absolute border border-white h-full top-0 w-[85%] max-w-[530px] rounded-2xl -z-10  origin-bottom bg-background translate-x-[5%] sm:-translate-x-1/2 sm:left-1/2 md:w-full"
            ></motion.div>
          ))}
        </div>
        <div>
          <div className="flex flex-col gap-5 font-medium ">
            <p className="split-text">
              I’m a frontend developer with a mission to craft websites that
              leave users with a lasting impression. I have a solid grasp of the
              technologies that power the web, and I use this knowledge to
              create accessible, responsive, and beautiful websites. Bring those
              designs my way, and I'll treat them right.
            </p>

            <p className="split-text">
              I am constantly improving my skills and finding better ways to
              complete tasks. I’m very willing to learn — I promise, I mean it.
              I also have no qualms working within teams; check out{" "}
              <a href="https://flickmart.app/" className="inline-flex transition-all items-start text-green-300 group">
              FlickMart
                <ArrowUpRight className="size-4"/>
              </a>{" "}
              , an online student marketplace I helped build with a group of
              developers from my university.
            </p>

            <p className="split-text">
              My current full-time job is trying to stay sane while pursuing a
              Computer Science degree at the University of Nigeria, so I’m quite
              open to job opportunities or collaborations on cool projects.
            </p>

            <p className="split-text">
              When I’m not coding, you can find me reading a good book (Red
              Rising for the win!), watching a TV series, or blissfully
              listening to my favourite jams (Beyoncé is the GOAT).
            </p>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hide"
            whileInView="show"
            viewport={{
              amount: 0.5,
              once: true,
            }}
          >
            <motion.h3 variants={childVariants} className="mt-6 text-white">
              My Skills
            </motion.h3>
            <div className="flex flex-wrap gap-3 mt-6 items-center mb-20">
              {skills.map(({ tech, logo }) => {
                const darkTheme = [
                  "Motion",
                  "React",
                  "GSAP",
                  "Figma",
                  "Javascript",
                ];
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
