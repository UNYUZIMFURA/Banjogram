import { SearchSvg, HeartSvg } from "../../SVGs/SvgElements";

const Header = () => {
  return (
    <div className="flex h-[8vh] w-full items-center justify-center min-[470px]:justify-between px-4 border-b border-[#3E4042] md:hidden">
      <span className="hidden cursor-pointer font-light font-igfont text-[1.8rem] text-white min-[470px]:flex">
        Banjogram
      </span>
      <div className="flex items-center h-full gap-6 px-2">
        <form className="max-w-68 flex h-9 items-center justify-evenly rounded-md bg-[#272727] indent-8 outline-none">
          <SearchSvg />
          <input
            className="h-full w-[80%] bg-[#272727] text-white outline-none placeholder:font-light placeholder:text-[#a1a1a1]"
            placeholder="Search"
          />
        </form>
        <HeartSvg />
      </div>
    </div>
  );
};

export default Header;
