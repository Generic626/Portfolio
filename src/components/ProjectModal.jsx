"use client";

import { Modal } from "@mui/material";
import useProjectStore from "@/store/useProjectStore";
import Paragraph from "./UI/Paragraph";
import Badge from "./UI/Badge";

const ProjectModal = ({ open, handleClose }) => {
  const { projectData } = useProjectStore();

  const badgeList = projectData.badges.map(({ text, img }, index) => (
    <Badge key={index} className="bg-[#0A315F]" text={text} img={img} />
  ));
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="flex justify-center items-center border-none"
    >
      <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] 2xl:w-[50%] flex justify-center items-center flex-col border-none">
        {/* Project Image */}
        <img
          src={projectData.projectImgList[0]}
          className="rounded-t-lg w-auto"
          alt={projectData.title}
        />
        {/* Project Description */}
        <div className="p-4 rounded-b-md bg-foreground flex flex-col gap-2 w-full">
          {/* Project Title */}
          <h2 className="text-xl font-bold text-highlight">
            {projectData.title}
          </h2>

          {/* Description */}
          <p>{projectData.description}</p>

          {/* Badges */}
          <div className="flex gap-2">{badgeList}</div>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectModal;
