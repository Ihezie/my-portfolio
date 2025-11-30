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
      className="py-6 border-off-white border-t-2 gap-3 nav-footer-px font-semibold text-center flex flex-col-reverse justify-between items-center sm:flex-row"
    >
      <p className="text-sm text-left sm:text-base">
        © {year}{" "}
        <span className="text-green-300">Raymond Ogbuehi</span>. All
        rights reserved
      </p>
      <div className="flex gap-8 items-center sm:gap-5">
        {socials.map(({ title, link, icon }) => {
          let size = 35;
          if (title == "X/twitter") {
            size = 30;
          }
          return (
            <a target="_blank" className="inline-block" href={link} key={title}>
              <LordIcon icon={icon} size={size} />
            </a>
          );
        })}
      </div>
    </motion.footer>
  );
};
export default Footer;
