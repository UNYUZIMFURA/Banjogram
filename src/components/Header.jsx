import { FiHeart } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div className="flex h-[8vh] items-center justify-around border-b border-[#3E4042] min-[410px]:justify-between min-[410px]:px-4">
      <span className="font-satisfy hidden cursor-pointer text-white min-[470px]:flex">
        Banjogram
      </span>
      <form className="w-68 flex h-[2.3rem] items-center justify-evenly rounded-md bg-[#272727] indent-8 outline-none">
        <CiSearch size={20} color="#a1a1a1" />
        <input
          className="h-full w-[80%] bg-[#272727] text-white outline-none placeholder:font-light placeholder:text-[#a1a1a1]"
          placeholder="Search"
        />
      </form>
      <FiHeart color="white" size={25} cursor="pointer" />
    </div>
  );
};

export default Header;
