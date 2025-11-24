"use client";

import ProjectCard from "./ProjectCard";
import { projects } from "@/constants";
import { containerVariants, childVariants, viewPortOptions } from "../motion-variants";
import { motion } from "motion/react";

const Projects = () => {
  return (
    <motion.section
      initial="hide"
      whileInView="show"
      variants={containerVariants}
      viewport={{
        amount: 0.05,
        once: true,
      }}
      className="section-px mt-26 text-[#fffae2] sm:mt-35"
    >
      <motion.h2
        variants={childVariants}
        id="projects"
        className="sticky top-[60px] mb-9 md:top-[90px] md:mb-11"
      >
        Projects
      </motion.h2>
      <motion.section
        variants={childVariants}
        className="project-wrapper relative flex flex-col gap-18 lg:gap-25"
      >
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} index={index + 1} />
        ))}
      </motion.section>
    </motion.section>
  );
};
export default Projects;
