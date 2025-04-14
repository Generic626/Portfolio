import Description from "@/components/UI/Description";
import ExperienceLabel from "@/components/ExperienceLabel";
import ParagraphTitle from "@/components/UI/ParagraphTitle";
import TechCard from "@/components/TechCard";

const About = () => {
  return (
    <section
      id="about"
      className="w-full h-[50vh] flex justify-center items-center"
    >
      <div className="w-[70%] flex flex-col md:flex-row gap-2">
        <div className="w-1/2 flex flex-col gap-4">
          <ParagraphTitle title="About Me" />
          <Description
            text="I graduated from PolyU in 2024 as a Computing Major.
            I'm now working as a Software Engineer in Hong Kong specializing in Web Devlopment. My
            duties are to bring client's specifications and requirements to life
            using HTML and CSS. I've helped created an AI Chatbot SaaS platform
            using ASP.net."
          />
          <div className="flex gap-2">
            <ExperienceLabel
              years={1}
              qualification={"Year Fulltime Experience"}
            />
            <ExperienceLabel
              years={1}
              qualification={"Year Part-time Experience"}
            />
          </div>
        </div>

        <div className="w-1/2 flex flex-col">
          <span className="text-[32px] font-semibold mb-4">My Core Skills</span>
          <div className="grid grid-cols-3 gap-2">
            <TechCard src={"/tech/html.png"} />
            <TechCard src={"/tech/css.png"} />
            <TechCard src={"/tech/react.png"} />
            <TechCard src={"/tech/tailwind.png"} />
            <TechCard src={"/tech/framer-motion.png"} />
            <TechCard src={"/tech/dotnet.png"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
