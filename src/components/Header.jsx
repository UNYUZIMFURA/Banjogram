import { FiHeart } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div className="flex items-center gap-4 h-[7.5vh] border-b px-4">
      <form className="flex items-center w-full justify-around">
        <div className="h-[2rem] outline-none indent-8 bg-white w-[80%] flex items-center justify-around">
          <CiSearch />
          <input className="bg-[red] w-[70%]" />
        </div>
        <FiHeart color="white" size={25} />
      </form>
    </div>
  );
};

export default Header;
