import Badge from "./UI/Badge";

const ExperienceCard = ({ src, company, role, dates, description, badges }) => {
  const badgeList = badges.map(({ text, img }, index) => (
    <Badge key={index} className="bg-[#0A315F]" text={text} img={img} />
  ));
  return (
    <div className="border border-zinc-600 rounded-lg flex flex-col items-stretch w-full max-w-screen-lg px-6 py-[27px] md:px-[33px] gap-3 bg-foreground">
      {/* Experience top Row */}
      <div className="flex flex-col items-start md:flex-row gap-1 md:gap-0 md:justify-between">
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          <img
            src={src}
            width="24"
            height="24"
            className="bg-white rounded-full"
          />
          <h3 className="text-xl font-medium">{company}</h3>
        </div>
        <p className="text-base md:text-xl font-medium">{role}</p>
      </div>
      {/* Description */}
      <p className="text-sm md:text-base">{description}</p>
      {/* Time Frame */}
      <p className="text-sm md:text-base">{dates}</p>
      {/* Badges */}
      <div className="flex gap-2">{badgeList}</div>
    </div>
  );
};

export default ExperienceCard;
