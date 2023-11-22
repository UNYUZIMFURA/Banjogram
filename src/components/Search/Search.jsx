import { HeartSvg } from "../../SVGs/SvgElements";

const Header = () => {
  return (
    <div className="flex h-[3.3rem] w-full justify-center items-center border-b border-[#3E4042] px-4 min-[470px]:justify-between md:hidden">
      <span className="hidden cursor-pointer font-igfont text-[1.8rem] font-light text-white min-[470px]:flex">
        Banjogram
      </span>
      <div className="flex h-full items-center gap-12 min-[470px]:gap-8 px-2">
        <form className="max-w-68 flex h-9 items-center justify-evenly rounded-md bg-[#272727] indent-8 outline-none">
          <input
            className="h-full w-[80%] bg-[#272727] text-white outline-none placeholder:font-light placeholder:text-[#cfcfcf]"
            placeholder="Search"
          />
        </form>
        <HeartSvg />
      </div>
    </div>
  );
};

export default Header;
