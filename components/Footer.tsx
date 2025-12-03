"use client"

import { socials } from "@/constants";
import LordIcon from "./LordIcon";
import { motion } from "motion/react";

const Footer = () => {
  const year = new Date().getFullYear();

  const containerVariants = {
    show: {
      opacity: 1,
      transition: {
        duration: 0.7,
      },
    },
    hide: {
      opacity: 0,
    },
  };

  return (
    <motion.footer
      variants={containerVariants}
      initial="hide"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.8,
      }}
      className="py-6 relative border-off-white border-t-2 gap-3 nav-footer-px font-semibold text-center justify-between flex flex-col-reverse items-center md:flex-row"
    >
      <div className="flex flex-col gap-3 items-center md:items-start md:gap-2">
        <p className="text-sm text-center lg:text-left sm:text-base">
          © {year} <span className="text-green-300">Raymond Ogbuehi</span>. All
          rights reserved
        </p>
        <a
          className="text-white/50 hover:text-white/80 font-medium transition-colors order-3 text-xs sm:text-sm"
          href="https://lordicon.com/"
        >
          Animated icons by Lordicon.com
        </a>
      </div>

      <div className="flex gap-8 items-center sm:gap-5">
        {socials.map(({ title, link, icon }) => {
          let size = 35;
          if (title == "X/twitter") {
            size = 30;
          }
          return (
            <a aria-label={title} target="_blank" className="inline-block" href={link} key={title}>
              <LordIcon icon={icon} size={size} />
            </a>
          );
        })}
      </div>
    </motion.footer>
  );
};
export default Footer;
