import githubIcon from "./public/animated-icons/wired-outline-2572-logo-github-hover-pinch.json";
import twitterIcon from "./public/animated-icons/wired-outline-2714-logo-x-hover-pinch.json";
import linkedinIcon from "./public/animated-icons/wired-outline-2632-logo-circle-linkedin-hover-draw.json";

const socials = [
  {
    title: "github",
    link: "https://github.com/Ihezie",
    icon: githubIcon,
  },
  {
    title: "linkedin",
    link: "https://linkedin.com/in/raymond-ogbuehi",
    icon: linkedinIcon,
  },
  {
    title: "X/twitter",
    link: "https://x.com/IhezieOgbuehi",
    icon: twitterIcon,
  },
];


const navLinks = ["home", "projects", "about", "contact"];

const projects = [
  {
    title: "Unripe Plantain",
    description:
      "A personal women's lifestyle blog inspired by my sister, offering insights, ideas, and everyday inspiration—plus the ability to comment, like, and save your favourite posts.",
    image: "/project-screenshots/unripe-plantain.png",
    techStack: [
      "TypeScript",
      "Next.js",
      "React",
      "Tailwind CSS",
      "Sanity",
      "Auth.js",
    ],
    githubLink: "https://github.com/Ihezie/unripe-plantain",
    liveLink: "https://unripe-plantain.vercel.app/",
  },
  {
    title: "FlickMart",
    description:
      "FlickMart is a modern e-commerce platform that allows users to buy and sell products in a secure, user-friendly marketplace, simplifying online transactions for both buyers and sellers.",
    image: "/project-screenshots/flickmart.png",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "React Query",
      "Tailwind CSS",
      "Zod",
      "Convex",
    ],
    githubLink: "",
    liveLink: "https://flickmart.app/",
  },
  {
    title: "Where in the world?",
    description:
      "A country information website featuring search, region-based filtering, and dark mode support. Users can browse country cards with key details and view dedicated pages for each country containing expanded information.",
    image: "/project-screenshots/where-in-the-world.png",
    techStack: ["React", "React Router", "Tailwind CSS", "Axios"],
    githubLink: "https://github.com/Ihezie/where-in-the-world",
    liveLink: "https://where-in-the-world-fawn-eight.vercel.app/",
  },
  {
    title: "Scoot",
    description:
      "A multi-page website for Scoot, a fictional scooter transportation company, designed to showcase its services and brand identity through engaging content and a user-friendly interface.",
    image: "/project-screenshots/scoot.png",
    techStack: ["React", "Tailwind CSS", "Framer Motion", "React Router"],
    githubLink: "https://github.com/Ihezie/Scoot-Multi-Page-Website.git",
    liveLink: "https://scoot-multi-page-site.netlify.app/",
  },
  {
    title: "Bookmark",
    description:
      "A landing page for a fictional bookmark manager extension. This was my first time working with an animation library (Framer Motion).",
    image: "/project-screenshots/bookmark-landing-page.png",
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com/Ihezie/bookmark-landing-page.git",
    liveLink: "https://musical-moxie-bab6e3.netlify.app/",
  },
  {
    title: "Multi Step Form",
    description:
      "A multi-step registration form for a fictional gaming site’s subscription service, guiding users through plan selection and payment details in a structured flow with validation at each step.",
    image: "/project-screenshots/multi-step-form.png",
    techStack: ["React", "Tailwind CSS", "Framer Motion", "React Hook Form"],
    githubLink: "https://github.com/Ihezie/multi-step-form.git",
    liveLink: "https://candid-empanada-2ade87.netlify.app/",
  },
  {
    title: "Rock Paper Scissors Lizard Spock",
    description:
      "A web-based version of Rock-Paper-Scissors that expands the original game with two additional moves and a more detailed set of interactions.",
    image: "/project-screenshots/rock-paper-scissors.png",
    techStack: ["React", "Tailwind"],
    githubLink:
      "https://github.com/Ihezie/rock-paper-scissors-lizard-spock-game.git",
    liveLink: "https://rock-paper-scissors-lizard-spock-app.netlify.app/",
  },
];

const skills = [
  {
    tech: "Javascript",
    logo: "/tech-logos/javascript.svg",
  },
  {
    tech: "Typescript",
    logo: "/tech-logos/typescript.svg",
  },
  {
    tech: "React",
    logo: "/tech-logos/react.svg",
  },
  {
    tech: "Next.js",
    logo: "/tech-logos/nextjs.svg",
  },
  {
    tech: "Sanity",
    logo: "/tech-logos/sanity.svg",
  },
  {
    tech: "Tailwind CSS",
    logo: "/tech-logos/tailwind.svg",
  },
  {
    tech: "Figma",
    logo: "/tech-logos/figma.svg",
  },
  {
    tech: "Motion",
    logo: "/tech-logos/motion.svg",
  },
  {
    tech: "GSAP",
    logo: "/tech-logos/gsap.svg",
  },
  {
    tech: "Three.js",
    logo: "/tech-logos/threejs.svg",
  },
];

export { socials, navLinks, projects, skills };
