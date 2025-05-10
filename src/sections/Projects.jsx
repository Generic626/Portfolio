"use client";
import { ProjectBlock } from "@/components/UI/Block";
import { useState } from "react";
import projectList from "@/data/project";
import ProjectModal from "@/components/ProjectModal";
import { motion } from "framer-motion";

const Projects = () => {
  const [open, setOpen] = useState(false);

  const handleProjectClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <section
      id="projects"
      className="w-full md:h-[60vh] py-8 md:py-0 flex justify-center items-center bg-foreground relative"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0 }}
        viewport={{ once: true }}
        className="w-[90%] md:w-[70%] flex flex-col md:flex-row items-center gap-2 z-20"
      >
        {/* Project Bento */}
        <div className="bg-foreground order-2 md:order-1 w-full md:w-1/2 flex justify-center items-center border border-zinc-600 rounded-lg p-4">
          <div className="grid grid-cols-12 grid-flow-dense gap-4">
            {/* Projects */}
            {projectList.map((item, index) => {
              return (
                <ProjectBlock
                  key={index}
                  onClickHandler={handleProjectClick}
                  projectData={item}
                />
              );
            })}
          </div>
        </div>

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0 }}
          viewport={{ once: true }}
          className="order-1 md:order-2 w-full md:w-1/2 flex flex-col md:justify-center px-5 mb-2 md:mb-0"
        >
          <span className="text-[96px] text-highlight w-fit ">Projects</span>
          <span className="text-[22px]">
            These are the projects that I've helped build
          </span>
        </motion.div>
      </motion.div>

      {/* Top right corner Decor*/}
      <img
        src="/UI/right-top-decor.png"
        className="absolute  right-8 top-12 md:top-4 h-[10%]"
      />

      {/* Square Decor*/}
      <img
        src="/UI/square-decor.png"
        className="absolute bottom-0 left-0  md:left-4 md:bottom-4 h-[15%]"
      />
      {/* Project Modal */}
      <ProjectModal open={open} handleClose={handleClose} />
    </section>
  );
};

export default Projects;
