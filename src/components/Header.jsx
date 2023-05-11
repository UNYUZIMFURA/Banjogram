import { FiHeart } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div className="flex h-[8vh] items-center justify-around border-b border-[#3E4042]">
      <form className="flex h-[2.3rem] w-68 items-center justify-evenly rounded-md bg-[#272727] indent-8 outline-none">
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
