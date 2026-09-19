"use client";
import React, { useEffect, useRef } from "react";
import {
  motion,
  useAnimation,
  useInView,
  useReducedMotion,
} from "framer-motion";

const Reveal = ({ children, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  if (reduceMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <div ref={ref} className={className}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
