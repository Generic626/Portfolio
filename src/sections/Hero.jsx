"use client";

import ParagraphTitle from "@/components/UI/ParagraphTitle";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { GoDownload } from "react-icons/go";
import HighlightButton from "@/components/UI/HighlightButton";
import Paragraph from "@/components/UI/Paragraph";

const Hero = () => {
  const handleSocialOnClick = (url) => {
    window.open(url, "_blank");
  };
  return (
    <section
      id="hero"
      className="w-full h-[80vh] md:h-[90vh] bg-foreground relative flex justify-center"
    >
      <div className="relative h-full w-[85%] sm:w-[531px] md:w-[637px] lg:w-[849px] xl:w-[1062px] 2xl:w-[1274px]">
        {/* Name */}
        <div className="absolute left-[50%] translate-x-[-50%] md:left-[11%] md:translate-x-0 top-[25%] md:top-[63%] md:translate-y-[-63%] text-[96px] md:text-[128px]/36 font-semibold text-highlight text-center w-fit h-fit md:z-20">
          <div>Matthew</div>
          <div className="md:ml-[64px]">Fung</div>
        </div>

        {/* Hero */}
        <img
          src="./assets/landing.png"
          className="w-[380px] h-[530px] md:w-[465px] md:h-[650px]  absolute bottom-0 left-[50%] translate-x-[-50%] z-30"
        />

        {/* Short Description */}
        <div className="flex flex-col gap-2 absolute right-[50%] translate-x-[50%] lg:right-[10%] lg:translate-x-0 xl:right-[20%] top-[60%] lg:top-[75%] lg:translate-y-[-75%] text-white w-[280px] z-50 p-2 bg-foreground/80 lg:bg-none rounded-md">
          <ParagraphTitle title="Hello there" />
          <Paragraph text="I'm a Software Engineer working in Hong Kong." />
          <div className="flex gap-4 justify-normal items-center my-4">
            <BsGithub
              className="social-icons"
              onClick={() => {
                handleSocialOnClick("https://github.com/Generic626");
              }}
            />
            <FaLinkedin
              className="social-icons"
              onClick={() => {
                handleSocialOnClick(
                  "https://www.linkedin.com/in/matthew-tze-ken-fung-01736b270/"
                );
              }}
            />
            <a href="mailto:someone@example.com">
              <IoMdMail className="social-icons" />
            </a>
          </div>
          {/* Resume Button */}
          <div className="flex justify-normal">
            <HighlightButton
              onClickHandler={() => {
                window.open(
                  "/Fung_Matthew_Tze_Ken_Resume_(IT)_2023.pdf",
                  "_blank"
                );
              }}
              text="Full Resume"
              icon={<GoDownload />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
