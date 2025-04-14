import { ProjectBlock } from "@/components/UI/Block";
import React from "react";
import projectList from "@/data/project";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full h-[60vh] flex justify-center items-center bg-foreground"
    >
      <div className="w-[70%] flex flex-col md:flex-row items-center gap-2">
        {/* Section Title */}
        <div className="w-1/2 flex justify-center items-center border border-zinc-600 rounded-lg p-4">
          <div className="grid grid-cols-12 grid-flow-dense gap-4">
            {/* Projects */}
            {projectList.map((item, index) => {
              return <ProjectBlock key={index} src={item.projectImg} />;
            })}
          </div>
        </div>

        {/* Project Bento */}
        <div className="w-1/2 flex flex-col px-5">
          <span className="text-[96px] text-highlight w-fit ">Projects</span>
          <span className="text-[22px]">
            These are the projects that I've helped build
          </span>
        </div>
      </div>
    </section>
  );
};

export default Projects;
