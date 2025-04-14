"use client";

import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge("col-span-4 rounded-lg", className)}
      {...rest}
    ></motion.div>
  );
};

const ProjectBlock = ({ src }) => {
  return (
    <Block whileHover={{ scale: 1.1 }} className="col-span-6 cursor-pointer">
      <img src={src} className="h-[150px] w-auto object-cover rounded-lg" />
    </Block>
  );
};

export default Block;

export { ProjectBlock };
