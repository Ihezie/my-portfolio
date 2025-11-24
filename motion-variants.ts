import { stagger } from "motion/react";

export const heroVariants = {
  show: {
    opacity: 1,
    transition: {
      delayChildren: stagger(0.4),
      when: "beforeChildren",
      duration: 4.3,
    },
  },
  hide: {
    opacity: 0,
  },
};
export const containerVariants = {
  show: {
    opacity: 1,
    transition: {
      delayChildren: stagger(0.4),
      when: "beforeChildren",
    },
  },
  hide: {
    opacity: 0,
  },
};
export const childVariants = {
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
  hide: {
    opacity: 0,
    y: 10,
  },
};
export const viewPortOptions = {
    once: true,
    amount: 0.2,
}
