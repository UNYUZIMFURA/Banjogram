import { FiHeart } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div className="flex h-[7.5vh] items-center gap-4 border-b px-4">
      <form className="flex w-full items-center justify-around">
        <div className="flex h-[2rem] w-[80%] items-center justify-around bg-white indent-8 outline-none">
          <CiSearch />
          <input
            className="w-[70%] bg-violet-100 outline-none"
            placeholder="Search"
          />
        </div>
        <FiHeart color="white" size={25} />
      </form>
    </div>
  );
};

export default Header;
