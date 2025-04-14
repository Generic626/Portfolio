const ParagraphTitle = ({ title }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-highlight font-semibold text-[20px]">{title}</span>
      <hr className="text-highlight w-[60px]" />
    </div>
  );
};

export default ParagraphTitle;
