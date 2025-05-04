"use client";
import NavItem from "./NavItem";
import { AiOutlineHome } from "react-icons/ai";
import { MdInfoOutline } from "react-icons/md";
import { MdBusinessCenter } from "react-icons/md";
import { FaDiagramProject } from "react-icons/fa6";
import { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    const links = document.querySelectorAll(".scroll-link");

    const handleScroll = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      const offset = 150; // Adjust this value for your desired offset

      const elementPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    };

    links.forEach((link) => {
      link.addEventListener("click", handleScroll);
    });

    // Cleanup function to remove event listeners
    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleScroll);
      });
    };
  }, []);

  return (
    <nav className="fixed border border-zinc-600 bg-foreground z-100 h-[55px] w-fit rounded-lg py-3 px-5 flex justify-center items-center gap-[64px] top-[50px] md:top-[30px] left-1/2 translate-x-[-50%]">
      <NavItem href="hero" icon={<AiOutlineHome />} lbl="Home" />
      <NavItem href="about" icon={<MdInfoOutline />} lbl="About" />
      <NavItem href="career" icon={<MdBusinessCenter />} lbl="Career" />
      <NavItem href="projects" icon={<FaDiagramProject />} lbl="Projects" />
    </nav>
  );
};

export default Navbar;
