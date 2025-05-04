import Description from "@/components/UI/Description";
import ExperienceLabel from "@/components/ExperienceLabel";
import ParagraphTitle from "@/components/UI/ParagraphTitle";
import TechCard from "@/components/TechCard";
import careerList from "@/data/career";
import ExperienceCard from "@/components/ExperienceCard";

const About = () => {
  return (
    <section
      id="about"
      className="w-full h-auto py-16  flex flex-col justify-center items-center gap-14 md:gap-16 relative"
    >
      <div className="w-[80%] md:w-[75%] lg:w-[60%] xl:w-[50%] flex flex-col lg:flex-row gap-2 z-20">
        {/* About Me */}
        <div className="lg:w-1/2 flex flex-col gap-4">
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

        {/* Skills */}
        <div className="lg:w-1/2 mt-4 md:mt-0 flex flex-col">
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

      <div
        id="career"
        className="w-[80%] md:w-[75%] lg:w-[60%] xl:w-[50%] z-20"
      >
        <div className="w-full pb-8 pt-0 flex flex-col items-center gap-5">
          {careerList.map((item, index) => {
            return (
              <ExperienceCard
                key={index}
                src={item.companyLogo}
                company={item.company}
                role={item.jobTitle}
                description={item.jobDesc}
                dates={item.timeframe}
                badges={item.badges}
              />
            );
          })}
        </div>
      </div>

      {/* Circular Decor */}
      <img
        src="/UI/circular-decor.png"
        className="absolute left-0 top-[10%] transform translate-x-[-55%] h-[15%] md:h-[30%]"
      />

      {/* Circular Decor */}
      <img
        src="/UI/circular-decor.png"
        className="absolute right-0 top-[60%] transform translate-x-[55%] h-[15%] md:h-[30%]"
      />

      {/* Decor */}
      <img
        src="/UI/decor.png"
        className="absolute left-0 bottom-0 h-[10%] md:h-[30%]"
      />
    </section>
  );
};

export default About;
