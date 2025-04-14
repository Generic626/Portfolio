const Navbar = () => {
  return (
    <nav className="fixed border border-zinc-600 bg-foreground z-50 h-[60px] w-fit rounded-lg py-4 px-5 flex justify-center items-center gap-[64px] left-1/2 top-[30px] translate-x-[-50%]">
      <span className="cursor-pointer text-lg">Home</span>
      <span className="cursor-pointer text-lg">About Me</span>
      <span className="cursor-pointer text-lg">Career</span>
      <span className="cursor-pointer text-lg">Projects</span>
    </nav>
  );
};

export default Navbar;
