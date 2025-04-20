"use client";
import HighlightButton from "@/components/UI/HighlightButton";
import { BsEnvelope, BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  const handleSocialOnClick = (url) => {
    window.open(url, "_blank");
  };
  return (
    <section
      id="footer"
      className="w-full h-[40vh] flex justify-center items-center bg-foreground px-4 md:px-32"
    >
      <div className="flex flex-col gap-5 md:justify-center items-center w-full bg-background border border-zinc-600 rounded-lg p-12">
        {/* Social Icons */}
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

        {/* Trademark */}
        <span className="text-zinc-400 text-[16px] flex items-center">
          2024 Matthew Fung © All rights reserved
        </span>
      </div>
    </section>
  );
};

export default Footer;
