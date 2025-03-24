"use client";

import ParagraphTitle from "@/components/ParagraphTitle";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { GoDownload } from "react-icons/go";
import HighlightButton from "@/components/HighlightButton";

const Hero = () => {
  const handleSocialOnClick = (url) => {
    window.open(url, "_blank");
  };
  return (
    <section id="hero" className="w-full h-[90vh] bg-foreground relative">
      {/* Name */}
      <div className="absolute left-[15%] top-[50%] translate-y-[-50%] text-[64px]/14 font-semibold text-white text-center w-fit z-20">
        <div>Fung Matthew</div>
        <div>Tze-Ken</div>
      </div>

      {/* Hero */}
      <img
        src="./assets/landing.png"
        className="w-[30%] absolute bottom-0 left-[50%] translate-x-[-50%] z-30"
      />

      {/* Short Description */}
      <div className="flex flex-col gap-2 absolute right-[16%] top-[60%] translate-y-[-60%] text-white w-[280px]">
        <ParagraphTitle title="Hello" />
        <p className="text-[32px]/8">
          I'm a Software Engineer working in Hong Kong.
        </p>
        <div className="flex gap-4 justify-center lg:justify-normal items-center my-4">
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
        <div className="hidden md:flex justify-center lg:justify-normal">
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
    </section>
  );
};

export default Hero;
