"use client";

import ProjectCard from "./ProjectCard";
import { projects } from "@/constants";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);
const Projects = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLDivElement>(".project-card");
      cards.forEach((card, i) => {
        gsap.to(card, {
          scale: 0.8 + 0.025 * i,
          transformOrigin: "top center",
          scrollTrigger: {
            trigger: card,
            start: "top " + (60 + 20 * i),
            end: "bottom 550",
            endTrigger: ".project-wrapper",
            scrub: 3,
            pin: card,
            pinSpacing: false,
          },
        });
      });
    },
    { scope: container }
  );
  return (
    <section
      ref={container}
      className="con-px mt-10 mb-26 text-[#fffae2] sm:mt-35 md:!px-[10%]"
    >
      <h1
        id="projects"
        className="text-center text-3xl mb-15 uppercase sm:text-4xl"
      >
        Projects
      </h1>
      <section className="project-wrapper relative flex flex-col gap-10">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} index={index+1} />
        ))}
      </section>
    </section>
  );
};
export default Projects;
