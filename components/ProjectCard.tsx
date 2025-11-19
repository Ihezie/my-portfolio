"use client";

import Image from "next/image";
import LordIcon from "./LordIcon";
import linkIcon from "../public/animated-icons/wired-outline-11-link-unlink-hover-bounce.json";
import GithubIcon from "../public/animated-icons/wired-outline-2572-logo-github-hover-pinch.json";
import useResponsive from "@/hooks/useResponsive";

interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubLink: string;
  liveLink: string;
}
const ProjectCard = ({
  project: { title, description, image, techStack, githubLink, liveLink },
  index,
}: {
  project: Project;
  index: number;
}) => {
  const isLarge = useResponsive("width >= 1024px");
  //Check position in card list. Unable to use tailwind due to GSAP interference
  const isEven = index % 2 === 0;

  return (
    <div
      className={`rounded-[30px] overflow-hidden border-[1.5] bg-[#0e1015] mx-auto lg:h-[500px] lg:grid ${
        isEven ? "lg:grid-cols-[45%_55%]" : "lg:grid-cols-[55%_45%]"
      } group project-card sticky top-[159px] md:top-[197px] lg:top-[194px]`}
    >
      <div className={isEven ? "" : "order-2"}>
        <div
          className={`sm:flex sm:px-6 sm:justify-between sm:items-center sm:mb-8 sm:pt-3 lg:flex lg:items-start lg:flex-col-reverse lg:border-0 lg:gap-23 lg:px-8 lg:mb-3 lg:pt-7 xl:gap-32 ${
            isEven ? "" : "xl:pl-20"
          }`}
        >
          <h3 className="pt-3 px-5 sm:text-left sm:px-0 sm:py-0 sm:mb-0">
            {title}
          </h3>
          <div
            className={`flex items-center mt-4 mb-4 gap-5 font-semibold px-5 sm:px-0 sm:my-0 lg:gap-7 lg:w-full ${
              isEven ? "" : "lg:justify-end"
            } `}
          >
            <a href={githubLink} className="h-10">
              <LordIcon icon={GithubIcon} size={isLarge ? 50 : 40} />
            </a>
            <a href={liveLink} className="h-10">
              <LordIcon icon={linkIcon} size={isLarge ? 50 : 40} />
            </a>
          </div>
        </div>
        <div className={`px-5 sm:px-6 lg:px-8 ${isEven ? "" : "xl:pl-20"} `}>
          <p>{description}</p>
          <ul className="mt-6 font-bold flex gap-x-5 gap-y-1 flex-wrap lg:text-lg lg:mt-8 xl:mt-10">
            {techStack.map((stack) => (
              <li key={stack}>{stack}</li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={`overflow-hidden mt-6 relative sm:mt-8 ${
          isEven ? "lg:order-1" : ""
        } lg:mt-0 lg:self-end`}
      >
        <Image
          src={image}
          width={2244}
          height={1469}
          alt={title}
          className={`translate-y-[1%] ${
            isEven ? "translate-x-[1%] float-right" : "-translate-x-[1%]"
          } w-3/4 lg:w-full`}
        />
      </div>
    </div>
  );
};
export default ProjectCard;
