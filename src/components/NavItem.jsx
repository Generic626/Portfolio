const NavItem = ({ href, icon, lbl }) => {
  return (
    <a href={`#${href}`} className="scroll-link">
      <div className="md:hidden text-[24px]">{icon}</div>
      <span className="cursor-pointer hidden md:block">{lbl}</span>
    </a>
  );
};

export default NavItem;
