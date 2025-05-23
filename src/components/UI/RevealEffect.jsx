"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const ReavealEffect = ({
  children,
  initialX = 0,
  initialY = 0,
  duration = 1,
  delay = 0,
  viewOnlyOnce = false,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: viewOnlyOnce });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.span
      ref={ref}
      initial="hidden"
      variants={{
        hidden: { opacity: 0, x: initialX, y: initialY },
        visible: { opacity: 1, x: 0, y: 0 },
      }}
      animate={controls}
      transition={{ duration, delay }}
    >
      {children}
    </motion.span>
  );
};

export default ReavealEffect;
