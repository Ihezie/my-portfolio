import { motion, AnimatePresence } from "motion/react";
import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

export function LoaderScreen({
  isVisible,
  setVisible,
}: {
  isVisible: boolean;
  setVisible: (visible: boolean) => void;
}) {
  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => setVisible(false), 300); // small delay before fade
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  const loaderVariants = {
    show: {
      backgroundColor: "#000000",
    },
    hide: {
      backgroundColor: "#00000050",
      backdropFilter: "blur(20px)",
      y: [0, 0, "-100%"],
      transition: { duration: 1.2 },
    },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          variants={loaderVariants}
          initial="show"
          exit="hide"
          className="fixed inset-0 flex items-center justify-center bg-black z-[9999] text-white text-2xl font-audiowide"
        >
          <motion.div
            exit={{ opacity: 0 }}
            className="text-2xl mb-4 sm:text-3xl"
          >
            {Math.floor(progress)}%
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
