import { create } from "zustand";

const useProjectStore = create((set) => ({
  projectData: {
    projectThumbnail: "",
    projectImgList: [],
    title: "",
    description: "",
    projectUrl: "",
    badges: [
      { text: "", img: "" },
      { text: "", img: "" },
      { text: "", img: "" },
    ],
  },
  setData: (data) => set(() => ({ projectData: data })), // Pass data as an argument
  clearData: () =>
    set(() => ({
      projectData: {
        projectThumbnail: "",
        projectImgList: [],
        title: "",
        description: "",
        projectUrl: "",
        badges: [
          { text: "", img: "" },
          { text: "", img: "" },
          { text: "", img: "" },
        ],
      },
    })),
}));

export default useProjectStore;
