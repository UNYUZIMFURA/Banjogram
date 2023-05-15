import { FiHeart } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div className="flex h-[8vh] items-center justify-center min-[470px]:justify-between px-8 border-b border-[#3E4042]">
      <span className="hidden cursor-pointer font-satisfy text-2xl text-white min-[470px]:flex">
        Banjogram
      </span>
      <div className="flex items-center h-full gap-6 px-2">
        <form className="w-68 flex h-[2.3rem] items-center justify-evenly rounded-md bg-[#272727] indent-8 outline-none">
          <CiSearch size={20} color="#a1a1a1" cursor="pointer" />
          <input
            className="h-full w-[80%] bg-[#272727] text-white outline-none placeholder:font-light placeholder:text-[#a1a1a1]"
            placeholder="Search"
          />
        </form>
        <FiHeart color="white" size={25} cursor="pointer" />
      </div>
    </div>
  );
};

export default Header;
