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

  return (
    <section
      ref={container}
      className="con-px mt-26 mb-26 text-[#fffae2] sm:mt-35 md:!px-[10%]"
    >
      <h2 id="projects" className="sticky top-[60px] mb-9 md:top-[90px]">
        Projects
      </h2>
      <section className="project-wrapper relative flex flex-col gap-10">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} index={index + 1} />
        ))}
      </section>
    </section>
  );
};
export default Projects;
