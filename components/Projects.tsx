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
      // gsap.to("#projects", {
      //   scrollTrigger: {
      //     trigger: "#projects",
      //     start: "top 60",
      //     end: "bottom 550",
      //     endTrigger: ".project-wrapper",
      //     pin: "#projects",
      //     pinSpacing: false,
      //   },
      // });
      gsap.to("#projects", {
        opacity: 0.5,
        // color: "#7bf1a8",
        scrollTrigger: {
          trigger: ".project-wrapper",
          start: "top 200",
          end: "top 125",
          endTrigger: ".project-wrapper",
          scrub: true,
        },
      });
    },
    { scope: container }
  );
  return (
    <section
      ref={container}
      className="con-px mt-26 mb-26 text-[#fffae2] sm:mt-35 md:!px-[10%]"
    >
      <h1
        id="projects"
        className="text-center font-teko font-bold mb-15 uppercase text-[75px] sticky top-[60px] sm:text-[100px] md:text-[120px] lg:text-[140px]"
      >
        Projects
      </h1>
      <section className="project-wrapper relative flex flex-col gap-10">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} index={index + 1} />
        ))}
      </section>
    </section>
  );
};
export default Projects;
