const ParagraphTitle = ({ title }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-highlight font-semibold">{title}</span>
      <hr className="text-highlight w-[40px]" />
    </div>
  );
};

export default ParagraphTitle;
